export default (cellArray) => {
	for (let i= 0; i < cellArray.length; i++) {
		for (let j= 0; j < cellArray[0].length; j++) {
			if (cellArray[i][j] !== 0) return true;
		}
	}
	return false
}