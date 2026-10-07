(function(root) {
  'use strict';
  function mount(doc, policies, optimizer) {
    const $ = id => doc.getElementById(id);
    const make = (tag, text, props = {}) => Object.assign(doc.createElement(tag), { textContent: text || '' }, props);
    const fields = $('rotation-policy-fields'), clips = $('rotation-clip-fields'), search = $('rotation-search-fields');
    const controls = {}, clipGroups = {};
    for (const rule of policies.RULES) {
      const group = make('div', '', { className: 'rotation-clip-rule' });
      clips.append(group); clipGroups[rule.prefix] = group;
    }
    for (const [key, p] of Object.entries(policies.DEFINITIONS)) {
      const rule = policies.RULES.find(r => key.startsWith(r.prefix));
      const input = make(p.choices && typeof p.default !== 'boolean' ? 'select' : 'input', '', { id: key, name: key });
      if (p.choices && typeof p.default !== 'boolean') for (let i = 0; i < p.choices.length; i++) input.append(make('option', p.labels[i], { value: p.choices[i] }));
      else if (typeof p.default === 'boolean') { input.type = 'checkbox'; input.checked = p.default; }
      else { input.type = 'number'; input.min = p.min; input.max = p.max; input.step = key.endsWith('Remaining') ? .5 : key.endsWith('Penalty') ? .25 : 1; }
      input.value = String(p.default);
      const label = make('label', p.label); label.append(input);
      if (typeof p.default === 'boolean') label.className = 'rotation-clip-toggle';
      (rule ? clipGroups[rule.prefix] : fields).append(label); controls[key] = input;
    }
    for (const [key, p] of Object.entries(optimizer.PARAMETERS).filter(([, p]) => p.optional)) {
      const row = make('div'), label = make('label');
      label.append(make('input', '', { id: `opt-${key}-on`, type: 'checkbox' }), doc.createTextNode(' ' + p.label));
      const input = make('input', '', { id: `opt-${key}-values`, type: 'text', value: (p.labels || p.values).join(', ') });
      input.setAttribute('aria-label', p.label + ' search values'); row.append(label, input); search.append(row);
    }
    for (const b of policies.BUILTINS) $('rotation-builtin').append(make('option', b.name, { value: b.id }));
    let apply = () => {}, busy = false;
    $('rotation-builtin').addEventListener('change', () => {
      const selected = policies.BUILTINS.find(b => b.id === $('rotation-builtin').value);
      if (!busy && selected) apply(selected.patch);
      $('rotation-builtin').value = '';
    });
    function sync(c, isBusy, costs) {
      busy = isBusy;
      $('rotation-builtin').disabled = busy;
      for (const [key, input] of Object.entries(controls)) input.disabled = busy || !policies.active(key, c);
      $('rotation-recipe').replaceChildren(...policies.recipe(c, costs).map(line => make('li', line)));
    }
    function results(result) {
      const host = $('rotation-search-results'); host.replaceChildren();
      for (const candidate of result.ranked) {
        const details = make('details'), title = candidate.references?.join(' / ') || `Candidate ${candidate.id}`;
        details.append(make('summary', `${title} · ${candidate.dps == null ? '—' : candidate.dps.toFixed(2)} DPS`));
        if (candidate.dpsGain != null) {
          details.append(make('p', `DPS change vs current: ${candidate.dpsGain > 0 ? '+' : ''}${candidate.dpsGain.toFixed(2)}.`));
          const uncertainty = make('p', `Paired DPS sampling SE: ${candidate.dpsSe == null ? '—' : candidate.dpsSe.toFixed(2)}. Sampling uncertainty does not cover mechanics uncertainty or selection bias.`);
          uncertainty.setAttribute('data-detail', ''); details.append(uncertainty);
        }
        const ul = make('ul'); ul.append(...(candidate.recipe || []).map(line => make('li', line))); details.append(ul);
        const m = candidate.resourceMetrics;
        if (m) {
          details.append(make('p', `Per fight: ${m.shifts.toFixed(2)} Shifts · ${m.teaUses.toFixed(2)} Teas · ${m.energyWaste.toFixed(2)} wasted energy · ${m.clips.toFixed(2)} clip attempts · ${m.overwrites.toFixed(2)} overwrites · ${m.fulfilled.toFixed(2)} resource follow-ups (${m.onCooldown.toFixed(2)} on cooldown) · ${m.ticks.toFixed(2)} ticks sacrificed.`));
          const note = make('p', `Foregone-tick damage / fight: ${m.foregoneTickDamage == null ? '—' : m.foregoneTickDamage.toFixed(2)}. Not net clipping cost; compare full-fight DPS.`); note.setAttribute('data-detail', ''); details.append(note);
        }
        host.append(details);
      }
    }
    function diagnostics(result) {
      const host = $('rotation-clip-results'); host.replaceChildren();
      if (!result.rotationRevision) {
        host.append(make('p', 'Historical result · unversioned rotation. Reruns use the displayed policy settings; exact historical reproduction is unavailable.')); return;
      }
      if (!result.clipping) return;
      for (const r of policies.RULES) {
        const row = result.clipping[r.id];
        if (!row || !row.attempts.mean) continue;
        host.append(make('p', `${r.label}: ${row.attempts.mean.toFixed(2)} attempts · ${row.overwrites.mean.toFixed(2)} overwrites · ${row.fulfilled.mean.toFixed(2)} resource follow-ups (${row.onCooldown.mean.toFixed(2)} on cooldown) · ${row.ticks.mean.toFixed(2)} ticks sacrificed / fight.`));
        const note = make('p', `Foregone-tick damage: ${row.foregoneTickDamage?.mean.toFixed(2) ?? '—'} / fight (not net damage cost).`); note.setAttribute('data-detail', ''); host.append(note);
      }
    }
    return { sync, results, diagnostics, onApply(fn) { apply = fn; } };
  }
  const api = { mount };
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.FOREVER_FERAL_ROTATION_UI = api;
})(globalThis);
