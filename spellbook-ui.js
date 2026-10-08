(() => {
  'use strict';
  const data = globalThis.FOREVER_SPELLBOOK;
  const api = globalThis.ForeverSpellbook;
  let state = api.readSelection(data, location.search);
  const $ = id => document.getElementById(id);
  const node = (tag, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  };
  const image = (src, size) => { const el = node('img'); el.src = src; el.alt = ''; el.width = size; el.height = size; return el; };
  const book = () => data.classes[state.classId];
  const selected = () => book().spells.find(s => s.key === state.spellKey);
  const narrowBook = matchMedia('(max-width: 650px)');
  const wideBook = matchMedia('(min-width: 1200px)');
  const pageSize = () => narrowBook.matches ? 6 : wideBook.matches ? 24 : 12;
  const remember = () => history.replaceState(null, '', location.pathname + api.selectionQuery(state) + location.hash);
  function reconcile() { state = api.readSelection(data, api.selectionQuery(state)); remember(); }
  function selectSpell(spell) {
    state.spellKey = spell.key;
    state.rankId = api.defaultRank(spell).id;
    const searchedRank = spell.ranks.find(r => String(r.id) === state.query.trim());
    if (searchedRank) state.rankId = searchedRank.id;
    remember();
    document.querySelectorAll('[data-spell]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.spell === state.spellKey)));
    renderDetails();
  }
  function renderClasses() {
    $('spell-classes').replaceChildren(...Object.entries(data.classes).map(([id, item]) => {
      const button = node('button', 'class-choice'); button.type = 'button';
      button.setAttribute('aria-pressed', String(id === state.classId));
      button.append(image(`class-icons/${id}.jpg`, 27), node('span', '', item.name));
      button.addEventListener('click', () => {
        if (state.classId === id) return;
        state = api.readSelection(data, `?class=${id}&sort=${state.sort}`);
        $('spell-search').value = ''; $('spell-list').scrollTop = 0;
        remember(); render(); $('spell-classes').querySelector('[aria-pressed="true"]').focus({ preventScroll: true });
      });
      return button;
    }));
  }
  function renderSpecs() {
    $('spell-specs').replaceChildren(...[{ id: 'all', name: 'All specs' }, ...book().specs].map(spec => {
      const button = node('button', 'spec-choice'); button.type = 'button';
      const icon = spec.id === 'all' ? 'tool-icons/spellbook.png' : book().specs.indexOf(spec) < 3
        ? `spec-icons/${state.classId}-${spec.id === 'feral-combat' ? 'feral' : spec.id}.jpg` : `class-icons/${state.classId}.jpg`;
      button.append(image(icon, 28), node('span', '', spec.name)); button.title = spec.name;
      button.setAttribute('aria-pressed', String(state.spec === spec.id));
      button.addEventListener('click', () => {
        state.spec = spec.id; reconcile(); renderSpecs(); renderList(); renderDetails(); $('spell-list').scrollTop = 0;
        $('spell-specs').querySelector('[aria-pressed="true"]').focus({ preventScroll: true });
      });
      return button;
    }));
  }
  function renderList() {
    const { spells, visible, page, pages } = api.pageSpells(book(), state, pageSize());
    $('spell-count').textContent = `${spells.length} ${spells.length === 1 ? 'spell' : 'spells'}`;
    $('book-title').textContent = state.spec === 'all' ? `${book().name} spells` : book().specs.find(s => s.id === state.spec).name;
    $('spell-page').textContent = spells.length ? `Page ${page + 1} of ${pages}` : 'No spells';
    $('spells-previous').disabled = page === 0; $('spells-next').disabled = page >= pages - 1;
    $('spell-list').replaceChildren();
    if (!spells.length) { $('spell-list').append(node('p', 'no-spells', 'No spells match. Try another name or spell ID.')); return; }
      for (const spell of visible) {
        const button = node('button', 'spell-row'); button.type = 'button'; button.dataset.spell = spell.key;
        button.setAttribute('aria-pressed', String(state.spellKey === spell.key));
        const copy = node('span', 'spell-row-copy'); copy.append(node('span', 'spell-name', spell.name));
        const levels = spell.ranks.map(r => r.level).filter(Boolean);
        const low = Math.min(...levels), high = Math.max(...levels);
        const levelText = levels.length ? `Lv ${low}${low !== high ? `–${high}` : ''}` : '';
        copy.append(node('small', '', [spell.talent ? 'Talent' : '', levelText].filter(Boolean).join(' · ')));
        const numericRanks = spell.ranks.filter(r => r.rank > 0).length;
        const variants = spell.ranks.length - numericRanks;
        let rankText = numericRanks ? `${numericRanks} ${numericRanks === 1 ? 'rank' : 'ranks'}` : '';
        if (variants && spell.ranks.length > 1) rankText += `${rankText ? ' + ' : ''}${variants} ${variants === 1 ? 'variant' : 'variants'}`;
        copy.append(node('small', 'rank-count', rankText));
        button.append(image(spell.icon, 40), copy);
        button.addEventListener('click', () => selectSpell(spell)); $('spell-list').append(button);
      }
  }
  function turnPage(offset) {
    const current = api.pageSpells(book(), state, pageSize());
    const next = current.spells[(current.page + offset) * pageSize()];
    if (!next) return;
    selectSpell(next); renderList();
  }
  function renderDetails() {
    const spell = selected();
    $('spell-detail-content').hidden = !spell; $('spell-detail-empty').hidden = Boolean(spell);
    if (!spell) return;
    const rank = spell.ranks.find(r => r.id === state.rankId) || api.defaultRank(spell);
    $('spell-icon').src = spell.icon; $('spell-name').textContent = spell.name;
    $('spell-category').textContent = `${book().name} · ${book().specs.find(s => s.id === spell.spec).name}${spell.talent ? ' · Talent' : ''}`;
    $('spell-rank-label').textContent = [api.rankLabel(rank), rank.level ? `Level ${rank.level}${spell.talent && rank === spell.ranks[0] ? '+' : ''}` : ''].filter(Boolean).join(' · ');
    const index = spell.ranks.indexOf(rank);
    $('rank-previous').disabled = index === 0; $('rank-next').disabled = index === spell.ranks.length - 1;
    $('rank-controls').hidden = spell.ranks.length === 1;
    $('rank-buttons').replaceChildren(...spell.ranks.map(r => {
      const b = node('button', 'rank-choice', r.rank > 0 ? String(r.rank) : api.rankLabel(r)); b.type = 'button';
      b.title = `${api.rankLabel(r)}${r.level ? ` · Level ${r.level}` : ''}`;
      b.setAttribute('aria-label', api.rankLabel(r)); b.setAttribute('aria-pressed', String(r === rank));
      b.addEventListener('click', () => changeRank(r.id)); return b;
    }));
    const fields = [['Cost', rank.cost], ['Range', rank.range], ['Cast', rank.cast], ['Cooldown', rank.cooldown]].filter(([, value]) => value);
    $('spell-facts').replaceChildren(...fields.map(([label, value]) => {
      const div = node('div'); div.append(node('dt', '', label), node('dd', '', value)); return div;
    }));
    $('spell-description').textContent = rank.description;
    $('spell-id').textContent = `#${rank.id}`;
    $('source-build').textContent = `Wowhead Forever · ${book().build} · ${data.checked}`;
    $('source-note').textContent = data.note;
    $('talent-link').href = `talents.html?class=${state.classId}`;
  }
  function changeRank(id) {
    const keepFocus = $('rank-buttons').contains(document.activeElement);
    state.rankId = id; remember(); renderDetails();
    if (keepFocus) $('rank-buttons').querySelector('[aria-pressed="true"]')?.focus({ preventScroll: true });
  }
  function stepRank(offset) {
    const spell = selected(); if (!spell) return;
    const current = spell.ranks.findIndex(r => r.id === state.rankId);
    const next = spell.ranks[current + offset]; if (next) changeRank(next.id);
  }
  function render() { $('spell-sort').value = state.sort; renderClasses(); renderSpecs(); renderList(); renderDetails(); }
  $('spell-search').value = state.query;
  $('spell-sort').addEventListener('change', event => { state.sort = event.target.value; reconcile(); renderList(); $('spell-list').scrollTop = 0; });
  $('spell-search').addEventListener('input', event => { state.query = event.target.value.slice(0, 120); state.rankId = null; reconcile(); renderList(); renderDetails(); });
  $('clear-search').addEventListener('click', () => { state.query = ''; $('spell-search').value = ''; reconcile(); renderList(); renderDetails(); $('spell-search').focus(); });
  $('rank-previous').addEventListener('click', () => stepRank(-1)); $('rank-next').addEventListener('click', () => stepRank(1));
  $('spells-previous').addEventListener('click', () => turnPage(-1)); $('spells-next').addEventListener('click', () => turnPage(1));
  $('spell-list').addEventListener('keydown', event => {
    if (!['PageUp', 'PageDown'].includes(event.key)) return;
    event.preventDefault(); turnPage(event.key === 'PageDown' ? 1 : -1); $('spell-list').focus({ preventScroll: true });
  });
  narrowBook.addEventListener('change', renderList);
  wideBook.addEventListener('change', renderList);
  $('rank-buttons').addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault(); stepRank(event.key === 'ArrowLeft' ? -1 : 1);
    $('rank-buttons').querySelector('[aria-pressed="true"]')?.focus();
  });
  window.addEventListener('popstate', () => { state = api.readSelection(data, location.search); $('spell-search').value = state.query; render(); });
  render();
})();
