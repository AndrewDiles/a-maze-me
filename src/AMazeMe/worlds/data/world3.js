// this is the third world that introduces the keys and doors that unlock

export const worldColors = {
  borderColor: "indigo",
  playerColor: "coral",
  goalColor: "red",
  barrier1Color: "cyan",
  barrier2Color: "magenta",
  barrier3Color: "yellow",
  "switch onColor": "#00FF00",
  "switch offColor": "#FF00FF",
  enemyColor: "#ffa500",
  floorColor: "lightblue",
	portalSet1Color: "#ffc800", // orange
	portalSet2Color: "#00ffe1", // cyan
	portalSet3Color: "#fba2f4", // pink
};

const levelsWithoutColors = [
  {
    name: "turn key",
    rows: 5,
    cols: 10,
    layout: [
      "OOOOOOOOOO",
      "O00000t00O",
      "O0p0S0tZ0O",
      "O00000t00O",
      "OOOOOOOOOO",
    ],
    target: 2.5,
  },
  {
    name: "turn keys",
    rows: 11,
    cols: 11,
    layout: [
      "OOOOOOOOOOO",
      "O00EOOOH00O",
      "O00aEOHd00O",
      "OOOO0p0OOOO",
      "O00r000y00O",
      "O0ur0S0yU0O",
      "O00r000y00O",
      "OOOOVVVOOOO",
      "OOOO0Z0OOOO",
      "OOOO000OOOO",
      "OOOOOOOOOOO",
    ],
    target: 5.25,
  },
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
  },
  {
    name: "one key to rule them all",
    rows: 9,
    cols: 20,
    layout: [
      "OOAAAAAAEAAEAAEAAAOO",
      "O0000000W00r00w0000O",
      "D0AAAE00B00B00B0000B",
      "D0000H0bF00B00B00HAE",
      "D0S00G0B000B00B00YZB",
      "D0000B0B000B00B00GCF",
      "HAAAAA0B0p0B0uB0000B",
      "OU00000B000B00B0000O",
      "OOCCCCCFCCCCCCCCCCOO",
    ],
    target: 17.5,
  },
  {
    name: "now you two",
    rows: 7,
    cols: 18,
    layout: [
      "HAAAAAEAAAAAEAAAAE",
      "D00000B00000r0000B",
      "D00000B00000r0000B",
      "Dp000SB0S000r000ZB",
      "D00000B00000r0000B",
      "D00000B00000r0000B",
      "GCCCCCFCCCCCFCCCCF",
    ],
    target: 5.5,
  },
  {
    name: "free yourself",
    rows: 7,
    cols: 18,
    layout: [
      "HAEAAAAEAAHAAAAAAE",
      "DSr0000BZ0ypCCCCOB",
      "HAAbHAEBCCGMCc000B",
      "D0JBBuBB00000ECCJF",
      "D0JBBCFB0CCCCCCCCF",
      "D0MFCCCF00000000SB",
      "GCCCFCCCCCCCCCCCCF",
    ],
    target: 21,
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
    name: "what the flip",
    rows: 6,
    cols: 10,
    layout: [
      "OOAEAAAAOO",
      "O00Bc0Q0RO",
      "DSQ0PAA00B",
      "HvAEhAAAAE",
      "O0ZB0Q0RuO",
      "OOCFCCCCOO",
    ],
    target: 13.5,
  },
  {
    name: "yee be three",
    rows: 10,
    cols: 18,
    layout: [
      "HAAHAHAAAAAAAEAHAE",
      "DS0P0DS0MAAE0BpySB",
      "GCCD0Gc0000B0BCGCF",
      "D0B000E0H0DB000B0B",
      "D0BCCCB0D0D00BAABB",
      "DD000BB0G0GCCF0BBF",
      "DAAAEBBcBc000CCFBB",
      "GCC0BB0HqE0HACCCFB",
      "Du00BB0DZB0GC000QB",
      "GMIIICCGCFCCCKCCCF",
    ],
    target: 35,
  },
  ,
];

export default levelsWithoutColors.map((level) => {
  return { ...level, ...worldColors };
});


