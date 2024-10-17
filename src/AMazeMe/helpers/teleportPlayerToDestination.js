import { CELL_UNIT_SIZE } from "../constants/general";

export default (newPlayerObject, destinationLetter, layout, playerNumber) => {
	const rowsToTest = layout.length - 1;
	const colsToTest = layout[0].length - 1
	for (let destinationRow = 0; destinationRow <= rowsToTest; destinationRow++) {
		const currentRow = layout[destinationRow];
		for (let destinationCol = 0; destinationCol <= colsToTest; destinationCol++) {
			if (currentRow[destinationCol] === destinationLetter) {
				console.log({destinationRow}, {destinationCol});
				newPlayerObject.x = destinationCol*CELL_UNIT_SIZE;
				newPlayerObject.y = destinationRow*CELL_UNIT_SIZE;
				newPlayerObject.animation = "none";
				return
			}
		}
	}
};
