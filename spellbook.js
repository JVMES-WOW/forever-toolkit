(function(root) {
  'use strict';
  const fold = text => String(text).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[’‘]/g, "'").toLowerCase();
  const firstLevel = spell => Math.min(...spell.ranks.map(r => r.level).filter(n => n > 0));
  function filterSpells(book, spec = 'all', query = '', sort = 'level') {
    const tokens = fold(query).trim().split(/\s+/).filter(Boolean);
    return book.spells.filter(spell => (spec === 'all' || spell.spec === spec) && tokens.every(token =>
      fold(`${spell.name} ${spell.ranks.map(r => r.id).join(' ')}`).includes(token)))
      .sort((a, b) => book.specs.findIndex(s => s.id === a.spec) - book.specs.findIndex(s => s.id === b.spec)
        || (sort === 'name' ? 0 : firstLevel(a) - firstLevel(b)) || a.name.localeCompare(b.name));
  }
  const rankLabel = rank => rank.label || (rank.rank ? `Rank ${rank.rank}` : 'Unranked');
  const defaultRank = spell => [...spell.ranks].filter(r => r.rank > 0).sort((a, b) => b.rank - a.rank)[0] || spell.ranks[0];
  function readSelection(data, search) {
    const p = new URLSearchParams(search);
    const classId = Object.hasOwn(data.classes, p.get('class')) ? p.get('class') : 'druid';
    const book = data.classes[classId];
    const spec = book.specs.some(s => s.id === p.get('spec')) ? p.get('spec') : 'all';
    const query = (p.get('q') || '').slice(0, 120);
    const sort = p.get('sort') === 'name' ? 'name' : 'level';
    const spells = filterSpells(book, spec, query, sort);
    const spell = spells.find(s => s.key === p.get('spell') || s.ranks.some(r => String(r.id) === p.get('spell'))) || spells[0];
    const rank = spell && (spell.ranks.find(r => String(r.id) === p.get('rank')) || spell.ranks.find(r => String(r.id) === query.trim()) || defaultRank(spell));
    return { classId, spec, query, sort, spellKey: spell?.key || null, rankId: rank?.id || null };
  }
  function selectionQuery(state) {
    const p = new URLSearchParams({ class: state.classId });
    if (state.spec !== 'all') p.set('spec', state.spec);
    if (state.query) p.set('q', state.query);
    if (state.sort === 'name') p.set('sort', 'name');
    if (state.spellKey) p.set('spell', state.spellKey);
    if (state.rankId) p.set('rank', state.rankId);
    return '?' + p.toString();
  }
  function pageSpells(book, state, size = 12) {
    size = [6, 12, 24].includes(size) ? size : 12;
    const spells = filterSpells(book, state.spec, state.query, state.sort);
    const page = Math.floor(Math.max(0, spells.findIndex(s => s.key === state.spellKey)) / size);
    return { spells, page, pages: Math.max(1, Math.ceil(spells.length / size)), visible: spells.slice(page * size, (page + 1) * size) };
  }
  const api = { filterSpells, rankLabel, defaultRank, readSelection, selectionQuery, pageSpells };
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.ForeverSpellbook = api;
})(globalThis);
