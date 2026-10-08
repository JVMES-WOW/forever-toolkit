// Human-editable policy definitions shared by combat, search, recipes and storage.
(function(root, factory) {
  const api = factory(typeof module === 'object' && module.exports ? require('./feral-forms.js') : root.FOREVER_FERAL_FORMS);
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.FOREVER_FERAL_ROTATION = api;
})(globalThis, function(forms) {
  'use strict';
  const REVISION = 'resource-policies-bearweave-v4';
  const RACIAL_REVISION = 'forever-active-racials-v1';
  const RACIAL_SOURCE = 'https://github.com/ElliotWood/Forever/blob/df7a2cfd2f7de7325589a567212b39acdd8b0620/sim/core/racials.go';
  const RACES = { TAUREN: 'Tauren', NIGHT_ELF: 'Night Elf', HIGH_ORDER_SKYBORNE: 'High Order Skyborne', WINDSHAPER_SKYBORNE: 'Windshaper Skyborne' };
  let lastGear = null, lastRace = null;
  function race(c) {
    if (c.characterMode === 'gear') {
      if (typeof c.gearBuild !== 'string') return c.gearBuild?.race || null;
      if (c.gearBuild === lastGear) return lastRace;
      try { lastRace = JSON.parse(c.gearBuild).race; lastGear = c.gearBuild; return lastRace; } catch (_) { return null; }
    }
    return c.racialRace || 'TAUREN';
  }
  const critBonus = (s, at = s.time) => at >= (s.elunesLightStarts ?? Infinity) - 1e-9 && at < (s.elunesLightExpires ?? -Infinity) - 1e-9 ? 10 : 0;
  const regenMultiplier = (s, at = s.time) => at >= (s.leyLineStarts ?? Infinity) - 1e-9 && at < (s.leyLineExpires ?? -Infinity) - 1e-9 ? 2 : 1;
  // Spell haste is separate from Cat attack speed. Match the fork's millisecond
  // cast rounding, including the Skyborne 1% passive cast-speed multiplier.
  const leyCastTime = c => Math.round(2000 / (1 + (c.leyLineSpellHaste || 0) / 100) / 1.01) / 1000;
  const RULES = ['rip', 'rake'].flatMap(bleed => ['shift', 'tea'].map(resource => ({
    id: bleed + resource[0].toUpperCase() + resource.slice(1), bleed, resource,
    prefix: 'clip' + bleed[0].toUpperCase() + bleed.slice(1) + resource[0].toUpperCase() + resource.slice(1),
    label: `${bleed === 'rip' ? 'Rip' : 'Rake'} → ${resource === 'shift' ? 'Shift' : 'Tea'}`,
    interval: bleed === 'rip' ? 2 : 3
  })));
  const DEFINITIONS = {
    ...forms.DEFINITIONS,
    inputDelayMs: { label: 'Input delay (ms)', min: 0, max: 1000, default: 0, integer: true, searchable: false },
    shiftDelayPenalty: { label: 'Shift delay penalty', min: .25, max: 4, default: 1, values: [.5, 1, 2] },
    teaTiming: { label: 'Tea timing', choices: ['threshold', 'protectShift', 'loss'], default: 'loss',
      labels: ['Energy threshold', 'Protect upcoming Shift', 'Energy-loss comparison'] },
    teaMaxEnergy: { label: 'Tea energy ceiling', min: 0, max: 100, default: 10, values: [0, 5, 10, 20] },
    teaDelayPenalty: { label: 'Tea delay penalty', min: .25, max: 4, default: 1, values: [.5, 1, 2] },
    elunesLightTiming: { label: 'Elune’s Light timing', group: 'racial', choices: ['disabled', 'cooldown', 'outsideBerserk'], default: 'disabled', labels: ['Disabled', 'On cooldown', 'Outside Berserk'] },
    elunesLightDelay: { label: 'Elune’s Light earliest first use (s)', group: 'racial', min: 0, max: 7200, default: 0, values: [0, 5, 10, 14, 15, 20, 30] },
    leyLineTiming: { label: 'Read Ley Line timing', group: 'racial', choices: ['disabled', 'cooldown', 'mana'], default: 'disabled', labels: ['Disabled', 'On cooldown', 'Mana + energy thresholds'] },
    leyLineDelay: { label: 'Read Ley Line earliest first use (s)', group: 'racial', min: 0, max: 7200, default: 0, values: [0, 15, 30, 45, 60, 90] },
    leyLineMana: { label: 'Read Ley Line mana ceiling (%)', group: 'racial', min: 0, max: 100, default: 50, values: [25, 50, 75] },
    leyLineEnergy: { label: 'Read Ley Line energy ceiling', group: 'racial', min: 0, max: 100, default: 30, values: [10, 20, 30, 50] },
    leyLineAvoidBerserk: { label: 'Read Ley Line: avoid Berserk', group: 'racial', choices: [false, true], default: true, labels: ['Off', 'On'] },
    leyLinePrepull: { label: 'Read Ley Line: also cast before pull', group: 'racial', choices: [false, true], default: false, labels: ['Off', 'On'] }
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
      if (p.choices ? !p.choices.includes(value) : !Number.isFinite(value) || value < p.min || value > p.max || p.integer && !Number.isInteger(value)) throw new Error(`Invalid ${p.label}.`);
      out[key] = value;
    }
    return out;
  }
  function active(key, c) {
    if (c.bearStrategy === 'cycleCat' && forms.DEFINITIONS[key] && key !== 'bearStrategy') return false;
    if (forms.cycle(c) && (['bearEnergy', 'bearRequireShiftCD', 'bearShiftBuffer', 'bearRipBuffer', 'bearRakeBuffer', 'bearEntryPriority', 'bearExit', 'bearMaxDuration', 'bearMixedPriority', 'shiftingThreshold', 'shiftDelayPenalty', 'teaTiming', 'teaDelayPenalty'].includes(key) || key.startsWith('clip'))) return false;
    if (forms.DEFINITIONS[key]) return key === 'bearStrategy' || forms.enabled(c) && (key !== 'bearSwingDelay' || c.bearSwingRule === 'minimum') && (key !== 'bearMixedPriority' || c.bearStrategy === 'mixed');
    if (key.startsWith('elunesLight')) return race(c) === 'NIGHT_ELF' && (key === 'elunesLightTiming' || c.elunesLightTiming !== 'disabled');
    if (key.startsWith('leyLine')) return race(c) === 'HIGH_ORDER_SKYBORNE' && (key === 'leyLineTiming' || c.leyLineTiming !== 'disabled')
      && (!['leyLineMana', 'leyLineEnergy'].includes(key) || c.leyLineTiming === 'mana') && (key !== 'leyLineDelay' || !c.leyLinePrepull);
    if (key === 'shiftingThreshold') return c.shiftingMode === 'manual';
    if (key === 'shiftDelayPenalty') return c.shiftingMode === 'automatic' || c.teaPolicy !== 'disabled' && c.teaTiming === 'loss';
    if (key === 'teaTiming') return c.teaPolicy !== 'disabled';
    if (key === 'teaMaxEnergy') return c.teaPolicy !== 'disabled' && (forms.cycle(c) || c.teaTiming !== 'loss');
    if (key === 'teaDelayPenalty') return c.teaPolicy !== 'disabled' && c.teaTiming === 'loss';
    const r = RULES.find(r => key.startsWith(r.prefix));
    return !r || (r.resource !== 'tea' || c.teaPolicy !== 'disabled') && (key === r.prefix || c[r.prefix]);
  }
  function recipe(input, costs) {
    const c = { ...input, ...normalize(input) };
    const lines = [forms.cycle(c) ? 'After the opening Shift, use Shift on cooldown when funded; each actual cast anchors the next cycle. Shift energy-loss/threshold gates are inactive in this rotation.' : c.shiftingMode === 'manual'
      ? `Shift first when ready and funded at ≤${c.shiftingThreshold} energy; reserve its upcoming GCD.`
      : `Shift using the energy-loss comparison; charge delay at ${c.shiftDelayPenalty}× energy gained / cooldown.`];
    if (race(c) === 'NIGHT_ELF') lines.push(c.elunesLightTiming === 'disabled' ? 'Elune’s Light disabled.'
      : `Elune’s Light: first use no earlier than ${c.elunesLightDelay}s, then every 180s${c.elunesLightTiming === 'outsideBerserk' ? ', wait until Berserk ends (and do not overlap the next scheduled Berserk)' : ''}. Off GCD; +10 percentage points of crit for 15s.`);
    if (race(c) === 'HIGH_ORDER_SKYBORNE') lines.push(c.leyLineTiming === 'disabled' ? 'Read Ley Line disabled.'
      : `Read Ley Line: ${c.leyLinePrepull ? 'precast before the existing FF/Berserk opener, then' : `first use no earlier than ${c.leyLineDelay}s, then`} when its 120s cooldown is ready${c.leyLineTiming === 'mana' ? `, at ≤${c.leyLineMana}% mana and ≤${c.leyLineEnergy} energy` : ''}${c.leyLineAvoidBerserk ? ', outside Berserk' : ''}. Takes ${leyCastTime(c)}s to cast; Shift and ready Berserk retain priority. Double passive mana regeneration for ${c.leyLineNearby ? '900' : '15'}s after completion; no potion/JoW/Tide amplification.`);
    lines.unshift(`Input delay: ${c.inputDelayMs} ms after a pooled action becomes available and before reactive off-GCD inputs. Ready GCD casts and the planned opener are queueable; recheck priorities after waiting.`);
    const window = c.teaPolicy === 'berserk' ? 'inside Berserk' : 'anytime';
    lines.push(c.teaPolicy === 'disabled' ? 'Tea disabled.' : forms.cycle(c) ? `Tea ${window} at ≤${c.teaMaxEnergy} energy, only with at least one second left in the Cat action window. No Tea forecast in the clocked rotation.` : c.teaTiming === 'loss'
      ? `Tea ${window}: compare cap waste, Shift delay (${c.shiftDelayPenalty}×), and Tea delay (${c.teaDelayPenalty}× ⅓ energy/s). No energy ceiling.`
      : `Tea ${window} at ≤${c.teaMaxEnergy} energy${c.teaTiming === 'protectShift' ? ', only if it will not postpone the upcoming Shift' : ', without special Shift protection'}.`);
    lines.push(`Rip at ≥${c.ripMinCP} CP; Bite at ≥${c.biteMinCP} CP and ≤${c.biteMaxEnergy} energy, with Rip remaining ≥${c.biteRipOutside}s outside / ≥${c.biteRipBerserk}s inside Berserk. Terminal Bite priority unchanged.`,
      c.rakeMode === 'ripDown' ? 'Rake only while Rip is down.' : 'Maintain Rake.');
    for (const r of RULES.filter(r => c[r.prefix] && !forms.cycle(c))) {
      const ceiling = c[r.prefix + 'Energy'];
      const before = costs ? Math.min(100, ceiling + costs[r.bleed] - (r.resource === 'shift' ? 10 : c.inputDelayMs / 100)) : null;
      lines.push(`While otherwise pooling: ${r.label}, one tick left and ≤${c[r.prefix + 'Remaining']}s remaining${r.bleed === 'rip' ? `, ≥${c.ripMinCP} CP and no weaker than the current Rip` : ''}; ${r.resource === 'shift' ? 'Shift ready next GCD' : `Tea ready immediately after refresh${c.inputDelayMs ? `, used after ${c.inputDelayMs} ms input delay` : ''}`}, resource-use energy ≤${ceiling}${before === null ? '' : ` (approximately ≤${before} energy before refresh)`}.`);
    }
    lines.push(!forms.cycle(c) && RULES.some(r => c[r.prefix])
      ? 'Clips must be affordable and create positive cap relief with resource-policy approval; never replace normal attacks or a reserved Shift GCD. No Clearcasting clips. Tie order: Rip before Rake, Shift before Tea. Recheck after actual outcomes.'
      : 'No early bleed refreshes.');
    return [...lines, ...forms.recipe(c)];
  }
  const timingDefaults = Object.fromEntries(Object.entries(DEFAULTS).filter(([key]) => key !== 'inputDelayMs' && !['racial', 'bear'].includes(DEFINITIONS[key].group)));
  const BUILTINS = [
    { id: 'original', name: 'Original Tea timing', patch: { ...timingDefaults, shiftingMode: 'automatic', teaTiming: 'threshold' } },
    { id: 'protected', name: 'Strict Shift protection', patch: { ...timingDefaults, shiftingMode: 'automatic', teaTiming: 'protectShift' } },
    { id: 'current', name: 'Energy-loss timing · 1× penalties', patch: { ...timingDefaults, shiftingMode: 'automatic' } }
  ];
  return { REVISION, RACIAL_REVISION, RACIAL_SOURCE, RACES, race, critBonus, regenMultiplier, leyCastTime, RULES, DEFINITIONS, DEFAULTS, normalize, active, recipe, BUILTINS };
});
