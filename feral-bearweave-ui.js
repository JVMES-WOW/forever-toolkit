// Experimental lab presentation. No settings change until Apply is pressed.
(function(root) {
  'use strict';
  function install(doc) {
    const make = (tag, text, props = {}) => Object.assign(doc.createElement(tag), { textContent: text || '', ...props });
    const button = make('button', 'Bearweave evaluation', { type: 'button', id: 'subtab-bear', tabIndex: -1 });
    for (const [key, value] of Object.entries({ role: 'tab', 'aria-controls': 'pane-bear', 'aria-selected': 'false', 'data-subgroup': 'optimization', 'data-subview': 'bear' })) button.setAttribute(key, value);
    doc.querySelector('#view-optimization .subtabs').append(button);
    const pane = make('section', '', { id: 'pane-bear', className: 'subview', hidden: true, tabIndex: 0 });
    pane.setAttribute('role', 'tabpanel'); pane.setAttribute('aria-labelledby', 'subtab-bear');
    pane.innerHTML = `<article class="panel"><h2>Bearweave evaluation <small>Experimental</small></h2>
      <p data-detail>Compare legal builds and playable recipes. Bearweaving remains off until you apply a choice.</p>
      <div id="bear-lab-controls"><div class="fields">
        <label>Builds per SP rank<input id="bear-lab-builds" type="number" min="2" max="200" value="2"></label>
        <label>Screening fights / recipe<input id="bear-lab-screening" type="number" min="1" max="500" value="50"></label>
        <label>Fresh validation pairs<input id="bear-lab-validation" type="number" min="2" max="10000" value="1000"></label>
      </div><div class="toggles"><label><input id="bear-lab-tune" type="checkbox" checked> Test entry-rule alternatives</label><label><input id="bear-lab-cat" type="checkbox" checked> Tune Cat-only finishers too</label><label><input id="bear-lab-sensitivity" type="checkbox" checked> Repeat shortlist: rank-5 Bite, 100ms, 200ms</label><label><input id="bear-lab-saved" type="checkbox"> Include my named talent builds (5/5 Furor required)</label></div>
      <details><summary>Matrix coverage</summary><div id="bear-lab-matrix"></div><p data-detail>Two builds per rank is a bounded starting search, not an optimal-build claim. Increase the build limit to test more legal point reallocations and one-point Primal Bite donor choices. Named builds are always retained. Entry alternatives and all actual allocations are included in the local export.</p></details></div>
      <div class="optimizer-actions"><button type="button" id="bear-lab-plan">Preview workload</button><button type="button" id="bear-lab-start" disabled>Start screening</button><button type="button" id="bear-lab-continue" disabled>Continue next job</button><button type="button" id="bear-lab-stop" disabled>Stop</button></div>
      <p id="bear-lab-workload" role="status">Preview the complete workload before starting. Each job is limited to 25,000 fights.</p><progress id="bear-lab-progress" max="1" value="0" aria-label="Bearweave progress"></progress><p id="bear-lab-status" role="status" aria-live="polite"></p>
      <details><summary>Tested builds</summary><div id="bear-lab-build-list"></div><p data-detail>Screening uses rank-4 Bite and shared fight seeds. Each tested build receives the same Cat-only tuning opportunities; its best screened Cat recipe is then used for weaving. Validation uses fresh paired iterations for the shortlist, its same-build Cat baselines, and the best tested Cat-only build. This is a bounded search, not proof of a global optimum.</p></details>
      <div class="optimizer-actions"><button type="button" id="bear-lab-validate" disabled>Validate shortlist</button><button type="button" id="bear-lab-export" disabled>Export experiment</button><button type="button" id="bear-lab-apply" disabled>Apply selected settings</button></div>
      <p id="bear-lab-highlights"></p><label>Result group<select id="bear-lab-group"><option value="screening">Screening</option></select></label>
      <p id="bear-lab-validation-workload"></p><div id="bear-lab-chart" class="bear-delay-chart" aria-label="DPS gain by swing rule"></div>
      <div class="table-wrap"><table><thead><tr><th>Select / Furor</th><th>Build / SP</th><th>Swing</th><th>Strategy</th><th>Return</th><th>DPS</th><th>Δ same build</th><th>Δ best Cat</th><th>Δ %</th><th>Weaves/min</th><th>Status</th></tr></thead><tbody id="bear-lab-table"></tbody></table></div>
      <p id="bear-lab-page-status"></p><button type="button" id="bear-lab-more" hidden>Show 100 more recipes</button>
      <p>Δ values use pooled combat time. Intervals are approximate 95% paired sampling intervals; they do not include mechanics uncertainty or selection bias. An interval including zero is inconclusive.</p>
      <div id="bear-lab-detail"></div></article>`;
    doc.getElementById('pane-weights').after(pane);
  }
  function mount(doc, api, hooks) {
    const $ = id => doc.getElementById(id), make = (tag, text, props = {}) => Object.assign(doc.createElement(tag), { textContent: text || '', ...props });
    const fixed = n => n == null ? '—' : n.toFixed(2), signed = n => n == null ? '—' : `${n >= 0 ? '+' : '−'}${Math.abs(n).toFixed(2)}`;
    const label = value => ({ current: 'Current beta', reverted: 'Reverted', both: 'Cat-only', disabled: 'Cat-only', auto: 'Auto only', maul: 'Maul', lacerate: 'Lacerate', primalBite: 'Primal Bite', mixed: 'Mixed', carry: 'Carryover', reset: 'Full reset', stay: 'Stay Bear', cancel: 'Cancel early', false: 'Off', true: 'On', none: '—', primary: 'Rank-4 Bite', 'rank-5-bite': 'Rank-5 Bite', '100ms': '100 ms input delay', '200ms': '200 ms input delay' }[value] || (String(value).startsWith('minimum-') ? `${String(value).slice(8)}s minimum` : String(value)));
    let plan = null, result = null, job = null, ticket = 0, working = false, selected = null, phase = '', optionSnapshot = '', rowLimit = 100;
    const matrix = { furors: ['current', 'reverted'], ranks: [0, 1, 2, 3], strategies: api.STRATEGIES, swings: api.SWINGS.map(s => s.id), exits: ['stay', 'cancel'], enrage: [false, true] };
    for (const [key, values] of Object.entries(matrix)) {
      const field = make('fieldset'), legend = make('legend', { furors: 'Furor', ranks: 'Shifting Power ranks', strategies: 'Weaves', swings: 'Natural swing rule', exits: 'Return policies', enrage: 'Enrage assistance' }[key]);
      field.append(legend);
      values.forEach((value, i) => { const text = make('label', `${label(value)} `), input = make('input', '', { type: 'checkbox', checked: true }); input.dataset.matrix = key; input.value = String(i); text.prepend(input); field.append(text); });
      $('bear-lab-matrix').append(field);
    }
    function settings() {
      return { screeningIterations: Number($('bear-lab-screening').value), validationIterations: Number($('bear-lab-validation').value), buildsPerRank: Number($('bear-lab-builds').value),
        tuneEntries: $('bear-lab-tune').checked, tuneCat: $('bear-lab-cat').checked, sensitivities: $('bear-lab-sensitivity').checked,
        savedBuilds: $('bear-lab-saved').checked ? hooks.builds() : [],
        ...Object.fromEntries(Object.entries(matrix).map(([key, values]) => [key, [...doc.querySelectorAll(`[data-matrix="${key}"]:checked`)].map(i => values[Number(i.value)])])) };
    }
    const same = () => { try { return plan && plan.signature === api.signature(hooks.config()) && optionSnapshot === JSON.stringify(settings()); } catch (_) { return false; } };
    function sync() {
      const busy = hooks.busy(), valid = same();
      $('bear-lab-plan').disabled = busy;
      $('bear-lab-start').disabled = busy || !valid || Boolean(job);
      $('bear-lab-continue').disabled = busy || !job || !valid;
      $('bear-lab-stop').disabled = !working && !job;
      $('bear-lab-validate').disabled = busy || !result || !valid || Boolean(job) || !api.shortlist(result).length;
      $('bear-lab-export').disabled = !result;
      $('bear-lab-apply').disabled = busy || !selected || !valid || selected.status !== 'validated';
      doc.querySelectorAll('#bear-lab-controls input').forEach(e => e.disabled = busy);
      if (plan && !valid && !working) $('bear-lab-status').textContent = 'Settings changed · preview a new workload before continuing or applying.';
    }
    function preview() {
      if (hooks.busy()) return;
      try {
        job?.return(); job = null; plan = api.plan(hooks.config(), settings()); optionSnapshot = JSON.stringify(settings()); result = null; selected = null;
        $('bear-lab-workload').textContent = `${plan.screeningFights.toLocaleString()} screening fights · ${plan.jobs} jobs · ${plan.builds.length} of ${plan.generatedBuilds.length} generated builds. Validation + sensitivity maximum: ${plan.validationUpperBound.toLocaleString()} additional fights; exact shortlist workload appears before validation.`;
        $('bear-lab-build-list').replaceChildren(...plan.builds.map(b => {
          const item = make('details'), list = make('ul'), talents = root.FOREVER_FERAL_TALENTS;
          for (const [id, rank] of Object.entries(talents.decode(b.code))) if (rank) list.append(make('li', `${talents.byId[id].name}: ${rank}/${talents.byId[id].max}`));
          item.append(make('summary', `${b.label} · SP ${b.rank}/3 · ${b.points} points${b.primal ? ' · Primal Bite' : ''}`), list, make('pre', b.code)); return item;
        }));
        $('bear-lab-status').textContent = 'Ready. Screening uses the displayed seed and rank-4 Bite; your simulator settings remain unchanged.';
        $('bear-lab-table').replaceChildren(); $('bear-lab-detail').replaceChildren(); $('bear-lab-chart').replaceChildren();
      } catch (error) { plan = null; $('bear-lab-status').textContent = error.message; }
      sync();
    }
    function pump() {
      if (!job || working || hooks.busy() || !same()) return;
      working = true; const current = ++ticket; hooks.setBusy(true); sync();
      const tick = () => {
        if (current !== ticket) return;
        try {
          const until = performance.now() + 35;
          do {
            const step = job.next();
            if (step.done) {
              result = step.value; job = null; working = false; hooks.setBusy(false);
              $('bear-lab-status').textContent = `${phase} complete. Results are best tested configurations, not a proven optimum.`; render(); sync(); return;
            }
            const p = step.value; $('bear-lab-progress').max = p.total; $('bear-lab-progress').value = p.completed;
            $('bear-lab-status').textContent = `${p.phase} · ${p.completed.toLocaleString()} / ${p.total.toLocaleString()} fights · job ${p.job} · ${p.candidate}`;
            if (p.jobFights === api.JOB_LIMIT && p.completed < p.total) {
              working = false; hooks.setBusy(false); $('bear-lab-status').textContent += ' · Job complete. Continue when ready.'; sync(); return;
            }
          } while (performance.now() < until);
          setTimeout(tick, 0);
        } catch (error) { job = null; working = false; hooks.setBusy(false); $('bear-lab-status').textContent = error.message; sync(); }
      };
      setTimeout(tick, 0);
    }
    function group() { return result?.validations?.find(v => v.group.id === $('bear-lab-group').value); }
    function choose(row) { selected = row; renderDetail(); sync(); }
    function renderDetail() {
      const host = $('bear-lab-detail'); host.replaceChildren(); if (!selected) return;
      const r = selected, m = r.forms;
      host.append(make('h3', `${label(r.strategy)} · ${fixed(r.dps)} DPS`));
      if (r.strategy !== 'disabled' && !m.entries) host.append(make('p', 'No Bear excursions occurred. This is not evidence of a zero-cost weave. Loosen entry rules or test a longer encounter to observe this strategy.'));
      const dl = make('dl', '', { className: 'bear-metrics' });
      for (const [name, value] of Object.entries({ 'Cat / Bear / caster uptime': `${fixed(m.uptime.cat)} / ${fixed(m.uptime.bear)} / ${fixed(m.uptime.caster)}%`,
        'Entries / completed / aborted per fight': `${fixed(m.entries)} / ${fixed(m.completed)} / ${fixed(m.aborted)}`, 'Weave inputs per fight': fixed(m.inputs),
        'Excursion / first Bear swing': `${fixed(m.averageExcursion)} / ${fixed(m.firstSwingDelay)}s`, 'Cat re-entry Energy': fixed(m.averageReentryEnergy),
        'Form mana / total mana spent': `${fixed(m.manaSpent)} / ${fixed(r.manaSpent)}`, 'OOM fights / mean first OOM': `${fixed(r.oomPercent)}% / ${fixed(r.oomTime)}s`,
        'Discarded Rage / Energy': `${fixed(m.rageDiscarded)} / ${fixed(m.energyDiscarded)}`, 'Rage spent / refunded': `${fixed(m.rageSpent)} / ${fixed(m.rageRefunded)}`,
        'Windfury attacks before swing floor / fight': fixed(m.windfuryBeforeFloor), 'Bear damage DPS (includes later Lacerate ticks)': fixed(r.bearDps),
        'Cat-source DPS difference vs same build': r.catDamageDifference ? signed(r.catDamageDifference.delta) : '—', 'Rip / Rake uptime': `${fixed(r.ripUptime)} / ${fixed(r.rakeUptime)}%`,
        'SP / Shred CPM': `${fixed(r.shiftCPM)} / ${fixed(r.shredCPM)}`,
        ...Object.fromEntries(Object.entries(m.cpm).map(([k, v]) => [`${k} CPM`, fixed(v)])) })) dl.append(make('dt', name), make('dd', value));
      host.append(dl);
      for (const [label, delta] of [['Same-build Cat-only', r.sameBuild], ['Best tested Cat-only', r.bestCat]]) if (delta) host.append(make('p', `${label}: ${signed(delta.delta)} DPS [${signed(delta.low)}, ${signed(delta.high)}] · ${delta.low <= 0 && delta.high >= 0 ? 'inconclusive at this sample size' : 'sampling interval excludes zero'} · ${r.status}.`));
      const ul = make('ul'); ul.append(...r.recipe.map(line => make('li', line))); host.append(ul);
      const details = make('details'); details.append(make('summary', 'Blocked entry decisions / returns / allocation'), make('pre', JSON.stringify({ build: r.build.code, blocked: m.blocked, returns: m.returnReasons, iterations: [r.firstIteration, r.lastIteration], oomDefinition: 'First unfunded Shift or otherwise eligible weave blocked by the return-mana reserve.' }, null, 2))); host.append(details);
    }
    function render() {
      const select = $('bear-lab-group'), old = select.value;
      select.replaceChildren(make('option', 'Screening', { value: 'screening' }), ...(result.validations || []).map(v => make('option', `Validated · ${label(v.group.id)}`, { value: v.group.id })));
      select.value = result.validations?.some(v => v.group.id === old) ? old : result.validations ? 'primary' : 'screening'; renderRows();
      const v = api.validationPlan(result); $('bear-lab-validation-workload').textContent = `${v.selected.length} shortlisted recipes · ${v.total.toLocaleString()} fresh validation + sensitivity fights · ${v.jobs} jobs. Same-build and best-Cat paired references included.`;
    }
    function renderRows() {
      const g = group(), rows = g?.rows || result.rows, cat = g?.bestCat || result.bestCat, best = api.bestWeave(rows); selected = null;
      $('bear-lab-highlights').textContent = `Best tested Cat-only: ${fixed(cat.dps)} DPS (SP ${cat.build.rank}/3). ` + (best ? `Best tested recipe with actual weaving: ${fixed(best.dps)} DPS, ${label(best.strategy)}, ${label(best.furor)}, SP ${best.build.rank}/3. Difference ${signed(best.bestCat.delta)} DPS [${signed(best.bestCat.low)}, ${signed(best.bestCat.high)}]. ${cat.build.rank === best.build.rank ? 'Same tested SP rank.' : 'Different tested SP ranks.'} ${g ? 'Fresh paired validation.' : 'Screening only.'}` : 'No Bear excursions occurred. These recipes do not establish the value of weaving.');
      const body = $('bear-lab-table'); body.replaceChildren();
      const tableRows = [cat, ...rows].sort((a, b) => b.dps - a.dps);
      for (const r of tableRows.slice(0, rowLimit)) {
        const tr = make('tr'), pick = make('button', label(r.furor), { type: 'button' }); pick.addEventListener('click', () => choose(r)); const td = make('td'); td.append(pick); tr.append(td);
        for (const value of [`${r.build.label} · ${r.build.rank}/3`, label(r.swing), label(r.strategy), r.strategy === 'disabled' ? '—' : label(r.config.bearExit), fixed(r.dps), signed(r.sameBuild?.delta), signed(r.bestCat?.delta), r.bestCat?.percent == null ? '—' : `${signed(r.bestCat.percent)}%`, fixed(r.forms.weavesPerMinute), r.strategy !== 'disabled' && !r.forms.entries ? 'No excursions' : r.status || (g ? 'validated' : 'screening')]) tr.append(make('td', value));
        tr.children[7].className = root.FOREVER_FERAL_DISPLAY.dpsClass(r.bestCat?.delta); body.append(tr);
      }
      $('bear-lab-page-status').textContent = `${Math.min(rowLimit, tableRows.length)} of ${tableRows.length} recipes shown. All candidates remain in the export.`;
      $('bear-lab-more').hidden = tableRows.length <= rowLimit;
      const chart = $('bear-lab-chart'); chart.replaceChildren(make('h3', 'Best tested gain by swing rule · vs best Cat'));
      for (const furor of plan.options.furors) {
        const points = plan.options.swings.map(id => rows.find(r => r.furor === furor && r.swing === id && r.forms.entries > 0)).filter(Boolean);
        const max = Math.max(1, ...points.map(p => Math.abs(p.bestCat.delta)));
        chart.append(make('h4', label(furor)));
        for (const r of points) {
          const line = make('div', '', { className: 'bear-delay-row' }), bar = make('i'); bar.style.width = `${Math.abs(r.bestCat.delta) / max * 100}%`; bar.className = root.FOREVER_FERAL_DISPLAY.dpsClass(r.bestCat.delta);
          const track = make('span', '', { className: 'bear-delay-track' }); track.append(bar);
          line.append(make('span', label(r.swing)), track, make('span', `${signed(r.bestCat.delta)} DPS`)); chart.append(line);
        }
      }
      renderDetail(); sync();
    }
    $('bear-lab-plan').addEventListener('click', preview);
    $('bear-lab-start').addEventListener('click', () => { if (hooks.busy() || !same()) return; result = null; phase = 'Screening'; job = api.screen(plan); pump(); });
    $('bear-lab-continue').addEventListener('click', pump);
    $('bear-lab-stop').addEventListener('click', () => { ticket++; job?.return(); job = null; working = false; hooks.setBusy(false); $('bear-lab-status').textContent = 'Stopped. No simulator settings changed; incomplete phase discarded.'; sync(); });
    $('bear-lab-validate').addEventListener('click', () => { if (hooks.busy() || !same() || !result) return; phase = 'Validation'; job = api.validate(result); pump(); });
    $('bear-lab-group').addEventListener('change', () => { rowLimit = 100; if (result) renderRows(); });
    $('bear-lab-more').addEventListener('click', () => { rowLimit += 100; if (result) renderRows(); });
    $('bear-lab-controls').addEventListener('input', sync);
    $('bear-lab-export').addEventListener('click', () => {
      if (!result) return; const url = URL.createObjectURL(new Blob([api.exportResult(result)], { type: 'application/json' }));
      const link = make('a', '', { href: url, download: `feral-bearweave-${plan.config.seed}.json` }); link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
    $('bear-lab-apply').addEventListener('click', () => {
      if (!same() || hooks.busy() || selected?.status !== 'validated') return;
      try { hooks.apply(selected.config); $('bear-lab-status').textContent = 'Selected talent build and rotation applied. No simulation started.'; } catch (error) { $('bear-lab-status').textContent = error.message; } sync();
    });
    return { sync, invalidate() { if (plan && !working) { job?.return(); job = null; plan = null; $('bear-lab-status').textContent = 'Settings changed · preview a new experiment.'; sync(); } } };
  }
  root.FOREVER_FERAL_BEARWEAVE_UI = { install, mount };
})(globalThis);
