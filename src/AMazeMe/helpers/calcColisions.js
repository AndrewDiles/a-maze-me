import { CELL_UNIT_SIZE, BOUNCE_MAGNITUDE } from "../constants/general";
import generateCellArray from "./generateCellArray";
import cellArrayIsNotEmpty from "./cellArrayIsNotEmpty";
import {bounceRightIfApplicable, bounceLeftIfApplicable, bounceUpIfApplicable, bounceDownIfApplicable} from "./bounceHelpers";
import logError from "./logError";

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
  } else if (letter === "Q") {
    collisions.push("turn switch on");
  } else if (letter === "R") {
    collisions.push("turn switch off");
  } else return true;
	// "damage" for enemy / projectiles
};

// if true, that corner/quadrant will not test for collisions
const debugTLOff = false;
const debugTROff = false;
const debugBLOff = false;
const debugBROff = false;

// this is just a warning logger.  This should never be seen in prod
if (debugTLOff || debugTROff || debugBLOff || debugBROff) logError("WARNING COLLISION DEBUGGER ACTIVE");

// TL collisions - can only bounce down or right
const testTLCollisions = ({pos, collisions, bounced, newPlayerObject, getCellFromLayout, x, y}) => {

	if (!debugTLOff && pos.row > -1 && pos.col > -1) {
    // console.log("TL in bounds")
    const cellFromLayout = getCellFromLayout(pos);
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



}

// TR collisions - can only bounce down or left
const testTRCollisions = ({pos, collisions, bounced, newPlayerObject, getCellFromLayout, x, y, maxCols}) => {
	if (!debugTROff && pos.col < maxCols && pos.row > -1) {
    // console.log("TR in bounds")
    const cellFromLayout = getCellFromLayout(pos);

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
}

// BL collisions - can only bounce up or right
const testBLCollisions = ({pos, collisions, bounced, newPlayerObject, getCellFromLayout, x, y, maxRows}) => {
	if (!debugBLOff && pos.row < maxRows && pos.col > -1) {
    // console.log("BL in bounds")
    const cellFromLayout = getCellFromLayout(pos);
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
}

// BR collisions - can only bounce up or left
const testBRCollisions = ({pos, collisions, bounced, newPlayerObject, getCellFromLayout, x, y, maxCols, maxRows}) => {
	if (!debugBROff && pos.row < maxRows && pos.col < maxCols) {
    // console.log("BR in bounds")
    const cellFromLayout = getCellFromLayout(pos);
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
}


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

	// Decided to randomize the order of the tests so bounce directions aren't always the same
	// This allows the user to slide along walls regardless of which diagonal movement they are using.
	let tests = ["TL", "TR", "BL", "BR"];

	while (tests.length > 0) {
		const randomTestIndex = Math.floor(Math.random()*tests.length);
		const test = tests[randomTestIndex];
		switch (test) {
			case "TL" : {
				testTLCollisions({pos:TLPos, collisions, bounced, newPlayerObject, getCellFromLayout, x, y})
				break;
			}
			case "TR" : {
				testTRCollisions({pos : TRPos, collisions, bounced, newPlayerObject, getCellFromLayout, x, y, maxCols})
				break;
			}
			case "BL" : {
				testBLCollisions({pos:BLPos, collisions, bounced, newPlayerObject, getCellFromLayout, x, y, maxRows})
				break;
			}
			case "BR" : {
				testBRCollisions({pos:BRPos, collisions, bounced, newPlayerObject, getCellFromLayout, x, y, maxCols, maxRows})
				break;
			}
		}
		tests = tests.filter(t => t!==test)
	}


  
	// testTLCollisions({pos:TLPos, collisions, bounced, newPlayerObject, getCellFromLayout, x, y})
  
  
	// testTRCollisions({pos : TRPos, collisions, bounced, newPlayerObject, getCellFromLayout, x, y, maxCols})

  
// testBLCollisions({pos:BLPos, collisions, bounced, newPlayerObject, getCellFromLayout, x, y, maxRows})
  
  
	// testBRCollisions({pos:BRPos, collisions, bounced, newPlayerObject, getCellFromLayout, x, y, maxCols, maxRows})


  return collisions;
};
