(function(root){const classes={
  "druid": {
    "version": 6,
    "gameClass": "druid",
    "name": "Druid",
    "color": "#ff7d0a",
    "legacyBuilds": {
      "FF2": [
        [
          "improved-wrath",
          5
        ],
        [
          "genesis",
          5
        ],
        [
          "moonglow",
          3
        ],
        [
          "improved-moonfire",
          2
        ],
        [
          "natures-majesty",
          2
        ],
        [
          "natures-reach",
          2
        ],
        [
          "improved-entangling-roots",
          3
        ],
        [
          "natures-splendor",
          1
        ],
        [
          "insect-swarm",
          1
        ],
        [
          "vengeance",
          5
        ],
        [
          "improved-starfire",
          5
        ],
        [
          "overgrowth",
          2
        ],
        [
          "natures-grace",
          1
        ],
        [
          "eclipse",
          3
        ],
        [
          "moonfury",
          5
        ],
        [
          "moonkin-form",
          1
        ],
        [
          "ferocity",
          5
        ],
        [
          "heart-of-the-wild",
          5
        ],
        [
          "feral-swiftness",
          2
        ],
        [
          "feral-instinct",
          3
        ],
        [
          "brutal-impact",
          2
        ],
        [
          "thick-hide",
          3
        ],
        [
          "savage-fury",
          2
        ],
        [
          "feral-charge",
          1
        ],
        [
          "sharpened-claws",
          2
        ],
        [
          "shredding-attacks",
          3
        ],
        [
          "primal-bite",
          1
        ],
        [
          "predatory-strikes",
          3
        ],
        [
          "blood-frenzy",
          2
        ],
        [
          "predatory-instincts",
          2
        ],
        [
          "leader-of-the-pack",
          1
        ],
        [
          "king-of-the-jungle",
          3
        ],
        [
          "natural-reaction",
          5
        ],
        [
          "rend-and-tear",
          5
        ],
        [
          "berserk",
          1
        ],
        [
          "natures-focus",
          5
        ],
        [
          "furor",
          5
        ],
        [
          "naturalist",
          5
        ],
        [
          "subtlety",
          3
        ],
        [
          "natural-shapeshifter",
          3
        ],
        [
          "reflection",
          3
        ],
        [
          "gift-of-nature",
          5
        ],
        [
          "gift-of-the-earthmother",
          1
        ],
        [
          "tranquil-spirit",
          5
        ],
        [
          "improved-rejuvenation",
          3
        ],
        [
          "swiftmend",
          1
        ],
        [
          "natures-swiftness",
          1
        ],
        [
          "living-spirit",
          3
        ],
        [
          "improved-tranquility",
          2
        ],
        [
          "improved-regrowth",
          5
        ],
        [
          "wild-growth",
          1
        ]
      ],
      "FF3": [
        [
          "improved-wrath",
          5
        ],
        [
          "genesis",
          5
        ],
        [
          "moonglow",
          3
        ],
        [
          "improved-moonfire",
          2
        ],
        [
          "natures-majesty",
          2
        ],
        [
          "natures-reach",
          2
        ],
        [
          "improved-entangling-roots",
          3
        ],
        [
          "natures-splendor",
          1
        ],
        [
          "insect-swarm",
          1
        ],
        [
          "vengeance",
          5
        ],
        [
          "improved-starfire",
          5
        ],
        [
          "overgrowth",
          2
        ],
        [
          "natures-grace",
          1
        ],
        [
          "eclipse",
          3
        ],
        [
          "moonfury",
          5
        ],
        [
          "moonkin-form",
          1
        ],
        [
          "ferocity",
          5
        ],
        [
          "heart-of-the-wild",
          5
        ],
        [
          "feral-swiftness",
          2
        ],
        [
          "feral-instinct",
          3
        ],
        [
          "brutal-impact",
          2
        ],
        [
          "thick-hide",
          3
        ],
        [
          "savage-fury",
          2
        ],
        [
          "feral-charge",
          1
        ],
        [
          "sharpened-claws",
          2
        ],
        [
          "shredding-attacks",
          3
        ],
        [
          "primal-bite",
          1
        ],
        [
          "predatory-strikes",
          3
        ],
        [
          "blood-frenzy",
          2
        ],
        [
          "predatory-instincts",
          2
        ],
        [
          "leader-of-the-pack",
          1
        ],
        [
          "improved-shifting-power",
          2
        ],
        [
          "natural-reaction",
          5
        ],
        [
          "rend-and-tear",
          5
        ],
        [
          "berserk",
          1
        ],
        [
          "shifting-power",
          1
        ],
        [
          "natures-focus",
          5
        ],
        [
          "furor",
          5
        ],
        [
          "naturalist",
          5
        ],
        [
          "subtlety",
          3
        ],
        [
          "natural-shapeshifter",
          3
        ],
        [
          "reflection",
          3
        ],
        [
          "gift-of-nature",
          5
        ],
        [
          "gift-of-the-earthmother",
          1
        ],
        [
          "tranquil-spirit",
          5
        ],
        [
          "improved-rejuvenation",
          3
        ],
        [
          "swiftmend",
          1
        ],
        [
          "natures-swiftness",
          1
        ],
        [
          "living-spirit",
          3
        ],
        [
          "improved-tranquility",
          2
        ],
        [
          "improved-regrowth",
          5
        ],
        [
          "wild-growth",
          1
        ]
      ]
    },
    "trees": [
      {
        "id": "balance",
        "name": "Balance",
        "role": "Balance",
        "color": "#a78bfa",
        "icon": "icons/druid/balance.jpg",
        "talents": [
          {
            "id": "improved-wrath",
            "name": "Improved Wrath",
            "max": 5,
            "row": 1,
            "col": 2,
            "description": "Reduces the cast time of your Wrath spell by 0.1 sec and its Mana cost by 10%.",
            "rankDescriptions": [
              "Reduces the cast time of your Wrath spell by 0.1 sec and its Mana cost by 10%.",
              "Reduces the cast time of your Wrath spell by 0.2 sec and its Mana cost by 20%.",
              "Reduces the cast time of your Wrath spell by 0.3 sec and its Mana cost by 30%.",
              "Reduces the cast time of your Wrath spell by 0.4 sec and its Mana cost by 40%.",
              "Reduces the cast time of your Wrath spell by 0.5 sec and its Mana cost by 50%."
            ],
            "type": "Passive",
            "icon": "icons/druid/improved-wrath.jpg",
            "sourceIcon": "spell_nature_abolishmagic"
          },
          {
            "id": "genesis",
            "name": "Genesis",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Increases the periodic damage and healing done by your spells and abilities by 1%.",
            "rankDescriptions": [
              "Increases the periodic damage and healing done by your spells and abilities by 1%.",
              "Increases the periodic damage and healing done by your spells and abilities by 2%.",
              "Increases the periodic damage and healing done by your spells and abilities by 3%.",
              "Increases the periodic damage and healing done by your spells and abilities by 4%.",
              "Increases the periodic damage and healing done by your spells and abilities by 5%."
            ],
            "type": "Passive",
            "icon": "icons/druid/genesis.jpg",
            "sourceIcon": "spell_arcane_arcane03"
          },
          {
            "id": "moonglow",
            "name": "Moonglow",
            "max": 3,
            "row": 2,
            "col": 1,
            "description": "Reduces the Mana cost of your damaging spells by 8%.",
            "rankDescriptions": [
              "Reduces the Mana cost of your damaging spells by 8%.",
              "Reduces the Mana cost of your damaging spells by 17%.",
              "Reduces the Mana cost of your damaging spells by 25%."
            ],
            "type": "Passive",
            "icon": "icons/druid/moonglow.jpg",
            "sourceIcon": "spell_nature_sentinal"
          },
          {
            "id": "improved-moonfire",
            "name": "Improved Moonfire",
            "max": 2,
            "row": 2,
            "col": 2,
            "description": "Increases the damage and critical strike chance of your Moonfire spell by 5%.",
            "rankDescriptions": [
              "Increases the damage and critical strike chance of your Moonfire spell by 5%.",
              "Increases the damage and critical strike chance of your Moonfire spell by 10%."
            ],
            "type": "Passive",
            "icon": "icons/druid/improved-moonfire.jpg",
            "sourceIcon": "spell_nature_starfall"
          },
          {
            "id": "natures-majesty",
            "name": "Nature’s Majesty",
            "max": 2,
            "row": 2,
            "col": 3,
            "description": "Increases your critical strike chance with spells and melee attacks by 2%.",
            "rankDescriptions": [
              "Increases your critical strike chance with spells and melee attacks by 2%.",
              "Increases your critical strike chance with spells and melee attacks by 4%."
            ],
            "type": "Passive",
            "icon": "icons/druid/natures-majesty.jpg",
            "sourceIcon": "inv_staff_01"
          },
          {
            "id": "natures-reach",
            "name": "Nature’s Reach",
            "max": 2,
            "row": 2,
            "col": 4,
            "description": "Increases the range of your offensive Balance spells by 10% and improves your chance to hit by 2%.",
            "rankDescriptions": [
              "Increases the range of your offensive Balance spells by 10% and improves your chance to hit by 2%.",
              "Increases the range of your offensive Balance spells by 20% and improves your chance to hit by 4%."
            ],
            "type": "Passive",
            "icon": "icons/druid/natures-reach.jpg",
            "sourceIcon": "spell_nature_naturetouchgrow"
          },
          {
            "id": "improved-entangling-roots",
            "name": "Improved Entangling Roots",
            "max": 3,
            "row": 3,
            "col": 1,
            "description": "Increases the damage done by your Entangling Roots spell by 25%, and its victims can take up to 25% more damage without interrupting the effect.",
            "rankDescriptions": [
              "Increases the damage done by your Entangling Roots spell by 25%, and its victims can take up to 25% more damage without interrupting the effect.",
              "Increases the damage done by your Entangling Roots spell by 50%, and its victims can take up to 50% more damage without interrupting the effect.",
              "Increases the damage done by your Entangling Roots spell by 75%, and its victims can take up to 75% more damage without interrupting the effect."
            ],
            "type": "Passive",
            "icon": "icons/druid/improved-entangling-roots.jpg",
            "sourceIcon": "spell_nature_stranglevines"
          },
          {
            "id": "natures-splendor",
            "name": "Nature’s Splendor",
            "max": 1,
            "row": 3,
            "col": 3,
            "description": "Increases the duration of your Moonfire and Rejuvenation spells by 3 sec, your Regrowth spell by 6 sec, and your Insect Swarm spell by 2 sec.",
            "type": "Passive",
            "prerequisite": "natures-majesty",
            "icon": "icons/druid/natures-splendor.jpg",
            "sourceIcon": "spell_nature_natureresistancetotem"
          },
          {
            "id": "insect-swarm",
            "name": "Insect Swarm",
            "max": 1,
            "row": 4,
            "col": 1,
            "description": "The enemy target is swarmed by insects, decreasing their chance to hit with attacks by 2% and causing 48 Nature damage over 12 sec.",
            "type": "Active",
            "details": [
              "45 Mana",
              "30 yd range",
              "Instant"
            ],
            "icon": "icons/druid/insect-swarm.jpg",
            "sourceIcon": "spell_nature_insectswarm"
          },
          {
            "id": "vengeance",
            "name": "Vengeance",
            "max": 5,
            "row": 4,
            "col": 2,
            "description": "Increases the critical strike damage bonus of your Arcane and Nature spells by 20%.",
            "rankDescriptions": [
              "Increases the critical strike damage bonus of your Arcane and Nature spells by 20%.",
              "Increases the critical strike damage bonus of your Arcane and Nature spells by 40%.",
              "Increases the critical strike damage bonus of your Arcane and Nature spells by 60%.",
              "Increases the critical strike damage bonus of your Arcane and Nature spells by 80%.",
              "Increases the critical strike damage bonus of your Arcane and Nature spells by 100%."
            ],
            "type": "Passive",
            "prerequisite": "improved-moonfire",
            "icon": "icons/druid/vengeance.jpg",
            "sourceIcon": "spell_nature_purge"
          },
          {
            "id": "improved-starfire",
            "name": "Improved Starfire",
            "max": 5,
            "row": 4,
            "col": 3,
            "description": "Reduces the cast time of Starfire by 0.1 sec and Starfire has a 3% chance to stun its target for 3 sec.",
            "rankDescriptions": [
              "Reduces the cast time of Starfire by 0.1 sec and Starfire has a 3% chance to stun its target for 3 sec.",
              "Reduces the cast time of Starfire by 0.2 sec and Starfire has a 6% chance to stun its target for 3 sec.",
              "Reduces the cast time of Starfire by 0.3 sec and Starfire has a 9% chance to stun its target for 3 sec.",
              "Reduces the cast time of Starfire by 0.4 sec and Starfire has a 12% chance to stun its target for 3 sec.",
              "Reduces the cast time of Starfire by 0.5 sec and Starfire has a 15% chance to stun its target for 3 sec."
            ],
            "type": "Passive",
            "icon": "icons/druid/improved-starfire.jpg",
            "sourceIcon": "spell_arcane_starfire"
          },
          {
            "id": "overgrowth",
            "name": "Overgrowth",
            "max": 2,
            "row": 5,
            "col": 1,
            "description": "Increases the maximum number of targets you may have affected by Entangling Roots by 1.",
            "rankDescriptions": [
              "Increases the maximum number of targets you may have affected by Entangling Roots by 1.",
              "Increases the maximum number of targets you may have affected by Entangling Roots by 2."
            ],
            "type": "Passive",
            "icon": "icons/druid/overgrowth.jpg",
            "sourceIcon": "inv_misc_herb_15"
          },
          {
            "id": "natures-grace",
            "name": "Nature’s Grace",
            "max": 1,
            "row": 5,
            "col": 2,
            "description": "All non-periodic spell criticals grace you with a blessing of nature, increasing your spellcasting speed and reducing your global cooldown by 10% for 3 sec.",
            "type": "Passive",
            "icon": "icons/druid/natures-grace.jpg",
            "sourceIcon": "spell_nature_naturesblessing"
          },
          {
            "id": "eclipse",
            "name": "Eclipse",
            "max": 3,
            "row": 5,
            "col": 3,
            "description": "Your Wrath spell reduces the cast time of your next 2 Starfire spells by 0.17 sec. Stores up to 4 charges. Lasts 15 sec.",
            "rankDescriptions": [
              "Your Wrath spell reduces the cast time of your next 2 Starfire spells by 0.17 sec. Stores up to 4 charges. Lasts 15 sec.",
              "Your Wrath spell reduces the cast time of your next 2 Starfire spells by 0.33 sec. Stores up to 4 charges. Lasts 15 sec.",
              "Your Wrath spell reduces the cast time of your next 2 Starfire spells by 0.50 sec. Stores up to 4 charges. Lasts 15 sec."
            ],
            "type": "Passive",
            "icon": "icons/druid/eclipse.jpg",
            "sourceIcon": "ability_druid_eclipse"
          },
          {
            "id": "moonfury",
            "name": "Moonfury",
            "max": 5,
            "row": 6,
            "col": 2,
            "description": "Increases the damage done by your Arcane and Nature spells by 2%.",
            "rankDescriptions": [
              "Increases the damage done by your Arcane and Nature spells by 2%.",
              "Increases the damage done by your Arcane and Nature spells by 4%.",
              "Increases the damage done by your Arcane and Nature spells by 6%.",
              "Increases the damage done by your Arcane and Nature spells by 8%.",
              "Increases the damage done by your Arcane and Nature spells by 10%."
            ],
            "type": "Passive",
            "icon": "icons/druid/moonfury.jpg",
            "sourceIcon": "spell_nature_moonglow"
          },
          {
            "id": "moonkin-form",
            "name": "Moonkin Form",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Shapeshift into Moonkin Form, increasing Omen of Clarity’s chance to trigger by 100%, Armor contribution from items by 360%, and all party or raid members within 45 yards have their spell Critical Strike chance increased by 3%. Also protects the caster from Polymorph effects and prevents the use of healing spells.\n\nThe act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.",
            "type": "Active",
            "details": [
              "35% of base Mana",
              "Instant"
            ],
            "icon": "icons/druid/moonkin-form.jpg",
            "sourceIcon": "spell_nature_forceofnature"
          }
        ]
      },
      {
        "id": "feral-combat",
        "name": "Feral Combat",
        "role": "Feral Combat",
        "color": "#e7ae5a",
        "icon": "icons/druid/feral-combat.jpg",
        "talents": [
          {
            "id": "ferocity",
            "name": "Ferocity",
            "max": 5,
            "row": 1,
            "col": 2,
            "description": "Reduces the cost of your Maul, Primal Bite, Swipe, Claw, and Rake abilities by 1 Rage or Energy.",
            "rankDescriptions": [
              "Reduces the cost of your Maul, Primal Bite, Swipe, Claw, and Rake abilities by 1 Rage or Energy.",
              "Reduces the cost of your Maul, Primal Bite, Swipe, Claw, and Rake abilities by 2 Rage or Energy.",
              "Reduces the cost of your Maul, Primal Bite, Swipe, Claw, and Rake abilities by 3 Rage or Energy.",
              "Reduces the cost of your Maul, Primal Bite, Swipe, Claw, and Rake abilities by 4 Rage or Energy.",
              "Reduces the cost of your Maul, Primal Bite, Swipe, Claw, and Rake abilities by 5 Rage or Energy."
            ],
            "type": "Passive",
            "icon": "icons/druid/ferocity.jpg",
            "sourceIcon": "ability_hunter_pet_hyena"
          },
          {
            "id": "heart-of-the-wild",
            "name": "Heart of the Wild",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Increases your Intellect by 2%. In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 4% and while in Cat Form your Strength is increased by 2%.",
            "rankDescriptions": [
              "Increases your Intellect by 2%. In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 4% and while in Cat Form your Strength is increased by 2%.",
              "Increases your Intellect by 4%. In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 8% and while in Cat Form your Strength is increased by 4%.",
              "Increases your Intellect by 6%. In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 12% and while in Cat Form your Strength is increased by 6%.",
              "Increases your Intellect by 8%. In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 16% and while in Cat Form your Strength is increased by 8%.",
              "Increases your Intellect by 10%. In addition, while in Bear Form or Dire Bear Form your Stamina is increased by 20% and while in Cat Form your Strength is increased by 10%."
            ],
            "type": "Passive",
            "icon": "icons/druid/heart-of-the-wild.jpg",
            "sourceIcon": "spell_holy_blessingofagility"
          },
          {
            "id": "feral-swiftness",
            "name": "Feral Swiftness",
            "max": 2,
            "row": 2,
            "col": 1,
            "description": "Increases your movement speed while in Cat Form by 15%, and increases your chance to Dodge by 2%.",
            "rankDescriptions": [
              "Increases your movement speed while in Cat Form by 15%, and increases your chance to Dodge by 2%.",
              "Increases your movement speed while in Cat Form by 30%, and increases your chance to Dodge by 4%."
            ],
            "type": "Passive",
            "icon": "icons/druid/feral-swiftness.jpg",
            "sourceIcon": "spell_nature_spiritwolf"
          },
          {
            "id": "feral-instinct",
            "name": "Feral Instinct",
            "max": 3,
            "row": 2,
            "col": 2,
            "description": "Increases damage done by your Swipe ability by 10% and reduces the chance enemies have to detect you while Prowling as if you were 1 levels higher.",
            "rankDescriptions": [
              "Increases damage done by your Swipe ability by 10% and reduces the chance enemies have to detect you while Prowling as if you were 1 levels higher.",
              "Increases damage done by your Swipe ability by 20% and reduces the chance enemies have to detect you while Prowling as if you were 2 levels higher.",
              "Increases damage done by your Swipe ability by 30% and reduces the chance enemies have to detect you while Prowling as if you were 3 levels higher."
            ],
            "type": "Passive",
            "icon": "icons/druid/feral-instinct.jpg",
            "sourceIcon": "ability_ambush"
          },
          {
            "id": "brutal-impact",
            "name": "Brutal Impact",
            "max": 2,
            "row": 2,
            "col": 3,
            "description": "Increases the stun duration of your Bash and Pounce abilities by 0.5 sec and reduces the cooldown of Bash by 15 sec.",
            "rankDescriptions": [
              "Increases the stun duration of your Bash and Pounce abilities by 0.5 sec and reduces the cooldown of Bash by 15 sec.",
              "Increases the stun duration of your Bash and Pounce abilities by 1 sec and reduces the cooldown of Bash by 30 sec."
            ],
            "type": "Passive",
            "icon": "icons/druid/brutal-impact.jpg",
            "sourceIcon": "ability_druid_bash"
          },
          {
            "id": "thick-hide",
            "name": "Thick Hide",
            "max": 3,
            "row": 2,
            "col": 4,
            "description": "While in Bear Form, Cat Form, Dire Bear Form, or Moonkin Form, you gain 180 additional base Armor per level and another 0.67 base Armor for each point of defense skill beyond five times your level. This amount can be further increased by multipliers from those forms.",
            "rankDescriptions": [
              "While in Bear Form, Cat Form, Dire Bear Form, or Moonkin Form, you gain 180 additional base Armor per level and another 0.67 base Armor for each point of defense skill beyond five times your level. This amount can be further increased by multipliers from those forms.",
              "While in Bear Form, Cat Form, Dire Bear Form, or Moonkin Form, you gain 180 additional base Armor per level and another 1.33 base Armor for each point of defense skill beyond five times your level. This amount can be further increased by multipliers from those forms.",
              "While in Bear Form, Cat Form, Dire Bear Form, or Moonkin Form, you gain 180 additional base Armor per level and another 2.00 base Armor for each point of defense skill beyond five times your level. This amount can be further increased by multipliers from those forms."
            ],
            "type": "Passive",
            "icon": "icons/druid/thick-hide.jpg",
            "sourceIcon": "inv_misc_pelt_bear_03"
          },
          {
            "id": "shredding-attacks",
            "name": "Shredding Attacks",
            "max": 3,
            "row": 3,
            "col": 1,
            "description": "Reduces the Energy cost of your Shred ability by 6 and reduces the Rage cost of your Lacerate ability by 1.",
            "rankDescriptions": [
              "Reduces the Energy cost of your Shred ability by 6 and reduces the Rage cost of your Lacerate ability by 1.",
              "Reduces the Energy cost of your Shred ability by 12 and reduces the Rage cost of your Lacerate ability by 2.",
              "Reduces the Energy cost of your Shred ability by 18 and reduces the Rage cost of your Lacerate ability by 3."
            ],
            "type": "Passive",
            "icon": "icons/druid/shredding-attacks.jpg",
            "sourceIcon": "spell_shadow_vampiricaura"
          },
          {
            "id": "savage-fury",
            "name": "Savage Fury",
            "max": 2,
            "row": 3,
            "col": 2,
            "description": "Increases the damage caused by your Claw, Rake, Shred, Maul, and Swipe abilities by 5%.",
            "rankDescriptions": [
              "Increases the damage caused by your Claw, Rake, Shred, Maul, and Swipe abilities by 5%.",
              "Increases the damage caused by your Claw, Rake, Shred, Maul, and Swipe abilities by 10%."
            ],
            "type": "Passive",
            "icon": "icons/druid/savage-fury.jpg",
            "sourceIcon": "ability_druid_ravage"
          },
          {
            "id": "feral-charge",
            "name": "Feral Charge",
            "max": 1,
            "row": 3,
            "col": 3,
            "description": "Charge an enemy, immobilizing them and interrupting any spell they are casting for 4 sec.",
            "type": "Active",
            "details": [
              "5 Rage",
              "8–25 yd range",
              "Instant",
              "15 sec cooldown"
            ],
            "requires": "Bear Form, Dire Bear Form",
            "alternate": {
              "name": "Feral Charge (Cat)",
              "details": [
                "8–25 yd range",
                "Instant",
                "30 sec cooldown"
              ],
              "requires": "Cat Form",
              "description": "Leap behind an enemy."
            },
            "icon": "icons/druid/feral-charge.jpg",
            "sourceIcon": "ability_hunter_pet_bear"
          },
          {
            "id": "sharpened-claws",
            "name": "Sharpened Claws",
            "max": 2,
            "row": 3,
            "col": 4,
            "description": "Increases your critical strike chance while in Bear Form, Dire Bear Form, or Cat Form by 3%.",
            "rankDescriptions": [
              "Increases your critical strike chance while in Bear Form, Dire Bear Form, or Cat Form by 3%.",
              "Increases your critical strike chance while in Bear Form, Dire Bear Form, or Cat Form by 6%."
            ],
            "type": "Passive",
            "icon": "icons/druid/sharpened-claws.jpg",
            "sourceIcon": "inv_misc_monsterclaw_04"
          },
          {
            "id": "shifting-power",
            "name": "Shifting Power",
            "max": 1,
            "row": 4,
            "col": 1,
            "description": "Instantly convert 0 Mana into 40 Energy. Shifting Power’s cost is reduced by effects that reduce the cost of Shapeshifting.",
            "type": "Active",
            "details": [
              "55% of base Mana",
              "Instant",
              "16 sec cooldown"
            ],
            "requires": "Cat Form",
            "prerequisite": "shredding-attacks",
            "icon": "icons/druid/shifting-power.jpg",
            "sourceIcon": "spell_druid_displacement"
          },
          {
            "id": "primal-bite",
            "name": "Primal Bite",
            "max": 1,
            "row": 4,
            "col": 2,
            "description": "Bite the target, dealing 100% normal damage plus 26 and generating a high amount of threat.",
            "type": "Active",
            "details": [
              "20 Rage",
              "Melee Range",
              "Instant",
              "6 sec cooldown"
            ],
            "requires": "Bear Form, Dire Bear Form",
            "prerequisite": "savage-fury",
            "icon": "icons/druid/primal-bite.jpg",
            "sourceIcon": "ability_racial_cannibalize"
          },
          {
            "id": "predatory-strikes",
            "name": "Predatory Strikes",
            "max": 3,
            "row": 4,
            "col": 3,
            "description": "Increases your melee Attack Power in Cat Form, Bear Form, and Dire Bear Form by 50% of your level.",
            "rankDescriptions": [
              "Increases your melee Attack Power in Cat Form, Bear Form, and Dire Bear Form by 50% of your level.",
              "Increases your melee Attack Power in Cat Form, Bear Form, and Dire Bear Form by 100% of your level.",
              "Increases your melee Attack Power in Cat Form, Bear Form, and Dire Bear Form by 150% of your level."
            ],
            "type": "Passive",
            "icon": "icons/druid/predatory-strikes.jpg",
            "sourceIcon": "ability_hunter_pet_cat"
          },
          {
            "id": "blood-frenzy",
            "name": "Blood Frenzy",
            "max": 2,
            "row": 4,
            "col": 4,
            "description": "Gives you a 50% chance to gain an additional 5 Rage any time you get a critical strike while in Bear Form or Dire Bear Form. In addition, your non-periodic critical strikes from Cat Form abilities that generate Combo Points have a 50% chance to add an additional Combo Point.",
            "rankDescriptions": [
              "Gives you a 50% chance to gain an additional 5 Rage any time you get a critical strike while in Bear Form or Dire Bear Form. In addition, your non-periodic critical strikes from Cat Form abilities that generate Combo Points have a 50% chance to add an additional Combo Point.",
              "Gives you a 100% chance to gain an additional 5 Rage any time you get a critical strike while in Bear Form or Dire Bear Form. In addition, your non-periodic critical strikes from Cat Form abilities that generate Combo Points have a 100% chance to add an additional Combo Point."
            ],
            "type": "Passive",
            "prerequisite": "sharpened-claws",
            "icon": "icons/druid/blood-frenzy.jpg",
            "sourceIcon": "ability_ghoulfrenzy"
          },
          {
            "id": "improved-shifting-power",
            "name": "Improved Shifting Power",
            "max": 2,
            "row": 5,
            "col": 1,
            "description": "Reduces the cooldown of your Shifting Power spell by 4 sec.",
            "rankDescriptions": [
              "Reduces the cooldown of your Shifting Power spell by 4 sec.",
              "Reduces the cooldown of your Shifting Power spell by 8 sec."
            ],
            "type": "Passive",
            "prerequisite": "shifting-power",
            "icon": "icons/druid/improved-shifting-power.jpg",
            "sourceIcon": "ability_hunter_aspectmastery"
          },
          {
            "id": "leader-of-the-pack",
            "name": "Leader of the Pack",
            "max": 1,
            "row": 5,
            "col": 2,
            "description": "While in Cat Form, Bear Form, or Dire Bear Form, the Leader of the Pack increases the melee and ranged Critical Strike chance of all party or raid members within 45 yards by 3%.",
            "type": "Passive",
            "icon": "icons/druid/leader-of-the-pack.jpg",
            "sourceIcon": "spell_nature_unyeildingstamina"
          },
          {
            "id": "predatory-instincts",
            "name": "Natural Instinct",
            "max": 2,
            "row": 5,
            "col": 4,
            "description": "Increases the critical strike damage bonus of your melee abilities by 10% and increases your spell healing by 12% of your Intellect.",
            "rankDescriptions": [
              "Increases the critical strike damage bonus of your melee abilities by 10% and increases your spell healing by 12% of your Intellect.",
              "Increases the critical strike damage bonus of your melee abilities by 20% and increases your spell healing by 25% of your Intellect."
            ],
            "type": "Passive",
            "icon": "icons/druid/predatory-instincts.jpg",
            "sourceIcon": "ability_druid_predatoryinstincts"
          },
          {
            "id": "natural-reaction",
            "name": "Natural Reaction",
            "max": 5,
            "row": 6,
            "col": 1,
            "description": "Increases your dodge chance by 1%, and gives you a 20% chance to gain 5 Rage each time you dodge.",
            "rankDescriptions": [
              "Increases your dodge chance by 1%, and gives you a 20% chance to gain 5 Rage each time you dodge.",
              "Increases your dodge chance by 2%, and gives you a 40% chance to gain 5 Rage each time you dodge.",
              "Increases your dodge chance by 3%, and gives you a 60% chance to gain 5 Rage each time you dodge.",
              "Increases your dodge chance by 4%, and gives you a 80% chance to gain 5 Rage each time you dodge.",
              "Increases your dodge chance by 5%, and gives you a 100% chance to gain 5 Rage each time you dodge."
            ],
            "type": "Passive",
            "requires": "Bear Form, Dire Bear Form",
            "icon": "icons/druid/natural-reaction.jpg",
            "sourceIcon": "ability_bullrush"
          },
          {
            "id": "rend-and-tear",
            "name": "Rend and Tear",
            "max": 5,
            "row": 6,
            "col": 3,
            "description": "Increases damage done by your melee abilities on Bleeding targets by 2%.",
            "rankDescriptions": [
              "Increases damage done by your melee abilities on Bleeding targets by 2%.",
              "Increases damage done by your melee abilities on Bleeding targets by 4%.",
              "Increases damage done by your melee abilities on Bleeding targets by 6%.",
              "Increases damage done by your melee abilities on Bleeding targets by 8%.",
              "Increases damage done by your melee abilities on Bleeding targets by 10%."
            ],
            "type": "Passive",
            "prerequisite": "predatory-strikes",
            "icon": "icons/druid/rend-and-tear.jpg",
            "sourceIcon": "ability_druid_primalagression"
          },
          {
            "id": "berserk",
            "name": "Berserk",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Causes your Primal Bite ability to strike up to 3 targets, removes its cooldown, and increases the critical strike chance of your Combo Point-generating abilities by 100%. Clears and grants immunity to Fear effects for the duration. Lasts 15 sec.",
            "type": "Active",
            "details": [
              "Instant",
              "3 min cooldown"
            ],
            "requires": "Cat Form, Bear Form, Dire Bear Form",
            "prerequisite": "leader-of-the-pack",
            "icon": "icons/druid/berserk.jpg",
            "sourceIcon": "ability_druid_berserk"
          }
        ]
      },
      {
        "id": "restoration",
        "name": "Restoration",
        "role": "Restoration",
        "color": "#66cea0",
        "icon": "icons/druid/restoration.jpg",
        "talents": [
          {
            "id": "natures-focus",
            "name": "Nature’s Focus",
            "max": 5,
            "row": 1,
            "col": 2,
            "description": "Gives you a 14% chance to avoid interruption caused by damage while casting Arcane and Nature spells.",
            "rankDescriptions": [
              "Gives you a 14% chance to avoid interruption caused by damage while casting Arcane and Nature spells.",
              "Gives you a 28% chance to avoid interruption caused by damage while casting Arcane and Nature spells.",
              "Gives you a 42% chance to avoid interruption caused by damage while casting Arcane and Nature spells.",
              "Gives you a 56% chance to avoid interruption caused by damage while casting Arcane and Nature spells.",
              "Gives you a 70% chance to avoid interruption caused by damage while casting Arcane and Nature spells."
            ],
            "type": "Passive",
            "icon": "icons/druid/natures-focus.jpg",
            "sourceIcon": "spell_nature_healingwavegreater"
          },
          {
            "id": "furor",
            "name": "Furor",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Gives you a 20% chance to gain 10 Rage when shapeshifting into Bear Form or Dire Bear Form. Shapeshifting into Cat Form restores 20% of the Energy you had when last in Cat Form, plus 2 Energy per second spent outside Bear Form or Dire Bear Form, up to 20 Energy.",
            "rankDescriptions": [
              "Gives you a 20% chance to gain 10 Rage when shapeshifting into Bear Form or Dire Bear Form. Shapeshifting into Cat Form restores 20% of the Energy you had when last in Cat Form, plus 2 Energy per second spent outside Bear Form or Dire Bear Form, up to 20 Energy.",
              "Gives you a 40% chance to gain 10 Rage when shapeshifting into Bear Form or Dire Bear Form. Shapeshifting into Cat Form restores 40% of the Energy you had when last in Cat Form, plus 4 Energy per second spent outside Bear Form or Dire Bear Form, up to 40 Energy.",
              "Gives you a 60% chance to gain 10 Rage when shapeshifting into Bear Form or Dire Bear Form. Shapeshifting into Cat Form restores 60% of the Energy you had when last in Cat Form, plus 6 Energy per second spent outside Bear Form or Dire Bear Form, up to 60 Energy.",
              "Gives you a 80% chance to gain 10 Rage when shapeshifting into Bear Form or Dire Bear Form. Shapeshifting into Cat Form restores 80% of the Energy you had when last in Cat Form, plus 8 Energy per second spent outside Bear Form or Dire Bear Form, up to 80 Energy.",
              "Gives you a 100% chance to gain 10 Rage when shapeshifting into Bear Form or Dire Bear Form. Shapeshifting into Cat Form restores 100% of the Energy you had when last in Cat Form, plus 10 Energy per second spent outside Bear Form or Dire Bear Form, up to 100 Energy."
            ],
            "type": "Passive",
            "icon": "icons/druid/furor.jpg",
            "sourceIcon": "spell_holy_blessingofstamina"
          },
          {
            "id": "naturalist",
            "name": "Naturalist",
            "max": 5,
            "row": 2,
            "col": 1,
            "description": "Reduces the cast time of your Healing Touch spell by 0.1 sec and increases all damage you deal by 1%.",
            "rankDescriptions": [
              "Reduces the cast time of your Healing Touch spell by 0.1 sec and increases all damage you deal by 1%.",
              "Reduces the cast time of your Healing Touch spell by 0.2 sec and increases all damage you deal by 2%.",
              "Reduces the cast time of your Healing Touch spell by 0.3 sec and increases all damage you deal by 3%.",
              "Reduces the cast time of your Healing Touch spell by 0.4 sec and increases all damage you deal by 4%.",
              "Reduces the cast time of your Healing Touch spell by 0.5 sec and increases all damage you deal by 5%."
            ],
            "type": "Passive",
            "icon": "icons/druid/naturalist.jpg",
            "sourceIcon": "spell_nature_healingtouch"
          },
          {
            "id": "subtlety",
            "name": "Subtlety",
            "max": 3,
            "row": 2,
            "col": 2,
            "description": "Reduces the threat generated by your Nature and Arcane spells by 10%.",
            "rankDescriptions": [
              "Reduces the threat generated by your Nature and Arcane spells by 10%.",
              "Reduces the threat generated by your Nature and Arcane spells by 20%.",
              "Reduces the threat generated by your Nature and Arcane spells by 30%."
            ],
            "type": "Passive",
            "icon": "icons/druid/subtlety.jpg",
            "sourceIcon": "ability_eyeoftheowl"
          },
          {
            "id": "natural-shapeshifter",
            "name": "Natural Shapeshifter",
            "max": 3,
            "row": 2,
            "col": 3,
            "description": "Reduces the mana cost of all shapeshifting by 10%.",
            "rankDescriptions": [
              "Reduces the mana cost of all shapeshifting by 10%.",
              "Reduces the mana cost of all shapeshifting by 20%.",
              "Reduces the mana cost of all shapeshifting by 30%."
            ],
            "type": "Passive",
            "icon": "icons/druid/natural-shapeshifter.jpg",
            "sourceIcon": "spell_nature_wispsplode"
          },
          {
            "id": "reflection",
            "name": "Reflection",
            "max": 3,
            "row": 3,
            "col": 2,
            "description": "Allows 17% of your Mana regeneration to continue while casting.",
            "rankDescriptions": [
              "Allows 17% of your Mana regeneration to continue while casting.",
              "Allows 33% of your Mana regeneration to continue while casting.",
              "Allows 50% of your Mana regeneration to continue while casting."
            ],
            "type": "Passive",
            "icon": "icons/druid/reflection.jpg",
            "sourceIcon": "spell_frost_windwalkon"
          },
          {
            "id": "gift-of-nature",
            "name": "Gift of Nature",
            "max": 5,
            "row": 3,
            "col": 3,
            "description": "Increases the effect of all your healing spells by 2%.",
            "rankDescriptions": [
              "Increases the effect of all your healing spells by 2%.",
              "Increases the effect of all your healing spells by 4%.",
              "Increases the effect of all your healing spells by 6%.",
              "Increases the effect of all your healing spells by 8%.",
              "Increases the effect of all your healing spells by 10%."
            ],
            "type": "Passive",
            "icon": "icons/druid/gift-of-nature.jpg",
            "sourceIcon": "spell_nature_protectionformnature"
          },
          {
            "id": "gift-of-the-earthmother",
            "name": "Gift of the Earthmother",
            "max": 1,
            "row": 3,
            "col": 4,
            "description": "Reduces the global cooldown by 0.5 seconds on your Rejuvenation, Swiftmend, and Wild Growth spells.",
            "type": "Passive",
            "icon": "icons/druid/gift-of-the-earthmother.jpg",
            "sourceIcon": "spell_nature_spiritarmor"
          },
          {
            "id": "tranquil-spirit",
            "name": "Tranquil Spirit",
            "max": 5,
            "row": 4,
            "col": 2,
            "description": "Reduces the mana cost of your Healing Touch and Tranquility spells by 2%.",
            "rankDescriptions": [
              "Reduces the mana cost of your Healing Touch and Tranquility spells by 2%.",
              "Reduces the mana cost of your Healing Touch and Tranquility spells by 4%.",
              "Reduces the mana cost of your Healing Touch and Tranquility spells by 6%.",
              "Reduces the mana cost of your Healing Touch and Tranquility spells by 8%.",
              "Reduces the mana cost of your Healing Touch and Tranquility spells by 10%."
            ],
            "type": "Passive",
            "icon": "icons/druid/tranquil-spirit.jpg",
            "sourceIcon": "spell_holy_elunesgrace"
          },
          {
            "id": "improved-rejuvenation",
            "name": "Improved Rejuvenation",
            "max": 3,
            "row": 4,
            "col": 3,
            "description": "Increases the effect of your Rejuvenation spell by 5%.",
            "rankDescriptions": [
              "Increases the effect of your Rejuvenation spell by 5%.",
              "Increases the effect of your Rejuvenation spell by 10%.",
              "Increases the effect of your Rejuvenation spell by 15%."
            ],
            "type": "Passive",
            "icon": "icons/druid/improved-rejuvenation.jpg",
            "sourceIcon": "spell_nature_rejuvenation"
          },
          {
            "id": "swiftmend",
            "name": "Swiftmend",
            "max": 1,
            "row": 4,
            "col": 4,
            "description": "Instantly heals a target with an active Rejuvenation or Regrowth effect for an amount equal to the full duration of the periodic effect of one of those spells.",
            "type": "Active",
            "details": [
              "20% of base Mana",
              "40 yd range",
              "Instant",
              "15 sec cooldown"
            ],
            "icon": "icons/druid/swiftmend.jpg",
            "sourceIcon": "inv_relics_idolofrejuvenation"
          },
          {
            "id": "natures-swiftness",
            "name": "Nature’s Swiftness",
            "max": 1,
            "row": 5,
            "col": 1,
            "description": "When activated, your next Nature spell becomes an instant cast spell.",
            "type": "Active",
            "details": [
              "Instant",
              "3 min cooldown"
            ],
            "prerequisite": "naturalist",
            "icon": "icons/druid/natures-swiftness.jpg",
            "sourceIcon": "spell_nature_ravenform"
          },
          {
            "id": "living-spirit",
            "name": "Living Spirit",
            "max": 3,
            "row": 5,
            "col": 2,
            "description": "Increases your Spirit by 5%.",
            "rankDescriptions": [
              "Increases your Spirit by 5%.",
              "Increases your Spirit by 10%.",
              "Increases your Spirit by 15%."
            ],
            "type": "Passive",
            "icon": "icons/druid/living-spirit.jpg",
            "sourceIcon": "spell_nature_giftofthewaterspirit"
          },
          {
            "id": "improved-tranquility",
            "name": "Improved Tranquility",
            "max": 2,
            "row": 5,
            "col": 4,
            "description": "Reduces threat caused by Tranquility by 50% and its cooldown by 30%.",
            "rankDescriptions": [
              "Reduces threat caused by Tranquility by 50% and its cooldown by 30%.",
              "Reduces threat caused by Tranquility by 100% and its cooldown by 60%."
            ],
            "type": "Passive",
            "icon": "icons/druid/improved-tranquility.jpg",
            "sourceIcon": "spell_nature_tranquility"
          },
          {
            "id": "improved-regrowth",
            "name": "Improved Regrowth",
            "max": 5,
            "row": 6,
            "col": 3,
            "description": "Increases the critical effect chance of your Regrowth spell by 10%.",
            "rankDescriptions": [
              "Increases the critical effect chance of your Regrowth spell by 10%.",
              "Increases the critical effect chance of your Regrowth spell by 20%.",
              "Increases the critical effect chance of your Regrowth spell by 30%.",
              "Increases the critical effect chance of your Regrowth spell by 40%.",
              "Increases the critical effect chance of your Regrowth spell by 50%."
            ],
            "type": "Passive",
            "prerequisite": "improved-rejuvenation",
            "icon": "icons/druid/improved-regrowth.jpg",
            "sourceIcon": "spell_nature_resistnature"
          },
          {
            "id": "wild-growth",
            "name": "Wild Growth",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Heals the target and their party for 336 over 7 sec. Party members must be within 43.5 yards of target. The amount healed is applied quickly at first, and slows down as Wild Growth reaches its full duration.",
            "type": "Active",
            "details": [
              "550 Mana",
              "40 yd range",
              "Instant",
              "6 sec cooldown"
            ],
            "prerequisite": "living-spirit",
            "icon": "icons/druid/wild-growth.jpg",
            "sourceIcon": "ability_druid_flourish"
          }
        ]
      }
    ]
  },
  "hunter": {
    "version": 6,
    "gameClass": "hunter",
    "name": "Hunter",
    "color": "#abd473",
    "legacyBuilds": {
      "FF2": [
        [
          "deadly-aspects",
          5
        ],
        [
          "endurance-training",
          5
        ],
        [
          "focused-fire",
          2
        ],
        [
          "improved-aspect-of-the-monkey",
          3
        ],
        [
          "pathfinding",
          2
        ],
        [
          "improved-revive-pet",
          2
        ],
        [
          "bestial-swiftness",
          1
        ],
        [
          "unleashed-fury",
          5
        ],
        [
          "improved-mend-pet",
          2
        ],
        [
          "ferocity",
          5
        ],
        [
          "summon-hawk",
          1
        ],
        [
          "spirit-bond",
          2
        ],
        [
          "intimidation",
          1
        ],
        [
          "bestial-discipline",
          2
        ],
        [
          "frenzy",
          5
        ],
        [
          "bestial-wrath",
          1
        ],
        [
          "hawk-eye",
          3
        ],
        [
          "improved-concussive-shot",
          5
        ],
        [
          "lethal-attacks",
          5
        ],
        [
          "improved-stings",
          3
        ],
        [
          "efficiency",
          5
        ],
        [
          "careful-aim",
          5
        ],
        [
          "rapid-killing",
          2
        ],
        [
          "improved-arcane-shot",
          5
        ],
        [
          "lone-wolf",
          1
        ],
        [
          "trueshot-aura",
          1
        ],
        [
          "mortal-shots",
          5
        ],
        [
          "improved-serpent-sting",
          5
        ],
        [
          "rapid-recuperation",
          2
        ],
        [
          "barrage",
          3
        ],
        [
          "scatter-shot",
          1
        ],
        [
          "ranged-weapon-specialization",
          5
        ],
        [
          "sniper-shot",
          1
        ],
        [
          "improved-tracking",
          5
        ],
        [
          "deflection",
          5
        ],
        [
          "entrapment",
          5
        ],
        [
          "savage-strikes",
          2
        ],
        [
          "survivalist",
          5
        ],
        [
          "improved-wing-clip",
          3
        ],
        [
          "clever-traps",
          2
        ],
        [
          "surefooted",
          3
        ],
        [
          "deterrence",
          1
        ],
        [
          "survival-tactics",
          2
        ],
        [
          "predators-edge",
          5
        ],
        [
          "counterattack",
          1
        ],
        [
          "resourcefulness",
          2
        ],
        [
          "expose-prey",
          2
        ],
        [
          "survivalists-discipline",
          2
        ],
        [
          "strider-kick",
          1
        ],
        [
          "lightning-reflexes",
          5
        ],
        [
          "lacerating-strikes",
          1
        ]
      ]
    },
    "trees": [
      {
        "id": "beast-mastery",
        "name": "Beast Mastery",
        "role": "Beast Mastery",
        "color": "#78ba62",
        "icon": "icons/hunter/beast-mastery.jpg",
        "talents": [
          {
            "id": "deadly-aspects",
            "name": "Deadly Aspects",
            "max": 5,
            "row": 1,
            "col": 2,
            "description": "While Aspect of the Hawk is active, Auto Shot has a 2% chance of increasing ranged attack speed by 30% for 12 sec. While Aspect of the Beast is active, all melee auto attacks have a 2% chance of increasing melee attack speed by 30% for 12 sec.",
            "rankDescriptions": [
              "While Aspect of the Hawk is active, Auto Shot has a 2% chance of increasing ranged attack speed by 30% for 12 sec. While Aspect of the Beast is active, all melee auto attacks have a 2% chance of increasing melee attack speed by 30% for 12 sec.",
              "While Aspect of the Hawk is active, Auto Shot has a 4% chance of increasing ranged attack speed by 30% for 12 sec. While Aspect of the Beast is active, all melee auto attacks have a 4% chance of increasing melee attack speed by 30% for 12 sec.",
              "While Aspect of the Hawk is active, Auto Shot has a 6% chance of increasing ranged attack speed by 30% for 12 sec. While Aspect of the Beast is active, all melee auto attacks have a 6% chance of increasing melee attack speed by 30% for 12 sec.",
              "While Aspect of the Hawk is active, Auto Shot has a 8% chance of increasing ranged attack speed by 30% for 12 sec. While Aspect of the Beast is active, all melee auto attacks have a 8% chance of increasing melee attack speed by 30% for 12 sec.",
              "While Aspect of the Hawk is active, Auto Shot has a 10% chance of increasing ranged attack speed by 30% for 12 sec. While Aspect of the Beast is active, all melee auto attacks have a 10% chance of increasing melee attack speed by 30% for 12 sec."
            ],
            "type": "Passive",
            "icon": "icons/hunter/deadly-aspects.jpg",
            "sourceIcon": "spell_nature_ravenform"
          },
          {
            "id": "endurance-training",
            "name": "Endurance Training",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Increases the Health and Armor of your pets by 3%.",
            "rankDescriptions": [
              "Increases the Health and Armor of your pets by 3%.",
              "Increases the Health and Armor of your pets by 6%.",
              "Increases the Health and Armor of your pets by 9%.",
              "Increases the Health and Armor of your pets by 12%.",
              "Increases the Health and Armor of your pets by 15%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/endurance-training.jpg",
            "sourceIcon": "spell_nature_reincarnation"
          },
          {
            "id": "focused-fire",
            "name": "Focused Fire",
            "max": 2,
            "row": 2,
            "col": 1,
            "description": "Increases all damage you and your pet deal by 1% while your pet is active.",
            "rankDescriptions": [
              "Increases all damage you and your pet deal by 1% while your pet is active.",
              "Increases all damage you and your pet deal by 2% while your pet is active."
            ],
            "type": "Passive",
            "icon": "icons/hunter/focused-fire.jpg",
            "sourceIcon": "inv_weapon_crossbow_10"
          },
          {
            "id": "improved-aspect-of-the-monkey",
            "name": "Improved Aspect of the Monkey",
            "max": 3,
            "row": 2,
            "col": 2,
            "description": "Increases the Dodge bonus of your Aspect of the Monkey by 2%. Additionally, your pet gains 50% of the effect of your Aspect of the Monkey ability.",
            "rankDescriptions": [
              "Increases the Dodge bonus of your Aspect of the Monkey by 2%. Additionally, your pet gains 50% of the effect of your Aspect of the Monkey ability.",
              "Increases the Dodge bonus of your Aspect of the Monkey by 4%. Additionally, your pet gains 50% of the effect of your Aspect of the Monkey ability.",
              "Increases the Dodge bonus of your Aspect of the Monkey by 6%. Additionally, your pet gains 50% of the effect of your Aspect of the Monkey ability."
            ],
            "type": "Passive",
            "icon": "icons/hunter/improved-aspect-of-the-monkey.jpg",
            "sourceIcon": "ability_hunter_aspectofthemonkey"
          },
          {
            "id": "pathfinding",
            "name": "Pathfinding",
            "max": 2,
            "row": 2,
            "col": 3,
            "description": "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 3%.",
            "rankDescriptions": [
              "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 3%.",
              "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 6%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/pathfinding.jpg",
            "sourceIcon": "ability_mount_jungletiger"
          },
          {
            "id": "improved-revive-pet",
            "name": "Improved Revive Pet",
            "max": 2,
            "row": 2,
            "col": 4,
            "description": "Revive Pet’s casting time is reduced by 3 sec, mana cost is reduced by 20%, and increases the health your pet returns with by an additional 15%.",
            "rankDescriptions": [
              "Revive Pet’s casting time is reduced by 3 sec, mana cost is reduced by 20%, and increases the health your pet returns with by an additional 15%.",
              "Revive Pet’s casting time is reduced by 6 sec, mana cost is reduced by 40%, and increases the health your pet returns with by an additional 30%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/improved-revive-pet.jpg",
            "sourceIcon": "ability_hunter_beastsoothe"
          },
          {
            "id": "bestial-swiftness",
            "name": "Bestial Swiftness",
            "max": 1,
            "row": 3,
            "col": 2,
            "description": "Increases the movement speed of your pets by 30%.",
            "type": "Passive",
            "icon": "icons/hunter/bestial-swiftness.jpg",
            "sourceIcon": "ability_druid_dash"
          },
          {
            "id": "unleashed-fury",
            "name": "Unleashed Fury",
            "max": 5,
            "row": 3,
            "col": 3,
            "description": "Increases the damage done by your pets and hawks by 3%.",
            "rankDescriptions": [
              "Increases the damage done by your pets and hawks by 3%.",
              "Increases the damage done by your pets and hawks by 6%.",
              "Increases the damage done by your pets and hawks by 9%.",
              "Increases the damage done by your pets and hawks by 12%.",
              "Increases the damage done by your pets and hawks by 15%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/unleashed-fury.jpg",
            "sourceIcon": "ability_bullrush"
          },
          {
            "id": "improved-mend-pet",
            "name": "Improved Mend Pet",
            "max": 2,
            "row": 4,
            "col": 1,
            "description": "Gives your Mend Pet spell a 15% chance of cleansing 1 Curse, Disease, Magic, or Poison effect from your pet each time it heals and reduces the Mana cost by 10%.",
            "rankDescriptions": [
              "Gives your Mend Pet spell a 15% chance of cleansing 1 Curse, Disease, Magic, or Poison effect from your pet each time it heals and reduces the Mana cost by 10%.",
              "Gives your Mend Pet spell a 50% chance of cleansing 1 Curse, Disease, Magic, or Poison effect from your pet each time it heals and reduces the Mana cost by 20%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/improved-mend-pet.jpg",
            "sourceIcon": "ability_hunter_mendpet"
          },
          {
            "id": "ferocity",
            "name": "Ferocity",
            "max": 5,
            "row": 4,
            "col": 3,
            "description": "Increases the critical strike chance of your pets and hawks by 2%.",
            "rankDescriptions": [
              "Increases the critical strike chance of your pets and hawks by 2%.",
              "Increases the critical strike chance of your pets and hawks by 4%.",
              "Increases the critical strike chance of your pets and hawks by 6%.",
              "Increases the critical strike chance of your pets and hawks by 8%.",
              "Increases the critical strike chance of your pets and hawks by 10%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/ferocity.jpg",
            "sourceIcon": "inv_misc_monsterclaw_04"
          },
          {
            "id": "summon-hawk",
            "name": "Summon Hawk",
            "max": 1,
            "row": 4,
            "col": 4,
            "description": "Command a hawk to dive-bomb your targeted enemy, dealing [32 / Ferocity: 48 / Unleashed Fury: 52 + (Ranged Attack Power * (0.05))] Physical damage and continuing its assault for 18 sec. Only 2 hawks can be active at once. Summon Hawk shares its cooldown with Arcane Shot.",
            "type": "Active",
            "details": [
              "80 Mana",
              "35 yd range",
              "Instant",
              "6 sec cooldown"
            ],
            "icon": "icons/hunter/summon-hawk.jpg",
            "sourceIcon": "ability_hunter_animalhandler"
          },
          {
            "id": "spirit-bond",
            "name": "Spirit Bond",
            "max": 2,
            "row": 5,
            "col": 1,
            "description": "While your pet is active, you and your pet will regenerate 1% of total health every 10 sec.",
            "rankDescriptions": [
              "While your pet is active, you and your pet will regenerate 1% of total health every 10 sec.",
              "While your pet is active, you and your pet will regenerate 1% of total health every 5 sec."
            ],
            "type": "Passive",
            "icon": "icons/hunter/spirit-bond.jpg",
            "sourceIcon": "ability_druid_demoralizingroar"
          },
          {
            "id": "intimidation",
            "name": "Intimidation",
            "max": 1,
            "row": 5,
            "col": 2,
            "description": "Command your pet to Stun the target for 3 sec on its next successful attack, which also gains 100% increased critical strike chance. Generates high threat.",
            "type": "Active",
            "details": [
              "8% of base Mana",
              "100 yd range",
              "Instant",
              "1 min cooldown"
            ],
            "prerequisite": "bestial-swiftness",
            "icon": "icons/hunter/intimidation.jpg",
            "sourceIcon": "ability_devour"
          },
          {
            "id": "bestial-discipline",
            "name": "Bestial Discipline",
            "max": 2,
            "row": 5,
            "col": 4,
            "description": "Increases the Focus regeneration of your pets by 10% and allows 25% of your Mana regeneration to continue while casting.",
            "rankDescriptions": [
              "Increases the Focus regeneration of your pets by 10% and allows 25% of your Mana regeneration to continue while casting.",
              "Increases the Focus regeneration of your pets by 20% and allows 50% of your Mana regeneration to continue while casting."
            ],
            "type": "Passive",
            "icon": "icons/hunter/bestial-discipline.jpg",
            "sourceIcon": "spell_nature_abolishmagic"
          },
          {
            "id": "frenzy",
            "name": "Frenzy",
            "max": 5,
            "row": 6,
            "col": 3,
            "description": "Gives your pet a 20% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
            "rankDescriptions": [
              "Gives your pet a 20% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
              "Gives your pet a 40% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
              "Gives your pet a 60% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
              "Gives your pet a 80% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
              "Gives your pet a 100% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike."
            ],
            "type": "Passive",
            "prerequisite": "ferocity",
            "icon": "icons/hunter/frenzy.jpg",
            "sourceIcon": "inv_misc_monsterclaw_03"
          },
          {
            "id": "bestial-wrath",
            "name": "Bestial Wrath",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Send your pet into a rage causing 50% additional damage for 18 sec. While enraged, the beast does not feel pity or remorse or fear and it cannot be stopped unless killed.",
            "type": "Active",
            "details": [
              "12% of base Mana",
              "100 yd range",
              "Instant",
              "2 min cooldown"
            ],
            "prerequisite": "intimidation",
            "icon": "icons/hunter/bestial-wrath.jpg",
            "sourceIcon": "ability_druid_ferociousbite"
          }
        ]
      },
      {
        "id": "marksmanship",
        "name": "Marksmanship",
        "role": "Marksmanship",
        "color": "#d6b560",
        "icon": "icons/hunter/marksmanship.jpg",
        "talents": [
          {
            "id": "hawk-eye",
            "name": "Hawk Eye",
            "max": 3,
            "row": 1,
            "col": 1,
            "description": "Increases the range of your ranged weapons by 2 yards.",
            "rankDescriptions": [
              "Increases the range of your ranged weapons by 2 yards.",
              "Increases the range of your ranged weapons by 4 yards.",
              "Increases the range of your ranged weapons by 6 yards."
            ],
            "type": "Passive",
            "icon": "icons/hunter/hawk-eye.jpg",
            "sourceIcon": "ability_townwatch"
          },
          {
            "id": "improved-concussive-shot",
            "name": "Improved Concussive Shot",
            "max": 5,
            "row": 1,
            "col": 2,
            "description": "Gives your Concussive Shot a 4% chance to stun the target for 3 sec.",
            "rankDescriptions": [
              "Gives your Concussive Shot a 4% chance to stun the target for 3 sec.",
              "Gives your Concussive Shot a 8% chance to stun the target for 3 sec.",
              "Gives your Concussive Shot a 12% chance to stun the target for 3 sec.",
              "Gives your Concussive Shot a 16% chance to stun the target for 3 sec.",
              "Gives your Concussive Shot a 20% chance to stun the target for 3 sec."
            ],
            "type": "Passive",
            "icon": "icons/hunter/improved-concussive-shot.jpg",
            "sourceIcon": "spell_frost_stun"
          },
          {
            "id": "lethal-attacks",
            "name": "Lethal Attacks",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Increases your critical strike chance with all attacks by 1%.",
            "rankDescriptions": [
              "Increases your critical strike chance with all attacks by 1%.",
              "Increases your critical strike chance with all attacks by 2%.",
              "Increases your critical strike chance with all attacks by 3%.",
              "Increases your critical strike chance with all attacks by 4%.",
              "Increases your critical strike chance with all attacks by 5%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/lethal-attacks.jpg",
            "sourceIcon": "ability_searingarrow"
          },
          {
            "id": "improved-stings",
            "name": "Improved Stings",
            "max": 3,
            "row": 2,
            "col": 1,
            "description": "Increases the damage of your Serpent Sting ability by 6%, reduces the cooldown of your Viper Sting ability by 2 sec, and increases the duration of your Scorpid Sting ability by 15 sec.",
            "rankDescriptions": [
              "Increases the damage of your Serpent Sting ability by 6%, reduces the cooldown of your Viper Sting ability by 2 sec, and increases the duration of your Scorpid Sting ability by 15 sec.",
              "Increases the damage of your Serpent Sting ability by 13%, reduces the cooldown of your Viper Sting ability by 4 sec, and increases the duration of your Scorpid Sting ability by 30 sec.",
              "Increases the damage of your Serpent Sting ability by 20%, reduces the cooldown of your Viper Sting ability by 6 sec, and increases the duration of your Scorpid Sting ability by 45 sec."
            ],
            "type": "Passive",
            "icon": "icons/hunter/improved-stings.jpg",
            "sourceIcon": "ability_hunter_quickshot"
          },
          {
            "id": "efficiency",
            "name": "Efficiency",
            "max": 5,
            "row": 2,
            "col": 2,
            "description": "Reduces the Mana cost of your Shots, Stings, and melee abilities by 3%.",
            "rankDescriptions": [
              "Reduces the Mana cost of your Shots, Stings, and melee abilities by 3%.",
              "Reduces the Mana cost of your Shots, Stings, and melee abilities by 6%.",
              "Reduces the Mana cost of your Shots, Stings, and melee abilities by 9%.",
              "Reduces the Mana cost of your Shots, Stings, and melee abilities by 12%.",
              "Reduces the Mana cost of your Shots, Stings, and melee abilities by 15%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/efficiency.jpg",
            "sourceIcon": "spell_frost_wizardmark"
          },
          {
            "id": "careful-aim",
            "name": "Careful Aim",
            "max": 5,
            "row": 2,
            "col": 3,
            "description": "Increases your Attack Power by 20% of your Intellect.",
            "rankDescriptions": [
              "Increases your Attack Power by 20% of your Intellect.",
              "Increases your Attack Power by 40% of your Intellect.",
              "Increases your Attack Power by 60% of your Intellect.",
              "Increases your Attack Power by 80% of your Intellect.",
              "Increases your Attack Power by 100% of your Intellect."
            ],
            "type": "Passive",
            "icon": "icons/hunter/careful-aim.jpg",
            "sourceIcon": "ability_hunter_zenarchery"
          },
          {
            "id": "rapid-killing",
            "name": "Rapid Killing",
            "max": 2,
            "row": 3,
            "col": 1,
            "description": "Reduces the cooldown on your Rapid Fire ability by 1 min. In addition, when you kill a non-trivial enemy or it dies while afflicted by your Serpent Sting, you gain Rapid Killing, increasing the damage of your next Shot ability within 20 sec by 10%.",
            "rankDescriptions": [
              "Reduces the cooldown on your Rapid Fire ability by 1 min. In addition, when you kill a non-trivial enemy or it dies while afflicted by your Serpent Sting, you gain Rapid Killing, increasing the damage of your next Shot ability within 20 sec by 10%.",
              "Reduces the cooldown on your Rapid Fire ability by 2 min. In addition, when you kill a non-trivial enemy or it dies while afflicted by your Serpent Sting, you gain Rapid Killing, increasing the damage of your next Shot ability within 20 sec by 20%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/rapid-killing.jpg",
            "sourceIcon": "ability_hunter_rapidkilling"
          },
          {
            "id": "improved-arcane-shot",
            "name": "Improved Arcane Shot",
            "max": 5,
            "row": 3,
            "col": 2,
            "description": "Reduces the cooldown of your Arcane Shot by 0.3 sec. Does not affect the cooldown of abilities which share a cooldown with Arcane Shot.",
            "rankDescriptions": [
              "Reduces the cooldown of your Arcane Shot by 0.3 sec. Does not affect the cooldown of abilities which share a cooldown with Arcane Shot.",
              "Reduces the cooldown of your Arcane Shot by 0.6 sec. Does not affect the cooldown of abilities which share a cooldown with Arcane Shot.",
              "Reduces the cooldown of your Arcane Shot by 0.9 sec. Does not affect the cooldown of abilities which share a cooldown with Arcane Shot.",
              "Reduces the cooldown of your Arcane Shot by 1.2 sec. Does not affect the cooldown of abilities which share a cooldown with Arcane Shot.",
              "Reduces the cooldown of your Arcane Shot by 1.5 sec. Does not affect the cooldown of abilities which share a cooldown with Arcane Shot."
            ],
            "type": "Passive",
            "icon": "icons/hunter/improved-arcane-shot.jpg",
            "sourceIcon": "ability_impalingbolt"
          },
          {
            "id": "lone-wolf",
            "name": "Lone Wolf",
            "max": 1,
            "row": 3,
            "col": 4,
            "description": "You deal 20% increased damage with all attacks while you do not have an active pet.",
            "type": "Passive",
            "icon": "icons/hunter/lone-wolf.jpg",
            "sourceIcon": "ability_mount_whitedirewolf"
          },
          {
            "id": "trueshot-aura",
            "name": "Trueshot Aura",
            "max": 1,
            "row": 4,
            "col": 2,
            "description": "Increases the Ranged Attack Power of party or raid members within 45 yds by 30.",
            "type": "Active",
            "details": [
              "180 Mana",
              "Instant"
            ],
            "icon": "icons/hunter/trueshot-aura.jpg",
            "sourceIcon": "ability_trueshot"
          },
          {
            "id": "mortal-shots",
            "name": "Mortal Shots",
            "max": 5,
            "row": 4,
            "col": 3,
            "description": "Increases the critical strike damage bonus on all ranged abilities by 6%.",
            "rankDescriptions": [
              "Increases the critical strike damage bonus on all ranged abilities by 6%.",
              "Increases the critical strike damage bonus on all ranged abilities by 12%.",
              "Increases the critical strike damage bonus on all ranged abilities by 18%.",
              "Increases the critical strike damage bonus on all ranged abilities by 24%.",
              "Increases the critical strike damage bonus on all ranged abilities by 30%."
            ],
            "type": "Passive",
            "prerequisite": "careful-aim",
            "icon": "icons/hunter/mortal-shots.jpg",
            "sourceIcon": "ability_piercedamage"
          },
          {
            "id": "improved-serpent-sting",
            "name": "Improved Serpent Sting",
            "max": 5,
            "row": 4,
            "col": 4,
            "description": "Increases the damage done by your Serpent Sting by 2%.",
            "rankDescriptions": [
              "Increases the damage done by your Serpent Sting by 2%.",
              "Increases the damage done by your Serpent Sting by 4%.",
              "Increases the damage done by your Serpent Sting by 6%.",
              "Increases the damage done by your Serpent Sting by 8%.",
              "Increases the damage done by your Serpent Sting by 10%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/improved-serpent-sting.jpg",
            "sourceIcon": "ability_hunter_quickshot"
          },
          {
            "id": "rapid-recuperation",
            "name": "Rapid Recuperation",
            "max": 2,
            "row": 5,
            "col": 1,
            "description": "Afflicting a target with Serpent Sting allows 25% of your Mana Regeneration to continue while casting for 15 sec, increased to 50% when Rapid Killing is consumed.",
            "rankDescriptions": [
              "Afflicting a target with Serpent Sting allows 25% of your Mana Regeneration to continue while casting for 15 sec, increased to 50% when Rapid Killing is consumed.",
              "Afflicting a target with Serpent Sting allows 50% of your Mana Regeneration to continue while casting for 15 sec, increased to 100% when Rapid Killing is consumed."
            ],
            "type": "Passive",
            "prerequisite": "rapid-killing",
            "icon": "icons/hunter/rapid-recuperation.jpg",
            "sourceIcon": "ability_hunter_rapidregeneration"
          },
          {
            "id": "barrage",
            "name": "Barrage",
            "max": 3,
            "row": 5,
            "col": 3,
            "description": "Increases the damage done by your Multi-Shot, Aimed Shot, and Volley abilities by 3%.",
            "rankDescriptions": [
              "Increases the damage done by your Multi-Shot, Aimed Shot, and Volley abilities by 3%.",
              "Increases the damage done by your Multi-Shot, Aimed Shot, and Volley abilities by 7%.",
              "Increases the damage done by your Multi-Shot, Aimed Shot, and Volley abilities by 10%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/barrage.jpg",
            "sourceIcon": "ability_upgrademoonglaive"
          },
          {
            "id": "scatter-shot",
            "name": "Scatter Shot",
            "max": 1,
            "row": 5,
            "col": 4,
            "description": "A short-range shot that deals 50% weapon damage and disorients the target for 4 sec. Any damage caused will remove the effect. Turns off your attack when used.",
            "type": "Active",
            "details": [
              "8% of base Mana",
              "15 yd range",
              "Instant",
              "30 sec cooldown"
            ],
            "icon": "icons/hunter/scatter-shot.jpg",
            "sourceIcon": "ability_golemstormbolt"
          },
          {
            "id": "ranged-weapon-specialization",
            "name": "Ranged Weapon Specialization",
            "max": 5,
            "row": 6,
            "col": 3,
            "description": "Increases the damage you deal with ranged weapons by 1%.",
            "rankDescriptions": [
              "Increases the damage you deal with ranged weapons by 1%.",
              "Increases the damage you deal with ranged weapons by 2%.",
              "Increases the damage you deal with ranged weapons by 3%.",
              "Increases the damage you deal with ranged weapons by 4%.",
              "Increases the damage you deal with ranged weapons by 5%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/ranged-weapon-specialization.jpg",
            "sourceIcon": "inv_weapon_rifle_06"
          },
          {
            "id": "sniper-shot",
            "name": "Sniper Shot",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "A long-range shot that deals ranged damage plus 160 and increases the range of your next 3 Shots by 10 yards for 10 sec.",
            "type": "Active",
            "details": [
              "365 Mana",
              "8–45 yd range",
              "4 sec cast",
              "15 sec cooldown"
            ],
            "prerequisite": "trueshot-aura",
            "icon": "icons/hunter/sniper-shot.jpg",
            "sourceIcon": "hunter_pvp_snipershot"
          }
        ]
      },
      {
        "id": "survival",
        "name": "Survival",
        "role": "Survival",
        "color": "#d98556",
        "icon": "icons/hunter/survival.jpg",
        "talents": [
          {
            "id": "improved-tracking",
            "name": "Improved Tracking",
            "max": 5,
            "row": 1,
            "col": 2,
            "description": "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids, or Undead, all damage you deal to the tracked creature type is increased by 1%.",
            "rankDescriptions": [
              "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids, or Undead, all damage you deal to the tracked creature type is increased by 1%.",
              "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids, or Undead, all damage you deal to the tracked creature type is increased by 2%.",
              "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids, or Undead, all damage you deal to the tracked creature type is increased by 3%.",
              "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids, or Undead, all damage you deal to the tracked creature type is increased by 4%.",
              "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids, or Undead, all damage you deal to the tracked creature type is increased by 5%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/improved-tracking.jpg",
            "sourceIcon": "inv_misc_head_dragon_black"
          },
          {
            "id": "deflection",
            "name": "Deflection",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Increases your Parry chance by 1%.",
            "rankDescriptions": [
              "Increases your Parry chance by 1%.",
              "Increases your Parry chance by 2%.",
              "Increases your Parry chance by 3%.",
              "Increases your Parry chance by 4%.",
              "Increases your Parry chance by 5%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/deflection.jpg",
            "sourceIcon": "ability_parry"
          },
          {
            "id": "entrapment",
            "name": "Entrapment",
            "max": 5,
            "row": 2,
            "col": 1,
            "description": "When your traps are triggered, all affected targets are Entrapped, preventing them from moving for 1 sec.",
            "rankDescriptions": [
              "When your traps are triggered, all affected targets are Entrapped, preventing them from moving for 1 sec.",
              "When your traps are triggered, all affected targets are Entrapped, preventing them from moving for 2 sec.",
              "When your traps are triggered, all affected targets are Entrapped, preventing them from moving for 3 sec.",
              "When your traps are triggered, all affected targets are Entrapped, preventing them from moving for 4 sec.",
              "When your traps are triggered, all affected targets are Entrapped, preventing them from moving for 5 sec."
            ],
            "type": "Passive",
            "icon": "icons/hunter/entrapment.jpg",
            "sourceIcon": "spell_nature_stranglevines"
          },
          {
            "id": "savage-strikes",
            "name": "Savage Strikes",
            "max": 2,
            "row": 2,
            "col": 2,
            "description": "Increases the critical strike chance of all your melee abilities by 2%.",
            "rankDescriptions": [
              "Increases the critical strike chance of all your melee abilities by 2%.",
              "Increases the critical strike chance of all your melee abilities by 4%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/savage-strikes.jpg",
            "sourceIcon": "ability_racial_bloodrage"
          },
          {
            "id": "survivalist",
            "name": "Survivalist",
            "max": 5,
            "row": 2,
            "col": 3,
            "description": "Increases your total Health by 2%.",
            "rankDescriptions": [
              "Increases your total Health by 2%.",
              "Increases your total Health by 4%.",
              "Increases your total Health by 6%.",
              "Increases your total Health by 8%.",
              "Increases your total Health by 10%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/survivalist.jpg",
            "sourceIcon": "spell_shadow_twilight"
          },
          {
            "id": "improved-wing-clip",
            "name": "Improved Wing Clip",
            "max": 3,
            "row": 2,
            "col": 4,
            "description": "Gives your Wing Clip ability a 7% chance to immobilize the target for 5 sec.",
            "rankDescriptions": [
              "Gives your Wing Clip ability a 7% chance to immobilize the target for 5 sec.",
              "Gives your Wing Clip ability a 13% chance to immobilize the target for 5 sec.",
              "Gives your Wing Clip ability a 20% chance to immobilize the target for 5 sec."
            ],
            "type": "Passive",
            "icon": "icons/hunter/improved-wing-clip.jpg",
            "sourceIcon": "ability_rogue_trip"
          },
          {
            "id": "clever-traps",
            "name": "Clever Traps",
            "max": 2,
            "row": 3,
            "col": 1,
            "description": "Increases the duration of Freezing and Frost trap effects by 15% and the damage of Immolation and Explosive trap effects by 15%.",
            "rankDescriptions": [
              "Increases the duration of Freezing and Frost trap effects by 15% and the damage of Immolation and Explosive trap effects by 15%.",
              "Increases the duration of Freezing and Frost trap effects by 30% and the damage of Immolation and Explosive trap effects by 30%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/clever-traps.jpg",
            "sourceIcon": "spell_nature_timestop"
          },
          {
            "id": "surefooted",
            "name": "Surefooted",
            "max": 3,
            "row": 3,
            "col": 2,
            "description": "Increases your hit chance by 1% and reduces the duration of movement impairing effects on you by 10%.",
            "rankDescriptions": [
              "Increases your hit chance by 1% and reduces the duration of movement impairing effects on you by 10%.",
              "Increases your hit chance by 2% and reduces the duration of movement impairing effects on you by 20%.",
              "Increases your hit chance by 3% and reduces the duration of movement impairing effects on you by 30%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/surefooted.jpg",
            "sourceIcon": "ability_kick"
          },
          {
            "id": "deterrence",
            "name": "Deterrence",
            "max": 1,
            "row": 3,
            "col": 3,
            "description": "When activated, increases your Dodge and Parry chance by 25% for 10 sec.",
            "type": "Active",
            "details": [
              "Instant",
              "5 min cooldown"
            ],
            "icon": "icons/hunter/deterrence.jpg",
            "sourceIcon": "ability_whirlwind"
          },
          {
            "id": "survival-tactics",
            "name": "Survival Tactics",
            "max": 2,
            "row": 4,
            "col": 1,
            "description": "Increases your chance to hit with your Trap and Feign Death abilities by 5%.",
            "rankDescriptions": [
              "Increases your chance to hit with your Trap and Feign Death abilities by 5%.",
              "Increases your chance to hit with your Trap and Feign Death abilities by 10%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/survival-tactics.jpg",
            "sourceIcon": "ability_ensnare"
          },
          {
            "id": "predators-edge",
            "name": "Predator’s Edge",
            "max": 5,
            "row": 4,
            "col": 2,
            "description": "Increases your melee ability critical strike damage by 6% and your Off Hand weapon damage by 10%.",
            "rankDescriptions": [
              "Increases your melee ability critical strike damage by 6% and your Off Hand weapon damage by 10%.",
              "Increases your melee ability critical strike damage by 12% and your Off Hand weapon damage by 20%.",
              "Increases your melee ability critical strike damage by 18% and your Off Hand weapon damage by 30%.",
              "Increases your melee ability critical strike damage by 24% and your Off Hand weapon damage by 40%.",
              "Increases your melee ability critical strike damage by 30% and your Off Hand weapon damage by 50%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/predators-edge.jpg",
            "sourceIcon": "ability_dualwield"
          },
          {
            "id": "counterattack",
            "name": "Counterattack",
            "max": 1,
            "row": 4,
            "col": 3,
            "description": "A strike that becomes active after parrying an opponent’s attack. This attack deals 50% weapon damage plus 26 and immobilizes the target for 5 sec. Counterattack cannot be blocked, dodged, or parried.",
            "type": "Active",
            "details": [
              "30 Mana",
              "Melee Range",
              "Instant",
              "5 sec cooldown"
            ],
            "prerequisite": "deterrence",
            "icon": "icons/hunter/counterattack.jpg",
            "sourceIcon": "ability_warrior_challange"
          },
          {
            "id": "resourcefulness",
            "name": "Resourcefulness",
            "max": 2,
            "row": 5,
            "col": 1,
            "description": "Reduces the Mana cost of your Trap and melee abilities by 30%, and grants your melee and ranged ability Critical Strikes a 50% chance to allow 50% of your Mana Regeneration to continue while casting for 30 sec.",
            "rankDescriptions": [
              "Reduces the Mana cost of your Trap and melee abilities by 30%, and grants your melee and ranged ability Critical Strikes a 50% chance to allow 50% of your Mana Regeneration to continue while casting for 30 sec.",
              "Reduces the Mana cost of your Trap and melee abilities by 60%, and grants your melee and ranged ability Critical Strikes a 100% chance to allow 50% of your Mana Regeneration to continue while casting for 30 sec."
            ],
            "type": "Passive",
            "icon": "icons/hunter/resourcefulness.jpg",
            "sourceIcon": "ability_hunter_resourcefulness"
          },
          {
            "id": "expose-prey",
            "name": "Expose Prey",
            "max": 2,
            "row": 5,
            "col": 2,
            "description": "Grants your melee and ranged attacks against enemies afflicted by Hunter’s Mark a 5% chance to allow an activation of Mongoose Bite. Lasts 10 sec.",
            "rankDescriptions": [
              "Grants your melee and ranged attacks against enemies afflicted by Hunter’s Mark a 5% chance to allow an activation of Mongoose Bite. Lasts 10 sec.",
              "Grants your melee and ranged attacks against enemies afflicted by Hunter’s Mark a 10% chance to allow an activation of Mongoose Bite. Lasts 10 sec."
            ],
            "type": "Passive",
            "icon": "icons/hunter/expose-prey.jpg",
            "sourceIcon": "ability_hunter_swiftstrike"
          },
          {
            "id": "survivalists-discipline",
            "name": "Survivalist’s Discipline",
            "max": 2,
            "row": 5,
            "col": 3,
            "description": "Reduces the cooldown of your Trap and Deterrence abilities by 20%.",
            "rankDescriptions": [
              "Reduces the cooldown of your Trap and Deterrence abilities by 20%.",
              "Reduces the cooldown of your Trap and Deterrence abilities by 40%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/survivalists-discipline.jpg",
            "sourceIcon": "ability_hunter_mastertactitian"
          },
          {
            "id": "strider-kick",
            "name": "Strider Kick",
            "max": 1,
            "row": 5,
            "col": 4,
            "description": "A powerful kick that deals 100% melee weapon damage and increases movement speed by 30% for 3 sec.",
            "type": "Active",
            "details": [
              "5.81% of base Mana",
              "Melee Range",
              "Instant",
              "8 sec cooldown"
            ],
            "icon": "icons/hunter/strider-kick.jpg",
            "sourceIcon": "ability_hunter_pet_tallstrider"
          },
          {
            "id": "lightning-reflexes",
            "name": "Lightning Reflexes",
            "max": 5,
            "row": 6,
            "col": 3,
            "description": "Increases your Agility by 2%.",
            "rankDescriptions": [
              "Increases your Agility by 2%.",
              "Increases your Agility by 4%.",
              "Increases your Agility by 6%.",
              "Increases your Agility by 8%.",
              "Increases your Agility by 10%."
            ],
            "type": "Passive",
            "icon": "icons/hunter/lightning-reflexes.jpg",
            "sourceIcon": "spell_nature_invisibilty"
          },
          {
            "id": "lacerating-strikes",
            "name": "Lacerating Strikes",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Your Mongoose Bite also causes the target to Bleed for damage equal to 40% of the damage done by Mongoose Bite over 21 sec",
            "type": "Passive",
            "prerequisite": "expose-prey",
            "icon": "icons/hunter/lacerating-strikes.jpg",
            "sourceIcon": "ability_gouge"
          }
        ]
      }
    ]
  },
  "mage": {
    "version": 6,
    "gameClass": "mage",
    "name": "Mage",
    "color": "#69ccf0",
    "legacyBuilds": {
      "FF2": [
        [
          "wand-specialization",
          2
        ],
        [
          "arcane-focus",
          5
        ],
        [
          "improved-channeling",
          5
        ],
        [
          "arcane-subtlety",
          2
        ],
        [
          "magic-absorption",
          2
        ],
        [
          "arcane-concentration",
          5
        ],
        [
          "arcane-resilience",
          2
        ],
        [
          "arcane-geometry",
          2
        ],
        [
          "arcane-impact",
          3
        ],
        [
          "arcane-blast",
          1
        ],
        [
          "arcane-shielding",
          2
        ],
        [
          "improved-counterspell",
          2
        ],
        [
          "arcane-meditation",
          3
        ],
        [
          "missile-barrage",
          1
        ],
        [
          "presence-of-mind",
          1
        ],
        [
          "arcane-mind",
          5
        ],
        [
          "arcane-instability",
          3
        ],
        [
          "arcane-power",
          1
        ],
        [
          "wake-of-fire",
          2
        ],
        [
          "incineration",
          3
        ],
        [
          "improved-fireball",
          5
        ],
        [
          "ignite",
          5
        ],
        [
          "flame-throwing",
          2
        ],
        [
          "impact",
          3
        ],
        [
          "burning-soul",
          3
        ],
        [
          "improved-flamestrike",
          3
        ],
        [
          "pyroblast",
          1
        ],
        [
          "improved-scorch",
          3
        ],
        [
          "improved-fire-ward",
          2
        ],
        [
          "hot-streak",
          1
        ],
        [
          "master-of-elements",
          3
        ],
        [
          "critical-mass",
          3
        ],
        [
          "blast-wave",
          1
        ],
        [
          "fire-power",
          5
        ],
        [
          "combustion",
          1
        ],
        [
          "frost-warding",
          2
        ],
        [
          "improved-frostbolt",
          5
        ],
        [
          "elemental-precision",
          5
        ],
        [
          "ice-shards",
          5
        ],
        [
          "permafrost",
          3
        ],
        [
          "improved-frost-nova",
          2
        ],
        [
          "frostbite",
          3
        ],
        [
          "piercing-ice",
          3
        ],
        [
          "frost-channeling",
          3
        ],
        [
          "ice-lance",
          1
        ],
        [
          "improved-blizzard",
          3
        ],
        [
          "arctic-reach",
          2
        ],
        [
          "ice-block",
          1
        ],
        [
          "shatter",
          3
        ],
        [
          "improved-cone-of-cold",
          3
        ],
        [
          "cold-snap",
          1
        ],
        [
          "fingers-of-frost",
          2
        ],
        [
          "winters-chill",
          5
        ],
        [
          "ice-barrier",
          1
        ]
      ]
    },
    "trees": [
      {
        "id": "arcane",
        "name": "Arcane",
        "role": "Arcane",
        "color": "#a98bdd",
        "icon": "icons/mage/arcane.jpg",
        "talents": [
          {
            "id": "wand-specialization",
            "name": "Wand Specialization",
            "max": 2,
            "row": 1,
            "col": 1,
            "description": "Increases your damage with Wands by 13%.",
            "rankDescriptions": [
              "Increases your damage with Wands by 13%.",
              "Increases your damage with Wands by 25%."
            ],
            "type": "Passive",
            "icon": "icons/mage/wand-specialization.jpg",
            "sourceIcon": "inv_wand_01"
          },
          {
            "id": "arcane-focus",
            "name": "Arcane Focus",
            "max": 5,
            "row": 1,
            "col": 2,
            "description": "Improves your chance to hit with Arcane spells by 1%.",
            "rankDescriptions": [
              "Improves your chance to hit with Arcane spells by 1%.",
              "Improves your chance to hit with Arcane spells by 2%.",
              "Improves your chance to hit with Arcane spells by 3%.",
              "Improves your chance to hit with Arcane spells by 4%.",
              "Improves your chance to hit with Arcane spells by 5%."
            ],
            "type": "Passive",
            "icon": "icons/mage/arcane-focus.jpg",
            "sourceIcon": "spell_holy_devotion"
          },
          {
            "id": "improved-channeling",
            "name": "Improved Channeling",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Gives you a 20% chance to avoid interruption caused by damage while channeling Arcane Missiles and a 14% chance while casting Arcane Blast or Arcane Wrath.",
            "rankDescriptions": [
              "Gives you a 20% chance to avoid interruption caused by damage while channeling Arcane Missiles and a 14% chance while casting Arcane Blast or Arcane Wrath.",
              "Gives you a 40% chance to avoid interruption caused by damage while channeling Arcane Missiles and a 28% chance while casting Arcane Blast or Arcane Wrath.",
              "Gives you a 60% chance to avoid interruption caused by damage while channeling Arcane Missiles and a 42% chance while casting Arcane Blast or Arcane Wrath.",
              "Gives you a 80% chance to avoid interruption caused by damage while channeling Arcane Missiles and a 56% chance while casting Arcane Blast or Arcane Wrath.",
              "Gives you a 100% chance to avoid interruption caused by damage while channeling Arcane Missiles and a 70% chance while casting Arcane Blast or Arcane Wrath."
            ],
            "type": "Passive",
            "icon": "icons/mage/improved-channeling.jpg",
            "sourceIcon": "spell_nature_starfall"
          },
          {
            "id": "missile-barrage",
            "name": "Missile Barrage",
            "max": 2,
            "row": 1,
            "col": 4,
            "description": "Gives your Arcane Blast spell a 20% chance, your Arcane Missile hits a 5% chance, and your Arcane Wrath, Fireball, Frostbolt, and Frostfire Bolt spells a 10% chance to reduce the channeled duration of your next Arcane Missiles spell by 50%, reduce the Mana cost by 100%, and missiles fire every 0.5 sec.",
            "type": "Passive",
            "icon": "icons/mage/missile-barrage.jpg",
            "sourceIcon": "ability_mage_missilebarrage",
            "rankDescriptions": [
              "Gives your Arcane Blast spell a 20% chance, your Arcane Missile hits a 5% chance, and your Arcane Wrath, Fireball, Frostbolt, and Frostfire Bolt spells a 10% chance to reduce the channeled duration of your next Arcane Missiles spell by 50%, reduce the Mana cost by 100%, and missiles fire every 0.5 sec.",
              "Gives your Arcane Blast spell a 40% chance, your Arcane Missile hits a 10% chance, and your Arcane Wrath, Fireball, Frostbolt, and Frostfire Bolt spells a 20% chance to reduce the channeled duration of your next Arcane Missiles spell by 50%, reduce the Mana cost by 100%, and missiles fire every 0.5 sec."
            ]
          },
          {
            "id": "arcane-subtlety",
            "name": "Arcane Subtlety",
            "max": 2,
            "row": 2,
            "col": 1,
            "description": "Reduces your target’s resistance to all your spells by 8 and reduces the threat caused by your Arcane spells by 15%.",
            "rankDescriptions": [
              "Reduces your target’s resistance to all your spells by 8 and reduces the threat caused by your Arcane spells by 15%.",
              "Reduces your target’s resistance to all your spells by 15 and reduces the threat caused by your Arcane spells by 30%."
            ],
            "type": "Passive",
            "icon": "icons/mage/arcane-subtlety.jpg",
            "sourceIcon": "spell_holy_dispelmagic"
          },
          {
            "id": "magic-absorption",
            "name": "Magic Absorption",
            "max": 2,
            "row": 2,
            "col": 2,
            "description": "Increases all your resistances by 5 and causes all spells you fully resist to restore 1% of your total mana. Cannot trigger more often than 1 time per sec.",
            "rankDescriptions": [
              "Increases all your resistances by 5 and causes all spells you fully resist to restore 1% of your total mana. Cannot trigger more often than 1 time per sec.",
              "Increases all your resistances by 10 and causes all spells you fully resist to restore 2% of your total mana. Cannot trigger more often than 1 time per sec."
            ],
            "type": "Passive",
            "icon": "icons/mage/magic-absorption.jpg",
            "sourceIcon": "spell_nature_astralrecalgroup"
          },
          {
            "id": "arcane-concentration",
            "name": "Arcane Concentration",
            "max": 5,
            "row": 2,
            "col": 3,
            "description": "Gives you a 2% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
            "rankDescriptions": [
              "Gives you a 2% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
              "Gives you a 4% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
              "Gives you a 6% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
              "Gives you a 8% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
              "Gives you a 10% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%."
            ],
            "type": "Passive",
            "icon": "icons/mage/arcane-concentration.jpg",
            "sourceIcon": "spell_shadow_manaburn"
          },
          {
            "id": "arcane-resilience",
            "name": "Arcane Resilience",
            "max": 2,
            "row": 2,
            "col": 4,
            "description": "Increases your Armor by an amount equal to 25% of your Intellect.",
            "rankDescriptions": [
              "Increases your Armor by an amount equal to 25% of your Intellect.",
              "Increases your Armor by an amount equal to 50% of your Intellect."
            ],
            "type": "Passive",
            "icon": "icons/mage/arcane-resilience.jpg",
            "sourceIcon": "spell_arcane_arcaneresilience"
          },
          {
            "id": "arcane-geometry",
            "name": "Arcane Geometry",
            "max": 2,
            "row": 3,
            "col": 1,
            "description": "Increases the range of your Arcane spells by 3 yards.",
            "rankDescriptions": [
              "Increases the range of your Arcane spells by 3 yards.",
              "Increases the range of your Arcane spells by 6 yards."
            ],
            "type": "Passive",
            "icon": "icons/mage/arcane-geometry.jpg",
            "sourceIcon": "inv_ability_mage_radiantspark"
          },
          {
            "id": "arcane-impact",
            "name": "Arcane Impact",
            "max": 3,
            "row": 3,
            "col": 2,
            "description": "Increases the critical strike chance of your Arcane spells by 2%.",
            "rankDescriptions": [
              "Increases the critical strike chance of your Arcane spells by 2%.",
              "Increases the critical strike chance of your Arcane spells by 4%.",
              "Increases the critical strike chance of your Arcane spells by 6%."
            ],
            "type": "Passive",
            "icon": "icons/mage/arcane-impact.jpg",
            "sourceIcon": "spell_nature_wispsplode"
          },
          {
            "id": "arcane-blast",
            "name": "Arcane Blast",
            "max": 1,
            "row": 3,
            "col": 4,
            "description": "Blasts the target with energy, dealing 34 to 38 Arcane damage. Each time you cast Arcane Blast, you gain 15% of your Intellect as Spell Damage and the mana cost of Arcane Blast is increased by 175%. Effect stacks up to 4 times and lasts 15 sec from time of initial application.",
            "type": "Active",
            "details": [
              "15% of base Mana",
              "30 yd range",
              "1.5 sec cast"
            ],
            "icon": "icons/mage/arcane-blast.jpg",
            "sourceIcon": "spell_arcane_blast"
          },
          {
            "id": "arcane-shielding",
            "name": "Arcane Shielding",
            "max": 2,
            "row": 4,
            "col": 1,
            "description": "Decreases the Mana lost per point of damage taken when your Mana Shield spell is active by 17% and increases the resistances granted by your Mage Armor spell by 25%.",
            "rankDescriptions": [
              "Decreases the Mana lost per point of damage taken when your Mana Shield spell is active by 17% and increases the resistances granted by your Mage Armor spell by 25%.",
              "Decreases the Mana lost per point of damage taken when your Mana Shield spell is active by 33% and increases the resistances granted by your Mage Armor spell by 50%."
            ],
            "type": "Passive",
            "icon": "icons/mage/arcane-shielding.jpg",
            "sourceIcon": "spell_shadow_detectlesserinvisibility"
          },
          {
            "id": "improved-counterspell",
            "name": "Improved Counterspell",
            "max": 2,
            "row": 4,
            "col": 2,
            "description": "Your Counterspell also Silences the target for 2 sec.",
            "rankDescriptions": [
              "Your Counterspell also Silences the target for 2 sec.",
              "Your Counterspell also Silences the target for 4 sec."
            ],
            "type": "Passive",
            "icon": "icons/mage/improved-counterspell.jpg",
            "sourceIcon": "spell_frost_iceshock"
          },
          {
            "id": "arcane-meditation",
            "name": "Arcane Meditation",
            "max": 3,
            "row": 4,
            "col": 3,
            "description": "Allows 17% of your Mana regeneration to continue while casting.",
            "rankDescriptions": [
              "Allows 17% of your Mana regeneration to continue while casting.",
              "Allows 33% of your Mana regeneration to continue while casting.",
              "Allows 50% of your Mana regeneration to continue while casting."
            ],
            "type": "Passive",
            "prerequisite": "arcane-concentration",
            "icon": "icons/mage/arcane-meditation.jpg",
            "sourceIcon": "spell_shadow_siphonmana"
          },
          {
            "id": "arcane-wrath",
            "name": "Arcane Wrath",
            "max": 1,
            "row": 4,
            "col": 4,
            "description": "Launches a projectile of pure Arcane energy at the enemy target, causing 122 to 146 Arcane damage. This spell gains additional Spell Damage equal to 5% of your maximum Mana.",
            "type": "Active",
            "sourceIcon": "ability_mage_netherwindpresence",
            "prerequisite": "arcane-blast",
            "details": [
              "140 Mana",
              "30 yd range",
              "3.5 sec cast",
              "6 sec cooldown"
            ]
          },
          {
            "id": "presence-of-mind",
            "name": "Presence of Mind",
            "max": 1,
            "row": 5,
            "col": 2,
            "description": "When activated, your next Mage spell with a casting time less than 10 sec becomes an instant cast spell.",
            "type": "Active",
            "details": [
              "Instant",
              "3 min cooldown"
            ],
            "icon": "icons/mage/presence-of-mind.jpg",
            "sourceIcon": "spell_nature_enchantarmor"
          },
          {
            "id": "arcane-mind",
            "name": "Arcane Mind",
            "max": 5,
            "row": 5,
            "col": 3,
            "description": "Increases your Intellect by 2% and increases the critical strike damage bonus of your Arcane spells by 20%.",
            "rankDescriptions": [
              "Increases your Intellect by 2% and increases the critical strike damage bonus of your Arcane spells by 20%.",
              "Increases your Intellect by 4% and increases the critical strike damage bonus of your Arcane spells by 40%.",
              "Increases your Intellect by 6% and increases the critical strike damage bonus of your Arcane spells by 60%.",
              "Increases your Intellect by 8% and increases the critical strike damage bonus of your Arcane spells by 80%.",
              "Increases your Intellect by 10% and increases the critical strike damage bonus of your Arcane spells by 100%."
            ],
            "type": "Passive",
            "icon": "icons/mage/arcane-mind.jpg",
            "sourceIcon": "spell_shadow_charm"
          },
          {
            "id": "arcane-instability",
            "name": "Arcane Instability",
            "max": 3,
            "row": 6,
            "col": 3,
            "description": "Increases the damage done by your spells by 1% and your critical strike chance by 1%.",
            "rankDescriptions": [
              "Increases the damage done by your spells by 1% and your critical strike chance by 1%.",
              "Increases the damage done by your spells by 2% and your critical strike chance by 2%.",
              "Increases the damage done by your spells by 3% and your critical strike chance by 3%."
            ],
            "type": "Passive",
            "icon": "icons/mage/arcane-instability.jpg",
            "sourceIcon": "spell_shadow_teleport"
          },
          {
            "id": "arcane-power",
            "name": "Arcane Power",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "For the next 15 sec, your spells deal 30% more damage while costing 30% more mana to cast.",
            "type": "Active",
            "details": [
              "Instant",
              "3 min cooldown"
            ],
            "prerequisite": "presence-of-mind",
            "icon": "icons/mage/arcane-power.jpg",
            "sourceIcon": "spell_nature_lightning"
          }
        ]
      },
      {
        "id": "fire",
        "name": "Fire",
        "role": "Fire",
        "color": "#e88450",
        "icon": "icons/mage/fire.jpg",
        "talents": [
          {
            "id": "improved-fire-blast",
            "name": "Improved Fire Blast",
            "max": 2,
            "row": 1,
            "col": 1,
            "description": "Reduces the cooldown of your Fire Blast spell by 1 sec and increases its range by 8 yards.",
            "type": "Passive",
            "sourceIcon": "spell_fire_lavaspawn",
            "rankDescriptions": [
              "Reduces the cooldown of your Fire Blast spell by 1 sec and increases its range by 8 yards.",
              "Reduces the cooldown of your Fire Blast spell by 2 sec and increases its range by 15 yards."
            ]
          },
          {
            "id": "incineration",
            "name": "Incineration",
            "max": 3,
            "row": 1,
            "col": 2,
            "description": "Increases the critical strike chance of your Fire Blast, Ice Lance, Arcane Blast, and Scorch spells by 2%.",
            "rankDescriptions": [
              "Increases the critical strike chance of your Fire Blast, Ice Lance, Arcane Blast, and Scorch spells by 2%.",
              "Increases the critical strike chance of your Fire Blast, Ice Lance, Arcane Blast, and Scorch spells by 4%.",
              "Increases the critical strike chance of your Fire Blast, Ice Lance, Arcane Blast, and Scorch spells by 6%."
            ],
            "type": "Passive",
            "icon": "icons/mage/incineration.jpg",
            "sourceIcon": "spell_fire_flameshock"
          },
          {
            "id": "improved-fireball",
            "name": "Improved Fireball",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Reduces the casting time of your Fireball and Frostfire Bolt spells by 0.1 sec.",
            "rankDescriptions": [
              "Reduces the casting time of your Fireball and Frostfire Bolt spells by 0.1 sec.",
              "Reduces the casting time of your Fireball and Frostfire Bolt spells by 0.2 sec.",
              "Reduces the casting time of your Fireball and Frostfire Bolt spells by 0.3 sec.",
              "Reduces the casting time of your Fireball and Frostfire Bolt spells by 0.4 sec.",
              "Reduces the casting time of your Fireball and Frostfire Bolt spells by 0.5 sec."
            ],
            "type": "Passive",
            "icon": "icons/mage/improved-fireball.jpg",
            "sourceIcon": "spell_fire_flamebolt"
          },
          {
            "id": "ignite",
            "name": "Ignite",
            "max": 5,
            "row": 2,
            "col": 1,
            "description": "Your critical strikes from Fire damage spells cause the target to burn for an additional 8% of your spell’s damage over 4 sec.",
            "rankDescriptions": [
              "Your critical strikes from Fire damage spells cause the target to burn for an additional 8% of your spell’s damage over 4 sec.",
              "Your critical strikes from Fire damage spells cause the target to burn for an additional 16% of your spell’s damage over 4 sec.",
              "Your critical strikes from Fire damage spells cause the target to burn for an additional 24% of your spell’s damage over 4 sec.",
              "Your critical strikes from Fire damage spells cause the target to burn for an additional 32% of your spell’s damage over 4 sec.",
              "Your critical strikes from Fire damage spells cause the target to burn for an additional 40% of your spell’s damage over 4 sec."
            ],
            "type": "Passive",
            "icon": "icons/mage/ignite.jpg",
            "sourceIcon": "spell_fire_incinerate"
          },
          {
            "id": "flame-throwing",
            "name": "Flame Throwing",
            "max": 2,
            "row": 2,
            "col": 2,
            "description": "Increases the range of your Fire spells by 3 yards.",
            "rankDescriptions": [
              "Increases the range of your Fire spells by 3 yards.",
              "Increases the range of your Fire spells by 6 yards."
            ],
            "type": "Passive",
            "icon": "icons/mage/flame-throwing.jpg",
            "sourceIcon": "spell_fire_flare"
          },
          {
            "id": "impact",
            "name": "Impact",
            "max": 3,
            "row": 2,
            "col": 3,
            "description": "Gives your Fire spells a 3% chance to stun the target for 2 sec.",
            "rankDescriptions": [
              "Gives your Fire spells a 3% chance to stun the target for 2 sec.",
              "Gives your Fire spells a 7% chance to stun the target for 2 sec.",
              "Gives your Fire spells a 10% chance to stun the target for 2 sec."
            ],
            "type": "Passive",
            "icon": "icons/mage/impact.jpg",
            "sourceIcon": "spell_fire_meteorstorm"
          },
          {
            "id": "burning-soul",
            "name": "Burning Soul",
            "max": 3,
            "row": 3,
            "col": 1,
            "description": "Gives your Fire spells a 23% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by 10%.",
            "rankDescriptions": [
              "Gives your Fire spells a 23% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by 10%.",
              "Gives your Fire spells a 47% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by 20%.",
              "Gives your Fire spells a 70% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by 30%."
            ],
            "type": "Passive",
            "icon": "icons/mage/burning-soul.jpg",
            "sourceIcon": "spell_fire_fire"
          },
          {
            "id": "improved-flamestrike",
            "name": "Improved Flamestrike",
            "max": 3,
            "row": 3,
            "col": 2,
            "description": "Increases the critical strike chance of your Flamestrike spell by 5%.",
            "rankDescriptions": [
              "Increases the critical strike chance of your Flamestrike spell by 5%.",
              "Increases the critical strike chance of your Flamestrike spell by 10%.",
              "Increases the critical strike chance of your Flamestrike spell by 15%."
            ],
            "type": "Passive",
            "icon": "icons/mage/improved-flamestrike.jpg",
            "sourceIcon": "spell_fire_selfdestruct"
          },
          {
            "id": "pyroblast",
            "name": "Pyroblast",
            "max": 1,
            "row": 3,
            "col": 3,
            "description": "Hurls an immense fiery boulder that causes 101 to 131 Fire damage and an additional 44 Fire damage over 12 sec.",
            "type": "Active",
            "details": [
              "125 Mana",
              "35 yd range",
              "6 sec cast"
            ],
            "icon": "icons/mage/pyroblast.jpg",
            "sourceIcon": "spell_fire_fireball02"
          },
          {
            "id": "improved-scorch",
            "name": "Improved Scorch",
            "max": 3,
            "row": 4,
            "col": 1,
            "description": "Your Scorch spell has a 33% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases all Fire damage you deal to your target by 3% and lasts 30 sec, stacking up to 5 times.",
            "rankDescriptions": [
              "Your Scorch spell has a 33% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases all Fire damage you deal to your target by 3% and lasts 30 sec, stacking up to 5 times.",
              "Your Scorch spell has a 67% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases all Fire damage you deal to your target by 3% and lasts 30 sec, stacking up to 5 times.",
              "Your Scorch spell has a 100% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases all Fire damage you deal to your target by 3% and lasts 30 sec, stacking up to 5 times."
            ],
            "type": "Passive",
            "icon": "icons/mage/improved-scorch.jpg",
            "sourceIcon": "spell_fire_soulburn"
          },
          {
            "id": "improved-fire-ward",
            "name": "Improved Fire Ward",
            "max": 2,
            "row": 4,
            "col": 2,
            "description": "Causes your Fire Ward to have a 10% chance to reflect Fire spells while active.",
            "rankDescriptions": [
              "Causes your Fire Ward to have a 10% chance to reflect Fire spells while active.",
              "Causes your Fire Ward to have a 20% chance to reflect Fire spells while active."
            ],
            "type": "Passive",
            "icon": "icons/mage/improved-fire-ward.jpg",
            "sourceIcon": "spell_fire_firearmor"
          },
          {
            "id": "heating-up",
            "name": "Heating Up",
            "max": 1,
            "row": 4,
            "col": 3,
            "description": "Non-periodic critical strikes with Fireball, Frostfire Bolt, Fire Blast, and Scorch reduce the cast time of your next Pyroblast cast within 20 sec by 25%, stacking up to 3 times. Fire Blast grants an additional stack every time it deals damage.",
            "type": "Passive",
            "prerequisite": "pyroblast",
            "icon": "icons/mage/heating-up.jpg",
            "sourceIcon": "spell_fire_firebolt"
          },
          {
            "id": "master-of-elements",
            "name": "Master of Elements",
            "max": 3,
            "row": 4,
            "col": 4,
            "description": "Your Fire and Frost critical strikes will refund 10% of their base mana cost.",
            "rankDescriptions": [
              "Your Fire and Frost critical strikes will refund 10% of their base mana cost.",
              "Your Fire and Frost critical strikes will refund 20% of their base mana cost.",
              "Your Fire and Frost critical strikes will refund 30% of their base mana cost."
            ],
            "type": "Passive",
            "icon": "icons/mage/master-of-elements.jpg",
            "sourceIcon": "spell_fire_masterofelements"
          },
          {
            "id": "critical-mass",
            "name": "Critical Mass",
            "max": 5,
            "row": 5,
            "col": 2,
            "description": "Increases the critical strike chance of your Fire spells by 2%.",
            "rankDescriptions": [
              "Increases the critical strike chance of your Fire spells by 2%.",
              "Increases the critical strike chance of your Fire spells by 4%.",
              "Increases the critical strike chance of your Fire spells by 6%.",
              "Increases the critical strike chance of your Fire spells by 8%.",
              "Increases the critical strike chance of your Fire spells by 10%."
            ],
            "type": "Passive",
            "icon": "icons/mage/critical-mass.jpg",
            "sourceIcon": "spell_nature_wispheal"
          },
          {
            "id": "blast-wave",
            "name": "Blast Wave",
            "max": 1,
            "row": 5,
            "col": 3,
            "description": "A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for 154 to 184 Fire damage, and Dazing them for 50% reduced movement speed for 6 sec.",
            "type": "Active",
            "details": [
              "215 Mana",
              "Instant",
              "45 sec cooldown"
            ],
            "icon": "icons/mage/blast-wave.jpg",
            "sourceIcon": "spell_holy_excorcism_02"
          },
          {
            "id": "fire-power",
            "name": "Fire Power",
            "max": 3,
            "row": 6,
            "col": 3,
            "description": "Increases the damage done by your Fire spells by 1% per your Fire effects on the target, up to a maximum increase of 4%. Effects which mix multiple schools of magic do not qualify.",
            "rankDescriptions": [
              "Increases the damage done by your Fire spells by 1% per your Fire effects on the target, up to a maximum increase of 4%. Effects which mix multiple schools of magic do not qualify.",
              "Increases the damage done by your Fire spells by 2% per your Fire effects on the target, up to a maximum increase of 8%. Effects which mix multiple schools of magic do not qualify.",
              "Increases the damage done by your Fire spells by 3% per your Fire effects on the target, up to a maximum increase of 12%. Effects which mix multiple schools of magic do not qualify."
            ],
            "type": "Passive",
            "icon": "icons/mage/fire-power.jpg",
            "sourceIcon": "spell_fire_immolation"
          },
          {
            "id": "combustion",
            "name": "Combustion",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "When activated, this spell causes each of your Fire damage spell hits to increase your critical strike chance with Fire damage spells by 10%. This effect lasts until you have caused 3 non-periodic critical strikes with Fire spells.",
            "type": "Active",
            "details": [
              "Instant",
              "3 min cooldown"
            ],
            "prerequisite": "critical-mass",
            "icon": "icons/mage/combustion.jpg",
            "sourceIcon": "spell_fire_sealoffire"
          }
        ]
      },
      {
        "id": "frost",
        "name": "Frost",
        "role": "Frost",
        "color": "#79b9e5",
        "icon": "icons/mage/frost.jpg",
        "talents": [
          {
            "id": "frost-warding",
            "name": "Frost Warding",
            "max": 2,
            "row": 1,
            "col": 1,
            "description": "Increases the Armor and resistance given by your Frost Armor and Ice Armor spells by 15%. In addition, gives your Frost Ward a 10% chance to reflect Frost spells and effects while active.",
            "rankDescriptions": [
              "Increases the Armor and resistance given by your Frost Armor and Ice Armor spells by 15%. In addition, gives your Frost Ward a 10% chance to reflect Frost spells and effects while active.",
              "Increases the Armor and resistance given by your Frost Armor and Ice Armor spells by 30%. In addition, gives your Frost Ward a 20% chance to reflect Frost spells and effects while active."
            ],
            "type": "Passive",
            "icon": "icons/mage/frost-warding.jpg",
            "sourceIcon": "spell_frost_frostward"
          },
          {
            "id": "improved-frostbolt",
            "name": "Improved Frostbolt",
            "max": 5,
            "row": 1,
            "col": 2,
            "description": "Reduces the casting time of your Frostbolt and Frost Blast spells by 0.1 sec.",
            "rankDescriptions": [
              "Reduces the casting time of your Frostbolt and Frost Blast spells by 0.1 sec.",
              "Reduces the casting time of your Frostbolt and Frost Blast spells by 0.2 sec.",
              "Reduces the casting time of your Frostbolt and Frost Blast spells by 0.3 sec.",
              "Reduces the casting time of your Frostbolt and Frost Blast spells by 0.4 sec.",
              "Reduces the casting time of your Frostbolt and Frost Blast spells by 0.5 sec."
            ],
            "type": "Passive",
            "icon": "icons/mage/improved-frostbolt.jpg",
            "sourceIcon": "spell_frost_frostbolt02"
          },
          {
            "id": "elemental-precision",
            "name": "Elemental Precision",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Improves your chance to hit with Frost and Fire spells by 1%.",
            "rankDescriptions": [
              "Improves your chance to hit with Frost and Fire spells by 1%.",
              "Improves your chance to hit with Frost and Fire spells by 2%.",
              "Improves your chance to hit with Frost and Fire spells by 3%.",
              "Improves your chance to hit with Frost and Fire spells by 4%.",
              "Improves your chance to hit with Frost and Fire spells by 5%."
            ],
            "type": "Passive",
            "icon": "icons/mage/elemental-precision.jpg",
            "sourceIcon": "spell_ice_magicdamage"
          },
          {
            "id": "ice-shards",
            "name": "Ice Shards",
            "max": 5,
            "row": 2,
            "col": 1,
            "description": "Increases the critical strike damage bonus of your Frost spells by 20%.",
            "rankDescriptions": [
              "Increases the critical strike damage bonus of your Frost spells by 20%.",
              "Increases the critical strike damage bonus of your Frost spells by 40%.",
              "Increases the critical strike damage bonus of your Frost spells by 60%.",
              "Increases the critical strike damage bonus of your Frost spells by 80%.",
              "Increases the critical strike damage bonus of your Frost spells by 100%."
            ],
            "type": "Passive",
            "icon": "icons/mage/ice-shards.jpg",
            "sourceIcon": "spell_frost_iceshard"
          },
          {
            "id": "frostbite",
            "name": "Frostbite",
            "max": 3,
            "row": 2,
            "col": 4,
            "description": "Gives your Chill effects a 5% chance to Freeze the target for 5 sec.",
            "rankDescriptions": [
              "Gives your Chill effects a 5% chance to Freeze the target for 5 sec.",
              "Gives your Chill effects a 10% chance to Freeze the target for 5 sec.",
              "Gives your Chill effects a 15% chance to Freeze the target for 5 sec."
            ],
            "type": "Passive",
            "icon": "icons/mage/frostbite.jpg",
            "sourceIcon": "spell_frost_frostarmor"
          },
          {
            "id": "improved-frost-nova",
            "name": "Improved Frost Nova",
            "max": 2,
            "row": 2,
            "col": 3,
            "description": "Reduces the cooldown of your Frost Nova spell by 2 sec.",
            "rankDescriptions": [
              "Reduces the cooldown of your Frost Nova spell by 2 sec.",
              "Reduces the cooldown of your Frost Nova spell by 4 sec."
            ],
            "type": "Passive",
            "icon": "icons/mage/improved-frost-nova.jpg",
            "sourceIcon": "spell_frost_freezingbreath"
          },
          {
            "id": "permafrost",
            "name": "Permafrost",
            "max": 3,
            "row": 2,
            "col": 2,
            "description": "Increases the duration of your Chill effects by 11% and reduces the target’s speed by an additional 3%.",
            "rankDescriptions": [
              "Increases the duration of your Chill effects by 11% and reduces the target’s speed by an additional 3%.",
              "Increases the duration of your Chill effects by 22% and reduces the target’s speed by an additional 7%.",
              "Increases the duration of your Chill effects by 33% and reduces the target’s speed by an additional 10%."
            ],
            "type": "Passive",
            "icon": "icons/mage/permafrost.jpg",
            "sourceIcon": "spell_frost_wisp"
          },
          {
            "id": "piercing-ice",
            "name": "Piercing Ice",
            "max": 3,
            "row": 3,
            "col": 1,
            "description": "Increases the damage done by your Frost spells by 2%.",
            "rankDescriptions": [
              "Increases the damage done by your Frost spells by 2%.",
              "Increases the damage done by your Frost spells by 4%.",
              "Increases the damage done by your Frost spells by 6%."
            ],
            "type": "Passive",
            "icon": "icons/mage/piercing-ice.jpg",
            "sourceIcon": "spell_frost_frostbolt"
          },
          {
            "id": "frost-channeling",
            "name": "Frost Channeling",
            "max": 3,
            "row": 3,
            "col": 2,
            "description": "Reduces the mana cost of your Frost spells by 5% and reduces the threat caused by your Frost spells by 10%.",
            "rankDescriptions": [
              "Reduces the mana cost of your Frost spells by 5% and reduces the threat caused by your Frost spells by 10%.",
              "Reduces the mana cost of your Frost spells by 10% and reduces the threat caused by your Frost spells by 20%.",
              "Reduces the mana cost of your Frost spells by 15% and reduces the threat caused by your Frost spells by 30%."
            ],
            "type": "Passive",
            "icon": "icons/mage/frost-channeling.jpg",
            "sourceIcon": "spell_frost_stun"
          },
          {
            "id": "ice-lance",
            "name": "Ice Lance",
            "max": 1,
            "row": 3,
            "col": 3,
            "description": "Deals 28 to 32 Frost damage to an enemy target. Deals 200% increased damage to Frozen targets.",
            "type": "Active",
            "details": [
              "45 Mana",
              "30 yd range",
              "Instant"
            ],
            "icon": "icons/mage/ice-lance.jpg",
            "sourceIcon": "spell_frost_frostblast"
          },
          {
            "id": "improved-blizzard",
            "name": "Improved Blizzard",
            "max": 3,
            "row": 3,
            "col": 4,
            "description": "Adds a Chill effect to your Blizzard spell. This effect lowers the target’s movement speed by 15% for 1.5 sec.",
            "rankDescriptions": [
              "Adds a Chill effect to your Blizzard spell. This effect lowers the target’s movement speed by 15% for 1.5 sec.",
              "Adds a Chill effect to your Blizzard spell. This effect lowers the target’s movement speed by 25% for 1.5 sec.",
              "Adds a Chill effect to your Blizzard spell. This effect lowers the target’s movement speed by 40% for 1.5 sec."
            ],
            "type": "Passive",
            "icon": "icons/mage/improved-blizzard.jpg",
            "sourceIcon": "spell_frost_icestorm"
          },
          {
            "id": "arctic-reach",
            "name": "Arctic Reach",
            "max": 2,
            "row": 4,
            "col": 1,
            "description": "Increases the range of your Frostbolt, Frost Blast, and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 10%.",
            "rankDescriptions": [
              "Increases the range of your Frostbolt, Frost Blast, and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 10%.",
              "Increases the range of your Frostbolt, Frost Blast, and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 20%."
            ],
            "type": "Passive",
            "icon": "icons/mage/arctic-reach.jpg",
            "sourceIcon": "spell_shadow_darkritual"
          },
          {
            "id": "ice-block",
            "name": "Ice Block",
            "max": 1,
            "row": 4,
            "col": 2,
            "description": "You become encased in a block of ice, protecting you from all physical attacks and spells for 10 sec, but during that time you cannot attack, move, or cast spells.",
            "type": "Active",
            "details": [
              "15 Mana",
              "Instant",
              "5 min cooldown"
            ],
            "icon": "icons/mage/ice-block.jpg",
            "sourceIcon": "spell_frost_frost"
          },
          {
            "id": "shatter",
            "name": "Shatter",
            "max": 3,
            "row": 4,
            "col": 4,
            "description": "Increases the critical strike chance of all your spells against Frozen targets by 17%.",
            "rankDescriptions": [
              "Increases the critical strike chance of all your spells against Frozen targets by 17%.",
              "Increases the critical strike chance of all your spells against Frozen targets by 33%.",
              "Increases the critical strike chance of all your spells against Frozen targets by 50%."
            ],
            "type": "Passive",
            "icon": "icons/mage/shatter.jpg",
            "sourceIcon": "spell_frost_frostshock"
          },
          {
            "id": "improved-cone-of-cold",
            "name": "Improved Cone of Cold",
            "max": 3,
            "row": 5,
            "col": 1,
            "description": "Increases the damage dealt by your Cone of Cold spell by 12%.",
            "rankDescriptions": [
              "Increases the damage dealt by your Cone of Cold spell by 12%.",
              "Increases the damage dealt by your Cone of Cold spell by 23%.",
              "Increases the damage dealt by your Cone of Cold spell by 35%."
            ],
            "type": "Passive",
            "icon": "icons/mage/improved-cone-of-cold.jpg",
            "sourceIcon": "spell_frost_glacier"
          },
          {
            "id": "cold-snap",
            "name": "Cold Snap",
            "max": 1,
            "row": 5,
            "col": 2,
            "description": "Finishes the remaining cooldown on all your other Frost spells.",
            "type": "Active",
            "details": [
              "Instant",
              "10 min cooldown"
            ],
            "icon": "icons/mage/cold-snap.jpg",
            "sourceIcon": "spell_frost_wizardmark"
          },
          {
            "id": "fingers-of-frost",
            "name": "Fingers of Frost",
            "max": 2,
            "row": 5,
            "col": 3,
            "description": "Gives your Chill effects a 15% chance to grant you the Fingers of Frost effect, which treats your next 1 spell cast as if the target were Frozen. Lasts 15 sec.",
            "rankDescriptions": [
              "Gives your Chill effects a 15% chance to grant you the Fingers of Frost effect, which treats your next 1 spell cast as if the target were Frozen. Lasts 15 sec.",
              "Gives your Chill effects a 15% chance to grant you the Fingers of Frost effect, which treats your next 2 spells cast as if the target were Frozen. Lasts 15 sec."
            ],
            "type": "Passive",
            "prerequisite": "ice-lance",
            "icon": "icons/mage/fingers-of-frost.jpg",
            "sourceIcon": "ability_mage_wintersgrasp"
          },
          {
            "id": "winters-chill",
            "name": "Winter’s Chill",
            "max": 5,
            "row": 6,
            "col": 3,
            "description": "Gives your Frost damage spells a 20% chance to apply the Winter’s Chill effect, which increases the damage done by your Cone of Cold spell to the target by 40%, stacking up to 5 times.",
            "rankDescriptions": [
              "Gives your Frost damage spells a 20% chance to apply the Winter’s Chill effect, which increases the damage done by your Cone of Cold spell to the target by 40%, stacking up to 5 times.",
              "Gives your Frost damage spells a 40% chance to apply the Winter’s Chill effect, which increases the damage done by your Cone of Cold spell to the target by 40%, stacking up to 5 times.",
              "Gives your Frost damage spells a 60% chance to apply the Winter’s Chill effect, which increases the damage done by your Cone of Cold spell to the target by 40%, stacking up to 5 times.",
              "Gives your Frost damage spells a 80% chance to apply the Winter’s Chill effect, which increases the damage done by your Cone of Cold spell to the target by 40%, stacking up to 5 times.",
              "Gives your Frost damage spells a 100% chance to apply the Winter’s Chill effect, which increases the damage done by your Cone of Cold spell to the target by 40%, stacking up to 5 times."
            ],
            "type": "Passive",
            "icon": "icons/mage/winters-chill.jpg",
            "sourceIcon": "spell_frost_chillingblast"
          },
          {
            "id": "ice-barrier",
            "name": "Ice Barrier",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Instantly shields you, absorbing 448 damage. Lasts 1 min. While the shield holds, your spellcasts will not be interrupted or delayed from taking damage.",
            "type": "Active",
            "details": [
              "305 Mana",
              "Instant",
              "30 sec cooldown"
            ],
            "prerequisite": "cold-snap",
            "icon": "icons/mage/ice-barrier.jpg",
            "sourceIcon": "spell_ice_lament"
          }
        ]
      }
    ]
  },
  "paladin": {
    "version": 6,
    "gameClass": "paladin",
    "name": "Paladin",
    "color": "#f58cba",
    "legacyBuilds": {
      "FF2": [
        [
          "divine-strength",
          5
        ],
        [
          "divine-intellect",
          5
        ],
        [
          "healing-light",
          3
        ],
        [
          "spiritual-focus",
          2
        ],
        [
          "improved-seals",
          3
        ],
        [
          "unyielding-faith",
          2
        ],
        [
          "voice-of-truth",
          1
        ],
        [
          "reverence",
          3
        ],
        [
          "purifying-power",
          2
        ],
        [
          "infusion-of-light",
          2
        ],
        [
          "illumination",
          5
        ],
        [
          "divine-favor",
          1
        ],
        [
          "divine-precision",
          3
        ],
        [
          "holy-shock",
          1
        ],
        [
          "consecrated-ground",
          2
        ],
        [
          "holy-power",
          5
        ],
        [
          "lights-vigil",
          1
        ],
        [
          "toughness",
          5
        ],
        [
          "redoubt",
          5
        ],
        [
          "precision",
          3
        ],
        [
          "guardians-favor",
          2
        ],
        [
          "anticipation",
          5
        ],
        [
          "improved-seal-of-fury",
          1
        ],
        [
          "improved-righteous-fury",
          3
        ],
        [
          "shield-specialization",
          3
        ],
        [
          "sacred-duty",
          2
        ],
        [
          "swift-judgement",
          1
        ],
        [
          "one-handed-weapon-specialization",
          3
        ],
        [
          "improved-hammer-of-justice",
          3
        ],
        [
          "templars-bulwark",
          1
        ],
        [
          "reckoning",
          5
        ],
        [
          "iron-creed",
          5
        ],
        [
          "holy-shield",
          1
        ],
        [
          "deflection",
          5
        ],
        [
          "benediction",
          5
        ],
        [
          "improved-judgement",
          2
        ],
        [
          "holy-conduit",
          2
        ],
        [
          "conviction",
          5
        ],
        [
          "vindication",
          3
        ],
        [
          "sanctified-judgement",
          3
        ],
        [
          "seal-of-command",
          1
        ],
        [
          "pursuit-of-justice",
          2
        ],
        [
          "eye-for-an-eye",
          2
        ],
        [
          "sacred-arbiter",
          1
        ],
        [
          "two-handed-weapon-specialization",
          3
        ],
        [
          "vengeance",
          3
        ],
        [
          "repentance",
          1
        ],
        [
          "champion-of-the-light",
          3
        ],
        [
          "instrument-of-law",
          2
        ],
        [
          "twist-of-light",
          1
        ]
      ]
    },
    "trees": [
      {
        "id": "holy",
        "name": "Holy",
        "role": "Holy",
        "color": "#e8c96b",
        "icon": "icons/paladin/holy.jpg",
        "talents": [
          {
            "id": "divine-strength",
            "name": "Divine Strength",
            "max": 5,
            "row": 1,
            "col": 2,
            "description": "Increases your Strength by 2%.",
            "rankDescriptions": [
              "Increases your Strength by 2%.",
              "Increases your Strength by 4%.",
              "Increases your Strength by 6%.",
              "Increases your Strength by 8%.",
              "Increases your Strength by 10%."
            ],
            "type": "Passive",
            "icon": "icons/paladin/divine-strength.jpg",
            "sourceIcon": "ability_golemthunderclap"
          },
          {
            "id": "divine-intellect",
            "name": "Divine Intellect",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Increases your total Intellect by 2%.",
            "rankDescriptions": [
              "Increases your total Intellect by 2%.",
              "Increases your total Intellect by 4%.",
              "Increases your total Intellect by 6%.",
              "Increases your total Intellect by 8%.",
              "Increases your total Intellect by 10%."
            ],
            "type": "Passive",
            "icon": "icons/paladin/divine-intellect.jpg",
            "sourceIcon": "spell_nature_sleep"
          },
          {
            "id": "healing-light",
            "name": "Healing Light",
            "max": 3,
            "row": 2,
            "col": 1,
            "description": "Increases the amount healed by your Holy Light, Flash of Light, and Holy Shock spells by 4%.",
            "rankDescriptions": [
              "Increases the amount healed by your Holy Light, Flash of Light, and Holy Shock spells by 4%.",
              "Increases the amount healed by your Holy Light, Flash of Light, and Holy Shock spells by 8%.",
              "Increases the amount healed by your Holy Light, Flash of Light, and Holy Shock spells by 12%."
            ],
            "type": "Passive",
            "icon": "icons/paladin/healing-light.jpg",
            "sourceIcon": "spell_holy_holybolt"
          },
          {
            "id": "spiritual-focus",
            "name": "Spiritual Focus",
            "max": 2,
            "row": 2,
            "col": 2,
            "description": "Gives your Flash of Light, Holy Light, and Light’s Vigil spells a 35% chance to not lose casting time when you take damage.",
            "rankDescriptions": [
              "Gives your Flash of Light, Holy Light, and Light’s Vigil spells a 35% chance to not lose casting time when you take damage.",
              "Gives your Flash of Light, Holy Light, and Light’s Vigil spells a 70% chance to not lose casting time when you take damage."
            ],
            "type": "Passive",
            "icon": "icons/paladin/spiritual-focus.jpg",
            "sourceIcon": "spell_arcane_blink"
          },
          {
            "id": "improved-seals",
            "name": "Improved Seals",
            "max": 3,
            "row": 2,
            "col": 3,
            "description": "Increases the damage done by your Seals and Judgements by 5%.",
            "rankDescriptions": [
              "Increases the damage done by your Seals and Judgements by 5%.",
              "Increases the damage done by your Seals and Judgements by 10%.",
              "Increases the damage done by your Seals and Judgements by 15%."
            ],
            "type": "Passive",
            "icon": "icons/paladin/improved-seals.jpg",
            "sourceIcon": "ability_thunderbolt"
          },
          {
            "id": "unyielding-faith",
            "name": "Unyielding Faith",
            "max": 2,
            "row": 2,
            "col": 4,
            "description": "Reduces the duration of Fear and Disorient effects on you by 15%.",
            "rankDescriptions": [
              "Reduces the duration of Fear and Disorient effects on you by 15%.",
              "Reduces the duration of Fear and Disorient effects on you by 30%."
            ],
            "type": "Passive",
            "icon": "icons/paladin/unyielding-faith.jpg",
            "sourceIcon": "spell_holy_unyieldingfaith"
          },
          {
            "id": "voice-of-truth",
            "name": "Voice of Truth",
            "max": 1,
            "row": 3,
            "col": 1,
            "description": "Grants you immunity to Silence and Interrupt effects for 6 sec.",
            "type": "Active",
            "details": [
              "Instant",
              "3 min cooldown"
            ],
            "icon": "icons/paladin/voice-of-truth.jpg",
            "sourceIcon": "inv_misc_horn_03"
          },
          {
            "id": "reverence",
            "name": "Reverence",
            "max": 3,
            "row": 3,
            "col": 2,
            "description": "Allows 10% of your Mana regeneration to continue while casting.",
            "rankDescriptions": [
              "Allows 10% of your Mana regeneration to continue while casting.",
              "Allows 20% of your Mana regeneration to continue while casting.",
              "Allows 30% of your Mana regeneration to continue while casting."
            ],
            "type": "Passive",
            "icon": "icons/paladin/reverence.jpg",
            "sourceIcon": "spell_holy_divineillumination"
          },
          {
            "id": "purifying-power",
            "name": "Purifying Power",
            "max": 2,
            "row": 3,
            "col": 3,
            "description": "Reduces the mana cost of your Cleanse and Purify spells by 10% and reduces the cooldown of your Exorcism and Holy Wrath spells by 17%.",
            "rankDescriptions": [
              "Reduces the mana cost of your Cleanse and Purify spells by 10% and reduces the cooldown of your Exorcism and Holy Wrath spells by 17%.",
              "Reduces the mana cost of your Cleanse and Purify spells by 20% and reduces the cooldown of your Exorcism and Holy Wrath spells by 33%."
            ],
            "type": "Passive",
            "icon": "icons/paladin/purifying-power.jpg",
            "sourceIcon": "spell_holy_purifyingpower"
          },
          {
            "id": "infusion-of-light",
            "name": "Infusion of Light",
            "max": 2,
            "row": 4,
            "col": 1,
            "description": "Your Holy Shock and Flash of Light critical hits reduce the cast time of your next Holy Light cast within 15 sec by 0.5 sec.",
            "rankDescriptions": [
              "Your Holy Shock and Flash of Light critical hits reduce the cast time of your next Holy Light cast within 15 sec by 0.5 sec.",
              "Your Holy Shock and Flash of Light critical hits reduce the cast time of your next Holy Light cast within 15 sec by 1.0 sec."
            ],
            "type": "Passive",
            "icon": "icons/paladin/infusion-of-light.jpg",
            "sourceIcon": "ability_paladin_infusionoflight"
          },
          {
            "id": "illumination",
            "name": "Illumination",
            "max": 5,
            "row": 4,
            "col": 2,
            "description": "After getting a critical effect from your Flash of Light, Holy Light, Light’s Vigil, or Holy Shock heal spell you have a 20% chance to gain Mana equal to 50% of the base cost of the spell.",
            "rankDescriptions": [
              "After getting a critical effect from your Flash of Light, Holy Light, Light’s Vigil, or Holy Shock heal spell you have a 20% chance to gain Mana equal to 50% of the base cost of the spell.",
              "After getting a critical effect from your Flash of Light, Holy Light, Light’s Vigil, or Holy Shock heal spell you have a 40% chance to gain Mana equal to 50% of the base cost of the spell.",
              "After getting a critical effect from your Flash of Light, Holy Light, Light’s Vigil, or Holy Shock heal spell you have a 60% chance to gain Mana equal to 50% of the base cost of the spell.",
              "After getting a critical effect from your Flash of Light, Holy Light, Light’s Vigil, or Holy Shock heal spell you have a 80% chance to gain Mana equal to 50% of the base cost of the spell.",
              "After getting a critical effect from your Flash of Light, Holy Light, Light’s Vigil, or Holy Shock heal spell you have a 100% chance to gain Mana equal to 50% of the base cost of the spell."
            ],
            "type": "Passive",
            "prerequisite": "reverence",
            "icon": "icons/paladin/illumination.jpg",
            "sourceIcon": "spell_holy_greaterheal"
          },
          {
            "id": "divine-favor",
            "name": "Divine Favor",
            "max": 1,
            "row": 4,
            "col": 3,
            "description": "When activated, gives your next Flash of Light, Holy Light, or Holy Shock spell a 100% critical effect chance.",
            "type": "Active",
            "details": [
              "4% of base Mana",
              "Instant",
              "2 min cooldown"
            ],
            "icon": "icons/paladin/divine-favor.jpg",
            "sourceIcon": "spell_holy_heal"
          },
          {
            "id": "divine-precision",
            "name": "Divine Precision",
            "max": 3,
            "row": 5,
            "col": 1,
            "description": "Improves your chance to hit with Holy spells by 6%.",
            "rankDescriptions": [
              "Improves your chance to hit with Holy spells by 6%.",
              "Improves your chance to hit with Holy spells by 12%.",
              "Improves your chance to hit with Holy spells by 18%."
            ],
            "type": "Passive",
            "prerequisite": "holy-shock",
            "icon": "icons/paladin/divine-precision.jpg",
            "sourceIcon": "spell_holy_healingfocus"
          },
          {
            "id": "holy-shock",
            "name": "Holy Shock",
            "max": 1,
            "row": 5,
            "col": 2,
            "description": "Blasts the target with Holy energy, causing 129 to 139 Holy damage to an enemy, or 110 to 118 healing to an ally.",
            "type": "Active",
            "details": [
              "160 Mana",
              "20 yd range",
              "Instant",
              "10 sec cooldown"
            ],
            "icon": "icons/paladin/holy-shock.jpg",
            "sourceIcon": "spell_holy_searinglight"
          },
          {
            "id": "consecrated-ground",
            "name": "Consecrated Ground",
            "max": 2,
            "row": 5,
            "col": 3,
            "description": "Gives your Holy spells 5% increased damage against the first 4 enemies that enter your Consecration.",
            "rankDescriptions": [
              "Gives your Holy spells 5% increased damage against the first 4 enemies that enter your Consecration.",
              "Gives your Holy spells 10% increased damage against the first 4 enemies that enter your Consecration."
            ],
            "type": "Passive",
            "icon": "icons/paladin/consecrated-ground.jpg",
            "sourceIcon": "spell_holy_innerfire"
          },
          {
            "id": "holy-power",
            "name": "Holy Power",
            "max": 5,
            "row": 6,
            "col": 3,
            "description": "Increases the critical strike chance of your Holy Shock and Holy Strike spells by 3%, and all other spells by 1%.",
            "rankDescriptions": [
              "Increases the critical strike chance of your Holy Shock and Holy Strike spells by 3%, and all other spells by 1%.",
              "Increases the critical strike chance of your Holy Shock and Holy Strike spells by 6%, and all other spells by 2%.",
              "Increases the critical strike chance of your Holy Shock and Holy Strike spells by 9%, and all other spells by 3%.",
              "Increases the critical strike chance of your Holy Shock and Holy Strike spells by 12%, and all other spells by 4%.",
              "Increases the critical strike chance of your Holy Shock and Holy Strike spells by 15%, and all other spells by 5%."
            ],
            "type": "Passive",
            "icon": "icons/paladin/holy-power.jpg",
            "sourceIcon": "spell_holy_power"
          },
          {
            "id": "lights-vigil",
            "name": "Light’s Vigil",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Applies Light’s Vigil to the target for 30 sec. Your next Holy Shock cast on them triggers no cooldown and causes enemy targets to suffer 175 to 189 Holy damage and refund 75% of Light’s Vigil’s Mana cost, or allied targets to heal their party for 326 to 344. You may only have one Light’s Vigil active per party.",
            "type": "Active",
            "details": [
              "730 Mana",
              "20 yd range",
              "1.5 sec cast",
              "6 sec cooldown"
            ],
            "prerequisite": "holy-shock",
            "icon": "icons/paladin/lights-vigil.jpg",
            "sourceIcon": "ability_paladin_judgementofthepure"
          }
        ]
      },
      {
        "id": "protection",
        "name": "Protection",
        "role": "Protection",
        "color": "#6a9bd8",
        "icon": "icons/paladin/protection.jpg",
        "talents": [
          {
            "id": "toughness",
            "name": "Toughness",
            "max": 5,
            "row": 1,
            "col": 2,
            "description": "Increases your armor value from items by 2%.",
            "rankDescriptions": [
              "Increases your armor value from items by 2%.",
              "Increases your armor value from items by 4%.",
              "Increases your armor value from items by 6%.",
              "Increases your armor value from items by 8%.",
              "Increases your armor value from items by 10%."
            ],
            "type": "Passive",
            "icon": "icons/paladin/toughness.jpg",
            "sourceIcon": "spell_holy_devotion"
          },
          {
            "id": "redoubt",
            "name": "Redoubt",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Damaging melee attacks against you have a 10% chance to increase your chance to block by 4%. Lasts 10 sec or 5 blocks.",
            "rankDescriptions": [
              "Damaging melee attacks against you have a 10% chance to increase your chance to block by 4%. Lasts 10 sec or 5 blocks.",
              "Damaging melee attacks against you have a 10% chance to increase your chance to block by 8%. Lasts 10 sec or 5 blocks.",
              "Damaging melee attacks against you have a 10% chance to increase your chance to block by 12%. Lasts 10 sec or 5 blocks.",
              "Damaging melee attacks against you have a 10% chance to increase your chance to block by 16%. Lasts 10 sec or 5 blocks.",
              "Damaging melee attacks against you have a 10% chance to increase your chance to block by 20%. Lasts 10 sec or 5 blocks."
            ],
            "type": "Passive",
            "icon": "icons/paladin/redoubt.jpg",
            "sourceIcon": "ability_defend"
          },
          {
            "id": "precision",
            "name": "Precision",
            "max": 3,
            "row": 2,
            "col": 1,
            "description": "Improves your chance to hit by 1%.",
            "rankDescriptions": [
              "Improves your chance to hit by 1%.",
              "Improves your chance to hit by 2%.",
              "Improves your chance to hit by 3%."
            ],
            "type": "Passive",
            "icon": "icons/paladin/precision.jpg",
            "sourceIcon": "ability_rogue_ambush"
          },
          {
            "id": "guardians-favor",
            "name": "Guardian’s Favor",
            "max": 2,
            "row": 2,
            "col": 2,
            "description": "Reduces the cooldown of your Blessing of Protection by 1 min and increases the duration of your Blessing of Freedom by 3 sec.",
            "rankDescriptions": [
              "Reduces the cooldown of your Blessing of Protection by 1 min and increases the duration of your Blessing of Freedom by 3 sec.",
              "Reduces the cooldown of your Blessing of Protection by 2 min and increases the duration of your Blessing of Freedom by 6 sec."
            ],
            "type": "Passive",
            "icon": "icons/paladin/guardians-favor.jpg",
            "sourceIcon": "spell_holy_sealofprotection"
          },
          {
            "id": "anticipation",
            "name": "Anticipation",
            "max": 5,
            "row": 2,
            "col": 4,
            "description": "Increases your Defense Skill by 4.",
            "rankDescriptions": [
              "Increases your Defense Skill by 4.",
              "Increases your Defense Skill by 8.",
              "Increases your Defense Skill by 12.",
              "Increases your Defense Skill by 16.",
              "Increases your Defense Skill by 20."
            ],
            "type": "Passive",
            "icon": "icons/paladin/anticipation.jpg",
            "sourceIcon": "spell_magic_lesserinvisibilty"
          },
          {
            "id": "improved-seal-of-fury",
            "name": "Improved Seal of Fury",
            "max": 1,
            "row": 3,
            "col": 1,
            "description": "When Seal of Fury’s shield is fully absorbed, restore 0 Mana, increased by 15% per level the attacker is above you, up to 45%.",
            "type": "Passive",
            "icon": "icons/paladin/improved-seal-of-fury.jpg",
            "sourceIcon": "spell_holy_righteousnessaura"
          },
          {
            "id": "improved-righteous-fury",
            "name": "Improved Righteous Fury",
            "max": 3,
            "row": 3,
            "col": 2,
            "description": "While Righteous Fury is active, all damage taken is reduced by 2%.",
            "rankDescriptions": [
              "While Righteous Fury is active, all damage taken is reduced by 2%.",
              "While Righteous Fury is active, all damage taken is reduced by 4%.",
              "While Righteous Fury is active, all damage taken is reduced by 6%."
            ],
            "type": "Passive",
            "icon": "icons/paladin/improved-righteous-fury.jpg",
            "sourceIcon": "spell_holy_sealoffury"
          },
          {
            "id": "shield-specialization",
            "name": "Shield Specialization",
            "max": 3,
            "row": 3,
            "col": 3,
            "description": "Increases the amount of damage absorbed by your shield by 10%, and gives your blocks a 33% chance to restore 4% of your maximum Mana. May only occur once every 3 sec.",
            "rankDescriptions": [
              "Increases the amount of damage absorbed by your shield by 10%, and gives your blocks a 33% chance to restore 4% of your maximum Mana. May only occur once every 3 sec.",
              "Increases the amount of damage absorbed by your shield by 20%, and gives your blocks a 66% chance to restore 4% of your maximum Mana. May only occur once every 3 sec.",
              "Increases the amount of damage absorbed by your shield by 30%, and gives your blocks a 100% chance to restore 4% of your maximum Mana. May only occur once every 3 sec."
            ],
            "type": "Passive",
            "prerequisite": "redoubt",
            "icon": "icons/paladin/shield-specialization.jpg",
            "sourceIcon": "inv_shield_06"
          },
          {
            "id": "sacred-duty",
            "name": "Sacred Duty",
            "max": 2,
            "row": 3,
            "col": 4,
            "description": "Increases your total Stamina by 2% and reduces the cooldown of your Divine Shield, Divine Protection, and Templar’s Bulwark spells by 30 sec.",
            "rankDescriptions": [
              "Increases your total Stamina by 2% and reduces the cooldown of your Divine Shield, Divine Protection, and Templar’s Bulwark spells by 30 sec.",
              "Increases your total Stamina by 4% and reduces the cooldown of your Divine Shield, Divine Protection, and Templar’s Bulwark spells by 60 sec."
            ],
            "type": "Passive",
            "icon": "icons/paladin/sacred-duty.jpg",
            "sourceIcon": "spell_holy_divineintervention"
          },
          {
            "id": "swift-judgement",
            "name": "Swift Judgement",
            "max": 1,
            "row": 4,
            "col": 1,
            "description": "Finishes the remaining cooldown on your Judgement ability and reduces the Mana cost of your next Judgement by 100%.",
            "type": "Active",
            "details": [
              "Instant",
              "1 min cooldown"
            ],
            "prerequisite": "improved-seal-of-fury",
            "icon": "icons/paladin/swift-judgement.jpg",
            "sourceIcon": "ability_paladin_judgementred"
          },
          {
            "id": "one-handed-weapon-specialization",
            "name": "One-Handed Weapon Specialization",
            "max": 3,
            "row": 4,
            "col": 2,
            "description": "Increases the damage you deal with one-handed melee weapons by 3%.",
            "rankDescriptions": [
              "Increases the damage you deal with one-handed melee weapons by 3%.",
              "Increases the damage you deal with one-handed melee weapons by 7%.",
              "Increases the damage you deal with one-handed melee weapons by 10%."
            ],
            "type": "Passive",
            "icon": "icons/paladin/one-handed-weapon-specialization.jpg",
            "sourceIcon": "inv_sword_20"
          },
          {
            "id": "improved-hammer-of-justice",
            "name": "Improved Hammer of Justice",
            "max": 3,
            "row": 4,
            "col": 3,
            "description": "Decreases the cooldown of your Hammer of Justice spell by 5 sec.",
            "rankDescriptions": [
              "Decreases the cooldown of your Hammer of Justice spell by 5 sec.",
              "Decreases the cooldown of your Hammer of Justice spell by 10 sec.",
              "Decreases the cooldown of your Hammer of Justice spell by 15 sec."
            ],
            "type": "Passive",
            "icon": "icons/paladin/improved-hammer-of-justice.jpg",
            "sourceIcon": "spell_holy_sealofmight"
          },
          {
            "id": "templars-bulwark",
            "name": "Templar’s Bulwark",
            "max": 1,
            "row": 5,
            "col": 2,
            "description": "When activated, this ability grants you an absorb shield equal to 100% of your maximum health for 8 sec. Applies Forbearance for 1 min. Cannot be cast while Forbearance is active.",
            "type": "Active",
            "details": [
              "110 Mana",
              "Instant",
              "5 min cooldown"
            ],
            "icon": "icons/paladin/templars-bulwark.jpg",
            "sourceIcon": "ability_paladin_shieldofthetemplar"
          },
          {
            "id": "reckoning",
            "name": "Reckoning",
            "max": 5,
            "row": 5,
            "col": 3,
            "description": "Gives you a 8% chance after Blocking and a 20% chance after receiving a non-periodic critical strike to gain an extra attack. Stores up to 4 extra attacks. Cannot occur from Blocks more than once every 1.5 sec.",
            "rankDescriptions": [
              "Gives you a 8% chance after Blocking and a 20% chance after receiving a non-periodic critical strike to gain an extra attack. Stores up to 4 extra attacks. Cannot occur from Blocks more than once every 1.5 sec.",
              "Gives you a 16% chance after Blocking and a 40% chance after receiving a non-periodic critical strike to gain an extra attack. Stores up to 4 extra attacks. Cannot occur from Blocks more than once every 1.5 sec.",
              "Gives you a 24% chance after Blocking and a 60% chance after receiving a non-periodic critical strike to gain an extra attack. Stores up to 4 extra attacks. Cannot occur from Blocks more than once every 1.5 sec.",
              "Gives you a 32% chance after Blocking and a 80% chance after receiving a non-periodic critical strike to gain an extra attack. Stores up to 4 extra attacks. Cannot occur from Blocks more than once every 1.5 sec.",
              "Gives you a 40% chance after Blocking and a 100% chance after receiving a non-periodic critical strike to gain an extra attack. Stores up to 4 extra attacks. Cannot occur from Blocks more than once every 1.5 sec."
            ],
            "type": "Passive",
            "icon": "icons/paladin/reckoning.jpg",
            "sourceIcon": "spell_holy_blessingofstrength"
          },
          {
            "id": "iron-creed",
            "name": "Iron Creed",
            "max": 5,
            "row": 6,
            "col": 3,
            "description": "Increases the threat generated by your Holy Strike ability by 5%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 2% for 6 sec.",
            "rankDescriptions": [
              "Increases the threat generated by your Holy Strike ability by 5%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 2% for 6 sec.",
              "Increases the threat generated by your Holy Strike ability by 10%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 4% for 6 sec.",
              "Increases the threat generated by your Holy Strike ability by 15%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 6% for 6 sec.",
              "Increases the threat generated by your Holy Strike ability by 20%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 8% for 6 sec.",
              "Increases the threat generated by your Holy Strike ability by 25%. While Righteous Fury is active, Holy Strike also reduces your damage taken by 10% for 6 sec."
            ],
            "type": "Passive",
            "icon": "icons/paladin/iron-creed.jpg",
            "sourceIcon": "spell_holy_improvedresistanceauras"
          },
          {
            "id": "holy-shield",
            "name": "Holy Shield",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Increases chance to block by 30% for 10 sec, and deals 110 Holy damage for each attack blocked while active. Damage caused by Holy Shield causes 20% additional threat. Each block expends a charge. 4 charges.",
            "type": "Active",
            "details": [
              "150 Mana",
              "Instant",
              "10 sec cooldown"
            ],
            "prerequisite": "templars-bulwark",
            "icon": "icons/paladin/holy-shield.jpg",
            "sourceIcon": "spell_holy_blessingofprotection"
          }
        ]
      },
      {
        "id": "retribution",
        "name": "Retribution",
        "role": "Retribution",
        "color": "#db7272",
        "icon": "icons/paladin/retribution.jpg",
        "talents": [
          {
            "id": "deflection",
            "name": "Deflection",
            "max": 5,
            "row": 1,
            "col": 2,
            "description": "Increases your Parry chance by 1%.",
            "rankDescriptions": [
              "Increases your Parry chance by 1%.",
              "Increases your Parry chance by 2%.",
              "Increases your Parry chance by 3%.",
              "Increases your Parry chance by 4%.",
              "Increases your Parry chance by 5%."
            ],
            "type": "Passive",
            "icon": "icons/paladin/deflection.jpg",
            "sourceIcon": "ability_parry"
          },
          {
            "id": "benediction",
            "name": "Benediction",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Reduces the Mana cost of all instant cast spells and abilities by 2%.",
            "rankDescriptions": [
              "Reduces the Mana cost of all instant cast spells and abilities by 2%.",
              "Reduces the Mana cost of all instant cast spells and abilities by 4%.",
              "Reduces the Mana cost of all instant cast spells and abilities by 6%.",
              "Reduces the Mana cost of all instant cast spells and abilities by 8%.",
              "Reduces the Mana cost of all instant cast spells and abilities by 10%."
            ],
            "type": "Passive",
            "icon": "icons/paladin/benediction.jpg",
            "sourceIcon": "spell_frost_windwalkon"
          },
          {
            "id": "improved-judgement",
            "name": "Improved Judgement",
            "max": 2,
            "row": 2,
            "col": 1,
            "description": "Decreases the cooldown of your Judgement ability by 1 sec.",
            "rankDescriptions": [
              "Decreases the cooldown of your Judgement ability by 1 sec.",
              "Decreases the cooldown of your Judgement ability by 2 sec."
            ],
            "type": "Passive",
            "icon": "icons/paladin/improved-judgement.jpg",
            "sourceIcon": "spell_holy_righteousfury"
          },
          {
            "id": "holy-conduit",
            "name": "Holy Conduit",
            "max": 2,
            "row": 2,
            "col": 2,
            "description": "Reduces the mana cost of your Consecration, Holy Wrath, Exorcism, and Hammer of Wrath spells by 20%.",
            "rankDescriptions": [
              "Reduces the mana cost of your Consecration, Holy Wrath, Exorcism, and Hammer of Wrath spells by 20%.",
              "Reduces the mana cost of your Consecration, Holy Wrath, Exorcism, and Hammer of Wrath spells by 40%."
            ],
            "type": "Passive",
            "icon": "icons/paladin/holy-conduit.jpg",
            "sourceIcon": "spell_holy_devineaegis"
          },
          {
            "id": "conviction",
            "name": "Conviction",
            "max": 5,
            "row": 2,
            "col": 3,
            "description": "Improves your chance to get a critical strike with melee attacks by 1%.",
            "rankDescriptions": [
              "Improves your chance to get a critical strike with melee attacks by 1%.",
              "Improves your chance to get a critical strike with melee attacks by 2%.",
              "Improves your chance to get a critical strike with melee attacks by 3%.",
              "Improves your chance to get a critical strike with melee attacks by 4%.",
              "Improves your chance to get a critical strike with melee attacks by 5%."
            ],
            "type": "Passive",
            "icon": "icons/paladin/conviction.jpg",
            "sourceIcon": "spell_holy_retributionaura"
          },
          {
            "id": "vindication",
            "name": "Vindication",
            "max": 3,
            "row": 3,
            "col": 1,
            "description": "Gives your damaging melee attacks a chance to reduce the target’s Attack Power by (1 /- 3 * 6), and increase your Attack Power by 1% for 30 sec.",
            "rankDescriptions": [
              "Gives your damaging melee attacks a chance to reduce the target’s Attack Power by (1 /- 3 * 6), and increase your Attack Power by 1% for 30 sec.",
              "Gives your damaging melee attacks a chance to reduce the target’s Attack Power by (2 /- 3 * 6), and increase your Attack Power by 2% for 30 sec.",
              "Gives your damaging melee attacks a chance to reduce the target’s Attack Power by (3 /- 3 * 6), and increase your Attack Power by 3% for 30 sec."
            ],
            "type": "Passive",
            "icon": "icons/paladin/vindication.jpg",
            "sourceIcon": "spell_holy_vindication"
          },
          {
            "id": "sanctified-judgement",
            "name": "Sanctified Judgement",
            "max": 3,
            "row": 3,
            "col": 2,
            "description": "Gives your Judgement ability a 33% chance to return 20% of the Mana cost of the judged seal.",
            "rankDescriptions": [
              "Gives your Judgement ability a 33% chance to return 20% of the Mana cost of the judged seal.",
              "Gives your Judgement ability a 66% chance to return 40% of the Mana cost of the judged seal.",
              "Gives your Judgement ability a 100% chance to return 60% of the Mana cost of the judged seal."
            ],
            "type": "Passive",
            "icon": "icons/paladin/sanctified-judgement.jpg",
            "sourceIcon": "ability_paladin_judgementblue"
          },
          {
            "id": "seal-of-command",
            "name": "Seal of Command",
            "max": 1,
            "row": 3,
            "col": 3,
            "description": "Gives the Paladin a chance to deal additional Holy damage equal to 70% of normal weapon damage. Only one Seal can be active on the Paladin at any one time. Lasts 30 sec.\n\nUnleashing this Seal’s energy will judge an enemy, instantly causing 69 to 73 Holy damage, 138 to 146 if the target is stunned or incapacitated.",
            "type": "Active",
            "details": [
              "65 Mana",
              "Instant"
            ],
            "icon": "icons/paladin/seal-of-command.jpg",
            "sourceIcon": "ability_warrior_innerrage"
          },
          {
            "id": "pursuit-of-justice",
            "name": "Pursuit of Justice",
            "max": 2,
            "row": 3,
            "col": 4,
            "description": "Increases movement speed and mounted movement speed by 8%. This does not stack with other movement speed increasing effects.",
            "rankDescriptions": [
              "Increases movement speed and mounted movement speed by 8%. This does not stack with other movement speed increasing effects.",
              "Increases movement speed and mounted movement speed by 15%. This does not stack with other movement speed increasing effects."
            ],
            "type": "Passive",
            "icon": "icons/paladin/pursuit-of-justice.jpg",
            "sourceIcon": "spell_holy_persuitofjustice"
          },
          {
            "id": "eye-for-an-eye",
            "name": "Eye for an Eye",
            "max": 2,
            "row": 4,
            "col": 1,
            "description": "All critical strikes against you cause 5% of the damage taken to the attacker as well. The damage caused by Eye for an Eye will not exceed 50% of the Paladin’s total health.",
            "rankDescriptions": [
              "All critical strikes against you cause 5% of the damage taken to the attacker as well. The damage caused by Eye for an Eye will not exceed 50% of the Paladin’s total health.",
              "All critical strikes against you cause 10% of the damage taken to the attacker as well. The damage caused by Eye for an Eye will not exceed 50% of the Paladin’s total health."
            ],
            "type": "Passive",
            "icon": "icons/paladin/eye-for-an-eye.jpg",
            "sourceIcon": "spell_holy_eyeforaneye"
          },
          {
            "id": "sacred-arbiter",
            "name": "Sacred Arbiter",
            "max": 1,
            "row": 4,
            "col": 3,
            "description": "Increases the damage of your Holy Strike ability by 20% and causes it to refresh all Judgement effects on the target.",
            "type": "Passive",
            "icon": "icons/paladin/sacred-arbiter.jpg",
            "sourceIcon": "inv_sword_08"
          },
          {
            "id": "two-handed-weapon-specialization",
            "name": "Two-Handed Weapon Specialization",
            "max": 3,
            "row": 5,
            "col": 1,
            "description": "Increases the damage you deal with two-handed melee weapons by 2%.",
            "rankDescriptions": [
              "Increases the damage you deal with two-handed melee weapons by 2%.",
              "Increases the damage you deal with two-handed melee weapons by 4%.",
              "Increases the damage you deal with two-handed melee weapons by 6%."
            ],
            "type": "Passive",
            "icon": "icons/paladin/two-handed-weapon-specialization.jpg",
            "sourceIcon": "inv_hammer_04"
          },
          {
            "id": "vengeance",
            "name": "Vengeance",
            "max": 3,
            "row": 5,
            "col": 2,
            "description": "Increases your Physical and Holy damage dealt by 1% for 30 sec after landing a non-periodic critical strike. Stacks up to 3 times.",
            "rankDescriptions": [
              "Increases your Physical and Holy damage dealt by 1% for 30 sec after landing a non-periodic critical strike. Stacks up to 3 times.",
              "Increases your Physical and Holy damage dealt by 2% for 30 sec after landing a non-periodic critical strike. Stacks up to 3 times.",
              "Increases your Physical and Holy damage dealt by 3% for 30 sec after landing a non-periodic critical strike. Stacks up to 3 times."
            ],
            "type": "Passive",
            "prerequisite": "sanctified-judgement",
            "icon": "icons/paladin/vengeance.jpg",
            "sourceIcon": "ability_racial_avatar"
          },
          {
            "id": "repentance",
            "name": "Repentance",
            "max": 1,
            "row": 5,
            "col": 3,
            "description": "Puts the enemy target in a state of meditation, incapacitating them for up to 6 sec. Any damage caused will awaken the target. Only works against Humanoids.",
            "type": "Active",
            "details": [
              "60 Mana",
              "20 yd range",
              "Instant",
              "1 min cooldown"
            ],
            "icon": "icons/paladin/repentance.jpg",
            "sourceIcon": "spell_holy_prayerofhealing"
          },
          {
            "id": "champion-of-the-light",
            "name": "Champion of the Light",
            "max": 3,
            "row": 6,
            "col": 2,
            "description": "Increases your spell damage by up to 10% of your Intellect.",
            "rankDescriptions": [
              "Increases your spell damage by up to 10% of your Intellect.",
              "Increases your spell damage by up to 20% of your Intellect.",
              "Increases your spell damage by up to 30% of your Intellect."
            ],
            "type": "Passive",
            "icon": "icons/paladin/champion-of-the-light.jpg",
            "sourceIcon": "ability_paladin_enlightenedjudgements"
          },
          {
            "id": "instrument-of-law",
            "name": "Instrument of Law",
            "max": 2,
            "row": 6,
            "col": 3,
            "description": "Reduces the cast time of your Hammer of Wrath by 0.5 sec, and reduces all threat you generate by 10% while Righteous Fury is not active.",
            "rankDescriptions": [
              "Reduces the cast time of your Hammer of Wrath by 0.5 sec, and reduces all threat you generate by 10% while Righteous Fury is not active.",
              "Reduces the cast time of your Hammer of Wrath by 1.0 sec, and reduces all threat you generate by 20% while Righteous Fury is not active."
            ],
            "type": "Passive",
            "icon": "icons/paladin/instrument-of-law.jpg",
            "sourceIcon": "spell_holy_divinepurpose"
          },
          {
            "id": "twist-of-light",
            "name": "Twist of Light",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Reduces the Mana cost of your Seal spells by 20%, and when you replace your Seal of Command, Seal of Righteousness, Seal of Fury, or Seal of Justice with a different Seal, you gain an Echo of that Seal. Your next melee attack applies the replaced Seal’s effects, consuming the Echo.",
            "type": "Passive",
            "icon": "icons/paladin/twist-of-light.jpg",
            "sourceIcon": "spell_holy_blessedresillience"
          }
        ]
      }
    ]
  },
  "priest": {
    "version": 6,
    "gameClass": "priest",
    "name": "Priest",
    "color": "#ffffff",
    "legacyBuilds": {
      "FF2": [
        [
          "power-in-light",
          5
        ],
        [
          "wand-specialization",
          2
        ],
        [
          "twin-disciplines",
          5
        ],
        [
          "silent-resolve",
          3
        ],
        [
          "holy-precision",
          3
        ],
        [
          "improved-power-word-shield",
          3
        ],
        [
          "martyrdom",
          2
        ],
        [
          "mental-agility",
          3
        ],
        [
          "inner-focus",
          1
        ],
        [
          "meditation",
          3
        ],
        [
          "improved-inner-fire",
          3
        ],
        [
          "mental-strength",
          5
        ],
        [
          "soul-warding",
          1
        ],
        [
          "improved-mana-burn",
          2
        ],
        [
          "penance",
          1
        ],
        [
          "renewed-hope",
          5
        ],
        [
          "divine-aegis",
          3
        ],
        [
          "power-infusion",
          1
        ],
        [
          "twilight-focus",
          3
        ],
        [
          "improved-renew",
          3
        ],
        [
          "holy-specialization",
          5
        ],
        [
          "spell-warding",
          5
        ],
        [
          "divine-fury",
          5
        ],
        [
          "holy-nova",
          1
        ],
        [
          "blessed-recovery",
          3
        ],
        [
          "inspiration",
          3
        ],
        [
          "holy-reach",
          2
        ],
        [
          "improved-healing",
          3
        ],
        [
          "searing-light",
          2
        ],
        [
          "binding-heal",
          1
        ],
        [
          "litany-of-light",
          2
        ],
        [
          "spirit-of-redemption",
          1
        ],
        [
          "spiritual-guidance",
          5
        ],
        [
          "spiritual-healing",
          3
        ],
        [
          "prayer-of-mending",
          1
        ],
        [
          "shadow-focus",
          5
        ],
        [
          "blackout",
          5
        ],
        [
          "spirit-tap",
          5
        ],
        [
          "shadow-affinity",
          3
        ],
        [
          "improved-shadow-word-pain",
          2
        ],
        [
          "shadow-reach",
          2
        ],
        [
          "improved-mind-blast",
          5
        ],
        [
          "improved-psychic-scream",
          2
        ],
        [
          "mind-flay",
          1
        ],
        [
          "improved-mind-flay",
          2
        ],
        [
          "improved-fade",
          2
        ],
        [
          "vampiric-embrace",
          1
        ],
        [
          "shadow-weaving",
          3
        ],
        [
          "silence",
          1
        ],
        [
          "devouring-contagion",
          2
        ],
        [
          "early-demise",
          2
        ],
        [
          "darkness",
          5
        ],
        [
          "shadowform",
          1
        ]
      ]
    },
    "trees": [
      {
        "id": "discipline",
        "name": "Discipline",
        "role": "Discipline",
        "color": "#e5c76b",
        "icon": "icons/priest/discipline.jpg",
        "talents": [
          {
            "id": "power-in-light",
            "name": "Power in Light",
            "max": 5,
            "row": 1,
            "col": 1,
            "description": "Your Smite and Penance spells deal 2% increased damage to targets afflicted with your Holy Fire or Shadow Word: Pain.",
            "rankDescriptions": [
              "Your Smite and Penance spells deal 2% increased damage to targets afflicted with your Holy Fire or Shadow Word: Pain.",
              "Your Smite and Penance spells deal 4% increased damage to targets afflicted with your Holy Fire or Shadow Word: Pain.",
              "Your Smite and Penance spells deal 6% increased damage to targets afflicted with your Holy Fire or Shadow Word: Pain.",
              "Your Smite and Penance spells deal 8% increased damage to targets afflicted with your Holy Fire or Shadow Word: Pain.",
              "Your Smite and Penance spells deal 10% increased damage to targets afflicted with your Holy Fire or Shadow Word: Pain."
            ],
            "type": "Passive",
            "icon": "icons/priest/power-in-light.jpg",
            "sourceIcon": "spell_holy_searinglight"
          },
          {
            "id": "wand-specialization",
            "name": "Wand Specialization",
            "max": 2,
            "row": 1,
            "col": 2,
            "description": "Increases your damage with Wands by 13%.",
            "rankDescriptions": [
              "Increases your damage with Wands by 13%.",
              "Increases your damage with Wands by 25%."
            ],
            "type": "Passive",
            "icon": "icons/priest/wand-specialization.jpg",
            "sourceIcon": "inv_wand_01"
          },
          {
            "id": "twin-disciplines",
            "name": "Twin Disciplines",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Increases the damage and healing of your instant cast spells by 1%.",
            "rankDescriptions": [
              "Increases the damage and healing of your instant cast spells by 1%.",
              "Increases the damage and healing of your instant cast spells by 2%.",
              "Increases the damage and healing of your instant cast spells by 3%.",
              "Increases the damage and healing of your instant cast spells by 4%.",
              "Increases the damage and healing of your instant cast spells by 5%."
            ],
            "type": "Passive",
            "icon": "icons/priest/twin-disciplines.jpg",
            "sourceIcon": "spell_holy_sealofvengeance"
          },
          {
            "id": "silent-resolve",
            "name": "Silent Resolve",
            "max": 3,
            "row": 2,
            "col": 1,
            "description": "Reduces the threat generated by your spells by 10% and reduces the duration of Stun, Fear, and Silence effects inflicted on you by 5%.",
            "rankDescriptions": [
              "Reduces the threat generated by your spells by 10% and reduces the duration of Stun, Fear, and Silence effects inflicted on you by 5%.",
              "Reduces the threat generated by your spells by 20% and reduces the duration of Stun, Fear, and Silence effects inflicted on you by 10%.",
              "Reduces the threat generated by your spells by 30% and reduces the duration of Stun, Fear, and Silence effects inflicted on you by 15%."
            ],
            "type": "Passive",
            "icon": "icons/priest/silent-resolve.jpg",
            "sourceIcon": "spell_nature_manaregentotem"
          },
          {
            "id": "holy-precision",
            "name": "Holy Precision",
            "max": 3,
            "row": 2,
            "col": 2,
            "description": "Improves your chance to hit with Holy spells by 6%.",
            "rankDescriptions": [
              "Improves your chance to hit with Holy spells by 6%.",
              "Improves your chance to hit with Holy spells by 12%.",
              "Improves your chance to hit with Holy spells by 18%."
            ],
            "type": "Passive",
            "icon": "icons/priest/holy-precision.jpg",
            "sourceIcon": "spell_holy_divineillumination"
          },
          {
            "id": "mental-strength",
            "name": "Mental Strength",
            "max": 5,
            "row": 2,
            "col": 3,
            "description": "Increases your total Intellect by 2%.",
            "rankDescriptions": [
              "Increases your total Intellect by 2%.",
              "Increases your total Intellect by 4%.",
              "Increases your total Intellect by 6%.",
              "Increases your total Intellect by 8%.",
              "Increases your total Intellect by 10%."
            ],
            "type": "Passive",
            "icon": "icons/priest/mental-strength.jpg",
            "sourceIcon": "spell_nature_enchantarmor"
          },
          {
            "id": "martyrdom",
            "name": "Martyrdom",
            "max": 2,
            "row": 2,
            "col": 4,
            "description": "Gives you a 50% chance to gain Focused Casting for 6 sec after being the victim of a melee or ranged critical strike. The Focused Casting effect prevents you from losing casting time when taking damage and increases your resistance to Interrupt effects by 20%.",
            "rankDescriptions": [
              "Gives you a 50% chance to gain Focused Casting for 6 sec after being the victim of a melee or ranged critical strike. The Focused Casting effect prevents you from losing casting time when taking damage and increases your resistance to Interrupt effects by 20%.",
              "Gives you a 100% chance to gain Focused Casting for 6 sec after being the victim of a melee or ranged critical strike. The Focused Casting effect prevents you from losing casting time when taking damage and increases your resistance to Interrupt effects by 20%."
            ],
            "type": "Passive",
            "icon": "icons/priest/martyrdom.jpg",
            "sourceIcon": "spell_nature_tranquility"
          },
          {
            "id": "mental-agility",
            "name": "Mental Agility",
            "max": 3,
            "row": 3,
            "col": 1,
            "description": "Reduces the mana cost of your Smite, Holy Fire, and instant cast spells by 3%.",
            "rankDescriptions": [
              "Reduces the mana cost of your Smite, Holy Fire, and instant cast spells by 3%.",
              "Reduces the mana cost of your Smite, Holy Fire, and instant cast spells by 7%.",
              "Reduces the mana cost of your Smite, Holy Fire, and instant cast spells by 10%."
            ],
            "type": "Passive",
            "icon": "icons/priest/mental-agility.jpg",
            "sourceIcon": "ability_hibernation"
          },
          {
            "id": "inner-focus",
            "name": "Inner Focus",
            "max": 1,
            "row": 3,
            "col": 2,
            "description": "When activated, reduces the Mana cost of your next spell by 100% and increases its critical effect chance by 25% if it is a non-periodic spell and capable of a critical effect.",
            "type": "Active",
            "details": [
              "Instant",
              "3 min cooldown"
            ],
            "icon": "icons/priest/inner-focus.jpg",
            "sourceIcon": "spell_frost_windwalkon"
          },
          {
            "id": "improved-power-word-shield",
            "name": "Improved Power Word: Shield",
            "max": 3,
            "row": 3,
            "col": 3,
            "description": "Increases the damage absorbed by your Power Word: Shield by 7%.",
            "rankDescriptions": [
              "Increases the damage absorbed by your Power Word: Shield by 7%.",
              "Increases the damage absorbed by your Power Word: Shield by 14%.",
              "Increases the damage absorbed by your Power Word: Shield by 20%."
            ],
            "type": "Passive",
            "icon": "icons/priest/improved-power-word-shield.jpg",
            "sourceIcon": "spell_holy_powerwordshield"
          },
          {
            "id": "meditation",
            "name": "Meditation",
            "max": 3,
            "row": 3,
            "col": 4,
            "description": "Allows 17% of your Mana regeneration to continue while casting.",
            "rankDescriptions": [
              "Allows 17% of your Mana regeneration to continue while casting.",
              "Allows 33% of your Mana regeneration to continue while casting.",
              "Allows 50% of your Mana regeneration to continue while casting."
            ],
            "type": "Passive",
            "icon": "icons/priest/meditation.jpg",
            "sourceIcon": "spell_nature_sleep"
          },
          {
            "id": "improved-inner-fire",
            "name": "Improved Inner Fire",
            "max": 3,
            "row": 4,
            "col": 1,
            "description": "Increases the Armor bonus of your Inner Fire spell by 15% and increases its total charges by 4.",
            "rankDescriptions": [
              "Increases the Armor bonus of your Inner Fire spell by 15% and increases its total charges by 4.",
              "Increases the Armor bonus of your Inner Fire spell by 30% and increases its total charges by 8.",
              "Increases the Armor bonus of your Inner Fire spell by 45% and increases its total charges by 12."
            ],
            "type": "Passive",
            "icon": "icons/priest/improved-inner-fire.jpg",
            "sourceIcon": "spell_holy_innerfire"
          },
          {
            "id": "improved-mana-burn",
            "name": "Improved Mana Burn",
            "max": 2,
            "row": 4,
            "col": 2,
            "description": "Reduces the casting time of your Mana Burn spell by 0.5 sec.",
            "rankDescriptions": [
              "Reduces the casting time of your Mana Burn spell by 0.5 sec.",
              "Reduces the casting time of your Mana Burn spell by 1.0 sec."
            ],
            "type": "Passive",
            "icon": "icons/priest/improved-mana-burn.jpg",
            "sourceIcon": "spell_shadow_manaburn"
          },
          {
            "id": "soul-warding",
            "name": "Soul Warding",
            "max": 1,
            "row": 4,
            "col": 3,
            "description": "Reduces the cooldown on your Power Word: Shield spell by 4 sec and reduces its mana cost by 15%.",
            "type": "Passive",
            "prerequisite": "improved-power-word-shield",
            "icon": "icons/priest/soul-warding.jpg",
            "sourceIcon": "spell_holy_pureofheart"
          },
          {
            "id": "penance",
            "name": "Penance",
            "max": 1,
            "row": 5,
            "col": 2,
            "description": "Launches a volley of holy light at the target, causing 45 Holy damage to an enemy, or 134 healing to an ally, instantly and every 1 sec for 2 sec.",
            "type": "Active",
            "details": [
              "150 Mana",
              "36 yd range",
              "Instant",
              "12 sec cooldown"
            ],
            "icon": "icons/priest/penance.jpg",
            "sourceIcon": "spell_holy_penance"
          },
          {
            "id": "renewed-hope",
            "name": "Renewed Hope",
            "max": 5,
            "row": 5,
            "col": 3,
            "description": "Your heals from Flash Heal, Binding Heal, Lesser Heal, Heal, Greater Heal, and Penance gain 2% increased critical strike chance when cast on targets with Weakened Soul, and reduce the remaining duration of Weakened Soul on their target by 1 sec.",
            "rankDescriptions": [
              "Your heals from Flash Heal, Binding Heal, Lesser Heal, Heal, Greater Heal, and Penance gain 2% increased critical strike chance when cast on targets with Weakened Soul, and reduce the remaining duration of Weakened Soul on their target by 1 sec.",
              "Your heals from Flash Heal, Binding Heal, Lesser Heal, Heal, Greater Heal, and Penance gain 4% increased critical strike chance when cast on targets with Weakened Soul, and reduce the remaining duration of Weakened Soul on their target by 2 sec.",
              "Your heals from Flash Heal, Binding Heal, Lesser Heal, Heal, Greater Heal, and Penance gain 6% increased critical strike chance when cast on targets with Weakened Soul, and reduce the remaining duration of Weakened Soul on their target by 3 sec.",
              "Your heals from Flash Heal, Binding Heal, Lesser Heal, Heal, Greater Heal, and Penance gain 8% increased critical strike chance when cast on targets with Weakened Soul, and reduce the remaining duration of Weakened Soul on their target by 4 sec.",
              "Your heals from Flash Heal, Binding Heal, Lesser Heal, Heal, Greater Heal, and Penance gain 10% increased critical strike chance when cast on targets with Weakened Soul, and reduce the remaining duration of Weakened Soul on their target by 5 sec."
            ],
            "type": "Passive",
            "prerequisite": "soul-warding",
            "icon": "icons/priest/renewed-hope.jpg",
            "sourceIcon": "spell_holy_holyprotection"
          },
          {
            "id": "divine-aegis",
            "name": "Divine Aegis",
            "max": 3,
            "row": 6,
            "col": 3,
            "description": "Your non-periodic critical heals create a protective shield on the target, absorbing 5% of the amount healed. Shields up to (20 * 60) damage and lasts 12 sec.",
            "rankDescriptions": [
              "Your non-periodic critical heals create a protective shield on the target, absorbing 5% of the amount healed. Shields up to (20 * 60) damage and lasts 12 sec.",
              "Your non-periodic critical heals create a protective shield on the target, absorbing 10% of the amount healed. Shields up to (20 * 60) damage and lasts 12 sec.",
              "Your non-periodic critical heals create a protective shield on the target, absorbing 15% of the amount healed. Shields up to (20 * 60) damage and lasts 12 sec."
            ],
            "type": "Passive",
            "icon": "icons/priest/divine-aegis.jpg",
            "sourceIcon": "spell_holy_devineaegis"
          },
          {
            "id": "power-infusion",
            "name": "Power Infusion",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Infuses the target with power, increasing their spell damage and healing done by 20% for 15 sec.",
            "type": "Active",
            "details": [
              "20% of base Mana",
              "30 yd range",
              "Instant",
              "3 min cooldown"
            ],
            "prerequisite": "penance",
            "icon": "icons/priest/power-infusion.jpg",
            "sourceIcon": "spell_holy_powerinfusion"
          }
        ]
      },
      {
        "id": "holy",
        "name": "Holy",
        "role": "Holy",
        "color": "#e8c96b",
        "icon": "icons/priest/holy.jpg",
        "talents": [
          {
            "id": "twilight-focus",
            "name": "Twilight Focus",
            "max": 3,
            "row": 1,
            "col": 1,
            "description": "Gives you a 23% chance to avoid interruption caused by damage while casting any spell.",
            "rankDescriptions": [
              "Gives you a 23% chance to avoid interruption caused by damage while casting any spell.",
              "Gives you a 47% chance to avoid interruption caused by damage while casting any spell.",
              "Gives you a 70% chance to avoid interruption caused by damage while casting any spell."
            ],
            "type": "Passive",
            "icon": "icons/priest/twilight-focus.jpg",
            "sourceIcon": "spell_holy_healingfocus"
          },
          {
            "id": "improved-renew",
            "name": "Improved Renew",
            "max": 3,
            "row": 1,
            "col": 2,
            "description": "Increases the amount healed by your Renew spell by 5%.",
            "rankDescriptions": [
              "Increases the amount healed by your Renew spell by 5%.",
              "Increases the amount healed by your Renew spell by 10%.",
              "Increases the amount healed by your Renew spell by 15%."
            ],
            "type": "Passive",
            "icon": "icons/priest/improved-renew.jpg",
            "sourceIcon": "spell_holy_renew"
          },
          {
            "id": "holy-specialization",
            "name": "Holy Specialization",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Increases the critical effect chance of your Holy spells by 1%.",
            "rankDescriptions": [
              "Increases the critical effect chance of your Holy spells by 1%.",
              "Increases the critical effect chance of your Holy spells by 2%.",
              "Increases the critical effect chance of your Holy spells by 3%.",
              "Increases the critical effect chance of your Holy spells by 4%.",
              "Increases the critical effect chance of your Holy spells by 5%."
            ],
            "type": "Passive",
            "icon": "icons/priest/holy-specialization.jpg",
            "sourceIcon": "spell_holy_sealofsalvation"
          },
          {
            "id": "spell-warding",
            "name": "Spell Warding",
            "max": 5,
            "row": 2,
            "col": 2,
            "description": "Reduces all spell damage taken by 2%.",
            "rankDescriptions": [
              "Reduces all spell damage taken by 2%.",
              "Reduces all spell damage taken by 4%.",
              "Reduces all spell damage taken by 6%.",
              "Reduces all spell damage taken by 8%.",
              "Reduces all spell damage taken by 10%."
            ],
            "type": "Passive",
            "icon": "icons/priest/spell-warding.jpg",
            "sourceIcon": "spell_holy_spellwarding"
          },
          {
            "id": "divine-fury",
            "name": "Divine Fury",
            "max": 5,
            "row": 2,
            "col": 3,
            "description": "Reduces the casting time of your Smite, Holy Fire, Heal, and Greater Heal spells by 0.1 sec.",
            "rankDescriptions": [
              "Reduces the casting time of your Smite, Holy Fire, Heal, and Greater Heal spells by 0.1 sec.",
              "Reduces the casting time of your Smite, Holy Fire, Heal, and Greater Heal spells by 0.2 sec.",
              "Reduces the casting time of your Smite, Holy Fire, Heal, and Greater Heal spells by 0.3 sec.",
              "Reduces the casting time of your Smite, Holy Fire, Heal, and Greater Heal spells by 0.4 sec.",
              "Reduces the casting time of your Smite, Holy Fire, Heal, and Greater Heal spells by 0.5 sec."
            ],
            "type": "Passive",
            "icon": "icons/priest/divine-fury.jpg",
            "sourceIcon": "spell_holy_sealofwrath"
          },
          {
            "id": "holy-nova",
            "name": "Holy Nova",
            "max": 1,
            "row": 3,
            "col": 1,
            "description": "Causes an explosion of holy light around the caster, causing 26 to 30 Holy damage to all enemy targets within 10 yards and healing all party members within 10 yards for 50 to 57. These effects cause no threat.",
            "type": "Active",
            "details": [
              "185 Mana",
              "Instant"
            ],
            "icon": "icons/priest/holy-nova.jpg",
            "sourceIcon": "spell_holy_holynova"
          },
          {
            "id": "blessed-recovery",
            "name": "Blessed Recovery",
            "max": 3,
            "row": 3,
            "col": 2,
            "description": "After being struck by a melee or ranged critical hit, or suffering more than 30% of your maximum Health from a single attack, heal 8% of the damage taken over 6 sec. Refreshing this effect carries over any remaining healing.",
            "rankDescriptions": [
              "After being struck by a melee or ranged critical hit, or suffering more than 30% of your maximum Health from a single attack, heal 8% of the damage taken over 6 sec. Refreshing this effect carries over any remaining healing.",
              "After being struck by a melee or ranged critical hit, or suffering more than 30% of your maximum Health from a single attack, heal 17% of the damage taken over 6 sec. Refreshing this effect carries over any remaining healing.",
              "After being struck by a melee or ranged critical hit, or suffering more than 30% of your maximum Health from a single attack, heal 25% of the damage taken over 6 sec. Refreshing this effect carries over any remaining healing."
            ],
            "type": "Passive",
            "icon": "icons/priest/blessed-recovery.jpg",
            "sourceIcon": "spell_holy_blessedrecovery"
          },
          {
            "id": "inspiration",
            "name": "Inspiration",
            "max": 3,
            "row": 3,
            "col": 4,
            "description": "Your non-periodic critical heals increase your target’s Armor by 8% for 15 sec.",
            "rankDescriptions": [
              "Your non-periodic critical heals increase your target’s Armor by 8% for 15 sec.",
              "Your non-periodic critical heals increase your target’s Armor by 17% for 15 sec.",
              "Your non-periodic critical heals increase your target’s Armor by 25% for 15 sec."
            ],
            "type": "Passive",
            "icon": "icons/priest/inspiration.jpg",
            "sourceIcon": "spell_holy_layonhands"
          },
          {
            "id": "holy-reach",
            "name": "Holy Reach",
            "max": 2,
            "row": 4,
            "col": 1,
            "description": "Increases the range of your Smite and Holy Fire spells and the radius of your Prayer of Healing and Holy Nova spells by 10%.",
            "rankDescriptions": [
              "Increases the range of your Smite and Holy Fire spells and the radius of your Prayer of Healing and Holy Nova spells by 10%.",
              "Increases the range of your Smite and Holy Fire spells and the radius of your Prayer of Healing and Holy Nova spells by 20%."
            ],
            "type": "Passive",
            "icon": "icons/priest/holy-reach.jpg",
            "sourceIcon": "spell_holy_purify"
          },
          {
            "id": "improved-healing",
            "name": "Improved Healing",
            "max": 3,
            "row": 4,
            "col": 2,
            "description": "Reduces the Mana cost of your Lesser Heal, Heal, Greater Heal, Penance, and Prayer of Mending spells by 5%.",
            "rankDescriptions": [
              "Reduces the Mana cost of your Lesser Heal, Heal, Greater Heal, Penance, and Prayer of Mending spells by 5%.",
              "Reduces the Mana cost of your Lesser Heal, Heal, Greater Heal, Penance, and Prayer of Mending spells by 10%.",
              "Reduces the Mana cost of your Lesser Heal, Heal, Greater Heal, Penance, and Prayer of Mending spells by 15%."
            ],
            "type": "Passive",
            "icon": "icons/priest/improved-healing.jpg",
            "sourceIcon": "spell_holy_heal02"
          },
          {
            "id": "searing-light",
            "name": "Searing Light",
            "max": 2,
            "row": 4,
            "col": 3,
            "description": "Increases your Holy damage done by 2%, and gives a 5% chance each time your Holy Fire spell deals periodic damage for your next Holy Nova to cost no Mana.",
            "rankDescriptions": [
              "Increases your Holy damage done by 2%, and gives a 5% chance each time your Holy Fire spell deals periodic damage for your next Holy Nova to cost no Mana.",
              "Increases your Holy damage done by 5%, and gives a 10% chance each time your Holy Fire spell deals periodic damage for your next Holy Nova to cost no Mana."
            ],
            "type": "Passive",
            "prerequisite": "divine-fury",
            "icon": "icons/priest/searing-light.jpg",
            "sourceIcon": "spell_holy_searinglightpriest"
          },
          {
            "id": "binding-heal",
            "name": "Binding Heal",
            "max": 1,
            "row": 4,
            "col": 4,
            "description": "Heals a friendly target and the caster for 236 to 284. Low threat.",
            "type": "Active",
            "details": [
              "155 Mana",
              "40 yd range",
              "1.5 sec cast"
            ],
            "icon": "icons/priest/binding-heal.jpg",
            "sourceIcon": "spell_holy_blindingheal"
          },
          {
            "id": "litany-of-light",
            "name": "Litany of Light",
            "max": 2,
            "row": 5,
            "col": 1,
            "description": "When you cast a healing spell, gain Mana equal to 5% of the base cost of the spell if your previous heal was a different spell.",
            "rankDescriptions": [
              "When you cast a healing spell, gain Mana equal to 5% of the base cost of the spell if your previous heal was a different spell.",
              "When you cast a healing spell, gain Mana equal to 10% of the base cost of the spell if your previous heal was a different spell."
            ],
            "type": "Passive",
            "icon": "icons/priest/litany-of-light.jpg",
            "sourceIcon": "inv_scroll_07"
          },
          {
            "id": "spirit-of-redemption",
            "name": "Spirit of Redemption",
            "max": 1,
            "row": 5,
            "col": 2,
            "description": "Upon death, the priest becomes the Spirit of Redemption for 15 sec. The Spirit of Redemption cannot move, attack, be attacked or targeted by any spells or effects. While in this form the priest can cast any healing spell free of cost. When the effect ends, the priest dies.",
            "type": "Passive",
            "icon": "icons/priest/spirit-of-redemption.jpg",
            "sourceIcon": "inv_enchant_essenceeternallarge"
          },
          {
            "id": "spiritual-guidance",
            "name": "Spiritual Guidance",
            "max": 5,
            "row": 5,
            "col": 3,
            "description": "Increases your spell healing by up to 5% of your total Spirit and your spell damage by up to 1% of your total Spirit.",
            "rankDescriptions": [
              "Increases your spell healing by up to 5% of your total Spirit and your spell damage by up to 1% of your total Spirit.",
              "Increases your spell healing by up to 10% of your total Spirit and your spell damage by up to 3% of your total Spirit.",
              "Increases your spell healing by up to 15% of your total Spirit and your spell damage by up to 5% of your total Spirit.",
              "Increases your spell healing by up to 20% of your total Spirit and your spell damage by up to 6% of your total Spirit.",
              "Increases your spell healing by up to 25% of your total Spirit and your spell damage by up to 8% of your total Spirit."
            ],
            "type": "Passive",
            "icon": "icons/priest/spiritual-guidance.jpg",
            "sourceIcon": "spell_holy_spiritualguidence"
          },
          {
            "id": "spiritual-healing",
            "name": "Spiritual Healing",
            "max": 3,
            "row": 6,
            "col": 3,
            "description": "Increases the amount healed by your spells by 3%.",
            "rankDescriptions": [
              "Increases the amount healed by your spells by 3%.",
              "Increases the amount healed by your spells by 7%.",
              "Increases the amount healed by your spells by 10%."
            ],
            "type": "Passive",
            "icon": "icons/priest/spiritual-healing.jpg",
            "sourceIcon": "spell_nature_moonglow"
          },
          {
            "id": "prayer-of-mending",
            "name": "Prayer of Mending",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Places a spell on the target that heals them for [(172 + (Healing * 0.42899999)) * (1 * 1)] the next time they take damage or receive non-periodic healing. When the heal occurs, Prayer of Mending jumps to a party or raid member within 20 yards. Jumps up to 5 times and lasts 30 sec after each jump. This spell can only be placed on one target at a time per caster.",
            "type": "Active",
            "details": [
              "210 Mana",
              "40 yd range",
              "Instant",
              "10 sec cooldown"
            ],
            "prerequisite": "spirit-of-redemption",
            "icon": "icons/priest/prayer-of-mending.jpg",
            "sourceIcon": "spell_holy_prayerofmendingtga"
          }
        ]
      },
      {
        "id": "shadow-magic",
        "name": "Shadow Magic",
        "role": "Shadow Magic",
        "color": "#9a75c4",
        "icon": "icons/priest/shadow-magic.jpg",
        "talents": [
          {
            "id": "shadow-focus",
            "name": "Shadow Focus",
            "max": 5,
            "row": 1,
            "col": 1,
            "description": "Improves your chance to hit with Shadow spells by 1%.",
            "rankDescriptions": [
              "Improves your chance to hit with Shadow spells by 1%.",
              "Improves your chance to hit with Shadow spells by 2%.",
              "Improves your chance to hit with Shadow spells by 3%.",
              "Improves your chance to hit with Shadow spells by 4%.",
              "Improves your chance to hit with Shadow spells by 5%."
            ],
            "type": "Passive",
            "icon": "icons/priest/shadow-focus.jpg",
            "sourceIcon": "spell_shadow_burningspirit"
          },
          {
            "id": "blackout",
            "name": "Blackout",
            "max": 5,
            "row": 1,
            "col": 2,
            "description": "Gives your Shadow damage spells a 2% chance to stun the target for 3 sec.",
            "rankDescriptions": [
              "Gives your Shadow damage spells a 2% chance to stun the target for 3 sec.",
              "Gives your Shadow damage spells a 4% chance to stun the target for 3 sec.",
              "Gives your Shadow damage spells a 6% chance to stun the target for 3 sec.",
              "Gives your Shadow damage spells a 8% chance to stun the target for 3 sec.",
              "Gives your Shadow damage spells a 10% chance to stun the target for 3 sec."
            ],
            "type": "Passive",
            "icon": "icons/priest/blackout.jpg",
            "sourceIcon": "spell_shadow_gathershadows"
          },
          {
            "id": "spirit-tap",
            "name": "Spirit Tap",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Gives you a 20% chance to increase your Spirit by 100% for 15 sec after killing a non-trivial target or when an enemy afflicted by your Vampiric Embrace dies. For the duration, 50% of your Mana regeneration will continue while casting.",
            "rankDescriptions": [
              "Gives you a 20% chance to increase your Spirit by 100% for 15 sec after killing a non-trivial target or when an enemy afflicted by your Vampiric Embrace dies. For the duration, 50% of your Mana regeneration will continue while casting.",
              "Gives you a 40% chance to increase your Spirit by 100% for 15 sec after killing a non-trivial target or when an enemy afflicted by your Vampiric Embrace dies. For the duration, 50% of your Mana regeneration will continue while casting.",
              "Gives you a 60% chance to increase your Spirit by 100% for 15 sec after killing a non-trivial target or when an enemy afflicted by your Vampiric Embrace dies. For the duration, 50% of your Mana regeneration will continue while casting.",
              "Gives you a 80% chance to increase your Spirit by 100% for 15 sec after killing a non-trivial target or when an enemy afflicted by your Vampiric Embrace dies. For the duration, 50% of your Mana regeneration will continue while casting.",
              "Gives you a 100% chance to increase your Spirit by 100% for 15 sec after killing a non-trivial target or when an enemy afflicted by your Vampiric Embrace dies. For the duration, 50% of your Mana regeneration will continue while casting."
            ],
            "type": "Passive",
            "icon": "icons/priest/spirit-tap.jpg",
            "sourceIcon": "spell_shadow_requiem"
          },
          {
            "id": "improved-mind-blast",
            "name": "Improved Mind Blast",
            "max": 5,
            "row": 2,
            "col": 1,
            "description": "Reduces the cooldown of your Mind Blast spell by 0.5 sec.",
            "rankDescriptions": [
              "Reduces the cooldown of your Mind Blast spell by 0.5 sec.",
              "Reduces the cooldown of your Mind Blast spell by 1 sec.",
              "Reduces the cooldown of your Mind Blast spell by 1.5 sec.",
              "Reduces the cooldown of your Mind Blast spell by 2 sec.",
              "Reduces the cooldown of your Mind Blast spell by 2.5 sec."
            ],
            "type": "Passive",
            "icon": "icons/priest/improved-mind-blast.jpg",
            "sourceIcon": "spell_shadow_unholyfrenzy"
          },
          {
            "id": "improved-shadow-word-pain",
            "name": "Improved Shadow Word: Pain",
            "max": 2,
            "row": 2,
            "col": 3,
            "description": "Increases the duration of your Shadow Word: Pain spell by 3 sec.",
            "rankDescriptions": [
              "Increases the duration of your Shadow Word: Pain spell by 3 sec.",
              "Increases the duration of your Shadow Word: Pain spell by 6 sec."
            ],
            "type": "Passive",
            "icon": "icons/priest/improved-shadow-word-pain.jpg",
            "sourceIcon": "spell_shadow_shadowwordpain"
          },
          {
            "id": "shadow-reach",
            "name": "Shadow Reach",
            "max": 2,
            "row": 2,
            "col": 4,
            "description": "Increases the range of your offensive Shadow spells by 10%.",
            "rankDescriptions": [
              "Increases the range of your offensive Shadow spells by 10%.",
              "Increases the range of your offensive Shadow spells by 20%."
            ],
            "type": "Passive",
            "icon": "icons/priest/shadow-reach.jpg",
            "sourceIcon": "spell_shadow_chilltouch"
          },
          {
            "id": "improved-psychic-scream",
            "name": "Improved Psychic Scream",
            "max": 2,
            "row": 3,
            "col": 2,
            "description": "Reduces the cooldown of your Psychic Scream spell by 2 sec.",
            "rankDescriptions": [
              "Reduces the cooldown of your Psychic Scream spell by 2 sec.",
              "Reduces the cooldown of your Psychic Scream spell by 4 sec."
            ],
            "type": "Passive",
            "prerequisite": "blackout",
            "icon": "icons/priest/improved-psychic-scream.jpg",
            "sourceIcon": "spell_shadow_psychicscream"
          },
          {
            "id": "mind-flay",
            "name": "Mind Flay",
            "max": 1,
            "row": 3,
            "col": 3,
            "description": "Assault the target’s mind with Shadow energy, causing 63 Shadow damage over 3 sec and slowing their movement speed by 50%.",
            "type": "Active",
            "details": [
              "45 Mana",
              "20 yd range",
              "Instant"
            ],
            "icon": "icons/priest/mind-flay.jpg",
            "sourceIcon": "spell_shadow_siphonmana"
          },
          {
            "id": "improved-mind-flay",
            "name": "Improved Mind Flay",
            "max": 2,
            "row": 3,
            "col": 4,
            "description": "Each instance of damage of Mind Flay deals 10% more damage than its previous instance of damage.",
            "rankDescriptions": [
              "Each instance of damage of Mind Flay deals 10% more damage than its previous instance of damage.",
              "Each instance of damage of Mind Flay deals 20% more damage than its previous instance of damage."
            ],
            "type": "Passive",
            "prerequisite": "mind-flay",
            "icon": "icons/priest/improved-mind-flay.jpg",
            "sourceIcon": "spell_shadow_soulleech_2"
          },
          {
            "id": "dark-inspiration",
            "name": "Dark Inspiration",
            "max": 5,
            "row": 4,
            "col": 1,
            "description": "Your Mind Blast and fully channeled Mind Flay causes Dark Inspiration, increasing yours and your party’s Spirit by 3% for 10 sec.",
            "type": "Passive",
            "sourceIcon": "spell_warlock_demonsoul",
            "rankDescriptions": [
              "Your Mind Blast and fully channeled Mind Flay causes Dark Inspiration, increasing yours and your party’s Spirit by 3% for 10 sec.",
              "Your Mind Blast and fully channeled Mind Flay causes Dark Inspiration, increasing yours and your party’s Spirit by 6% for 10 sec.",
              "Your Mind Blast and fully channeled Mind Flay causes Dark Inspiration, increasing yours and your party’s Spirit by 9% for 10 sec.",
              "Your Mind Blast and fully channeled Mind Flay causes Dark Inspiration, increasing yours and your party’s Spirit by 12% for 10 sec.",
              "Your Mind Blast and fully channeled Mind Flay causes Dark Inspiration, increasing yours and your party’s Spirit by 15% for 10 sec."
            ]
          },
          {
            "id": "vampiric-embrace",
            "name": "Vampiric Embrace",
            "max": 1,
            "row": 4,
            "col": 2,
            "description": "Afflicts your target with Shadow energy that causes all party members to be healed for 20% of any Shadow spell damage you deal for 30 sec.",
            "type": "Active",
            "details": [
              "40 Mana",
              "30 yd range",
              "Instant",
              "30 sec cooldown"
            ],
            "icon": "icons/priest/vampiric-embrace.jpg",
            "sourceIcon": "spell_shadow_unsummonbuilding"
          },
          {
            "id": "shadow-weaving",
            "name": "Shadow Weaving",
            "max": 3,
            "row": 4,
            "col": 3,
            "description": "Your Shadow damage spells have a 33% chance to increase the Shadow damage the target takes from you by 2% for 15 sec, stacking up to 5 times.",
            "rankDescriptions": [
              "Your Shadow damage spells have a 33% chance to increase the Shadow damage the target takes from you by 2% for 15 sec, stacking up to 5 times.",
              "Your Shadow damage spells have a 67% chance to increase the Shadow damage the target takes from you by 2% for 15 sec, stacking up to 5 times.",
              "Your Shadow damage spells have a 100% chance to increase the Shadow damage the target takes from you by 2% for 15 sec, stacking up to 5 times."
            ],
            "type": "Passive",
            "icon": "icons/priest/shadow-weaving.jpg",
            "sourceIcon": "spell_shadow_blackplague"
          },
          {
            "id": "silence",
            "name": "Silence",
            "max": 1,
            "row": 5,
            "col": 1,
            "description": "Silences the target, preventing them from casting spells for 5 sec and interrupting their spellcasts for 3 sec.",
            "type": "Active",
            "details": [
              "225 Mana",
              "20 yd range",
              "Instant",
              "45 sec cooldown"
            ],
            "icon": "icons/priest/silence.jpg",
            "sourceIcon": "spell_shadow_impphaseshift"
          },
          {
            "id": "devouring-contagion",
            "name": "Devouring Contagion",
            "max": 2,
            "row": 5,
            "col": 3,
            "description": "Reduces the mana cost of your Devouring Plague by 25%.\n\nTargets that die while Devouring Plague is active spreads it, jumping to 2 nearby enemies within 5 yds for the remaining duration.",
            "rankDescriptions": [
              "Reduces the mana cost of your Devouring Plague by 25%.\n\nTargets that die while Devouring Plague is active spreads it, jumping to 2 nearby enemies within 5 yds for the remaining duration.",
              "Reduces the mana cost of your Devouring Plague by 50%.\n\nTargets that die while Devouring Plague is active spreads it, jumping to 2 nearby enemies within 10 yds for the remaining duration."
            ],
            "type": "Passive",
            "icon": "icons/priest/devouring-contagion.jpg",
            "sourceIcon": "spell_shadow_devouringplague."
          },
          {
            "id": "early-demise",
            "name": "Early Demise",
            "max": 2,
            "row": 6,
            "col": 1,
            "description": "Increases Shadow Word: Death’s critical strike chance on targets at or below 20% health by 15%.",
            "rankDescriptions": [
              "Increases Shadow Word: Death’s critical strike chance on targets at or below 20% health by 15%.",
              "Increases Shadow Word: Death’s critical strike chance on targets at or below 20% health by 30%."
            ],
            "type": "Passive",
            "icon": "icons/priest/early-demise.jpg",
            "sourceIcon": "spell_shadow_demonicfortitude"
          },
          {
            "id": "darkness",
            "name": "Darkness",
            "max": 5,
            "row": 6,
            "col": 3,
            "description": "Increases your Shadow damage done by 2%.",
            "rankDescriptions": [
              "Increases your Shadow damage done by 2%.",
              "Increases your Shadow damage done by 4%.",
              "Increases your Shadow damage done by 6%.",
              "Increases your Shadow damage done by 8%.",
              "Increases your Shadow damage done by 10%."
            ],
            "type": "Passive",
            "icon": "icons/priest/darkness.jpg",
            "sourceIcon": "spell_shadow_twilight"
          },
          {
            "id": "shadowform",
            "name": "Shadowform",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Assume Shadowform, increasing your Shadow damage by 10%, reducing the Mana cost of all Shadow spells by 50%, increasing the critical strike damage bonus of your Shadow spells by 100%, and reducing Physical damage taken by you by 15%. However, you may not cast healing spells while in this form.",
            "type": "Active",
            "details": [
              "40% of base Mana",
              "Instant",
              "1 sec cooldown"
            ],
            "prerequisite": "vampiric-embrace",
            "icon": "icons/priest/shadowform.jpg",
            "sourceIcon": "spell_shadow_shadowform"
          }
        ]
      }
    ]
  },
  "rogue": {
    "version": 6,
    "gameClass": "rogue",
    "name": "Rogue",
    "color": "#fff569",
    "legacyBuilds": {
      "FF2": [
        [
          "improved-gouge",
          3
        ],
        [
          "remorseless-attacks",
          2
        ],
        [
          "malice",
          5
        ],
        [
          "ruthlessness",
          3
        ],
        [
          "murder",
          2
        ],
        [
          "improved-slice-and-dice",
          3
        ],
        [
          "relentless-strikes",
          1
        ],
        [
          "improved-expose-armor",
          2
        ],
        [
          "lethality",
          5
        ],
        [
          "vile-poisons",
          5
        ],
        [
          "cold-blood",
          1
        ],
        [
          "improved-poisons",
          5
        ],
        [
          "vigor",
          2
        ],
        [
          "mutilate",
          1
        ],
        [
          "improved-kidney-shot",
          2
        ],
        [
          "seal-fate",
          5
        ],
        [
          "venom",
          1
        ],
        [
          "improved-eviscerate",
          3
        ],
        [
          "improved-sinister-strike",
          2
        ],
        [
          "lightning-reflexes",
          5
        ],
        [
          "puncturing-wounds",
          3
        ],
        [
          "deflection",
          3
        ],
        [
          "precision",
          3
        ],
        [
          "endurance",
          2
        ],
        [
          "riposte",
          1
        ],
        [
          "improved-sprint",
          2
        ],
        [
          "improved-kick",
          2
        ],
        [
          "flawless-execution",
          1
        ],
        [
          "dual-wield-specialization",
          5
        ],
        [
          "blade-flurry",
          1
        ],
        [
          "hack-and-slash",
          5
        ],
        [
          "weapon-expertise",
          2
        ],
        [
          "aggression",
          3
        ],
        [
          "adrenaline-rush",
          1
        ],
        [
          "camouflage",
          5
        ],
        [
          "master-of-deception",
          3
        ],
        [
          "opportunity",
          2
        ],
        [
          "setup",
          3
        ],
        [
          "elusiveness",
          2
        ],
        [
          "dirty-tricks",
          2
        ],
        [
          "improved-ambush",
          3
        ],
        [
          "initiative",
          3
        ],
        [
          "ghostly-strike",
          1
        ],
        [
          "improved-distract",
          2
        ],
        [
          "heightened-senses",
          2
        ],
        [
          "premeditation",
          1
        ],
        [
          "serrated-blades",
          3
        ],
        [
          "dirty-deeds",
          2
        ],
        [
          "preparation",
          1
        ],
        [
          "hemorrhage",
          1
        ],
        [
          "quietus",
          5
        ],
        [
          "cutthroat",
          5
        ],
        [
          "thousand-cuts",
          1
        ]
      ]
    },
    "trees": [
      {
        "id": "assassination",
        "name": "Assassination",
        "role": "Assassination",
        "color": "#c8bb57",
        "icon": "icons/rogue/assassination.jpg",
        "talents": [
          {
            "id": "improved-gouge",
            "name": "Improved Gouge",
            "max": 3,
            "row": 1,
            "col": 1,
            "description": "Increases the duration of your Gouge ability by 0.5 sec.",
            "rankDescriptions": [
              "Increases the duration of your Gouge ability by 0.5 sec.",
              "Increases the duration of your Gouge ability by 1 sec.",
              "Increases the duration of your Gouge ability by 1.5 sec."
            ],
            "type": "Passive",
            "icon": "icons/rogue/improved-gouge.jpg",
            "sourceIcon": "ability_gouge"
          },
          {
            "id": "remorseless-attacks",
            "name": "Remorseless Attacks",
            "max": 2,
            "row": 1,
            "col": 2,
            "description": "After killing a non-trivial enemy, gives you a 20% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, Mutilate, or Ghostly Strike. Lasts 20 sec.",
            "rankDescriptions": [
              "After killing a non-trivial enemy, gives you a 20% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, Mutilate, or Ghostly Strike. Lasts 20 sec.",
              "After killing a non-trivial enemy, gives you a 40% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, Mutilate, or Ghostly Strike. Lasts 20 sec."
            ],
            "type": "Passive",
            "icon": "icons/rogue/remorseless-attacks.jpg",
            "sourceIcon": "ability_fiegndead"
          },
          {
            "id": "malice",
            "name": "Malice",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Increases your critical strike chance with all attacks and Poisons by 1%.",
            "rankDescriptions": [
              "Increases your critical strike chance with all attacks and Poisons by 1%.",
              "Increases your critical strike chance with all attacks and Poisons by 2%.",
              "Increases your critical strike chance with all attacks and Poisons by 3%.",
              "Increases your critical strike chance with all attacks and Poisons by 4%.",
              "Increases your critical strike chance with all attacks and Poisons by 5%."
            ],
            "type": "Passive",
            "icon": "icons/rogue/malice.jpg",
            "sourceIcon": "ability_racial_bloodrage"
          },
          {
            "id": "ruthlessness",
            "name": "Ruthlessness",
            "max": 3,
            "row": 2,
            "col": 1,
            "description": "Gives your finishing moves a 20% chance to add a Combo Point to your target.",
            "rankDescriptions": [
              "Gives your finishing moves a 20% chance to add a Combo Point to your target.",
              "Gives your finishing moves a 40% chance to add a Combo Point to your target.",
              "Gives your finishing moves a 60% chance to add a Combo Point to your target."
            ],
            "type": "Passive",
            "icon": "icons/rogue/ruthlessness.jpg",
            "sourceIcon": "ability_druid_disembowel"
          },
          {
            "id": "murder",
            "name": "Murder",
            "max": 2,
            "row": 2,
            "col": 2,
            "description": "Increases all damage dealt by 2% against Humanoid and Giant targets.",
            "rankDescriptions": [
              "Increases all damage dealt by 2% against Humanoid and Giant targets.",
              "Increases all damage dealt by 4% against Humanoid and Giant targets."
            ],
            "type": "Passive",
            "icon": "icons/rogue/murder.jpg",
            "sourceIcon": "spell_shadow_deathscream"
          },
          {
            "id": "improved-slice-and-dice",
            "name": "Improved Slice and Dice",
            "max": 3,
            "row": 2,
            "col": 4,
            "description": "Increases the duration of your Slice and Dice ability by 15%.",
            "rankDescriptions": [
              "Increases the duration of your Slice and Dice ability by 15%.",
              "Increases the duration of your Slice and Dice ability by 30%.",
              "Increases the duration of your Slice and Dice ability by 45%."
            ],
            "type": "Passive",
            "icon": "icons/rogue/improved-slice-and-dice.jpg",
            "sourceIcon": "ability_rogue_slicedice"
          },
          {
            "id": "relentless-strikes",
            "name": "Relentless Strikes",
            "max": 1,
            "row": 3,
            "col": 1,
            "description": "Your finishing moves have a 20% chance per Combo Point to restore 25 Energy.",
            "type": "Passive",
            "icon": "icons/rogue/relentless-strikes.jpg",
            "sourceIcon": "ability_warrior_decisivestrike"
          },
          {
            "id": "improved-expose-armor",
            "name": "Improved Expose Armor",
            "max": 2,
            "row": 3,
            "col": 2,
            "description": "Reduces the Energy cost of your Expose Armor ability by 5, and refunds 1 Combo Point when cast with 5 Combo Points.",
            "rankDescriptions": [
              "Reduces the Energy cost of your Expose Armor ability by 5, and refunds 1 Combo Point when cast with 5 Combo Points.",
              "Reduces the Energy cost of your Expose Armor ability by 10, and refunds 2 Combo Points when cast with 5 Combo Points."
            ],
            "type": "Passive",
            "icon": "icons/rogue/improved-expose-armor.jpg",
            "sourceIcon": "ability_warrior_riposte"
          },
          {
            "id": "lethality",
            "name": "Lethality",
            "max": 5,
            "row": 3,
            "col": 3,
            "description": "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Mutilate, Ghostly Strike, and Hemorrhage abilities by 4%.",
            "rankDescriptions": [
              "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Mutilate, Ghostly Strike, and Hemorrhage abilities by 4%.",
              "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Mutilate, Ghostly Strike, and Hemorrhage abilities by 8%.",
              "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Mutilate, Ghostly Strike, and Hemorrhage abilities by 12%.",
              "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Mutilate, Ghostly Strike, and Hemorrhage abilities by 16%.",
              "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Mutilate, Ghostly Strike, and Hemorrhage abilities by 20%."
            ],
            "type": "Passive",
            "prerequisite": "malice",
            "icon": "icons/rogue/lethality.jpg",
            "sourceIcon": "ability_criticalstrike"
          },
          {
            "id": "vile-poisons",
            "name": "Vile Poisons",
            "max": 5,
            "row": 4,
            "col": 1,
            "description": "Increases the damage dealt by your poisons by 4% and gives your poisons an additional 8% chance to resist dispel effects.",
            "rankDescriptions": [
              "Increases the damage dealt by your poisons by 4% and gives your poisons an additional 8% chance to resist dispel effects.",
              "Increases the damage dealt by your poisons by 8% and gives your poisons an additional 16% chance to resist dispel effects.",
              "Increases the damage dealt by your poisons by 12% and gives your poisons an additional 24% chance to resist dispel effects.",
              "Increases the damage dealt by your poisons by 16% and gives your poisons an additional 32% chance to resist dispel effects.",
              "Increases the damage dealt by your poisons by 20% and gives your poisons an additional 40% chance to resist dispel effects."
            ],
            "type": "Passive",
            "icon": "icons/rogue/vile-poisons.jpg",
            "sourceIcon": "ability_rogue_feigndeath"
          },
          {
            "id": "cold-blood",
            "name": "Cold Blood",
            "max": 1,
            "row": 4,
            "col": 2,
            "description": "When activated, increases the critical strike chance of your next Sinister Strike, Backstab, Ambush, Eviscerate, or Mutilate by 100%.",
            "type": "Active",
            "details": [
              "Instant",
              "3 min cooldown"
            ],
            "icon": "icons/rogue/cold-blood.jpg",
            "sourceIcon": "spell_ice_lament"
          },
          {
            "id": "improved-poisons",
            "name": "Improved Poisons",
            "max": 5,
            "row": 4,
            "col": 3,
            "description": "Increases the chance to apply Poisons to your target by 2%, and gives Poison applications a 10% chance to not consume a charge.",
            "rankDescriptions": [
              "Increases the chance to apply Poisons to your target by 2%, and gives Poison applications a 10% chance to not consume a charge.",
              "Increases the chance to apply Poisons to your target by 4%, and gives Poison applications a 20% chance to not consume a charge.",
              "Increases the chance to apply Poisons to your target by 6%, and gives Poison applications a 30% chance to not consume a charge.",
              "Increases the chance to apply Poisons to your target by 8%, and gives Poison applications a 40% chance to not consume a charge.",
              "Increases the chance to apply Poisons to your target by 10%, and gives Poison applications a 50% chance to not consume a charge."
            ],
            "type": "Passive",
            "icon": "icons/rogue/improved-poisons.jpg",
            "sourceIcon": "ability_poisons"
          },
          {
            "id": "vigor",
            "name": "Vigor",
            "max": 2,
            "row": 5,
            "col": 1,
            "description": "Increases your maximum Energy by 5.",
            "rankDescriptions": [
              "Increases your maximum Energy by 5.",
              "Increases your maximum Energy by 10."
            ],
            "type": "Passive",
            "icon": "icons/rogue/vigor.jpg",
            "sourceIcon": "spell_nature_earthbindtotem"
          },
          {
            "id": "mutilate",
            "name": "Mutilate",
            "max": 1,
            "row": 5,
            "col": 2,
            "description": "Instantly attacks with both weapons for 75% weapon damage plus an additional 17 with each weapon. Damage increased by 20% against Poisoned targets. Awards 2 Combo Points.",
            "type": "Active",
            "details": [
              "60 Energy",
              "Melee Range",
              "Instant"
            ],
            "icon": "icons/rogue/mutilate.jpg",
            "sourceIcon": "ability_rogue_deadlybrew"
          },
          {
            "id": "improved-kidney-shot",
            "name": "Improved Kidney Shot",
            "max": 2,
            "row": 5,
            "col": 3,
            "description": "Enemies Stunned by your Kidney Shot ability take 5% increased damage from your poisons and attacks.",
            "rankDescriptions": [
              "Enemies Stunned by your Kidney Shot ability take 5% increased damage from your poisons and attacks.",
              "Enemies Stunned by your Kidney Shot ability take 10% increased damage from your poisons and attacks."
            ],
            "type": "Passive",
            "icon": "icons/rogue/improved-kidney-shot.jpg",
            "sourceIcon": "ability_rogue_kidneyshot"
          },
          {
            "id": "seal-fate",
            "name": "Seal Fate",
            "max": 5,
            "row": 6,
            "col": 3,
            "description": "Your critical strikes from abilities that add Combo Points have a 20% chance to add an additional Combo Point.",
            "rankDescriptions": [
              "Your critical strikes from abilities that add Combo Points have a 20% chance to add an additional Combo Point.",
              "Your critical strikes from abilities that add Combo Points have a 40% chance to add an additional Combo Point.",
              "Your critical strikes from abilities that add Combo Points have a 60% chance to add an additional Combo Point.",
              "Your critical strikes from abilities that add Combo Points have a 80% chance to add an additional Combo Point.",
              "Your critical strikes from abilities that add Combo Points have a 100% chance to add an additional Combo Point."
            ],
            "type": "Passive",
            "icon": "icons/rogue/seal-fate.jpg",
            "sourceIcon": "spell_shadow_chilltouch"
          },
          {
            "id": "venom",
            "name": "Venom",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Finishing move that increases the damage of your Poisons by 30% and your chance to apply Poisons by 10%. Lasts longer per combo point:\n 1 point : 9 sec\n 2 points: 12 sec\n 3 points: 15 sec\n 4 points: 18 sec\n 5 points: 21 sec",
            "type": "Active",
            "details": [
              "25 Energy",
              "100 yd range",
              "Instant"
            ],
            "prerequisite": "mutilate",
            "icon": "icons/rogue/venom.jpg",
            "sourceIcon": "inv_sword_31"
          }
        ]
      },
      {
        "id": "combat",
        "name": "Combat",
        "role": "Combat",
        "color": "#d17855",
        "icon": "icons/rogue/combat.jpg",
        "talents": [
          {
            "id": "improved-eviscerate",
            "name": "Improved Eviscerate",
            "max": 3,
            "row": 1,
            "col": 1,
            "description": "Increases the damage done by your Eviscerate ability by 7%.",
            "rankDescriptions": [
              "Increases the damage done by your Eviscerate ability by 7%.",
              "Increases the damage done by your Eviscerate ability by 13%.",
              "Increases the damage done by your Eviscerate ability by 20%."
            ],
            "type": "Passive",
            "icon": "icons/rogue/improved-eviscerate.jpg",
            "sourceIcon": "ability_rogue_eviscerate"
          },
          {
            "id": "improved-sinister-strike",
            "name": "Improved Sinister Strike",
            "max": 2,
            "row": 1,
            "col": 2,
            "description": "Reduces the Energy cost of your Sinister Strike ability by 3.",
            "rankDescriptions": [
              "Reduces the Energy cost of your Sinister Strike ability by 3.",
              "Reduces the Energy cost of your Sinister Strike ability by 5."
            ],
            "type": "Passive",
            "icon": "icons/rogue/improved-sinister-strike.jpg",
            "sourceIcon": "spell_shadow_ritualofsacrifice"
          },
          {
            "id": "lightning-reflexes",
            "name": "Lightning Reflexes",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Increases your Dodge chance by 1%.",
            "rankDescriptions": [
              "Increases your Dodge chance by 1%.",
              "Increases your Dodge chance by 2%.",
              "Increases your Dodge chance by 3%.",
              "Increases your Dodge chance by 4%.",
              "Increases your Dodge chance by 5%."
            ],
            "type": "Passive",
            "icon": "icons/rogue/lightning-reflexes.jpg",
            "sourceIcon": "spell_nature_invisibilty"
          },
          {
            "id": "puncturing-wounds",
            "name": "Puncturing Wounds",
            "max": 3,
            "row": 2,
            "col": 1,
            "description": "Increases the critical strike chance of your Backstab by 10% and your Mutilate by 5%, and gives Backstab a 15% chance to add an additional Combo Point.",
            "rankDescriptions": [
              "Increases the critical strike chance of your Backstab by 10% and your Mutilate by 5%, and gives Backstab a 15% chance to add an additional Combo Point.",
              "Increases the critical strike chance of your Backstab by 20% and your Mutilate by 10%, and gives Backstab a 30% chance to add an additional Combo Point.",
              "Increases the critical strike chance of your Backstab by 30% and your Mutilate by 15%, and gives Backstab a 45% chance to add an additional Combo Point."
            ],
            "type": "Passive",
            "icon": "icons/rogue/puncturing-wounds.jpg",
            "sourceIcon": "ability_backstab"
          },
          {
            "id": "deflection",
            "name": "Deflection",
            "max": 3,
            "row": 2,
            "col": 2,
            "description": "Increases your Parry chance by 2%.",
            "rankDescriptions": [
              "Increases your Parry chance by 2%.",
              "Increases your Parry chance by 4%.",
              "Increases your Parry chance by 6%."
            ],
            "type": "Passive",
            "icon": "icons/rogue/deflection.jpg",
            "sourceIcon": "ability_parry"
          },
          {
            "id": "precision",
            "name": "Precision",
            "max": 3,
            "row": 2,
            "col": 3,
            "description": "Improves your chance to hit by 1%.",
            "rankDescriptions": [
              "Improves your chance to hit by 1%.",
              "Improves your chance to hit by 2%.",
              "Improves your chance to hit by 3%."
            ],
            "type": "Passive",
            "icon": "icons/rogue/precision.jpg",
            "sourceIcon": "ability_marksmanship"
          },
          {
            "id": "endurance",
            "name": "Endurance",
            "max": 2,
            "row": 3,
            "col": 1,
            "description": "Reduces the cooldown of your Sprint and Evasion abilities by 30%.",
            "rankDescriptions": [
              "Reduces the cooldown of your Sprint and Evasion abilities by 30%.",
              "Reduces the cooldown of your Sprint and Evasion abilities by 60%."
            ],
            "type": "Passive",
            "icon": "icons/rogue/endurance.jpg",
            "sourceIcon": "spell_shadow_shadowward"
          },
          {
            "id": "riposte",
            "name": "Riposte",
            "max": 1,
            "row": 3,
            "col": 2,
            "description": "A strike that becomes active after parrying an opponent’s attack. This attack deals 150% weapon damage and disarms the target for 6 sec.",
            "type": "Active",
            "details": [
              "10 Energy",
              "Melee Range",
              "Instant",
              "6 sec cooldown"
            ],
            "prerequisite": "deflection",
            "icon": "icons/rogue/riposte.jpg",
            "sourceIcon": "ability_warrior_challange"
          },
          {
            "id": "improved-sprint",
            "name": "Improved Sprint",
            "max": 2,
            "row": 3,
            "col": 4,
            "description": "Gives a 50% chance to remove all movement impairing effects when you activate your Sprint ability.",
            "rankDescriptions": [
              "Gives a 50% chance to remove all movement impairing effects when you activate your Sprint ability.",
              "Gives a 100% chance to remove all movement impairing effects when you activate your Sprint ability."
            ],
            "type": "Passive",
            "icon": "icons/rogue/improved-sprint.jpg",
            "sourceIcon": "ability_rogue_sprint"
          },
          {
            "id": "improved-kick",
            "name": "Improved Kick",
            "max": 2,
            "row": 4,
            "col": 1,
            "description": "Gives your Kick ability a 50% chance to Silence the target for 2 sec.",
            "rankDescriptions": [
              "Gives your Kick ability a 50% chance to Silence the target for 2 sec.",
              "Gives your Kick ability a 100% chance to Silence the target for 2 sec."
            ],
            "type": "Passive",
            "icon": "icons/rogue/improved-kick.jpg",
            "sourceIcon": "ability_kick"
          },
          {
            "id": "flawless-execution",
            "name": "Flawless Execution",
            "max": 1,
            "row": 4,
            "col": 2,
            "description": "Reduces the Energy cost of your Eviscerate ability by 10.",
            "type": "Passive",
            "icon": "icons/rogue/flawless-execution.jpg",
            "sourceIcon": "inv_sword_35"
          },
          {
            "id": "dual-wield-specialization",
            "name": "Dual Wield Specialization",
            "max": 5,
            "row": 4,
            "col": 3,
            "description": "Increases the damage done by your off-hand weapon by 5%.",
            "rankDescriptions": [
              "Increases the damage done by your off-hand weapon by 5%.",
              "Increases the damage done by your off-hand weapon by 10%.",
              "Increases the damage done by your off-hand weapon by 15%.",
              "Increases the damage done by your off-hand weapon by 20%.",
              "Increases the damage done by your off-hand weapon by 25%."
            ],
            "type": "Passive",
            "prerequisite": "precision",
            "icon": "icons/rogue/dual-wield-specialization.jpg",
            "sourceIcon": "ability_dualwield"
          },
          {
            "id": "blade-flurry",
            "name": "Blade Flurry",
            "max": 1,
            "row": 5,
            "col": 2,
            "description": "Increases your melee attack speed by 20% and your melee attacks strike an additional nearby opponent. Lasts 15 sec.",
            "type": "Active",
            "details": [
              "25 Energy",
              "Instant",
              "2 min cooldown"
            ],
            "icon": "icons/rogue/blade-flurry.jpg",
            "sourceIcon": "ability_warrior_punishingblow"
          },
          {
            "id": "hack-and-slash",
            "name": "Hack and Slash",
            "max": 5,
            "row": 5,
            "col": 3,
            "description": "Gives your melee weapon attacks a benefit depending on the weapon.\n\n Axe/Sword: Your successful\n melee attacks have a 1% chance\n to trigger an extra attack on the \n target.\n\n Dagger/Fist: Increases your\n critical strike chance by 1%.\n\n Mace: Your attacks ignore 3% of\n your target’s armor.",
            "rankDescriptions": [
              "Gives your melee weapon attacks a benefit depending on the weapon.\n\n Axe/Sword: Your successful\n melee attacks have a 1% chance\n to trigger an extra attack on the \n target.\n\n Dagger/Fist: Increases your\n critical strike chance by 1%.\n\n Mace: Your attacks ignore 3% of\n your target’s armor.",
              "Gives your melee weapon attacks a benefit depending on the weapon.\n\n Axe/Sword: Your successful\n melee attacks have a 2% chance\n to trigger an extra attack on the \n target.\n\n Dagger/Fist: Increases your\n critical strike chance by 2%.\n\n Mace: Your attacks ignore 6% of\n your target’s armor.",
              "Gives your melee weapon attacks a benefit depending on the weapon.\n\n Axe/Sword: Your successful\n melee attacks have a 3% chance\n to trigger an extra attack on the \n target.\n\n Dagger/Fist: Increases your\n critical strike chance by 3%.\n\n Mace: Your attacks ignore 9% of\n your target’s armor.",
              "Gives your melee weapon attacks a benefit depending on the weapon.\n\n Axe/Sword: Your successful\n melee attacks have a 4% chance\n to trigger an extra attack on the \n target.\n\n Dagger/Fist: Increases your\n critical strike chance by 4%.\n\n Mace: Your attacks ignore 12% of\n your target’s armor.",
              "Gives your melee weapon attacks a benefit depending on the weapon.\n\n Axe/Sword: Your successful\n melee attacks have a 5% chance\n to trigger an extra attack on the \n target.\n\n Dagger/Fist: Increases your\n critical strike chance by 5%.\n\n Mace: Your attacks ignore 15% of\n your target’s armor."
            ],
            "type": "Passive",
            "icon": "icons/rogue/hack-and-slash.jpg",
            "sourceIcon": "inv_sword_27"
          },
          {
            "id": "weapon-expertise",
            "name": "Weapon Expertise",
            "max": 2,
            "row": 6,
            "col": 2,
            "description": "Reduces the chance for your attacks to be Dodged or Parried by 1%.",
            "rankDescriptions": [
              "Reduces the chance for your attacks to be Dodged or Parried by 1%.",
              "Reduces the chance for your attacks to be Dodged or Parried by 2%."
            ],
            "type": "Passive",
            "prerequisite": "blade-flurry",
            "icon": "icons/rogue/weapon-expertise.jpg",
            "sourceIcon": "spell_holy_blessingofstrength"
          },
          {
            "id": "aggression",
            "name": "Aggression",
            "max": 3,
            "row": 6,
            "col": 3,
            "description": "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 2%.",
            "rankDescriptions": [
              "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 2%.",
              "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 4%.",
              "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 6%."
            ],
            "type": "Passive",
            "icon": "icons/rogue/aggression.jpg",
            "sourceIcon": "ability_racial_avatar"
          },
          {
            "id": "adrenaline-rush",
            "name": "Adrenaline Rush",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Increases your Energy regeneration rate by 100% for 15 sec.",
            "type": "Active",
            "details": [
              "Instant",
              "5 min cooldown"
            ],
            "icon": "icons/rogue/adrenaline-rush.jpg",
            "sourceIcon": "spell_shadow_shadowworddominate"
          }
        ]
      },
      {
        "id": "subtlety",
        "name": "Subtlety",
        "role": "Subtlety",
        "color": "#9b7cc1",
        "icon": "icons/rogue/subtlety.jpg",
        "talents": [
          {
            "id": "camouflage",
            "name": "Camouflage",
            "max": 5,
            "row": 1,
            "col": 1,
            "description": "Reduces your speed penalty from your Stealth ability by 3% and reduces its cooldown by 2 sec.",
            "rankDescriptions": [
              "Reduces your speed penalty from your Stealth ability by 3% and reduces its cooldown by 2 sec.",
              "Reduces your speed penalty from your Stealth ability by 6% and reduces its cooldown by 3 sec.",
              "Reduces your speed penalty from your Stealth ability by 9% and reduces its cooldown by 4 sec.",
              "Reduces your speed penalty from your Stealth ability by 12% and reduces its cooldown by 5 sec.",
              "Reduces your speed penalty from your Stealth ability by 15% and reduces its cooldown by 6 sec."
            ],
            "type": "Passive",
            "icon": "icons/rogue/camouflage.jpg",
            "sourceIcon": "ability_stealth"
          },
          {
            "id": "master-of-deception",
            "name": "Master of Deception",
            "max": 3,
            "row": 1,
            "col": 2,
            "description": "Reduces the chance enemies have to detect you while in Stealth mode as if you were 1 levels higher.",
            "rankDescriptions": [
              "Reduces the chance enemies have to detect you while in Stealth mode as if you were 1 levels higher.",
              "Reduces the chance enemies have to detect you while in Stealth mode as if you were 2 levels higher.",
              "Reduces the chance enemies have to detect you while in Stealth mode as if you were 3 levels higher."
            ],
            "type": "Passive",
            "icon": "icons/rogue/master-of-deception.jpg",
            "sourceIcon": "spell_shadow_charm"
          },
          {
            "id": "opportunity",
            "name": "Opportunity",
            "max": 2,
            "row": 1,
            "col": 3,
            "description": "Increases the damage dealt by your Backstab, Garrote, Ambush, and Mutilate abilities by 5%.",
            "rankDescriptions": [
              "Increases the damage dealt by your Backstab, Garrote, Ambush, and Mutilate abilities by 5%.",
              "Increases the damage dealt by your Backstab, Garrote, Ambush, and Mutilate abilities by 10%."
            ],
            "type": "Passive",
            "icon": "icons/rogue/opportunity.jpg",
            "sourceIcon": "ability_warrior_warcry"
          },
          {
            "id": "setup",
            "name": "Setup",
            "max": 3,
            "row": 2,
            "col": 1,
            "description": "Gives you a 33% chance to add a Combo Point to your target after Dodging one of their attacks or fully resisting one of their spells.",
            "rankDescriptions": [
              "Gives you a 33% chance to add a Combo Point to your target after Dodging one of their attacks or fully resisting one of their spells.",
              "Gives you a 67% chance to add a Combo Point to your target after Dodging one of their attacks or fully resisting one of their spells.",
              "Gives you a 100% chance to add a Combo Point to your target after Dodging one of their attacks or fully resisting one of their spells."
            ],
            "type": "Passive",
            "icon": "icons/rogue/setup.jpg",
            "sourceIcon": "spell_nature_mirrorimage"
          },
          {
            "id": "elusiveness",
            "name": "Elusiveness",
            "max": 2,
            "row": 2,
            "col": 2,
            "description": "Reduces the cooldown of your Vanish and Blind abilities by 45 sec.",
            "rankDescriptions": [
              "Reduces the cooldown of your Vanish and Blind abilities by 45 sec.",
              "Reduces the cooldown of your Vanish and Blind abilities by 90 sec."
            ],
            "type": "Passive",
            "icon": "icons/rogue/elusiveness.jpg",
            "sourceIcon": "spell_magic_lesserinvisibilty"
          },
          {
            "id": "dirty-tricks",
            "name": "Dirty Tricks",
            "max": 2,
            "row": 2,
            "col": 3,
            "description": "Reduces the Energy cost of your Sap and Blind abilities by 25%.",
            "rankDescriptions": [
              "Reduces the Energy cost of your Sap and Blind abilities by 25%.",
              "Reduces the Energy cost of your Sap and Blind abilities by 50%."
            ],
            "type": "Passive",
            "icon": "icons/rogue/dirty-tricks.jpg",
            "sourceIcon": "ability_sap"
          },
          {
            "id": "improved-ambush",
            "name": "Improved Ambush",
            "max": 3,
            "row": 2,
            "col": 4,
            "description": "Increases the critical strike chance of your Ambush ability by 15%.",
            "rankDescriptions": [
              "Increases the critical strike chance of your Ambush ability by 15%.",
              "Increases the critical strike chance of your Ambush ability by 30%.",
              "Increases the critical strike chance of your Ambush ability by 45%."
            ],
            "type": "Passive",
            "icon": "icons/rogue/improved-ambush.jpg",
            "sourceIcon": "ability_rogue_ambush"
          },
          {
            "id": "initiative",
            "name": "Initiative",
            "max": 3,
            "row": 3,
            "col": 1,
            "description": "Gives you a 33% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
            "rankDescriptions": [
              "Gives you a 33% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
              "Gives you a 67% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
              "Gives you a 100% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability."
            ],
            "type": "Passive",
            "icon": "icons/rogue/initiative.jpg",
            "sourceIcon": "spell_shadow_fumble"
          },
          {
            "id": "ghostly-strike",
            "name": "Ghostly Strike",
            "max": 1,
            "row": 3,
            "col": 2,
            "description": "A strike that deals 125% (180% if a Dagger is equipped in your Main Hand) weapon damage and increases your chance to dodge by 15% for 7 sec. Awards 1 combo point.",
            "type": "Active",
            "details": [
              "40 Energy",
              "Melee Range",
              "Instant",
              "20 sec cooldown"
            ],
            "icon": "icons/rogue/ghostly-strike.jpg",
            "sourceIcon": "spell_shadow_curse"
          },
          {
            "id": "improved-distract",
            "name": "Improved Distract",
            "max": 2,
            "row": 3,
            "col": 3,
            "description": "Increases the radius of your Distract ability by 3 yds, and further reduces the Stealth detection of distracted enemies as though they were an additional 1 levels lower.",
            "rankDescriptions": [
              "Increases the radius of your Distract ability by 3 yds, and further reduces the Stealth detection of distracted enemies as though they were an additional 1 levels lower.",
              "Increases the radius of your Distract ability by 5 yds, and further reduces the Stealth detection of distracted enemies as though they were an additional 2 levels lower."
            ],
            "type": "Passive",
            "icon": "icons/rogue/improved-distract.jpg",
            "sourceIcon": "ability_rogue_distract"
          },
          {
            "id": "heightened-senses",
            "name": "Heightened Senses",
            "max": 2,
            "row": 4,
            "col": 1,
            "description": "Increases your Stealth detection as if you were 1 levels higher and reduces your chance to be hit by spells and ranged attacks by 2%.",
            "rankDescriptions": [
              "Increases your Stealth detection as if you were 1 levels higher and reduces your chance to be hit by spells and ranged attacks by 2%.",
              "Increases your Stealth detection as if you were 3 levels higher and reduces your chance to be hit by spells and ranged attacks by 4%."
            ],
            "type": "Passive",
            "icon": "icons/rogue/heightened-senses.jpg",
            "sourceIcon": "ability_ambush"
          },
          {
            "id": "premeditation",
            "name": "Premeditation",
            "max": 1,
            "row": 4,
            "col": 2,
            "description": "Adds 2 Combo Points to your target. You must add to or use those combo points within 20 sec or the combo points are lost.",
            "type": "Active",
            "details": [
              "20 yd range",
              "Instant",
              "2 min cooldown"
            ],
            "icon": "icons/rogue/premeditation.jpg",
            "sourceIcon": "spell_shadow_possession"
          },
          {
            "id": "serrated-blades",
            "name": "Serrated Blades",
            "max": 3,
            "row": 4,
            "col": 3,
            "description": "Causes your attacks to ignore 3% of your target’s Armor and increases the damage dealt by your Rupture ability by 10%.",
            "rankDescriptions": [
              "Causes your attacks to ignore 3% of your target’s Armor and increases the damage dealt by your Rupture ability by 10%.",
              "Causes your attacks to ignore 6% of your target’s Armor and increases the damage dealt by your Rupture ability by 20%.",
              "Causes your attacks to ignore 9% of your target’s Armor and increases the damage dealt by your Rupture ability by 30%."
            ],
            "type": "Passive",
            "icon": "icons/rogue/serrated-blades.jpg",
            "sourceIcon": "inv_sword_17"
          },
          {
            "id": "dirty-deeds",
            "name": "Dirty Deeds",
            "max": 2,
            "row": 5,
            "col": 1,
            "description": "Reduces the Energy cost of your Cheap Shot and Garrote abilities by 10, and your Garrote ability no longer requires you to be behind your target.",
            "rankDescriptions": [
              "Reduces the Energy cost of your Cheap Shot and Garrote abilities by 10, and your Garrote ability no longer requires you to be behind your target.",
              "Reduces the Energy cost of your Cheap Shot and Garrote abilities by 20, and your Garrote ability no longer requires you to be behind your target."
            ],
            "type": "Passive",
            "icon": "icons/rogue/dirty-deeds.jpg",
            "sourceIcon": "spell_shadow_summonsuccubus"
          },
          {
            "id": "preparation",
            "name": "Preparation",
            "max": 1,
            "row": 5,
            "col": 2,
            "description": "When activated, this ability immediately finishes the cooldown on your other Rogue abilities.",
            "type": "Active",
            "details": [
              "Instant",
              "10 min cooldown"
            ],
            "icon": "icons/rogue/preparation.jpg",
            "sourceIcon": "spell_shadow_antishadow"
          },
          {
            "id": "hemorrhage",
            "name": "Hemorrhage",
            "max": 1,
            "row": 5,
            "col": 3,
            "description": "An instant strike that deals 100% weapon damage (145% if a Dagger is equipped) and causes the target to take 15% increased Rupture damage from the Rogue. Lasts 15 sec. Awards 1 Combo Point.",
            "type": "Active",
            "details": [
              "35 Energy",
              "Melee Range",
              "Instant"
            ],
            "prerequisite": "serrated-blades",
            "icon": "icons/rogue/hemorrhage.jpg",
            "sourceIcon": "spell_shadow_lifedrain"
          },
          {
            "id": "quietus",
            "name": "Quietus",
            "max": 5,
            "row": 6,
            "col": 1,
            "description": "Your Sinister Strike, Ghostly Strike, and Hemorrhage abilities cause 2% more damage against targets below 35% health.",
            "rankDescriptions": [
              "Your Sinister Strike, Ghostly Strike, and Hemorrhage abilities cause 2% more damage against targets below 35% health.",
              "Your Sinister Strike, Ghostly Strike, and Hemorrhage abilities cause 4% more damage against targets below 35% health.",
              "Your Sinister Strike, Ghostly Strike, and Hemorrhage abilities cause 6% more damage against targets below 35% health.",
              "Your Sinister Strike, Ghostly Strike, and Hemorrhage abilities cause 8% more damage against targets below 35% health.",
              "Your Sinister Strike, Ghostly Strike, and Hemorrhage abilities cause 10% more damage against targets below 35% health."
            ],
            "type": "Passive",
            "prerequisite": "dirty-deeds",
            "icon": "icons/rogue/quietus.jpg",
            "sourceIcon": "ability_rogue_garrote"
          },
          {
            "id": "cutthroat",
            "name": "Cutthroat",
            "max": 5,
            "row": 6,
            "col": 3,
            "description": "Your Backstab has a 3% chance to cause your next Ambush within 10 sec to not require Stealth.",
            "rankDescriptions": [
              "Your Backstab has a 3% chance to cause your next Ambush within 10 sec to not require Stealth.",
              "Your Backstab has a 6% chance to cause your next Ambush within 10 sec to not require Stealth.",
              "Your Backstab has a 9% chance to cause your next Ambush within 10 sec to not require Stealth.",
              "Your Backstab has a 12% chance to cause your next Ambush within 10 sec to not require Stealth.",
              "Your Backstab has a 15% chance to cause your next Ambush within 10 sec to not require Stealth."
            ],
            "type": "Passive",
            "icon": "icons/rogue/cutthroat.jpg",
            "sourceIcon": "classicon_rogue"
          },
          {
            "id": "thousand-cuts",
            "name": "Thousand Cuts",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "When your Rupture ability deals periodic damage, the Energy cost of your next Hemorrhage or Backstab ability within 10 sec is reduced by 3, stacking up to 5 times.",
            "type": "Passive",
            "prerequisite": "preparation",
            "icon": "icons/rogue/thousand-cuts.jpg",
            "sourceIcon": "ability_rogue_rupture"
          }
        ]
      }
    ]
  },
  "shaman": {
    "version": 6,
    "gameClass": "shaman",
    "name": "Shaman",
    "color": "#0070de",
    "legacyBuilds": {
      "FF2": [
        [
          "convection",
          5
        ],
        [
          "concussion",
          5
        ],
        [
          "elemental-warding",
          3
        ],
        [
          "reverberation",
          5
        ],
        [
          "call-of-flame",
          3
        ],
        [
          "elemental-devastation",
          3
        ],
        [
          "elemental-focus",
          1
        ],
        [
          "elemental-alacrity",
          3
        ],
        [
          "improved-fire-nova",
          2
        ],
        [
          "eye-of-the-storm",
          3
        ],
        [
          "call-of-thunder",
          1
        ],
        [
          "elemental-reach",
          2
        ],
        [
          "lightning-overload",
          3
        ],
        [
          "earthbound",
          1
        ],
        [
          "elemental-fury",
          5
        ],
        [
          "lava-burst",
          1
        ],
        [
          "earths-grasp",
          2
        ],
        [
          "thundering-strikes",
          5
        ],
        [
          "ancestral-knowledge",
          5
        ],
        [
          "guardian-totems",
          2
        ],
        [
          "mental-dexterity",
          3
        ],
        [
          "improved-ghost-wolf",
          2
        ],
        [
          "improved-lightning-shield",
          3
        ],
        [
          "elemental-weapons",
          3
        ],
        [
          "shamanistic-focus",
          1
        ],
        [
          "anticipation",
          3
        ],
        [
          "toughness",
          5
        ],
        [
          "flurry",
          5
        ],
        [
          "stormstrike",
          1
        ],
        [
          "spirit-weapons",
          1
        ],
        [
          "mental-quickness",
          2
        ],
        [
          "improved-stormstrike",
          2
        ],
        [
          "maelstrom-weapon",
          5
        ],
        [
          "rage-of-the-farseer",
          1
        ],
        [
          "improved-healing-wave",
          5
        ],
        [
          "totemic-focus",
          5
        ],
        [
          "mindfulness",
          3
        ],
        [
          "natural-grace",
          3
        ],
        [
          "tidal-focus",
          5
        ],
        [
          "improved-reincarnation",
          2
        ],
        [
          "ancestral-healing",
          3
        ],
        [
          "healing-focus",
          3
        ],
        [
          "water-shield",
          1
        ],
        [
          "tidal-mastery",
          5
        ],
        [
          "restorative-totems",
          5
        ],
        [
          "mana-tide-totem",
          1
        ],
        [
          "healing-way",
          3
        ],
        [
          "natures-swiftness",
          1
        ],
        [
          "purification",
          5
        ],
        [
          "riptide",
          1
        ]
      ]
    },
    "trees": [
      {
        "id": "elemental-combat",
        "name": "Elemental Combat",
        "role": "Elemental Combat",
        "color": "#6da7e0",
        "icon": "icons/shaman/elemental-combat.jpg",
        "talents": [
          {
            "id": "convection",
            "name": "Convection",
            "max": 5,
            "row": 1,
            "col": 2,
            "description": "Reduces the mana cost of your Shock, Lightning Bolt, Lava Burst, and Chain Lightning spells by 2%.",
            "rankDescriptions": [
              "Reduces the mana cost of your Shock, Lightning Bolt, Lava Burst, and Chain Lightning spells by 2%.",
              "Reduces the mana cost of your Shock, Lightning Bolt, Lava Burst, and Chain Lightning spells by 4%.",
              "Reduces the mana cost of your Shock, Lightning Bolt, Lava Burst, and Chain Lightning spells by 6%.",
              "Reduces the mana cost of your Shock, Lightning Bolt, Lava Burst, and Chain Lightning spells by 8%.",
              "Reduces the mana cost of your Shock, Lightning Bolt, Lava Burst, and Chain Lightning spells by 10%."
            ],
            "type": "Passive",
            "icon": "icons/shaman/convection.jpg",
            "sourceIcon": "spell_nature_wispsplode"
          },
          {
            "id": "concussion",
            "name": "Concussion",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Increases the damage done by your Lightning Bolt, Chain Lightning, and Earth Shock spells by 1%.",
            "rankDescriptions": [
              "Increases the damage done by your Lightning Bolt, Chain Lightning, and Earth Shock spells by 1%.",
              "Increases the damage done by your Lightning Bolt, Chain Lightning, and Earth Shock spells by 2%.",
              "Increases the damage done by your Lightning Bolt, Chain Lightning, and Earth Shock spells by 3%.",
              "Increases the damage done by your Lightning Bolt, Chain Lightning, and Earth Shock spells by 4%.",
              "Increases the damage done by your Lightning Bolt, Chain Lightning, and Earth Shock spells by 5%."
            ],
            "type": "Passive",
            "icon": "icons/shaman/concussion.jpg",
            "sourceIcon": "spell_nature_earthshock"
          },
          {
            "id": "elemental-devastation",
            "name": "Elemental Devastation",
            "max": 3,
            "row": 2,
            "col": 1,
            "description": "Your Critical Strikes with direct damage spells increase your chance to get a Critical Strike with melee attacks by 3% for 10 sec.",
            "rankDescriptions": [
              "Your Critical Strikes with direct damage spells increase your chance to get a Critical Strike with melee attacks by 3% for 10 sec.",
              "Your Critical Strikes with direct damage spells increase your chance to get a Critical Strike with melee attacks by 6% for 10 sec.",
              "Your Critical Strikes with direct damage spells increase your chance to get a Critical Strike with melee attacks by 9% for 10 sec."
            ],
            "type": "Passive",
            "icon": "icons/shaman/elemental-devastation.jpg",
            "sourceIcon": "spell_fire_elementaldevastation"
          },
          {
            "id": "reverberation",
            "name": "Reverberation",
            "max": 5,
            "row": 2,
            "col": 2,
            "description": "Reduces the cooldown of your Shock spells by 0.2 sec.",
            "rankDescriptions": [
              "Reduces the cooldown of your Shock spells by 0.2 sec.",
              "Reduces the cooldown of your Shock spells by 0.4 sec.",
              "Reduces the cooldown of your Shock spells by 0.6 sec.",
              "Reduces the cooldown of your Shock spells by 0.8 sec.",
              "Reduces the cooldown of your Shock spells by 1.0 sec."
            ],
            "type": "Passive",
            "icon": "icons/shaman/reverberation.jpg",
            "sourceIcon": "spell_frost_frostward"
          },
          {
            "id": "elemental-alacrity",
            "name": "Elemental Alacrity",
            "max": 3,
            "row": 2,
            "col": 3,
            "description": "Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by 0.17 sec.",
            "rankDescriptions": [
              "Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by 0.17 sec.",
              "Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by 0.33 sec.",
              "Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by 0.50 sec."
            ],
            "type": "Passive",
            "icon": "icons/shaman/elemental-alacrity.jpg",
            "sourceIcon": "spell_lightning_lightningbolt01"
          },
          {
            "id": "call-of-flame",
            "name": "Call of Flame",
            "max": 3,
            "row": 2,
            "col": 4,
            "description": "Increases the damage done by your Fire Totems and by your Flame Shock, Fire Nova, and Lava Burst spells by 5%, as well as increases the duration of your Flame Shock spell by 3 sec.",
            "rankDescriptions": [
              "Increases the damage done by your Fire Totems and by your Flame Shock, Fire Nova, and Lava Burst spells by 5%, as well as increases the duration of your Flame Shock spell by 3 sec.",
              "Increases the damage done by your Fire Totems and by your Flame Shock, Fire Nova, and Lava Burst spells by 10%, as well as increases the duration of your Flame Shock spell by 6 sec.",
              "Increases the damage done by your Fire Totems and by your Flame Shock, Fire Nova, and Lava Burst spells by 15%, as well as increases the duration of your Flame Shock spell by 9 sec."
            ],
            "type": "Passive",
            "icon": "icons/shaman/call-of-flame.jpg",
            "sourceIcon": "spell_fire_immolation"
          },
          {
            "id": "elemental-focus",
            "name": "Elemental Focus",
            "max": 1,
            "row": 3,
            "col": 1,
            "description": "Gives you a 10% chance to enter a Clearcasting state after casting any Fire, Frost, or Nature damage spell. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
            "type": "Passive",
            "icon": "icons/shaman/elemental-focus.jpg",
            "sourceIcon": "spell_shadow_manaburn"
          },
          {
            "id": "elemental-warding",
            "name": "Elemental Warding",
            "max": 3,
            "row": 3,
            "col": 2,
            "description": "Reduces damage taken from Fire, Frost, and Nature effects by 3%.",
            "rankDescriptions": [
              "Reduces damage taken from Fire, Frost, and Nature effects by 3%.",
              "Reduces damage taken from Fire, Frost, and Nature effects by 7%.",
              "Reduces damage taken from Fire, Frost, and Nature effects by 10%."
            ],
            "type": "Passive",
            "icon": "icons/shaman/elemental-warding.jpg",
            "sourceIcon": "spell_nature_spiritarmor"
          },
          {
            "id": "trial-by-fire",
            "name": "Trial by Fire",
            "max": 2,
            "row": 4,
            "col": 1,
            "description": "Increases the damage done by your Fire Nova spell by 10% and reduces its cooldown by 2 sec, and increases the duration of your Magma Totem by 10 sec.",
            "type": "Passive",
            "sourceIcon": "spell_fire_sealoffire",
            "rankDescriptions": [
              "Increases the damage done by your Fire Nova spell by 10% and reduces its cooldown by 2 sec, and increases the duration of your Magma Totem by 10 sec.",
              "Increases the damage done by your Fire Nova spell by 20% and reduces its cooldown by 4 sec, and increases the duration of your Magma Totem by 20 sec."
            ]
          },
          {
            "id": "eye-of-the-storm",
            "name": "Eye of the Storm",
            "max": 3,
            "row": 4,
            "col": 2,
            "description": "Reduces the pushback suffered from damaging attacks while casting Lightning Bolt, Chain Lightning, and Lava Burst by 23%.",
            "rankDescriptions": [
              "Reduces the pushback suffered from damaging attacks while casting Lightning Bolt, Chain Lightning, and Lava Burst by 23%.",
              "Reduces the pushback suffered from damaging attacks while casting Lightning Bolt, Chain Lightning, and Lava Burst by 47%.",
              "Reduces the pushback suffered from damaging attacks while casting Lightning Bolt, Chain Lightning, and Lava Burst by 70%."
            ],
            "type": "Passive",
            "icon": "icons/shaman/eye-of-the-storm.jpg",
            "sourceIcon": "spell_nature_eyeofthestorm"
          },
          {
            "id": "earthbound",
            "name": "Earthbound",
            "max": 1,
            "row": 4,
            "col": 4,
            "description": "Your Earthbind Totem Immobilizes nearby targets for 5 sec when cast.",
            "type": "Passive",
            "icon": "icons/shaman/earthbound.jpg",
            "sourceIcon": "spell_nature_stranglevines"
          },
          {
            "id": "elemental-reach",
            "name": "Elemental Reach",
            "max": 2,
            "row": 5,
            "col": 1,
            "description": "Increases the range of your Lightning Bolt, Chain Lightning, Fire Nova, and Lava Burst spells by 3 yards and reduces the cooldown of Totemic Projection by 10 sec.",
            "rankDescriptions": [
              "Increases the range of your Lightning Bolt, Chain Lightning, Fire Nova, and Lava Burst spells by 3 yards and reduces the cooldown of Totemic Projection by 10 sec.",
              "Increases the range of your Lightning Bolt, Chain Lightning, Fire Nova, and Lava Burst spells by 6 yards and reduces the cooldown of Totemic Projection by 20 sec."
            ],
            "type": "Passive",
            "icon": "icons/shaman/elemental-reach.jpg",
            "sourceIcon": "spell_nature_stormreach"
          },
          {
            "id": "lava-burst",
            "name": "Lava Burst",
            "max": 1,
            "row": 5,
            "col": 2,
            "description": "You hurl molten lava at the target, dealing 114 to 145 Fire damage. If your Flame Shock is on the target, Lava Burst deals 20% increased damage.",
            "type": "Active",
            "details": [
              "135 Mana",
              "30 yd range",
              "2.5 sec cast",
              "10 sec cooldown"
            ],
            "icon": "icons/shaman/lava-burst.jpg",
            "sourceIcon": "spell_shaman_lavaburst"
          },
          {
            "id": "lightning-overload",
            "name": "Lightning Overload",
            "max": 3,
            "row": 5,
            "col": 3,
            "description": "Gives your Lightning Bolt and Chain Lightning spells a 3% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
            "rankDescriptions": [
              "Gives your Lightning Bolt and Chain Lightning spells a 3% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
              "Gives your Lightning Bolt and Chain Lightning spells a 7% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
              "Gives your Lightning Bolt and Chain Lightning spells a 10% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat."
            ],
            "type": "Passive",
            "icon": "icons/shaman/lightning-overload.jpg",
            "sourceIcon": "spell_nature_lightningoverload",
            "prerequisite": "elemental-alacrity"
          },
          {
            "id": "elemental-fury",
            "name": "Elemental Fury",
            "max": 5,
            "row": 6,
            "col": 3,
            "description": "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 20%.",
            "rankDescriptions": [
              "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 20%.",
              "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 40%.",
              "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 60%.",
              "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 80%.",
              "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by 100%."
            ],
            "type": "Passive",
            "prerequisite": "lightning-overload",
            "icon": "icons/shaman/elemental-fury.jpg",
            "sourceIcon": "spell_fire_volcano"
          },
          {
            "id": "elemental-mastery",
            "name": "Elemental Mastery",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Gain mastery over Fire and Lightning, reducing the cast time of Lightning Bolt and Lava Burst by 0.5 sec, and removing the cooldown from Chain Lightning. Lasts 15 sec.",
            "type": "Active",
            "sourceIcon": "spell_nature_wispheal",
            "prerequisite": "lava-burst",
            "details": [
              "Instant",
              "3 min cooldown"
            ]
          }
        ]
      },
      {
        "id": "enhancement",
        "name": "Enhancement",
        "role": "Enhancement",
        "color": "#d99152",
        "icon": "icons/shaman/enhancement.jpg",
        "talents": [
          {
            "id": "earths-grasp",
            "name": "Earth’s Grasp",
            "max": 2,
            "row": 1,
            "col": 1,
            "description": "Increases the health of your Stoneclaw Totem by 25% and the radius of your Earthbind Totem by 10%.",
            "rankDescriptions": [
              "Increases the health of your Stoneclaw Totem by 25% and the radius of your Earthbind Totem by 10%.",
              "Increases the health of your Stoneclaw Totem by 50% and the radius of your Earthbind Totem by 20%."
            ],
            "type": "Passive",
            "icon": "icons/shaman/earths-grasp.jpg",
            "sourceIcon": "spell_nature_stoneclawtotem"
          },
          {
            "id": "thundering-strikes",
            "name": "Thundering Strikes",
            "max": 5,
            "row": 1,
            "col": 2,
            "description": "Improves your chance to get a critical strike with all spells and attacks by 1%.",
            "rankDescriptions": [
              "Improves your chance to get a critical strike with all spells and attacks by 1%.",
              "Improves your chance to get a critical strike with all spells and attacks by 2%.",
              "Improves your chance to get a critical strike with all spells and attacks by 3%.",
              "Improves your chance to get a critical strike with all spells and attacks by 4%.",
              "Improves your chance to get a critical strike with all spells and attacks by 5%."
            ],
            "type": "Passive",
            "icon": "icons/shaman/thundering-strikes.jpg",
            "sourceIcon": "ability_thunderbolt"
          },
          {
            "id": "ancestral-knowledge",
            "name": "Ancestral Knowledge",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Increases your Intellect by 2%.",
            "rankDescriptions": [
              "Increases your Intellect by 2%.",
              "Increases your Intellect by 4%.",
              "Increases your Intellect by 6%.",
              "Increases your Intellect by 8%.",
              "Increases your Intellect by 10%."
            ],
            "type": "Passive",
            "icon": "icons/shaman/ancestral-knowledge.jpg",
            "sourceIcon": "spell_shadow_grimward"
          },
          {
            "id": "guardian-totems",
            "name": "Guardian Totems",
            "max": 2,
            "row": 2,
            "col": 1,
            "description": "Increases the amount of damage reduced by your Stoneskin Totem and Windwall Totem by 10% and reduces the cooldown of your Grounding Totem by 1 sec.",
            "rankDescriptions": [
              "Increases the amount of damage reduced by your Stoneskin Totem and Windwall Totem by 10% and reduces the cooldown of your Grounding Totem by 1 sec.",
              "Increases the amount of damage reduced by your Stoneskin Totem and Windwall Totem by 20% and reduces the cooldown of your Grounding Totem by 2 sec."
            ],
            "type": "Passive",
            "icon": "icons/shaman/guardian-totems.jpg",
            "sourceIcon": "spell_nature_stoneskintotem"
          },
          {
            "id": "mental-dexterity",
            "name": "Mental Dexterity",
            "max": 3,
            "row": 2,
            "col": 2,
            "description": "Increases your Attack Power by an amount equal to 33% of your Intellect.",
            "rankDescriptions": [
              "Increases your Attack Power by an amount equal to 33% of your Intellect.",
              "Increases your Attack Power by an amount equal to 67% of your Intellect.",
              "Increases your Attack Power by an amount equal to 100% of your Intellect."
            ],
            "type": "Passive",
            "icon": "icons/shaman/mental-dexterity.jpg",
            "sourceIcon": "spell_nature_mentalquickness"
          },
          {
            "id": "improved-ghost-wolf",
            "name": "Improved Ghost Wolf",
            "max": 2,
            "row": 2,
            "col": 3,
            "description": "Reduces the cast time of your Ghost Wolf spell by 1.0 sec, and Ghost Wolf may be used indoors.",
            "rankDescriptions": [
              "Reduces the cast time of your Ghost Wolf spell by 1.0 sec, and Ghost Wolf may be used indoors.",
              "Reduces the cast time of your Ghost Wolf spell by 3.0 sec, and Ghost Wolf may be used indoors."
            ],
            "type": "Passive",
            "icon": "icons/shaman/improved-ghost-wolf.jpg",
            "sourceIcon": "spell_nature_spiritwolf"
          },
          {
            "id": "improved-lightning-shield",
            "name": "Improved Lightning Shield",
            "max": 3,
            "row": 2,
            "col": 4,
            "description": "Increases the damage done by your Lightning Shield orbs by 5%.",
            "rankDescriptions": [
              "Increases the damage done by your Lightning Shield orbs by 5%.",
              "Increases the damage done by your Lightning Shield orbs by 10%.",
              "Increases the damage done by your Lightning Shield orbs by 15%."
            ],
            "type": "Passive",
            "icon": "icons/shaman/improved-lightning-shield.jpg",
            "sourceIcon": "spell_nature_lightningshield"
          },
          {
            "id": "elemental-weapons",
            "name": "Elemental Weapons",
            "max": 3,
            "row": 3,
            "col": 1,
            "description": "Increases the melee attack power bonus of your Rockbiter Weapon by 7%, your Windfury Weapon effect by 13% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by 5%.",
            "rankDescriptions": [
              "Increases the melee attack power bonus of your Rockbiter Weapon by 7%, your Windfury Weapon effect by 13% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by 5%.",
              "Increases the melee attack power bonus of your Rockbiter Weapon by 13%, your Windfury Weapon effect by 27% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by 10%.",
              "Increases the melee attack power bonus of your Rockbiter Weapon by 20%, your Windfury Weapon effect by 40% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by 15%."
            ],
            "type": "Passive",
            "icon": "icons/shaman/elemental-weapons.jpg",
            "sourceIcon": "spell_fire_flametounge"
          },
          {
            "id": "shamanistic-focus",
            "name": "Shamanistic Focus",
            "max": 1,
            "row": 3,
            "col": 3,
            "description": "Reduces the mana cost of your Shock and Lightning Shield spells by 45%.",
            "type": "Passive",
            "icon": "icons/shaman/shamanistic-focus.jpg",
            "sourceIcon": "spell_nature_elementalabsorption"
          },
          {
            "id": "anticipation",
            "name": "Anticipation",
            "max": 3,
            "row": 3,
            "col": 4,
            "description": "Increases your chance to dodge by an additional 2%.",
            "rankDescriptions": [
              "Increases your chance to dodge by an additional 2%.",
              "Increases your chance to dodge by an additional 4%.",
              "Increases your chance to dodge by an additional 6%."
            ],
            "type": "Passive",
            "icon": "icons/shaman/anticipation.jpg",
            "sourceIcon": "spell_nature_mirrorimage"
          },
          {
            "id": "toughness",
            "name": "Toughness",
            "max": 5,
            "row": 4,
            "col": 1,
            "description": "Increases your Stamina by 2%.",
            "rankDescriptions": [
              "Increases your Stamina by 2%.",
              "Increases your Stamina by 4%.",
              "Increases your Stamina by 6%.",
              "Increases your Stamina by 8%.",
              "Increases your Stamina by 10%."
            ],
            "type": "Passive",
            "icon": "icons/shaman/toughness.jpg",
            "sourceIcon": "spell_holy_devotion"
          },
          {
            "id": "flurry",
            "name": "Flurry",
            "max": 5,
            "row": 4,
            "col": 2,
            "description": "Increases your attack speed by 5% for your next 3 swings after dealing a melee critical strike.",
            "rankDescriptions": [
              "Increases your attack speed by 5% for your next 3 swings after dealing a melee critical strike.",
              "Increases your attack speed by 10% for your next 3 swings after dealing a melee critical strike.",
              "Increases your attack speed by 15% for your next 3 swings after dealing a melee critical strike.",
              "Increases your attack speed by 20% for your next 3 swings after dealing a melee critical strike.",
              "Increases your attack speed by 25% for your next 3 swings after dealing a melee critical strike."
            ],
            "type": "Passive",
            "prerequisite": "mental-dexterity",
            "icon": "icons/shaman/flurry.jpg",
            "sourceIcon": "ability_ghoulfrenzy"
          },
          {
            "id": "stormstrike",
            "name": "Stormstrike",
            "max": 1,
            "row": 4,
            "col": 3,
            "description": "Instantly strike for normal weapon damage and increase the damage you deal to the target with your next Lightning Bolt, Chain Lightning, or Earth Shock spell by 20% for 12 sec.",
            "type": "Active",
            "details": [
              "8% of base Mana",
              "Melee Range",
              "Instant",
              "8 sec cooldown"
            ],
            "icon": "icons/shaman/stormstrike.jpg",
            "sourceIcon": "ability_shaman_stormstrike"
          },
          {
            "id": "spirit-weapons",
            "name": "Spirit Weapons",
            "max": 1,
            "row": 5,
            "col": 1,
            "description": "Gives a chance to parry enemy melee attacks, reduces all threat generated by your attacks by 30% while Rockbiter Weapon is not active, and increases all threat generated by 30% while Rockbiter Weapon is active.",
            "type": "Passive",
            "icon": "icons/shaman/spirit-weapons.jpg",
            "sourceIcon": "ability_parry"
          },
          {
            "id": "mental-quickness",
            "name": "Mental Quickness",
            "max": 2,
            "row": 5,
            "col": 2,
            "description": "Increases your spell damage and healing by up to 15% of your Intellect.",
            "rankDescriptions": [
              "Increases your spell damage and healing by up to 15% of your Intellect.",
              "Increases your spell damage and healing by up to 30% of your Intellect."
            ],
            "type": "Passive",
            "icon": "icons/shaman/mental-quickness.jpg",
            "sourceIcon": "spell_nature_sleep"
          },
          {
            "id": "improved-stormstrike",
            "name": "Improved Stormstrike",
            "max": 2,
            "row": 5,
            "col": 3,
            "description": "When you Stormstrike, you have a 50% chance to gain 50% mana regeneration while casting spells for 15 sec, and Stormstrike’s cooldown has a 50% chance to reset each time you Dodge or Parry.",
            "rankDescriptions": [
              "When you Stormstrike, you have a 50% chance to gain 50% mana regeneration while casting spells for 15 sec, and Stormstrike’s cooldown has a 50% chance to reset each time you Dodge or Parry.",
              "When you Stormstrike, you have a 100% chance to gain 50% mana regeneration while casting spells for 15 sec, and Stormstrike’s cooldown has a 100% chance to reset each time you Dodge or Parry."
            ],
            "type": "Passive",
            "prerequisite": "stormstrike",
            "icon": "icons/shaman/improved-stormstrike.jpg",
            "sourceIcon": "spell_shaman_improvedstormstrike"
          },
          {
            "id": "maelstrom-weapon",
            "name": "Maelstrom Weapon",
            "max": 5,
            "row": 6,
            "col": 3,
            "description": "When you deal damage with a melee attack, you have a chance to reduce the cast time and Mana cost of your next Lightning Bolt spell by 4%. Stacks up to 5 times. Lasts 30 sec.",
            "rankDescriptions": [
              "When you deal damage with a melee attack, you have a chance to reduce the cast time and Mana cost of your next Lightning Bolt spell by 4%. Stacks up to 5 times. Lasts 30 sec.",
              "When you deal damage with a melee attack, you have a chance to reduce the cast time and Mana cost of your next Lightning Bolt spell by 8%. Stacks up to 5 times. Lasts 30 sec.",
              "When you deal damage with a melee attack, you have a chance to reduce the cast time and Mana cost of your next Lightning Bolt spell by 12%. Stacks up to 5 times. Lasts 30 sec.",
              "When you deal damage with a melee attack, you have a chance to reduce the cast time and Mana cost of your next Lightning Bolt spell by 16%. Stacks up to 5 times. Lasts 30 sec.",
              "When you deal damage with a melee attack, you have a chance to reduce the cast time and Mana cost of your next Lightning Bolt spell by 20%. Stacks up to 5 times. Lasts 30 sec."
            ],
            "type": "Passive",
            "icon": "icons/shaman/maelstrom-weapon.jpg",
            "sourceIcon": "spell_shaman_maelstromweapon"
          },
          {
            "id": "rage-of-the-farseer",
            "name": "Rage of the Farseer",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Increases your attack speed by 30% for 25 sec.",
            "type": "Active",
            "details": [
              "Instant",
              "3 min cooldown"
            ],
            "prerequisite": "mental-quickness",
            "icon": "icons/shaman/rage-of-the-farseer.jpg",
            "sourceIcon": "spell_nature_bloodlust"
          }
        ]
      },
      {
        "id": "restoration",
        "name": "Restoration",
        "role": "Restoration",
        "color": "#66cea0",
        "icon": "icons/shaman/restoration.jpg",
        "talents": [
          {
            "id": "improved-healing-wave",
            "name": "Improved Healing Wave",
            "max": 5,
            "row": 1,
            "col": 2,
            "description": "Reduces the casting time of your Healing Wave spell by 0.1 sec.",
            "rankDescriptions": [
              "Reduces the casting time of your Healing Wave spell by 0.1 sec.",
              "Reduces the casting time of your Healing Wave spell by 0.2 sec.",
              "Reduces the casting time of your Healing Wave spell by 0.3 sec.",
              "Reduces the casting time of your Healing Wave spell by 0.4 sec.",
              "Reduces the casting time of your Healing Wave spell by 0.5 sec."
            ],
            "type": "Passive",
            "icon": "icons/shaman/improved-healing-wave.jpg",
            "sourceIcon": "spell_nature_magicimmunity"
          },
          {
            "id": "tidal-focus",
            "name": "Tidal Focus",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Reduces the Mana cost of your healing spells by 1% and improves your chance to hit by 1%.",
            "rankDescriptions": [
              "Reduces the Mana cost of your healing spells by 1% and improves your chance to hit by 1%.",
              "Reduces the Mana cost of your healing spells by 2% and improves your chance to hit by 2%.",
              "Reduces the Mana cost of your healing spells by 3% and improves your chance to hit by 3%.",
              "Reduces the Mana cost of your healing spells by 4% and improves your chance to hit by 4%.",
              "Reduces the Mana cost of your healing spells by 5% and improves your chance to hit by 5%."
            ],
            "type": "Passive",
            "icon": "icons/shaman/tidal-focus.jpg",
            "sourceIcon": "spell_frost_manarecharge"
          },
          {
            "id": "mindfulness",
            "name": "Mindfulness",
            "max": 3,
            "row": 2,
            "col": 1,
            "description": "Allows 17% of your Mana regeneration to continue while casting.",
            "rankDescriptions": [
              "Allows 17% of your Mana regeneration to continue while casting.",
              "Allows 33% of your Mana regeneration to continue while casting.",
              "Allows 50% of your Mana regeneration to continue while casting."
            ],
            "type": "Passive",
            "icon": "icons/shaman/mindfulness.jpg",
            "sourceIcon": "spell_nature_sleep"
          },
          {
            "id": "natural-grace",
            "name": "Natural Grace",
            "max": 3,
            "row": 2,
            "col": 2,
            "description": "Reduces the threat generated by your spells by 5%.",
            "rankDescriptions": [
              "Reduces the threat generated by your spells by 5%.",
              "Reduces the threat generated by your spells by 10%.",
              "Reduces the threat generated by your spells by 15%."
            ],
            "type": "Passive",
            "icon": "icons/shaman/natural-grace.jpg",
            "sourceIcon": "spell_nature_healingtouch"
          },
          {
            "id": "totemic-focus",
            "name": "Totemic Focus",
            "max": 5,
            "row": 2,
            "col": 3,
            "description": "Reduces the Mana cost of your totems and any spells that summon or move them by 5%.",
            "rankDescriptions": [
              "Reduces the Mana cost of your totems and any spells that summon or move them by 5%.",
              "Reduces the Mana cost of your totems and any spells that summon or move them by 10%.",
              "Reduces the Mana cost of your totems and any spells that summon or move them by 15%.",
              "Reduces the Mana cost of your totems and any spells that summon or move them by 20%.",
              "Reduces the Mana cost of your totems and any spells that summon or move them by 25%."
            ],
            "type": "Passive",
            "icon": "icons/shaman/totemic-focus.jpg",
            "sourceIcon": "spell_nature_moonglow"
          },
          {
            "id": "improved-reincarnation",
            "name": "Improved Reincarnation",
            "max": 2,
            "row": 2,
            "col": 4,
            "description": "Reduces the cooldown of your Reincarnation spell by 10 min, increases your maximum health by 2%, and increases the amount of health and Mana you reincarnate with by an additional 10%.",
            "rankDescriptions": [
              "Reduces the cooldown of your Reincarnation spell by 10 min, increases your maximum health by 2%, and increases the amount of health and Mana you reincarnate with by an additional 10%.",
              "Reduces the cooldown of your Reincarnation spell by 20 min, increases your maximum health by 4%, and increases the amount of health and Mana you reincarnate with by an additional 20%."
            ],
            "type": "Passive",
            "icon": "icons/shaman/improved-reincarnation.jpg",
            "sourceIcon": "spell_nature_reincarnation"
          },
          {
            "id": "ancestral-healing",
            "name": "Ancestral Healing",
            "max": 3,
            "row": 3,
            "col": 1,
            "description": "Increases your target’s armor value by 8% for 15 sec after getting a critical effect from one of your healing spells.",
            "rankDescriptions": [
              "Increases your target’s armor value by 8% for 15 sec after getting a critical effect from one of your healing spells.",
              "Increases your target’s armor value by 17% for 15 sec after getting a critical effect from one of your healing spells.",
              "Increases your target’s armor value by 25% for 15 sec after getting a critical effect from one of your healing spells."
            ],
            "type": "Passive",
            "icon": "icons/shaman/ancestral-healing.jpg",
            "sourceIcon": "spell_nature_undyingstrength"
          },
          {
            "id": "healing-focus",
            "name": "Healing Focus",
            "max": 3,
            "row": 3,
            "col": 2,
            "description": "Gives you a 23% chance to avoid interruption caused by damage while casting any healing spell.",
            "rankDescriptions": [
              "Gives you a 23% chance to avoid interruption caused by damage while casting any healing spell.",
              "Gives you a 47% chance to avoid interruption caused by damage while casting any healing spell.",
              "Gives you a 70% chance to avoid interruption caused by damage while casting any healing spell."
            ],
            "type": "Passive",
            "icon": "icons/shaman/healing-focus.jpg",
            "sourceIcon": "spell_nature_healingwavelesser"
          },
          {
            "id": "water-shield",
            "name": "Water Shield",
            "max": 1,
            "row": 3,
            "col": 3,
            "description": "The caster is surrounded by 3 globes of water. When a spell, melee, or ranged attack hits the caster or when one of the caster’s spells gets a critical result, 2% of maximum mana is restored to the caster, expending one water globe. Only one globe will activate every few seconds. Lasts 10 min.\n\nOnly one Elemental Shield can be active on the Shaman at any one time.",
            "type": "Active",
            "details": [
              "Instant"
            ],
            "icon": "icons/shaman/water-shield.jpg",
            "sourceIcon": "ability_shaman_watershield"
          },
          {
            "id": "tidal-mastery",
            "name": "Tidal Mastery",
            "max": 5,
            "row": 4,
            "col": 1,
            "description": "Increases the critical effect chance of your healing spells by 1%.",
            "rankDescriptions": [
              "Increases the critical effect chance of your healing spells by 1%.",
              "Increases the critical effect chance of your healing spells by 2%.",
              "Increases the critical effect chance of your healing spells by 3%.",
              "Increases the critical effect chance of your healing spells by 4%.",
              "Increases the critical effect chance of your healing spells by 5%."
            ],
            "type": "Passive",
            "icon": "icons/shaman/tidal-mastery.jpg",
            "sourceIcon": "spell_nature_tranquility"
          },
          {
            "id": "restorative-totems",
            "name": "Restorative Totems",
            "max": 5,
            "row": 4,
            "col": 2,
            "description": "Increases the effect of your Mana Spring Totem by 5% and increases the effect of your Healing Stream Totem by 10%.",
            "rankDescriptions": [
              "Increases the effect of your Mana Spring Totem by 5% and increases the effect of your Healing Stream Totem by 10%.",
              "Increases the effect of your Mana Spring Totem by 10% and increases the effect of your Healing Stream Totem by 20%.",
              "Increases the effect of your Mana Spring Totem by 15% and increases the effect of your Healing Stream Totem by 30%.",
              "Increases the effect of your Mana Spring Totem by 20% and increases the effect of your Healing Stream Totem by 40%.",
              "Increases the effect of your Mana Spring Totem by 25% and increases the effect of your Healing Stream Totem by 50%."
            ],
            "type": "Passive",
            "icon": "icons/shaman/restorative-totems.jpg",
            "sourceIcon": "spell_nature_manaregentotem"
          },
          {
            "id": "mana-tide-totem",
            "name": "Mana Tide Totem",
            "max": 1,
            "row": 4,
            "col": 3,
            "description": "Summons a Mana Tide Totem with 5 health at the feet of the caster for 12 sec that restores 88 mana every 3 seconds to group members within 30 yards.",
            "type": "Active",
            "details": [
              "10 Mana",
              "Instant",
              "5 min cooldown"
            ],
            "icon": "icons/shaman/mana-tide-totem.jpg",
            "sourceIcon": "spell_frost_summonwaterelemental"
          },
          {
            "id": "healing-way",
            "name": "Healing Way",
            "max": 3,
            "row": 5,
            "col": 2,
            "description": "Increases the amount healed by your Healing Wave spell by 8%.",
            "rankDescriptions": [
              "Increases the amount healed by your Healing Wave spell by 8%.",
              "Increases the amount healed by your Healing Wave spell by 17%.",
              "Increases the amount healed by your Healing Wave spell by 25%."
            ],
            "type": "Passive",
            "icon": "icons/shaman/healing-way.jpg",
            "sourceIcon": "spell_nature_healingway"
          },
          {
            "id": "natures-swiftness",
            "name": "Nature’s Swiftness",
            "max": 1,
            "row": 5,
            "col": 3,
            "description": "When activated, your next Nature spell with a casting time less than 10 sec. becomes an instant cast spell.",
            "type": "Active",
            "details": [
              "Instant",
              "3 min cooldown"
            ],
            "icon": "icons/shaman/natures-swiftness.jpg",
            "sourceIcon": "spell_nature_ravenform"
          },
          {
            "id": "purification",
            "name": "Purification",
            "max": 5,
            "row": 6,
            "col": 3,
            "description": "Increases the effectiveness of your healing spells by 2%.",
            "rankDescriptions": [
              "Increases the effectiveness of your healing spells by 2%.",
              "Increases the effectiveness of your healing spells by 4%.",
              "Increases the effectiveness of your healing spells by 6%.",
              "Increases the effectiveness of your healing spells by 8%.",
              "Increases the effectiveness of your healing spells by 10%."
            ],
            "type": "Passive",
            "icon": "icons/shaman/purification.jpg",
            "sourceIcon": "spell_frost_wizardmark"
          },
          {
            "id": "riptide",
            "name": "Riptide",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Heals a friendly target for 486 to 534, an additional 445 over 15 sec, and increases the effectiveness of your Chain Heal casts directly on that target by 25%.",
            "type": "Active",
            "details": [
              "245 Mana",
              "40 yd range",
              "Instant",
              "6 sec cooldown"
            ],
            "prerequisite": "healing-way",
            "icon": "icons/shaman/riptide.jpg",
            "sourceIcon": "spell_nature_riptide"
          }
        ]
      }
    ]
  },
  "warlock": {
    "version": 6,
    "gameClass": "warlock",
    "name": "Warlock",
    "color": "#9482c9",
    "legacyBuilds": {
      "FF2": [
        [
          "improved-life-tap",
          2
        ],
        [
          "suppression",
          5
        ],
        [
          "improved-corruption",
          5
        ],
        [
          "malediction",
          5
        ],
        [
          "soul-harvesting",
          2
        ],
        [
          "improved-drains",
          3
        ],
        [
          "improved-bane-of-agony",
          2
        ],
        [
          "fel-concentration",
          3
        ],
        [
          "amplify-curse",
          1
        ],
        [
          "pandemic",
          3
        ],
        [
          "malevolence",
          5
        ],
        [
          "nightfall",
          2
        ],
        [
          "curse-of-exhaustion",
          1
        ],
        [
          "siphon-life",
          1
        ],
        [
          "soul-siphon",
          3
        ],
        [
          "shadow-mastery",
          5
        ],
        [
          "wrack",
          1
        ],
        [
          "improved-health-funnel",
          2
        ],
        [
          "improved-imp",
          3
        ],
        [
          "demonic-embrace",
          5
        ],
        [
          "unholy-power",
          5
        ],
        [
          "demonic-aegis",
          2
        ],
        [
          "improved-voidwalker",
          3
        ],
        [
          "fel-vitality",
          3
        ],
        [
          "demonic-energies",
          2
        ],
        [
          "improved-sayaad",
          3
        ],
        [
          "demonic-sacrifice",
          1
        ],
        [
          "master-summoner",
          2
        ],
        [
          "decimation",
          2
        ],
        [
          "fel-domination",
          1
        ],
        [
          "demonic-brand",
          3
        ],
        [
          "improved-felhunter",
          3
        ],
        [
          "soul-link",
          1
        ],
        [
          "demonic-knowledge",
          3
        ],
        [
          "master-demonologist",
          5
        ],
        [
          "demonic-pact",
          1
        ],
        [
          "destructive-reach",
          2
        ],
        [
          "improved-shadow-bolt",
          5
        ],
        [
          "bane",
          5
        ],
        [
          "molten-skin",
          5
        ],
        [
          "cataclysm",
          3
        ],
        [
          "aftermath",
          5
        ],
        [
          "ruin",
          5
        ],
        [
          "shadowburn",
          1
        ],
        [
          "intensity",
          3
        ],
        [
          "agonizing-flames",
          3
        ],
        [
          "conflagrate",
          1
        ],
        [
          "pyroclasm",
          2
        ],
        [
          "bane-of-havoc",
          1
        ],
        [
          "fire-and-brimstone",
          3
        ],
        [
          "shadow-and-flame",
          5
        ],
        [
          "incinerate",
          1
        ]
      ]
    },
    "trees": [
      {
        "id": "affliction",
        "name": "Affliction",
        "role": "Affliction",
        "color": "#a17fcb",
        "icon": "icons/warlock/affliction.jpg",
        "talents": [
          {
            "id": "improved-life-tap",
            "name": "Improved Life Tap",
            "max": 2,
            "row": 1,
            "col": 1,
            "description": "Increases the amount of Mana awarded by your Life Tap spell by 10%.",
            "rankDescriptions": [
              "Increases the amount of Mana awarded by your Life Tap spell by 10%.",
              "Increases the amount of Mana awarded by your Life Tap spell by 20%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/improved-life-tap.jpg",
            "sourceIcon": "spell_shadow_burningspirit"
          },
          {
            "id": "suppression",
            "name": "Suppression",
            "max": 5,
            "row": 1,
            "col": 2,
            "description": "Improves your chance to hit by 1% and reduces all threat you generate by 4%.",
            "rankDescriptions": [
              "Improves your chance to hit by 1% and reduces all threat you generate by 4%.",
              "Improves your chance to hit by 2% and reduces all threat you generate by 8%.",
              "Improves your chance to hit by 3% and reduces all threat you generate by 12%.",
              "Improves your chance to hit by 4% and reduces all threat you generate by 16%.",
              "Improves your chance to hit by 5% and reduces all threat you generate by 20%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/suppression.jpg",
            "sourceIcon": "spell_shadow_unsummonbuilding"
          },
          {
            "id": "improved-corruption",
            "name": "Improved Corruption",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Reduces the casting time of your Corruption spell by 0.4 sec and increases the damage it deals by 2%.",
            "rankDescriptions": [
              "Reduces the casting time of your Corruption spell by 0.4 sec and increases the damage it deals by 2%.",
              "Reduces the casting time of your Corruption spell by 0.8 sec and increases the damage it deals by 4%.",
              "Reduces the casting time of your Corruption spell by 1.2 sec and increases the damage it deals by 6%.",
              "Reduces the casting time of your Corruption spell by 1.6 sec and increases the damage it deals by 8%.",
              "Reduces the casting time of your Corruption spell by 2 sec and increases the damage it deals by 10%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/improved-corruption.jpg",
            "sourceIcon": "spell_shadow_abominationexplosion"
          },
          {
            "id": "grim-reach",
            "name": "Grim Reach",
            "max": 2,
            "row": 2,
            "col": 1,
            "description": "Increases the range of your Affliction spells by 10%.",
            "type": "Passive",
            "sourceIcon": "spell_shadow_callofbone",
            "rankDescriptions": [
              "Increases the range of your Affliction spells by 10%.",
              "Increases the range of your Affliction spells by 20%."
            ]
          },
          {
            "id": "soul-harvest",
            "name": "Soul Harvest",
            "max": 2,
            "row": 2,
            "col": 2,
            "description": "Killing a non-trivial target afflicted by your Drain Soul increases your Mana regeneration by 50% for 10 sec and allows 50% of normal Mana regeneration to continue while casting.",
            "rankDescriptions": [
              "Killing a non-trivial target afflicted by your Drain Soul increases your Mana regeneration by 50% for 10 sec and allows 50% of normal Mana regeneration to continue while casting.",
              "Killing a non-trivial target afflicted by your Drain Soul increases your Mana regeneration by 100% for 10 sec and allows 100% of normal Mana regeneration to continue while casting."
            ],
            "type": "Passive",
            "icon": "icons/warlock/soul-harvest.jpg",
            "sourceIcon": "inv_elemental_primal_shadow"
          },
          {
            "id": "improved-drains",
            "name": "Improved Drains",
            "max": 3,
            "row": 2,
            "col": 3,
            "description": "Increases health drained or damage done by your Drain Life, Drain Soul, and Wrack spells by 7%.",
            "rankDescriptions": [
              "Increases health drained or damage done by your Drain Life, Drain Soul, and Wrack spells by 7%.",
              "Increases health drained or damage done by your Drain Life, Drain Soul, and Wrack spells by 13%.",
              "Increases health drained or damage done by your Drain Life, Drain Soul, and Wrack spells by 20%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/improved-drains.jpg",
            "sourceIcon": "spell_shadow_haunting"
          },
          {
            "id": "improved-bane-of-agony",
            "name": "Improved Bane of Agony",
            "max": 2,
            "row": 3,
            "col": 1,
            "description": "Increases the damage done by your Bane of Agony by 5%.",
            "rankDescriptions": [
              "Increases the damage done by your Bane of Agony by 5%.",
              "Increases the damage done by your Bane of Agony by 10%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/improved-bane-of-agony.jpg",
            "sourceIcon": "spell_shadow_curseofsargeras"
          },
          {
            "id": "fel-concentration",
            "name": "Fel Concentration",
            "max": 3,
            "row": 3,
            "col": 2,
            "description": "Gives you a 23% chance to avoid interruption caused by damage while channeling or casting your Drain Life, Drain Mana, Drain Soul, or Wrack spells.",
            "rankDescriptions": [
              "Gives you a 23% chance to avoid interruption caused by damage while channeling or casting your Drain Life, Drain Mana, Drain Soul, or Wrack spells.",
              "Gives you a 47% chance to avoid interruption caused by damage while channeling or casting your Drain Life, Drain Mana, Drain Soul, or Wrack spells.",
              "Gives you a 70% chance to avoid interruption caused by damage while channeling or casting your Drain Life, Drain Mana, Drain Soul, or Wrack spells."
            ],
            "type": "Passive",
            "icon": "icons/warlock/fel-concentration.jpg",
            "sourceIcon": "spell_shadow_fingerofdeath"
          },
          {
            "id": "amplify-curse",
            "name": "Amplify Curse",
            "max": 1,
            "row": 3,
            "col": 3,
            "description": "Increases the effect of your next Curse of Weakness or Bane of Agony by 50%, or your next Curse of Exhaustion by 50%. Lasts 30 sec.",
            "type": "Active",
            "details": [
              "Instant",
              "3 min cooldown"
            ],
            "icon": "icons/warlock/amplify-curse.jpg",
            "sourceIcon": "spell_shadow_contagion"
          },
          {
            "id": "pandemic",
            "name": "Pandemic",
            "max": 3,
            "row": 3,
            "col": 4,
            "description": "Increases the critical strike damage bonus of your Corruption, Bane of Agony, Bane of Doom, Drain Soul, Drain Life, Siphon Life, and Wrack spells by 33%.",
            "rankDescriptions": [
              "Increases the critical strike damage bonus of your Corruption, Bane of Agony, Bane of Doom, Drain Soul, Drain Life, Siphon Life, and Wrack spells by 33%.",
              "Increases the critical strike damage bonus of your Corruption, Bane of Agony, Bane of Doom, Drain Soul, Drain Life, Siphon Life, and Wrack spells by 67%.",
              "Increases the critical strike damage bonus of your Corruption, Bane of Agony, Bane of Doom, Drain Soul, Drain Life, Siphon Life, and Wrack spells by 100%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/pandemic.jpg",
            "sourceIcon": "spell_shadow_unstableaffliction_2"
          },
          {
            "id": "malevolence",
            "name": "Malevolence",
            "max": 5,
            "row": 4,
            "col": 1,
            "description": "Increases the critical effect chance of your Shadow spells by 1%.",
            "rankDescriptions": [
              "Increases the critical effect chance of your Shadow spells by 1%.",
              "Increases the critical effect chance of your Shadow spells by 2%.",
              "Increases the critical effect chance of your Shadow spells by 3%.",
              "Increases the critical effect chance of your Shadow spells by 4%.",
              "Increases the critical effect chance of your Shadow spells by 5%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/malevolence.jpg",
            "sourceIcon": "spell_shadow_focusedpower"
          },
          {
            "id": "nightfall",
            "name": "Nightfall",
            "max": 2,
            "row": 4,
            "col": 2,
            "description": "Gives your Corruption, Drain Soul, Drain Life, and Wrack spells a 2% chance to cause you to enter a Shadow Trance after damaging the opponent. The Shadow Trance reduces the casting time of your next Shadow Bolt spell by 100%.",
            "rankDescriptions": [
              "Gives your Corruption, Drain Soul, Drain Life, and Wrack spells a 2% chance to cause you to enter a Shadow Trance after damaging the opponent. The Shadow Trance reduces the casting time of your next Shadow Bolt spell by 100%.",
              "Gives your Corruption, Drain Soul, Drain Life, and Wrack spells a 4% chance to cause you to enter a Shadow Trance after damaging the opponent. The Shadow Trance reduces the casting time of your next Shadow Bolt spell by 100%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/nightfall.jpg",
            "sourceIcon": "spell_shadow_twilight"
          },
          {
            "id": "curse-of-exhaustion",
            "name": "Curse of Exhaustion",
            "max": 1,
            "row": 4,
            "col": 3,
            "description": "Reduces the target’s movement speed by 30% for 12 sec. Only one Curse per Warlock can be active on any one target.",
            "type": "Active",
            "details": [
              "8% of base Mana",
              "30 yd range",
              "Instant"
            ],
            "prerequisite": "amplify-curse",
            "icon": "icons/warlock/curse-of-exhaustion.jpg",
            "sourceIcon": "spell_shadow_grimward"
          },
          {
            "id": "siphon-life",
            "name": "Siphon Life",
            "max": 1,
            "row": 5,
            "col": 2,
            "description": "Transfers 11 health from the target to the caster every 3 sec. Lasts 30 sec.",
            "type": "Active",
            "details": [
              "150 Mana",
              "30 yd range",
              "Instant"
            ],
            "icon": "icons/warlock/siphon-life.jpg",
            "sourceIcon": "spell_shadow_requiem"
          },
          {
            "id": "soul-siphon",
            "name": "Soul Siphon",
            "max": 3,
            "row": 5,
            "col": 3,
            "description": "Increases the damage done or health drained by your Drain Life, Drain Soul, and Wrack spells by 4% per each of your other Affliction effects active on the target, up to a maximum increase of 12%.",
            "rankDescriptions": [
              "Increases the damage done or health drained by your Drain Life, Drain Soul, and Wrack spells by 4% per each of your other Affliction effects active on the target, up to a maximum increase of 12%.",
              "Increases the damage done or health drained by your Drain Life, Drain Soul, and Wrack spells by 8% per each of your other Affliction effects active on the target, up to a maximum increase of 24%.",
              "Increases the damage done or health drained by your Drain Life, Drain Soul, and Wrack spells by 12% per each of your other Affliction effects active on the target, up to a maximum increase of 36%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/soul-siphon.jpg",
            "sourceIcon": "spell_shadow_lifedrain02"
          },
          {
            "id": "shadow-mastery",
            "name": "Shadow Mastery",
            "max": 5,
            "row": 6,
            "col": 3,
            "description": "Increases the damage dealt or life drained by your Shadow spells by 2%.",
            "rankDescriptions": [
              "Increases the damage dealt or life drained by your Shadow spells by 2%.",
              "Increases the damage dealt or life drained by your Shadow spells by 4%.",
              "Increases the damage dealt or life drained by your Shadow spells by 6%.",
              "Increases the damage dealt or life drained by your Shadow spells by 8%.",
              "Increases the damage dealt or life drained by your Shadow spells by 10%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/shadow-mastery.jpg",
            "sourceIcon": "spell_shadow_shadetruesight"
          },
          {
            "id": "wrack",
            "name": "Wrack",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Tears the target apart from within, inflicting 36 Shadow damage every 1 sec and increasing the damage they take from your other Shadow damage over time effects by 10% for 6 sec.",
            "type": "Active",
            "details": [
              "200 Mana",
              "30 yd range",
              "Instant"
            ],
            "prerequisite": "siphon-life",
            "icon": "icons/warlock/wrack.jpg",
            "sourceIcon": "ability_deathknight_hemorrhagicfever"
          }
        ]
      },
      {
        "id": "demonology",
        "name": "Demonology",
        "role": "Demonology",
        "color": "#70aa6e",
        "icon": "icons/warlock/demonology.jpg",
        "talents": [
          {
            "id": "improved-health-funnel",
            "name": "Improved Health Funnel",
            "max": 2,
            "row": 1,
            "col": 1,
            "description": "Increases the amount of health transferred by your Health Funnel spell by 20%, reduces its health cost by 15%, and reduces all threat your Health Funnel generates by 50%. Allows Health Funnel to be used regardless of your demon’s health.",
            "rankDescriptions": [
              "Increases the amount of health transferred by your Health Funnel spell by 20%, reduces its health cost by 15%, and reduces all threat your Health Funnel generates by 50%. Allows Health Funnel to be used regardless of your demon’s health.",
              "Increases the amount of health transferred by your Health Funnel spell by 40%, reduces its health cost by 30%, and reduces all threat your Health Funnel generates by 100%. Allows Health Funnel to be used regardless of your demon’s health."
            ],
            "type": "Passive",
            "icon": "icons/warlock/improved-health-funnel.jpg",
            "sourceIcon": "spell_shadow_lifedrain"
          },
          {
            "id": "improved-imp",
            "name": "Improved Imp",
            "max": 3,
            "row": 1,
            "col": 2,
            "description": "Increases the damage of your Imp’s Firebolt spell by 10% and the effect of its Fire Shield spell by 10%.",
            "rankDescriptions": [
              "Increases the damage of your Imp’s Firebolt spell by 10% and the effect of its Fire Shield spell by 10%.",
              "Increases the damage of your Imp’s Firebolt spell by 20% and the effect of its Fire Shield spell by 20%.",
              "Increases the damage of your Imp’s Firebolt spell by 30% and the effect of its Fire Shield spell by 30%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/improved-imp.jpg",
            "sourceIcon": "spell_shadow_summonimp"
          },
          {
            "id": "demonic-embrace",
            "name": "Demonic Embrace",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Increases your total Stamina by 3%.",
            "rankDescriptions": [
              "Increases your total Stamina by 3%.",
              "Increases your total Stamina by 6%.",
              "Increases your total Stamina by 9%.",
              "Increases your total Stamina by 12%.",
              "Increases your total Stamina by 15%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/demonic-embrace.jpg",
            "sourceIcon": "spell_shadow_metamorphosis"
          },
          {
            "id": "unholy-power",
            "name": "Unholy Power",
            "max": 5,
            "row": 1,
            "col": 4,
            "description": "Increases all damage done by your Imp, Voidwalker, Succubus, Incubus, and Felhunter pets by 2%.",
            "rankDescriptions": [
              "Increases all damage done by your Imp, Voidwalker, Succubus, Incubus, and Felhunter pets by 2%.",
              "Increases all damage done by your Imp, Voidwalker, Succubus, Incubus, and Felhunter pets by 4%.",
              "Increases all damage done by your Imp, Voidwalker, Succubus, Incubus, and Felhunter pets by 6%.",
              "Increases all damage done by your Imp, Voidwalker, Succubus, Incubus, and Felhunter pets by 8%.",
              "Increases all damage done by your Imp, Voidwalker, Succubus, Incubus, and Felhunter pets by 10%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/unholy-power.jpg",
            "sourceIcon": "spell_shadow_shadowworddominate"
          },
          {
            "id": "demonic-aegis",
            "name": "Demonic Aegis",
            "max": 2,
            "row": 2,
            "col": 1,
            "description": "Increases the effectiveness of your Demon Skin and Demon Armor spells by 15%.",
            "rankDescriptions": [
              "Increases the effectiveness of your Demon Skin and Demon Armor spells by 15%.",
              "Increases the effectiveness of your Demon Skin and Demon Armor spells by 30%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/demonic-aegis.jpg",
            "sourceIcon": "spell_shadow_ragingscream"
          },
          {
            "id": "improved-voidwalker",
            "name": "Improved Voidwalker",
            "max": 3,
            "row": 2,
            "col": 2,
            "description": "Increases the effectiveness of your Voidwalker’s Torment, Consume Shadows, Sacrifice, and Suffering spells by 10%.",
            "rankDescriptions": [
              "Increases the effectiveness of your Voidwalker’s Torment, Consume Shadows, Sacrifice, and Suffering spells by 10%.",
              "Increases the effectiveness of your Voidwalker’s Torment, Consume Shadows, Sacrifice, and Suffering spells by 20%.",
              "Increases the effectiveness of your Voidwalker’s Torment, Consume Shadows, Sacrifice, and Suffering spells by 30%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/improved-voidwalker.jpg",
            "sourceIcon": "spell_shadow_summonvoidwalker"
          },
          {
            "id": "fel-vitality",
            "name": "Fel Vitality",
            "max": 3,
            "row": 2,
            "col": 3,
            "description": "Increases the maximum health and Mana of your Imp, Voidwalker, Succubus, Incubus, and Felhunter by 5%, and increases your maximum Mana by 5%.",
            "rankDescriptions": [
              "Increases the maximum health and Mana of your Imp, Voidwalker, Succubus, Incubus, and Felhunter by 5%, and increases your maximum Mana by 5%.",
              "Increases the maximum health and Mana of your Imp, Voidwalker, Succubus, Incubus, and Felhunter by 10%, and increases your maximum Mana by 10%.",
              "Increases the maximum health and Mana of your Imp, Voidwalker, Succubus, Incubus, and Felhunter by 15%, and increases your maximum Mana by 15%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/fel-vitality.jpg",
            "sourceIcon": "spell_shadow_demonictactics"
          },
          {
            "id": "demonic-energies",
            "name": "Demonic Energies",
            "max": 2,
            "row": 2,
            "col": 4,
            "description": "You heal your pet for 8% of all spell damage you deal. When you gain Mana from Life Tap, your summoned demon gains 50% of the Mana you gain.",
            "rankDescriptions": [
              "You heal your pet for 8% of all spell damage you deal. When you gain Mana from Life Tap, your summoned demon gains 50% of the Mana you gain.",
              "You heal your pet for 15% of all spell damage you deal. When you gain Mana from Life Tap, your summoned demon gains 100% of the Mana you gain."
            ],
            "type": "Passive",
            "icon": "icons/warlock/demonic-energies.jpg",
            "sourceIcon": "spell_shadow_felmending"
          },
          {
            "id": "improved-sayaad",
            "name": "Improved Sayaad",
            "max": 3,
            "row": 3,
            "col": 1,
            "description": "Increases the effect of your Succubus’ and Incubus’ Lash of Pain and Soothing Kiss spells by 10%, and increases the duration of your Succubus’ and Incubus’ Seduction and Lesser Invisibility spells by 10%.",
            "rankDescriptions": [
              "Increases the effect of your Succubus’ and Incubus’ Lash of Pain and Soothing Kiss spells by 10%, and increases the duration of your Succubus’ and Incubus’ Seduction and Lesser Invisibility spells by 10%.",
              "Increases the effect of your Succubus’ and Incubus’ Lash of Pain and Soothing Kiss spells by 20%, and increases the duration of your Succubus’ and Incubus’ Seduction and Lesser Invisibility spells by 20%.",
              "Increases the effect of your Succubus’ and Incubus’ Lash of Pain and Soothing Kiss spells by 30%, and increases the duration of your Succubus’ and Incubus’ Seduction and Lesser Invisibility spells by 30%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/improved-sayaad.jpg",
            "sourceIcon": "ability_warlock_randomizesuccubusincubus"
          },
          {
            "id": "demonic-sacrifice",
            "name": "Demonic Sacrifice",
            "max": 1,
            "row": 3,
            "col": 2,
            "description": "When activated, sacrifices your summoned Demon to enhance the opposing aspect of your power, granting you an effect that lasts 2 hrs. The effect is canceled if any Demon is summoned.\n\nImp: Increases your Shadow damage by 15%.\n\nVoidwalker: Restores 2% of your total Mana every 4 sec.\n\nSuccubus/Incubus: Increases your Fire damage by 15%.\n\nFelhunter: Restores 3% of your total Health every 4 sec.",
            "type": "Active",
            "details": [
              "100 yd range",
              "Instant"
            ],
            "icon": "icons/warlock/demonic-sacrifice.jpg",
            "sourceIcon": "spell_shadow_psychicscream"
          },
          {
            "id": "master-summoner",
            "name": "Master Summoner",
            "max": 2,
            "row": 3,
            "col": 3,
            "description": "Reduces the casting time of your Imp, Voidwalker, Succubus, Incubus, and Felhunter Summoning spells by 2 sec and the Mana cost by 20%.",
            "rankDescriptions": [
              "Reduces the casting time of your Imp, Voidwalker, Succubus, Incubus, and Felhunter Summoning spells by 2 sec and the Mana cost by 20%.",
              "Reduces the casting time of your Imp, Voidwalker, Succubus, Incubus, and Felhunter Summoning spells by 4 sec and the Mana cost by 40%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/master-summoner.jpg",
            "sourceIcon": "spell_shadow_impphaseshift"
          },
          {
            "id": "decimation",
            "name": "Decimation",
            "max": 2,
            "row": 4,
            "col": 1,
            "description": "Reduces the cooldown of your Soul Fire spell by 45%. When you cast Shadow Bolt or Searing Pain on an enemy below 35% health, they deal 3% increased damage, and for the next 10 sec your Soul Fire spell has its cast time reduced by 20% and costs no Soul Shards.",
            "rankDescriptions": [
              "Reduces the cooldown of your Soul Fire spell by 45%. When you cast Shadow Bolt or Searing Pain on an enemy below 35% health, they deal 3% increased damage, and for the next 10 sec your Soul Fire spell has its cast time reduced by 20% and costs no Soul Shards.",
              "Reduces the cooldown of your Soul Fire spell by 90%. When you cast Shadow Bolt or Searing Pain on an enemy below 35% health, they deal 6% increased damage, and for the next 10 sec your Soul Fire spell has its cast time reduced by 40% and costs no Soul Shards."
            ],
            "type": "Passive",
            "icon": "icons/warlock/decimation.jpg",
            "sourceIcon": "spell_fire_fireball02"
          },
          {
            "id": "fel-domination",
            "name": "Fel Domination",
            "max": 1,
            "row": 4,
            "col": 3,
            "description": "Your next Imp, Voidwalker, Succubus, Incubus, or Felhunter Summon spell has its casting time reduced by 6 sec and its Mana cost reduced by 50%.",
            "type": "Active",
            "details": [
              "Instant",
              "5 min cooldown"
            ],
            "prerequisite": "master-summoner",
            "icon": "icons/warlock/fel-domination.jpg",
            "sourceIcon": "spell_nature_removecurse"
          },
          {
            "id": "demonic-brand",
            "name": "Demonic Brand",
            "max": 3,
            "row": 4,
            "col": 4,
            "description": "Your Searing Pain generates 17% less threat and brands the target for 10 sec. Your pet’s next 2 attacks against the target deal ((((60 - 26) * 1.5) + 14 + (0.078 * ((Shadow spell power)))) * (1 * 1 * 1)) to ((((60 - 26) * 1.5) + 17 + (0.078 * ((Shadow spell power)))) * (1 * 1 * 1)) Fire or Shadow damage based on the pet. If Shadow damage is dealt, it has high threat.",
            "rankDescriptions": [
              "Your Searing Pain generates 17% less threat and brands the target for 10 sec. Your pet’s next 2 attacks against the target deal ((((60 - 26) * 1.5) + 14 + (0.078 * ((Shadow spell power)))) * (1 * 1 * 1)) to ((((60 - 26) * 1.5) + 17 + (0.078 * ((Shadow spell power)))) * (1 * 1 * 1)) Fire or Shadow damage based on the pet. If Shadow damage is dealt, it has high threat.",
              "Your Searing Pain generates 33% less threat and brands the target for 10 sec. Your pet’s next 4 attacks against the target deal ((((60 - 26) * 1.5) + 14 + (0.078 * ((Shadow spell power)))) * (1 * 1 * 1)) to ((((60 - 26) * 1.5) + 17 + (0.078 * ((Shadow spell power)))) * (1 * 1 * 1)) Fire or Shadow damage based on the pet. If Shadow damage is dealt, it has high threat.",
              "Your Searing Pain generates 50% less threat and brands the target for 10 sec. Your pet’s next 6 attacks against the target deal ((((60 - 26) * 1.5) + 14 + (0.078 * ((Shadow spell power)))) * (1 * 1 * 1)) to ((((60 - 26) * 1.5) + 17 + (0.078 * ((Shadow spell power)))) * (1 * 1 * 1)) Fire or Shadow damage based on the pet. If Shadow damage is dealt, it has high threat."
            ],
            "type": "Passive",
            "icon": "icons/warlock/demonic-brand.jpg",
            "sourceIcon": "ability_demonhunter_chaoticimprint_fire"
          },
          {
            "id": "improved-felhunter",
            "name": "Improved Felhunter",
            "max": 3,
            "row": 5,
            "col": 1,
            "description": "Increases the Attack Power reduction of your Felhunter’s Tainted Blood, the healing of its Devour Magic, and the detection level of its Paranoia by 10%, and reduces the cooldown of its Spell Lock by 2 sec.",
            "rankDescriptions": [
              "Increases the Attack Power reduction of your Felhunter’s Tainted Blood, the healing of its Devour Magic, and the detection level of its Paranoia by 10%, and reduces the cooldown of its Spell Lock by 2 sec.",
              "Increases the Attack Power reduction of your Felhunter’s Tainted Blood, the healing of its Devour Magic, and the detection level of its Paranoia by 20%, and reduces the cooldown of its Spell Lock by 4 sec.",
              "Increases the Attack Power reduction of your Felhunter’s Tainted Blood, the healing of its Devour Magic, and the detection level of its Paranoia by 30%, and reduces the cooldown of its Spell Lock by 6 sec."
            ],
            "type": "Passive",
            "icon": "icons/warlock/improved-felhunter.jpg",
            "sourceIcon": "spell_shadow_summonfelhunter"
          },
          {
            "id": "soul-link",
            "name": "Soul Link",
            "max": 1,
            "row": 5,
            "col": 2,
            "description": "When active, 30% of all damage taken by the caster is taken by your Imp, Voidwalker, Succubus, Incubus, or Felhunter Demon instead. In addition, both the Demon and the master will inflict 3% more damage. Lasts as long as the Demon is active.",
            "type": "Active",
            "details": [
              "20% of base Mana",
              "100 yd range",
              "Instant"
            ],
            "prerequisite": "demonic-sacrifice",
            "icon": "icons/warlock/soul-link.jpg",
            "sourceIcon": "spell_shadow_gathershadows"
          },
          {
            "id": "demonic-knowledge",
            "name": "Demonic Knowledge",
            "max": 3,
            "row": 5,
            "col": 3,
            "description": "Increases your spell damage and your Demon pet’s spell damage by up to 33% of your level while you have a summoned Demon pet active.",
            "rankDescriptions": [
              "Increases your spell damage and your Demon pet’s spell damage by up to 33% of your level while you have a summoned Demon pet active.",
              "Increases your spell damage and your Demon pet’s spell damage by up to 67% of your level while you have a summoned Demon pet active.",
              "Increases your spell damage and your Demon pet’s spell damage by up to 100% of your level while you have a summoned Demon pet active."
            ],
            "type": "Passive",
            "icon": "icons/warlock/demonic-knowledge.jpg",
            "sourceIcon": "spell_shadow_improvedvampiricembrace"
          },
          {
            "id": "master-demonologist",
            "name": "Master Demonologist",
            "max": 5,
            "row": 6,
            "col": 3,
            "description": "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Increases Fire damage done by 2%.\n\nVoidwalker - Reduces Physical damage taken by 2%.\n\nSuccubus/Incubus - Increases Shadow damage done by 2%.\n\nFelhunter - Reduces Magic damage taken by 2%.",
            "rankDescriptions": [
              "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Increases Fire damage done by 2%.\n\nVoidwalker - Reduces Physical damage taken by 2%.\n\nSuccubus/Incubus - Increases Shadow damage done by 2%.\n\nFelhunter - Reduces Magic damage taken by 2%.",
              "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Increases Fire damage done by 4%.\n\nVoidwalker - Reduces Physical damage taken by 4%.\n\nSuccubus/Incubus - Increases Shadow damage done by 4%.\n\nFelhunter - Reduces Magic damage taken by 4%.",
              "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Increases Fire damage done by 6%.\n\nVoidwalker - Reduces Physical damage taken by 6%.\n\nSuccubus/Incubus - Increases Shadow damage done by 6%.\n\nFelhunter - Reduces Magic damage taken by 6%.",
              "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Increases Fire damage done by 8%.\n\nVoidwalker - Reduces Physical damage taken by 8%.\n\nSuccubus/Incubus - Increases Shadow damage done by 8%.\n\nFelhunter - Reduces Magic damage taken by 8%.",
              "Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Increases Fire damage done by 10%.\n\nVoidwalker - Reduces Physical damage taken by 10%.\n\nSuccubus/Incubus - Increases Shadow damage done by 10%.\n\nFelhunter - Reduces Magic damage taken by 10%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/master-demonologist.jpg",
            "sourceIcon": "spell_shadow_shadowpact"
          },
          {
            "id": "demonic-pact",
            "name": "Demonic Pact",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Your Demonic Sacrifice effect is no longer cancelled by summoning a different Demon pet. Resummoning the sacrificed pet will still cancel the effect.",
            "type": "Passive",
            "prerequisite": "soul-link",
            "icon": "icons/warlock/demonic-pact.jpg",
            "sourceIcon": "inv_ability_soulharvesterwarlock_demonicsoul"
          }
        ]
      },
      {
        "id": "destruction",
        "name": "Destruction",
        "role": "Destruction",
        "color": "#da7b52",
        "icon": "icons/warlock/destruction.jpg",
        "talents": [
          {
            "id": "destructive-reach",
            "name": "Destructive Reach",
            "max": 2,
            "row": 1,
            "col": 1,
            "description": "Increases the range of your Destruction spells by 10%.",
            "rankDescriptions": [
              "Increases the range of your Destruction spells by 10%.",
              "Increases the range of your Destruction spells by 20%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/destructive-reach.jpg",
            "sourceIcon": "spell_shadow_corpseexplode"
          },
          {
            "id": "improved-shadow-bolt",
            "name": "Improved Shadow Bolt",
            "max": 5,
            "row": 1,
            "col": 2,
            "description": "Your Shadow Bolt critical strikes increase Shadow damage taken by the target from your attacks by 4% for 12 sec.",
            "rankDescriptions": [
              "Your Shadow Bolt critical strikes increase Shadow damage taken by the target from your attacks by 4% for 12 sec.",
              "Your Shadow Bolt critical strikes increase Shadow damage taken by the target from your attacks by 8% for 12 sec.",
              "Your Shadow Bolt critical strikes increase Shadow damage taken by the target from your attacks by 12% for 12 sec.",
              "Your Shadow Bolt critical strikes increase Shadow damage taken by the target from your attacks by 16% for 12 sec.",
              "Your Shadow Bolt critical strikes increase Shadow damage taken by the target from your attacks by 20% for 12 sec."
            ],
            "type": "Passive",
            "icon": "icons/warlock/improved-shadow-bolt.jpg",
            "sourceIcon": "spell_shadow_shadowbolt"
          },
          {
            "id": "bane",
            "name": "Bane",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Reduces the casting time of your Shadow Bolt, Immolate, and Incinerate spells by 0.1 sec and your Soul Fire spell by 0.4 sec.",
            "rankDescriptions": [
              "Reduces the casting time of your Shadow Bolt, Immolate, and Incinerate spells by 0.1 sec and your Soul Fire spell by 0.4 sec.",
              "Reduces the casting time of your Shadow Bolt, Immolate, and Incinerate spells by 0.2 sec and your Soul Fire spell by 0.8 sec.",
              "Reduces the casting time of your Shadow Bolt, Immolate, and Incinerate spells by 0.3 sec and your Soul Fire spell by 1.2 sec.",
              "Reduces the casting time of your Shadow Bolt, Immolate, and Incinerate spells by 0.4 sec and your Soul Fire spell by 1.6 sec.",
              "Reduces the casting time of your Shadow Bolt, Immolate, and Incinerate spells by 0.5 sec and your Soul Fire spell by 2 sec."
            ],
            "type": "Passive",
            "icon": "icons/warlock/bane.jpg",
            "sourceIcon": "spell_shadow_deathpact"
          },
          {
            "id": "molten-skin",
            "name": "Molten Skin",
            "max": 5,
            "row": 2,
            "col": 1,
            "description": "Reduces all damage taken by 2%.",
            "rankDescriptions": [
              "Reduces all damage taken by 2%.",
              "Reduces all damage taken by 4%.",
              "Reduces all damage taken by 6%.",
              "Reduces all damage taken by 8%.",
              "Reduces all damage taken by 10%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/molten-skin.jpg",
            "sourceIcon": "ability_mage_moltenarmor"
          },
          {
            "id": "cataclysm",
            "name": "Cataclysm",
            "max": 3,
            "row": 2,
            "col": 2,
            "description": "Reduces the Mana cost of your Destruction spells by 3%.",
            "rankDescriptions": [
              "Reduces the Mana cost of your Destruction spells by 3%.",
              "Reduces the Mana cost of your Destruction spells by 6%.",
              "Reduces the Mana cost of your Destruction spells by 10%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/cataclysm.jpg",
            "sourceIcon": "spell_fire_windsofwoe"
          },
          {
            "id": "aftermath",
            "name": "Aftermath",
            "max": 5,
            "row": 2,
            "col": 3,
            "description": "Increases the initial damage of your Immolate spell by 10% and your Conflagrate spell has a 20% chance to Daze the target, reducing the target’s movement speed by 50% for 5 sec.",
            "rankDescriptions": [
              "Increases the initial damage of your Immolate spell by 10% and your Conflagrate spell has a 20% chance to Daze the target, reducing the target’s movement speed by 50% for 5 sec.",
              "Increases the initial damage of your Immolate spell by 20% and your Conflagrate spell has a 40% chance to Daze the target, reducing the target’s movement speed by 50% for 5 sec.",
              "Increases the initial damage of your Immolate spell by 30% and your Conflagrate spell has a 60% chance to Daze the target, reducing the target’s movement speed by 50% for 5 sec.",
              "Increases the initial damage of your Immolate spell by 40% and your Conflagrate spell has a 80% chance to Daze the target, reducing the target’s movement speed by 50% for 5 sec.",
              "Increases the initial damage of your Immolate spell by 50% and your Conflagrate spell has a 100% chance to Daze the target, reducing the target’s movement speed by 50% for 5 sec."
            ],
            "type": "Passive",
            "icon": "icons/warlock/aftermath.jpg",
            "sourceIcon": "spell_fire_fire"
          },
          {
            "id": "ruin",
            "name": "Ruin",
            "max": 5,
            "row": 3,
            "col": 2,
            "description": "Increases the critical strike damage bonus of your Destruction spells by 20%.",
            "rankDescriptions": [
              "Increases the critical strike damage bonus of your Destruction spells by 20%.",
              "Increases the critical strike damage bonus of your Destruction spells by 40%.",
              "Increases the critical strike damage bonus of your Destruction spells by 60%.",
              "Increases the critical strike damage bonus of your Destruction spells by 80%.",
              "Increases the critical strike damage bonus of your Destruction spells by 100%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/ruin.jpg",
            "sourceIcon": "spell_shadow_shadowwordpain"
          },
          {
            "id": "shadowburn",
            "name": "Shadowburn",
            "max": 1,
            "row": 3,
            "col": 3,
            "description": "Instantly blasts the target for 65 to 74 Shadow damage. If a non-trivial target dies within 8 sec of being hit with Shadowburn, the caster gains a Soul Shard.",
            "type": "Active",
            "details": [
              "105 Mana",
              "30 yd range",
              "Instant",
              "15 sec cooldown"
            ],
            "icon": "icons/warlock/shadowburn.jpg",
            "sourceIcon": "spell_shadow_scourgebuild"
          },
          {
            "id": "intensity",
            "name": "Intensity",
            "max": 3,
            "row": 4,
            "col": 1,
            "description": "Gives you a 23% chance to resist interruption caused by damage while casting or channeling any Destruction spell.",
            "rankDescriptions": [
              "Gives you a 23% chance to resist interruption caused by damage while casting or channeling any Destruction spell.",
              "Gives you a 47% chance to resist interruption caused by damage while casting or channeling any Destruction spell.",
              "Gives you a 70% chance to resist interruption caused by damage while casting or channeling any Destruction spell."
            ],
            "type": "Passive",
            "icon": "icons/warlock/intensity.jpg",
            "sourceIcon": "spell_fire_lavaspawn"
          },
          {
            "id": "agonizing-flames",
            "name": "Agonizing Flames",
            "max": 3,
            "row": 4,
            "col": 2,
            "description": "Increases the critical strike chance of your Searing Pain spell by 3% and the damage done by all your Destruction spells by 3%.",
            "rankDescriptions": [
              "Increases the critical strike chance of your Searing Pain spell by 3% and the damage done by all your Destruction spells by 3%.",
              "Increases the critical strike chance of your Searing Pain spell by 7% and the damage done by all your Destruction spells by 7%.",
              "Increases the critical strike chance of your Searing Pain spell by 10% and the damage done by all your Destruction spells by 10%."
            ],
            "type": "Passive",
            "icon": "icons/warlock/agonizing-flames.jpg",
            "sourceIcon": "spell_fire_soulburn"
          },
          {
            "id": "conflagrate",
            "name": "Conflagrate",
            "max": 1,
            "row": 4,
            "col": 3,
            "description": "Ignites a target that is already afflicted by your Immolate spell, dealing 88 to 111 Fire damage and consuming your Immolate effect.",
            "type": "Active",
            "details": [
              "100 Mana",
              "30 yd range",
              "Instant",
              "10 sec cooldown"
            ],
            "icon": "icons/warlock/conflagrate.jpg",
            "sourceIcon": "spell_fire_fireball"
          },
          {
            "id": "pyroclasm",
            "name": "Pyroclasm",
            "max": 2,
            "row": 5,
            "col": 1,
            "description": "Gives your Soul Fire spell a 13% chance to Stun the target for 3 sec, and your Rain of Fire and Hellfire spells a 13% chance over their duration to Stun targets they damage for 3 sec.",
            "rankDescriptions": [
              "Gives your Soul Fire spell a 13% chance to Stun the target for 3 sec, and your Rain of Fire and Hellfire spells a 13% chance over their duration to Stun targets they damage for 3 sec.",
              "Gives your Soul Fire spell a 26% chance to Stun the target for 3 sec, and your Rain of Fire and Hellfire spells a 26% chance over their duration to Stun targets they damage for 3 sec."
            ],
            "type": "Passive",
            "prerequisite": "intensity",
            "icon": "icons/warlock/pyroclasm.jpg",
            "sourceIcon": "spell_fire_volcano"
          },
          {
            "id": "bane-of-havoc",
            "name": "Bane of Havoc",
            "max": 1,
            "row": 5,
            "col": 2,
            "description": "Afflicts the target for 5 min, causing 15% of all damage done by the Warlock to other targets to also be dealt to the cursed target. Bane of Havoc is limited to 1 target, and only one Bane per Warlock can be active on any one target.",
            "type": "Active",
            "details": [
              "5% of base Mana",
              "30 yd range",
              "Instant"
            ],
            "icon": "icons/warlock/bane-of-havoc.jpg",
            "sourceIcon": "ability_warlock_baneofhavoc"
          },
          {
            "id": "fire-and-brimstone",
            "name": "Fire and Brimstone",
            "max": 3,
            "row": 5,
            "col": 3,
            "description": "Increases the critical strike chance of your Conflagrate spell by 8%.",
            "rankDescriptions": [
              "Increases the critical strike chance of your Conflagrate spell by 8%.",
              "Increases the critical strike chance of your Conflagrate spell by 17%.",
              "Increases the critical strike chance of your Conflagrate spell by 25%."
            ],
            "type": "Passive",
            "prerequisite": "conflagrate",
            "icon": "icons/warlock/fire-and-brimstone.jpg",
            "sourceIcon": "spell_fire_meteorstorm"
          },
          {
            "id": "shadow-and-flame",
            "name": "Shadow and Flame",
            "max": 5,
            "row": 6,
            "col": 3,
            "description": "Hitting an enemy with Conflagrate increases all Shadow damage you deal by 2% for 20 sec, and hitting an enemy with Shadowburn increases all Fire damage you deal by 2% for 20 sec. In addition, Conflagrate has a 20% chance not to consume Immolate, and Shadowburn has a 20% chance to instantly refund a Soul Shard.",
            "rankDescriptions": [
              "Hitting an enemy with Conflagrate increases all Shadow damage you deal by 2% for 20 sec, and hitting an enemy with Shadowburn increases all Fire damage you deal by 2% for 20 sec. In addition, Conflagrate has a 20% chance not to consume Immolate, and Shadowburn has a 20% chance to instantly refund a Soul Shard.",
              "Hitting an enemy with Conflagrate increases all Shadow damage you deal by 4% for 20 sec, and hitting an enemy with Shadowburn increases all Fire damage you deal by 4% for 20 sec. In addition, Conflagrate has a 40% chance not to consume Immolate, and Shadowburn has a 40% chance to instantly refund a Soul Shard.",
              "Hitting an enemy with Conflagrate increases all Shadow damage you deal by 6% for 20 sec, and hitting an enemy with Shadowburn increases all Fire damage you deal by 6% for 20 sec. In addition, Conflagrate has a 60% chance not to consume Immolate, and Shadowburn has a 60% chance to instantly refund a Soul Shard.",
              "Hitting an enemy with Conflagrate increases all Shadow damage you deal by 8% for 20 sec, and hitting an enemy with Shadowburn increases all Fire damage you deal by 8% for 20 sec. In addition, Conflagrate has a 80% chance not to consume Immolate, and Shadowburn has a 80% chance to instantly refund a Soul Shard.",
              "Hitting an enemy with Conflagrate increases all Shadow damage you deal by 10% for 20 sec, and hitting an enemy with Shadowburn increases all Fire damage you deal by 10% for 20 sec. In addition, Conflagrate has a 100% chance not to consume Immolate, and Shadowburn has a 100% chance to instantly refund a Soul Shard."
            ],
            "type": "Passive",
            "icon": "icons/warlock/shadow-and-flame.jpg",
            "sourceIcon": "spell_fire_playingwithfire"
          },
          {
            "id": "incinerate",
            "name": "Incinerate",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Deals 100 to 114 Fire damage to your target and an additional 25% damage if the target is afflicted by Immolate.",
            "type": "Active",
            "details": [
              "205 Mana",
              "30 yd range",
              "2.5 sec cast"
            ],
            "prerequisite": "bane-of-havoc",
            "icon": "icons/warlock/incinerate.jpg",
            "sourceIcon": "spell_fire_burnout"
          }
        ]
      }
    ]
  },
  "warrior": {
    "version": 6,
    "gameClass": "warrior",
    "name": "Warrior",
    "color": "#c79c6e",
    "legacyBuilds": {
      "FF2": [
        [
          "improved-heroic-strike",
          3
        ],
        [
          "deflection",
          5
        ],
        [
          "improved-rend",
          3
        ],
        [
          "improved-charge",
          2
        ],
        [
          "improved-tactical-mastery",
          5
        ],
        [
          "improved-overpower",
          2
        ],
        [
          "anger-management",
          1
        ],
        [
          "deep-wounds",
          3
        ],
        [
          "spearing-strike",
          1
        ],
        [
          "two-handed-weapon-specialization",
          3
        ],
        [
          "impale",
          2
        ],
        [
          "bloodthrill",
          5
        ],
        [
          "sweeping-strikes",
          1
        ],
        [
          "weaponmaster",
          5
        ],
        [
          "improved-slam",
          2
        ],
        [
          "improved-hamstring",
          3
        ],
        [
          "mortal-strike",
          1
        ],
        [
          "booming-voice",
          5
        ],
        [
          "cruelty",
          5
        ],
        [
          "iron-will",
          5
        ],
        [
          "unbridled-wrath",
          5
        ],
        [
          "improved-cleave",
          3
        ],
        [
          "piercing-howl",
          1
        ],
        [
          "blood-craze",
          3
        ],
        [
          "boundless-rage",
          3
        ],
        [
          "dual-wield-specialization",
          5
        ],
        [
          "raging-blows",
          1
        ],
        [
          "enrage",
          5
        ],
        [
          "improved-execute",
          2
        ],
        [
          "precision",
          3
        ],
        [
          "death-wish",
          1
        ],
        [
          "improved-intercept",
          2
        ],
        [
          "improved-berserker-rage",
          2
        ],
        [
          "flurry",
          5
        ],
        [
          "bloodthirst",
          1
        ],
        [
          "shield-specialization",
          5
        ],
        [
          "anticipation",
          5
        ],
        [
          "improved-bloodrage",
          2
        ],
        [
          "toughness",
          5
        ],
        [
          "improved-thunder-clap",
          3
        ],
        [
          "last-stand",
          1
        ],
        [
          "master-of-defense",
          2
        ],
        [
          "improved-revenge",
          3
        ],
        [
          "defiance",
          3
        ],
        [
          "improved-sunder-armor",
          3
        ],
        [
          "improved-disarm",
          3
        ],
        [
          "vanguard",
          1
        ],
        [
          "improved-shield-wall",
          2
        ],
        [
          "concussion-blow",
          1
        ],
        [
          "improved-shield-bash",
          2
        ],
        [
          "bastion",
          5
        ],
        [
          "focused-rage",
          3
        ],
        [
          "shield-slam",
          1
        ]
      ]
    },
    "trees": [
      {
        "id": "arms",
        "name": "Arms",
        "role": "Arms",
        "color": "#d88959",
        "icon": "icons/warrior/arms.jpg",
        "talents": [
          {
            "id": "improved-heroic-strike",
            "name": "Improved Heroic Strike",
            "max": 3,
            "row": 1,
            "col": 1,
            "description": "Reduces the cost of your Heroic Strike ability by 1 Rage.",
            "rankDescriptions": [
              "Reduces the cost of your Heroic Strike ability by 1 Rage.",
              "Reduces the cost of your Heroic Strike ability by 2 Rage.",
              "Reduces the cost of your Heroic Strike ability by 3 Rage."
            ],
            "type": "Passive",
            "icon": "icons/warrior/improved-heroic-strike.jpg",
            "sourceIcon": "ability_rogue_ambush"
          },
          {
            "id": "deflection",
            "name": "Deflection",
            "max": 5,
            "row": 1,
            "col": 2,
            "description": "Increases your Parry chance by 1%.",
            "rankDescriptions": [
              "Increases your Parry chance by 1%.",
              "Increases your Parry chance by 2%.",
              "Increases your Parry chance by 3%.",
              "Increases your Parry chance by 4%.",
              "Increases your Parry chance by 5%."
            ],
            "type": "Passive",
            "icon": "icons/warrior/deflection.jpg",
            "sourceIcon": "ability_parry"
          },
          {
            "id": "improved-rend",
            "name": "Improved Rend",
            "max": 3,
            "row": 1,
            "col": 3,
            "description": "Increases the Bleed damage done by your Rend ability by 12%.",
            "rankDescriptions": [
              "Increases the Bleed damage done by your Rend ability by 12%.",
              "Increases the Bleed damage done by your Rend ability by 23%.",
              "Increases the Bleed damage done by your Rend ability by 35%."
            ],
            "type": "Passive",
            "icon": "icons/warrior/improved-rend.jpg",
            "sourceIcon": "ability_gouge"
          },
          {
            "id": "improved-charge",
            "name": "Improved Charge",
            "max": 2,
            "row": 2,
            "col": 1,
            "description": "Increases the Rage generated by your Charge ability by 3.",
            "rankDescriptions": [
              "Increases the Rage generated by your Charge ability by 3.",
              "Increases the Rage generated by your Charge ability by 6."
            ],
            "type": "Passive",
            "icon": "icons/warrior/improved-charge.jpg",
            "sourceIcon": "ability_warrior_charge"
          },
          {
            "id": "improved-tactical-mastery",
            "name": "Improved Tactical Mastery",
            "max": 5,
            "row": 2,
            "col": 2,
            "description": "Tactical Mastery lets you retain up to an additional 3 Rage when you change stances.",
            "rankDescriptions": [
              "Tactical Mastery lets you retain up to an additional 3 Rage when you change stances.",
              "Tactical Mastery lets you retain up to an additional 6 Rage when you change stances.",
              "Tactical Mastery lets you retain up to an additional 9 Rage when you change stances.",
              "Tactical Mastery lets you retain up to an additional 12 Rage when you change stances.",
              "Tactical Mastery lets you retain up to an additional 15 Rage when you change stances."
            ],
            "type": "Passive",
            "icon": "icons/warrior/improved-tactical-mastery.jpg",
            "sourceIcon": "spell_nature_enchantarmor"
          },
          {
            "id": "improved-overpower",
            "name": "Improved Overpower",
            "max": 2,
            "row": 2,
            "col": 4,
            "description": "Increases the critical strike chance of your Overpower ability by 25%.",
            "rankDescriptions": [
              "Increases the critical strike chance of your Overpower ability by 25%.",
              "Increases the critical strike chance of your Overpower ability by 50%."
            ],
            "type": "Passive",
            "icon": "icons/warrior/improved-overpower.jpg",
            "sourceIcon": "inv_sword_05"
          },
          {
            "id": "anger-management",
            "name": "Anger Management",
            "max": 1,
            "row": 3,
            "col": 2,
            "description": "Generates 1 Rage every 3 sec while in combat, and reduces Rage loss while out of combat by 30%.",
            "type": "Passive",
            "prerequisite": "improved-tactical-mastery",
            "icon": "icons/warrior/anger-management.jpg",
            "sourceIcon": "spell_holy_blessingofstamina"
          },
          {
            "id": "deep-wounds",
            "name": "Deep Wounds",
            "max": 3,
            "row": 3,
            "col": 3,
            "description": "Your critical strikes cause your opponent to Bleed, dealing 20% of your melee weapon’s average damage over 12 sec.",
            "rankDescriptions": [
              "Your critical strikes cause your opponent to Bleed, dealing 20% of your melee weapon’s average damage over 12 sec.",
              "Your critical strikes cause your opponent to Bleed, dealing 40% of your melee weapon’s average damage over 12 sec.",
              "Your critical strikes cause your opponent to Bleed, dealing 60% of your melee weapon’s average damage over 12 sec."
            ],
            "type": "Passive",
            "prerequisite": "improved-rend",
            "icon": "icons/warrior/deep-wounds.jpg",
            "sourceIcon": "ability_backstab"
          },
          {
            "id": "spearing-strike",
            "name": "Spearing Strike",
            "max": 1,
            "row": 4,
            "col": 1,
            "description": "A brutal attack that deals 40% weapon damage. Deals an additional 80% weapon damage against Giants, Dragonkin, and mounted targets. Mounted targets are dismounted.",
            "type": "Active",
            "details": [
              "15 Rage",
              "Melee Range",
              "Instant",
              "20 sec cooldown"
            ],
            "icon": "icons/warrior/spearing-strike.jpg",
            "sourceIcon": "inv_spear_01"
          },
          {
            "id": "two-handed-weapon-specialization",
            "name": "Two-Handed Weapon Specialization",
            "max": 3,
            "row": 4,
            "col": 2,
            "description": "Increases the damage you deal with two-handed melee weapons by 1%.",
            "rankDescriptions": [
              "Increases the damage you deal with two-handed melee weapons by 1%.",
              "Increases the damage you deal with two-handed melee weapons by 2%.",
              "Increases the damage you deal with two-handed melee weapons by 3%."
            ],
            "type": "Passive",
            "icon": "icons/warrior/two-handed-weapon-specialization.jpg",
            "sourceIcon": "inv_axe_09"
          },
          {
            "id": "impale",
            "name": "Impale",
            "max": 2,
            "row": 4,
            "col": 3,
            "description": "Increases the critical strike damage bonus of your abilities by 10%.",
            "rankDescriptions": [
              "Increases the critical strike damage bonus of your abilities by 10%.",
              "Increases the critical strike damage bonus of your abilities by 20%."
            ],
            "type": "Passive",
            "prerequisite": "deep-wounds",
            "icon": "icons/warrior/impale.jpg",
            "sourceIcon": "ability_searingarrow"
          },
          {
            "id": "bloodthrill",
            "name": "Bloodthrill",
            "max": 5,
            "row": 5,
            "col": 1,
            "description": "Grants your Main Hand melee attacks against enemies afflicted by your Rend a 4% chance to allow an activation of Overpower.",
            "rankDescriptions": [
              "Grants your Main Hand melee attacks against enemies afflicted by your Rend a 4% chance to allow an activation of Overpower.",
              "Grants your Main Hand melee attacks against enemies afflicted by your Rend a 8% chance to allow an activation of Overpower.",
              "Grants your Main Hand melee attacks against enemies afflicted by your Rend a 12% chance to allow an activation of Overpower.",
              "Grants your Main Hand melee attacks against enemies afflicted by your Rend a 16% chance to allow an activation of Overpower.",
              "Grants your Main Hand melee attacks against enemies afflicted by your Rend a 20% chance to allow an activation of Overpower."
            ],
            "type": "Passive",
            "icon": "icons/warrior/bloodthrill.jpg",
            "sourceIcon": "inv_sword_01"
          },
          {
            "id": "sweeping-strikes",
            "name": "Sweeping Strikes",
            "max": 1,
            "row": 5,
            "col": 2,
            "description": "Your next 5 melee attacks strike an additional nearby opponent.",
            "type": "Active",
            "details": [
              "30 Rage",
              "Instant",
              "30 sec cooldown"
            ],
            "icon": "icons/warrior/sweeping-strikes.jpg",
            "sourceIcon": "ability_rogue_slicedice"
          },
          {
            "id": "weaponmaster",
            "name": "Weaponmaster",
            "max": 5,
            "row": 5,
            "col": 3,
            "description": "Gives your melee weapon attacks a benefit depending on the weapon.\n\n Axe/Polearm: Increases your\n critical strike chance by 1%.\n\n Mace/Staff: Your attacks ignore\n 3% of your target’s armor.\n\n Sword: Your successful melee \n attacks have a 1% chance to \n trigger an extra attack on the \n target.",
            "rankDescriptions": [
              "Gives your melee weapon attacks a benefit depending on the weapon.\n\n Axe/Polearm: Increases your\n critical strike chance by 1%.\n\n Mace/Staff: Your attacks ignore\n 3% of your target’s armor.\n\n Sword: Your successful melee \n attacks have a 1% chance to \n trigger an extra attack on the \n target.",
              "Gives your melee weapon attacks a benefit depending on the weapon.\n\n Axe/Polearm: Increases your\n critical strike chance by 2%.\n\n Mace/Staff: Your attacks ignore\n 6% of your target’s armor.\n\n Sword: Your successful melee \n attacks have a 2% chance to \n trigger an extra attack on the \n target.",
              "Gives your melee weapon attacks a benefit depending on the weapon.\n\n Axe/Polearm: Increases your\n critical strike chance by 3%.\n\n Mace/Staff: Your attacks ignore\n 9% of your target’s armor.\n\n Sword: Your successful melee \n attacks have a 3% chance to \n trigger an extra attack on the \n target.",
              "Gives your melee weapon attacks a benefit depending on the weapon.\n\n Axe/Polearm: Increases your\n critical strike chance by 4%.\n\n Mace/Staff: Your attacks ignore\n 12% of your target’s armor.\n\n Sword: Your successful melee \n attacks have a 4% chance to \n trigger an extra attack on the \n target.",
              "Gives your melee weapon attacks a benefit depending on the weapon.\n\n Axe/Polearm: Increases your\n critical strike chance by 5%.\n\n Mace/Staff: Your attacks ignore\n 15% of your target’s armor.\n\n Sword: Your successful melee \n attacks have a 5% chance to \n trigger an extra attack on the \n target."
            ],
            "type": "Passive",
            "icon": "icons/warrior/weaponmaster.jpg",
            "sourceIcon": "garrison_weaponupgrade"
          },
          {
            "id": "improved-slam",
            "name": "Improved Slam",
            "max": 2,
            "row": 6,
            "col": 1,
            "description": "Reduces the global cooldown and cast time of your Slam ability by 0.25 sec. In addition, Slam no longer interrupts or delays your melee swing and Slam’s cooldown is reduced by 3.0 sec.",
            "rankDescriptions": [
              "Reduces the global cooldown and cast time of your Slam ability by 0.25 sec. In addition, Slam no longer interrupts or delays your melee swing and Slam’s cooldown is reduced by 3.0 sec.",
              "Reduces the global cooldown and cast time of your Slam ability by 0.50 sec. In addition, Slam no longer interrupts or delays your melee swing and Slam’s cooldown is reduced by 3.0 sec."
            ],
            "type": "Passive",
            "icon": "icons/warrior/improved-slam.jpg",
            "sourceIcon": "ability_warrior_decisivestrike"
          },
          {
            "id": "improved-hamstring",
            "name": "Improved Hamstring",
            "max": 3,
            "row": 6,
            "col": 3,
            "description": "Gives your Hamstring ability a 5% chance to immobilize the target for 5 sec.",
            "rankDescriptions": [
              "Gives your Hamstring ability a 5% chance to immobilize the target for 5 sec.",
              "Gives your Hamstring ability a 10% chance to immobilize the target for 5 sec.",
              "Gives your Hamstring ability a 15% chance to immobilize the target for 5 sec."
            ],
            "type": "Passive",
            "icon": "icons/warrior/improved-hamstring.jpg",
            "sourceIcon": "ability_shockwave"
          },
          {
            "id": "mortal-strike",
            "name": "Mortal Strike",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "A vicious strike that deals weapon damage plus 85 and wounds the target, reducing the effectiveness of any healing by 50% for 10 sec.",
            "type": "Active",
            "details": [
              "30 Rage",
              "Melee Range",
              "Instant",
              "6 sec cooldown"
            ],
            "prerequisite": "sweeping-strikes",
            "icon": "icons/warrior/mortal-strike.jpg",
            "sourceIcon": "ability_warrior_savageblow"
          }
        ]
      },
      {
        "id": "fury",
        "name": "Fury",
        "role": "Fury",
        "color": "#dc5b52",
        "icon": "icons/warrior/fury.jpg",
        "talents": [
          {
            "id": "booming-voice",
            "name": "Booming Voice",
            "max": 5,
            "row": 1,
            "col": 2,
            "description": "Increases the area of effect of your Shouts by 10% and reduces their Rage cost by 5%.",
            "rankDescriptions": [
              "Increases the area of effect of your Shouts by 10% and reduces their Rage cost by 5%.",
              "Increases the area of effect of your Shouts by 20% and reduces their Rage cost by 10%.",
              "Increases the area of effect of your Shouts by 30% and reduces their Rage cost by 15%.",
              "Increases the area of effect of your Shouts by 40% and reduces their Rage cost by 20%.",
              "Increases the area of effect of your Shouts by 50% and reduces their Rage cost by 25%."
            ],
            "type": "Passive",
            "icon": "icons/warrior/booming-voice.jpg",
            "sourceIcon": "spell_nature_purge"
          },
          {
            "id": "cruelty",
            "name": "Cruelty",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Improves your chance to get a critical strike with melee attacks by 1%.",
            "rankDescriptions": [
              "Improves your chance to get a critical strike with melee attacks by 1%.",
              "Improves your chance to get a critical strike with melee attacks by 2%.",
              "Improves your chance to get a critical strike with melee attacks by 3%.",
              "Improves your chance to get a critical strike with melee attacks by 4%.",
              "Improves your chance to get a critical strike with melee attacks by 5%."
            ],
            "type": "Passive",
            "icon": "icons/warrior/cruelty.jpg",
            "sourceIcon": "ability_rogue_eviscerate"
          },
          {
            "id": "lingering-rage",
            "name": "Lingering Rage",
            "max": 5,
            "row": 2,
            "col": 2,
            "description": "Increases the time before your Rage begins to decay after leaving combat by 2 sec.",
            "rankDescriptions": [
              "Increases the time before your Rage begins to decay after leaving combat by 2 sec.",
              "Increases the time before your Rage begins to decay after leaving combat by 4 sec.",
              "Increases the time before your Rage begins to decay after leaving combat by 6 sec.",
              "Increases the time before your Rage begins to decay after leaving combat by 8 sec.",
              "Increases the time before your Rage begins to decay after leaving combat by 10 sec."
            ],
            "type": "Passive",
            "icon": "icons/warrior/lingering-rage.jpg",
            "sourceIcon": "ability_warrior_secondwind"
          },
          {
            "id": "unbridled-wrath",
            "name": "Unbridled Wrath",
            "max": 5,
            "row": 2,
            "col": 3,
            "description": "Gives you a 12% chance to generate 1 additional Rage when you deal melee damage with a weapon.",
            "rankDescriptions": [
              "Gives you a 12% chance to generate 1 additional Rage when you deal melee damage with a weapon.",
              "Gives you a 24% chance to generate 1 additional Rage when you deal melee damage with a weapon.",
              "Gives you a 36% chance to generate 1 additional Rage when you deal melee damage with a weapon.",
              "Gives you a 48% chance to generate 1 additional Rage when you deal melee damage with a weapon.",
              "Gives you a 60% chance to generate 1 additional Rage when you deal melee damage with a weapon."
            ],
            "type": "Passive",
            "icon": "icons/warrior/unbridled-wrath.jpg",
            "sourceIcon": "spell_nature_stoneclawtotem"
          },
          {
            "id": "furious-precision",
            "name": "Furious Precision",
            "max": 3,
            "row": 3,
            "col": 1,
            "description": "Increases your chance to hit with off-hand attacks by 4%.",
            "rankDescriptions": [
              "Increases your chance to hit with off-hand attacks by 4%.",
              "Increases your chance to hit with off-hand attacks by 7%.",
              "Increases your chance to hit with off-hand attacks by 10%."
            ],
            "type": "Passive",
            "icon": "icons/warrior/furious-precision.jpg",
            "sourceIcon": "ability_warrior_incite"
          },
          {
            "id": "piercing-howl",
            "name": "Piercing Howl",
            "max": 1,
            "row": 3,
            "col": 2,
            "description": "Causes all enemies within 10 yds to be Dazed, reducing movement speed by 50% for 6 sec.",
            "type": "Active",
            "details": [
              "10 Rage",
              "Instant"
            ],
            "icon": "icons/warrior/piercing-howl.jpg",
            "sourceIcon": "spell_shadow_deathscream"
          },
          {
            "id": "blood-craze",
            "name": "Blood Craze",
            "max": 3,
            "row": 3,
            "col": 3,
            "description": "Regenerates 1% of your total Health over 6 sec after being the victim of a critical strike or suffering more than 20% of your maximum Health from a single attack.",
            "rankDescriptions": [
              "Regenerates 1% of your total Health over 6 sec after being the victim of a critical strike or suffering more than 20% of your maximum Health from a single attack.",
              "Regenerates 2% of your total Health over 6 sec after being the victim of a critical strike or suffering more than 20% of your maximum Health from a single attack.",
              "Regenerates 3% of your total Health over 6 sec after being the victim of a critical strike or suffering more than 20% of your maximum Health from a single attack."
            ],
            "type": "Passive",
            "icon": "icons/warrior/blood-craze.jpg",
            "sourceIcon": "spell_shadow_summonimp"
          },
          {
            "id": "dual-wield-specialization",
            "name": "Dual Wield Specialization",
            "max": 5,
            "row": 4,
            "col": 1,
            "description": "Increases the damage done by your off-hand weapon by 5% and the Rage generated by your off-hand attacks by 10%.",
            "rankDescriptions": [
              "Increases the damage done by your off-hand weapon by 5% and the Rage generated by your off-hand attacks by 10%.",
              "Increases the damage done by your off-hand weapon by 10% and the Rage generated by your off-hand attacks by 20%.",
              "Increases the damage done by your off-hand weapon by 15% and the Rage generated by your off-hand attacks by 30%.",
              "Increases the damage done by your off-hand weapon by 20% and the Rage generated by your off-hand attacks by 40%.",
              "Increases the damage done by your off-hand weapon by 25% and the Rage generated by your off-hand attacks by 50%."
            ],
            "type": "Passive",
            "icon": "icons/warrior/dual-wield-specialization.jpg",
            "sourceIcon": "ability_dualwield"
          },
          {
            "id": "raging-blows",
            "name": "Raging Blows",
            "max": 1,
            "row": 4,
            "col": 2,
            "description": "Reduces the Rage cost of your Cleave and Whirlwind abilities by 3.",
            "type": "Passive",
            "icon": "icons/warrior/raging-blows.jpg",
            "sourceIcon": "ability_whirlwind"
          },
          {
            "id": "enrage",
            "name": "Enrage",
            "max": 5,
            "row": 4,
            "col": 3,
            "description": "Gives you a 30% chance to deal 2% increased Physical damage for 12 sec after being the victim of any damaging attack.",
            "rankDescriptions": [
              "Gives you a 30% chance to deal 2% increased Physical damage for 12 sec after being the victim of any damaging attack.",
              "Gives you a 30% chance to deal 4% increased Physical damage for 12 sec after being the victim of any damaging attack.",
              "Gives you a 30% chance to deal 6% increased Physical damage for 12 sec after being the victim of any damaging attack.",
              "Gives you a 30% chance to deal 8% increased Physical damage for 12 sec after being the victim of any damaging attack.",
              "Gives you a 30% chance to deal 10% increased Physical damage for 12 sec after being the victim of any damaging attack."
            ],
            "type": "Passive",
            "icon": "icons/warrior/enrage.jpg",
            "sourceIcon": "spell_shadow_unholyfrenzy"
          },
          {
            "id": "improved-execute",
            "name": "Improved Execute",
            "max": 2,
            "row": 4,
            "col": 4,
            "description": "Reduces the Rage cost of your Execute ability by 3.",
            "rankDescriptions": [
              "Reduces the Rage cost of your Execute ability by 3.",
              "Reduces the Rage cost of your Execute ability by 5."
            ],
            "type": "Passive",
            "icon": "icons/warrior/improved-execute.jpg",
            "sourceIcon": "inv_sword_48"
          },
          {
            "id": "improved-berserker-rage",
            "name": "Improved Berserker Rage",
            "max": 2,
            "row": 5,
            "col": 1,
            "description": "Your Berserker Rage ability will instantly generate 5 Rage and has a 50% chance to remove all movement impairing effects when activated.",
            "rankDescriptions": [
              "Your Berserker Rage ability will instantly generate 5 Rage and has a 50% chance to remove all movement impairing effects when activated.",
              "Your Berserker Rage ability will instantly generate 10 Rage and has a 100% chance to remove all movement impairing effects when activated."
            ],
            "type": "Passive",
            "icon": "icons/warrior/improved-berserker-rage.jpg",
            "sourceIcon": "spell_nature_ancestralguardian"
          },
          {
            "id": "death-wish",
            "name": "Death Wish",
            "max": 1,
            "row": 5,
            "col": 2,
            "description": "When activated, increases your Physical damage done by 20% and makes you immune to Fear effects, but increases all damage you take by 5%. Lasts 30 sec.",
            "type": "Active",
            "details": [
              "10 Rage",
              "Instant",
              "3 min cooldown"
            ],
            "icon": "icons/warrior/death-wish.jpg",
            "sourceIcon": "spell_shadow_deathpact"
          },
          {
            "id": "improved-intercept",
            "name": "Improved Intercept",
            "max": 2,
            "row": 5,
            "col": 4,
            "description": "Reduces the cooldown of your Intercept ability by 5 sec.",
            "rankDescriptions": [
              "Reduces the cooldown of your Intercept ability by 5 sec.",
              "Reduces the cooldown of your Intercept ability by 10 sec."
            ],
            "type": "Passive",
            "icon": "icons/warrior/improved-intercept.jpg",
            "sourceIcon": "ability_rogue_sprint"
          },
          {
            "id": "flurry",
            "name": "Flurry",
            "max": 5,
            "row": 6,
            "col": 2,
            "description": "Increases your melee attack speed by 5% for your next 3 swings after dealing a melee critical strike.",
            "rankDescriptions": [
              "Increases your melee attack speed by 5% for your next 3 swings after dealing a melee critical strike.",
              "Increases your melee attack speed by 10% for your next 3 swings after dealing a melee critical strike.",
              "Increases your melee attack speed by 15% for your next 3 swings after dealing a melee critical strike.",
              "Increases your melee attack speed by 20% for your next 3 swings after dealing a melee critical strike.",
              "Increases your melee attack speed by 25% for your next 3 swings after dealing a melee critical strike."
            ],
            "type": "Passive",
            "prerequisite": "death-wish",
            "icon": "icons/warrior/flurry.jpg",
            "sourceIcon": "ability_ghoulfrenzy"
          },
          {
            "id": "gore-drinker",
            "name": "Gore Drinker",
            "max": 2,
            "row": 6,
            "col": 3,
            "description": "Your Enrage, Berserker Rage, Bloodrage, Death Wish, and Bloodthirst abilities cause your next 3 melee attacks to restore 0.5% of your maximum Health.",
            "rankDescriptions": [
              "Your Enrage, Berserker Rage, Bloodrage, Death Wish, and Bloodthirst abilities cause your next 3 melee attacks to restore 0.5% of your maximum Health.",
              "Your Enrage, Berserker Rage, Bloodrage, Death Wish, and Bloodthirst abilities cause your next 3 melee attacks to restore 1.0% of your maximum Health."
            ],
            "type": "Passive",
            "prerequisite": "enrage",
            "icon": "icons/warrior/gore-drinker.jpg",
            "sourceIcon": "racial_troll_berserk"
          },
          {
            "id": "bloodthirst",
            "name": "Bloodthirst",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Instantly attack the target causing damage equal to 45% of your Attack Power plus 30 and increasing your movement speed by 10% for 10 sec.",
            "type": "Active",
            "details": [
              "30 Rage",
              "Melee Range",
              "Instant",
              "6 sec cooldown"
            ],
            "icon": "icons/warrior/bloodthirst.jpg",
            "sourceIcon": "spell_nature_bloodlust"
          }
        ]
      },
      {
        "id": "protection",
        "name": "Protection",
        "role": "Protection",
        "color": "#6a9bd8",
        "icon": "icons/warrior/protection.jpg",
        "talents": [
          {
            "id": "improved-bloodrage",
            "name": "Improved Bloodrage",
            "max": 2,
            "row": 1,
            "col": 1,
            "description": "Increases all the Rage generated by your Bloodrage ability by 25%.",
            "rankDescriptions": [
              "Increases all the Rage generated by your Bloodrage ability by 25%.",
              "Increases all the Rage generated by your Bloodrage ability by 50%."
            ],
            "type": "Passive",
            "icon": "icons/warrior/improved-bloodrage.jpg",
            "sourceIcon": "ability_racial_bloodrage"
          },
          {
            "id": "shield-specialization",
            "name": "Shield Specialization",
            "max": 5,
            "row": 1,
            "col": 2,
            "description": "Increases your chance to Block attacks with your shield by 1% and grants you a 20% chance to generate 5 Rage when you Block.",
            "rankDescriptions": [
              "Increases your chance to Block attacks with your shield by 1% and grants you a 20% chance to generate 5 Rage when you Block.",
              "Increases your chance to Block attacks with your shield by 2% and grants you a 40% chance to generate 5 Rage when you Block.",
              "Increases your chance to Block attacks with your shield by 3% and grants you a 60% chance to generate 5 Rage when you Block.",
              "Increases your chance to Block attacks with your shield by 4% and grants you a 80% chance to generate 5 Rage when you Block.",
              "Increases your chance to Block attacks with your shield by 5% and grants you a 100% chance to generate 5 Rage when you Block."
            ],
            "type": "Passive",
            "icon": "icons/warrior/shield-specialization.jpg",
            "sourceIcon": "inv_shield_06"
          },
          {
            "id": "iron-will",
            "name": "Iron Will",
            "max": 5,
            "row": 1,
            "col": 3,
            "description": "Reduces the duration of Stun and Fear effects inflicted on you by 3%.",
            "rankDescriptions": [
              "Reduces the duration of Stun and Fear effects inflicted on you by 3%.",
              "Reduces the duration of Stun and Fear effects inflicted on you by 6%.",
              "Reduces the duration of Stun and Fear effects inflicted on you by 9%.",
              "Reduces the duration of Stun and Fear effects inflicted on you by 12%.",
              "Reduces the duration of Stun and Fear effects inflicted on you by 15%."
            ],
            "type": "Passive",
            "icon": "icons/warrior/iron-will.jpg",
            "sourceIcon": "spell_magic_magearmor"
          },
          {
            "id": "anticipation",
            "name": "Anticipation",
            "max": 5,
            "row": 2,
            "col": 1,
            "description": "Increases your Defense Skill by 4.",
            "rankDescriptions": [
              "Increases your Defense Skill by 4.",
              "Increases your Defense Skill by 8.",
              "Increases your Defense Skill by 12.",
              "Increases your Defense Skill by 16.",
              "Increases your Defense Skill by 20."
            ],
            "type": "Passive",
            "icon": "icons/warrior/anticipation.jpg",
            "sourceIcon": "spell_nature_mirrorimage"
          },
          {
            "id": "improved-revenge",
            "name": "Improved Revenge",
            "max": 3,
            "row": 2,
            "col": 3,
            "description": "Increases damage dealt by your Revenge ability by 20%.",
            "rankDescriptions": [
              "Increases damage dealt by your Revenge ability by 20%.",
              "Increases damage dealt by your Revenge ability by 40%.",
              "Increases damage dealt by your Revenge ability by 60%."
            ],
            "type": "Passive",
            "icon": "icons/warrior/improved-revenge.jpg",
            "sourceIcon": "ability_warrior_revenge"
          },
          {
            "id": "improved-thunder-clap",
            "name": "Improved Thunder Clap",
            "max": 3,
            "row": 2,
            "col": 4,
            "description": "Reduces the Rage cost of your Thunder Clap ability by 2.",
            "rankDescriptions": [
              "Reduces the Rage cost of your Thunder Clap ability by 2.",
              "Reduces the Rage cost of your Thunder Clap ability by 4.",
              "Reduces the Rage cost of your Thunder Clap ability by 6."
            ],
            "type": "Passive",
            "icon": "icons/warrior/improved-thunder-clap.jpg",
            "sourceIcon": "ability_thunderclap"
          },
          {
            "id": "last-stand",
            "name": "Last Stand",
            "max": 1,
            "row": 3,
            "col": 1,
            "description": "When activated, this ability temporarily grants you 30% of your maximum health for 20 sec. After the effect expires, the health is lost.",
            "type": "Active",
            "details": [
              "Instant",
              "3 min cooldown"
            ],
            "icon": "icons/warrior/last-stand.jpg",
            "sourceIcon": "spell_holy_ashestoashes"
          },
          {
            "id": "master-of-defense",
            "name": "Master of Defense",
            "max": 2,
            "row": 3,
            "col": 2,
            "description": "Grants you a 50% chance to generate 5 Rage when you Dodge or Parry while a shield is equipped.",
            "rankDescriptions": [
              "Grants you a 50% chance to generate 5 Rage when you Dodge or Parry while a shield is equipped.",
              "Grants you a 100% chance to generate 5 Rage when you Dodge or Parry while a shield is equipped."
            ],
            "type": "Passive",
            "prerequisite": "shield-specialization",
            "icon": "icons/warrior/master-of-defense.jpg",
            "sourceIcon": "ability_warrior_shieldguard"
          },
          {
            "id": "improved-disarm",
            "name": "Improved Disarm",
            "max": 3,
            "row": 3,
            "col": 3,
            "description": "Reduces the cooldown of your Disarm ability by 7 secs.",
            "rankDescriptions": [
              "Reduces the cooldown of your Disarm ability by 7 secs.",
              "Reduces the cooldown of your Disarm ability by 13 secs.",
              "Reduces the cooldown of your Disarm ability by 20 secs."
            ],
            "type": "Passive",
            "icon": "icons/warrior/improved-disarm.jpg",
            "sourceIcon": "ability_warrior_disarm"
          },
          {
            "id": "defiance",
            "name": "Defiance",
            "max": 3,
            "row": 3,
            "col": 4,
            "description": "Increases all threat generated in Defensive stance by an additional 5% while a shield is equipped.",
            "rankDescriptions": [
              "Increases all threat generated in Defensive stance by an additional 5% while a shield is equipped.",
              "Increases all threat generated in Defensive stance by an additional 10% while a shield is equipped.",
              "Increases all threat generated in Defensive stance by an additional 15% while a shield is equipped."
            ],
            "type": "Passive",
            "icon": "icons/warrior/defiance.jpg",
            "sourceIcon": "ability_warrior_innerrage"
          },
          {
            "id": "improved-sunder-armor",
            "name": "Improved Sunder Armor",
            "max": 3,
            "row": 4,
            "col": 1,
            "description": "Reduces the Rage cost of your Sunder Armor ability by 1.",
            "rankDescriptions": [
              "Reduces the Rage cost of your Sunder Armor ability by 1.",
              "Reduces the Rage cost of your Sunder Armor ability by 2.",
              "Reduces the Rage cost of your Sunder Armor ability by 3."
            ],
            "type": "Passive",
            "icon": "icons/warrior/improved-sunder-armor.jpg",
            "sourceIcon": "ability_warrior_sunder"
          },
          {
            "id": "vanguard",
            "name": "Vanguard",
            "max": 1,
            "row": 4,
            "col": 2,
            "description": "Your Charge ability is now usable while in Defensive Stance.",
            "type": "Passive",
            "icon": "icons/warrior/vanguard.jpg",
            "sourceIcon": "ability_warrior_shieldcharge"
          },
          {
            "id": "improved-shield-bash",
            "name": "Improved Shield Bash",
            "max": 2,
            "row": 4,
            "col": 3,
            "description": "Gives your Shield Bash ability a 50% chance to Silence the target for 3 sec.",
            "rankDescriptions": [
              "Gives your Shield Bash ability a 50% chance to Silence the target for 3 sec.",
              "Gives your Shield Bash ability a 100% chance to Silence the target for 3 sec."
            ],
            "type": "Passive",
            "icon": "icons/warrior/improved-shield-bash.jpg",
            "sourceIcon": "ability_warrior_shieldbash"
          },
          {
            "id": "improved-shield-wall",
            "name": "Improved Shield Wall",
            "max": 2,
            "row": 5,
            "col": 1,
            "description": "Reduces the cooldown of your Shield Wall ability by 5.5 min.",
            "rankDescriptions": [
              "Reduces the cooldown of your Shield Wall ability by 5.5 min.",
              "Reduces the cooldown of your Shield Wall ability by 11.0 min."
            ],
            "type": "Passive",
            "icon": "icons/warrior/improved-shield-wall.jpg",
            "sourceIcon": "ability_warrior_shieldwall"
          },
          {
            "id": "concussion-blow",
            "name": "Concussion Blow",
            "max": 1,
            "row": 5,
            "col": 2,
            "description": "Stuns the target for 5 sec.",
            "type": "Active",
            "details": [
              "10 Rage",
              "Melee Range",
              "Instant",
              "45 sec cooldown"
            ],
            "icon": "icons/warrior/concussion-blow.jpg",
            "sourceIcon": "ability_thunderbolt"
          },
          {
            "id": "focused-rage",
            "name": "Focused Rage",
            "max": 3,
            "row": 5,
            "col": 3,
            "description": "Reduces the Rage cost of your offensive abilities by 1.",
            "rankDescriptions": [
              "Reduces the Rage cost of your offensive abilities by 1.",
              "Reduces the Rage cost of your offensive abilities by 2.",
              "Reduces the Rage cost of your offensive abilities by 3."
            ],
            "type": "Passive",
            "icon": "icons/warrior/focused-rage.jpg",
            "sourceIcon": "ability_warrior_focusedrage"
          },
          {
            "id": "bastion",
            "name": "Bastion",
            "max": 5,
            "row": 6,
            "col": 3,
            "description": "Increases all damage you deal by 2% while a shield is equipped.",
            "rankDescriptions": [
              "Increases all damage you deal by 2% while a shield is equipped.",
              "Increases all damage you deal by 4% while a shield is equipped.",
              "Increases all damage you deal by 6% while a shield is equipped.",
              "Increases all damage you deal by 8% while a shield is equipped.",
              "Increases all damage you deal by 10% while a shield is equipped."
            ],
            "type": "Passive",
            "icon": "icons/warrior/bastion.jpg",
            "sourceIcon": "inv_shield_04"
          },
          {
            "id": "shield-slam",
            "name": "Shield Slam",
            "max": 1,
            "row": 7,
            "col": 2,
            "description": "Slam the target with your shield, causing 421 to 439 damage, increased by your Block Value, and has a 50% chance of dispelling 1 magic effect on the target. Causes a very high amount of threat.",
            "type": "Active",
            "details": [
              "20 Rage",
              "Melee Range",
              "Instant",
              "6 sec cooldown"
            ],
            "prerequisite": "concussion-blow",
            "icon": "icons/warrior/shield-slam.jpg",
            "sourceIcon": "inv_shield_05"
          }
        ]
      }
    ]
  }
};const requested=typeof location!=="undefined"&&typeof URLSearchParams!=="undefined"?new URLSearchParams(location.search).get("class"):"druid";root.FOREVER_CLASSES=classes;root.FOREVER_DATA=classes[requested]||classes.druid||Object.values(classes)[0];})(globalThis);
