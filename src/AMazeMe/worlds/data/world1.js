export const worldColors = {
  borderColor: "#000000", //"black",
  playerColor: "#FF0000", //"red",
  goalColor: "#008000", //"green",
  barrier1Color: "#9400D3", //"darkviolet",
  barrier2Color: "#0000FF", //"blue",
  barrier3Color: "#ffd700", //gold",
  floorColor: "#F8F8FF", //"ghostwhite",
  enemyColor: "#FF00FF", //"fuchsia"
};

const levels = [
  {
    name: "Your First Maze",
    rows: 5,
    cols: 7,
    layout: ["HAAAAAE", "D00000B", "DS000ZB", "D00000B", "GCCCCCF"],
		target: 2.25,
		...worldColors
  },
  {
    name: "Four Rooms",
    rows: 6,
    cols: 6,
    layout: ["HAEHAE", "DS000B", "GCFG0F", "HAEH0E", "DZ000B", "GCFGCF"],
		...worldColors
  },
  {
    name: "Tucked Away",
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
		...worldColors
  },
  {
    name: "Turned Around",
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
		...worldColors
  },
  {
    name: "Getting Tricky With It",
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
		...worldColors
  },
  {
    name: "A Fork",
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
		...worldColors
  },
  {
    name: "My First Maze",
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
		...worldColors
  },
  {
    name: "Plinko",
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
		...worldColors
  },
  {
    name: "Whirlpool",
    rows: 10,
    cols: 10,
    layout: [
      "HAAAAAAAAE",
      "DSCCCCCCCF",
      "DBd000000B",
      "DB0HANEEEB",
      "DB0DZJ00BB",
      "DB0DOiFBBB",
      "DB0GCCCFBB",
      "DBCCCCCCFB",
      "D00000000B",
      "GCCCCCCCCF",
    ],
		...worldColors
  },
];

export default levels;
