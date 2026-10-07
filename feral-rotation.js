// Human-editable policy definitions shared by combat, search, recipes and storage.
(function(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.FOREVER_FERAL_ROTATION = api;
})(globalThis, function() {
  'use strict';
  const REVISION = 'resource-policies-clipping-v1';
  const RULES = ['rip', 'rake'].flatMap(bleed => ['shift', 'tea'].map(resource => ({
    id: bleed + resource[0].toUpperCase() + resource.slice(1), bleed, resource,
    prefix: 'clip' + bleed[0].toUpperCase() + bleed.slice(1) + resource[0].toUpperCase() + resource.slice(1),
    label: `${bleed === 'rip' ? 'Rip' : 'Rake'} → ${resource === 'shift' ? 'Shift' : 'Tea'}`,
    interval: bleed === 'rip' ? 2 : 3
  })));
  const DEFINITIONS = {
    shiftDelayPenalty: { label: 'Shift delay penalty', min: .25, max: 4, default: 1, values: [.5, 1, 2] },
    teaTiming: { label: 'Tea timing', choices: ['threshold', 'protectShift', 'loss'], default: 'loss',
      labels: ['Energy threshold', 'Protect upcoming Shift', 'Energy-loss comparison'] },
    teaMaxEnergy: { label: 'Tea energy ceiling', min: 0, max: 100, default: 10, values: [0, 5, 10, 20] },
    teaDelayPenalty: { label: 'Tea delay penalty', min: .25, max: 4, default: 1, values: [.5, 1, 2] }
  };
  for (const r of RULES) {
    DEFINITIONS[r.prefix] = { label: r.label, choices: [false, true], default: false, labels: ['Off', 'On'] };
    DEFINITIONS[r.prefix + 'Remaining'] = { label: r.label + ' remaining seconds', min: 0, max: r.interval,
      default: r.interval, values: r.bleed === 'rip' ? [.5, 1, 1.5, 2] : [.5, 1, 2, 3] };
    DEFINITIONS[r.prefix + 'Energy'] = { label: r.label + ' resource energy ceiling', min: 0, max: 100,
      default: r.resource === 'shift' ? 30 : 10, values: r.resource === 'shift' ? [20, 30, 40, 50] : [0, 5, 10, 20] };
  }
  const DEFAULTS = Object.freeze(Object.fromEntries(Object.entries(DEFINITIONS).map(([k, p]) => [k, p.default])));
  function normalize(input = {}) {
    const out = {};
    for (const [key, p] of Object.entries(DEFINITIONS)) {
      const raw = input[key] ?? p.default;
      const value = p.choices ? raw : typeof raw === 'string' && raw.trim() === '' ? NaN : Number(raw);
      if (p.choices ? !p.choices.includes(value) : !Number.isFinite(value) || value < p.min || value > p.max) throw new Error(`Invalid ${p.label}.`);
      out[key] = value;
    }
    return out;
  }
  function active(key, c) {
    if (key === 'shiftingThreshold') return c.shiftingMode === 'manual';
    if (key === 'shiftDelayPenalty') return c.shiftingMode === 'automatic' || c.teaPolicy !== 'disabled' && c.teaTiming === 'loss';
    if (key === 'teaTiming') return c.teaPolicy !== 'disabled';
    if (key === 'teaMaxEnergy') return c.teaPolicy !== 'disabled' && c.teaTiming !== 'loss';
    if (key === 'teaDelayPenalty') return c.teaPolicy !== 'disabled' && c.teaTiming === 'loss';
    const r = RULES.find(r => key.startsWith(r.prefix));
    return !r || (r.resource !== 'tea' || c.teaPolicy !== 'disabled') && (key === r.prefix || c[r.prefix]);
  }
  function recipe(input, costs) {
    const c = { ...input, ...normalize(input) };
    const lines = [c.shiftingMode === 'manual'
      ? `Shift first when ready and funded at ≤${c.shiftingThreshold} energy; reserve its upcoming GCD.`
      : `Shift using the energy-loss comparison; charge delay at ${c.shiftDelayPenalty}× energy gained / cooldown.`];
    const window = c.teaPolicy === 'berserk' ? 'inside Berserk' : 'anytime';
    lines.push(c.teaPolicy === 'disabled' ? 'Tea disabled.' : c.teaTiming === 'loss'
      ? `Tea ${window}: compare cap waste, Shift delay (${c.shiftDelayPenalty}×), and Tea delay (${c.teaDelayPenalty}× ⅓ energy/s). No energy ceiling.`
      : `Tea ${window} at ≤${c.teaMaxEnergy} energy${c.teaTiming === 'protectShift' ? ', only if it will not postpone the upcoming Shift' : ', without special Shift protection'}.`);
    lines.push(`Rip at ≥${c.ripMinCP} CP; Bite at ≥${c.biteMinCP} CP and ≤${c.biteMaxEnergy} energy, with Rip remaining ≥${c.biteRipOutside}s outside / ≥${c.biteRipBerserk}s inside Berserk. Terminal Bite priority unchanged.`,
      c.rakeMode === 'ripDown' ? 'Rake only while Rip is down.' : 'Maintain Rake.');
    for (const r of RULES.filter(r => c[r.prefix])) {
      const ceiling = c[r.prefix + 'Energy'];
      const before = costs ? Math.min(100, ceiling + costs[r.bleed] - (r.resource === 'shift' ? 10 : 0)) : null;
      lines.push(`While otherwise pooling: ${r.label}, one tick left and ≤${c[r.prefix + 'Remaining']}s remaining${r.bleed === 'rip' ? `, ≥${c.ripMinCP} CP and no weaker than the current Rip` : ''}; ${r.resource === 'shift' ? 'Shift ready next GCD' : 'Tea ready immediately after refresh'}, resource-use energy ≤${ceiling}${before === null ? '' : ` (approximately ≤${before} energy before refresh)`}.`);
    }
    lines.push(RULES.some(r => c[r.prefix])
      ? 'Clips must be affordable and create positive cap relief with resource-policy approval; never replace normal attacks or a reserved Shift GCD. No Clearcasting clips. Tie order: Rip before Rake, Shift before Tea. Recheck after actual outcomes.'
      : 'No early bleed refreshes.');
    return lines;
  }
  const BUILTINS = [
    { id: 'original', name: 'Original Tea timing', patch: { ...DEFAULTS, shiftingMode: 'automatic', teaTiming: 'threshold' } },
    { id: 'protected', name: 'Strict Shift protection', patch: { ...DEFAULTS, shiftingMode: 'automatic', teaTiming: 'protectShift' } },
    { id: 'current', name: 'Energy-loss timing · 1× penalties', patch: { ...DEFAULTS, shiftingMode: 'automatic' } }
  ];
  return { REVISION, RULES, DEFINITIONS, DEFAULTS, normalize, active, recipe, BUILTINS };
});
