// Browser-wide presentation preferences. Not a combat setting or saved setup.
(function(root) {
  'use strict';
  const KEY = 'forever-feral.display.v1';
  const NOTES = ['comparison-draft-note', 'comparison-graph-note', 'comparison-warning', 'damage-summary', 'damage-target', 'weights-active', 'duration-summary',
    'mana-net-note', 'mana-rate-note', 'gear-mode-note', 'gear-ranking-note', 'gear-enchant-note', 'import-help',
    'talent-effects', 'idol-benchmark-note', 'wolfshead-benchmark-note', 'log-filter-note',
    'oom-detail', 'cp-cap-summary', 'optimizer-summary', 'trade-summary', 'import-warnings', 'import-applied-panel'];
  const COLUMNS = { 'ability-table': [4, 5, 6, 7], 'optimizer-table': [4], 'potion-table': [4],
    'weights-table': [3, 5, 7], 'idol-benchmark-table': [2, 5], 'wolfshead-benchmark-table': [5] };
  function dpsClass(value) { return !Number.isFinite(value) || Math.abs(value) < 0.005 ? 'dps-neutral' : value > 0 ? 'dps-positive' : 'dps-negative'; }
  function signed(value) { return !Number.isFinite(value) ? '—' : (Math.abs(value) < 0.005 ? '0.00' : (value > 0 ? '+' : '−') + Math.abs(value).toFixed(2)); }
  // Graph-only grouping. Keep direct/periodic accounting and saved results intact.
  function damageRows(damage, labels) {
    const groups = { auto: ['auto', 'windfury'], rake: ['rakeInitial', 'rakeTick'] };
    const ids = [...new Set(Object.keys(labels).map(id => id === 'windfury' ? 'auto' : ['rakeInitial', 'rakeTick'].includes(id) ? 'rake' : id))];
    return ids.map(id => {
      const sources = groups[id] || [id];
      const segments = sources.map(source => ({ id: source, label: labels[source],
        dps: damage?.bySource?.[source]?.dps ?? null, share: damage?.bySource?.[source]?.share ?? null }));
      const sum = field => {
        const values = segments.map(segment => segment[field]);
        return values.every(Number.isFinite) ? values.reduce((a, b) => a + b, 0) : null;
      };
      return { id, label: id === 'rake' ? 'Rake' : id === 'auto' ? 'Autos' : labels[id], dps: sum('dps'), share: sum('share'), segments };
    });
  }
  function init(doc, win) {
    let detailed = false, storage;
    try { storage = win.localStorage; detailed = JSON.parse(storage.getItem(KEY) || 'null')?.showDetails === true; } catch (_) { /* Clean defaults, including blocked storage. */ }
    const $ = id => doc.getElementById(id), dialog = $('display-settings');
    const optional = node => { if (node) node.setAttribute('data-detail', ''); };
    doc.querySelectorAll('.assumption:not([role="status"]), .panel-note:not([id]), .view-heading > div > p:not(.eyebrow), .sidebar-footnote, .estimate-label, .model-footer').forEach(optional);
    for (const id of NOTES) optional($(id));
    for (const selector of ['#gear-coverage', '#gear-contributions', '#gear-reconciliation', '#damage-provenance', '#import-reference', '#idol-benchmark-coverage', '#idol-benchmark-config']) optional(doc.querySelector(selector)?.closest('details'));
    optional($('gear-result-coverage')); optional($('damage-interval')); optional($('subtab-model'));
    for (const [id, columns] of Object.entries(COLUMNS)) for (const index of columns) $(id)?.closest('table')?.classList.add('detail-col-' + index);
    function update() {
      doc.body.classList.toggle('show-details', detailed); $('display-details').checked = detailed;
      if (!detailed && !$('pane-model').hidden) {
        $('pane-model').hidden = true; $('subtab-model').setAttribute('aria-selected', 'false'); $('subtab-model').tabIndex = -1;
        $('subtab-damage').click();
      }
      win.dispatchEvent(new win.CustomEvent('feral-display-change', { detail: { detailed } }));
    }
    function open(forNotes = false) { $('display-link-note').hidden = !forNotes; if (!dialog.open) dialog.showModal(); $('display-details').focus(); }
    $('display-open').addEventListener('click', () => open());
    $('display-close').addEventListener('click', () => dialog.close());
    $('display-details').addEventListener('change', () => {
      detailed = $('display-details').checked;
      try { if (!storage) throw new Error('No storage'); storage.setItem(KEY, JSON.stringify({ version: 1, showDetails: detailed })); $('display-status').textContent = ''; }
      catch (_) { $('display-status').textContent = 'Not saved to browser · available in this tab only.'; }
      update();
    });
    update();
    return { enabled: () => detailed, open };
  }
  const api = { KEY, NOTES, COLUMNS, init, dpsClass, signed, damageRows };
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.FOREVER_FERAL_DISPLAY = api;
})(globalThis);
