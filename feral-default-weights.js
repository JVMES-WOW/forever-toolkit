// User-supplied generated DPS weights, 2026-10-05. Exact values, including negative estimates.
// The export has no original full setup, mechanics tag, or iteration range. Do not invent them.
(function(root) {
  const data = {
  "name": "Generated Feral DPS weights",
  "version": 2,
  "unit": "DPS per stat unit (percent stats per percentage point)",
  "hitNote": "hit is the melee component; spellHit is separate. Shared hit rating benefits both, only up to each cap. Do not apply below-cap weights to over-cap points.",
  "stats": {
    "attackPower": 0.24010670800791653,
    "strength": 0.5762560992188865,
    "agility": 0.5786715829281046,
    "intellect": -0.0001818899826969908,
    "spirit": -0.0010293217939955292,
    "crit": 5.746459612720617,
    "hit": 3.742500933037383,
    "spellHit": 0,
    "expertise": 3.742500933037383,
    "haste": 1.1522607297806502,
    "mp5": 0.016431088092286945,
    "mana": 0.0014442818212547959,
    "dps": 2.353113656976002,
    "armorPen": 0.08623102904196245
  },
  "measurements": [
    {
      "stat": "attackPower",
      "amount": 20,
      "basis": "forward",
      "weight": 0.24010670800791653,
      "se": 0.0001874029314831355,
      "low": 0.23973939826220958,
      "high": 0.24047401775362348,
      "plus": {
        "amount": 20,
        "weight": 4.802134160158331,
        "se": 0.00374805862966271,
        "low": 4.794787965244192,
        "high": 4.80948035507247
      },
      "range": {
        "fromOffset": 0,
        "toOffset": 20
      }
    },
    {
      "stat": "strength",
      "amount": 20,
      "basis": "forward",
      "weight": 0.5762560992188865,
      "se": 0.0004497670355594459,
      "low": 0.5753745558291901,
      "high": 0.577137642608583,
      "plus": {
        "amount": 20,
        "weight": 11.52512198437773,
        "se": 0.008995340711188918,
        "low": 11.5074911165838,
        "high": 11.54275285217166
      },
      "range": {
        "fromOffset": 0,
        "toOffset": 20
      }
    },
    {
      "stat": "agility",
      "amount": 20,
      "basis": "forward",
      "weight": 0.5786715829281046,
      "se": 0.022605550587977176,
      "low": 0.5343647037756694,
      "high": 0.6229784620805399,
      "plus": {
        "amount": 20,
        "weight": 11.573431658562093,
        "se": 0.4521110117595435,
        "low": 10.687294075513387,
        "high": 12.459569241610799
      },
      "range": {
        "fromOffset": 0,
        "toOffset": 20
      }
    },
    {
      "stat": "intellect",
      "amount": 20,
      "basis": "forward",
      "weight": -0.0001818899826969908,
      "se": 0.014398753577770648,
      "low": -0.02840344699512746,
      "high": 0.028039667029733477,
      "plus": {
        "amount": 20,
        "weight": -0.003637799653939816,
        "se": 0.28797507155541296,
        "low": -0.5680689399025493,
        "high": 0.5607933405946696
      },
      "range": {
        "fromOffset": 0,
        "toOffset": 20
      }
    },
    {
      "stat": "spirit",
      "amount": 20,
      "basis": "forward",
      "weight": -0.0010293217939955292,
      "se": 0.014703120873681383,
      "low": -0.029847438706411038,
      "high": 0.02778879511841998,
      "plus": {
        "amount": 20,
        "weight": -0.020586435879910586,
        "se": 0.29406241747362766,
        "low": -0.5969487741282208,
        "high": 0.5557759023683996
      },
      "range": {
        "fromOffset": 0,
        "toOffset": 20
      }
    },
    {
      "stat": "crit",
      "amount": 1,
      "basis": "forward",
      "weight": 5.746459612720617,
      "se": 0.43143911110725974,
      "low": 4.900838954950388,
      "high": 6.592080270490846,
      "plus": {
        "amount": 1,
        "weight": 5.746459612720617,
        "se": 0.43143911110725974,
        "low": 4.900838954950388,
        "high": 6.592080270490846
      },
      "range": {
        "fromOffset": 0,
        "toOffset": 1
      }
    },
    {
      "stat": "hit",
      "amount": 1,
      "basis": "below-cap",
      "weight": 3.742500933037383,
      "se": 0.7416841204589057,
      "low": 2.288800056937928,
      "high": 5.196201809136838,
      "plus": {
        "amount": 1,
        "weight": 3.742500933037383,
        "se": 0.7416841204589057,
        "low": 2.288800056937928,
        "high": 5.196201809136838,
        "effectiveAmount": 1
      },
      "cap": {
        "limit": 9,
        "minimum": 1,
        "base": "baseHit",
        "label": "Melee hit (%)",
        "current": 8
      },
      "minus": {
        "amount": -1,
        "weight": -4.777163730737448,
        "se": 0.754599844869053,
        "low": -6.2561794266807915,
        "high": -3.2981480347941043,
        "effectiveAmount": -1
      },
      "range": {
        "from": 8,
        "to": 9,
        "fromOffset": 0,
        "toOffset": 1
      }
    },
    {
      "stat": "spellHit",
      "amount": 1,
      "basis": "below-cap",
      "weight": 0,
      "se": 0,
      "low": 0,
      "high": 0,
      "plus": {
        "amount": 1,
        "weight": 0,
        "se": 0,
        "low": 0,
        "high": 0,
        "effectiveAmount": 1
      },
      "cap": {
        "limit": 16,
        "minimum": 0,
        "base": "baseSpellHit",
        "label": "Spell hit (%)",
        "current": 8
      },
      "minus": {
        "amount": -1,
        "weight": 0,
        "se": 0,
        "low": 0,
        "high": 0,
        "effectiveAmount": -1
      },
      "range": {
        "from": 8,
        "to": 9,
        "fromOffset": 0,
        "toOffset": 1
      }
    },
    {
      "stat": "expertise",
      "amount": 1,
      "basis": "below-cap",
      "weight": 3.742500933037383,
      "se": 0.7416841204589057,
      "low": 2.288800056937928,
      "high": 5.196201809136838,
      "plus": {
        "amount": 1,
        "weight": 3.742500933037383,
        "se": 0.7416841204589057,
        "low": 2.288800056937928,
        "high": 5.196201809136838,
        "effectiveAmount": 1
      },
      "cap": {
        "limit": 6.5,
        "minimum": 0,
        "base": "baseExpertise",
        "label": "Expertise (%)",
        "current": 5
      },
      "minus": {
        "amount": 0,
        "weight": 0,
        "se": 0,
        "low": 0,
        "high": 0,
        "effectiveAmount": 0
      },
      "range": {
        "from": 5,
        "to": 6,
        "fromOffset": 0,
        "toOffset": 1
      }
    },
    {
      "stat": "haste",
      "amount": 1,
      "basis": "forward",
      "weight": 1.1522607297806502,
      "se": 0.8795424724154941,
      "low": -0.5716425161537182,
      "high": 2.8761639757150186,
      "plus": {
        "amount": 1,
        "weight": 1.1522607297806502,
        "se": 0.8795424724154941,
        "low": -0.5716425161537182,
        "high": 2.8761639757150186
      },
      "range": {
        "fromOffset": 0,
        "toOffset": 1
      }
    },
    {
      "stat": "mp5",
      "amount": 10,
      "basis": "forward",
      "weight": 0.016431088092286945,
      "se": 0.03319734321996021,
      "low": -0.04863570461883506,
      "high": 0.08149788080340895,
      "plus": {
        "amount": 10,
        "weight": 0.16431088092286944,
        "se": 0.33197343219960207,
        "low": -0.4863570461883506,
        "high": 0.8149788080340894
      },
      "range": {
        "fromOffset": 0,
        "toOffset": 10
      }
    },
    {
      "stat": "mana",
      "amount": 200,
      "basis": "forward",
      "weight": 0.0014442818212547959,
      "se": 0.001417400435480081,
      "low": -0.0013338230322861625,
      "high": 0.004222386674795754,
      "plus": {
        "amount": 200,
        "weight": 0.2888563642509592,
        "se": 0.2834800870960162,
        "low": -0.26676460645723254,
        "high": 0.8444773349591509
      },
      "range": {
        "fromOffset": 0,
        "toOffset": 200
      }
    },
    {
      "stat": "dps",
      "amount": 5,
      "basis": "forward",
      "weight": 2.353113656976002,
      "se": 0.0023503447202644625,
      "low": 2.3485069813242836,
      "high": 2.3577203326277205,
      "plus": {
        "amount": 5,
        "weight": 11.76556828488001,
        "se": 0.011751723601322314,
        "low": 11.742534906621417,
        "high": 11.788601663138602
      },
      "range": {
        "fromOffset": 0,
        "toOffset": 5
      }
    },
    {
      "stat": "armorPen",
      "amount": 100,
      "basis": "forward",
      "weight": 0.08623102904196245,
      "se": 0.00009012424414544512,
      "low": 0.08605438552343737,
      "high": 0.08640767256048752,
      "plus": {
        "amount": 100,
        "weight": 8.623102904196244,
        "se": 0.009012424414544511,
        "low": 8.605438552343736,
        "high": 8.640767256048752
      },
      "range": {
        "fromOffset": 0,
        "toOffset": 100
      }
    }
  ],
  "seed": 2792856331,
  "iterations": 1000
};
  if (typeof module === 'object' && module.exports) module.exports = data;
  root.FOREVER_FERAL_DEFAULT_WEIGHTS = data;
})(globalThis);
