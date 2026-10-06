// Local, versioned Druid tree. Display and export IDs share the existing calculator's data.
(function(root){
  const data = {
  "source": "Sixty Upgrades Forever tree (local calculator, 2026-10-02); mechanics verified against Forever df7a2cf, 2026-10-05",
  "trees": [
    {
      "id": "balance",
      "name": "Balance",
      "talents": [
        {
          "id": "improved-wrath",
          "name": "Improved Wrath",
          "max": 5,
          "row": 1,
          "col": 2,
          "icon": "icons/druid/improved-wrath.jpg",
          "sourceIcon": "spell_nature_abolishmagic",
          "exportId": 104923,
          "spellId": 16814,
          "descriptions": [
            "Reduces the cast time of your Wrath spell by 0.1 sec and its Mana cost by 10%.",
            "Reduces the cast time of your Wrath spell by 0.2 sec and its Mana cost by 20%.",
            "Reduces the cast time of your Wrath spell by 0.3 sec and its Mana cost by 30%.",
            "Reduces the cast time of your Wrath spell by 0.4 sec and its Mana cost by 40%.",
            "Reduces the cast time of your Wrath spell by 0.5 sec and its Mana cost by 50%."
          ]
        },
        {
          "id": "genesis",
          "name": "Genesis",
          "max": 5,
          "row": 1,
          "col": 3,
          "icon": "icons/druid/genesis.jpg",
          "sourceIcon": "spell_arcane_arcane03",
          "exportId": 104924,
          "spellId": 1223081,
          "descriptions": [
            "Increases the periodic damage and healing done by your spells and abilities by 1%.",
            "Increases the periodic damage and healing done by your spells and abilities by 2%.",
            "Increases the periodic damage and healing done by your spells and abilities by 3%.",
            "Increases the periodic damage and healing done by your spells and abilities by 4%.",
            "Increases the periodic damage and healing done by your spells and abilities by 5%."
          ]
        },
        {
          "id": "moonglow",
          "name": "Moonglow",
          "max": 3,
          "row": 2,
          "col": 1,
          "icon": "icons/druid/moonglow.jpg",
          "sourceIcon": "spell_nature_sentinal",
          "exportId": 104925,
          "spellId": 16845,
          "descriptions": [
            "Reduces the Mana cost of your damaging spells by 8%.",
            "Reduces the Mana cost of your damaging spells by 17%.",
            "Reduces the Mana cost of your damaging spells by 25%."
          ]
        },
        {
          "id": "improved-moonfire",
          "name": "Improved Moonfire",
          "max": 2,
          "row": 2,
          "col": 2,
          "icon": "icons/druid/improved-moonfire.jpg",
          "sourceIcon": "spell_nature_starfall",
          "exportId": 104931,
          "spellId": 16821,
          "descriptions": [
            "Increases the damage and critical strike chance of your Moonfire spell by 5%.",
            "Increases the damage and critical strike chance of your Moonfire spell by 10%."
          ]
        },
        {
          "id": "natures-majesty",
          "name": "Nature’s Majesty",
          "max": 2,
          "row": 2,
          "col": 3,
          "icon": "icons/druid/natures-majesty.jpg",
          "sourceIcon": "inv_staff_01",
          "exportId": 104927,
          "spellId": 1223082,
          "descriptions": [
            "Increases your critical strike chance with spells and melee attacks by 2%.",
            "Increases your critical strike chance with spells and melee attacks by 4%."
          ]
        },
        {
          "id": "natures-reach",
          "name": "Nature’s Reach",
          "max": 2,
          "row": 2,
          "col": 4,
          "icon": "icons/druid/natures-reach.jpg",
          "sourceIcon": "spell_nature_naturetouchgrow",
          "exportId": 104929,
          "spellId": 16819,
          "descriptions": [
            "Increases the range of your offensive Balance spells by 10% and improves your chance to hit by 2%.",
            "Increases the range of your offensive Balance spells by 20% and improves your chance to hit by 4%."
          ]
        },
        {
          "id": "improved-entangling-roots",
          "name": "Improved Entangling Roots",
          "max": 3,
          "row": 3,
          "col": 1,
          "icon": "icons/druid/improved-entangling-roots.jpg",
          "sourceIcon": "spell_nature_stranglevines",
          "exportId": 104926,
          "spellId": 16918,
          "descriptions": [
            "Increases the damage done by your Entangling Roots spell by 25%, and its victims can take up to 25% more damage without interrupting the effect.",
            "Increases the damage done by your Entangling Roots spell by 50%, and its victims can take up to 50% more damage without interrupting the effect.",
            "Increases the damage done by your Entangling Roots spell by 75%, and its victims can take up to 75% more damage without interrupting the effect."
          ]
        },
        {
          "id": "natures-splendor",
          "name": "Nature’s Splendor",
          "max": 1,
          "row": 3,
          "col": 3,
          "icon": "icons/druid/natures-splendor.jpg",
          "sourceIcon": "spell_nature_natureresistancetotem",
          "exportId": 104928,
          "spellId": 1223083,
          "descriptions": [
            "Increases the duration of your Moonfire and Rejuvenation spells by 3 sec, your Regrowth spell by 6 sec, and your Insect Swarm spell by 2 sec."
          ]
        },
        {
          "id": "insect-swarm",
          "name": "Insect Swarm",
          "max": 1,
          "row": 4,
          "col": 1,
          "icon": "icons/druid/insect-swarm.jpg",
          "sourceIcon": "spell_nature_insectswarm",
          "exportId": 104930,
          "spellId": 5570,
          "descriptions": [
            "The enemy target is swarmed by insects, decreasing their chance to hit with attacks by 2% and causing 48 Nature damage over 12 sec."
          ]
        },
        {
          "id": "vengeance",
          "name": "Vengeance",
          "max": 5,
          "row": 4,
          "col": 2,
          "prerequisite": "improved-moonfire",
          "icon": "icons/druid/vengeance.jpg",
          "sourceIcon": "spell_nature_purge",
          "exportId": 104932,
          "spellId": 16909,
          "descriptions": [
            "Increases the critical strike damage bonus of your Arcane and Nature spells by 20%.",
            "Increases the critical strike damage bonus of your Arcane and Nature spells by 40%.",
            "Increases the critical strike damage bonus of your Arcane and Nature spells by 60%.",
            "Increases the critical strike damage bonus of your Arcane and Nature spells by 80%.",
            "Increases the critical strike damage bonus of your Arcane and Nature spells by 100%."
          ]
        },
        {
          "id": "improved-starfire",
          "name": "Improved Starfire",
          "max": 5,
          "row": 4,
          "col": 3,
          "icon": "icons/druid/improved-starfire.jpg",
          "sourceIcon": "spell_arcane_starfire",
          "exportId": 104933,
          "spellId": 16850,
          "descriptions": [
            "Reduces the cast time of Starfire by 0.1 sec and Starfire has a 3% chance to stun its target for 3 sec.",
            "Reduces the cast time of Starfire by 0.2 sec and Starfire has a 6% chance to stun its target for 3 sec.",
            "Reduces the cast time of Starfire by 0.3 sec and Starfire has a 9% chance to stun its target for 3 sec.",
            "Reduces the cast time of Starfire by 0.4 sec and Starfire has a 12% chance to stun its target for 3 sec.",
            "Reduces the cast time of Starfire by 0.5 sec and Starfire has a 15% chance to stun its target for 3 sec."
          ]
        },
        {
          "id": "overgrowth",
          "name": "Overgrowth",
          "max": 2,
          "row": 5,
          "col": 1,
          "icon": "icons/druid/overgrowth.jpg",
          "sourceIcon": "inv_misc_herb_15",
          "exportId": 110844,
          "spellId": 17245,
          "descriptions": [
            "Increases the maximum number of targets you may have affected by Entangling Roots by 1.",
            "Increases the maximum number of targets you may have affected by Entangling Roots by 2."
          ]
        },
        {
          "id": "natures-grace",
          "name": "Nature’s Grace",
          "max": 1,
          "row": 5,
          "col": 2,
          "icon": "icons/druid/natures-grace.jpg",
          "sourceIcon": "spell_nature_naturesblessing",
          "exportId": 104934,
          "spellId": 16880,
          "descriptions": [
            "All non-periodic spell criticals grace you with a blessing of nature, increasing your spellcasting speed and reducing your global cooldown by 10% for 3 sec."
          ]
        },
        {
          "id": "eclipse",
          "name": "Eclipse",
          "max": 3,
          "row": 5,
          "col": 3,
          "icon": "icons/druid/eclipse.jpg",
          "sourceIcon": "ability_druid_eclipse",
          "exportId": 104935,
          "spellId": 408248,
          "descriptions": [
            "Your Wrath spell reduces the cast time of your next 2 Starfire spells by 0.17 sec. Stores up to 4 charges. Lasts 15 sec.",
            "Your Wrath spell reduces the cast time of your next 2 Starfire spells by 0.33 sec. Stores up to 4 charges. Lasts 15 sec.",
            "Your Wrath spell reduces the cast time of your next 2 Starfire spells by 0.50 sec. Stores up to 4 charges. Lasts 15 sec."
          ]
        },
        {
          "id": "moonfury",
          "name": "Moonfury",
          "max": 5,
          "row": 6,
          "col": 2,
          "icon": "icons/druid/moonfury.jpg",
          "sourceIcon": "spell_nature_moonglow",
          "exportId": 104936,
          "spellId": 16896,
          "descriptions": [
            "Increases the damage done by your Arcane and Nature spells by 2%.",
            "Increases the damage done by your Arcane and Nature spells by 4%.",
            "Increases the damage done by your Arcane and Nature spells by 6%.",
            "Increases the damage done by your Arcane and Nature spells by 8%.",
            "Increases the damage done by your Arcane and Nature spells by 10%."
          ]
        },
        {
          "id": "moonkin-form",
          "name": "Moonkin Form",
          "max": 1,
          "row": 7,
          "col": 2,
          "icon": "icons/druid/moonkin-form.jpg",
          "sourceIcon": "spell_nature_forceofnature",
          "exportId": 104937,
          "spellId": 24858,
          "descriptions": [
            "Shapeshift into Moonkin Form, increasing Omen of Clarity’s chance to trigger by 100%, Armor contribution from items by 360%, and all party members within 45 yards have their Critical Strike chance increased by 3%, exclusive with Leader of the Pack. Also protects the caster from Polymorph effects and prevents the use of healing spells.\n\nThe act of shapeshifting frees the caster of Polymorph and Movement Impairing effects."
          ]
        }
      ]
    },
    {
      "id": "feral-combat",
      "name": "Feral Combat",
      "talents": [
        {
          "id": "ferocity",
          "name": "Ferocity",
          "max": 5,
          "row": 1,
          "col": 2,
          "icon": "icons/druid/ferocity.jpg",
          "sourceIcon": "ability_hunter_pet_hyena",
          "exportId": 104938,
          "spellId": 16934,
          "descriptions": [
            "Reduces the cost of your Maul, Primal Bite, Swipe, Claw, and Rake abilities by 1 Rage or Energy.",
            "Reduces the cost of your Maul, Primal Bite, Swipe, Claw, and Rake abilities by 2 Rage or Energy.",
            "Reduces the cost of your Maul, Primal Bite, Swipe, Claw, and Rake abilities by 3 Rage or Energy.",
            "Reduces the cost of your Maul, Primal Bite, Swipe, Claw, and Rake abilities by 4 Rage or Energy.",
            "Reduces the cost of your Maul, Primal Bite, Swipe, Claw, and Rake abilities by 5 Rage or Energy."
          ]
        },
        {
          "id": "heart-of-the-wild",
          "name": "Heart of the Wild",
          "max": 5,
          "row": 1,
          "col": 3,
          "icon": "icons/druid/heart-of-the-wild.jpg",
          "sourceIcon": "spell_holy_blessingofagility",
          "exportId": 104939,
          "spellId": 17003,
          "descriptions": [
            "Increases your Intellect by 2%. In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 4% and while in Cat Form your Strength is increased by 2%.",
            "Increases your Intellect by 4%. In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 8% and while in Cat Form your Strength is increased by 4%.",
            "Increases your Intellect by 6%. In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 12% and while in Cat Form your Strength is increased by 6%.",
            "Increases your Intellect by 8%. In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 16% and while in Cat Form your Strength is increased by 8%.",
            "Increases your Intellect by 10%. In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 20% and while in Cat Form your Strength is increased by 10%."
          ]
        },
        {
          "id": "feral-swiftness",
          "name": "Feral Swiftness",
          "max": 2,
          "row": 2,
          "col": 1,
          "icon": "icons/druid/feral-swiftness.jpg",
          "sourceIcon": "spell_nature_spiritwolf",
          "exportId": 104943,
          "spellId": 17002,
          "descriptions": [
            "Increases your movement speed while in Cat Form by 15%, and increases your chance to Dodge by 2%.",
            "Increases your movement speed while in Cat Form by 30%, and increases your chance to Dodge by 4%."
          ]
        },
        {
          "id": "feral-instinct",
          "name": "Feral Instinct",
          "max": 3,
          "row": 2,
          "col": 2,
          "icon": "icons/druid/feral-instinct.jpg",
          "sourceIcon": "ability_ambush",
          "exportId": 104940,
          "spellId": 16947,
          "descriptions": [
            "Increases damage done by your Swipe ability by 10% and reduces the chance enemies have to detect you while Prowling as if you were 1 level higher.",
            "Increases damage done by your Swipe ability by 20% and reduces the chance enemies have to detect you while Prowling as if you were 2 levels higher.",
            "Increases damage done by your Swipe ability by 30% and reduces the chance enemies have to detect you while Prowling as if you were 3 levels higher."
          ]
        },
        {
          "id": "brutal-impact",
          "name": "Brutal Impact",
          "max": 2,
          "row": 2,
          "col": 3,
          "icon": "icons/druid/brutal-impact.jpg",
          "sourceIcon": "ability_druid_bash",
          "exportId": 104941,
          "spellId": 16940,
          "descriptions": [
            "Increases the stun duration of your Bash and Pounce abilities by 0.5 sec and reduces the cooldown of Bash by 15 sec.",
            "Increases the stun duration of your Bash and Pounce abilities by 1 sec and reduces the cooldown of Bash by 30 sec."
          ]
        },
        {
          "id": "thick-hide",
          "name": "Thick Hide",
          "max": 3,
          "row": 2,
          "col": 4,
          "icon": "icons/druid/thick-hide.jpg",
          "sourceIcon": "inv_misc_pelt_bear_03",
          "exportId": 104942,
          "spellId": 16929,
          "descriptions": [
            "While in Bear Form, Cat Form, Dire Bear Form, or Moonkin Form, you gain 1 additional base Armor per level and another 0.67 base Armor for each point of defense skill beyond five times your level. This amount can be further increased by multipliers from those forms.",
            "While in Bear Form, Cat Form, Dire Bear Form, or Moonkin Form, you gain 2 additional base Armor per level and another 1.33 base Armor for each point of defense skill beyond five times your level. This amount can be further increased by multipliers from those forms.",
            "While in Bear Form, Cat Form, Dire Bear Form, or Moonkin Form, you gain 3 additional base Armor per level and another 2.00 base Armor for each point of defense skill beyond five times your level. This amount can be further increased by multipliers from those forms."
          ]
        },
        {
          "id": "shredding-attacks",
          "name": "Shredding Attacks",
          "max": 3,
          "row": 3,
          "col": 1,
          "icon": "icons/druid/shredding-attacks.jpg",
          "sourceIcon": "spell_shadow_vampiricaura",
          "exportId": 104945,
          "spellId": 16966,
          "descriptions": [
            "Reduces the Energy cost of your Shred ability by 6 and reduces the Rage cost of your Lacerate ability by 1.",
            "Reduces the Energy cost of your Shred ability by 12 and reduces the Rage cost of your Lacerate ability by 2.",
            "Reduces the Energy cost of your Shred ability by 18 and reduces the Rage cost of your Lacerate ability by 3."
          ]
        },
        {
          "id": "savage-fury",
          "name": "Savage Fury",
          "max": 2,
          "row": 3,
          "col": 2,
          "icon": "icons/druid/savage-fury.jpg",
          "sourceIcon": "ability_druid_ravage",
          "exportId": 104948,
          "spellId": 16998,
          "descriptions": [
            "Increases the damage caused by your Claw, Rake, Shred, Maul, and Swipe abilities by 5%.",
            "Increases the damage caused by your Claw, Rake, Shred, Maul, and Swipe abilities by 10%."
          ]
        },
        {
          "id": "feral-charge",
          "name": "Feral Charge",
          "max": 1,
          "row": 3,
          "col": 3,
          "icon": "icons/druid/feral-charge.jpg",
          "sourceIcon": "ability_hunter_pet_bear",
          "exportId": 104944,
          "spellId": 1238122,
          "descriptions": [
            "Charge an enemy, immobilizing them and interrupting any spell they are casting for 4 sec."
          ]
        },
        {
          "id": "sharpened-claws",
          "name": "Sharpened Claws",
          "max": 2,
          "row": 3,
          "col": 4,
          "icon": "icons/druid/sharpened-claws.jpg",
          "sourceIcon": "inv_misc_monsterclaw_04",
          "exportId": 104946,
          "spellId": 16942,
          "descriptions": [
            "Increases your critical strike chance while in Bear Form, Dire Bear Form, or Cat Form by 3%.",
            "Increases your critical strike chance while in Bear Form, Dire Bear Form, or Cat Form by 6%."
          ]
        },
        {
          "id": "shifting-power",
          "name": "Shifting Power",
          "max": 1,
          "row": 4,
          "col": 1,
          "prerequisite": "shredding-attacks",
          "icon": "icons/druid/shifting-power.jpg",
          "sourceIcon": "spell_druid_displacement",
          "exportId": 104951,
          "spellId": 1322605,
          "descriptions": [
            "Instantly convert 55% of base Mana into 40 Energy. Shifting Power’s cost is reduced by effects that reduce the cost of Shapeshifting."
          ]
        },
        {
          "id": "primal-bite",
          "name": "Primal Bite",
          "max": 1,
          "row": 4,
          "col": 2,
          "prerequisite": "savage-fury",
          "icon": "icons/druid/primal-bite.jpg",
          "sourceIcon": "ability_racial_cannibalize",
          "exportId": 104949,
          "spellId": 407995,
          "descriptions": [
            "Bite the target, dealing 100% normal damage plus 26 and generating a high amount of threat."
          ]
        },
        {
          "id": "predatory-strikes",
          "name": "Predatory Strikes",
          "max": 3,
          "row": 4,
          "col": 3,
          "icon": "icons/druid/predatory-strikes.jpg",
          "sourceIcon": "ability_hunter_pet_cat",
          "exportId": 104952,
          "spellId": 16972,
          "descriptions": [
            "Increases your melee Attack Power in Cat Form, Bear Form, and Dire Bear Form by 50% of your level.",
            "Increases your melee Attack Power in Cat Form, Bear Form, and Dire Bear Form by 100% of your level.",
            "Increases your melee Attack Power in Cat Form, Bear Form, and Dire Bear Form by 150% of your level."
          ]
        },
        {
          "id": "blood-frenzy",
          "name": "Blood Frenzy",
          "max": 2,
          "row": 4,
          "col": 4,
          "prerequisite": "sharpened-claws",
          "icon": "icons/druid/blood-frenzy.jpg",
          "sourceIcon": "ability_ghoulfrenzy",
          "exportId": 104947,
          "spellId": 16958,
          "descriptions": [
            "Gives you a 50% chance to gain an additional 5 Rage any time you get a critical strike while in Bear Form or Dire Bear Form. In addition, your non-periodic critical strikes from Cat Form abilities that generate Combo Points have a 50% chance to add an additional Combo Point.",
            "Gives you a 100% chance to gain an additional 5 Rage any time you get a critical strike while in Bear Form or Dire Bear Form. In addition, your non-periodic critical strikes from Cat Form abilities that generate Combo Points have a 100% chance to add an additional Combo Point."
          ]
        },
        {
          "id": "improved-shifting-power",
          "name": "Improved Shifting Power",
          "max": 2,
          "row": 5,
          "col": 1,
          "prerequisite": "shifting-power",
          "icon": "icons/druid/improved-shifting-power.jpg",
          "sourceIcon": "ability_hunter_aspectmastery",
          "exportId": 113563,
          "spellId": 1322670,
          "descriptions": [
            "Reduces the cooldown of your Shifting Power spell by 4 sec.",
            "Reduces the cooldown of your Shifting Power spell by 8 sec."
          ]
        },
        {
          "id": "leader-of-the-pack",
          "name": "Leader of the Pack",
          "max": 1,
          "row": 5,
          "col": 2,
          "icon": "icons/druid/leader-of-the-pack.jpg",
          "sourceIcon": "spell_nature_unyeildingstamina",
          "exportId": 104955,
          "spellId": 17007,
          "descriptions": [
            "While in Cat Form, Bear Form, or Dire Bear Form, the Leader of the Pack increases the critical strike chance of all party members within 45 yards by 3%, exclusive with Moonkin Aura."
          ]
        },
        {
          "id": "predatory-instincts",
          "name": "Predatory Instincts",
          "max": 2,
          "row": 5,
          "col": 4,
          "icon": "icons/druid/predatory-instincts.jpg",
          "sourceIcon": "ability_druid_predatoryinstincts",
          "exportId": 104950,
          "spellId": 1223242,
          "descriptions": [
            "Increases the critical strike damage bonus of your melee abilities by 10%.",
            "Increases the critical strike damage bonus of your melee abilities by 20%."
          ]
        },
        {
          "id": "natural-reaction",
          "name": "Natural Reaction",
          "max": 5,
          "row": 6,
          "col": 1,
          "icon": "icons/druid/natural-reaction.jpg",
          "sourceIcon": "ability_bullrush",
          "exportId": 104954,
          "spellId": 417051,
          "descriptions": [
            "Increases your dodge chance by 1%, and gives you a 20% chance to gain 5 Rage each time you dodge.",
            "Increases your dodge chance by 2%, and gives you a 40% chance to gain 5 Rage each time you dodge.",
            "Increases your dodge chance by 3%, and gives you a 60% chance to gain 5 Rage each time you dodge.",
            "Increases your dodge chance by 4%, and gives you a 80% chance to gain 5 Rage each time you dodge.",
            "Increases your dodge chance by 5%, and gives you a 100% chance to gain 5 Rage each time you dodge."
          ]
        },
        {
          "id": "rend-and-tear",
          "name": "Rend and Tear",
          "max": 5,
          "row": 6,
          "col": 3,
          "prerequisite": "predatory-strikes",
          "icon": "icons/druid/rend-and-tear.jpg",
          "sourceIcon": "ability_druid_primalagression",
          "exportId": 104953,
          "spellId": 1223246,
          "descriptions": [
            "Increases damage done by your melee abilities on Bleeding targets by 2%.",
            "Increases damage done by your melee abilities on Bleeding targets by 4%.",
            "Increases damage done by your melee abilities on Bleeding targets by 6%.",
            "Increases damage done by your melee abilities on Bleeding targets by 8%.",
            "Increases damage done by your melee abilities on Bleeding targets by 10%."
          ]
        },
        {
          "id": "berserk",
          "name": "Berserk",
          "max": 1,
          "row": 7,
          "col": 2,
          "prerequisite": "leader-of-the-pack",
          "icon": "icons/druid/berserk.jpg",
          "sourceIcon": "ability_druid_berserk",
          "exportId": 104956,
          "spellId": 417141,
          "descriptions": [
            "Causes your Primal Bite ability to strike up to 3 targets, removes its cooldown, and increases the critical strike chance of your Combo Point-generating abilities by 100%. Clears and grants immunity to Fear effects for the duration. Lasts 15 sec."
          ]
        }
      ]
    },
    {
      "id": "restoration",
      "name": "Restoration",
      "talents": [
        {
          "id": "natures-focus",
          "name": "Nature’s Focus",
          "max": 5,
          "row": 1,
          "col": 2,
          "icon": "icons/druid/natures-focus.jpg",
          "sourceIcon": "spell_nature_healingwavegreater",
          "exportId": 104957,
          "spellId": 17063,
          "descriptions": [
            "Gives you a 14% chance to avoid interruption caused by damage while casting Arcane and Nature spells.",
            "Gives you a 28% chance to avoid interruption caused by damage while casting Arcane and Nature spells.",
            "Gives you a 42% chance to avoid interruption caused by damage while casting Arcane and Nature spells.",
            "Gives you a 56% chance to avoid interruption caused by damage while casting Arcane and Nature spells.",
            "Gives you a 70% chance to avoid interruption caused by damage while casting Arcane and Nature spells."
          ]
        },
        {
          "id": "furor",
          "name": "Furor",
          "max": 5,
          "row": 1,
          "col": 3,
          "icon": "icons/druid/furor.jpg",
          "sourceIcon": "spell_holy_blessingofstamina",
          "exportId": 104958,
          "spellId": 17056,
          "descriptions": [
            "Gives you a 20% chance to gain 10 Rage when you shapeshift into Bear Form or Dire Bear Form. When you shift into Cat Form, you will regain 20% of the Energy you had when you were last in Cat Form, plus 2 Energy for each second you spent not in Bear Form, Cat Form, or Dire Bear Form, up to a maximum of 20 Energy.",
            "Gives you a 40% chance to gain 10 Rage when you shapeshift into Bear Form or Dire Bear Form. When you shift into Cat Form, you will regain 40% of the Energy you had when you were last in Cat Form, plus 4 Energy for each second you spent not in Bear Form, Cat Form, or Dire Bear Form, up to a maximum of 40 Energy.",
            "Gives you a 60% chance to gain 10 Rage when you shapeshift into Bear Form or Dire Bear Form. When you shift into Cat Form, you will regain 60% of the Energy you had when you were last in Cat Form, plus 6 Energy for each second you spent not in Bear Form, Cat Form, or Dire Bear Form, up to a maximum of 60 Energy.",
            "Gives you a 80% chance to gain 10 Rage when you shapeshift into Bear Form or Dire Bear Form. When you shift into Cat Form, you will regain 80% of the Energy you had when you were last in Cat Form, plus 8 Energy for each second you spent not in Bear Form, Cat Form, or Dire Bear Form, up to a maximum of 80 Energy.",
            "Gives you a 100% chance to gain 10 Rage when you shapeshift into Bear Form or Dire Bear Form. When you shift into Cat Form, you will regain 100% of the Energy you had when you were last in Cat Form, plus 10 Energy for each second you spent not in Bear Form, Cat Form, or Dire Bear Form, up to a maximum of 100 Energy."
          ]
        },
        {
          "id": "naturalist",
          "name": "Naturalist",
          "max": 5,
          "row": 2,
          "col": 1,
          "icon": "icons/druid/naturalist.jpg",
          "sourceIcon": "spell_nature_healingtouch",
          "exportId": 104922,
          "spellId": 17069,
          "descriptions": [
            "Reduces the cast time of your Healing Touch spell by 0.1 sec and increases all damage you deal by 1%.",
            "Reduces the cast time of your Healing Touch spell by 0.2 sec and increases all damage you deal by 2%.",
            "Reduces the cast time of your Healing Touch spell by 0.3 sec and increases all damage you deal by 3%.",
            "Reduces the cast time of your Healing Touch spell by 0.4 sec and increases all damage you deal by 4%.",
            "Reduces the cast time of your Healing Touch spell by 0.5 sec and increases all damage you deal by 5%."
          ]
        },
        {
          "id": "subtlety",
          "name": "Subtlety",
          "max": 3,
          "row": 2,
          "col": 2,
          "icon": "icons/druid/subtlety.jpg",
          "sourceIcon": "ability_eyeoftheowl",
          "exportId": 104920,
          "spellId": 17118,
          "descriptions": [
            "Reduces the threat generated by your Nature and Arcane spells by 10%.",
            "Reduces the threat generated by your Nature and Arcane spells by 20%.",
            "Reduces the threat generated by your Nature and Arcane spells by 30%."
          ]
        },
        {
          "id": "natural-shapeshifter",
          "name": "Natural Shapeshifter",
          "max": 3,
          "row": 2,
          "col": 3,
          "icon": "icons/druid/natural-shapeshifter.jpg",
          "sourceIcon": "spell_nature_wispsplode",
          "exportId": 104919,
          "spellId": 16833,
          "descriptions": [
            "Reduces the mana cost of all shapeshifting by 10%.",
            "Reduces the mana cost of all shapeshifting by 20%.",
            "Reduces the mana cost of all shapeshifting by 30%."
          ]
        },
        {
          "id": "reflection",
          "name": "Reflection",
          "max": 3,
          "row": 3,
          "col": 2,
          "icon": "icons/druid/reflection.jpg",
          "sourceIcon": "spell_frost_windwalkon",
          "exportId": 104917,
          "spellId": 17106,
          "descriptions": [
            "Allows 17% of your Mana regeneration to continue while casting.",
            "Allows 33% of your Mana regeneration to continue while casting.",
            "Allows 50% of your Mana regeneration to continue while casting."
          ]
        },
        {
          "id": "gift-of-nature",
          "name": "Gift of Nature",
          "max": 5,
          "row": 3,
          "col": 3,
          "icon": "icons/druid/gift-of-nature.jpg",
          "sourceIcon": "spell_nature_protectionformnature",
          "exportId": 104916,
          "spellId": 17104,
          "descriptions": [
            "Increases the effect of all your healing spells by 2%.",
            "Increases the effect of all your healing spells by 4%.",
            "Increases the effect of all your healing spells by 6%.",
            "Increases the effect of all your healing spells by 8%.",
            "Increases the effect of all your healing spells by 10%."
          ]
        },
        {
          "id": "gift-of-the-earthmother",
          "name": "Gift of the Earthmother",
          "max": 1,
          "row": 3,
          "col": 4,
          "icon": "icons/druid/gift-of-the-earthmother.jpg",
          "sourceIcon": "spell_nature_spiritarmor",
          "exportId": 104918,
          "spellId": 414673,
          "descriptions": [
            "Reduces the global cooldown by 0.5 seconds on your Rejuvenation, Swiftmend, and Wild Growth spells."
          ]
        },
        {
          "id": "tranquil-spirit",
          "name": "Tranquil Spirit",
          "max": 5,
          "row": 4,
          "col": 2,
          "icon": "icons/druid/tranquil-spirit.jpg",
          "sourceIcon": "spell_holy_elunesgrace",
          "exportId": 104915,
          "spellId": 24968,
          "descriptions": [
            "Reduces the mana cost of your Healing Touch and Tranquility spells by 2%.",
            "Reduces the mana cost of your Healing Touch and Tranquility spells by 4%.",
            "Reduces the mana cost of your Healing Touch and Tranquility spells by 6%.",
            "Reduces the mana cost of your Healing Touch and Tranquility spells by 8%.",
            "Reduces the mana cost of your Healing Touch and Tranquility spells by 10%."
          ]
        },
        {
          "id": "improved-rejuvenation",
          "name": "Improved Rejuvenation",
          "max": 3,
          "row": 4,
          "col": 3,
          "icon": "icons/druid/improved-rejuvenation.jpg",
          "sourceIcon": "spell_nature_rejuvenation",
          "exportId": 104914,
          "spellId": 17111,
          "descriptions": [
            "Increases the effect of your Rejuvenation spell by 5%.",
            "Increases the effect of your Rejuvenation spell by 10%.",
            "Increases the effect of your Rejuvenation spell by 15%."
          ]
        },
        {
          "id": "swiftmend",
          "name": "Swiftmend",
          "max": 1,
          "row": 4,
          "col": 4,
          "icon": "icons/druid/swiftmend.jpg",
          "sourceIcon": "inv_relics_idolofrejuvenation",
          "exportId": 104912,
          "spellId": 18562,
          "descriptions": [
            "Instantly heals a target with an active Rejuvenation or Regrowth effect for an amount equal to the full duration of the periodic effect of one of those spells."
          ]
        },
        {
          "id": "natures-swiftness",
          "name": "Nature’s Swiftness",
          "max": 1,
          "row": 5,
          "col": 1,
          "prerequisite": "naturalist",
          "icon": "icons/druid/natures-swiftness.jpg",
          "sourceIcon": "spell_nature_ravenform",
          "exportId": 104921,
          "spellId": 17116,
          "descriptions": [
            "When activated, your next Nature spell becomes an instant cast spell."
          ]
        },
        {
          "id": "living-spirit",
          "name": "Living Spirit",
          "max": 3,
          "row": 5,
          "col": 2,
          "icon": "icons/druid/living-spirit.jpg",
          "sourceIcon": "spell_nature_giftofthewaterspirit",
          "exportId": 104911,
          "spellId": 1309631,
          "descriptions": [
            "Increases your Spirit by 5%.",
            "Increases your Spirit by 10%.",
            "Increases your Spirit by 15%."
          ]
        },
        {
          "id": "improved-tranquility",
          "name": "Improved Tranquility",
          "max": 2,
          "row": 5,
          "col": 4,
          "icon": "icons/druid/improved-tranquility.jpg",
          "sourceIcon": "spell_nature_tranquility",
          "exportId": 104909,
          "spellId": 17123,
          "descriptions": [
            "Reduces threat caused by Tranquility by 50% and its cooldown by 30%.",
            "Reduces threat caused by Tranquility by 100% and its cooldown by 60%."
          ]
        },
        {
          "id": "improved-regrowth",
          "name": "Improved Regrowth",
          "max": 5,
          "row": 6,
          "col": 3,
          "prerequisite": "improved-rejuvenation",
          "icon": "icons/druid/improved-regrowth.jpg",
          "sourceIcon": "spell_nature_resistnature",
          "exportId": 104913,
          "spellId": 17074,
          "descriptions": [
            "Increases the critical effect chance of your Regrowth spell by 10%.",
            "Increases the critical effect chance of your Regrowth spell by 20%.",
            "Increases the critical effect chance of your Regrowth spell by 30%.",
            "Increases the critical effect chance of your Regrowth spell by 40%.",
            "Increases the critical effect chance of your Regrowth spell by 50%."
          ]
        },
        {
          "id": "wild-growth",
          "name": "Wild Growth",
          "max": 1,
          "row": 7,
          "col": 2,
          "prerequisite": "living-spirit",
          "icon": "icons/druid/wild-growth.jpg",
          "sourceIcon": "ability_druid_flourish",
          "exportId": 104910,
          "spellId": 408120,
          "descriptions": [
            "Heals the target and their party for 280 over 7 sec. Party members must be within 43.5 yards of target. The amount healed is applied quickly at first, and slows down as Wild Growth reaches its full duration."
          ]
        }
      ]
    }
  ]
};
  if (typeof module === 'object' && module.exports) module.exports = data;
  root.FOREVER_FERAL_TALENT_DATA = data;
})(typeof globalThis !== 'undefined' ? globalThis : this);
