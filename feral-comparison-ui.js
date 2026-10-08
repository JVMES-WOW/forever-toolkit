(function (root) {
  'use strict';
  const format = n => Number.isFinite(n) ? n.toLocaleString(undefined, { maximumFractionDigits: 2 }) : '—';
  const signed = n => Number.isFinite(n) ? (Math.abs(n) < 0.005 ? '0' : (n > 0 ? '+' : '−') + format(Math.abs(n))) : '—';
  const color = n => !Number.isFinite(n) || Math.abs(n) < 0.005 ? 'dps-neutral' : n > 0 ? 'dps-positive' : 'dps-negative';
  function dpsSummary(state) {
    const current = state.current?.result.damage?.dps ?? null, reference = state.reference?.result.damage?.dps ?? null;
    const delta = Number.isFinite(current) && Number.isFinite(reference) ? current - reference : null;
    return { current, reference, delta, percent: delta != null && reference !== 0 ? delta / Math.abs(reference) * 100 : null };
  }
  function init(doc, api, labels, callbacks) {
    const $ = id => doc.querySelector('#' + id);
    let state = { current: null, reference: null };
    const element = (tag, text, cls) => { const node = doc.createElement(tag); if (text != null) node.textContent = text; if (cls) node.className = cls; return node; };
    function tableRow(values) { const row = element('tr'); values.forEach(v => row.appendChild(element('td', v))); return row; }
    const delta = row => `${signed(row.delta)}${row.unit === 'pp' ? ' pp' : ''}${row.percent == null || row.unit === 'pp' ? '' : ` (${signed(row.percent)}%)`}`;
    const absolute = (row, value) => format(value) + (row.unit === 'pp' && Number.isFinite(value) ? '%' : '');
    function describe(entry) {
      if (!entry) return 'Not saved yet';
      const r = entry.result, c = r.config;
      const interval = !doc.body.classList.contains('show-details') || r.damage?.se == null ? '' : ` · 95% interval ${format(Math.max(0, r.damage.dps - 1.96 * r.damage.se))}–${format(r.damage.dps + 1.96 * r.damage.se)} DPS`;
      return `${r.damage ? format(r.damage.dps) + ' DPS' : 'Damage off'} · ${format(r.fights)} fights · ${c.duration} ±${c.durationVariance}s · seed ${c.seed}${interval}`;
    }
    function renderGraph() {
      const { current, reference } = state;
      $('comparison-graph').replaceChildren(); $('comparison-breakdown').replaceChildren();
      if (!current || !reference) return;
      const mode = $('comparison-metric').value || 'damage';
      const rows = api.chartRows(current.result, reference.result, mode, labels);
      $('comparison-graph-note').textContent = mode === 'damage' && (!current.result.damage || !reference.result.damage)
        ? 'DPS is unavailable for a damage-off run; missing values are not zero. Casts and resource comparisons still work.'
        : mode === 'casts' ? 'Mean attempted casts per fight. Different fight lengths affect these totals; use CPM for a time-normalized comparison.'
        : mode === 'uptime' ? 'Full-fight uptime. Differences are percentage points, not relative percentages.'
        : mode === 'mana' ? 'Effective mana per minute of actual combat. Spending is negative; starting mana is not income.'
        : mode === 'damage' ? 'DPS uses each run’s own total damage divided by its total actual combat time.'
        : 'Rates use each run’s own total combat time. Casts include attempts, including avoided attacks.';
      const scale = Math.max(1, ...rows.flatMap(row => [Math.abs(row.current || 0), Math.abs(row.reference || 0)]));
      const bipolar = mode === 'mana';
      for (const row of rows) {
        const container = element('div', null, 'comparison-bar-row');
        container.appendChild(element('span', row.label, 'comparison-bar-label'));
        const tracks = element('div', null, 'comparison-tracks' + (bipolar ? ' bipolar' : ''));
        for (const [slot, value] of [['current', row.current], ['reference', row.reference]]) {
          const track = element('div', null, 'comparison-track');
          const fill = element('i', null, slot);
          fill.style.width = `${Number.isFinite(value) ? Math.abs(value) / scale * (bipolar ? 50 : 100) : 0}%`;
          fill.style[value < 0 ? 'right' : 'left'] = bipolar ? '50%' : '0';
          track.appendChild(fill); tracks.appendChild(track);
        }
        container.appendChild(tracks);
        container.appendChild(element('b', signed(row.delta) + (row.unit === 'pp' ? ' pp' : ''), 'comparison-delta' + (mode === 'damage' ? ' ' + color(row.delta) : '')));
        container.setAttribute('aria-label', `${row.label}: current ${format(row.current)}, reference ${format(row.reference)}, difference ${signed(row.delta)} ${row.unit}`);
        $('comparison-graph').appendChild(container);
        $('comparison-breakdown').appendChild(tableRow([row.label, absolute(row, row.reference), absolute(row, row.current), delta(row)]));
      }
      $('comparison-unit').textContent = rows[0]?.unit || '';
    }
    function render(next, options = {}) {
      state = next;
      const { current, reference } = state, busy = Boolean(options.busy);
      const summary = dpsSummary(state), deltaLabel = `${signed(summary.delta)} DPS${summary.percent == null ? '' : ` (${signed(summary.percent)}%)`}`;
      $('side-comparison').hidden = !reference;
      $('side-reference-label').textContent = reference ? `${reference.label} · reference DPS` : 'Reference DPS';
      $('side-reference-dps').textContent = format(summary.reference);
      $('side-dps-delta').textContent = deltaLabel;
      $('side-dps-delta').className = color(summary.delta);
      $('damage-comparison').hidden = !reference;
      $('damage-comparison').replaceChildren();
      if (reference) {
        const max = Math.max(1, summary.current || 0, summary.reference || 0);
        for (const [slot, entry] of [['current', current], ['reference', reference]]) {
          const row = element('div', null, 'dps-comparison-row');
          row.appendChild(element('span', (entry?.label || 'Current') + ' · ' + slot));
          const track = element('div', null, 'dps-comparison-track'), fill = element('i', null, slot);
          fill.style.width = `${Number.isFinite(summary[slot]) ? summary[slot] / max * 100 : 0}%`;
          track.appendChild(fill); row.appendChild(track); row.appendChild(element('b', format(summary[slot]) + ' DPS'));
          $('damage-comparison').appendChild(row);
        }
        $('damage-comparison').appendChild(element('strong', 'Δ ' + deltaLabel, color(summary.delta)));
      }
      $('comparison-save').disabled = busy || !current || Boolean(reference);
      $('comparison-swap').disabled = busy || !current || !reference;
      $('comparison-clear').disabled = busy || !reference;
      $('comparison-restore').disabled = busy || !current || !options.dirty;
      $('comparison-current-name').disabled = busy || !current;
      $('comparison-reference-name').disabled = busy || !reference;
      if (doc.activeElement !== $('comparison-current-name')) $('comparison-current-name').value = current?.label || '';
      if (doc.activeElement !== $('comparison-reference-name')) $('comparison-reference-name').value = reference?.label || '';
      $('comparison-current-meta').textContent = describe(current);
      $('comparison-reference-meta').textContent = describe(reference);
      $('comparison-draft-note').textContent = options.dirty ? 'Settings changed; completed results are unchanged. Your unrun settings are kept when you swap.' : 'Swap restores settings and results without rerunning.';
      const mechanicsDiffer = current && reference && current.result.mechanicsRevision !== reference.result.mechanicsRevision;
      $('comparison-persistence').textContent = [options.storageMessage, mechanicsDiffer ? 'Different mechanics revisions · historical results preserved. Rerun the older setup for a like-for-like comparison.' : ''].filter(Boolean).join(' ');
      $('comparison-empty').hidden = Boolean(current && reference);
      $('comparison-content').hidden = !current || !reference;
      $('comparison-headline').hidden = !current || !reference;
      if (!current || !reference) return;
      const rows = api.metrics(current.result, reference.result);
      $('comparison-headline').textContent = `${current.label} − ${reference.label}: ${signed(rows[0].delta)} DPS${rows[0].percent == null ? '' : ` (${signed(rows[0].percent)}%)`} · ${signed(rows[2].delta)} attack CPM`;
      $('comparison-headline').className = 'comparison-headline ' + color(rows[0].delta);
      $('comparison-current-legend').textContent = current.label + ' · current';
      $('comparison-reference-legend').textContent = reference.label + ' · reference';
      $('comparison-metrics').replaceChildren(...rows.map(row => tableRow([row.label, absolute(row, row.reference), absolute(row, row.current), delta(row)])));
      $('comparison-warning').textContent = 'Differences are current − reference, not proof of an improvement. Sampling intervals above describe each run, not a paired test or uncertainty in the damage model.' +
        (mechanicsDiffer ? ' These runs use different mechanics revisions.' : '') +
        ((current.result.config.windfury || reference.result.config.windfury) && current.result.windfuryModel !== reference.result.windfuryModel ? ' Windfury mechanics differ between these runs; rerun the older setup before evaluating gear or rotation changes.' : '') +
        (current.result.config.duration !== reference.result.config.duration || current.result.config.durationVariance !== reference.result.config.durationVariance ? ' Fight lengths differ: compare DPS/CPM rather than raw totals.' : '') +
        (current.result.config.seed === reference.result.config.seed ? ' These runs reuse a seed; do not treat their sampling errors as independent.' : ' These runs use different seeds.');
      const changes = api.settingsDifferences(current, reference);
      $('comparison-settings-count').textContent = `${changes.length} changed settings · completed runs`;
      $('comparison-settings').replaceChildren(...changes.map(row => tableRow([labels.settings[row.key] || row.key.replace(/([A-Z])/g, ' $1').replace(/^./, x => x.toUpperCase()), String(row.reference), String(row.current)])));
      renderGraph();
    }
    for (const action of ['save', 'swap', 'clear', 'restore']) $('comparison-' + action).addEventListener('click', callbacks[action]);
    for (const slot of ['current', 'reference']) for (const event of ['input', 'change']) $('comparison-' + slot + '-name').addEventListener(event, () => callbacks.rename(slot, $('comparison-' + slot + '-name').value));
    $('comparison-metric').addEventListener('change', renderGraph);
    return { render };
  }
  const api = { init, format, signed, dpsSummary };
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.FOREVER_FERAL_COMPARISON_UI = api;
})(typeof globalThis === 'object' ? globalThis : this);
