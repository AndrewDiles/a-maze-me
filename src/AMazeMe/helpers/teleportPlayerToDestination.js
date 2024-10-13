export default (newPlayerObject, destinationLetter, layout, size) => {
  console.log(newPlayerObject, destinationLetter, layout, size);
	// change newPlayerObject.x and newPlayerObject.y based on location of destinationLetter in layout;
	const rowsToTest = layout.length - 1;
	const colsToTest = layout[0].length - 1;
	console.log(rowsToTest, colsToTest);
	
	for (let destinationRow = 0; destinationRow <= rowsToTest; destinationRow++) {
		const currentRow = layout[destinationRow];
		console.log({currentRow});
		
		for (let destinationCol = 0; destinationCol <= colsToTest; destinationCol++) {
			console.log({currentRow}, currentRow[destinationCol], destinationLetter);
			if (currentRow[destinationCol] === destinationLetter) {
				newPlayerObject.x = destinationCol*size - size*.9;
				newPlayerObject.y = destinationRow*size - size*.4;
				if (destinationLetter === "Á" || destinationLetter === "Ó" ||destinationLetter === "Ú") {
					newPlayerObject.x += size*.4
				}
			}
		}
	}
};
