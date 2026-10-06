/* Classic scripts and relative asset paths support opening index.html directly. */
(() => {
  'use strict';
  const data = window.FOREVER_DATA;
  const classes = window.FOREVER_CLASSES;
  const calc = window.FOREVER_CALCULATOR;
  const $ = selector => document.querySelector(selector);
  const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const storageKey = `forever-${data.gameClass}-talents-v1`;
  const shareBase = 'https://jvmes-wow.github.io/forever-toolkit/talents.html';
  let points = {}, rules = { ...calc.defaults }, selected = calc.talents[0].id;
  let undoStack = [], query = '';
  let talentDrag = null, talentRepeat = null;
  let initialMessage = '';
  const sectionNav = '<nav class="section-nav" aria-label="Main navigation"><a href="./">Home</a><span aria-current="page">Talents</span><a href="abilities.html">Abilities</a><a href="raid.html">Raid</a><a href="analysis/">Analysis</a></nav>';
  const classOptions = Object.values(classes).map(item => `<option value="${item.gameClass}" ${item.gameClass === data.gameClass ? 'selected' : ''}>${item.name}</option>`).join('');
  document.title = `WoW Forever — ${data.name} Talents`;
  try {
    const isShared = /^#FF[234]\./.test(location.hash);
    const code = isShared ? location.hash.slice(1) : localStorage.getItem(storageKey);
    if (code) {
      const loaded = calc.decode(code);
      ({ points, rules } = loaded);
      initialMessage = [isShared ? 'Shared build loaded.' : '', loaded.notice].filter(Boolean).join(' ');
    }
  } catch (error) { initialMessage = `Starting a fresh build. ${error.message}`; }

  function save() {
    try { localStorage.setItem(storageKey, calc.encode(points, rules)); } catch (_) { /* File/private storage may be unavailable. */ }
  }
  function status(message) { $('#status').textContent = message; }
  function commit(next) {
    clearTalentTransfer();
    undoStack.push({ points: { ...points }, rules: { ...rules } });
    if (undoStack.length > 100) undoStack.shift();
    points = next;
    save(); update();
  }

  $('#root').innerHTML = `<main>
    <header><div class="brand"><span class="crest" aria-hidden="true">❦</span><div><small>WORLD OF WARCRAFT</small><strong>FOREVER</strong></div></div>${sectionNav}<label class="class-picker">Class <select id="class-picker">${classOptions}</select></label><button class="ghost" id="share">Share build ↗</button></header>
    <h1 class="sr-only">${data.name} talent calculator</h1>
    <div class="calculator-bar"><div class="toolbar"><label class="search-label">Find a talent <input id="search" type="search" placeholder="Name or effect…" autocomplete="off"></label><span class="editing-hint">Click to add · Right-click to refund<br>Drag 1 point · Tap destination to repeat</span><button class="ghost" id="undo">Undo</button><button class="ghost" id="reset">Reset build</button></div><div class="points"><span>Talent points</span><b id="total"></b><div class="meter"><i id="meter"></i></div><small id="remaining"></small></div></div>
    <p id="status" role="status" aria-live="polite"></p>
    <section class="workspace"><div class="trees-scroll"><div class="trees" id="trees" aria-label="All ${data.name} talent trees"></div></div><aside><section class="tooltip" id="inspector" aria-label="Talent details"></section><section class="summary"><p class="eyebrow">YOUR BUILD</p><div class="split" id="split"></div><div id="build-list"></div></section></aside></section>
    <footer class="page-foot">Forever ${data.name} · ${data.trees.map(tree => `${tree.talents.length} ${tree.name}`).join(' / ')} · Game artwork © Blizzard Entertainment</footer>
    <dialog id="build-dialog"><div class="dialog-head"><h2>Share your build</h2><button class="ghost" data-close="build-dialog" aria-label="Close build sharing">×</button></div><p>Anyone with this link can open your exact talent build.</p><label for="build-link">Build link</label><input id="build-link" type="url" readonly spellcheck="false"><div class="actions"><button id="copy-link">Copy build link</button></div><p id="share-status" role="status" aria-live="polite"></p><details class="build-code-options"><summary>Import / export build code</summary><label for="build-code">Build code</label><textarea id="build-code" rows="4" spellcheck="false"></textarea><div class="actions"><button id="copy-code" class="ghost">Copy code</button><button id="import-code" class="ghost">Import code</button></div></details></dialog>
  </main>`;
  $('#class-picker').onchange = event => {
    clearTalentTransfer();
    const gameClass = event.target.value;
    location.href = gameClass === 'druid' ? location.pathname : `${location.pathname}?class=${encodeURIComponent(gameClass)}`;
  };

  function renderTrees() {
    $('#trees').innerHTML = data.trees.map(tree => {
      const arrows = tree.talents.filter(t => t.prerequisite).map(t => {
        const parent = calc.byId[t.prerequisite];
        const x = (t.col - 0.5) * 100;
        return `<path data-prerequisite="${t.id}" d="M ${x} ${(parent.row - 1) * 100 + 93} V ${(t.row - 1) * 100 + 2}" marker-end="url(#arrow-${tree.id})"/>`;
      }).join('');
      return `<section class="tree-panel" style="--tree:${tree.color}" aria-labelledby="heading-${tree.id}"><div class="tree-head"><img class="tree-icon" src="${tree.icon}" alt=""><div><h2 id="heading-${tree.id}">${tree.name}</h2><small>${tree.talents.length} talents</small></div><b id="count-${tree.id}">0</b></div><div class="tree-grid"><svg class="connections" viewBox="0 0 400 700" preserveAspectRatio="none" aria-hidden="true"><defs><marker id="arrow-${tree.id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z"/></marker></defs>${arrows}</svg>${tree.talents.map(t => `<button class="node" data-id="${t.id}" style="grid-column:${t.col};grid-row:${t.row}" aria-describedby="inspector" title="${escape(t.name + '\n' + t.description)}"><span class="orb"><img src="${t.icon}" alt="" draggable="false"><b class="rank"></b></span><span class="node-name">${escape(t.name)}</span></button>`).join('')}</div></section>`;
    }).join('');
    $('#trees').querySelectorAll('.node').forEach(node => {
      const id = node.dataset.id;
      node.addEventListener('mouseenter', () => inspect(id));
      node.addEventListener('focus', () => inspect(id));
      node.setAttribute('aria-keyshortcuts', 'M Escape');
      node.addEventListener('click', event => {
        if (!event.shiftKey && talentRepeat?.to === id) moveTalentPoint(talentRepeat.from, id, talentRepeat.code);
        else learn(id, event.shiftKey ? -1 : 1);
      });
      node.addEventListener('contextmenu', event => { event.preventDefault(); learn(id, -1); });
      node.addEventListener('keydown', event => {
        if (event.key.toLowerCase() === 'm') {
          event.preventDefault();
          if (talentDrag) finishTalentTransfer(id);
          else beginTalentTransfer(id);
        } else if (['Backspace', 'Delete', '-'].includes(event.key)) { event.preventDefault(); learn(id, -1); }
      });
      node.addEventListener('dragstart', event => {
        if (!beginTalentTransfer(id)) { event.preventDefault(); return; }
        if (event.dataTransfer) { event.dataTransfer.effectAllowed = 'move'; event.dataTransfer.setData('text/plain', id); }
      });
      node.addEventListener('dragover', event => {
        if (!talentDrag) return;
        event.preventDefault();
        const result = proposedTalentTransfer(talentDrag.from, id, talentDrag.code);
        node.classList.toggle('transfer-target', !result.error);
        node.classList.toggle('transfer-invalid', Boolean(result.error));
        if (event.dataTransfer) event.dataTransfer.dropEffect = result.error ? 'none' : 'move';
        status(result.error || `Move 1 point to ${calc.byId[id].name}.`);
      });
      node.addEventListener('dragleave', () => {
        node.classList.toggle('transfer-target', false); node.classList.toggle('transfer-invalid', false);
      });
      node.addEventListener('drop', event => { if (talentDrag) { event.preventDefault(); finishTalentTransfer(id); } });
      node.addEventListener('dragend', () => {
        const cancelled = Boolean(talentDrag); clearTalentTransfer(false);
        if (cancelled) status('No points moved.');
      });
    });
  }
  function clearTalentTransfer(clearRepeat = true) {
    if (clearRepeat && (talentDrag || talentRepeat)) status('Point transfer ended.');
    talentDrag = null;
    if (clearRepeat) talentRepeat = null;
    $('#trees').querySelectorAll('.node').forEach(node => {
      for (const cls of ['transfer-source', 'transfer-target', 'transfer-invalid']) node.classList.toggle(cls, false);
      node.classList.toggle('transfer-repeat', node.dataset.id === talentRepeat?.to);
    });
  }
  function beginTalentTransfer(from) {
    clearTalentTransfer();
    if (!points[from]) { status(`${calc.byId[from].name} has no points to move.`); return false; }
    talentDrag = { from, code: calc.encode(points, rules) };
    $(`[data-id="${from}"]`).classList.toggle('transfer-source', true);
    status(`Move 1 point from ${calc.byId[from].name}. Drop on a talent, or focus it and press M. Escape cancels.`);
    return true;
  }
  function proposedTalentTransfer(from, to, code) {
    if (code !== calc.encode(points, rules)) return { error: 'Build changed; start the point transfer again.' };
    return calc.transfer(points, from, to, rules);
  }
  function finishTalentTransfer(to) {
    const moving = talentDrag; clearTalentTransfer();
    if (moving) moveTalentPoint(moving.from, to, moving.code);
  }
  function moveTalentPoint(from, to, code) {
    const result = proposedTalentTransfer(from, to, code);
    if (result.error) { status(result.error); return; }
    selected = to;
    commit(result.points);
    talentRepeat = { from, to, code: calc.encode(points, rules) };
    const target = $(`[data-id="${to}"]`);
    target.classList.toggle('transfer-repeat', true); target.focus({ preventScroll: true });
    status(`Moved 1 point from ${calc.byId[from].name} to ${calc.byId[to].name}. Tap ${calc.byId[to].name} to move another; Escape ends transfer.`);
  }
  const endRepeatOutside = event => {
    if (talentRepeat && event.target?.closest?.('.node[data-id]')?.dataset.id !== talentRepeat.to) clearTalentTransfer();
  };
  window.addEventListener('pointerdown', endRepeatOutside);
  window.addEventListener('click', endRepeatOutside);
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && (talentDrag || talentRepeat)) clearTalentTransfer();
  });
  function inspect(id) {
    selected = id;
    updateInspector();
    $('#trees').querySelectorAll('.node').forEach(node => node.classList.toggle('inspected', node.dataset.id === selected));
  }
  function updateInspector() {
    const t = calc.byId[selected];
    const rank = points[t.id] || 0, lock = calc.requirements(points, t, rules);
    const details = value => value?.length ? `<div class="spell-details">${value.map(item => `<span>${escape(item)}</span>`).join('')}</div>` : '';
    const description = value => value.split('\n\n').map(p => `<p class="effect">${escape(p)}</p>`).join('');
    const nextEffect = rank > 0 && rank < t.max ? `<section class="next-effect"><p class="effect-label">Next rank (${rank + 1}/${t.max})</p>${description(calc.descriptionAtRank(t, rank + 1))}</section>` : '';
    $('#inspector').innerHTML = `<small class="eyebrow">${escape(data.trees.find(tree => tree.id === t.tree).name)} · ROW ${t.row}</small><div class="talent-heading"><img src="${t.icon}" alt=""><h3>${escape(t.name)}</h3></div><div class="rank-line"><b>Rank ${rank}/${t.max}</b><span>${t.type}</span></div><p class="effect-label">${rank ? 'Current effect' : 'Rank 1 preview'}</p>${details(t.details)}${t.requires ? `<p class="form-requirement">Requires ${escape(t.requires)}</p>` : ''}${description(calc.descriptionAtRank(t, rank))}${nextEffect}${t.alternate ? `<h4>${escape(t.alternate.name)}</h4>${details(t.alternate.details)}<p class="form-requirement">Requires ${escape(t.alternate.requires)}</p>${description(t.alternate.description)}` : ''}${t.prerequisite ? `<p class="prerequisite">Requires <strong>${escape(calc.byId[t.prerequisite].name)}</strong></p>` : ''}${lock ? `<p class="lock-reason">${escape(lock)}</p>` : ''}<div class="actions"><button id="add-rank" ${rank === t.max || lock || calc.total(points) >= rules.budget ? 'disabled' : ''}>+ Add point</button><button id="refund-rank" class="ghost" ${!rank ? 'disabled' : ''}>− Refund</button></div>`;
    $('#add-rank').onclick = () => learn(t.id, 1);
    $('#refund-rank').onclick = () => learn(t.id, -1);
  }
  function learn(id, delta) {
    clearTalentTransfer();
    selected = id;
    const result = calc.change(points, id, delta, rules);
    if (result.error) { status(result.error); updateInspector(); return; }
    commit(result.points);
    status(`${calc.byId[id].name}: ${points[id] || 0}/${calc.byId[id].max}.`);
  }
  function update() {
    const used = calc.total(points);
    $('#total').innerHTML = `${used}<i>/ ${rules.budget}</i>`;
    $('#meter').style.width = `${Math.min(100, used / rules.budget * 100)}%`;
    $('#remaining').textContent = `${rules.budget - used} points remaining`;
    data.trees.forEach(t => {
      $(`#count-${t.id}`).textContent = calc.treeTotal(points, t.id);
      $(`#count-${t.id}`).setAttribute('aria-label', `${calc.treeTotal(points, t.id)} points in ${t.name}`);
    });
    $('#trees').querySelectorAll('.node').forEach(node => {
      const t = calc.byId[node.dataset.id], rank = points[t.id] || 0;
      const effect = calc.descriptionAtRank(t, rank);
      node.querySelector('.rank').textContent = `${rank}/${t.max}`;
      node.draggable = rank > 0;
      node.setAttribute('aria-label', `${t.name}, rank ${rank} of ${t.max}`);
      node.setAttribute('title', `${t.name}\n${rank ? `Rank ${rank}/${t.max}` : 'Rank 1 preview'}\n${effect}`);
      node.classList.toggle('learned', rank > 0);
      node.classList.toggle('maxed', rank === t.max);
      node.classList.toggle('budget-dim', used >= rules.budget && rank === 0);
      node.classList.toggle('locked', Boolean(calc.requirements(points, t, rules)));
      node.classList.toggle('inspected', t.id === selected);
      node.classList.toggle('search-dim', query !== '' && !`${t.name} ${effect}`.toLowerCase().includes(query));
    });
    $('#trees').querySelectorAll('[data-prerequisite]').forEach(path => {
      const parent = calc.byId[calc.byId[path.dataset.prerequisite].prerequisite];
      path.classList.toggle('ready', (points[parent.id] || 0) === parent.max);
    });
    $('#split').innerHTML = data.trees.map(t => `<div><span style="background:${t.color}"></span>${t.name}<b>${calc.treeTotal(points, t.id)}</b></div>`).join('');
    $('#build-list').innerHTML = used ? `<ul>${calc.talents.filter(t => points[t.id]).map(t => `<li><button data-inspect="${t.id}">${escape(t.name)}</button><b>${points[t.id]}/${t.max}</b></li>`).join('')}</ul>` : '<p class="empty">Choose talents from any tree. Hover or focus an icon to see its effect.</p>';
    $('#build-list').querySelectorAll('[data-inspect]').forEach(button => button.onclick = () => {
      inspect(button.dataset.inspect);
      $(`[data-id="${button.dataset.inspect}"]`).focus({ preventScroll: true });
    });
    $('#undo').disabled = !undoStack.length;
    $('#reset').disabled = !used;
    updateInspector();
  }
  $('#search').oninput = event => { clearTalentTransfer(); query = event.target.value.trim().toLowerCase(); update(); };
  $('#reset').onclick = () => { commit({}); status('Build reset. Undo restores it.'); };
  $('#undo').onclick = () => {
    clearTalentTransfer();
    const previous = undoStack.pop();
    if (!previous) return;
    ({ points, rules } = previous);
    save(); update(); status('Previous build restored.');
  };
  $('#share').onclick = () => {
    clearTalentTransfer();
    const code = calc.encode(points, rules);
    $('#build-code').value = code;
    $('#build-link').value = `${shareBase}${data.gameClass === 'druid' ? '' : `?class=${data.gameClass}`}#${code}`;
    $('#share-status').textContent = '';
    $('#build-dialog').showModal();
  };
  $('#copy-link').onclick = async () => {
    try { await navigator.clipboard.writeText($('#build-link').value); $('#share-status').textContent = 'Build link copied. Send it to open this build directly.'; }
    catch (_) { $('#build-link').focus(); $('#build-link').select(); $('#share-status').textContent = 'Press Command+C (Mac) or Ctrl+C to copy the selected build link.'; }
  };
  $('#copy-code').onclick = async () => {
    try { await navigator.clipboard.writeText($('#build-code').value); $('#share-status').textContent = 'Build code copied.'; }
    catch (_) { $('#build-code').focus(); $('#build-code').select(); $('#share-status').textContent = 'Press Command+C (Mac) or Ctrl+C to copy the selected code.'; }
  };
  $('#import-code').onclick = () => {
    clearTalentTransfer();
    try {
      const imported = calc.decode($('#build-code').value);
      undoStack.push({ points: { ...points }, rules: { ...rules } });
      ({ points, rules } = imported);
      save(); update(); $('#build-dialog').close(); status(['Build imported.', imported.notice].filter(Boolean).join(' '));
    } catch (error) { $('#share-status').textContent = error.message; }
  };
  window.addEventListener('hashchange', () => {
    clearTalentTransfer();
    if (!/^#FF[234]\./.test(location.hash)) return;
    try {
      const shared = calc.decode(location.hash.slice(1));
      undoStack.push({ points: { ...points }, rules: { ...rules } });
      ({ points, rules } = shared);
      save(); update(); status(['Shared build loaded.', shared.notice].filter(Boolean).join(' '));
    } catch (error) { status(`Could not load shared build. ${error.message}`); }
  });
  document.querySelectorAll('[data-close]').forEach(button => button.onclick = () => $(`#${button.dataset.close}`).close());
  renderTrees(); update(); status(initialMessage);
})();
