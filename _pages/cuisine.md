---
layout: page
title: cuisine
permalink: /cuisine/
description: Recettes végétariennes du monde entier.
nav: true
nav_order: 4
---

<style>
  .cuisine-search {
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    padding: 12px 18px;
    display: flex; gap: 10px; align-items: center;
    margin-bottom: 16px;
    box-shadow: 0 8px 22px -20px rgba(42, 38, 34, .55);
  }
  .cuisine-search input {
    flex: 1; border: none; background: transparent;
    font-family: "Space Mono", monospace; font-size: .92rem;
    color: var(--global-text-color); outline: none;
  }
  .cuisine-search input::placeholder { color: var(--global-text-color-light); }

  .cuisine-filters { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; margin-bottom: 14px; }
  .cuisine-filters .flabel {
    font-family: "Space Mono", monospace; font-size: .68rem;
    color: var(--global-text-color-light); text-transform: uppercase; letter-spacing: .12em;
  }
  .cuisine-fchip {
    font-family: "Space Mono", monospace; padding: 7px 14px; border-radius: 999px;
    border: 1px solid var(--global-divider-color); background: transparent;
    color: var(--global-text-color-light); font-size: .78rem; cursor: pointer; transition: all .18s;
  }
  .cuisine-fchip:hover { border-color: var(--global-theme-color); color: var(--global-theme-color); }
  .cuisine-fchip.on { background: var(--global-text-color); color: var(--global-bg-color); border-color: var(--global-text-color); }

  .cuisine-ing-filter { margin-bottom: 18px; }
  .cuisine-ing-filter input {
    width: 260px; max-width: 100%;
    background: var(--global-card-bg-color); border: 1px solid var(--global-divider-color);
    border-radius: 8px; padding: 8px 13px;
    font-family: "Space Mono", monospace; font-size: .8rem; color: var(--global-text-color); outline: none;
  }
  .cuisine-ing-filter input:focus { border-color: var(--global-theme-color); }

  .c-ac-wrap { position: relative; display: inline-block; }
  .c-ac-drop {
    position: absolute; top: calc(100% + 4px); left: 0; right: 0;
    background: var(--global-card-bg-color); border: 1px solid var(--global-divider-color);
    border-radius: 8px; box-shadow: 0 8px 24px rgba(42, 38, 34, .14);
    z-index: 200; max-height: 200px; overflow-y: auto; display: none;
  }
  .c-ac-drop.open { display: block; }
  .c-ac-item { padding: 8px 14px; cursor: pointer; font-family: "Space Mono", monospace; font-size: .8rem; color: var(--global-text-color); transition: background .1s; }
  .c-ac-item:hover { background: var(--global-bg-color); }

  .c-active-ings { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px; }
  .c-ing-pill {
    display: inline-flex; align-items: center; gap: 5px;
    background: var(--global-theme-color); color: #f3ecdf;
    padding: 4px 11px; border-radius: 999px; font-family: "Space Mono", monospace; font-size: .72rem;
  }
  .c-ing-pill span { cursor: pointer; opacity: .8; font-size: .95rem; }
  .c-ing-pill span:hover { opacity: 1; }

  .cuisine-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-top: 10px; }

  .c-card {
    background: var(--global-card-bg-color); border: 1px solid var(--global-divider-color);
    border-radius: 8px; padding: 20px; box-shadow: 0 10px 26px -22px rgba(42, 38, 34, .6);
    transition: transform .3s cubic-bezier(.2, .8, .2, 1), box-shadow .3s;
    display: flex; flex-direction: column; gap: 11px;
  }
  .c-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px -26px rgba(42, 38, 34, .55); }
  .c-card-title { font-family: "Newsreader", Georgia, serif; font-size: 1.2rem; font-weight: 600; color: var(--global-text-color); line-height: 1.25; }
  .c-card-cuisine { font-family: "Space Mono", monospace; font-size: .7rem; letter-spacing: .06em; text-transform: uppercase; color: var(--global-text-color-light); margin-top: 3px; }
  .c-tags { display: flex; gap: 6px; flex-wrap: wrap; }
  .c-tag {
    font-family: "Space Mono", monospace; font-size: .64rem; letter-spacing: .04em;
    padding: 3px 9px; border-radius: 999px;
    background: var(--global-bg-color); border: 1px solid var(--global-divider-color);
  }
  .c-tag-vegan   { color: #6f7d3a; }
  .c-tag-dessert { color: #b07a2a; }
  .c-tag-quick   { color: #c25a3a; }
  .c-tag-slow    { color: #8a5a3a; }
  .c-tag-oven    { color: #a83a2a; }
  .c-tag-spicy   { color: #c2622a; }
  .c-ings { display: flex; gap: 6px; flex-wrap: wrap; }
  .c-ichip { font-family: "Space Mono", monospace; font-size: .7rem; padding: 3px 9px; background: var(--global-bg-color); border: 1px solid var(--global-divider-color); border-radius: 999px; color: var(--global-text-color-light); }
  .c-notes { font-size: .9rem; line-height: 1.5; color: var(--global-text-color); opacity: .85; }
  .c-links { display: flex; gap: 8px; flex-wrap: wrap; }
  .c-link {
    display: inline-flex; align-items: center; gap: 4px;
    font-family: "Space Mono", monospace; font-size: .74rem; padding: 5px 11px; border-radius: 8px;
    background: transparent; color: var(--global-text-color); text-decoration: none;
    border: 1px solid var(--global-divider-color); transition: all .15s;
  }
  .c-link:hover { color: var(--global-theme-color); border-color: var(--global-theme-color); }
  .c-empty { text-align: center; padding: 48px 24px; color: var(--global-text-color-light); grid-column: 1 / -1; }
  .c-empty h3 { font-family: "Newsreader", Georgia, serif; font-size: 1.15rem; margin-bottom: 6px; color: var(--global-text-color); }
  .c-count { font-family: "Space Mono", monospace; font-size: .72rem; letter-spacing: .04em; color: var(--global-text-color-light); }
</style>

<div class="cuisine-search">
  <span style="color:var(--global-text-color-light)">🔍</span>
  <input type="text" id="cSearch" placeholder="Rechercher un plat, un ingrédient, un pays…" oninput="cRender()" />
  <button class="cuisine-fchip" onclick="cRandom()" style="border:none">🎲 Aléatoire</button>
</div>

<div class="cuisine-filters">
  <span class="flabel">Filtrer :</span>
  <button class="cuisine-fchip on" onclick="cSetTag('all',this)">Tout</button>
  <button class="cuisine-fchip" onclick="cSetTag('vegan',this)">🌿 Vegan</button>
  <button class="cuisine-fchip" onclick="cSetTag('dessert',this)">🍰 Dessert</button>
  <button class="cuisine-fchip" onclick="cSetTag('quick',this)">⚡ Rapide</button>
  <button class="cuisine-fchip" onclick="cSetTag('slow',this)">🕐 Cuisson lente</button>
  <button class="cuisine-fchip" onclick="cSetTag('oven',this)">🔥 Au four</button>
  <button class="cuisine-fchip" onclick="cSetTag('spicy',this)">🌶 Épicé</button>
  <span style="flex:1"></span>
  <span class="c-count" id="cCount"></span>
</div>

<div class="cuisine-ing-filter">
  <div class="c-ac-wrap">
    <input type="text" id="cIngFI" placeholder="Filtrer par ingrédient…"
      oninput="cIngFilterInput()" onfocus="cIngFilterInput()"
      onblur="setTimeout(()=>cCloseAC('cIngFD'),160)" autocomplete="off" />
    <div class="c-ac-drop" id="cIngFD"></div>
  </div>
  <div class="c-active-ings" id="cActiveIngF"></div>
</div>

<div class="cuisine-grid" id="cGrid"></div>

<script>
(function() {
  const recipes = {{ site.data.recettes | jsonify }};

  let tagFilter = 'all';
  let ingFilters = [];

  const TAG_CFG = {
    vegan:  {l:'Vegan',         c:'c-tag-vegan'},
    dessert:{l:'Dessert',       c:'c-tag-dessert'},
    quick:  {l:'Rapide',        c:'c-tag-quick'},
    slow:   {l:'Cuisson lente', c:'c-tag-slow'},
    oven:   {l:'Au four',       c:'c-tag-oven'},
    spicy:  {l:'Épicé',         c:'c-tag-spicy'},
  };

  function esc(s) {
    const d = document.createElement('div');
    d.textContent = s || '';
    return d.innerHTML;
  }

  function cCloseAC(id) { document.getElementById(id).classList.remove('open'); }

  // Collect all unique ingredients for autocomplete
  const allIngs = [...new Set(recipes.flatMap(r => (r.ingredients || []).map(i => i.toLowerCase())))].sort();

  window.cSetTag = function(f, el) {
    tagFilter = f;
    document.querySelectorAll('.cuisine-fchip').forEach(c => c.classList.remove('on'));
    el.classList.add('on');
    cRender();
  };

  window.cRender = function() {
    const q = document.getElementById('cSearch').value.toLowerCase().trim();
    const grid = document.getElementById('cGrid');

    const filtered = recipes.filter(r => {
      if (tagFilter !== 'all' && !(r.tags || []).includes(tagFilter)) return false;
      if (ingFilters.length) {
        const ri = (r.ingredients || []).map(x => x.toLowerCase());
        if (!ingFilters.every(f => ri.some(x => x.includes(f)))) return false;
      }
      if (q) {
        const hay = [r.name, r.country, r.region, ...(r.ingredients || []), r.notes || ''].join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    const n = filtered.length;
    document.getElementById('cCount').textContent = n + ' recette' + (n !== 1 ? 's' : '');
    grid.innerHTML = '';

    if (!n) {
      grid.innerHTML = '<div class="c-empty">' +
        '<div style="font-size:2.5rem;margin-bottom:12px">' + (recipes.length ? '🔍' : '🍽') + '</div>' +
        '<h3>' + (recipes.length ? 'Aucune recette trouvée' : 'Aucune recette pour le moment') + '</h3>' +
        '<p>' + (recipes.length ? 'Essayez une autre recherche ou un autre filtre.' : '') + '</p></div>';
      return;
    }

    filtered.sort((a, b) => (a.name || '').localeCompare(b.name || '', 'fr')).forEach(r => {
      grid.appendChild(makeCard(r));
    });
  };

  function makeCard(r) {
    const d = document.createElement('div');
    d.className = 'c-card';

    const tags = (r.tags || []).map(t => {
      const c = TAG_CFG[t];
      return c ? '<span class="c-tag ' + c.c + '">' + c.l + '</span>' : '';
    }).join('');

    const ings = (r.ingredients || []).map(i => '<span class="c-ichip">' + esc(i) + '</span>').join('');

    const links = (r.links || []).map(l => {
      if (!l.url) return '';
      const yt = l.url.includes('youtube') || l.url.includes('youtu.be');
      return '<a class="c-link" href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer">' +
        (yt ? '▶' : '🔗') + ' ' + esc(l.label || l.url) + '</a>';
    }).join('');

    const cuisine = [r.country, r.region].filter(Boolean).join(' · ');

    d.innerHTML =
      '<div>' +
        '<div class="c-card-title">' + esc(r.name) + '</div>' +
        (cuisine ? '<div class="c-card-cuisine">' + esc(cuisine) + '</div>' : '') +
      '</div>' +
      (tags ? '<div class="c-tags">' + tags + '</div>' : '') +
      (ings ? '<div class="c-ings">' + ings + '</div>' : '') +
      (r.notes ? '<div class="c-notes">' + esc(r.notes) + '</div>' : '') +
      (links ? '<div class="c-links">' + links + '</div>' : '');

    return d;
    
  }

  // Ingredient filter
  window.cIngFilterInput = function() {
    const v = document.getElementById('cIngFI').value.toLowerCase().trim();
    const dd = document.getElementById('cIngFD');
    if (!v) { dd.classList.remove('open'); return; }
    const m = allIngs.filter(i => i.startsWith(v) && !ingFilters.includes(i)).slice(0, 8);
    if (!m.length) { dd.classList.remove('open'); return; }
    dd.innerHTML = m.map(x => '<div class="c-ac-item" onmousedown="cAddIngFilter(\'' + esc(x) + '\')">' + esc(x) + '</div>').join('');
    dd.classList.add('open');
  };

  window.cAddIngFilter = function(ing) {
    if (!ingFilters.includes(ing)) { ingFilters.push(ing); renderIngFilters(); cRender(); }
    document.getElementById('cIngFI').value = '';
    cCloseAC('cIngFD');
  };

  window.cRemoveIngFilter = function(ing) {
    ingFilters = ingFilters.filter(x => x !== ing);
    renderIngFilters(); cRender();
  };

  function renderIngFilters() {
    document.getElementById('cActiveIngF').innerHTML = ingFilters.map(i =>
      '<span class="c-ing-pill">' + esc(i) + '<span onclick="cRemoveIngFilter(\'' + esc(i) + '\')">×</span></span>'
    ).join('');
  }

  window.cRandom = function() {
    const cards = document.querySelectorAll('.c-card');
    if (!cards.length) return;
    const pick = cards[Math.floor(Math.random() * cards.length)];
    pick.scrollIntoView({ behavior: 'smooth', block: 'center' });
    pick.style.outline = '2px solid var(--global-theme-color)';
    pick.style.outlineOffset = '3px';
    setTimeout(() => { pick.style.outline = ''; pick.style.outlineOffset = ''; }, 2000);
  };

  window.cCloseAC = cCloseAC;

  document.addEventListener('click', e => {
    if (!e.target.closest('#cIngFI') && !e.target.closest('#cIngFD')) cCloseAC('cIngFD');
  });

  // Initial render
  cRender();
})();
</script>
