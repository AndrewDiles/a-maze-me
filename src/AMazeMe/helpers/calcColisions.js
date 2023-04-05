import { CELL_UNIT_SIZE } from "../constants/general";
import generateCellArray from "./generateCellArray";
import cellArrayIsNotEmpty from "./cellArrayIsNotEmpty";

const bounceRightIfApplicable = ({ bounced, newPlayerObject, x }) => {
  if (!bounced.x && x < 0) {
    bounced.x = true;
    newPlayerObject.x += 10;
  }
};
const bounceLeftIfApplicable = ({ bounced, newPlayerObject, x }) => {
  if (!bounced.x && x > 0) {
    bounced.x = true;
    newPlayerObject.x -= 10;
  }
};
const bounceUpIfApplicable = ({ bounced, newPlayerObject, y }) => {
  if (!bounced.y && y > 0) {
    bounced.y = true;
    newPlayerObject.y -= 10;
  }
};
const bounceDownIfApplicable = ({ bounced, newPlayerObject, y }) => {
  if (!bounced.y && y < 0) {
    bounced.y = true;
    newPlayerObject.y += 10;
  }
};
const addToCollisionsOrReturnTrue = ({ letter, collisions }) => {
  //TODO: add enemy letters in here
  if (letter === "Z") {
    if (!collisions.includes("goal")) collisions.push("goal");
  } else if (letter === "U") {
    collisions.push("key3");
  } else if (letter === "u") {
    collisions.push("key2");
  } else if (letter === "p") {
    collisions.push("key1");
  } else return true;
	// "damage" for enemy / projectiles
};

// if true, that corner/quadrant will not test for collisions
const debugTLOff = false;
const debugTROff = false;
const debugBLOff = false;
const debugBROff = false;

// this is just a warning logger.  This should never be seen in prod
if (debugTLOff || debugTROff || debugBLOff || debugBROff) console.log('%c WARNING COLLISION DEBUGGER ACTIVE ', 'background: black; color: red; padding: 10px; font-weight: 900; font-size: 2em;');

// this is not a pure function
// it will modify the newPlayerObject and bounced objects
// these changes should be immdiately reflected in the component that called this function
export default ({
  bounced,
  newPlayerObject,
  newEnemies,
  layout,
  TRPos,
  TLPos,
  BLPos,
  BRPos,
  x,
  y,
}) => {
  const collisions = [];

  const maxRows = layout.length;
  const maxCols = layout[0].length;

  const getCellFromLayout = ({ row, col }) => layout[row][col];

  // TL collisions - can only bounce down or right
  if (!debugTLOff && TLPos.row > -1 && TLPos.col > -1) {
    // console.log("TL in bounds")
    const cellFromLayout = getCellFromLayout(TLPos);
    const cellArray = generateCellArray(cellFromLayout);
    if (cellArrayIsNotEmpty(cellArray)) {
      const percentToXStart =
        (newPlayerObject.x + CELL_UNIT_SIZE / 4) % CELL_UNIT_SIZE;
      const inColumnIndexGreaterThan = Math.floor(percentToXStart / 10);
      const percentToYStart =
        (newPlayerObject.y + CELL_UNIT_SIZE / 4) % CELL_UNIT_SIZE;
      const inRowIndexGreaterThan = Math.floor(percentToYStart / 10);

      let collisionFound = false;

			// console.log(cellArray);
      // console.log("row range: ", inRowIndexGreaterThan, " to ", Math.min(inRowIndexGreaterThan + 5, 10));
      // console.log("col range: ", inColumnIndexGreaterThan,  " to ", Math.min(inColumnIndexGreaterThan+5, 10));

      for (
        let row = inRowIndexGreaterThan;
        row < Math.min(inRowIndexGreaterThan + 5, 10);
        row++
      ) {
        for (
          let col = inColumnIndexGreaterThan;
          col < Math.min(inColumnIndexGreaterThan + 5, 10);
          col++
        ) {
          if (cellArray[row][col]) {
            collisionFound = true;
            break;
          }
        }
        if (collisionFound) break;
      }
      if (collisionFound) {
        if (
          addToCollisionsOrReturnTrue({ letter: cellFromLayout, collisions })
        ) {
					bounceRightIfApplicable({ bounced, newPlayerObject, x })
          bounceDownIfApplicable({ bounced, newPlayerObject, y })
        }
      }
    }
  }

  // TR collisions - can only bounce down or left
  if (!debugTROff && TRPos.col < maxCols && TRPos.row > -1) {
    // console.log("TR in bounds")
    const cellFromLayout = getCellFromLayout(TRPos);

		const cellArray = generateCellArray(cellFromLayout);
    if (cellArrayIsNotEmpty(cellArray)) {
      const percentToXStart =
        (newPlayerObject.x + 3*CELL_UNIT_SIZE / 4) % CELL_UNIT_SIZE;
      const inColumnIndexLessThan = Math.floor(percentToXStart / 10);
      const percentToYStart =
        (newPlayerObject.y + CELL_UNIT_SIZE / 4) % CELL_UNIT_SIZE;
      const inRowIndexGreaterThan = Math.floor(percentToYStart / 10);

      let collisionFound = false;

			// console.log(cellArray, inRowIndexGreaterThan, inColumnIndexLessThan);
      // console.log("row range: ", inRowIndexGreaterThan, " to ", Math.min(inRowIndexGreaterThan + 5, 10));
      // console.log("col range: ",  Math.max(-1, inColumnIndexLessThan - 5), " to ", inColumnIndexLessThan);


      for (
        let row = inRowIndexGreaterThan;
        row < Math.min(inRowIndexGreaterThan + 5, 10);
        row++
      ) {
        for (
          let col = inColumnIndexLessThan;
          col > Math.max(-1, inColumnIndexLessThan - 5);
          col--
        ) {
          if (cellArray[row][col]) {
            collisionFound = true;
            break;
          }
        }
        if (collisionFound) break;
      }	
      if (collisionFound) {
        // console.log(bounced, x, y);
        if (
          addToCollisionsOrReturnTrue({ letter: cellFromLayout, collisions })
        ) {
					bounceLeftIfApplicable({ bounced, newPlayerObject, x })
          bounceDownIfApplicable({ bounced, newPlayerObject, y })
        }
      }
    }
  }

  // BL collisions - can only bounce up or right
  if (!debugBLOff && BLPos.row < maxRows && BLPos.col > -1) {
    // console.log("BL in bounds")
    const cellFromLayout = getCellFromLayout(BLPos);
    const cellArray = generateCellArray(cellFromLayout);
    if (cellArrayIsNotEmpty(cellArray)) {
      const percentToXStart =
        (newPlayerObject.x + CELL_UNIT_SIZE / 4) % CELL_UNIT_SIZE;
      const inColumnIndexGreaterThan = Math.floor(percentToXStart / 10);
      const percentToYStart =
        (newPlayerObject.y + (3 * CELL_UNIT_SIZE) / 4) % CELL_UNIT_SIZE;
      const inRowIndexLessThan = Math.floor(percentToYStart / 10);

      let collisionFound = false;

      // console.log(cellArray, inRowIndexLessThan, inColumnIndexGreaterThan);
      // console.log("row range: ", inRowIndexLessThan, Math.max(-1, inRowIndexLessThan-5));
      // console.log("col range: ", inColumnIndexGreaterThan, Math.min(inColumnIndexGreaterThan+5, 10));

      for (
        let row = inRowIndexLessThan;
        row > Math.max(-1, inRowIndexLessThan - 5);
        row--
      ) {
        for (
          let col = inColumnIndexGreaterThan;
          col < Math.min(inColumnIndexGreaterThan + 5, 10);
          col++
        ) {
          if (cellArray[row][col]) {
            collisionFound = true;
            break;
          }
        }
        if (collisionFound) break;
      }
      if (collisionFound) {
        // console.log(bounced, x, y);
        if (
          addToCollisionsOrReturnTrue({ letter: cellFromLayout, collisions })
        ) {
          bounceRightIfApplicable({ bounced, newPlayerObject, x })
          bounceUpIfApplicable({ bounced, newPlayerObject, y })
        }
      }
    }
  }

  // BR collisions - can only bounce up or left
  if (!debugBROff && BRPos.row < maxRows && BRPos.col < maxCols) {
    // console.log("BR in bounds")
    const cellFromLayout = getCellFromLayout(BRPos);
    const cellArray = generateCellArray(cellFromLayout);
    if (cellArrayIsNotEmpty(cellArray)) {
      const percentToXStart =
        (newPlayerObject.x + (3 * CELL_UNIT_SIZE) / 4) % CELL_UNIT_SIZE;
      const inColumnIndexLessThan = Math.floor(percentToXStart / 10);
      const percentToYStart =
        (newPlayerObject.y + (3 * CELL_UNIT_SIZE) / 4) % CELL_UNIT_SIZE;
      const inRowIndexLessThan = Math.floor(percentToYStart / 10);

      let collisionFound = false;

			// console.log(cellArray)
      // console.log("row range: ", Math.max(-1, inRowIndexLessThan - 5), " to ", inRowIndexLessThan);
      // console.log("col range: ",  Math.max(-1, inColumnIndexLessThan - 5), " to ", inColumnIndexLessThan);

      for (
        let row = inRowIndexLessThan;
        row > Math.max(-1, inRowIndexLessThan - 5);
        row--
      ) {
        for (
          let col = inColumnIndexLessThan;
          col > Math.max(-1, inColumnIndexLessThan - 5);
          col--
        ) {
          if (cellArray[row][col]) {
            collisionFound = true;
            break;
          }
        }
        if (collisionFound) break;
      }
      if (collisionFound) {
        // console.log(bounced, x, y);
        if (
          addToCollisionsOrReturnTrue({ letter: cellFromLayout, collisions })
        ) {
          bounceLeftIfApplicable({ bounced, newPlayerObject, x })
          bounceUpIfApplicable({ bounced, newPlayerObject, y })
        }
      }
    }
  }
  return collisions;
};
