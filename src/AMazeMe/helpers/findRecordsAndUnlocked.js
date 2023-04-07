export default ({selectedRecords, selection}) => {
	const worldProgressArray = selectedRecords[selection.worldIndex];

	const records = worldProgressArray
		? worldProgressArray[selection.levelIndex]
			? worldProgressArray[selection.levelIndex]
			: null
		: null;

	let unlocked = false;
	if (selection.levelIndex === 0) {
		if (selection.worldIndex === 0) {
			unlocked = true;
		} else if (
			selectedRecords[selection.worldIndex - 1] &&
			selectedRecords[selection.worldIndex - 1].length === 9
		) {
			unlocked = true;
		}
	} else {
		if (
			selectedRecords[selection.worldIndex] &&
			selectedRecords[selection.worldIndex][selection.levelIndex - 1]
		) {
			unlocked = true;
		}
	}

	return {records, unlocked}
}
