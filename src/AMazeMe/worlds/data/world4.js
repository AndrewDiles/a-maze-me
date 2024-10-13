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
    layout: ["HAAOAAE","D0bOc0B","DSÁOÀZB","D0aOd0B","GCCOCCF"],
    target: 5,
  },
  {
    name: "two key",
    rows: 9,
    cols: 9,
    layout: [
      "HAHEOAAAE",
      "DSGjECESB",
      "DG0DB0F0B",
      "DBCFBCBXF",
      "DDD0B0F0B",
      "DOdOBuO0B",
      "DDCGFOO0B",
      "DGCcwUBZB",
      "GCCIKCFCF",
    ],
		target: 17.5
  },
  {
    name: "?? 3",
    rows: 5,
    cols: 7,
    layout: ["HAAAAAE", "D00000B", "DS000ZB", "D00000B", "GCCCCCF"],
    target: 100,
  },
  {
    name: "?? 4",
    rows: 5,
    cols: 7,
    layout: ["HAAAAAE", "D00000B", "DS000ZB", "D00000B", "GCCCCCF"],
    target: 100,
  },
  {
    name: "?? 5",
    rows: 5,
    cols: 7,
    layout: ["HAAAAAE", "D00000B", "DS000ZB", "D00000B", "GCCCCCF"],
    target: 100,
  },
  {
    name: "?? 6",
    rows: 5,
    cols: 7,
    layout: ["HAAAAAE", "D00000B", "DS000ZB", "D00000B", "GCCCCCF"],
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
    name: "?? 9",
    rows: 5,
    cols: 7,
    layout: ["HAAAAAE", "D00000B", "DS000ZB", "D00000B", "GCCCCCF"],
    target: 100,
  },
];

export default levelsWithoutColors.map((level) => {
  return { ...level, ...worldColors };
});
