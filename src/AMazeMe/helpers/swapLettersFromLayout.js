export default (layout, charToRemove, replacementChar) => {
	const newLayout = [];
	layout.forEach((rowString)=>{
		let newRowString = ""
		for(let i = 0; i < rowString.length; i++) {
			const current = rowString[i];
			if (current === charToRemove) {
				newRowString+=replacementChar
			} else {
				newRowString += current
			}
		}
		newLayout.push(newRowString)
	})
	return newLayout
}