export const worldColors = {
  borderColor: "#000000", //"black",
  playerColor: "#FF0000", //"red",
  goalColor: "#0000FF", //"blue",
  barrier1Color: "#9400D3", //"darkviolet",
  barrier2Color: "#008000", //"green",
  barrier3Color: "#ffd700", //gold",
  "switch onColor": "#00FF00", //lime,
  "switch offColor": "#FF00FF", //fuchsia,
  enemyColor: "#ffa500", //"orange"
  floorColor: "#F8F8FF", //"ghostwhite",
};

const levels = [
  {
    name: "learning the key",
    rows: 10,
    cols: 10,
    layout: [
      "HAAHAEAAAE",
      "Dp0DuB00ZB",
      "D00GsFCC0B",
      "D000000B0B",
      "DS0000BA0B",
      "D00000B0EE",
      "D00000B0WB",
      "HAE000BCFB",
      "DUw000000B",
      "GCFCCCCCCF",
    ],
    target: 13,
    ...worldColors,
  },
	{

		name: "what the flip",

		rows: 6,
		
		cols: 10,
		
		layout:[
		"OOAEAAAAOO",
		
		"O00Bc0Q0RO",
		
		"DSQ0PAA00B",
		
		"HvAEhAAAAE",
		
		"O0ZB0Q0RuO",
		
		"OOCFCCCCOO",
		
		],
		target: 13,
		...worldColors,
	},
  {
    name: "?? 2",
    rows: 5,
    cols: 7,
    layout: ["HAAAAAE", "D00000B", "DS000ZB", "D00000B", "GCCCCCF"],
    ...worldColors,
  },
  {
    name: "?? 3",
    rows: 6,
    cols: 6,
    layout: ["HAEHAE", "DS000B", "GCFG0F", "HAEH0E", "DZ000B", "GCFGCF"],
    ...worldColors,
  },
  {
    name: "?? 4",
    rows: 8,
    cols: 9,
    layout: [
      "HAAAAAAAE",
      "DS000B00B",
      "D0000B00B",
      "GCCCCF00B",
      "D0000000B",
      "DOOOOO00B",
      "DZOOOO00B",
      "GCCCCCCCF",
    ],
    ...worldColors,
  },
  {
    name: "?? 5",
    rows: 8,
    cols: 9,
    layout: [
      "HAAAAAAAE",
      "DZO00000B",
      "DOO00000B",
      "D000OOOOB",
      "D000O000B",
      "DOOOO000B",
      "D000000SB",
      "GCCCCCCCF",
    ],
    ...worldColors,
  },
  {
    name: "?? 6",
    rows: 10,
    cols: 5,
    layout: [
      "HAAAE",
      "D0S0B",
      "HAAAB",
      "DCCCF",
      "D000B",
      "DCCCB",
      "DDGcF",
      "DDEGB",
      "DGBZB",
      "GCFOF",
    ],
    ...worldColors,
  },
  {
    name: "?? 7",
    rows: 6,
    cols: 10,
    layout: [
      "HAEAAAAAAE",
      "GSB0HAAAAB",
      "HLB0GCCCBN",
      "D0B0OZ0OBB",
      "DOO0OOCCFB",
      "GCCCCCCCCF",
    ],
    ...worldColors,
  },
  {
    name: "?? 8",
    rows: 8,
    cols: 8,
    layout: [
      "HAAHAAAE",
      "DS0D000B",
      "D000000B",
      "D000000B",
      "D000AE0B",
      "D0000B0B",
      "D0000BZB",
      "GCCCCFCF",
    ],
    ...worldColors,
  },
  {
    name: "?? 9",
    rows: 14,
    cols: 7,
    layout: [
      "HAAAAAE",
      "D00S00B",
      "JJJJJJJ",
      "D00000B",
      "DjjjjjB",
      "DiiiiiB",
      "DlfofkB",
      "DfffffB",
      "DhhhhhB",
      "DijfijB",
      "GooCooF",
      "D00000B",
      "J0JZJ0J",
      "LCLCLCL",
    ],
    ...worldColors,
  },
];

export default levels;
