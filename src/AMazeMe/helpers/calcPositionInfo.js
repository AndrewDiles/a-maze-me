import { CELL_UNIT_SIZE } from "../constants/general";
export default ({ x, y }) => {
	// the .25 and .75 is because the player is half the size of a cell
	// so 25% of a cell size (linearly) is around the player.
	const TLPos = {
    row: Math.floor( ((y + .25*CELL_UNIT_SIZE) / CELL_UNIT_SIZE)),
    col: Math.floor( ((x + .25*CELL_UNIT_SIZE) / CELL_UNIT_SIZE)),
  }
	const TRPos = {
    row: Math.floor( ((y + .25*CELL_UNIT_SIZE) / CELL_UNIT_SIZE)),
    col: Math.floor( ((x + .75*CELL_UNIT_SIZE) / CELL_UNIT_SIZE)),
  }
	const BRPos = {
    row: Math.floor( ((y + .75*CELL_UNIT_SIZE) / CELL_UNIT_SIZE)),
    col: Math.floor( ((x + .75*CELL_UNIT_SIZE) / CELL_UNIT_SIZE)),
  }
	const BLPos = {
    row: Math.floor( ((y + .75*CELL_UNIT_SIZE) / CELL_UNIT_SIZE)),
    col: Math.floor( ((x + .25*CELL_UNIT_SIZE) / CELL_UNIT_SIZE)),
  }
  return {
    TLPos, TRPos, BRPos, BLPos
  };
};
