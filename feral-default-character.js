// Supplied talent-free, unbuffed JVMES Cat export, 2026-10-05.
// Keep these original totals/items intact as an import reference. The current
// Gear-calculated starter is the separately selected defaultGear below.
(function(root) {
  const character = {
  "name": "JVMES",
  "phase": 1,
  "character": {
    "name": "JVMES",
    "level": 60,
    "gameClass": "DRUID",
    "race": "TAUREN",
    "faction": "HORDE"
  },
  "items": [
    {
      "name": "Wolfshead Helm",
      "id": 8345,
      "slot": "HEAD"
    },
    {
      "name": "Amulet of the Darkmoon",
      "id": 19491,
      "enchant": {
        "name": "Enchant Necklace - Agility",
        "id": 904,
        "spellId": 1249059
      },
      "slot": "NECK"
    },
    {
      "name": "Darkspear Pauldrons",
      "id": 272105,
      "slot": "SHOULDERS"
    },
    {
      "name": "Dawn Armor",
      "id": 252483,
      "enchant": {
        "name": "Enchant Chest - Greater Stats",
        "id": 1891,
        "spellId": 20025
      },
      "slot": "CHEST"
    },
    {
      "name": "Shifter's Belt",
      "id": 272396,
      "enchant": {
        "name": "Tinker: Nitro Boosts",
        "id": 7920,
        "spellId": 1226211
      },
      "slot": "WAIST"
    },
    {
      "name": "Warbear Woolies",
      "id": 15065,
      "enchant": {
        "name": "Forceful Rugged Armor Kit",
        "id": 8491,
        "spellId": 1254772
      },
      "slot": "LEGS"
    },
    {
      "name": "Shadowcraft Boots",
      "id": 16711,
      "enchant": {
        "name": "Enchant Boots - Greater Agility",
        "id": 1887,
        "spellId": 20023
      },
      "slot": "FEET"
    },
    {
      "name": "Forest Stalker's Bracers",
      "id": 19587,
      "enchant": {
        "name": "Enchant Bracer - Agility",
        "id": 7656,
        "spellId": 1217203
      },
      "slot": "WRISTS"
    },
    {
      "name": "Raider Gloves",
      "id": 272099,
      "enchant": {
        "name": "Enchant Gloves - Superior Agility",
        "id": 2564,
        "spellId": 25080
      },
      "slot": "HANDS"
    },
    {
      "name": "First Mate Band",
      "id": 284715,
      "slot": "FINGER_1"
    },
    {
      "name": "Band of the Better Half",
      "id": 284716,
      "slot": "FINGER_2"
    },
    {
      "name": "Cleansed Vilebranch Medallion",
      "id": 270275,
      "slot": "TRINKET_1"
    },
    {
      "name": "Rune of the Guard Captain",
      "id": 19120,
      "slot": "TRINKET_2"
    },
    {
      "name": "Howler's Furs",
      "id": 272414,
      "enchant": {
        "name": "Enchant Cloak - Agility",
        "id": 7667,
        "spellId": 1219587
      },
      "slot": "BACK"
    },
    {
      "name": "The Unstoppable Force",
      "id": 19323,
      "enchant": {
        "name": "Enchant 2H Weapon - Agility",
        "id": 2646,
        "spellId": 27837
      },
      "slot": "MAIN_HAND"
    },
    {
      "name": "Howling Idol",
      "id": 272427,
      "slot": "RANGED"
    }
  ],
  "points": [
    {
      "name": "Feral",
      "stats": {
        "attackPower": 1,
        "feralAttackPower": 1,
        "strength": 2.42,
        "agility": 2.8,
        "hit": 32.78,
        "crit": 30.88,
        "haste": 14.28,
        "dps": 14
      }
    }
  ],
  "stats": {
    "agility": 317,
    "armor": 1734,
    "attackPower": 861,
    "crit": 20.81,
    "defense": 300,
    "dodge": 16.75,
    "expertise": 1.2,
    "health": 3213,
    "hit": 3.7,
    "intellect": 99,
    "mainHandSpeed": 3.6,
    "mana": 2449,
    "parry": 5,
    "spellCrit": 22.61,
    "spellHit": 3.7,
    "spirit": 126,
    "stamina": 191,
    "strength": 189
  },
  "exportOptions": {
    "buffs": false,
    "talents": false,
    "form": "cat"
  }
};
  // Latest user-selected screenshot preset, 2026-10-05: Timbermaw Tunic,
  // Don Julio + Tarnished Elven rings, and +8 Agility Voracity on head/legs.
  // Enchant keys retain effect, compatible slot, and catalog record identity.
  character.defaultGear = {
    version: 1,
    race: 'TAUREN',
    slots: {
      HEAD: { id: 8345, variant: '0', suffix: 0, enchant: '1508:1:106' },
      NECK: { id: 19491, variant: '0', suffix: 0, enchant: '904:2:72' },
      SHOULDERS: { id: 272105, variant: '0', suffix: 0, enchant: '' },
      BACK: { id: 13340, variant: '0', suffix: 0, enchant: '7667:4:207' },
      CHEST: { id: 252484, variant: '0', suffix: 0, enchant: '' },
      WRISTS: { id: 19587, variant: '0', suffix: 0, enchant: '7656:6:198' },
      HANDS: { id: 272099, variant: '0', suffix: 0, enchant: '2564:7:152' },
      WAIST: { id: 272396, variant: '0', suffix: 0, enchant: '' },
      LEGS: { id: 15065, variant: '0', suffix: 0, enchant: '1508:1:106' },
      FEET: { id: 12553, variant: '0', suffix: 0, enchant: '1887:10:117' },
      FINGER_1: { id: 19325, variant: '0', suffix: 0, enchant: '' },
      FINGER_2: { id: 18500, variant: '0', suffix: 0, enchant: '' },
      TRINKET_1: { id: 13965, variant: '0', suffix: 0, enchant: '' },
      TRINKET_2: { id: 11815, variant: '0', suffix: 0, enchant: '' },
      MAIN_HAND: { id: 19323, variant: '0', suffix: 0, enchant: '1896:13:125' },
      RANGED: { id: 272427, variant: '0', suffix: 0, enchant: '' }
    }
  };
  if (typeof module === 'object' && module.exports) module.exports = character;
  root.FOREVER_FERAL_DEFAULT_CHARACTER = character;
})(typeof globalThis === 'object' ? globalThis : this);
