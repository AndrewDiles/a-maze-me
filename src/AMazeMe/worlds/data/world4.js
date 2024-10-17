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
    name: "?? 6",
    rows: 5,
    cols: 7,
    layout: ["HAAAAAE", "D00000B", "DS000OB", "D00000B", "GCCCCCF"],
    target: 100,
  },
  {
    name: "?? 7",
    rows: 5,
    cols: 7,
    layout: ["HAAAAAE", "D00000B", "DS000ZB", "D00000B", "GCCCCCF"],
    target: 100,
  },
  {
    name: "?? 8",
    rows: 5,
    cols: 7,
    layout: ["HAAAAAE", "D00000B", "DS000ZB", "D00000B", "GCCCCCF"],
    target: 100,
  },
  {
    name: "amazing one",
    rows: 23,
    cols: 28,
    layout: [
      "OOOOOOOOOOOOOOOOOOOOOOOOOOOO",
      "OHAAAAHAAHAAAAAAAHAAAEZHAAAO",
      "ODAAAHdH0DHAAAAADDHAAdqDDHDO",
      "ODHAdDHdAdDHAAADDDDAAHADDDDO",
      "ODDAAdDHAADDHADDDDDHDDuDDDdO",
      "ODAHAAdDHDDDA0DDD0DDDDAdDAAO",
      "OHHAAAAADDDAAHdDAAdDDHAAAADO",
      "ODDHAAADDDDADDHAAAADDDAAHDDO",
      "ODDDHADDdDAdDDDHAADDDAADDDDO",
      "ODDDDpyHAAAAdDDDHDDDAADDDDDO",
      "ODDDAAADHAAAAdDDDDDAAdDDD0DO",
      "ODdAAADDDHAAADdDDDAHAAdDAAdO",
      "OHAAADDDDDHH0AdDdADDAAHdHAAO",
      "ODHHDdDDDDDDHAHAADDAAdDAdHDO",
      "ODDDHdDDDDDDDDDHDDHAADHAHdDO",
      "ODdDDDDDDD0DDDDDDDDHDDDDDDDO",
      "OHAdDDDHAAADDDDDDdDDDDDDHDDO",
      "ODAHDDDDHA0DDDDDAAdDDAdDDDDO",
      "OHdDDDDdDHAdDDdAAAAdDHADDDDO",
      "ODDD0DJ0DDHAdHAAAAAdDDDDDDDO",
      "ODDAAdJ0DDAAADAADHAAdDAddDDO",
      "ODAAAABSDAAAdAAdDdAAAAAAAddO",
      "OOOOOOOOOOOOOOOOOOOOOOOOOOOO",
    ],
    target: 120,
  },
];

export default levelsWithoutColors.map((level) => {
  return { ...level, ...worldColors };
});
