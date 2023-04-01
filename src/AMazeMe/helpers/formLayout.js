export default ({ prev, rows, cols }) => {
  const result = [];
  for (let row = 0; row < rows; row++) {
    let rowString = "";
    for (let col = 0; col < cols; col++) {
			// console.log(prev);
      if (prev && prev[row] && prev[row][col]) {
        rowString += prev[row][col];
      } else {
        rowString += "0";
      }
    }
    result.push(rowString);
  }
	// console.log(result)
  return result;
};
