/* Pure eligibility, readiness, coverage and local progress contracts. */
(function(root) {
  'use strict';
  const PROGRESS_VERSION=1;
  const CLASSES={Warrior:1,Paladin:2,Hunter:4,Rogue:8,Priest:16,Shaman:64,Mage:128,Warlock:256,Druid:1024};
  const RACES={Alliance:['Human','Dwarf','Night Elf','Gnome','High Order Skyborne'],Horde:['Orc','Undead','Tauren','Troll','Windshaper Skyborne']};
  const RACE_BITS={Human:1,Dwarf:4,'Night Elf':8,Gnome:64,Orc:2,Undead:16,Tauren:32,Troll:128};
  const PROFESSIONS=['Alchemy','Blacksmithing','Enchanting','Engineering','Herbalism','Leatherworking','Mining','Skinning','Tailoring','Cooking','First Aid','Fishing'];
  const own=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
  const clone=x=>JSON.parse(JSON.stringify(x));
  const isObject=x=>x&&typeof x==='object'&&!Array.isArray(x);
  function name(value){if(typeof value!=='string'||!value.trim()||value.trim().length>80)throw Error('Use a name between 1 and 80 characters.');return value.trim();}
  function selection(s={}) {
    const result={faction:s.faction||'Horde',race:s.race||'Tauren',class:s.class||'Druid',level:Number(s.level??1),professions:s.professions||[]};
    if(!RACES[result.faction]?.includes(result.race))throw Error('Choose a race from this faction.');
    if(!own(CLASSES,result.class))throw Error('Choose a supported class.');
    if(!Number.isInteger(result.level)||result.level<1||result.level>60)throw Error('Level must be a whole number from 1 to 60.');
    if(!Array.isArray(result.professions)||result.professions.some(x=>!PROFESSIONS.includes(x)))throw Error('Unknown profession.');
    result.professions=[...new Set(result.professions)];return result;
  }
  function character(id,n,s,dataVersion,routeVersion=dataVersion){return {id,name:name(n),selection:selection(s),quests:{},steps:{},inventory:{},flightPaths:[],visits:{},branches:{},hearth:{bind:'',readyAt:0},otherQuestSlots:0,logCapacity:20,dataVersion,reviewedDataVersion:dataVersion,reviewedRouteVersion:routeVersion};}
  function validateCharacter(c) {
    if(!isObject(c)||typeof c.id!=='string'||!/^[a-zA-Z0-9_-]{1,100}$/.test(c.id))throw Error('Invalid character record.');
    const out=character(c.id,c.name,c.selection,String(c.dataVersion||'unknown'));
    out.reviewedDataVersion=String(c.reviewedDataVersion||c.dataVersion||'unknown').slice(0,100);
    out.reviewedRouteVersion=String(c.reviewedRouteVersion||c.dataVersion||'unknown').slice(0,100);
    for(const key of ['quests','steps','inventory','visits','branches']) {
      if(!isObject(c[key])||Object.keys(c[key]).length>10000)throw Error('Invalid '+key+' data.');
      for(const [id,value] of Object.entries(c[key])){
        if(!/^[a-zA-Z0-9 .’'():/-]{1,160}$/.test(id)||['__proto__','constructor','prototype'].includes(id))throw Error('Invalid progress key.');
        if(key==='quests'){
          if(!/^\d+$/.test(id)||!isObject(value)||!['none','accepted','objectives','turned-in','skipped'].includes(value.stage))throw Error('Invalid quest progress.');
          out.quests[id]={stage:value.stage,receivedShare:value.receivedShare===true,revision:String(value.revision||'unknown').slice(0,100),reason:String(value.reason||'').slice(0,300)};
        }else if(key==='steps'){
          if(!isObject(value)||typeof value.done!=='boolean')throw Error('Invalid route-step progress.');
          out.steps[id]={done:value.done,revision:String(value.revision||'unknown').slice(0,100)};
        }else if(key==='branches') { if(typeof value!=='string')throw Error('Invalid branch.');out.branches[id]=value.slice(0,100); }
        else {if(typeof value!=='boolean')throw Error('Invalid checklist value.');out[key][id]=value;}
      }
    }
    if(!Array.isArray(c.flightPaths)||c.flightPaths.length>200||c.flightPaths.some(x=>typeof x!=='string'||x.length>100))throw Error('Invalid flight paths.');
    out.flightPaths=[...new Set(c.flightPaths)];
    if(!isObject(c.hearth)||typeof c.hearth.bind!=='string'||!Number.isFinite(c.hearth.readyAt)||c.hearth.readyAt<0)throw Error('Invalid hearthstone state.');
    out.hearth={bind:c.hearth.bind.slice(0,100),readyAt:c.hearth.readyAt};
    for(const key of ['otherQuestSlots','logCapacity']){const v=c[key];if(!Number.isInteger(v)||v<0||v>100||(key==='logCapacity'&&v===0))throw Error('Invalid quest-log capacity.');out[key]=v;}
    return out;
  }
  function importLibrary(text) {
    if(typeof text!=='string'||text.length>2000000)throw Error('Choose a progress file smaller than 2 MB.');
    const raw=JSON.parse(text);
    if(!isObject(raw)||raw.schemaVersion!==PROGRESS_VERSION||!Array.isArray(raw.characters)||raw.characters.length>100)throw Error('Unsupported progress-file version.');
    const characters=raw.characters.map(validateCharacter);
    if(new Set(characters.map(c=>c.id)).size!==characters.length)throw Error('Duplicate character IDs.');
    if(new Set(characters.map(c=>c.name.toLowerCase())).size!==characters.length)throw Error('Duplicate character names.');
    if(characters.length&&!characters.some(c=>c.id===raw.activeId))throw Error('Active character is missing.');
    return {schemaVersion:PROGRESS_VERSION,activeId:raw.activeId||null,characters};
  }
  function eligibility(q,c) {
    const s=c.selection||c, reasons=[];
    if(q.faction!=='Both'&&q.faction!=='Unknown'&&q.faction!==s.faction)return {state:'excluded',reason:`${q.faction} quest.`};
    if(q.classMask && !(q.classMask&CLASSES[s.class]))return {state:'excluded',reason:'Class restriction in the bundled record.'};
    if(q.professions?.some(p=>!s.professions.includes(p)))return {state:'excluded',reason:`Requires ${q.professions.join(' / ')}.`};
    if(q.raceMask&&q.raceMask!=='0'){
      const bit=RACE_BITS[s.race];
      if(bit && !(BigInt(q.raceMask)&BigInt(bit)))return {state:'excluded',reason:'Race restriction in the bundled record (provisional).'};
      if(!bit)reasons.push('Skyborne race-mask mapping is unverified.');
    }
    if(q.branch){const chosen=c.branches?.[q.branch.group];if(chosen&&chosen!==q.branch.value)return {state:'excluded',reason:`Alternative branch: ${chosen}.`};if(!chosen)reasons.push('Choose the compatible quest branch.');}
    if(q.faction==='Unknown')reasons.push('Faction eligibility is unknown.');
    if(q.eligibilityUnresolved)reasons.push('This record has unresolved character eligibility.');
    return {state:reasons.length?'unknown':'eligible',reason:reasons.join(' ')};
  }
  const stage=(c,id)=>c.quests[id]?.stage||'none';
  const turnedIn=(c,id)=>stage(c,id)==='turned-in';
  function requirements(q,c,data) {
    const e=eligibility(q,c),missing=[],unknown=[];
    if(e.state==='excluded')return {eligible:false,missing:[e.reason],unknown:[]};
    if(e.state==='unknown')unknown.push(e.reason);
    if(q.minLevel==null)unknown.push('Minimum pickup level unknown.');else if(c.selection.level<q.minLevel)missing.push(`Reach level ${q.minLevel}.`);
    for(const id of q.prerequisites||[])if(!turnedIn(c,id))missing.push(`Turn in ${data.quests.find(q=>q.id===id)?.name||'Quest'} #${id}.`);
    for(const alternatives of q.prerequisiteAny||[])if(!alternatives.some(id=>turnedIn(c,id)))missing.push(`Complete one prerequisite branch: ${alternatives.join(' / ')}.`);
    for(const item of q.requiredItems||[])if(!c.inventory[item])missing.push(`Carry ${item}.`);
    if(q.chainUnresolved)unknown.push('Prerequisite chain is not fully resolved.');
    return {eligible:true,missing,unknown};
  }
  function canReceiveShare(q,c,data){const r=requirements(q,c,data);return {allowed:r.eligible&&!r.missing.length&&!r.unknown.length&&q.sharing==='shareable'&&q.sharingConfidence==='verified',reasons:[...r.missing,...r.unknown,...(q.sharing!=='shareable'||q.sharingConfidence!=='verified'?['Sharing has not been verified for this quest.']:[])]};}
  function setQuest(c,q,stageValue,data,receivedShare=false) {
    if(!['none','accepted','objectives','turned-in','skipped'].includes(stageValue))throw Error('Invalid quest state.');
    if(receivedShare&&!canReceiveShare(q,c,data).allowed)throw Error('Cannot skip this pickup through sharing. Check eligibility, prerequisites and required items.');
    const next=clone(c);next.quests[q.id]={stage:stageValue,receivedShare,revision:q.revision||data.dataVersion,reason:stageValue==='skipped'?'Skipped by player; not counted complete.':''};return next;
  }
  function questWindow(q) {
    return {pickup:q.minLevel??null,questLevel:q.questLevel??null,lastNonGrey:q.grey?.confidence==='verified'?q.grey.lastNonGrey:null};
  }
  function ancestors(ids,data){const result=new Set(ids),queue=[...ids];while(queue.length){const q=data.quests.find(q=>q.id===queue.shift());for(const id of [...(q?.prerequisites||[]),...(q?.relatedQuestIds||[]),...(q?.prerequisiteAny||[]).flat()])if(!result.has(id)){result.add(id);queue.push(id);}}return [...result];}
  function dungeonQuests(d,data){const ids=ancestors(d.questIds,data);return data.quests.filter(q=>ids.includes(q.id));}
  function windows(d,c,data,turnInLevel=c.selection.level) {
    const applicable=dungeonQuests(d,data).filter(q=>eligibility(q,c).state!=='excluded');
    const outstanding=applicable.filter(q=>!turnedIn(c,q.id));
    const maxima=applicable.filter(q=>q.minLevel!=null).map(q=>q.minLevel);
    const grey=outstanding.map(q=>questWindow(q).lastNonGrey).filter(n=>n!=null);
    const earliest=Math.max(d.entryLevel||1,...maxima),last=grey.length?Math.min(...grey):null;
    return {earliestKnownPickup:earliest,entry:d.entryLevel,planned:d.plan?.window||d.groupRange||[1,60],group:d.groupRange||null,lastNonGrey:last,unknownGrey:outstanding.some(q=>questWindow(q).lastNonGrey==null),unknownPreparation:applicable.some(q=>q.minLevel==null||q.chainUnresolved),conflict:last!=null&&earliest>last,turnInRisk:last!=null&&turnInLevel>last};
  }
  function logUse(c){return c.otherQuestSlots+Object.values(c.quests).filter(q=>['accepted','objectives'].includes(q.stage)).length;}
  function travel(c,plan,now=Date.now()) {
    const bind=plan.bind[c.selection.faction],remaining=Math.max(0,Math.ceil((c.hearth.readyAt-now)/60000));
    return {bind,remaining,canHearth:c.hearth.bind===bind&&remaining===0,reason:c.hearth.bind!==bind?'Bind differs; use the travel fallback.':remaining?`Hearthstone ready in ${remaining} min; use the fallback.`:'Hearthstone available.',fallback:plan.fallback};
  }
  function canFly(c,from,to){return c.flightPaths.includes(from)&&c.flightPaths.includes(to);}
  function useHearth(c,data,now=Date.now()){if(c.hearth.readyAt>now)throw Error('Hearthstone is still cooling down.');if(!c.hearth.bind)throw Error('Enter your actual hearthstone bind first.');const next=clone(c);next.hearth.readyAt=now+data.rules.hearthstoneSeconds*1000;return next;}
  function readiness(d,c,data,turnInLevel=c.selection.level) {
    const quests=dungeonQuests(d,data).filter(q=>eligibility(q,c).state!=='excluded'),w=windows(d,c,data,turnInLevel),missing=[],unknown=[];
    if(w.turnInRisk)missing.push(`Turn in before level ${w.lastNonGrey+1}; planned hand-in level is too late.`);
    if(w.conflict)missing.push('Full-package pickup and non-grey deadlines conflict; split the visits.');
    if(c.selection.level<w.planned[0])missing.push(`Target level ${w.planned[0]} before the planned group run.`);
    if(c.selection.level>w.planned[1]&&quests.some(q=>!turnedIn(c,q.id)))missing.push('Past the planned window: skip optional filler and inspect quest colours before the next run.');
    if(c.selection.level<(d.entryLevel||0))missing.push(`Instance entry minimum listed as ${d.entryLevel}.`);
    const outside=quests.filter(q=>!['inside','item','escort'].includes(q.starter)&&!['followup','chain-unresolved'].includes(q.role));
    for(const q of outside)if(!['accepted','objectives','turned-in'].includes(stage(c,q.id))){const r=requirements(q,c,data);missing.push(...r.missing,`Pick up ${q.name} #${q.id}.`);unknown.push(...r.unknown);}
    for(const q of quests) {
      if(!['turned-in','objectives'].includes(stage(c,q.id))&&q.role!=='followup'){
        if(q.minLevel!=null&&c.selection.level<q.minLevel)missing.push(`${q.name}: pickup requires level ${q.minLevel}.`);
        if(['accepted','none'].includes(stage(c,q.id)))for(const item of q.requiredItems||[])if(!c.inventory[item])missing.push(`Carry ${item} for ${q.name}.`);
      }
      if(stage(c,q.id)==='skipped')missing.push(`${q.name} was skipped, not completed.`);
      if(!turnedIn(c,q.id)&&(q.confidence!=='verified'||q.chainUnresolved))unknown.push(`${q.name}: provisional or unresolved facts.`);
    }
    if(!quests.length)unknown.push('No complete quest package is mapped.');
    if(d.observedGaps?.length)unknown.push(`${d.observedGaps.length} observed quest records still need mapping.`);
    if(w.unknownGrey)unknown.push('Forever quest-grey cutoffs are unverified; inspect colours at hand-in.');
    const reserve=d.plan?.reserve||1;if(c.logCapacity-logUse(c)<reserve)missing.push(`Reserve ${reserve} free quest-log slots for inside pickups; currently ${c.logCapacity-logUse(c)} free.`);
    const complete=quests.length>0&&quests.every(q=>turnedIn(c,q.id))&&!d.observedGaps?.length;
    const risk=w.turnInRisk||w.conflict||(c.selection.level>w.planned[1]&&!complete);
    const eligibilityUnknown=!quests.length||quests.every(q=>eligibility(q,c).state==='unknown');
    const status=eligibilityUnknown?'Unverified':risk?'Level risk':missing.length?'Preparation needed':unknown.length||!complete&&d.confidence!=='verified'?'Unverified':'Ready';
    return {status,reason:eligibilityUnknown?'Applicable quest package is unresolved; confirm availability before making this detour.':missing[0]||unknown[0]||(complete?'Mapped quests turned in; coverage gaps may remain.':'Known preparation complete.'),missing:[...new Set(missing)],unknown:[...new Set(unknown)],quests,window:w,complete,reserve};
  }
  function itinerary(c,data){return data.dungeons.filter(d=>d.plan).map(d=>({d,...readiness(d,c,data)})).filter(row=>row.quests.length||row.d.observedGaps?.length||!row.d.questIds.length).sort((a,b)=>a.d.plan.window[0]-b.d.plan.window[0]||a.d.id.localeCompare(b.d.id));}
  function overlaps(d,c,data){const w=windows(d,c,data);return itinerary(c,data).filter(r=>r.d.id!==d.id&&!r.complete&&r.window.planned[0]<=w.planned[1]+2&&r.window.planned[1]>=w.planned[0]-2);}
  function coverage(c,data){
    const rows=data.quests.map(q=>{const e=eligibility(q,c);let status,reason=e.reason;if(e.state==='excluded')status='excluded';else if(turnedIn(c,q.id)){status='completed';reason='Turn-in recorded by player.';}else if(stage(c,q.id)==='skipped'){status='unresolved';reason='Skipped; not completed.';}else if(e.state==='unknown'||q.chainUnresolved||!q.dungeons.some(id=>data.dungeons.some(d=>d.id===id&&d.plan))||!q.pickup||!q.turnIn||!q.objectives||q.minLevel==null){status='unresolved';reason=reason||'Pickup, objective, hand-in, eligibility or chain details need review.';}else{status='routed';reason='Preparation and completion path recorded; provisional evidence remains labelled.';}return {q,status,reason};});
    const counts={routed:0,completed:0,unresolved:0,excluded:0};rows.forEach(r=>counts[r.status]++);return {rows,counts,unknownRecords:data.observedGaps.length,complete:false};
  }
  function review(c,data){return {changed:c.reviewedDataVersion!==data.dataVersion||c.reviewedRouteVersion!==data.routeVersion,quests:Object.entries(c.quests).filter(([id,v])=>data.quests.find(q=>q.id===+id)?.revision!==v.revision).map(([id])=>id),steps:Object.entries(c.steps).filter(([,v])=>v.revision!==data.routeVersion).map(([id])=>id),orphaned:Object.keys(c.quests).filter(id=>!data.quests.some(q=>q.id===+id))};}
  function routeParams(c,chapter=''){const s=selection(c.selection||c);const p=new URLSearchParams({faction:s.faction,race:s.race,class:s.class,level:String(s.level)});if(s.professions.length)p.set('professions',s.professions.join(','));if(chapter)p.set('chapter',chapter);return p.toString();}
  function readRouteParams(search,data){const p=new URLSearchParams(search);if(!p.has('faction'))return null;const s=selection({faction:p.get('faction'),race:p.get('race'),class:p.get('class'),level:p.get('level'),professions:p.get('professions')?.split(',').filter(Boolean)||[]});const chapter=p.get('chapter')||'';if(chapter&&!data.dungeons.some(d=>d.id===chapter)&&chapter!=='start')throw Error('Unknown route chapter.');return {selection:s,chapter};}
  function validateData(data){const errors=[],ids=new Set(data.quests.map(q=>q.id));if(ids.size!==data.quests.length)errors.push('Duplicate quest ID');for(const q of data.quests){for(const id of [...q.prerequisites,...q.relatedQuestIds])if(!ids.has(id))errors.push(`Missing quest ${id}`);for(const id of q.dungeons)if(!data.dungeons.some(d=>d.id===id))errors.push(`Missing dungeon ${id}`);if(q.pickup?.coordinates?.some(n=>!Number.isFinite(n)||n<0||n>100))errors.push(`Invalid coordinates ${q.id}`);}const visiting=new Set(),seen=new Set();function visit(id){if(visiting.has(id)){errors.push(`Prerequisite cycle ${id}`);return;}if(seen.has(id))return;visiting.add(id);for(const p of data.quests.find(q=>q.id===id)?.prerequisites||[])visit(p);visiting.delete(id);seen.add(id);}ids.forEach(visit);for(const d of data.dungeons){if(!d.plan)errors.push(`Missing chapter ${d.id}`);if(new Set(d.questIds).size!==d.questIds.length)errors.push(`Duplicate coverage ${d.id}`);}return errors;}
  const api={PROGRESS_VERSION,CLASSES,RACES,PROFESSIONS,name,selection,character,validateCharacter,importLibrary,eligibility,requirements,canReceiveShare,setQuest,questWindow,windows,ancestors,dungeonQuests,stage,turnedIn,logUse,travel,canFly,useHearth,readiness,itinerary,overlaps,coverage,review,routeParams,readRouteParams,validateData};
  if(typeof module==='object'&&module.exports)module.exports=api;else root.ForeverLeveling=api;
})(globalThis);
