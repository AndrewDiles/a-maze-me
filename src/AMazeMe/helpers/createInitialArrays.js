import { CELL_UNIT_SIZE } from "../constants/general";

const findMovableSprite = ({ layout, targetValues }) => {
  const result = [];

  targetValues.forEach((targetValue) => {
    layout.forEach((rowString, rowIndex) => {
      for (let colIndex = 0; colIndex < rowString.length; colIndex++) {
        if (rowString[colIndex] === targetValue) {
          result.push({
            alive: true,
            x: colIndex * CELL_UNIT_SIZE,
            y: rowIndex * CELL_UNIT_SIZE,
            type: targetValue,
						animation: null,
          });
        }
      }
    });
  });
  return result;
};

export const createInitialPlayerArrays = (worldInfo) =>
  findMovableSprite({ layout: worldInfo.layout, targetValues: ["S"] });
export const createInitialGoalArrays = (worldInfo) =>
  findMovableSprite({ layout: worldInfo.layout, targetValues: ["Z"] });
// TODO: return to this once you are creating enemies
export const createInitialEnemyArrays = (worldInfo) =>
  findMovableSprite({ layout: worldInfo.layout, targetValues: [] });
