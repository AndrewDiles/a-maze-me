import requiredLevelKeys from "../constants/requiredLevelKeys";
import borders from "./borders";

export default (potentialLevel) => {

	// this has not been thoroughly tested
	const newErrors = [];
	requiredLevelKeys.forEach((requiredKey)=>{
		const valueToTest = potentialLevel[requiredKey];
		if (!valueToTest) {
			newErrors.push(`Missing required key: ${requiredKey}`);
		} else if (requiredKey === "rows" || requiredKey === "cols") {
			if (typeof valueToTest !== "number"){
				newErrors.push(`${requiredKey} must be a number`);
			} else if (valueToTest <= 0 || !Number.isInteger(valueToTest)) {
				{
					newErrors.push(`${requiredKey} must be an integer larger than 0`);
				}
			}
		} else if (requiredKey === "layout") {
			if (!Array.isArray(valueToTest)) {
				newErrors.push("layout must be an array");
			} else {
				if (valueToTest.length !== potentialLevel.rows) {
					newErrors.push("length of layout array must match rows");
				}
				if (valueToTest.some(string => string.length !== potentialLevel.cols)){
					newErrors.push("length of all layout string must match cols");
				}
				if (!valueToTest.find(string => string.includes("S"))){
					newErrors.push('layout must include a start location "S" for the player');
				}
				if (!valueToTest.find(string => string.includes("G"))){
					newErrors.push('layout must include a goal location "Z" to be able to end the game');
				}
				const invalidCharacters = [];
				valueToTest.forEach(string => {
					for (let i = 0; i < string.length; i++) {
						const letter = string[i];
						if (!borders[letter]) {
							if (!invalidCharacters.includes(letter)) invalidCharacters.push(letter)
						}
					}
				})
				if (invalidCharacters.length > 0) newErrors.push(`invalid character${invalidCharacters.length > 1 ? "s":""} in layout: ${invalidCharacters}`);
			}
		} else if (typeof valueToTest !== "string") {
			newErrors.push(`${requiredKey} must be a string`);
			// Not going to verify that colors are valid - will only lead to broken css background-color
		}
	})
	return newErrors
}