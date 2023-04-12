// this is a world template to be copied when making a new world

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

const levelsWithoutColors = [
  {
    name: "?? 1",
    rows: 5,
    cols: 7,
    layout: ["HAAAAAE", "D00000B", "DS000ZB", "D00000B", "GCCCCCF"],
    target: 100,
  },
  {
    name: "?? 2",
    rows: 5,
    cols: 7,
    layout: ["HAAAAAE", "D00000B", "DS000ZB", "D00000B", "GCCCCCF"],
    target: 100,
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
