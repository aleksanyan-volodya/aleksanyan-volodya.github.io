// Mini-LLaDA in the browser: byte-level BPE tokenizer + LLaDA sampler on top of onnxruntime-web.
// The model (33M parameters, int8) and the tokenizer are loaded once, then everything runs locally.
(function () {
  const BASE = document.currentScript.src.replace(/[^/]*$/, "");
  const $ = (id) => document.getElementById(id);

  // ---------- tokenizer (same as Hugging Face ByteLevel BPE) ----------
  let TOK = null;
  const byteToChar = {}, charToByte = {};
  (function () {
    const bs = [];
    for (let i = 33; i <= 126; i++) bs.push(i);
    for (let i = 161; i <= 172; i++) bs.push(i);
    for (let i = 174; i <= 255; i++) bs.push(i);
    const cs = bs.slice();
    let n = 0;
    for (let b = 0; b < 256; b++) if (!bs.includes(b)) { bs.push(b); cs.push(256 + n++); }
    bs.forEach((b, i) => { byteToChar[b] = String.fromCharCode(cs[i]); charToByte[String.fromCharCode(cs[i])] = b; });
  })();
  const PRE = /'s|'t|'re|'ve|'m|'ll|'d| ?\p{L}+| ?\p{N}+| ?[^\s\p{L}\p{N}]+|\s+(?!\S)|\s+/gu;

  function bpe(word) {
    let parts = Array.from(word);
    while (parts.length > 1) {
      let best = -1, rank = Infinity;
      for (let i = 0; i < parts.length - 1; i++) {
        const r = TOK.ranks.get(parts[i] + " " + parts[i + 1]);
        if (r !== undefined && r < rank) { rank = r; best = i; }
      }
      if (best < 0) break;
      parts.splice(best, 2, parts[best] + parts[best + 1]);
    }
    return parts;
  }

  function encode(text) {
    const ids = [];
    for (const piece of text.match(PRE) || []) {
      const mapped = Array.from(new TextEncoder().encode(piece), (b) => byteToChar[b]).join("");
      for (const t of bpe(mapped)) ids.push(TOK.vocab[t]);
    }
    return ids;
  }

  function decode(id) {
    const bytes = Uint8Array.from(Array.from(TOK.inv[id]), (c) => charToByte[c]);
    return new TextDecoder().decode(bytes);
  }

  // ---------- model ----------
  let session = null;

  async function fetchWithProgress(url, label) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
    const total = +res.headers.get("Content-Length") || 33.4e6;
    const reader = res.body.getReader();
    const chunks = [];
    let got = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      got += value.length;
      status(`${label}: ${(got / 1e6).toFixed(1)} / ${(total / 1e6).toFixed(0)} MB`);
    }
    const out = new Uint8Array(got);
    let o = 0;
    for (const c of chunks) { out.set(c, o); o += c.length; }
    return out;
  }

  async function load() {
    if (session) return;
    status("Loading tokenizer…");
    const t = await (await fetch(BASE + "tokenizer.json")).json();
    TOK = { vocab: t.vocab, inv: [], ranks: new Map(), mask: t.mask_id, eos: t.eos_id, seqLen: t.seq_len };
    for (const [k, v] of Object.entries(t.vocab)) TOK.inv[v] = k;
    t.merges.forEach((m, i) => TOK.ranks.set(m, i));
    const bytes = await fetchWithProgress(BASE + "model_int8.onnx", "Downloading the model (once)");
    status("Starting the model…");
    ort.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.22.0/dist/";
    session = await ort.InferenceSession.create(bytes, { executionProviders: ["wasm"] });
  }

  async function logitsOf(x) {
    const ids = new ort.Tensor("int64", BigInt64Array.from(x, BigInt), [1, x.length]);
    const out = await session.run({ ids });
    return out.logits.data; // Float32Array of size T * V
  }

  // ---------- sampler (same as sample.py: generate_steps) ----------
  function rng(seed) { // mulberry32
    return function () {
      seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  let runId = 0;

  async function generate() {
    const my = ++runId;
    $("go").disabled = true;
    try {
      await load();
      const prompt = $("prompt").value, suffix = $("suffix").value.trim();
      const length = +$("length").value, temperature = +$("temp").value, strategy = $("strategy").value;
      const p = prompt ? encode(prompt) : [];
      const s = suffix ? encode(" " + suffix) : [];
      let x = [...p, ...Array(length).fill(TOK.mask), ...s];
      if (x.length > TOK.seqLen) x = x.slice(0, TOK.seqLen);
      const given = x.map((id) => id !== TOK.mask);
      const nMasked = x.filter((id) => id === TOK.mask).length;
      const steps = Math.max(1, Math.min(+$("steps").value, nMasked));
      const counts = Array.from({ length: steps }, (_, i) => Math.floor(nMasked / steps) + (i < nMasked % steps ? 1 : 0));
      const rand = rng(Math.floor(Math.random() * 1e9));
      const V = TOK.inv.length, T = x.length;
      render(x, given, new Set());
      const t0 = performance.now();

      for (let step = 0; step < steps; step++) {
        if (my !== runId) return;
        status(`Step ${step + 1} / ${steps} · ${((performance.now() - t0) / 1000).toFixed(1)} s`);
        const lg = await logitsOf(x);
        const pred = new Int32Array(T), score = new Float64Array(T).fill(-Infinity);
        for (let i = 0; i < T; i++) {
          if (x[i] !== TOK.mask) continue;
          const row = lg.subarray(i * V, (i + 1) * V);
          row[TOK.mask] = -Infinity; // never predict [MASK]
          let mx = -Infinity;
          for (let v = 0; v < V; v++) if (row[v] > mx) mx = row[v];
          let z = 0;
          for (let v = 0; v < V; v++) z += Math.exp(row[v] - mx);
          let tok = 0;
          if (temperature > 0) { // sample from softmax(logits / temperature)
            let zt = 0;
            for (let v = 0; v < V; v++) zt += Math.exp((row[v] - mx) / temperature);
            let r = rand() * zt;
            for (tok = 0; tok < V - 1; tok++) { r -= Math.exp((row[tok] - mx) / temperature); if (r <= 0) break; }
          } else {
            for (let v = 1; v < V; v++) if (row[v] > row[tok]) tok = v;
          }
          pred[i] = tok;
          score[i] = strategy === "random" ? rand() : Math.exp(row[tok] - mx) / z;
        }
        const keep = Array.from(score.keys()).sort((a, b) => score[b] - score[a]).slice(0, counts[step]);
        for (const i of keep) x[i] = pred[i];
        render(x, given, new Set(keep));
        await new Promise((r) => setTimeout(r, 0)); // let the browser paint
      }
      status(`Done: ${steps} steps in ${((performance.now() - t0) / 1000).toFixed(1)} s. Change the text and press Generate again!`);
    } catch (e) {
      status("Error: " + e.message);
      console.error(e);
    } finally {
      if (my === runId) $("go").disabled = false;
    }
  }

  function render(x, given, fresh) {
    const out = $("out");
    out.textContent = "";
    x.forEach((id, i) => {
      const span = document.createElement("span");
      if (id === TOK.mask) { span.className = "lm"; span.textContent = " ░░"; }
      else if (id === TOK.eos) { span.textContent = "\n\n"; }
      else {
        span.textContent = decode(id);
        span.className = given[i] ? "lg" : fresh.has(i) ? "ln" : "";
      }
      out.appendChild(span);
    });
  }

  function status(msg) { $("status").textContent = msg; }

  for (const id of ["length", "steps", "temp"]) {
    const show = () => ($(id + "-v").textContent = $(id).value);
    $(id).addEventListener("input", show);
    show();
  }
  $("go").addEventListener("click", generate);
})();
