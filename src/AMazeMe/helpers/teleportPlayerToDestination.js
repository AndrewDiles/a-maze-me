export default (newPlayerObject, destinationLetter, layout, size) => {
	const rowsToTest = layout.length - 1;
	const colsToTest = layout[0].length - 1
	for (let destinationRow = 0; destinationRow <= rowsToTest; destinationRow++) {
		const currentRow = layout[destinationRow];
		for (let destinationCol = 0; destinationCol <= colsToTest; destinationCol++) {
			if (currentRow[destinationCol] === destinationLetter) {
				newPlayerObject.x = destinationCol*size - size*.9;
				newPlayerObject.y = destinationRow*size - size*.4;
				if (destinationLetter === "Á" || destinationLetter === "Ó" ||destinationLetter === "Ú") {
					newPlayerObject.x += size*.4
				}
				return
			}
		}
	}
};
