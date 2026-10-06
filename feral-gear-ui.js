(function(root) {
  'use strict';
  const SLOT_LAYOUT = {
    left: ['HEAD', 'NECK', 'SHOULDERS', 'BACK', 'CHEST', 'WRISTS'],
    right: ['HANDS', 'WAIST', 'LEGS', 'FEET', 'FINGER_1', 'FINGER_2', 'TRINKET_1', 'TRINKET_2'],
    weapons: ['MAIN_HAND', 'OFF_HAND', 'RANGED']
  };
  // The picker offers the standard item only. Keep full catalog/build data so
  // existing imports and saved comparisons never lose their exact equipment.
  const pickerItem = item => !item.randomSuffixOptions?.length && Object.hasOwn(item.variants || {}, '0');
  const itemLevel = item => Number(item.variants?.['0']?.ilvl) || 0;
  function sortItems(items, mode = 'dps', scored = new Map()) {
    const byName = (a, b) => a.name.localeCompare(b.name) || a.id - b.id;
    return [...items].sort((a, b) => {
      if (mode === 'name') return byName(a, b);
      if (mode === 'dps' && scored.size) return (scored.get(b.id)?.score ?? -Infinity) - (scored.get(a.id)?.score ?? -Infinity) || itemLevel(b) - itemLevel(a) || byName(a, b);
      return itemLevel(b) - itemLevel(a) || byName(a, b);
    });
  }
  function sortEnchants(entries, scored = new Map()) {
    return [...entries].sort((a, b) => (scored.size ? (scored.get(b[0]) ?? -Infinity) - (scored.get(a[0]) ?? -Infinity) : 0)
      || a[1].name.localeCompare(b[1].name) || a[0].localeCompare(b[0]));
  }
  function pickerEstimate(item, build, slot, estimate) {
    const equipped = build.slots[slot];
    return equipped?.id === item.id ? { ...estimate, choice: { ...equipped }, score: 0, equipped: true } : estimate;
  }
  const compatibleEnchants = (gear, item, slot) => Object.entries(gear.data.enchants).filter(([, enchant]) => gear.enchantCompatible(enchant, item, slot));
  function init(doc, gear, callbacks) {
    const $ = s => doc.querySelector(s), el = (tag, text, cls) => { const n = doc.createElement(tag); if (text != null) n.textContent = text; if (cls) n.className = cls; return n; };
    let build = gear.empty(), busy = false, active = false, slot = null, candidate = null, limit = 40, last = '';
    const dialog = $('#gear-picker');
    let enchantScores = new Map();
    const scoreClass = value => root.FOREVER_FERAL_DISPLAY.dpsClass(value);
    const signed = value => root.FOREVER_FERAL_DISPLAY.signed(value);
    const badge = text => el('span', text, 'compact-badge');
    const option = (value, label) => { const n = el('option', label); n.value = String(value); return n; };
    const icon = (item, className = '') => {
      const img = el('img', null, `gear-icon ${className}`); img.alt = ''; img.loading = 'lazy'; img.referrerPolicy = 'no-referrer';
      // Artwork only: no character data or database requests. Missing artwork hides without blocking the picker.
      img.src = item?.icon && /^[a-z0-9_]+$/i.test(item.icon) ? `https://wow.zamimg.com/images/wow/icons/large/${item.icon.toLowerCase()}.jpg` : `${root.location?.protocol === 'file:' ? 'assets/' : ''}spec-icons/druid-feral.jpg`;
      img.addEventListener('error', () => { img.hidden = true; }, { once: true }); return img;
    };
    const itemName = choice => { const item = gear.data.items[choice?.id]; return item ? item.name + (choice.suffix ? ` ${gear.data.suffixes[choice.suffix].name}` : '') : 'Empty'; };
    $('#gear-race').replaceChildren(...Object.entries(gear.RACES).map(([id, r]) => option(id, r.name)));
    $('#gear-terrain-options').replaceChildren(...gear.AREAS.slice(1).map((name, index) => {
      const label = el('label'), checkbox = el('input'); checkbox.type = 'checkbox'; checkbox.value = String(index + 1); checkbox.dataset.terrain = String(index + 1);
      checkbox.addEventListener('change', () => {
        if (busy) return;
        callbacks.setAreas([...$('#gear-terrain-options').querySelectorAll('input:checked')].map(n => n.value).join(','));
      });
      label.append(checkbox, doc.createTextNode(name)); return label;
    }));
    function renderSlots() {
      const buttons = Object.fromEntries(Object.entries(gear.SLOTS).map(([id, [, label]]) => {
        const choice = build.slots[id], item = gear.data.items[choice?.id], e = gear.data.enchants[choice?.enchant];
        const enchantable = compatibleEnchants(gear, item, id).length > 0;
        const button = el('button', null, 'gear-slot'); button.type = 'button'; button.disabled = busy || !active; button.dataset.slot = id;
        button.setAttribute('aria-label', `${label}: ${itemName(choice)}. Choose item${enchantable ? ' or enchant' : ''}`);
        const text = el('span'); text.append(el('small', label), el('b', itemName(choice)));
        if (enchantable) text.append(el('small', e?.name || 'No enchant'));
        if (item && gear.warningsFor(item, e).length) text.append(el('small', 'Unmodeled effects', 'gear-coverage-note'));
        if (item) { button.append(icon(item)); button.dataset.quality = item.quality; }
        else button.append(el('span', '+', 'gear-empty-icon'));
        button.append(text); button.addEventListener('click', () => open(id)); return [id, button];
      }));
      $('#gear-slots').replaceChildren(...Object.entries(SLOT_LAYOUT).map(([position, ids]) => {
        const group = el('div', null, position === 'weapons' ? 'gear-weapons' : `gear-column gear-${position}`);
        group.setAttribute('role', 'group'); group.setAttribute('aria-label', position === 'weapons' ? 'Weapons and idol' : `${position === 'left' ? 'Left' : 'Right'} character-sheet slots`);
        group.append(...ids.map(id => buttons[id])); return group;
      }));
    }
    function sync(raw, c, reference) {
      busy = callbacks.busy();
      active = raw.characterMode === 'gear';
      try { build = raw.gearBuild ? gear.validate(raw.gearBuild) : gear.empty(); } catch (_) { /* Retain last valid picker state; status below explains config errors. */ }
      $('#gear-race').value = build.race; $('#gear-race').disabled = busy || !active;
      $('#gear-mode').disabled = busy;
      $('#gear-terrain-options').querySelectorAll('input').forEach(n => { n.checked = String(raw.gearAreaTypes || '').split(',').includes(n.value); n.disabled = busy; });
      const signature = JSON.stringify([build, raw.characterMode, raw.gearAreaTypes, raw.targetCreature, busy]);
      if (signature !== last) { renderSlots(); last = signature; }
      $('#gear-mode-note').textContent = active ? 'Gear-calculated Cat stats. Equipment edits update your setup; Simulate is explicit. Talent and buff choices are applied once.' : 'Imported/manual totals are active. Your gear draft is retained but does not change these totals; select Gear-calculated to use it.';
      $('#gear-ranking-note').textContent = callbacks.weights?.() ? `${callbacks.weights().kind === 'preset' ? 'Items and enchants use your supplied default DPS weights (reference setup not included in export).' : 'Items and enchants use generated DPS weights.'} ${callbacks.weightsStale?.() ? 'Settings or mechanics have changed; regenerate weights for the current build. ' : ''}Helmet rankings include Wolfshead’s measured energy-effect bonus, selected by Howling Idol being equipped. Idols use paired replacement benchmarks. These fixed reference bonuses are not re-simulated for your current build; other special effects remain excluded.` : 'No DPS weights applied. Generate them in Optimization → DPS weights / EP, then use them for item and enchant ranking. Idols retain their separate reference benchmarks.';
      try {
        const result = gear.calculate(build, raw);
        const rows = [['Strength', result.patch.baseStrength], ['Agility', result.patch.baseAgility], ['Intellect', result.patch.baseIntellect], ['Spirit', result.patch.baseSpirit],
          ['Unbuffed mana', result.patch.baseMana], ['Unbuffed Cat AP', result.patch.baseAttackPower], ['Sheet crit', result.patch.baseSheetCrit], ['Hit / spell hit', result.patch.baseHit],
          ['Expertise', result.patch.baseExpertise], ['Cat swing seconds', result.patch.baseSwingTimer], ['Gear MP5', result.patch.gearMP5]];
        $('#gear-stats').replaceChildren(...rows.map(([key, value]) => { const row = el('div'); row.append(el('dt', key), el('dd', Number(value).toLocaleString(undefined, { maximumFractionDigits: 3 }))); return row; }));
        $('#gear-coverage').textContent = result.warnings.join('\n');
        $('#gear-contributions').replaceChildren(...result.rows.map(row => { const tr = el('tr'); tr.append(el('td', gear.SLOTS[row.slot][1]), el('td', row.name), el('td', statText(row.stats))); return tr; }));
        $('#gear-reconciliation').textContent = reference?.stats ? reconciliation(result.patch, reference.stats) : 'No exported totals to compare. Gear values come from the pinned catalog and race rules.';
        $('#gear-status').textContent = active && c ? `Live buffed totals: ${c.attackPower.toFixed(2)} AP · ${c.crit.toFixed(2)}% crit vs boss · ${c.startingMana.toFixed(0)} mana.` : 'Gear draft totals shown below; they are not the active imported/manual stats.';
      } catch (error) { $('#gear-status').textContent = error.message; }
      $('#gear-ranking-badges').replaceChildren(...[
        ...(callbacks.weightsStale?.() ? [badge('Weights need updating')] : []),
        ...(!callbacks.weights?.() ? [badge('DPS estimates unavailable')] : []),
        ...(c?.gearWarnings?.length ? [badge('Unmodeled effects')] : [])
      ]);
      if (dialog.open) {
        $('#gear-remove').disabled = busy;
        $('#gear-enchant').disabled = busy || $('#gear-choice-controls').hidden;
        $('#gear-item-list').querySelectorAll('button').forEach(button => { button.disabled = busy; });
      }
    }
    function statText(stats) { return Object.entries(stats).filter(([id, n]) => id !== '19' && n).map(([id, n]) => `${n > 0 ? '+' : ''}${n} ${gear.STAT_NAMES[id] || `stat ${id} (reference)`}`).join(' · ') || 'No flat stats'; }
    function reconciliation(patch, stats) {
      const map = { strength: 'baseStrength', agility: 'baseAgility', stamina: 'baseStamina', intellect: 'baseIntellect', spirit: 'baseSpirit', mana: 'baseMana', attackPower: 'baseAttackPower', crit: 'baseSheetCrit', hit: 'baseHit', spellHit: 'baseSpellHit', expertise: 'baseExpertise' };
      const lines = Object.entries(map).filter(([k]) => Number.isFinite(stats[k])).map(([k, v]) => `${k}: export ${stats[k]} → gear ${Number(patch[v].toFixed(4))}`);
      return lines.join('\n') + '\nReference only: the export may include buffs/talents or different gear. The fork uses 0.9% base melee crit and Tauren +1% melee/spell hit. Your supplied baseline used 0.961% base crit and did not include that racial hit. No hidden offsets. Terrain AP is separate from the flask zone; armor data is incomplete and reference-only.';
    }
    function open(id) {
      if (busy) return;
      slot = id; candidate = null; limit = 40; $('#gear-search').value = '';
      $('#gear-picker-title').textContent = `Choose ${gear.SLOTS[id][1]}`;
      dialog.showModal(); search(); choose(build.slots[id] || null); $('#gear-search').focus();
    }
    function search() {
      const query = $('#gear-search').value.trim().toLowerCase();
      let results = Object.values(gear.data.items).filter(i => pickerItem(i) && gear.compatible(i, slot, build.race) && (!query || i.name.toLowerCase().includes(query) || String(i.id) === query));
      const weights = callbacks.weights?.(), api = callbacks.weightsApi, scored = new Map();
      if (api) for (const item of results) {
        const value = slot === 'RANGED' ? api.idolEstimate?.(item.id, build.slots.RANGED?.id || 0)
          : weights ? api.bestVariant(item, weights, { ...callbacks.raw(), rankingBuild: build, rankingSlot: slot, standardOnly: true }) : null;
        if (value) scored.set(item.id, value);
      }
      results = sortItems(results, $('#gear-sort').value, scored);
      $('#gear-item-list').replaceChildren(...results.slice(0, limit).map(item => {
        const button = el('button', null, 'gear-item'); button.type = 'button'; button.dataset.itemId = item.id;
        const ranked = pickerEstimate(item, build, slot, scored.get(item.id));
        const score = el('span', null, 'gear-item-score');
        score.append(el('b', ranked ? signed(ranked.score) + ' DPS' : '—', 'dps-value ' + scoreClass(ranked?.score)),
          el('small', ranked ? (ranked.equipped ? 'Equipped · Δ DPS' : ranked.benchmark ? 'reference Δ DPS' : weights?.version === 2 ? 'estimated Δ DPS' : 'DPS value') : 'No estimate'));
        button.append(icon(item), el('span', item.name, 'gear-item-name'), score);
        button.disabled = busy; button.setAttribute('aria-pressed', String(build.slots[slot]?.id === item.id));
        button.addEventListener('click', () => equipChoice(ranked?.choice || { id: item.id, variant: '0', suffix: 0, enchant: '' })); return button;
      }));
      $('#gear-found').textContent = `${results.length.toLocaleString()} items · showing ${Math.min(limit, results.length)}`;
      $('#gear-found-detail').textContent = `Standard items only. Selecting an item equips it immediately. The equipped row retains its exact enchant and always has zero replacement delta.${slot === 'RANGED' && api?.idolBenchmarks ? ' Reference DPS Δ = paired idol replacement tests in the recorded benchmark setup, versus the equipped idol. Includes modeled effects; not stat EP or a prediction for your current build.' : weights ? (weights.version === 2 ? ' DPS Δ = replacement estimate, capped hit/expertise; other candidate items have no enchant.' : ' DPS value = weighted stats, no enchant.') + (slot === 'HEAD' ? ' Includes Wolfshead’s fixed measured effect bonus, adding it when equipped and subtracting it when replaced; +50.13 with Howling, +45.00 otherwise. Not a full simulation.' : ' Other special effects are excluded; not a full simulation.') : ' No DPS weights available; default order is highest item level first. Item level is not a DPS estimate.'}`;
      $('#gear-more').hidden = results.length <= limit;
    }
    function choose(choice) {
      candidate = choice ? { ...choice } : null;
      $('#gear-choice-controls').hidden = !choice;
      if (!choice) { $('#gear-detail').textContent = 'Select an item to equip.'; $('#gear-estimate').replaceChildren(); return; }
      renderEnchants();
      detail();
    }
    function renderEnchants() {
      if (!candidate) return;
      const item = gear.data.items[candidate.id], weights = callbacks.weights?.(), api = callbacks.weightsApi;
      const compatible = compatibleEnchants(gear, item, slot);
      $('#gear-choice-controls').hidden = compatible.length === 0;
      let scores = new Map(), problem = '';
      if (compatible.length && weights && api) try { scores = new Map(api.enchantScores(build, slot, candidate, weights, callbacks.raw()).map(row => [row.key, row.score])); }
      catch (error) { problem = ` Estimates unavailable: ${error.message}`; }
      const entries = [['', { name: 'No enchant' }], ...compatible];
      $('#gear-enchant').replaceChildren(...sortEnchants(entries, scores).map(([id, e]) => {
        const value = scores.get(id), effects = e.enchantEffects?.length ? ' · special effect not modeled' : '';
        return option(id, `${e.name}${value !== undefined ? ` · ${signed(value)} est. DPS` : ''}${doc.body.classList.contains('show-details') ? (id ? ` · effect ${e.effectId}${e.spellId ? ' / spell ' + e.spellId : ''}` : '') + effects : ''}`);
      }));
      enchantScores = scores;
      $('#gear-enchant').value = candidate.enchant || '';
      $('#gear-enchant').disabled = busy || !compatible.length;
      if (!compatible.length) { $('#gear-enchant-note').textContent = ''; return; }
      $('#gear-enchant-note').textContent = (scores.size
        ? 'Sorted by estimated DPS gain versus no enchant on this same item, with your current build and caps. Static effects only; not a full sim. The replacement delta below compares against your equipped gear.'
        : 'Generate and apply DPS weights in Optimization → DPS weights / EP to rank enchants. Without weights, enchants are alphabetical; no DPS is guessed.')
        + problem + (callbacks.weightsStale?.() ? ' These weights are from an earlier setup; regenerate for current settings.' : '')
        + ' Impact/Striking add their flat damage directly to Cat paws, without division by weapon speed.';
    }
    function detail() {
      if (!candidate) return;
      candidate.enchant = $('#gear-enchant').value;
      const item = gear.data.items[candidate.id], variant = item.variants[candidate.variant], enchant = gear.data.enchants[candidate.enchant];
      const content = [itemName(candidate) + ` (#${item.id})`, statText(variant.stats),
        ...(candidate.suffix ? [`Saved suffix stats: ${statText(gear.data.suffixes[candidate.suffix]?.stats || {})}`] : []),
        ...(candidate.variant !== '0' || candidate.suffix ? ['Saved equipment details retained; alternate versions and suffixes are no longer selectable.'] : []),
        ...(enchant ? [enchant.name + ': ' + (enchant.weaponDamage && !Object.keys(enchant.stats).length ? 'flat weapon damage' : statText(enchant.stats))] : []),
        ...(enchant?.weaponDamage ? [`+${enchant.weaponDamage} flat Cat paw damage (before modifiers; not divided by weapon speed).`] : []),
        ...(item.weaponSpeed ? [`Weapon ${variant.weaponDamageMin}–${variant.weaponDamageMax} / ${item.weaponSpeed}s`] : []),
        ...gear.warningsFor(item, enchant), `Forever ${gear.data.revision.slice(0, 7)}`,
        'Catalog presence does not confirm launch availability, raid sources, or release timing.'];
      try {
        const changed = gear.replace(build, slot, candidate), current = gear.calculate(build, callbacks.raw()).patch, proposed = gear.calculate(changed.build, callbacks.raw()).patch;
        for (const [name, key] of [['AP', 'baseAttackPower'], ['crit %', 'baseSheetCrit'], ['hit %', 'baseHit'], ['expertise %', 'baseExpertise'], ['mana', 'baseMana'], ['Cat swing seconds', 'baseSwingTimer'], ['MP5', 'gearMP5'], ['flat paw damage', 'gearPawDamage']]) {
          const d = proposed[key] - current[key]; if (d) content.push(`Unbuffed ${name}: ${current[key].toFixed(3)} → ${proposed[key].toFixed(3)} (${d > 0 ? '+' : ''}${d.toFixed(3)})`);
        }
        content.push(...changed.changes);
        const weights = callbacks.weights?.(), api = callbacks.weightsApi;
        if (slot === 'RANGED' && api) {
          const estimate = api.idolEstimate?.(item.id, build.slots.RANGED?.id || 0), b = api.idolBenchmarks;
          const entry = b?.coverage.find(x => x.id === item.id);
          if (entry) content.push(entry.effect);
          if (estimate) content.push(`Fixed reference-setup replacement benchmark: ${estimate.gain >= 0 ? '+' : ''}${estimate.gain.toFixed(2)} DPS vs ${itemName(build.slots.RANGED)}; paired 95% interval ${estimate.low.toFixed(2)} to ${estimate.high.toFixed(2)} DPS.`,
            `${b.iterations} shared-seed fights per setting, ${b.config.duration} ±${b.config.durationVariance}s, seed ${b.config.seed}. This is not a prediction for your current build. See Optimization → DPS weights / EP for the method and full setup. Verify with a saved comparison.`);
          else content.push('No evaluated idol benchmark for this replacement. Unknown effects are not treated as zero.');
        } else if (weights && api) {
          const staticDelta = api.buildScore(changed.build, weights, callbacks.raw()) - api.buildScore(build, weights, callbacks.raw());
          const effectDelta = api.equipmentEffectScore(changed.build) - api.equipmentEffectScore(build), delta = staticDelta + effectDelta;
          content.push(`Estimated replacement Δ: ${delta >= 0 ? '+' : ''}${delta.toFixed(2)} DPS = ${staticDelta >= 0 ? '+' : ''}${staticDelta.toFixed(2)} from ${weights.version === 2 ? 'cap-aware' : 'legacy linear'} static weights ${effectDelta >= 0 ? '+' : '−'} ${Math.abs(effectDelta).toFixed(2)} from the Wolfshead effect. Includes changed enchants and any unequipped off hand.`,
            'Wolfshead’s measured reference bonus is included in helmet sorting and replacement deltas; it is not recalculated for current settings. Other special effects remain excluded. Idols have separate paired benchmarks. Verify close upgrades with a full simulation.',
            ...(callbacks.weightsStale?.() ? ['Weights are from an earlier setup; regenerate for current settings.'] : []));
        }
        if (item.id === 8345 && api?.idolBenchmarks?.wolfshead) {
          const bonus = api.wolfsheadEstimate(build.slots.RANGED?.id === 272427);
          content.push(`Ranking includes +${bonus.gain.toFixed(2)} DPS for Wolfshead’s energy effect ${bonus.howling ? 'with Howling Idol equipped' : 'without Howling Idol (using the no-idol reference)'}. Reference paired 95% interval ${bonus.low.toFixed(2)} to ${bonus.high.toFixed(2)}. Ordinary helm stats are scored separately; the combined ranking is approximate, not a newly simulated replacement.`);
        }
      } catch (error) { content.push(error.message); }
      const primary = el('div', [itemName(candidate), statText(variant.stats),
        ...(enchant ? [enchant.name + ': ' + statText(enchant.stats)] : []),
        ...(enchant?.weaponDamage ? ['+' + enchant.weaponDamage + ' Cat paw damage'] : []),
        ...(item.weaponSpeed ? [`Weapon ${variant.weaponDamageMin}–${variant.weaponDamageMax} / ${item.weaponSpeed}s`] : [])].join('\n'));
      const extra = el('div', content.join('\n'), 'gear-detail-extra'); extra.setAttribute('data-detail', '');
      $('#gear-detail').replaceChildren(primary, ...(gear.warningsFor(item, enchant).length ? [badge('Unmodeled effects')] : []), extra);
      const enchantValue = enchantScores.get(candidate.enchant);
      $('#gear-enchant-dps').textContent = $('#gear-choice-controls').hidden ? '' : `${signed(enchantValue)} DPS`;
      $('#gear-enchant-dps').className = 'dps-value ' + scoreClass(enchantValue);
      $('#gear-enchant-dps').setAttribute('aria-label', 'Selected enchant estimated DPS versus no enchant: ' + signed(enchantValue));
      try {
        const next = gear.replace(build, slot, candidate).build, api = callbacks.weightsApi, w = callbacks.weights?.();
        const estimate = slot === 'RANGED' ? api?.idolEstimate?.(item.id, build.slots.RANGED?.id || 0) : null;
        const delta = estimate ? estimate.gain : w && slot !== 'RANGED' ? api.rankingScore(next, w, callbacks.raw()) - api.rankingScore(build, w, callbacks.raw()) : null;
        $('#gear-estimate').replaceChildren(el('strong', delta == null ? 'Estimate unavailable' : signed(delta) + ' DPS', 'dps-value ' + scoreClass(delta)), el('small', estimate ? 'Reference Δ DPS' : 'Estimated Δ DPS'));
      } catch (_) { $('#gear-estimate').textContent = 'Estimate unavailable'; }
    }
    function equipChoice(choice) {
      if (busy || callbacks.busy()) return;
      const focusedItem = doc.activeElement?.dataset.itemId;
      try {
        const next = gear.replace(build, slot, choice);
        if (JSON.stringify(next.build) !== JSON.stringify(build)) callbacks.apply(next.build);
        build = next.build;
        choose(build.slots[slot] || null); search();
        if (next.changes.length) $('#gear-found').textContent += ' · ' + next.changes.join(' · ');
      } catch (error) { $('#gear-detail').textContent = error.message; choose(build.slots[slot] || null); $('#gear-found').textContent = error.message; }
      if (focusedItem) $(`[data-item-id="${focusedItem}"]`)?.focus();
    }
    for (const id of ['gear-search', 'gear-sort']) $( '#' + id).addEventListener(id === 'gear-search' ? 'input' : 'change', () => { limit = 40; search(); });
    $('#gear-enchant').addEventListener('change', () => { if (candidate) equipChoice({ ...candidate, enchant: $('#gear-enchant').value }); });
    $('#gear-more').addEventListener('click', () => { limit += 40; search(); });
    $('#gear-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => $(`[data-slot="${slot}"]`)?.focus());
    $('#gear-remove').addEventListener('click', () => equipChoice(null));
    $('#gear-race').addEventListener('change', () => {
      if (busy) return;
      try { callbacks.apply(gear.validate({ ...build, race: $('#gear-race').value })); }
      catch (error) { $('#gear-status').textContent = error.message + ' Unequip faction-restricted items before changing race.'; $('#gear-race').value = build.race; }
    });
    return { sync, refreshDisplay() { if (dialog.open) { search(); if (candidate) { renderEnchants(); detail(); } } } };
  }
  root.FOREVER_FERAL_GEAR_UI = { init, sortItems, sortEnchants, SLOT_LAYOUT, pickerItem, pickerEstimate, compatibleEnchants };
  if (typeof module === 'object' && module.exports) module.exports = { init, sortItems, sortEnchants, SLOT_LAYOUT, pickerItem, pickerEstimate, compatibleEnchants };
})(globalThis);
