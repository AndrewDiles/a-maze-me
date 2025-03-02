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
    name: "?? 1",
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
