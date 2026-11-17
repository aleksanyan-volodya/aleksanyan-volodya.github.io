---
layout: page
title: Mini-LLaDA demo
permalink: /llada/
description: A 33M-parameter masked diffusion language model, running in your browser.
nav: false
---

<style>
  .llada label { display: block; font-weight: 600; margin: 0.6rem 0 0.2rem; }
  .llada textarea, .llada select { width: 100%; padding: 0.4rem; border: 1px solid var(--global-divider-color); border-radius: 6px;
    background: var(--global-bg-color); color: var(--global-text-color); font-size: 1rem; }
  .llada .row2 { display: flex; flex-wrap: wrap; gap: 0 1.2rem; }
  .llada .row2 > div { flex: 1 1 9rem; }
  .llada input[type=range] { width: 100%; }
  .llada button { margin-top: 1rem; width: 100%; padding: 0.7rem; font-size: 1.1rem; font-weight: 600; border: 0; border-radius: 8px;
    background: var(--global-theme-color); color: #fff; }
  .llada button:disabled { opacity: 0.5; }
  #status { margin: 0.8rem 0 0.4rem; color: var(--global-text-color-light); font-size: 0.9rem; min-height: 1.2em; }
  #out { white-space: pre-wrap; line-height: 1.7; font-size: 1.05rem; padding: 0.8rem; min-height: 6rem;
    border: 1px solid var(--global-divider-color); border-radius: 8px; }
  #out .lm { color: var(--global-text-color-light); opacity: 0.45; }
  #out .lg { color: var(--global-theme-color); font-weight: 600; }
  #out .ln { background: #fcd34d; color: #000; border-radius: 3px; }
</style>

LLaDA generates text by **unmasking**, not left to right. Generation starts from a fully masked
sequence (░░). At each step the model predicts every masked token at once and keeps the most
confident ones (highlighted in yellow). The model has 33M parameters and was trained from scratch on
TinyStories, so it writes short children's stories. It runs **on your device**: the first click downloads it (33 MB).
[Code on GitHub](https://github.com/aleksanyan-volodya/LLaDA_interactive).

<div class="llada">
  <label for="prompt">Beginning</label>
  <textarea id="prompt" rows="2">Once upon a time, there was a little cat named Tom.</textarea>
  <label for="suffix">Ending (optional: the model fills the middle)</label>
  <textarea id="suffix" rows="1" placeholder="e.g. From that day on, they were best friends."></textarea>
  <div class="row2">
    <div><label>Tokens to generate: <span id="length-v"></span></label><input id="length" type="range" min="8" max="160" value="64"></div>
    <div><label>Steps: <span id="steps-v"></span></label><input id="steps" type="range" min="1" max="160" value="32"></div>
    <div><label>Temperature: <span id="temp-v"></span></label><input id="temp" type="range" min="0" max="1.5" step="0.1" value="0.8"></div>
    <div><label for="strategy">Remasking</label><select id="strategy"><option value="confidence">confidence</option><option value="random">random</option></select></div>
  </div>
  <button id="go">Generate</button>
  <div id="status">Press Generate.</div>
  <div id="out"></div>
</div>

<script src="https://cdn.jsdelivr.net/npm/onnxruntime-web@1.22.0/dist/ort.wasm.min.js"></script>
<script src="{{ '/assets/llada/llada.js' | relative_url }}"></script>
