// this is a world template to be copied when making a new world

export const worldColors = {
  borderColor: "#400707", //"black",
  playerColor: "#7300ff", //"red",
  goalColor: "#4dff00", //"blue",
  barrier1Color: "#9400D3", //"darkviolet",
  barrier2Color: "#008000", //"green",
  barrier3Color: "#ffd700", //gold",
  "switch onColor": "#00FF00", //lime,
  "switch offColor": "#FF00FF", //fuchsia,
  enemyColor: "#ffa500", //"orange"
  floorColor: "#ebf9ff", //"ghostwhite",
  portalSet1Color: "#ffc800", // orange
  portalSet2Color: "#00ffe1", // cyan
  portalSet3Color: "#fba2f4", // pink
};

const levelsWithoutColors = [
  {
    name: "cake for you",
    rows: 5,
    cols: 7,
    layout: ["HAAOAAE", "D0bOc0B", "DSÁOÀZB", "D0aOd0B", "GCCOCCF"],
    target: 5,
  },
  {
    name: "two slices",
    rows: 8,
    cols: 8,
    layout: [
      "OOOOOOOO",
      "À0OÙ000O",
      "O0OOOO0O",
      "O0OO000O",
      "OSOO0OOO",
      "OOOO000O",
      "O0ÚOOO0Á",
      "OZOOOOOO",
    ],
    target: 6.75,
  },
  {
    name: "three slices",
    rows: 5,
    cols: 17,
    layout: [
      "OOOOOOOOOOOOOOOOO",
      "Oc00Oc00Oc0bO00ÚO",
      "OÀ0SOÙ0ZOÒ0ÁO0OOO",
      "Od00Od00Od0aO00ÓO",
      "OOOOOOOOOOOOOOOOO",
    ],
    target: 4.75,
  },
  {
    name: "the cake is a lie",
    rows: 5,
    cols: 7,
    layout: ["HAAOAAE", "D00O00B", "DS0Á0ZB", "D00O00B", "GCCOCCF"],
    target: 1.5,
  },
  {
    name: "another lie",
    rows: 11,
    cols: 11,
    layout: [
      "OOOOOOOOOOO",
      "OZÚD00OOÒ0O",
      "OAAiNC0OO0O",
      "OO0OÙbCO00O",
      "ObCAAA0O0OO",
      "OBaIK0OO00O",
      "OBÁGCCcOO0O",
      "OB0000AO00O",
      "OaAEFACO0OO",
      "OAA000ÓO0SO",
      "OOOOOOOOOOO",
    ],
    target: 30,
  },
  {
    name: "a dirty trick",
    rows: 8,
    cols: 12,
    layout: [
      "OOOOOOOOOOOO",
      "OÙ00O00000ÓO",
      "OOO0O0OOOOOO",
      "OOO0O0OOOOOO",
      "O00000000ÚOO",
      "O0OOOOOOOOVO",
      "OS00000WOÒZO",
      "OOOOOOOOOOOO",
    ],
    target: 12,
  },
  {
    name: "one flip too many",
    rows: 18,
    cols: 9,
    layout: [
      "OOOOOOOOO",
      "Oc00O00bO",
      "OÒR0O0QÓO",
      "Od00O00aO",
      "O0OOOOO0O",
      "O00000O0O",
      "OOOOO0O0O",
      "OÀ0000O0O",
      "OOOOOOO0O",
      "OOOOOOO0O",
      "OÙ000000O",
      "OOOOOOOOO",
      "O000000ÚO",
      "O0OOOOOOO",
      "O000O00ÁO",
      "OOO0O0OOO",
      "OS00O0PZO",
      "OOOOOOOOO",
    ],
    target: 19,
  },
  {
    name: "two keys to port",
    rows: 14,
    cols: 14,
    layout: [
      "OOOZOOOOOOOOOO",
      "OSO0ÚOÒ000000O",
      "O0OOOOOOOOOO0O",
      "O0000OO000ÓO0O",
      "O0O00OO00OOO0O",
      "O0O00OO00O000O",
      "O0O00OO00O0OOO",
      "O0O000000O0OpO",
      "O0O000000O0O0O",
      "O0OOOOOO0O0O0O",
      "O00O00000O000O",
      "OODO0OOOOOOOOO",
      "OÙyO0000000ruO",
      "OOOOOOOOOOOOOO",
    ],
    target: 46.5,
  },

  {
    name: "gear shift",
    rows: 20,
    cols: 20,
    layout: [
      "OOOOOOOOOOOOOOOOOOOO",
      "OS00CCCC0OOBc00O0O0O",
      "O000CCcaGc00GcDOSR0O",
      "O00000Gc0OE00DDO0O0O",
      "O0DDO00GC0aAGFdOOOOO",
      "O0DDaAD0BCCcGCCR0ÚOO",
      "O0DGCCAECCcGCCjE0aAO",
      "O0GCCBCCC0D000DB000O",
      "OCC0BCCCB0AAE0DB000O",
      "O0aECCCBjAAEBÁDBOO0O",
      "O000bCCCAAEBaAdBZP0O",
      "O0AAEbCCECFaAEABAOOO",
      "OAAABB0BBÙOAO0AEQ0OO",
      "OCIIEB0ABdA0BBABE00O",
      "OÒ00BaAEaIIKBaAHaE0O",
      "OiCCIIKBAd00aADDObCO",
      "OFÀ0bCcB00HAAAiG0B0O",
      "OaIIIcOO00DIIIIF0O0O",
      "O000ÓD000OD00000000O",
      "OOOOOOOOOOOOOOOOOOOO",
    ],
    target: 72,
  },
];

export default levelsWithoutColors.map((level) => {
  return { ...level, ...worldColors };
});
