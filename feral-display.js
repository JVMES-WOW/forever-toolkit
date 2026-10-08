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
  const ACCESS = {
    advanced: ['tab-rotation', 'view-rotation', 'tab-optimization', 'view-optimization', 'tab-log', 'view-log',
      'subtab-diagnostics', 'pane-diagnostics', 'replay', 'overview-metrics', 'talent-overrides'],
    experimental: ['subtab-bear', 'pane-bear', 'subtab-bites', 'pane-bites', 'subtab-potions', 'pane-potions',
      'form-results', 'rotation-clip-results']
  };
  function preferences(raw = {}) {
    const showExperimental = raw?.showExperimental === true;
    return { version: 2, showDetails: raw?.showDetails === true,
      showAdvanced: raw?.showAdvanced === true || showExperimental, showExperimental };
  }
  function changePreference(current, key, value) {
    const next = { ...current, [key]: value === true };
    if (key === 'showAdvanced' && !value) next.showExperimental = false;
    return preferences(next);
  }
  function experimentalFeatures(c = {}) {
    const active = [];
    if (c.bearStrategy && c.bearStrategy !== 'disabled') active.push(c.bearStrategy === 'cycleCat' ? 'Clocked Cat rotation' : 'Bearweave');
    if (['clipRipShift', 'clipRipTea', 'clipRakeShift', 'clipRakeTea'].some(k => c[k])) active.push('Bleed clipping');
    if (c.tier1Feral5pc) active.push('Tier 1 override');
    if ((c.rakeTickAP != null && Number(c.rakeTickAP) !== 5.5) || c.rakeInitialIgnoreArmor === false
      || (c.jowChance != null && Number(c.jowChance) !== 50) || c.omenOfClarity === false || c.berserkGCD === false) active.push('Mechanics overrides');
    return active;
  }
  function dpsClass(value) { return !Number.isFinite(value) || Math.abs(value) < 0.005 ? 'dps-neutral' : value > 0 ? 'dps-positive' : 'dps-negative'; }
  function signed(value) { return !Number.isFinite(value) ? '—' : (Math.abs(value) < 0.005 ? '0.00' : (value > 0 ? '+' : '−') + Math.abs(value).toFixed(2)); }
  // Graph-only grouping. Keep direct/periodic accounting and saved results intact.
  function damageRows(damage, labels) {
    const groups = { auto: ['auto', 'windfury'], rake: ['rakeInitial', 'rakeTick'], bearAuto: ['bearAuto', 'bearWindfury'], casterAuto: ['casterAuto', 'casterWindfury'], lacerate: ['lacerate', 'lacerateTick'] };
    const groupId = id => Object.keys(groups).find(key => groups[key].includes(id)) || id;
    const ids = [...new Set(Object.keys(labels).filter(id => !['bearAuto', 'bearWindfury', 'casterAuto', 'casterWindfury', 'maul', 'lacerate', 'lacerateTick', 'primalBite'].includes(id) || damage?.bySource?.[id]?.events).map(groupId))];
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
    let prefs = preferences(), storage, pending = null, busy = false, currentConfig = {};
    try { storage = win.localStorage; prefs = preferences(JSON.parse(storage.getItem(KEY) || 'null')); } catch (_) { /* Clean defaults, including blocked storage. */ }
    const $ = id => doc.getElementById(id), dialog = $('display-settings');
    const optional = node => { if (node) node.setAttribute('data-detail', ''); };
    doc.querySelectorAll('.assumption:not([role="status"]), .panel-note:not([id]), .view-heading > div > p:not(.eyebrow), .sidebar-footnote, .estimate-label, .model-footer').forEach(optional);
    for (const id of NOTES) optional($(id));
    for (const selector of ['#gear-coverage', '#gear-contributions', '#gear-reconciliation', '#damage-provenance', '#import-reference', '#idol-benchmark-coverage', '#idol-benchmark-config']) optional(doc.querySelector(selector)?.closest('details'));
    optional($('gear-result-coverage')); optional($('damage-interval')); optional($('subtab-model'));
    for (const [id, columns] of Object.entries(COLUMNS)) for (const index of columns) $(id)?.closest('table')?.classList.add('detail-col-' + index);
    const gate = (node, level) => node?.setAttribute('data-access', level);
    for (const [level, ids] of Object.entries(ACCESS)) for (const id of ids) gate($(id), level);
    for (const name of ['seed', 'replayIteration', 'biteRank', 'faerieFireMiss']) gate(doc.querySelector(`[name="${name}"]`)?.closest('label'), 'advanced');
    gate($('fresh-seed')?.closest('.toggles'), 'advanced');
    gate(doc.querySelector('.overview-bottom'), 'advanced');
    gate(doc.querySelector('.damage-detail'), 'advanced');
    gate($('damage-target-summary'), 'advanced');
    gate(doc.querySelector('.gear-summary'), 'advanced');
    gate($('comparison-metrics')?.closest('article'), 'advanced');
    gate($('comparison-settings')?.closest('details'), 'advanced');
    gate($('comparison-breakdown')?.closest('details'), 'advanced');
    gate(doc.querySelector('#gear-terrain-options')?.closest('details'), 'advanced');
    gate(doc.querySelector('[data-go-subview="weights"]')?.closest('article'), 'advanced');
    gate(doc.querySelector('[data-go-subview="potions"]')?.closest('aside'), 'experimental');
    gate($('howling-idol')?.closest('details'), 'advanced');
    $('howling-idol')?.closest('details')?.setAttribute('data-equipment-overrides', '');
    for (const id of ['howling-idol', 'wolfshead-helm']) $(id)?.closest('label')?.setAttribute('data-totals-only', '');
    for (const name of ['tier1Feral5pc', 'jowChance', 'omenOfClarity', 'berserkGCD']) gate(doc.querySelector(`[name="${name}"]`)?.closest('label'), 'experimental');
    for (const id of ['rotation-bear-fields', 'rotation-clip-fields']) gate($(id)?.closest('details'), 'experimental');
    gate(doc.querySelector('[name="rakeTickAP"]')?.closest('details'), 'experimental');
    gate(doc.querySelector('[name="miss"]')?.closest('details'), 'advanced');
    doc.querySelector('[name="statMode"]')?.closest('details')?.setAttribute('data-totals-only', '');
    for (const id of ['damage-controls', 'baseline-controls']) $(id)?.setAttribute('data-gear-advanced', '');
    optional(doc.querySelector('[name="damageWeaponSource"]')?.closest('label'));
    const notice = doc.createElement('div'), noticeText = doc.createElement('span'), reveal = doc.createElement('button');
    notice.id = 'experimental-setup-notice'; notice.className = 'experimental-setup-notice'; notice.hidden = true;
    notice.setAttribute('role', 'status'); reveal.type = 'button'; reveal.textContent = 'Show controls';
    reveal.addEventListener('click', () => setPreference('showExperimental', true));
    notice.append(noticeText, reveal); doc.querySelector('.run-status')?.append(notice);
    function restriction(node) {
      if (!node) return null;
      if (!prefs.showExperimental && node.closest?.('[data-access="experimental"]')) return 'experimental';
      if (!prefs.showAdvanced && node.closest?.('[data-access="advanced"]')) return 'advanced';
      if (!prefs.showDetails && node.closest?.('[data-detail]')) return 'details';
      return null;
    }
    function syncSetup(c = currentConfig) {
      currentConfig = c;
      doc.body.classList.toggle('manual-stat-inputs', c.characterMode !== 'gear');
      doc.body.classList.toggle('resource-only', c.damageEnabled === false);
      const active = experimentalFeatures(c);
      if (doc.querySelector('[data-access="experimental"] input[id^="opt-"][id$="-on"]:checked')) active.push('Experimental search dimensions');
      notice.hidden = prefs.showExperimental || !active.length;
      noticeText.textContent = active.length ? `${active.join(' · ')} active · experimental controls hidden` : '';
    }
    function update() {
      for (const [key, name] of [['showDetails', 'details'], ['showAdvanced', 'advanced'], ['showExperimental', 'experimental']]) {
        doc.body.classList.toggle('show-' + name, prefs[key]); $('display-' + name).checked = prefs[key];
      }
      if (!prefs.showDetails && !$('pane-model').hidden) {
        $('pane-model').hidden = true; $('subtab-model').setAttribute('aria-selected', 'false'); $('subtab-model').tabIndex = -1;
        $('subtab-damage').click();
      }
      syncSetup();
      setBusy(busy);
      win.dispatchEvent(new win.CustomEvent('feral-display-change', { detail: { detailed: prefs.showDetails, advanced: prefs.showAdvanced, experimental: prefs.showExperimental } }));
      if (pending && prefs[{ details: 'showDetails', advanced: 'showAdvanced', experimental: 'showExperimental' }[pending.level]]) {
        const resume = pending.resume; pending = null;
        if (resume) { dialog.close(); resume(); }
      }
    }
    function open(request = false, resume) {
      const level = request === true ? 'details' : request || null;
      pending = level ? { level, resume } : null;
      $('display-link-note').hidden = !level;
      $('display-link-note').textContent = level === 'experimental' ? 'Enable experimental tools to open this section.'
        : level === 'advanced' ? 'Show advanced controls to open this section.' : 'Enable detailed information to view model notes and references.';
      if (!dialog.open) dialog.showModal(); $('display-' + (level || 'advanced')).focus();
    }
    $('display-open').addEventListener('click', () => open());
    $('display-close').addEventListener('click', () => dialog.close());
    // A queued close event from an earlier opening must not erase a new deep link.
    dialog.addEventListener('close', () => { if (!dialog.open) pending = null; });
    $('config')?.addEventListener('change', () => syncSetup());
    function setPreference(key, value) {
      if (busy && key !== 'showDetails' && !value) { update(); return; }
      prefs = changePreference(prefs, key, value);
      try { if (!storage) throw new Error('No storage'); storage.setItem(KEY, JSON.stringify(prefs)); $('display-status').textContent = ''; }
      catch (_) { $('display-status').textContent = 'Not saved to browser · available in this tab only.'; }
      update();
    }
    for (const [id, key] of [['details', 'showDetails'], ['advanced', 'showAdvanced'], ['experimental', 'showExperimental']]) {
      $('display-' + id).addEventListener('change', () => setPreference(key, $('display-' + id).checked));
    }
    function setBusy(value) {
      busy = value;
      for (const id of ['advanced', 'experimental']) $('display-' + id).disabled = busy && $('display-' + id).checked;
      $('display-busy').hidden = !busy;
    }
    update();
    return { enabled: () => prefs.showDetails, advanced: () => prefs.showAdvanced, experimental: () => prefs.showExperimental,
      allows: node => !restriction(node), restriction, open, syncSetup, setBusy };
  }
  const api = { KEY, NOTES, COLUMNS, ACCESS, preferences, changePreference, experimentalFeatures, init, dpsClass, signed, damageRows };
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.FOREVER_FERAL_DISPLAY = api;
})(globalThis);
