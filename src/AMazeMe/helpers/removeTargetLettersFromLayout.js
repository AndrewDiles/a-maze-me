export default (layout, ...letters) => {
	const newLayout = [];
	layout.forEach((rowString)=>{
		let newRowString = ""
		for(let i = 0; i < rowString.length; i++) {
			const current = rowString[i];
			if (letters.some(letter => current === letter)) {
				newRowString+="0"
			} else {
				newRowString += current
			}
		}
		newLayout.push(newRowString)
	})
	return newLayout
}