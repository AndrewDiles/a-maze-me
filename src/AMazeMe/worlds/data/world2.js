// this is the second world that introduces the levers and switch bridges

export const worldColors = {
  borderColor: "dimgrey",
  playerColor: "darkturquoise",
  goalColor: "pink",
  barrier1Color: "#9400D3", //"darkviolet",
  barrier2Color: "#008000", //"green",
  barrier3Color: "#ffd700", //gold",
  "switch onColor": "#00FF00", //lime,
  "switch offColor": "#FF00FF", //fuchsia,
  enemyColor: "#ffa500", //"orange"
  floorColor: "aliceblue",
	portalSet1Color: "#ffc800", // orange
	portalSet2Color: "#00ffe1", // cyan
	portalSet3Color: "#fba2f4", // pink
};

const levelsWithoutColors = [
  {
    name: "turn it on",
    rows: 5,
    cols: 8,
    layout: ["HAAEOHAE", "D0QaOd0B", "DS00P0ZB", "D00bOc0B", "GCCFOGCF"],
    target: 2,
  },
  {
    name: "on and off",
    rows: 5,
    cols: 12,
    layout: [
      "OOOOOOOOOOOO",
      "O0Q0O00QOOZO",
      "OS00P000OOPO",
      "O0R0O00R000O",
      "OOOOOOOOOOOO",
    ],
    target: 4.4,
  },

  {
    name: "there and back again",
    rows: 7,
    cols: 18,
    layout: [
      "OOOOOOOOOOOOOOOOOO",
      "O000000OO000000OQO",
      "ZPS0O00OO000000O0O",
      "O000O000000OO0000O",
      "OOOOO000000OO0000O",
      "OOOOOOOOOOOOOOOORO",
      "OOOOOOOOOOOOOOOOOO",
    ],
    target: 13.5,
  },

  {
    name: "flip flop",
    rows: 11,
    cols: 11,
    layout: [
      "HAAAEOHAAAE",
      "D00RaOd000B",
      "DS000P0000B",
      "D00QbOcQ0RB",
      "GCCCFOGc0bF",
      "OOOOOOOOPOO",
      "HAEOHAEO0aE",
      "D0aOdRaO0RB",
      "DZ0P000P00B",
      "D0bOcQbOcQB",
      "GCFOGCFOGCF",
    ],
    target: 8.75,
  },
  {
    name: "take a hike",
    rows: 9,
    cols: 11,
    layout: [
      "OHAAAAAAEOO",
      "ZPS00000aEO",
      "OD0000000aE",
      "HdHAAEE000B",
      "DHdQOBB000B",
      "DGc0OBaAAEB",
      "D0GcOB0HDBB",
      "GcR0O00DDBB",
      "OLOGOCCCGCF",
    ],
    target: 16,
  },
  {
    name: "choose your destiny",
    rows: 9,
    cols: 18,
    layout: [
      "OOOOHOAAAOAAEOOOOO",
      "OOQ00O0O0O0OaEOHAE",
      "OS000O0O0O0O00P00B",
      "OOR0000O000ObFODOB",
      "OOOOOOOOOOOOOOHdOB",
      "O0000000000000Q0OB",
      "OPGcOOOOOOOOOOOOOB",
      "OZODO000O000O0R0OB",
      "OOOGCCOCCCOCCCCCCF",
    ],
    target: 20.5,
  },
  {
    name: "be picky",
    rows: 10,
    cols: 14,
    layout: [
      "HAAAAAAAAAOAAE",
      "D00OOOOOOPO00B",
      "DQ0P0000O0000B",
      "D00OOOOOOOOOAJ",
      "DS000000000P0J",
      "D00OOOOOOOOO0J",
      "DR000000O00B0J",
      "D00OOOOOd0ZB0L",
      "D000000P0NcB0B",
      "GCCOOOOOCGIICF",
    ],
    target: 6.5,
  },
  {
    name: "inconvenient",
    rows: 13,
    cols: 13,
    layout: [
      "HAAAHAAAAAAAE",
      "D000DHAAE0AEB",
      "D0S0000RQJ0BB",
      "D000DHEAOdCFB",
      "D000D0B0PAd0B",
      "GC0CDbF0OAAAE",
      "D0000H000R0QB",
      "DOOO0DCCCCC0B",
      "D000cIg000ePO",
      "DAM0DDAAAAA0B",
      "GCFCL0000000B",
      "DZ0P0R00000QB",
      "GCFOGCCCCCCCF",
    ],
    target: 20,
  },
  {
    name: "lever graduation",
    rows: 16,
    cols: 30,
    layout: [
      "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
      "OZPS000000D00000000BCCc000000O",
      "OOORMAAAADDMIIIIIGFbCCKc0bFOPO",
      "OQP000BE0GCfF00000bF000K0H00QO",
      "O0OCCcBB000L00PIIIK0bCCbFdOO0O",
      "O0000GFaECCCCC0CCCCCF0BF00OO0O",
      "O0H000D000000BRD00000000bOdB0O",
      "O000G0D0000HAB0D0000CCCCB0RB0O",
      "O00000D0Q00D0F0DQ000Pc0eI00B0O",
      "O0E000GCCCCGCCFd00000DCCCC0B0O",
      "O000F0000D0000B0000N0Jd00B0B0O",
      "O00000000D000DaEPGCJ0J0N0B0B0O",
      "O0G000D000000D000R0J0L0J0BCB0O",
      "OCCCCCGCCCCCCCCCCCCJCCCJCCCF0O",
      "O0000000000000000000000000000O",
      "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
    ],
    target: 56,
  },
];

export default levelsWithoutColors.map((level) => {
  return { ...level, ...worldColors };
});
