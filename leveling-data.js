// Generated factual inventory. Routing and reviewed corrections live in leveling-routes.js.
(function(r){const data={
  "schemaVersion": 1,
  "dataVersion": "2026-10-07.1",
  "reviewedAt": "2026-10-07",
  "build": "Forever beta; mixed observed records and Classic fallback — not a complete build dump",
  "sources": {
    "inventory": {
      "title": "Wowhead Forever dungeon quest inventory",
      "url": "https://www.wowhead.com/forever/guide/dungeons/every-dungeon-quest-location",
      "date": "2026-10-07",
      "confidence": "provisional"
    },
    "addon": {
      "title": "Forever Dungeon Quest Guide 0.3.1 · fjalir (MIT-listed factual index)",
      "url": "https://www.curseforge.com/wow/addons/forever-dungeon-quest-guide/files/8967949",
      "date": "2026-09-24",
      "confidence": "provisional"
    },
    "observed": {
      "title": "WoW Source · server-observed Forever quests",
      "url": "https://wowsrc.com/quests/",
      "date": "2026-10-07",
      "confidence": "verified"
    },
    "roster": {
      "title": "Forever dungeon roster and level ranges",
      "url": "https://wowsrc.com/dungeons/",
      "date": "2026-10-07",
      "confidence": "provisional"
    },
    "hearthstone": {
      "title": "Forever Hearthstone spell record",
      "url": "https://www.wowhead.com/forever/spell=8690/hearthstone",
      "date": "2026-10-07",
      "confidence": "verified"
    }
  },
  "rules": {
    "hearthstoneSeconds": 3600,
    "hearthstoneConfidence": "verified",
    "questLogCapacity": 20,
    "questLogConfidence": "provisional",
    "greyRule": "unknown"
  },
  "dungeons": [
    {
      "id": "ragefire-chasm",
      "name": "Ragefire Chasm",
      "recommendedLevel": 14,
      "entryLevel": 8,
      "confidence": "provisional",
      "questIds": [
        5761,
        5725,
        5723,
        5722,
        5728
      ],
      "observedGaps": [
        {
          "name": "Hidden Enemies",
          "questLevel": 16,
          "dungeon": "ragefire-chasm",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "Returning the Lost Satchel",
          "questLevel": 16,
          "dungeon": "ragefire-chasm",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        }
      ],
      "groupRange": [
        13,
        18
      ],
      "zone": "Orgrimmar",
      "levelSource": "roster"
    },
    {
      "id": "hall-of-thanes",
      "name": "Hall of Thanes",
      "recommendedLevel": 14,
      "entryLevel": null,
      "confidence": "provisional",
      "questIds": [
        96403,
        96394,
        96393,
        98423,
        96395
      ],
      "observedGaps": [],
      "groupRange": [
        13,
        18
      ],
      "zone": "Ironforge",
      "levelSource": "roster"
    },
    {
      "id": "wailing-caverns",
      "name": "Wailing Caverns",
      "recommendedLevel": 19,
      "entryLevel": 10,
      "confidence": "provisional",
      "questIds": [
        962,
        1491,
        959,
        1486,
        1487,
        6981,
        914
      ],
      "observedGaps": [
        {
          "name": "Hamuul Runetotem",
          "questLevel": 16,
          "dungeon": "wailing-caverns",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "Nara Wildmane",
          "questLevel": 16,
          "dungeon": "wailing-caverns",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        }
      ],
      "groupRange": [
        17,
        25
      ],
      "zone": "The Barrens",
      "levelSource": "roster"
    },
    {
      "id": "deadmines",
      "name": "Deadmines",
      "recommendedLevel": 19,
      "entryLevel": 10,
      "confidence": "provisional",
      "questIds": [
        168,
        167,
        2040,
        373,
        214,
        166,
        1654
      ],
      "observedGaps": [
        {
          "name": "Destruction in Deadmines",
          "questLevel": 18,
          "dungeon": "deadmines",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "The Defias Brotherhood",
          "questLevel": 22,
          "dungeon": "deadmines",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        }
      ],
      "groupRange": [
        18,
        23
      ],
      "zone": "Westfall",
      "levelSource": "roster"
    },
    {
      "id": "ruins-of-lordaeron",
      "name": "Ruins of Lordaeron",
      "recommendedLevel": 19,
      "entryLevel": null,
      "confidence": "provisional",
      "questIds": [
        92401,
        92422,
        95216,
        92421,
        97288,
        95250,
        95195,
        92415
      ],
      "observedGaps": [
        {
          "name": "Crest of Lordaeron #268579",
          "itemId": 268579,
          "dungeon": "ruins-of-lordaeron",
          "reason": "Inventory lists a starter item without a resolved quest ID. Keep it; chain and faction eligibility require review."
        },
        {
          "name": "Crest of Lordaeron #275521",
          "itemId": 275521,
          "dungeon": "ruins-of-lordaeron",
          "reason": "Inventory lists a starter item without a resolved quest ID. Keep it; chain and faction eligibility require review."
        },
        {
          "name": "Crest of Lordaeron",
          "questLevel": 22,
          "dungeon": "ruins-of-lordaeron",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "Crest of Lordaeron",
          "questLevel": 22,
          "dungeon": "ruins-of-lordaeron",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        }
      ],
      "groupRange": [
        15,
        20
      ],
      "zone": "Tirisfal Glades",
      "levelSource": "roster"
    },
    {
      "id": "shadowfang-keep",
      "name": "Shadowfang Keep",
      "recommendedLevel": 23,
      "entryLevel": 14,
      "confidence": "provisional",
      "questIds": [
        1013,
        1098,
        1014,
        1740,
        1654
      ],
      "observedGaps": [],
      "groupRange": [
        22,
        30
      ],
      "zone": "Silverpine Forest",
      "levelSource": "roster"
    },
    {
      "id": "blackfathom-deeps",
      "name": "Blackfathom Deeps",
      "recommendedLevel": 25,
      "entryLevel": 15,
      "confidence": "provisional",
      "questIds": [
        6563,
        6561,
        6921,
        6922,
        1740,
        6565,
        971,
        1275,
        1199,
        1198,
        1200,
        1654
      ],
      "observedGaps": [
        {
          "name": "Seeking the Kor Gem",
          "questLevel": 22,
          "dungeon": "blackfathom-deeps",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "Trouble in the Deeps",
          "questLevel": 22,
          "dungeon": "blackfathom-deeps",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "The Heart of the Void",
          "questLevel": 25,
          "dungeon": "blackfathom-deeps",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "The Heart of the Void",
          "questLevel": 25,
          "dungeon": "blackfathom-deeps",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "Blackfathom Villainy",
          "questLevel": 27,
          "dungeon": "blackfathom-deeps",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "Blackfathom Villainy",
          "questLevel": 27,
          "dungeon": "blackfathom-deeps",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        }
      ],
      "groupRange": [
        20,
        30
      ],
      "zone": "Ashenvale",
      "levelSource": "roster"
    },
    {
      "id": "stockades",
      "name": "Stockades",
      "recommendedLevel": 26,
      "entryLevel": 15,
      "confidence": "provisional",
      "questIds": [
        387,
        388,
        377,
        386,
        378,
        391
      ],
      "observedGaps": [],
      "groupRange": [
        22,
        30
      ],
      "zone": "Stormwind City",
      "levelSource": "roster"
    },
    {
      "id": "excavation-site",
      "name": "Excavation Site",
      "recommendedLevel": 29,
      "entryLevel": null,
      "confidence": "provisional",
      "questIds": [
        98815,
        95772,
        95646,
        95647,
        95809,
        95810,
        98824,
        95697,
        95664,
        98823,
        95682
      ],
      "observedGaps": [
        {
          "name": "Dragonmaw Rumors",
          "questLevel": 31,
          "dungeon": "excavation-site",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "Fallen in the Fen",
          "questLevel": 31,
          "dungeon": "excavation-site",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        }
      ],
      "groupRange": [
        24,
        29
      ],
      "zone": "Wetlands",
      "levelSource": "roster"
    },
    {
      "id": "gnomeregan",
      "name": "Gnomeregan",
      "recommendedLevel": 33,
      "entryLevel": 19,
      "confidence": "provisional",
      "questIds": [
        2841,
        2842,
        2843,
        2922,
        2928,
        2924,
        2930,
        2929,
        2926,
        2962,
        2951,
        2904,
        2945
      ],
      "observedGaps": [
        {
          "name": "Tinkmaster Overspark",
          "questLevel": 26,
          "dungeon": "gnomeregan",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "The Day After",
          "questLevel": 27,
          "dungeon": "gnomeregan",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "Castpipe's Task",
          "questLevel": 28,
          "dungeon": "gnomeregan",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "Klockmort's Essentials",
          "questLevel": 30,
          "dungeon": "gnomeregan",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "Return of the Ring",
          "questLevel": 34,
          "dungeon": "gnomeregan",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "Return of the Ring",
          "questLevel": 34,
          "dungeon": "gnomeregan",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        }
      ],
      "groupRange": [
        29,
        38
      ],
      "zone": "Dun Morogh",
      "levelSource": "roster"
    },
    {
      "id": "razorfen-kraul",
      "name": "Razorfen Kraul",
      "recommendedLevel": 31,
      "entryLevel": 20,
      "confidence": "provisional",
      "questIds": [
        1102,
        1109,
        6522,
        1101,
        1142,
        1221,
        1144
      ],
      "observedGaps": [
        {
          "name": "Elemental Aid",
          "questLevel": 33,
          "dungeon": "razorfen-kraul",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "Elemental Aid",
          "questLevel": 33,
          "dungeon": "razorfen-kraul",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        }
      ],
      "groupRange": [
        30,
        40
      ],
      "zone": "The Barrens",
      "levelSource": "roster"
    },
    {
      "id": "scarlet-monastery",
      "name": "Scarlet Monastery",
      "recommendedLevel": 37,
      "entryLevel": 20,
      "confidence": "provisional",
      "questIds": [
        1048,
        1053,
        1051,
        1113,
        1049,
        1160,
        1050,
        1951
      ],
      "observedGaps": [
        {
          "name": "Past Due",
          "questLevel": 38,
          "dungeon": "scarlet-monastery",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        }
      ],
      "groupRange": [
        35,
        45
      ],
      "wings": [
        {
          "name": "Scarlet Monastery - Graveyard",
          "range": [
            26,
            36
          ]
        },
        {
          "name": "Scarlet Monastery - Library",
          "range": [
            29,
            39
          ]
        },
        {
          "name": "Scarlet Monastery - Armory",
          "range": [
            32,
            42
          ]
        },
        {
          "name": "Scarlet Monastery - Cathedral",
          "range": [
            35,
            45
          ]
        }
      ],
      "zone": "Tirisfal Glades",
      "levelSource": "roster"
    },
    {
      "id": "razorfen-downs",
      "name": "Razorfen Downs",
      "recommendedLevel": 39,
      "entryLevel": 28,
      "confidence": "provisional",
      "questIds": [
        3341,
        6521,
        3636,
        6626,
        3523,
        3525
      ],
      "observedGaps": [],
      "groupRange": [
        40,
        50
      ],
      "zone": "The Barrens",
      "levelSource": "roster"
    },
    {
      "id": "uldaman",
      "name": "Uldaman",
      "recommendedLevel": 42,
      "entryLevel": 30,
      "confidence": "provisional",
      "questIds": [
        2342,
        2202,
        2283,
        1360,
        2398,
        2240,
        17,
        704,
        1139,
        2198,
        2418,
        709,
        2278,
        1956
      ],
      "observedGaps": [],
      "groupRange": [
        42,
        52
      ],
      "zone": "Badlands",
      "levelSource": "roster"
    },
    {
      "id": "zul-farrak",
      "name": "Zul'Farrak",
      "recommendedLevel": 44,
      "entryLevel": 35,
      "confidence": "provisional",
      "questIds": [
        2936,
        2991,
        2768,
        2865,
        3042,
        2846,
        2770,
        3527
      ],
      "observedGaps": [],
      "groupRange": [
        44,
        54
      ],
      "zone": "Tanaris",
      "levelSource": "roster"
    },
    {
      "id": "maraudon",
      "name": "Maraudon",
      "recommendedLevel": 46,
      "entryLevel": 35,
      "confidence": "provisional",
      "questIds": [
        7068,
        7029,
        7064,
        7070,
        7041,
        7065,
        7028,
        7044,
        7066,
        7067,
        7046
      ],
      "observedGaps": [],
      "groupRange": [
        46,
        55
      ],
      "zone": "Desolace",
      "levelSource": "roster"
    },
    {
      "id": "sunken-temple",
      "name": "Sunken Temple",
      "recommendedLevel": 51,
      "entryLevel": 35,
      "confidence": "provisional",
      "questIds": [
        1445,
        4146,
        4143,
        1475,
        1446,
        3373,
        3446,
        3447,
        3528
      ],
      "observedGaps": [],
      "groupRange": [
        52,
        58
      ],
      "zone": "Swamp of Sorrows",
      "levelSource": "roster"
    },
    {
      "id": "blackrock-depths",
      "name": "Blackrock Depths",
      "recommendedLevel": 55,
      "entryLevel": 40,
      "confidence": "provisional",
      "questIds": [
        4081,
        4134,
        4082,
        4063,
        3906,
        3907,
        3981,
        7201,
        4132,
        4003,
        4262,
        4263,
        4286,
        4126,
        4341,
        4362,
        4241,
        4322,
        4136,
        4123,
        7848,
        3802,
        4201,
        4024
      ],
      "observedGaps": [],
      "groupRange": [
        52,
        60
      ],
      "zone": "Burning Steppes",
      "levelSource": "roster"
    },
    {
      "id": "dire-maul",
      "name": "Dire Maul",
      "recommendedLevel": 56,
      "entryLevel": 52,
      "confidence": "provisional",
      "questIds": [
        7489,
        7488,
        7441,
        5526,
        7463,
        7461,
        7507,
        7481,
        7482,
        5525,
        5518,
        5528,
        7703
      ],
      "observedGaps": [],
      "groupRange": [
        54,
        60
      ],
      "zone": "Feralas",
      "levelSource": "roster"
    },
    {
      "id": "lower-blackrock-spire-lbrs",
      "name": "Lower Blackrock Spire (LBRS)",
      "recommendedLevel": 60,
      "entryLevel": 44,
      "confidence": "provisional",
      "questIds": [
        4724,
        4981,
        4903,
        4701,
        5089,
        5001,
        4862,
        4729,
        4866,
        4742,
        4867,
        4788
      ],
      "observedGaps": [],
      "groupRange": [
        55,
        60
      ],
      "zone": "Burning Steppes",
      "levelSource": "roster"
    },
    {
      "id": "scholomance",
      "name": "Scholomance",
      "recommendedLevel": 60,
      "entryLevel": 45,
      "confidence": "provisional",
      "questIds": [
        5341,
        7668,
        5343,
        5529,
        5582,
        5382,
        5515,
        5384,
        4771,
        5466
      ],
      "observedGaps": [],
      "groupRange": [
        58,
        60
      ],
      "zone": "Western Plaguelands",
      "levelSource": "roster"
    },
    {
      "id": "stratholme",
      "name": "Stratholme",
      "recommendedLevel": 60,
      "entryLevel": 45,
      "confidence": "provisional",
      "questIds": [
        5214,
        5251,
        5282,
        5122,
        5262,
        5848,
        6163,
        5243,
        5212,
        5213,
        5125,
        5263,
        5463,
        8945
      ],
      "observedGaps": [],
      "groupRange": [
        58,
        60
      ],
      "zone": "Eastern Plaguelands",
      "levelSource": "roster"
    },
    {
      "id": "upper-blackrock-spire-ubrs",
      "name": "Upper Blackrock Spire (UBRS)",
      "recommendedLevel": 60,
      "entryLevel": 48,
      "confidence": "provisional",
      "questIds": [
        4768,
        4974,
        6602,
        4764,
        5102,
        6502,
        7761,
        5160,
        5047,
        4735,
        6821,
        5127
      ],
      "observedGaps": [],
      "groupRange": [
        56,
        60
      ],
      "zone": "Burning Steppes",
      "levelSource": "roster"
    },
    {
      "id": "city-of-dalaran",
      "name": "City of Dalaran",
      "recommendedLevel": 28,
      "entryLevel": null,
      "confidence": "unknown",
      "questIds": [],
      "observedGaps": [
        {
          "name": "A Green Sample",
          "questLevel": 33,
          "dungeon": "city-of-dalaran",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "Heart of Disruption",
          "questLevel": 33,
          "dungeon": "city-of-dalaran",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "Heart of Disruption",
          "questLevel": 33,
          "dungeon": "city-of-dalaran",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "Opportunistic Education",
          "questLevel": 33,
          "dungeon": "city-of-dalaran",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "Power Overwhelming",
          "questLevel": 33,
          "dungeon": "city-of-dalaran",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "Source of Power",
          "questLevel": 33,
          "dungeon": "city-of-dalaran",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "Starving Arcane",
          "questLevel": 33,
          "dungeon": "city-of-dalaran",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        },
        {
          "name": "The Grave Knight",
          "questLevel": 33,
          "dungeon": "city-of-dalaran",
          "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
        }
      ],
      "groupRange": [
        28,
        33
      ],
      "zone": "Alterac Mountains",
      "levelSource": "roster"
    },
    {
      "id": "the-drowned-city",
      "name": "The Drowned City",
      "recommendedLevel": 35,
      "entryLevel": null,
      "confidence": "unknown",
      "questIds": [],
      "observedGaps": [],
      "groupRange": [
        35,
        40
      ],
      "zone": "Stranglethorn Vale",
      "levelSource": "roster"
    },
    {
      "id": "kroldok-stronghold",
      "name": "Krol'dok Stronghold",
      "recommendedLevel": 40,
      "entryLevel": null,
      "confidence": "unknown",
      "questIds": [],
      "observedGaps": [],
      "groupRange": [
        40,
        45
      ],
      "zone": "Riverglades",
      "levelSource": "roster"
    },
    {
      "id": "alcaz-prison",
      "name": "Alcaz Prison",
      "recommendedLevel": 48,
      "entryLevel": null,
      "confidence": "unknown",
      "questIds": [],
      "observedGaps": [],
      "groupRange": [
        48,
        53
      ],
      "zone": "Dustwallow Marsh",
      "levelSource": "roster"
    },
    {
      "id": "timbermaw-hold",
      "name": "Timbermaw Hold",
      "recommendedLevel": 55,
      "entryLevel": null,
      "confidence": "unknown",
      "questIds": [],
      "observedGaps": [],
      "groupRange": [
        55,
        60
      ],
      "zone": "Felwood",
      "levelSource": "roster"
    },
    {
      "id": "shapers-terrace",
      "name": "Shaper's Terrace",
      "recommendedLevel": 58,
      "entryLevel": null,
      "confidence": "unknown",
      "questIds": [],
      "observedGaps": [],
      "groupRange": [
        58,
        60
      ],
      "zone": "Un'Goro Crater",
      "levelSource": "roster"
    }
  ],
  "quests": [
    {
      "id": 5761,
      "name": "Slaying the Beast",
      "dungeons": [
        "ragefire-chasm"
      ],
      "minLevel": 9,
      "questLevel": 16,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 3216,
        "npc": "Neeru Fireblade",
        "zone": "Orgrimmar",
        "coordinates": [
          49,
          50
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Neeru Fireblade",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Taragaman the Hungerer's Heart",
      "observed": true
    },
    {
      "id": 5725,
      "name": "The Power to Destroy...",
      "dungeons": [
        "ragefire-chasm"
      ],
      "minLevel": 9,
      "questLevel": 16,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 2425,
        "npc": "Varimathras",
        "zone": "Undercity",
        "coordinates": [
          56,
          92
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Varimathras",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Spells of Shadow, Incantations from the Nether",
      "observed": true
    },
    {
      "id": 5723,
      "name": "Testing an Enemy's Strength",
      "dungeons": [
        "ragefire-chasm"
      ],
      "minLevel": 9,
      "questLevel": 15,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11833,
        "npc": "Rahauro",
        "zone": "Thunder Bluff",
        "coordinates": [
          70,
          30
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Rahauro",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Ragefire Trogg ×8, Ragefire Shaman ×8",
      "observed": true
    },
    {
      "id": 5722,
      "name": "Searching for the Lost Satchel",
      "dungeons": [
        "ragefire-chasm"
      ],
      "minLevel": 9,
      "questLevel": 16,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11834,
        "npc": "Maur Grimtotem",
        "zone": "Inside RFC",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "inside",
      "itemRefs": [
        {
          "id": 14381,
          "name": "Grimtotem Satchel"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": null,
      "observed": true
    },
    {
      "id": 5728,
      "name": "Hidden Enemies",
      "dungeons": [
        "ragefire-chasm"
      ],
      "minLevel": 9,
      "questLevel": 16,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 4949,
        "npc": "Thrall",
        "zone": "Orgrimmar",
        "coordinates": [
          31,
          37
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        5726
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 96403,
      "name": "Important Heirlooms",
      "dungeons": [
        "hall-of-thanes"
      ],
      "minLevel": 14,
      "questLevel": 15,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 265003,
        "npc": "Thom Filch",
        "zone": "Ironforge",
        "coordinates": [
          32.6,
          44.6
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Dwarven Heirloom ×8",
      "observed": true
    },
    {
      "id": 96394,
      "name": "The Restless Dead",
      "dungeons": [
        "hall-of-thanes"
      ],
      "minLevel": 15,
      "questLevel": 15,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "4294967372",
      "professions": [],
      "pickup": {
        "npcId": 264943,
        "npc": "Afadra Dunwall",
        "zone": "Ironforge",
        "coordinates": [
          64.8,
          58.4
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Enraged Apparition ×15, Tormented Soul ×10",
      "observed": true
    },
    {
      "id": 96393,
      "name": "Old Ironforge Incursion",
      "dungeons": [
        "hall-of-thanes"
      ],
      "minLevel": 15,
      "questLevel": 16,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "4294967372",
      "professions": [],
      "pickup": {
        "npcId": 264936,
        "npc": "Earthseer Farsen",
        "zone": "Dun Morogh",
        "coordinates": [
          64.8,
          58.4
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "King Magni Bronzebeard",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [
        96391
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [
        {
          "id": 274268,
          "name": "Dark Iron Map"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [
        "Source chain wording is ambiguous; do not infer prerequisite direction."
      ],
      "objectives": "Durgen Dirgehammer's Head",
      "observed": true
    },
    {
      "id": 98423,
      "name": "The Treaty of Understanding",
      "dungeons": [
        "hall-of-thanes"
      ],
      "minLevel": 16,
      "questLevel": 16,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": null,
        "npc": null,
        "zone": "The Hall of Thanes",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "item",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [
        "Check and keep the starter item; a drop is not guaranteed in one clear."
      ],
      "objectives": null
    },
    {
      "id": 96395,
      "name": "An Ancient Grudge",
      "dungeons": [
        "hall-of-thanes"
      ],
      "minLevel": 14,
      "questLevel": 15,
      "faction": "Unknown",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 265002,
        "npc": "Ghostly Attendant",
        "zone": "The Hall of Thanes",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "inside",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [
        "Faction eligibility has not been resolved."
      ],
      "objectives": "Faldrim Anvilmar",
      "observed": true
    },
    {
      "id": 962,
      "name": "Serpentbloom",
      "dungeons": [
        "wailing-caverns"
      ],
      "minLevel": 14,
      "questLevel": 18,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 3419,
        "npc": "Apothecary Zamah",
        "zone": "Thunder Bluff",
        "coordinates": [
          34,
          21
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Serpentbloom ×10",
      "observed": true
    },
    {
      "id": 1491,
      "name": "Smart Drinks",
      "dungeons": [
        "wailing-caverns"
      ],
      "minLevel": 13,
      "questLevel": 18,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 3446,
        "npc": "Mebok Mizzyrix",
        "zone": "The Barrens",
        "coordinates": [
          62,
          37
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Creature #3446",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [
        865
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Wailing Essence ×6",
      "observed": true
    },
    {
      "id": 959,
      "name": "Trouble at the Docks",
      "dungeons": [
        "wailing-caverns"
      ],
      "minLevel": 14,
      "questLevel": 18,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 3665,
        "npc": "Crane Operator Bigglefuzz",
        "zone": "The Barrens",
        "coordinates": [
          63,
          37
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "99-Year-Old Port",
      "observed": true
    },
    {
      "id": 1486,
      "name": "Deviate Hides",
      "dungeons": [
        "wailing-caverns"
      ],
      "minLevel": 13,
      "questLevel": 17,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 5767,
        "npc": "Nalpak",
        "zone": "The Barrens",
        "coordinates": [
          46,
          35
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Deviate Hide ×20",
      "observed": true
    },
    {
      "id": 1487,
      "name": "Deviate Eradication",
      "dungeons": [
        "wailing-caverns"
      ],
      "minLevel": 15,
      "questLevel": 21,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 5768,
        "npc": "Ebru",
        "zone": "The Barrens",
        "coordinates": [
          46,
          35
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Deviate Ravager ×7, Deviate Viper ×7, Deviate Shambler ×7, Deviate Dreadfang ×7",
      "observed": true
    },
    {
      "id": 6981,
      "name": "The Glowing Shard",
      "dungeons": [
        "wailing-caverns"
      ],
      "minLevel": 10,
      "questLevel": 26,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 3654,
        "npc": "Mutanus the Devourer",
        "zone": "Wailing Caverns",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Creature #8418",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "item",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed",
        "observed"
      ],
      "notes": [
        "Check and keep the starter item; a drop is not guaranteed in one clear."
      ],
      "objectives": "Glowing Shard",
      "observed": true
    },
    {
      "id": 914,
      "name": "Leaders of the Fang",
      "dungeons": [
        "wailing-caverns"
      ],
      "minLevel": 15,
      "questLevel": 22,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 5770,
        "npc": "Nara Wildmane",
        "zone": "Thunder Bluff",
        "coordinates": [
          45,
          23
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Nara Wildmane",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [
        870
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Gem of Cobrahn, Gem of Anacondra, Gem of Pythas, Gem of Serpentis",
      "observed": true
    },
    {
      "id": 168,
      "name": "Collecting Memories",
      "dungeons": [
        "deadmines"
      ],
      "minLevel": 14,
      "questLevel": 18,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 656,
        "npc": "Wilder Thistlenettle",
        "zone": "Stormwind",
        "coordinates": [
          65,
          21
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Wilder Thistlenettle",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Miners' Union Card ×4",
      "observed": true
    },
    {
      "id": 167,
      "name": "Oh Brother...",
      "dungeons": [
        "deadmines"
      ],
      "minLevel": 15,
      "questLevel": 20,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 656,
        "npc": "Wilder Thistlenettle",
        "zone": "Stormwind",
        "coordinates": [
          65,
          21
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Wilder Thistlenettle",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Thistlenettle's Badge",
      "observed": true
    },
    {
      "id": 2040,
      "name": "Underground Assault",
      "dungeons": [
        "deadmines"
      ],
      "minLevel": 15,
      "questLevel": 20,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 6579,
        "npc": "Shoni the Shilent",
        "zone": "Stormwind",
        "coordinates": [
          55,
          13
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Shoni the Shilent",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Gnoam Sprecklesprocket",
      "observed": true
    },
    {
      "id": 373,
      "name": "The Unsent Letter",
      "dungeons": [
        "deadmines"
      ],
      "minLevel": 16,
      "questLevel": 22,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 639,
        "npc": "Edwin VanCleef",
        "zone": "The Deadmines",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Baros Alexston",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [
        391
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "item",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [
        "Source chain wording is ambiguous; do not infer prerequisite direction.",
        "Check and keep the starter item; a drop is not guaranteed in one clear."
      ],
      "objectives": "An Unsent Letter",
      "observed": true
    },
    {
      "id": 214,
      "name": "Red Silk Bandanas",
      "dungeons": [
        "deadmines"
      ],
      "minLevel": 14,
      "questLevel": 17,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 820,
        "npc": "Scout Riell",
        "zone": "Westfall",
        "coordinates": [
          56,
          47
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Scout Riell",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [
        65
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Red Silk Bandana ×10",
      "observed": true
    },
    {
      "id": 166,
      "name": "The Defias Brotherhood",
      "dungeons": [
        "deadmines"
      ],
      "minLevel": 14,
      "questLevel": 22,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 234,
        "npc": "Gryan Stoutmantle",
        "zone": "Westfall",
        "coordinates": [
          56,
          47
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        214
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 1654,
      "name": "The Test of Righteousness",
      "dungeons": [
        "deadmines",
        "shadowfang-keep",
        "blackfathom-deeps"
      ],
      "minLevel": 20,
      "questLevel": 22,
      "faction": "Alliance",
      "classMask": 2,
      "raceMask": "5",
      "professions": [],
      "pickup": {
        "npcId": 6181,
        "npc": "Jordan Stilwell",
        "zone": "Ironforge",
        "coordinates": [
          52,
          36
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 92401,
      "name": "A Frightened Request",
      "dungeons": [
        "ruins-of-lordaeron"
      ],
      "minLevel": 15,
      "questLevel": 22,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 250686,
        "npc": "Tabitha Heartweaver",
        "zone": "Undercity",
        "coordinates": [
          34,
          21
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Investigate the disappearance of Edward Heartweaver in the Ruins of Lordaeron.",
      "observed": true
    },
    {
      "id": 92422,
      "name": "The Wrath of Rath'mael",
      "dungeons": [
        "ruins-of-lordaeron"
      ],
      "minLevel": 15,
      "questLevel": 22,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 251001,
        "npc": "Deathguard Kristof",
        "zone": "Brill",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Rath'mael",
      "observed": true
    },
    {
      "id": 95216,
      "name": "The New Plague",
      "dungeons": [
        "ruins-of-lordaeron"
      ],
      "minLevel": 16,
      "questLevel": 22,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11835,
        "npc": "Theodore Griffs",
        "zone": "Undercity",
        "coordinates": [
          47,
          72.6
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Highly Toxic Strain",
      "observed": true
    },
    {
      "id": 92421,
      "name": "Light's Justice",
      "dungeons": [
        "ruins-of-lordaeron"
      ],
      "minLevel": 15,
      "questLevel": 22,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 266484,
        "npc": "Morbin Lightbane",
        "zone": "Undercity",
        "coordinates": [
          57.8,
          89.8
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Intact Limbs ×25",
      "observed": true
    },
    {
      "id": 97288,
      "name": "Unending Torment",
      "dungeons": [
        "ruins-of-lordaeron"
      ],
      "minLevel": 15,
      "questLevel": 21,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": null,
        "npc": null,
        "zone": null,
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Master Apothecary Faranell",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Abominable Head",
      "observed": true
    },
    {
      "id": 95250,
      "name": "Abominable Creatures",
      "dungeons": [
        "ruins-of-lordaeron"
      ],
      "minLevel": 16,
      "questLevel": 21,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": null,
        "npc": null,
        "zone": "TBD",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Captain Truman",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Head of the Baron",
      "observed": true
    },
    {
      "id": 95195,
      "name": "Bloodied Insignia",
      "dungeons": [
        "ruins-of-lordaeron"
      ],
      "minLevel": 16,
      "questLevel": 22,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 466,
        "npc": "General Marcus Jonathan",
        "zone": "Stormwind City",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "General Marcus Jonathan",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Bloodied Insignia ×10",
      "observed": true
    },
    {
      "id": 92415,
      "name": "Remember That I Love You",
      "dungeons": [
        "ruins-of-lordaeron"
      ],
      "minLevel": 15,
      "questLevel": 22,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": null,
        "npc": null,
        "zone": null,
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Orphan Matron Nightingale",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Blood-Stained Letter",
      "observed": true
    },
    {
      "id": 1013,
      "name": "The Book of Ur",
      "dungeons": [
        "shadowfang-keep"
      ],
      "minLevel": 16,
      "questLevel": 26,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 2934,
        "npc": "Keeper Bel'dugur",
        "zone": "Undercity",
        "coordinates": [
          53,
          54
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Keeper Bel'dugur",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "The Book of Ur",
      "observed": true
    },
    {
      "id": 1098,
      "name": "Deathstalkers in Shadowfang",
      "dungeons": [
        "shadowfang-keep"
      ],
      "minLevel": 18,
      "questLevel": 25,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 1952,
        "npc": "High Executor Hadrec",
        "zone": "Silverpine Forest",
        "coordinates": [
          43,
          41
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": null,
      "observed": true
    },
    {
      "id": 1014,
      "name": "Arugal Must Die",
      "dungeons": [
        "shadowfang-keep"
      ],
      "minLevel": 18,
      "questLevel": 27,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 1938,
        "npc": "Dalar Dawnweaver",
        "zone": "Silverpine Forest",
        "coordinates": [
          44,
          39
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Dalar Dawnweaver",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Head of Arugal",
      "observed": true
    },
    {
      "id": 1740,
      "name": "The Orb of Soran'ruk",
      "dungeons": [
        "shadowfang-keep",
        "blackfathom-deeps"
      ],
      "minLevel": 20,
      "questLevel": 25,
      "faction": "Both",
      "classMask": 256,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 6247,
        "npc": "Doan Karhan",
        "zone": "The Barrens",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Doan Karhan",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Soran'ruk Fragment ×3, Large Soran'ruk Fragment",
      "observed": true
    },
    {
      "id": 6563,
      "name": "The Essence of Aku'Mai",
      "dungeons": [
        "blackfathom-deeps"
      ],
      "minLevel": 17,
      "questLevel": 22,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 12736,
        "npc": "Je'neu Sancrea",
        "zone": "Ashenvale",
        "coordinates": [
          11,
          34
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Je'neu Sancrea",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Sapphire of Aku'Mai ×20",
      "observed": true
    },
    {
      "id": 6561,
      "name": "Blackfathom Villainy",
      "dungeons": [
        "blackfathom-deeps"
      ],
      "minLevel": 18,
      "questLevel": 27,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 4887,
        "npc": "Ghamoo-ra",
        "zone": "Blackfathom Deeps",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 6921,
      "name": "Amongst the Ruins",
      "dungeons": [
        "blackfathom-deeps"
      ],
      "minLevel": 21,
      "questLevel": 27,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 12736,
        "npc": "Je'neu Sancrea",
        "zone": "Ashenvale",
        "coordinates": [
          11,
          34
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Je'neu Sancrea",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [
        {
          "id": 16762,
          "name": "Fathom Core"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Fathom Core",
      "observed": true
    },
    {
      "id": 6922,
      "name": "Baron Aquanis",
      "dungeons": [
        "blackfathom-deeps"
      ],
      "minLevel": 21,
      "questLevel": 30,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 12876,
        "npc": "Baron Aquanis",
        "zone": null,
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "item",
      "itemRefs": [
        {
          "id": 16782,
          "name": "Strange Water Globe"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [
        "Check and keep the starter item; a drop is not guaranteed in one clear."
      ],
      "objectives": null
    },
    {
      "id": 6565,
      "name": "Allegiance to the Old Gods",
      "dungeons": [
        "blackfathom-deeps"
      ],
      "minLevel": 17,
      "questLevel": 26,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 4802,
        "npc": "Blackfathom Tide Priestess",
        "zone": null,
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Je'neu Sancrea",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "item",
      "itemRefs": [
        {
          "id": 16790,
          "name": "Damp Note"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed",
        "observed"
      ],
      "notes": [
        "Check and keep the starter item; a drop is not guaranteed in one clear."
      ],
      "objectives": "Lorgus Jett",
      "observed": true
    },
    {
      "id": 971,
      "name": "Knowledge in the Deeps",
      "dungeons": [
        "blackfathom-deeps"
      ],
      "minLevel": 10,
      "questLevel": 23,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 2786,
        "npc": "Gerrig Bonegrip",
        "zone": "Ironforge",
        "coordinates": [
          50,
          5
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Gerrig Bonegrip",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Lorgalis Manuscript",
      "observed": true
    },
    {
      "id": 1275,
      "name": "Researching the Corruption",
      "dungeons": [
        "blackfathom-deeps"
      ],
      "minLevel": 18,
      "questLevel": 24,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 8997,
        "npc": "Gershala Nightwhisper",
        "zone": "Darkshore",
        "coordinates": [
          38,
          43
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Gershala Nightwhisper",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Corrupted Brain Stem ×8",
      "observed": true
    },
    {
      "id": 1199,
      "name": "Twilight Falls",
      "dungeons": [
        "blackfathom-deeps"
      ],
      "minLevel": 20,
      "questLevel": 25,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 4784,
        "npc": "Argent Guard Manados",
        "zone": "Darnassas",
        "coordinates": [
          55,
          24
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Argent Guard Manados",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Twilight Pendant ×10",
      "observed": true
    },
    {
      "id": 1198,
      "name": "In Search of Thaelrid",
      "dungeons": [
        "blackfathom-deeps"
      ],
      "minLevel": 18,
      "questLevel": 24,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 4786,
        "npc": "Dawnwatcher Shaedlass",
        "zone": "Darnassas",
        "coordinates": [
          55,
          24
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Argent Guard Thaelrid",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [
        1200
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": null,
      "observed": true
    },
    {
      "id": 1200,
      "name": "Blackfathom Villainy",
      "dungeons": [
        "blackfathom-deeps"
      ],
      "minLevel": 18,
      "questLevel": 27,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 4887,
        "npc": "Ghamoo-ra",
        "zone": "Blackfathom Deeps",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        1198
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 387,
      "name": "Quell the Uprising",
      "dungeons": [
        "stockades"
      ],
      "minLevel": 22,
      "questLevel": 26,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 1719,
        "npc": "Warden Thelwater",
        "zone": "Stormwind",
        "coordinates": [
          41,
          58
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Warden Thelwater",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Defias Prisoner ×10, Defias Convict ×8, Defias Insurgent ×8",
      "observed": true
    },
    {
      "id": 388,
      "name": "The Color of Blood",
      "dungeons": [
        "stockades"
      ],
      "minLevel": 22,
      "questLevel": 26,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 1721,
        "npc": "Nikova Raskol",
        "zone": "Stockades",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Nikova Raskol",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Red Wool Bandana ×10",
      "observed": true
    },
    {
      "id": 377,
      "name": "Crime and Punishment",
      "dungeons": [
        "stockades"
      ],
      "minLevel": 22,
      "questLevel": 26,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 270,
        "npc": "Councilman Millstipe",
        "zone": "Duskwood",
        "coordinates": [
          42,
          47
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Councilman Millstipe",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Hand of Dextren Ward",
      "observed": true
    },
    {
      "id": 386,
      "name": "What Comes Around...",
      "dungeons": [
        "stockades"
      ],
      "minLevel": 22,
      "questLevel": 25,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 859,
        "npc": "Guard Berton",
        "zone": "Redridge Mountains",
        "coordinates": [
          26,
          46
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Guard Berton",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Head of Targorr",
      "observed": true
    },
    {
      "id": 378,
      "name": "The Fury Runs Deep",
      "dungeons": [
        "stockades"
      ],
      "minLevel": 25,
      "questLevel": 27,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 1074,
        "npc": "Motley Garmason",
        "zone": "Wetlands",
        "coordinates": [
          49,
          18
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        303
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Head of Deepfury",
      "observed": true
    },
    {
      "id": 391,
      "name": "The Stockade Riots",
      "dungeons": [
        "stockades"
      ],
      "minLevel": 16,
      "questLevel": 29,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 1719,
        "npc": "Warden Thelwater",
        "zone": "Stormwind",
        "coordinates": [
          41,
          58
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Warden Thelwater",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [
        373
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Head of Bazil Thredd",
      "observed": true
    },
    {
      "id": 98815,
      "name": "Highland Hides",
      "dungeons": [
        "excavation-site"
      ],
      "minLevel": 24,
      "questLevel": 28,
      "faction": "Unknown",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 2094,
        "npc": "James Halloran",
        "zone": "Wetlands",
        "coordinates": [
          8,
          55
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "James Halloran",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [
        469
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [
        "Faction eligibility has not been resolved."
      ],
      "objectives": "Thicket Raptor Hide ×4",
      "observed": true
    },
    {
      "id": 95772,
      "name": "Songblade Search",
      "dungeons": [
        "excavation-site"
      ],
      "minLevel": 24,
      "questLevel": 31,
      "faction": "Unknown",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 956,
        "npc": "Dorin Songblade",
        "zone": "Redridge Mountains",
        "coordinates": [
          25.6,
          46.6
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [
        "Faction eligibility has not been resolved."
      ],
      "objectives": null,
      "observed": true
    },
    {
      "id": 95646,
      "name": "Horrors in the Highland",
      "dungeons": [
        "excavation-site"
      ],
      "minLevel": 24,
      "questLevel": 31,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 1244,
        "npc": "Rethiel the Greenwarden",
        "zone": "Wetlands",
        "coordinates": [
          56.2,
          40.6
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Rethiel the Greenwarden",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Horrible Rootcore",
      "observed": true
    },
    {
      "id": 95647,
      "name": "Lost in the Thicket Things",
      "dungeons": [
        "excavation-site"
      ],
      "minLevel": 24,
      "questLevel": 31,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 3970,
        "npc": "Llana",
        "zone": null,
        "coordinates": [
          35,
          48.6
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        95737
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Learn what happened to Ardin Grassman",
      "observed": true
    },
    {
      "id": 95809,
      "name": "Heartwoven",
      "dungeons": [
        "excavation-site"
      ],
      "minLevel": 24,
      "questLevel": 31,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": null,
        "npc": null,
        "zone": null,
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Caitlin Grassman",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [
        95647
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Reed-woven Heart",
      "observed": true
    },
    {
      "id": 95810,
      "name": "Lost Relic Carry",
      "dungeons": [
        "excavation-site"
      ],
      "minLevel": 24,
      "questLevel": 31,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": null,
        "npc": null,
        "zone": null,
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Creature #1077",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [
        {
          "id": 270865,
          "name": "Titan Relic"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Titan Relic",
      "observed": true
    },
    {
      "id": 98824,
      "name": "Prehistoric Prism",
      "dungeons": [
        "excavation-site"
      ],
      "minLevel": 24,
      "questLevel": 31,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": null,
        "npc": null,
        "zone": null,
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "High Explorer Magellas",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [
        95810
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Titan Relic",
      "observed": true
    },
    {
      "id": 95697,
      "name": "Changing Tastes",
      "dungeons": [
        "excavation-site"
      ],
      "minLevel": 24,
      "questLevel": 31,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": null,
        "npc": null,
        "zone": null,
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Thicket Raptor Meat ×4",
      "observed": true
    },
    {
      "id": 95664,
      "name": "Elder Knowledge",
      "dungeons": [
        "excavation-site"
      ],
      "minLevel": 24,
      "questLevel": 31,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": null,
        "npc": null,
        "zone": null,
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [
        {
          "id": 270865,
          "name": "Titan Relic"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Titan Relic",
      "observed": true
    },
    {
      "id": 98823,
      "name": "Earthen Echo",
      "dungeons": [
        "excavation-site"
      ],
      "minLevel": 24,
      "questLevel": 31,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": null,
        "npc": null,
        "zone": null,
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Muln Earthfury",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [
        95664
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Titan Relic",
      "observed": true
    },
    {
      "id": 95682,
      "name": "Open the Maw",
      "dungeons": [
        "excavation-site"
      ],
      "minLevel": 24,
      "questLevel": 31,
      "faction": "Unknown",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 13155,
        "npc": "Deathstalker Agent",
        "zone": null,
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [
        "Faction eligibility has not been resolved."
      ],
      "objectives": "Dragonmaw Saboteur ×2, Dragonmaw Warder ×4, Dragonmaw Dispatch",
      "observed": true
    },
    {
      "id": 2841,
      "name": "Rig Wars",
      "dungeons": [
        "gnomeregan"
      ],
      "minLevel": 25,
      "questLevel": 35,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 3412,
        "npc": "Nogg",
        "zone": "Orgrimmar",
        "coordinates": [
          76,
          25
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Nogg",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Rig Blueprints, Thermaplugg's Safe Combination",
      "observed": true
    },
    {
      "id": 2842,
      "name": "Chief Engineer Scooty",
      "dungeons": [
        "gnomeregan"
      ],
      "minLevel": 20,
      "questLevel": 35,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 3413,
        "npc": "Sovik",
        "zone": "Orgrimmar",
        "coordinates": [
          76,
          25
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Scooty",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [
        2841
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": null,
      "observed": true
    },
    {
      "id": 2843,
      "name": "Gnomer-gooooone!",
      "dungeons": [
        "gnomeregan"
      ],
      "minLevel": 20,
      "questLevel": 35,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 7853,
        "npc": "Scooty",
        "zone": "Strangethorn Vale",
        "coordinates": [
          27,
          77
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "not-shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": null,
      "observed": true
    },
    {
      "id": 2922,
      "name": "Save Techbot's Brain!",
      "dungeons": [
        "gnomeregan"
      ],
      "minLevel": 20,
      "questLevel": 26,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 7944,
        "npc": "Tinkmaster Overspark",
        "zone": "Ironforge",
        "coordinates": [
          69,
          50
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Tinkmaster Overspark",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Techbot's Memory Core",
      "observed": true
    },
    {
      "id": 2928,
      "name": "Gyrodrillmatic Excavationators",
      "dungeons": [
        "gnomeregan"
      ],
      "minLevel": 20,
      "questLevel": 30,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 6579,
        "npc": "Shoni the Shilent",
        "zone": "Stormwind",
        "coordinates": [
          55,
          12
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Shoni the Shilent",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Robo-mechanical Guts ×24",
      "observed": true
    },
    {
      "id": 2924,
      "name": "Essential Artificials",
      "dungeons": [
        "gnomeregan"
      ],
      "minLevel": 24,
      "questLevel": 30,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 6169,
        "npc": "Klockmort Spannerspan",
        "zone": "Ironforge",
        "coordinates": [
          47,
          64
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Klockmort Spannerspan",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Essential Artificial ×12",
      "observed": true
    },
    {
      "id": 2930,
      "name": "Data Rescue",
      "dungeons": [
        "gnomeregan"
      ],
      "minLevel": 25,
      "questLevel": 30,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 7950,
        "npc": "Master Mechanic Castpipe",
        "zone": "Ironforge",
        "coordinates": [
          69,
          48
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Master Mechanic Castpipe",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Prismatic Punch Card",
      "observed": true
    },
    {
      "id": 2929,
      "name": "The Grand Betrayal",
      "dungeons": [
        "gnomeregan"
      ],
      "minLevel": 25,
      "questLevel": 35,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 7937,
        "npc": "High Tinker Mekkatorque",
        "zone": "Ironforge",
        "coordinates": [
          68,
          49
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "High Tinker Mekkatorque",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Mekgineer Thermaplugg",
      "observed": true
    },
    {
      "id": 2926,
      "name": "Gnogaine",
      "dungeons": [
        "gnomeregan"
      ],
      "minLevel": 20,
      "questLevel": 27,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 1268,
        "npc": "Ozzie Togglevolt",
        "zone": "Dun Morogh",
        "coordinates": [
          45,
          49
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Ozzie Togglevolt",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "not-shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Full Leaden Collection Phial",
      "observed": true
    },
    {
      "id": 2962,
      "name": "The Only Cure is More Green Glow",
      "dungeons": [
        "gnomeregan"
      ],
      "minLevel": 20,
      "questLevel": 30,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 1268,
        "npc": "Ozzie Togglevolt",
        "zone": "Dun Morogh",
        "coordinates": [
          45,
          49
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Ozzie Togglevolt",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [
        2926
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "High Potency Radioactive Fallout, Heavy Leaden Collection Phial",
      "observed": true
    },
    {
      "id": 2951,
      "name": "The Sparklematic 5200!",
      "dungeons": [
        "gnomeregan"
      ],
      "minLevel": 25,
      "questLevel": 30,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": null,
        "npc": null,
        "zone": "Gnomeregan",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [
        {
          "id": 9308,
          "name": "Grime-Encrusted Object"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Grime-Encrusted Object",
      "observed": true
    },
    {
      "id": 2904,
      "name": "A Fine Mess",
      "dungeons": [
        "gnomeregan"
      ],
      "minLevel": 20,
      "questLevel": 30,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 7850,
        "npc": "Kernobee",
        "zone": "Gnomeregan",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Scooty",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "escort",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": null,
      "observed": true
    },
    {
      "id": 2945,
      "name": "Grime-Encrusted Ring",
      "dungeons": [
        "gnomeregan"
      ],
      "minLevel": 28,
      "questLevel": 34,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": null,
        "npc": null,
        "zone": "Gnomeregan",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        2947,
        2949
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Grime-Encrusted Ring",
      "observed": true
    },
    {
      "id": 1102,
      "name": "A Vengeful Fate",
      "dungeons": [
        "razorfen-kraul"
      ],
      "minLevel": 29,
      "questLevel": 34,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 4451,
        "npc": "Auld Stonespire",
        "zone": "Thunder Bluff",
        "coordinates": [
          37,
          29
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Auld Stonespire",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Razorflank's Heart",
      "observed": true
    },
    {
      "id": 1109,
      "name": "Going, Going, Guano!",
      "dungeons": [
        "razorfen-kraul"
      ],
      "minLevel": 30,
      "questLevel": 33,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 2055,
        "npc": "Master Apothecary Faranell",
        "zone": "Undercity",
        "coordinates": [
          48,
          69
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Master Apothecary Faranell",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [
        1113
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Kraul Guano",
      "observed": true
    },
    {
      "id": 6522,
      "name": "An Unholy Alliance",
      "dungeons": [
        "razorfen-kraul"
      ],
      "minLevel": 28,
      "questLevel": 36,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 4421,
        "npc": "Charlga Razorflank",
        "zone": "Razorfen Kraul",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        6521
      ],
      "chainUnresolved": true,
      "sharing": "not-shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [
        {
          "id": 17008,
          "name": "Small Scroll"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 1101,
      "name": "The Crone of the Kraul",
      "dungeons": [
        "razorfen-kraul"
      ],
      "minLevel": 29,
      "questLevel": 34,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 4048,
        "npc": "Falfindel Waywarder",
        "zone": "Feralas",
        "coordinates": [
          89,
          46
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Falfindel Waywarder",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [
        1100
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Razorflank's Medallion",
      "observed": true
    },
    {
      "id": 1142,
      "name": "Mortality Wanes",
      "dungeons": [
        "razorfen-kraul"
      ],
      "minLevel": 25,
      "questLevel": 30,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 4510,
        "npc": "Heralath Fallowbrook",
        "zone": "Razorfen Kraul",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Treshala Fallowbrook",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Treshala's Pendant",
      "observed": true
    },
    {
      "id": 1221,
      "name": "Blueleaf Tubers",
      "dungeons": [
        "razorfen-kraul"
      ],
      "minLevel": 20,
      "questLevel": 26,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 3446,
        "npc": "Mebok Mizzyrix",
        "zone": "The Barrens",
        "coordinates": [
          62,
          37
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Creature #3446",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "not-shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Blueleaf Tuber ×6, Crate With Holes, Snufflenose Owner's Manual, Snufflenose Command Stick",
      "observed": true
    },
    {
      "id": 1144,
      "name": "Willix the Importer",
      "dungeons": [
        "razorfen-kraul"
      ],
      "minLevel": 22,
      "questLevel": 30,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 4508,
        "npc": "Willix the Importer",
        "zone": "Razorfen Kraul",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "escort",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": null,
      "observed": true
    },
    {
      "id": 1048,
      "name": "Into The Scarlet Monastery",
      "dungeons": [
        "scarlet-monastery"
      ],
      "minLevel": 33,
      "questLevel": 42,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 2425,
        "npc": "Varimathras",
        "zone": "Undercity",
        "coordinates": [
          56,
          92
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 1053,
      "name": "In the Name of the Light",
      "dungeons": [
        "scarlet-monastery"
      ],
      "minLevel": 34,
      "questLevel": 40,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 3980,
        "npc": "Raleigh the Devout",
        "zone": "Hillsbrad Foothills",
        "coordinates": [
          51,
          58
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        6141
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 1051,
      "name": "Vorrel's Revenge",
      "dungeons": [
        "scarlet-monastery"
      ],
      "minLevel": 25,
      "questLevel": 33,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 3981,
        "npc": "Vorrel Sengutz",
        "zone": "Scarlet Monastery",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Monika Sengutz",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Vorrel's Wedding Ring",
      "observed": true
    },
    {
      "id": 1113,
      "name": "Hearts of Zeal",
      "dungeons": [
        "scarlet-monastery"
      ],
      "minLevel": 30,
      "questLevel": 33,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 2055,
        "npc": "Master Apothecary Faranell",
        "zone": "Undercity",
        "coordinates": [
          48,
          69
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        1109
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Heart of Zeal ×20",
      "observed": true
    },
    {
      "id": 1049,
      "name": "Compendium of the Fallen",
      "dungeons": [
        "scarlet-monastery"
      ],
      "minLevel": 28,
      "questLevel": 38,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "162",
      "professions": [],
      "pickup": {
        "npcId": 3978,
        "npc": "Sage Truthseeker",
        "zone": "Thunder Bluff",
        "coordinates": [
          36,
          26
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Sage Truthseeker",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Compendium of the Fallen",
      "observed": true
    },
    {
      "id": 1160,
      "name": "Test of Lore",
      "dungeons": [
        "scarlet-monastery"
      ],
      "minLevel": 25,
      "questLevel": 36,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 4488,
        "npc": "Parqual Fintallas",
        "zone": "Undercity",
        "coordinates": [
          57,
          65
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Parqual Fintallas",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [
        1149
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Beginnings of the Undead Threat",
      "observed": true
    },
    {
      "id": 1050,
      "name": "Mythology of the Titans",
      "dungeons": [
        "scarlet-monastery"
      ],
      "minLevel": 28,
      "questLevel": 38,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 3979,
        "npc": "Librarian Mae Paledust",
        "zone": "Ironforge",
        "coordinates": [
          75,
          12
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Librarian Mae Paledust",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Mythology of the Titans",
      "observed": true
    },
    {
      "id": 1951,
      "name": "Rituals of Power",
      "dungeons": [
        "scarlet-monastery"
      ],
      "minLevel": 30,
      "questLevel": 40,
      "faction": "Both",
      "classMask": 128,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 6548,
        "npc": "Magus Tirth",
        "zone": null,
        "coordinates": [
          78,
          75
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Tabetha",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [
        1947
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Rituals of Power",
      "observed": true
    },
    {
      "id": 3341,
      "name": "Bring the End",
      "dungeons": [
        "razorfen-downs"
      ],
      "minLevel": 37,
      "questLevel": 42,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 2308,
        "npc": "Andrew Brownell",
        "zone": "Undercity",
        "coordinates": [
          74,
          33
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 6521,
      "name": "An Unholy Alliance",
      "dungeons": [
        "razorfen-downs"
      ],
      "minLevel": 28,
      "questLevel": 36,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 2425,
        "npc": "Varimathras",
        "zone": "Undercity",
        "coordinates": [
          36,
          26
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Varimathras",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [
        6522
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Ambassador Malcin's Head",
      "observed": true
    },
    {
      "id": 3636,
      "name": "Bring the Light",
      "dungeons": [
        "razorfen-downs"
      ],
      "minLevel": 39,
      "questLevel": 42,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 1284,
        "npc": "Archbishop Benedictus",
        "zone": "Stormwind",
        "coordinates": [
          39,
          27
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "not-shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 6626,
      "name": "A Host of Evil",
      "dungeons": [
        "razorfen-downs"
      ],
      "minLevel": 28,
      "questLevel": 35,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 12866,
        "npc": "Myriam Moonsinger",
        "zone": "The Barrens",
        "coordinates": [
          49,
          95
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Myriam Moonsinger",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Razorfen Battleguard ×8, Razorfen Thornweaver ×8, Death's Head Cultist ×8",
      "observed": true
    },
    {
      "id": 3523,
      "name": "Scourge of the Downs",
      "dungeons": [
        "razorfen-downs"
      ],
      "minLevel": 32,
      "questLevel": 37,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 8516,
        "npc": "Belnistrasz",
        "zone": "Razorfen Downs",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "not-shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Belnistrasz's Oathstone",
      "observed": true
    },
    {
      "id": 3525,
      "name": "Extinguishing the Idol",
      "dungeons": [
        "razorfen-downs"
      ],
      "minLevel": 32,
      "questLevel": 37,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 8516,
        "npc": "Belnistrasz",
        "zone": "Razorfen Downs",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        3523
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "escort",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 2342,
      "name": "Reclaimed Treasures",
      "dungeons": [
        "uldaman"
      ],
      "minLevel": 33,
      "questLevel": 43,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 5651,
        "npc": "Patrick Garrett",
        "zone": "Undercity",
        "coordinates": [
          62,
          48
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 2202,
      "name": "Uldaman Reagent Run",
      "dungeons": [
        "uldaman"
      ],
      "minLevel": 36,
      "questLevel": 42,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 6868,
        "npc": "Jarkal Mossmeld",
        "zone": "Badlands",
        "coordinates": [
          3,
          46
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        2258
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 2283,
      "name": "Necklace Recovery",
      "dungeons": [
        "uldaman"
      ],
      "minLevel": 37,
      "questLevel": 41,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": null,
        "npc": null,
        "zone": "Badlands",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "not-shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [
        {
          "id": 7666,
          "name": "Shattered Necklace"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 1360,
      "name": "Reclaimed Treasures",
      "dungeons": [
        "uldaman"
      ],
      "minLevel": 33,
      "questLevel": 43,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 6294,
        "npc": "Krom Stoutarm",
        "zone": "Ironforge",
        "coordinates": [
          74,
          9
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 2398,
      "name": "The Lost Dwarves",
      "dungeons": [
        "uldaman"
      ],
      "minLevel": 35,
      "questLevel": 40,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 1356,
        "npc": "Prospector Stormpike",
        "zone": "Ironforge",
        "coordinates": [
          75,
          12
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 2240,
      "name": "The Hidden Chamber",
      "dungeons": [
        "uldaman"
      ],
      "minLevel": 35,
      "questLevel": 40,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": null,
        "npc": null,
        "zone": "Uldaman",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        2398
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 17,
      "name": "Uldaman Reagent Run",
      "dungeons": [
        "uldaman"
      ],
      "minLevel": 38,
      "questLevel": 42,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 1470,
        "npc": "Ghak Healtouch",
        "zone": "Loch Modan",
        "coordinates": [
          37,
          49
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        2500
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 704,
      "name": "Agmond's Fate",
      "dungeons": [
        "uldaman"
      ],
      "minLevel": 33,
      "questLevel": 38,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 1344,
        "npc": "Prospector Ironband",
        "zone": "Loch Modan",
        "coordinates": [
          65,
          65
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Prospector Ironband",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [
        707
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Carved Stone Urn ×4",
      "observed": true
    },
    {
      "id": 1139,
      "name": "The Lost Tablets of Will",
      "dungeons": [
        "uldaman"
      ],
      "minLevel": 30,
      "questLevel": 45,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 2918,
        "npc": "Advisor Belgrum",
        "zone": "Ironforge",
        "coordinates": [
          77,
          9
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        720
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 2198,
      "name": "The Shattered Necklace",
      "dungeons": [
        "uldaman"
      ],
      "minLevel": 37,
      "questLevel": 41,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": null,
        "npc": null,
        "zone": "Badlands",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "not-shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [
        {
          "id": 7666,
          "name": "Shattered Necklace"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 2418,
      "name": "Power Stones",
      "dungeons": [
        "uldaman"
      ],
      "minLevel": 30,
      "questLevel": 36,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 2817,
        "npc": "Rigglefuzz",
        "zone": "Badlands",
        "coordinates": [
          42,
          52
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Rigglefuzz",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Dentrium Power Stone ×8, An'Alleum Power Stone ×8",
      "observed": true
    },
    {
      "id": 709,
      "name": "Solution to Doom",
      "dungeons": [
        "uldaman"
      ],
      "minLevel": 30,
      "questLevel": 40,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 2785,
        "npc": "Theldurin the Lost",
        "zone": "Badlands",
        "coordinates": [
          51,
          76
        ],
        "confidence": "provisional"
      },
      "turnIn": {
        "npc": "Theldurin the Lost",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon",
        "observed"
      ],
      "notes": [],
      "objectives": "Tablet of Ryun'eh",
      "observed": true
    },
    {
      "id": 2278,
      "name": "The Platinum Discs",
      "dungeons": [
        "uldaman"
      ],
      "minLevel": 40,
      "questLevel": 47,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 2748,
        "npc": "Archaedas",
        "zone": "Uldaman",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "not-shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 1956,
      "name": "Power in Uldaman",
      "dungeons": [
        "uldaman"
      ],
      "minLevel": 35,
      "questLevel": 40,
      "faction": "Both",
      "classMask": 128,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 6546,
        "npc": "Tabetha",
        "zone": null,
        "coordinates": [
          46,
          57
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        1953
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 2936,
      "name": "The Spider God",
      "dungeons": [
        "zul-farrak"
      ],
      "minLevel": 40,
      "questLevel": 45,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 3188,
        "npc": "Master Gadrin",
        "zone": "Durotar",
        "coordinates": [
          56,
          74
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        2933
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 2991,
      "name": "Nekrum's Medallion",
      "dungeons": [
        "zul-farrak"
      ],
      "minLevel": 40,
      "questLevel": 47,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 8022,
        "npc": "Thadius Grimshade",
        "zone": "Blasted Lands",
        "coordinates": [
          66,
          19
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        2988
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 2768,
      "name": "Divino-matic Rod",
      "dungeons": [
        "zul-farrak"
      ],
      "minLevel": 40,
      "questLevel": 47,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 7407,
        "npc": "Chief Engineer Bilgewhizzle",
        "zone": "Tanaris",
        "coordinates": [
          52,
          28
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 2865,
      "name": "Scarab Shells",
      "dungeons": [
        "zul-farrak"
      ],
      "minLevel": 40,
      "questLevel": 45,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 7876,
        "npc": "Tran'rek",
        "zone": "Tanaris",
        "coordinates": [
          51,
          26
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 3042,
      "name": "Troll Temper",
      "dungeons": [
        "zul-farrak"
      ],
      "minLevel": 40,
      "questLevel": 45,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 7804,
        "npc": "Trenton Lighthammer",
        "zone": "Tanaris",
        "coordinates": [
          51,
          28
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 2846,
      "name": "Tiara of the Deep",
      "dungeons": [
        "zul-farrak"
      ],
      "minLevel": 40,
      "questLevel": 46,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 6546,
        "npc": "Tabetha",
        "zone": "Dustwallow Marsh",
        "coordinates": [
          46,
          57
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 2770,
      "name": "Gahz'rilla",
      "dungeons": [
        "zul-farrak"
      ],
      "minLevel": 40,
      "questLevel": 50,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 4453,
        "npc": "Wizzle Brassbolts",
        "zone": "Thousand Needles",
        "coordinates": [
          78,
          77
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [
        {
          "id": 9240,
          "name": "Mallet of Zul'Farrak"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 3527,
      "name": "The Prophecy of Mosh'aru",
      "dungeons": [
        "zul-farrak"
      ],
      "minLevel": 40,
      "questLevel": 47,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 8579,
        "npc": "Yeh'kinya",
        "zone": "Tanaris",
        "coordinates": [
          67,
          22
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        3520
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7068,
      "name": "Shadowshard Fragments",
      "dungeons": [
        "maraudon"
      ],
      "minLevel": 39,
      "questLevel": 42,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 7311,
        "npc": "Uthel'nay",
        "zone": "Orgrimmar",
        "coordinates": [
          39,
          86
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "not-shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7029,
      "name": "Vyletongue Corruption",
      "dungeons": [
        "maraudon"
      ],
      "minLevel": 41,
      "questLevel": 47,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11823,
        "npc": "Vark Battlescar",
        "zone": "Desolace",
        "coordinates": [
          23,
          70
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7064,
      "name": "Corruption of Earth and Seed",
      "dungeons": [
        "maraudon"
      ],
      "minLevel": 45,
      "questLevel": 51,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 13699,
        "npc": "Selendra",
        "zone": "Desolace",
        "coordinates": [
          26,
          77
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7070,
      "name": "Shadowshard Fragments",
      "dungeons": [
        "maraudon"
      ],
      "minLevel": 39,
      "questLevel": 42,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 4967,
        "npc": "Archmage Tervosh",
        "zone": "Dustwallow Marsh",
        "coordinates": [
          66,
          49
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7041,
      "name": "Vyletongue Corruption",
      "dungeons": [
        "maraudon"
      ],
      "minLevel": 41,
      "questLevel": 47,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11715,
        "npc": "Talendria",
        "zone": "Desolace",
        "coordinates": [
          68,
          8
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7065,
      "name": "Corruption of Earth and Seed",
      "dungeons": [
        "maraudon"
      ],
      "minLevel": 45,
      "questLevel": 51,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 13698,
        "npc": "Keeper Marandis",
        "zone": "Desolace",
        "coordinates": [
          63,
          10
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7028,
      "name": "Twisted Evils",
      "dungeons": [
        "maraudon"
      ],
      "minLevel": 41,
      "questLevel": 47,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 13656,
        "npc": "Willow",
        "zone": "Desolace",
        "coordinates": [
          62,
          39
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7044,
      "name": "Legends of Maraudon",
      "dungeons": [
        "maraudon"
      ],
      "minLevel": 41,
      "questLevel": 49,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 13697,
        "npc": "Cavindra",
        "zone": "Maraudon",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7066,
      "name": "Seed of Life",
      "dungeons": [
        "maraudon"
      ],
      "minLevel": 39,
      "questLevel": 51,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 12238,
        "npc": "Zaetar's Spirit",
        "zone": "Maraudon",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "not-shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7067,
      "name": "The Pariah's Instructions",
      "dungeons": [
        "maraudon"
      ],
      "minLevel": 39,
      "questLevel": 48,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 13717,
        "npc": "Centaur Pariah",
        "zone": "Desolace",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "not-shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7046,
      "name": "The Scepter of Celebras",
      "dungeons": [
        "maraudon"
      ],
      "minLevel": 41,
      "questLevel": 49,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 13716,
        "npc": "Celebras the Redeemed",
        "zone": "Maraudon",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        7044
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 1445,
      "name": "The Temple of Atal'Hakkar",
      "dungeons": [
        "sunken-temple"
      ],
      "minLevel": 38,
      "questLevel": 50,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 1443,
        "npc": "Fel'zerul",
        "zone": "Swamp of Sorrows",
        "coordinates": [
          47,
          54
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        1424
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4146,
      "name": "Zapper Fuel",
      "dungeons": [
        "sunken-temple"
      ],
      "minLevel": 47,
      "questLevel": 52,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 8496,
        "npc": "Liv Rizzlefix",
        "zone": "The Barrens",
        "coordinates": [
          62,
          38
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        4145
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4143,
      "name": "Haze of Evil",
      "dungeons": [
        "sunken-temple"
      ],
      "minLevel": 47,
      "questLevel": 52,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 7775,
        "npc": "Gregan Brewspewer",
        "zone": "Feralas",
        "coordinates": [
          45,
          25
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        4141
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 1475,
      "name": "Into The Temple of Atal'Hakkar",
      "dungeons": [
        "sunken-temple"
      ],
      "minLevel": 38,
      "questLevel": 50,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 5384,
        "npc": "Brohann Caskbelly",
        "zone": "Stormwind",
        "coordinates": [
          64,
          21
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        1448
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 1446,
      "name": "Jammal'an the Prophet",
      "dungeons": [
        "sunken-temple"
      ],
      "minLevel": 38,
      "questLevel": 53,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 5598,
        "npc": "Atal'ai Exile",
        "zone": "Hinterlands",
        "coordinates": [
          33,
          75
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 3373,
      "name": "The Essence of Eranikus",
      "dungeons": [
        "sunken-temple"
      ],
      "minLevel": 48,
      "questLevel": 55,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 5709,
        "npc": "Shade of Eranikus",
        "zone": "Sunken Temple",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "item",
      "itemRefs": [
        {
          "id": 10454,
          "name": "Essence of Eranikus"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [
        "Check and keep the starter item; a drop is not guaranteed in one clear."
      ],
      "objectives": null
    },
    {
      "id": 3446,
      "name": "Into the Depths",
      "dungeons": [
        "sunken-temple"
      ],
      "minLevel": 46,
      "questLevel": 51,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 7771,
        "npc": "Marvon Rivetseeker",
        "zone": "Tanaris",
        "coordinates": [
          52,
          45
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        3380,
        3445
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 3447,
      "name": "Secret of the Circle",
      "dungeons": [
        "sunken-temple"
      ],
      "minLevel": 46,
      "questLevel": 51,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 7771,
        "npc": "Marvon Rivetseeker",
        "zone": "Tanaris",
        "coordinates": [
          52,
          45
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        3380,
        3445
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 3528,
      "name": "The God Hakkar",
      "dungeons": [
        "sunken-temple"
      ],
      "minLevel": 40,
      "questLevel": 53,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 8579,
        "npc": "Yeh'kinya",
        "zone": "Tanaris",
        "coordinates": [
          67,
          22
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        3520
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4081,
      "name": "KILL ON SIGHT: Dark Iron Dwarves",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 48,
      "questLevel": 52,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": null,
        "npc": null,
        "zone": "Badlands",
        "coordinates": [
          4,
          47
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4134,
      "name": "Lost Thunderbrew Recipe",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 50,
      "questLevel": 55,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9078,
        "npc": "Shadowmage Vivian Lagrave",
        "zone": "Badlands",
        "coordinates": [
          3,
          48
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        4133
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4082,
      "name": "KILL ON SIGHT: High Ranking Dark Iron Officials",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 50,
      "questLevel": 54,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": null,
        "npc": null,
        "zone": "Badlands",
        "coordinates": [
          4,
          47
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        4081
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4063,
      "name": "The Rise of the Machines",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 52,
      "questLevel": 58,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 2921,
        "npc": "Lotwil Veriatus",
        "zone": "Badlands",
        "coordinates": [
          25,
          44
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        4061
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 3906,
      "name": "Disharmony of Flame",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 48,
      "questLevel": 52,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9084,
        "npc": "Thunderheart",
        "zone": "Badlands",
        "coordinates": [
          3.6,
          48
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 3907,
      "name": "Disharmony of Fire",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 48,
      "questLevel": 56,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9084,
        "npc": "Thunderheart",
        "zone": "Badlands",
        "coordinates": [
          3.6,
          48
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        3906
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 3981,
      "name": "Commander Gor'shak",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 48,
      "questLevel": 52,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9081,
        "npc": "Galamav the Marksman",
        "zone": "Badlands",
        "coordinates": [
          6,
          47
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        3906
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7201,
      "name": "The Last Element",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 48,
      "questLevel": 54,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9078,
        "npc": "Shadowmage Vivian Lagrave",
        "zone": "Badlands",
        "coordinates": [
          3,
          48
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        3906
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4132,
      "name": "Operation: Death to Angerforge",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 52,
      "questLevel": 58,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9077,
        "npc": "Warlord Goretooth",
        "zone": "Badlands",
        "coordinates": [
          6,
          47
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        4081,
        4122
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4003,
      "name": "The Royal Rescue",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 48,
      "questLevel": 59,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 4949,
        "npc": "Thrall",
        "zone": "Orgrimmar",
        "coordinates": [
          32,
          38
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        3981
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4262,
      "name": "Overmaster Pyron",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 48,
      "questLevel": 52,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9561,
        "npc": "Jalinda Sprig",
        "zone": "Burning Steppes",
        "coordinates": [
          85,
          70
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4263,
      "name": "Incendius!",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 48,
      "questLevel": 56,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9561,
        "npc": "Jalinda Sprig",
        "zone": "Burning Steppes",
        "coordinates": [
          85,
          70
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        4262
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4286,
      "name": "The Good Stuff",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 50,
      "questLevel": 56,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9177,
        "npc": "Oralius",
        "zone": "Burning Steppes",
        "coordinates": [
          84,
          68
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4126,
      "name": "Hurley Blackbreath",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 50,
      "questLevel": 55,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 1267,
        "npc": "Ragnar Thunderbrew",
        "zone": "Dun Morogh",
        "coordinates": [
          46,
          52
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4341,
      "name": "Kharan Mighthammer",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 50,
      "questLevel": 59,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 2784,
        "npc": "King Magni Bronzebeard",
        "zone": "Ironforge",
        "coordinates": [
          39,
          56
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        3702
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4362,
      "name": "The Fate of the Kingdom",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 50,
      "questLevel": 59,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 2784,
        "npc": "King Magni Bronzebeard",
        "zone": "Ironforge",
        "coordinates": [
          39,
          56
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        4341
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4241,
      "name": "Marshal Windsor",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 48,
      "questLevel": 54,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9560,
        "npc": "Marshal Maxwell",
        "zone": "Burning Steppes",
        "coordinates": [
          84,
          68
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        4182
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4322,
      "name": "Jail Break!",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 50,
      "questLevel": 58,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9023,
        "npc": "Marshal Windsor",
        "zone": "Blackrock Depths ",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        4182,
        4241,
        4282
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4136,
      "name": "Ribbly Screwspigot",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 50,
      "questLevel": 53,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9544,
        "npc": "Yuka Screwspigot",
        "zone": "Burning Steppes",
        "coordinates": [
          66,
          21
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        4324
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4123,
      "name": "The Heart of the Mountain",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 50,
      "questLevel": 55,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9536,
        "npc": "Maxwort Uberglint",
        "zone": "Burning Steppes",
        "coordinates": [
          65,
          23
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7848,
      "name": "Attunement to the Core",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 14387,
        "npc": "Lothos Riftwaker",
        "zone": "Blackrock Mountain",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "not-shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 3802,
      "name": "Dark Iron Legacy",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 48,
      "questLevel": 52,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 8888,
        "npc": "Franclorn Forgewright",
        "zone": "Blackrock Mountain",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        3801
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4201,
      "name": "The Love Potion",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 50,
      "questLevel": 54,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9500,
        "npc": "Mistress Nagmara",
        "zone": "Blackrock Depths",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "not-shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4024,
      "name": "A Taste of Flame",
      "dungeons": [
        "blackrock-depths"
      ],
      "minLevel": 52,
      "questLevel": 58,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9459,
        "npc": "Cyrus Therepentous",
        "zone": "Burning Steppes",
        "coordinates": [
          95,
          31
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        3441
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7489,
      "name": "Lethtendris's Web",
      "dungeons": [
        "dire-maul"
      ],
      "minLevel": 54,
      "questLevel": 57,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 7776,
        "npc": "Talo Thornhoof",
        "zone": "Feralas",
        "coordinates": [
          76,
          43
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7488,
      "name": "Lethtendris's Web",
      "dungeons": [
        "dire-maul"
      ],
      "minLevel": 54,
      "questLevel": 57,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 7877,
        "npc": "Latronicus Moonspear",
        "zone": "Feralas",
        "coordinates": [
          30,
          46
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7441,
      "name": "Pusillin and the Elder Azj'Tordin",
      "dungeons": [
        "dire-maul"
      ],
      "minLevel": 54,
      "questLevel": 58,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 14355,
        "npc": "Azj'Tordin",
        "zone": "Feralas",
        "coordinates": [
          76,
          37
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5526,
      "name": "Shards of the Felvine",
      "dungeons": [
        "dire-maul"
      ],
      "minLevel": 56,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11801,
        "npc": "Rabine Saturna",
        "zone": "Moonglade",
        "coordinates": [
          51,
          45
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        5527
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7463,
      "name": "Arcane Refreshment",
      "dungeons": [
        "dire-maul"
      ],
      "minLevel": 60,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 128,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 14368,
        "npc": "Lorekeeper Lydros",
        "zone": null,
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7461,
      "name": "The Madness Within",
      "dungeons": [
        "dire-maul"
      ],
      "minLevel": 56,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 14358,
        "npc": "Shen'dralar Ancient",
        "zone": "Dire Maul",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7507,
      "name": "Foror's Compendium",
      "dungeons": [
        "dire-maul"
      ],
      "minLevel": 60,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": null,
        "npc": null,
        "zone": "Dire Maul",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "not-shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [
        {
          "id": 18401,
          "name": "Nostro's Compendium of Dragon Slaying"
        },
        {
          "id": 18348,
          "name": "Item 18348"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7481,
      "name": "Elven Legends",
      "dungeons": [
        "dire-maul"
      ],
      "minLevel": 54,
      "questLevel": 60,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 14373,
        "npc": "Sage Korolusk",
        "zone": "Feralas",
        "coordinates": [
          74,
          43
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        7485,
        7483,
        7484
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7482,
      "name": "Elven Legends",
      "dungeons": [
        "dire-maul"
      ],
      "minLevel": 54,
      "questLevel": 60,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 14374,
        "npc": "Scholar Runethorn",
        "zone": "Feralas",
        "coordinates": [
          31,
          43
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        7485,
        7483,
        7484
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5525,
      "name": "Free Knot!",
      "dungeons": [
        "dire-maul"
      ],
      "minLevel": 56,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 14338,
        "npc": "Knot Thimblejack",
        "zone": "Dire Maul",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [
        {
          "id": 18250,
          "name": "Gordok Shackle Key"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5518,
      "name": "The Gordok Ogre Suit",
      "dungeons": [
        "dire-maul"
      ],
      "minLevel": 56,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 14338,
        "npc": "Knot Thimblejack",
        "zone": "Dire Maul",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5528,
      "name": "The Gordok Taste Test",
      "dungeons": [
        "dire-maul"
      ],
      "minLevel": 56,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 14322,
        "npc": "Stomper Kreeg",
        "zone": "Dire Maul",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7703,
      "name": "Unfinished Gordok Business",
      "dungeons": [
        "dire-maul"
      ],
      "minLevel": 56,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 14325,
        "npc": "Captain Kromcrush",
        "zone": "Dire Maul",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [
        {
          "id": 18336,
          "name": "Gauntlet of Gordok Might"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4724,
      "name": "The Pack Mistress",
      "dungeons": [
        "lower-blackrock-spire-lbrs"
      ],
      "minLevel": 55,
      "questLevel": 59,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9081,
        "npc": "Galamav the Marksman",
        "zone": "Badlands",
        "coordinates": [
          6,
          47
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4981,
      "name": "Operative Bijou",
      "dungeons": [
        "lower-blackrock-spire-lbrs"
      ],
      "minLevel": 55,
      "questLevel": 59,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9080,
        "npc": "Lexlort",
        "zone": "Badlands",
        "coordinates": [
          5,
          47
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        4982
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4903,
      "name": "Warlord's Command",
      "dungeons": [
        "lower-blackrock-spire-lbrs"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9077,
        "npc": "Warlord Goretooth",
        "zone": "Badlands",
        "coordinates": [
          5,
          47
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "not-shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4701,
      "name": "Put Her Down",
      "dungeons": [
        "lower-blackrock-spire-lbrs"
      ],
      "minLevel": 55,
      "questLevel": 59,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9562,
        "npc": "Helendis Riverhorn",
        "zone": "Burning Steppes",
        "coordinates": [
          65,
          69
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5089,
      "name": "General Drakkisath's Command",
      "dungeons": [
        "lower-blackrock-spire-lbrs"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9568,
        "npc": "Overlord Wyrmthalak",
        "zone": "Blackrock Spire",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "item",
      "itemRefs": [
        {
          "id": 12780,
          "name": "General Drakkisath's Command"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [
        "Check and keep the starter item; a drop is not guaranteed in one clear."
      ],
      "objectives": null
    },
    {
      "id": 5001,
      "name": "Bijou's Belongings",
      "dungeons": [
        "lower-blackrock-spire-lbrs"
      ],
      "minLevel": 55,
      "questLevel": 59,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 10257,
        "npc": "Bijou",
        "zone": "Blackrock Spire",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4862,
      "name": "En-Ay-Es-Tee-Why",
      "dungeons": [
        "lower-blackrock-spire-lbrs"
      ],
      "minLevel": 55,
      "questLevel": 59,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 10260,
        "npc": "Kibler",
        "zone": "Burning Steppes",
        "coordinates": [
          65,
          21
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4729,
      "name": "Kibler's Exotic Pets",
      "dungeons": [
        "lower-blackrock-spire-lbrs"
      ],
      "minLevel": 55,
      "questLevel": 59,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 10260,
        "npc": "Kibler",
        "zone": "Burning Steppes",
        "coordinates": [
          65,
          21
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "not-shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4866,
      "name": "Mother's Milk",
      "dungeons": [
        "lower-blackrock-spire-lbrs"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9563,
        "npc": "Ragged John",
        "zone": "Burning Steppes",
        "coordinates": [
          65,
          23
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4742,
      "name": "Seal of Ascension",
      "dungeons": [
        "lower-blackrock-spire-lbrs"
      ],
      "minLevel": 57,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": null,
        "npc": null,
        "zone": "Blackrock Spire",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "item",
      "itemRefs": [
        {
          "id": 12219,
          "name": "Unadorned Seal of Ascension"
        },
        {
          "id": 12335,
          "name": "Gemstone of Smolderthorn"
        },
        {
          "id": 12336,
          "name": "Gemstone of Spirestone"
        },
        {
          "id": 12337,
          "name": "Gemstone of Bloodaxe"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [
        "Check and keep the starter item; a drop is not guaranteed in one clear."
      ],
      "objectives": null
    },
    {
      "id": 4867,
      "name": "Urok Doomhowl",
      "dungeons": [
        "lower-blackrock-spire-lbrs"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 10799,
        "npc": "Warosh",
        "zone": "Blackrock Spire",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "not-shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4788,
      "name": "The Final Tablets",
      "dungeons": [
        "lower-blackrock-spire-lbrs"
      ],
      "minLevel": 40,
      "questLevel": 58,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 10460,
        "npc": "Prospector Ironboot",
        "zone": "Tanaris",
        "coordinates": [
          66,
          24
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        3520
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5341,
      "name": "Barov Family Fortune",
      "dungeons": [
        "scholomance"
      ],
      "minLevel": 52,
      "questLevel": 60,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11022,
        "npc": "Alexi Barov",
        "zone": "Tirisfal Glades",
        "coordinates": [
          83,
          71
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7668,
      "name": "The Darkreaver Menace",
      "dungeons": [
        "scholomance"
      ],
      "minLevel": 58,
      "questLevel": 60,
      "faction": "Horde",
      "classMask": 64,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 13417,
        "npc": "Sagorne Creststrider",
        "zone": null,
        "coordinates": [
          38,
          35
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        7667
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5343,
      "name": "Barov Family Fortune",
      "dungeons": [
        "scholomance"
      ],
      "minLevel": 52,
      "questLevel": 60,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11023,
        "npc": "Weldon Barov",
        "zone": "Western Plaguelands",
        "coordinates": [
          43,
          83
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5529,
      "name": "Plagued Hatchlings",
      "dungeons": [
        "scholomance"
      ],
      "minLevel": 55,
      "questLevel": 58,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11035,
        "npc": "Betina Bigglezink",
        "zone": "Eastern Plaguelands",
        "coordinates": [
          81,
          59
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5582,
      "name": "Healthy Dragon Scale",
      "dungeons": [
        "scholomance"
      ],
      "minLevel": 55,
      "questLevel": 58,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 10678,
        "npc": "Plagued Hatchling",
        "zone": "Scholomance",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        5529
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "item",
      "itemRefs": [
        {
          "id": 13920,
          "name": "Healthy Dragon Scale"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [
        "Check and keep the starter item; a drop is not guaranteed in one clear."
      ],
      "objectives": null
    },
    {
      "id": 5382,
      "name": "Doctor Theolen Krastinov, the Butcher",
      "dungeons": [
        "scholomance"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11216,
        "npc": "Eva Sarkhoff",
        "zone": "Western Plaguelands",
        "coordinates": [
          70,
          73
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5515,
      "name": "Krastinov's Bag of Horrors",
      "dungeons": [
        "scholomance"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11216,
        "npc": "Eva Sarkhoff",
        "zone": "Western Plaguelands",
        "coordinates": [
          70,
          73
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        5382
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5384,
      "name": "Kirtonos the Herald",
      "dungeons": [
        "scholomance"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11216,
        "npc": "Eva Sarkhoff",
        "zone": "Western Plaguelands",
        "coordinates": [
          70,
          73
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        5515
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [
        {
          "id": 13544,
          "name": "Item 13544"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4771,
      "name": "Dawn's Gambit",
      "dungeons": [
        "scholomance"
      ],
      "minLevel": 57,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11035,
        "npc": "Betina Bigglezink",
        "zone": "Eastern Plaguelands",
        "coordinates": [
          81,
          59
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        4726
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5466,
      "name": "The Lich, Ras Frostwhisper",
      "dungeons": [
        "scholomance"
      ],
      "minLevel": 57,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11286,
        "npc": "Magistrate Marduke",
        "zone": "Western Plaguelands",
        "coordinates": [
          70,
          74
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        5382
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [
        {
          "id": 13544,
          "name": "Item 13544"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5214,
      "name": "The Great Fras Siabi",
      "dungeons": [
        "stratholme"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11033,
        "npc": "Smokey LaRue",
        "zone": "Eastern Plaguelands",
        "coordinates": [
          80,
          58
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5251,
      "name": "The Archivist",
      "dungeons": [
        "stratholme"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11039,
        "npc": "Duke Nicholas Zverenhoff",
        "zone": "Eastern Plaguelands",
        "coordinates": [
          81,
          59
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5282,
      "name": "The Restless Souls",
      "dungeons": [
        "stratholme"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11140,
        "npc": "Egan",
        "zone": "Eastern Plaguelands",
        "coordinates": [
          14,
          33
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5122,
      "name": "The Medallion of Faith",
      "dungeons": [
        "stratholme"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 10917,
        "npc": "Aurius",
        "zone": "Stratholme",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        5281
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5262,
      "name": "The Truth Comes Crashing Down",
      "dungeons": [
        "stratholme"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 10813,
        "npc": "Balnazzar",
        "zone": "Stratholme",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        5251
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "item",
      "itemRefs": [
        {
          "id": 13250,
          "name": "Head of Balnazzar"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [
        "Check and keep the starter item; a drop is not guaranteed in one clear."
      ],
      "objectives": null
    },
    {
      "id": 5848,
      "name": "Of Love and Family",
      "dungeons": [
        "stratholme"
      ],
      "minLevel": 52,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11936,
        "npc": "Artist Renfray",
        "zone": "Western Plaguelands",
        "coordinates": [
          65,
          75
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        5543,
        5544,
        5542
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 6163,
      "name": "Ramstein",
      "dungeons": [
        "stratholme"
      ],
      "minLevel": 56,
      "questLevel": 60,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11878,
        "npc": "Nathanos Blightcaller",
        "zone": "Eastern Plaguelands",
        "coordinates": [
          26,
          74
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        6133,
        6022
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5243,
      "name": "Houses of the Holy",
      "dungeons": [
        "stratholme"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11036,
        "npc": "Leonid Barthalomew the Revered",
        "zone": "Eastern Plaguelands",
        "coordinates": [
          81,
          57
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5212,
      "name": "The Flesh Does Not Lie",
      "dungeons": [
        "stratholme"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11035,
        "npc": "Betina Bigglezink",
        "zone": "Eastern Plaguelands",
        "coordinates": [
          81,
          59
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5213,
      "name": "The Active Agent",
      "dungeons": [
        "stratholme"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11035,
        "npc": "Betina Bigglezink",
        "zone": "Eastern Plaguelands",
        "coordinates": [
          81,
          59
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        5212
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5125,
      "name": "Aurius' Reckoning",
      "dungeons": [
        "stratholme"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 10917,
        "npc": "Aurius",
        "zone": "Stratholme",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        5122
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5263,
      "name": "Above and Beyond",
      "dungeons": [
        "stratholme"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11039,
        "npc": "Duke Nicholas Zverenhoff",
        "zone": "Eastern Plaguelands",
        "coordinates": [
          81,
          59
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        5251
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5463,
      "name": "Menethil's Gift",
      "dungeons": [
        "stratholme"
      ],
      "minLevel": 57,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 11036,
        "npc": "Leonid Barthalomew the Revered",
        "zone": "Eastern Plaguelands",
        "coordinates": [
          81,
          57
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        5382
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 8945,
      "name": "Dead Man's Plea",
      "dungeons": [
        "stratholme"
      ],
      "minLevel": 58,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 16016,
        "npc": "Anthion Harmon",
        "zone": "Eastern Plaguelands",
        "coordinates": [
          30,
          16
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        8923,
        8922
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [
        {
          "id": 22115,
          "name": "Extra-Dimensional Ghost Revealer"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4768,
      "name": "The Darkstone Tablet",
      "dungeons": [
        "upper-blackrock-spire-ubrs"
      ],
      "minLevel": 57,
      "questLevel": 60,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9078,
        "npc": "Shadowmage Vivian Lagrave",
        "zone": "Badlands",
        "coordinates": [
          3,
          48
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        4769
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4974,
      "name": "For The Horde!",
      "dungeons": [
        "upper-blackrock-spire-ubrs"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 4949,
        "npc": "Thrall",
        "zone": "Orgrimmar",
        "coordinates": [
          31,
          37
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        4903
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 6602,
      "name": "Blood of the Black Dragon Champion",
      "dungeons": [
        "upper-blackrock-spire-ubrs"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 10182,
        "npc": "Rexxar",
        "zone": "Desolace",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        4903
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4764,
      "name": "Doomrigger's Clasp",
      "dungeons": [
        "upper-blackrock-spire-ubrs"
      ],
      "minLevel": 57,
      "questLevel": 60,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9565,
        "npc": "Mayara Brightwing",
        "zone": "Burning Steppes",
        "coordinates": [
          84,
          69
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        4766
      ],
      "chainUnresolved": true,
      "sharing": "shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5102,
      "name": "General Drakkisath's Demise",
      "dungeons": [
        "upper-blackrock-spire-ubrs"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9560,
        "npc": "Marshal Maxwell",
        "zone": "Burning Steppes",
        "coordinates": [
          84,
          68
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        5089
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 6502,
      "name": "Drakefire Amulet",
      "dungeons": [
        "upper-blackrock-spire-ubrs"
      ],
      "minLevel": 50,
      "questLevel": 60,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 10929,
        "npc": "Haleh",
        "zone": "Winterspring",
        "coordinates": [
          56,
          49
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        4182
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 7761,
      "name": "Blackhand's Command",
      "dungeons": [
        "upper-blackrock-spire-ubrs"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 9046,
        "npc": "Scarshield Quartermaster",
        "zone": "Blackrock Mountain",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "item",
      "itemRefs": [
        {
          "id": 18987,
          "name": "Blackhand's Command"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [
        "Check and keep the starter item; a drop is not guaranteed in one clear."
      ],
      "objectives": null
    },
    {
      "id": 5160,
      "name": "The Matron Protectorate",
      "dungeons": [
        "upper-blackrock-spire-ubrs"
      ],
      "minLevel": 57,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 10740,
        "npc": "Awbee",
        "zone": "Blackrock Spire",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "not-shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5047,
      "name": "Finkle Einhorn, At Your Service!",
      "dungeons": [
        "upper-blackrock-spire-ubrs"
      ],
      "minLevel": 57,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 10776,
        "npc": "Pip Quickwit",
        "zone": "Blackrock Spire",
        "coordinates": null,
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": false,
      "sharing": "not-shareable",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 4735,
      "name": "Egg Collection",
      "dungeons": [
        "upper-blackrock-spire-ubrs"
      ],
      "minLevel": 57,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 10267,
        "npc": "Tinkee Steamboil",
        "zone": "Burning Steppes",
        "coordinates": [
          65,
          23
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        4734,
        4726
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 6821,
      "name": "Eye of the Emberseer",
      "dungeons": [
        "upper-blackrock-spire-ubrs"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": {
        "npcId": 13278,
        "npc": "Duke Hydraxis",
        "zone": "Azshara",
        "coordinates": [
          79,
          73
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        6805,
        6804
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5127,
      "name": "The Demon Forge",
      "dungeons": [
        "upper-blackrock-spire-ubrs"
      ],
      "minLevel": 55,
      "questLevel": 60,
      "faction": "Both",
      "classMask": 3,
      "raceMask": "0",
      "professions": [
        "Blacksmithing"
      ],
      "pickup": {
        "npcId": 10918,
        "npc": "Lorax",
        "zone": null,
        "coordinates": [
          63,
          73
        ],
        "confidence": "provisional"
      },
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [
        5126
      ],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "provisional",
      "starter": "npc",
      "itemRefs": [
        {
          "id": 12696,
          "name": "Plans: Demon Forged Breastplate"
        }
      ],
      "requiredItems": [],
      "repeatable": null,
      "branch": null,
      "confidence": "provisional",
      "sources": [
        "inventory",
        "addon"
      ],
      "notes": [],
      "objectives": null
    },
    {
      "id": 5726,
      "name": "Hidden Enemies",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 96391,
      "name": "Underground Map",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 865,
      "name": "Raptor Horns",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 870,
      "name": "The Forgotten Pools",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 65,
      "name": "The Defias Brotherhood",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 303,
      "name": "The Dark Iron War",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 469,
      "name": "Daily Delivery",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 95737,
      "name": "Seeking Caitlin",
      "dungeons": [],
      "minLevel": null,
      "questLevel": 31,
      "faction": "Unknown",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": {
        "npc": "Caitlin Grassman",
        "zone": null,
        "confidence": "verified"
      },
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory",
        "observed"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null,
      "observed": true
    },
    {
      "id": 2947,
      "name": "Return of the Ring",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 2949,
      "name": "Return of the Ring",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 1100,
      "name": "Lonebrow's Journal",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 6141,
      "name": "Brother Anton",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 1149,
      "name": "Test of Faith",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 1947,
      "name": "Journey to the Marsh",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Both",
      "classMask": 128,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 2258,
      "name": "Badlands Reagent Run",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 2500,
      "name": "Badlands Reagent Run",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 707,
      "name": "Ironband Wants You!",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 720,
      "name": "A Sign of Hope",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 1953,
      "name": "Return to the Marsh",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Both",
      "classMask": 128,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 2933,
      "name": "Venom Bottles",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 2988,
      "name": "Witherbark Cages",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 3520,
      "name": "Screecher Spirits",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 1424,
      "name": "Pool of Tears",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 4145,
      "name": "Larion and Muigin",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 4141,
      "name": "Muigin and Larion",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 1448,
      "name": "In Search of The Temple",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 3380,
      "name": "The Sunken Temple",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 3445,
      "name": "The Sunken Temple",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 4133,
      "name": "Vivian Lagrave",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 4061,
      "name": "The Rise of the Machines",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 4122,
      "name": "Grark Lorkrub",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 3702,
      "name": "The Smoldering Ruins of Thaurissan",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 4182,
      "name": "Dragonkin Menace",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 4282,
      "name": "A Shred of Hope",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 4324,
      "name": "Yuka Screwspigot",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 3801,
      "name": "Dark Iron Legacy",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 3441,
      "name": "Divine Retribution",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 5527,
      "name": "A Reliquary of Purity",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 7485,
      "name": "Libram of Protection",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 7483,
      "name": "Libram of Rapidity",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 7484,
      "name": "Libram of Focus",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 4982,
      "name": "Bijou's Belongings",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 7667,
      "name": "Material Assistance",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Horde",
      "classMask": 64,
      "raceMask": "162",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 4726,
      "name": "Broodling Essence",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 5281,
      "name": "The Restless Souls",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 5543,
      "name": "Blood Tinged Skies",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 5544,
      "name": "Carrion Grubbage",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 5542,
      "name": "Demon Dogs",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 6133,
      "name": "The Ranger Lord's Behest",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 6022,
      "name": "To Kill With Purpose",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 8923,
      "name": "A Supernatural Device",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 8922,
      "name": "A Supernatural Device",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 4769,
      "name": "Vivian Lagrave and the Darkstone Tablet",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Horde",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 4766,
      "name": "Mayara Brightwing",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Alliance",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 4734,
      "name": "Egg Freezing",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 6805,
      "name": "Stormers and Rumblers",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 6804,
      "name": "Poisoned Water",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Both",
      "classMask": 0,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    },
    {
      "id": 5126,
      "name": "Lorax's Tale",
      "dungeons": [],
      "minLevel": null,
      "questLevel": null,
      "faction": "Both",
      "classMask": 3,
      "raceMask": "0",
      "professions": [],
      "pickup": null,
      "turnIn": null,
      "prerequisites": [],
      "relatedQuestIds": [],
      "chainUnresolved": true,
      "sharing": "unknown",
      "sharingConfidence": "unknown",
      "starter": "unknown",
      "requiredItems": [],
      "itemRefs": [],
      "repeatable": null,
      "branch": null,
      "confidence": "unknown",
      "sources": [
        "inventory"
      ],
      "notes": [
        "Linked chain step: requirements and placement still need verification."
      ],
      "objectives": null
    }
  ],
  "observedGaps": [
    {
      "name": "Crest of Lordaeron #268579",
      "itemId": 268579,
      "dungeon": "ruins-of-lordaeron",
      "reason": "Inventory lists a starter item without a resolved quest ID. Keep it; chain and faction eligibility require review."
    },
    {
      "name": "Crest of Lordaeron #275521",
      "itemId": 275521,
      "dungeon": "ruins-of-lordaeron",
      "reason": "Inventory lists a starter item without a resolved quest ID. Keep it; chain and faction eligibility require review."
    },
    {
      "name": "Hidden Enemies",
      "questLevel": 16,
      "dungeon": "ragefire-chasm",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Returning the Lost Satchel",
      "questLevel": 16,
      "dungeon": "ragefire-chasm",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Hamuul Runetotem",
      "questLevel": 16,
      "dungeon": "wailing-caverns",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Nara Wildmane",
      "questLevel": 16,
      "dungeon": "wailing-caverns",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Destruction in Deadmines",
      "questLevel": 18,
      "dungeon": "deadmines",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "The Defias Brotherhood",
      "questLevel": 22,
      "dungeon": "deadmines",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Crest of Lordaeron",
      "questLevel": 22,
      "dungeon": "ruins-of-lordaeron",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Crest of Lordaeron",
      "questLevel": 22,
      "dungeon": "ruins-of-lordaeron",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Seeking the Kor Gem",
      "questLevel": 22,
      "dungeon": "blackfathom-deeps",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Trouble in the Deeps",
      "questLevel": 22,
      "dungeon": "blackfathom-deeps",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "The Heart of the Void",
      "questLevel": 25,
      "dungeon": "blackfathom-deeps",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "The Heart of the Void",
      "questLevel": 25,
      "dungeon": "blackfathom-deeps",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Blackfathom Villainy",
      "questLevel": 27,
      "dungeon": "blackfathom-deeps",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Blackfathom Villainy",
      "questLevel": 27,
      "dungeon": "blackfathom-deeps",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Elemental Aid",
      "questLevel": 33,
      "dungeon": "razorfen-kraul",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Elemental Aid",
      "questLevel": 33,
      "dungeon": "razorfen-kraul",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Tinkmaster Overspark",
      "questLevel": 26,
      "dungeon": "gnomeregan",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "The Day After",
      "questLevel": 27,
      "dungeon": "gnomeregan",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Castpipe's Task",
      "questLevel": 28,
      "dungeon": "gnomeregan",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Klockmort's Essentials",
      "questLevel": 30,
      "dungeon": "gnomeregan",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Return of the Ring",
      "questLevel": 34,
      "dungeon": "gnomeregan",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Return of the Ring",
      "questLevel": 34,
      "dungeon": "gnomeregan",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Dragonmaw Rumors",
      "questLevel": 31,
      "dungeon": "excavation-site",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Fallen in the Fen",
      "questLevel": 31,
      "dungeon": "excavation-site",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "A Green Sample",
      "questLevel": 33,
      "dungeon": "city-of-dalaran",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Heart of Disruption",
      "questLevel": 33,
      "dungeon": "city-of-dalaran",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Heart of Disruption",
      "questLevel": 33,
      "dungeon": "city-of-dalaran",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Opportunistic Education",
      "questLevel": 33,
      "dungeon": "city-of-dalaran",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Power Overwhelming",
      "questLevel": 33,
      "dungeon": "city-of-dalaran",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Source of Power",
      "questLevel": 33,
      "dungeon": "city-of-dalaran",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Starving Arcane",
      "questLevel": 33,
      "dungeon": "city-of-dalaran",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "The Grave Knight",
      "questLevel": 33,
      "dungeon": "city-of-dalaran",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    },
    {
      "name": "Past Due",
      "questLevel": 38,
      "dungeon": "scarlet-monastery",
      "reason": "Server-observed quest is not unambiguously mapped to an ID and route."
    }
  ],
  "gaps": [
    "Forever quest-grey rules and instance entry minima are not verified. Level windows are planning targets, not guaranteed non-grey deadlines.",
    "Late-beta and level-60 quest availability, race/profession restrictions, keys, attunements and exclusive branches are not comprehensively verified.",
    "A guide entry is not proof of shareability in the current beta; self-pickup remains required unless independently verified."
  ]
};if(typeof module==='object'&&module.exports)module.exports=data;else r.ForeverLevelingData=data;})(globalThis);
