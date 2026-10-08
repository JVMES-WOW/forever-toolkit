(function(root) {
  'use strict';
  const signed = n => `${n >= 0 ? '+' : '−'}${Math.abs(n).toFixed(4)}`;
  const short = n => Number(n.toFixed(4)).toString();
  function cells(row, api) {
    const range = row.range;
    const interval = row.cap ? (range ? `${short(range.from)}% → ${short(range.to)}% (${signed(range.fromOffset)} → ${signed(range.toOffset)} from measured baseline)` : 'Unavailable with fixed buffs/talents') : `+${short(row.amount)}`;
    const change = p => p.amount ? `${p.amount > 0 ? '+' : '−'}${short(Math.abs(p.amount))}: ${signed(p.weight)} DPS [${signed(p.low)}, ${signed(p.high)}]` : 'No removable baseline stat';
    return [api.STATS[row.stat].label, api.STATS[row.stat].unit, interval,
      row.basis === 'unavailable' ? '—' : row.weight.toFixed(4),
      row.basis === 'unavailable' ? '—' : `${row.low.toFixed(4)} to ${row.high.toFixed(4)}`,
      [change(row.plus), ...(row.minus ? [change(row.minus)] : [])].join('\n'),
      row.cap ? `Measured baseline ${short(row.cap.current)}% · cap ${row.cap.limit}%. ${row.cap.current > row.cap.limit ? `${short(row.cap.current - row.cap.limit)} points over cap. ` : ''}${row.basis === 'unavailable' ? 'Fixed buffs/talents prevent a below-cap probe; no weight measured.' : 'Weight uses only the useful, below-cap interval.'}${row.stat === 'hit' ? ' First 1% hit does not reduce boss miss.' : row.stat === 'spellHit' ? ' Spell miss retains its 1% floor; only own Faerie Fire is affected.' : ''}` : 'Forward estimate; other nonlinearities may remain.'];
  }
  function init(doc, api, callbacks, storage) {
    const $ = s => doc.querySelector(s), KEY = 'forever-feral.dps-weights.v1';
    let job = null, result = null, applied = api.defaults?.() || null, snapshot = '', ticket = 0, nextIteration = 200001, storageNote = '';
    const same = () => { try { return snapshot === api.signature(callbacks.config()); } catch (_) { return false; } };
    const persist = () => { try { if (applied) storage.setItem(KEY, JSON.stringify(applied)); storageNote = ''; } catch (_) { storageNote = 'Browser storage unavailable; weights last for this tab only.'; } };
    try { const saved = storage?.getItem(KEY); if (saved && saved.length < 250000) applied = api.validate(JSON.parse(saved)); }
    catch (_) { storageNote = 'Saved DPS weights could not be read; generate a fresh set.'; }
    if (applied?.lastIteration) nextIteration = Math.max(nextIteration, applied.lastIteration + 1);
    function sync() {
      const busy = callbacks.busy();
      $('#weights-generate').disabled = busy; $('#weights-stop').disabled = !job;
      $('#weights-use').disabled = busy || !result || result.kind === 'preset' || !same();
      $('#weights-default').disabled = busy;
      $('#weights-iterations').disabled = busy; $('#weights-scale').disabled = busy;
      let stale = false; try { stale = applied && (applied.kind === 'preset' || applied.signature !== api.signature(callbacks.config())); } catch (_) { stale = Boolean(applied); }
      $('#weights-active').textContent = (applied?.kind === 'preset' ? `Using your supplied default DPS weights · seed ${applied.seed} · ${applied.iterations} fights per setting. Original full setup/mechanics and iteration range were not included in the export: these are reference estimates, not verified weights for this setup. Cap-aware ranking uses your current gear and buffs. Generate weights to personalize.`
        : applied ? `Gear ranking uses DPS weights from seed ${applied.seed}, ${applied.iterations} paired fights per setting.${applied.version === 1 ? ' Legacy forward-only weights: regenerate for below-cap measurements and cap-aware rankings.' : ' Hit and expertise estimates stop at their caps.'}${stale ? ' Setup or mechanics changed since generation—ranking is a local estimate; regenerate to update it.' : ''}` : 'No generated weights applied. Gear picker defaults to highest item level first until you generate and use DPS weights.') + (storageNote ? ' ' + storageNote : '');
      $('#weights-badge').textContent = [applied?.kind === 'preset' ? 'Reference weights' : applied ? 'Generated weights' : 'No weights', ...(stale ? ['Weights need updating'] : []), ...(storageNote ? [storageNote] : [])].join(' · ');
      if (result && result.kind !== 'preset' && !same() && !job) $('#weights-status').textContent = 'Settings or mechanics changed. Generate again before using this result.';
    }
    function stop() {
      if (!job) return; ticket++; job.return(); job = null; result = null;
      callbacks.setBusy(false); $('#weights-status').textContent = 'Stopped. Incomplete weights were not applied; previous rankings are unchanged.'; sync();
    }
    function render() {
      $('#weights-table').replaceChildren(...result.rows.map(row => {
        const tr = doc.createElement('tr');
        for (const value of cells(row, api)) {
          const td = doc.createElement('td');
          if (!String(value).includes('[')) td.textContent = value;
          else for (const part of String(value).split(/(\[[^\]]*\])/g)) {
            const span = doc.createElement('span'); span.textContent = part;
            if (part.startsWith('[')) span.setAttribute('data-detail', '');
            td.appendChild(span);
          }
          tr.appendChild(td);
        }
        return tr;
      }));
      $('#weights-export').value = JSON.stringify({ name: 'Generated Feral DPS weights', version: 2, unit: 'DPS per stat unit (percent stats per percentage point)',
        hitNote: 'hit is the melee component; spellHit is separate. Shared hit rating benefits both, only up to each cap. Do not apply below-cap weights to over-cap points.',
        stats: Object.fromEntries(result.rows.map(r => [r.stat, r.basis === 'unavailable' ? null : r.weight])),
        measurements: result.rows, seed: result.seed, iterations: result.iterations }, null, 2);
      $('#weights-status').textContent = result.kind === 'preset' ? 'Supplied default weights. The table preserves the original measurements and uncertainty, not measurements of your current setup.'
        : `Complete: baseline ${result.baselineDps.toFixed(2)} DPS · ${result.completedFights.toLocaleString()} fights · seed ${result.seed} · paired iterations ${result.firstIteration}–${result.lastIteration}. Review before using for gear ranking.`;
    }
    function start() {
      if (callbacks.busy()) return;
      try {
        const c = callbacks.config(), iterations = Number($('#weights-iterations').value), scale = Number($('#weights-scale').value);
        snapshot = api.signature(c); result = null;
        job = api.generate(c, { iterations, scale, firstIteration: nextIteration });
        const first = job.next(); // Validate before locking other controls.
        nextIteration += iterations; const mine = ++ticket;
        $('#weights-table').replaceChildren(); $('#weights-export').value = '';
        callbacks.setBusy(true);
        function pump(frame = null) {
          if (mine !== ticket || !job) return;
          try {
            for (let i = 0; i < 12; i++) {
              const next = frame || job.next(); frame = null;
              if (next.done) {
                result = next.value; job = null; render(); callbacks.setBusy(false); sync(); return;
              }
              $('#weights-progress').max = next.value.totalFights; $('#weights-progress').value = next.value.completedFights;
              $('#weights-status').textContent = `${next.value.phase} · ${next.value.completedFights.toLocaleString()} / ${next.value.totalFights.toLocaleString()} fights`;
            }
            (callbacks.schedule || setTimeout)(pump, 0);
          } catch (error) { job = null; result = null; callbacks.setBusy(false); $('#weights-status').textContent = error.message; sync(); }
        }
        pump(first);
      } catch (error) { job = null; $('#weights-status').textContent = error.message; sync(); }
    }
    $('#weights-generate').addEventListener('click', start); $('#weights-stop').addEventListener('click', stop);
    $('#weights-default').addEventListener('click', () => {
      if (callbacks.busy()) return;
      applied = api.defaults(); result = applied; snapshot = ''; render(); persist(); callbacks.changed(); sync();
    });
    $('#weights-use').addEventListener('click', () => {
      if (callbacks.busy() || !result || result.kind === 'preset' || !same()) { sync(); return; }
      applied = api.validate(result); persist(); callbacks.changed(); sync();
      $('#weights-status').textContent = 'DPS weights applied to gear ranking. No items, combat settings, or simulation results changed.';
    });
    if (applied?.kind === 'preset') { result = applied; render(); }
    if (api.idolBenchmarks) {
      const b = api.idolBenchmarks;
      $('#idol-benchmark-note').textContent = `${b.iterations.toLocaleString()} paired fights per setting · ${b.completedFights.toLocaleString()} fights total · seed ${b.config.seed} · ${b.config.duration} ±${b.config.durationVariance}s · iterations ${b.firstIteration}–${b.lastIteration}. Recorded reference equipment, talents, buffs and rotation—not necessarily the latest defaults. These hardcoded reference values do not change with your current setup. The method below describes the defaults at the time of testing. ${b.method}`;
      $('#idol-benchmark-table').replaceChildren(...b.rows.map(row => {
        const tr = doc.createElement('tr'), entry = b.coverage.find(x => x.id === row.id);
        for (const value of [entry.name, entry.effect, row.dps.toFixed(2), signed(row.gain), `${signed(row.low)} to ${signed(row.high)}`, row.attackCpm.toFixed(2), row.shiftCpm.toFixed(2), row.rakeCpm.toFixed(2)]) {
          const td = doc.createElement('td');
          if (!String(value).includes('[')) td.textContent = value;
          else for (const part of String(value).split(/(\[[^\]]*\])/g)) {
            const span = doc.createElement('span'); span.textContent = part;
            if (part.startsWith('[')) span.setAttribute('data-detail', '');
            td.appendChild(span);
          }
          tr.appendChild(td);
        }
        return tr;
      }));
      $('#idol-benchmark-coverage').textContent = b.coverage.filter(x => x.id && x.testId === 0).map(x => `${x.name}: ${x.effect}.`).join('\n') + '\nSeason of Discovery/unverified idols remain excluded from the catalog. No new unknown idol is assigned a zero DPS value.';
      $('#wolfshead-benchmark-note').textContent = b.wolfsheadMethod || '';
      $('#wolfshead-benchmark-table').replaceChildren(...(b.wolfshead || []).map(row => {
        const tr = doc.createElement('tr'), off = row.withoutEffect, on = row.withEffect;
        for (const value of [row.howling ? 'With Howling Idol' : 'No idol', off.dps.toFixed(2), on.dps.toFixed(2), signed(row.gain), `${signed(row.low)} to ${signed(row.high)}`,
          `${off.attackCpm.toFixed(2)} → ${on.attackCpm.toFixed(2)}`, `${off.shiftCpm.toFixed(2)} → ${on.shiftCpm.toFixed(2)}`]) {
          const td = doc.createElement('td');
          if (!String(value).includes('[')) td.textContent = value;
          else for (const part of String(value).split(/(\[[^\]]*\])/g)) {
            const span = doc.createElement('span'); span.textContent = part;
            if (part.startsWith('[')) span.setAttribute('data-detail', '');
            td.appendChild(span);
          }
          tr.appendChild(td);
        }
        return tr;
      }));
      $('#idol-benchmark-config').textContent = JSON.stringify({ model: b.model, windfuryModel: b.windfuryModel, catalogRevision: b.catalogRevision, config: b.config, coverage: b.coverage, wolfsheadMethod: b.wolfsheadMethod }, null, 2);
    }
    return { sync, refreshDisplay() { sync(); }, weights: () => applied,
      capture: () => applied,
      restore(value) { applied = value ? api.validate(value) : null; if (applied) persist(); else try { storage?.removeItem(KEY); } catch (_) { /* Keep in-memory preferences usable. */ } sync(); },
      stale: () => { try { return Boolean(applied && (applied.kind === 'preset' || applied.signature !== api.signature(callbacks.config()))); } catch (_) { return true; } } };
  }
  root.FOREVER_FERAL_WEIGHTS_UI = { init, cells };
  if (typeof module === 'object' && module.exports) module.exports = { init, cells };
})(globalThis);
