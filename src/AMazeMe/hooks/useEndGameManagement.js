import {useEffect, useState, useContext} from "react";
import GameContext from "../contexts/GameContext";
import RecordsContext from "../contexts/RecordsContext";
import formatTime from "../helpers/formatTime";
import { MAX_WORLD_INDEX } from "../constants/general";

export default (thisRecord) => {

	const { game } = useContext(GameContext);
	const { world, level } = game;
	const { selectedRecords, setSelectedRecords } = useContext(RecordsContext);
	const [recordsHandled, setRecordsHandled] = useState(null);

	useEffect(() => {
		const isNewEntry = thisRecord ? false : true;
		let result = {};
		const thisTime = formatTime(game.finishTime - game.startTime);
		const now = new Date().toString().slice(0, 15);
	
		if (isNewEntry) {
			result.first = true;
			const newEntry = {
				"first beaten": now,
				"best day": now,
				"best time": thisTime,
				"times beaten": 1,
			};
			const newRecords = JSON.parse(JSON.stringify(selectedRecords));
			newRecords[world][level] = newEntry;
			if (level === 8 && !selectedRecords[world + 1]) {
				// need to unlock next world
				newRecords.push([]);
				if (world + 1 > MAX_WORLD_INDEX) {
					result.unlock = world + 2;
				} else {
					result.end = true;
				}
				
			}
			setSelectedRecords(newRecords);
			// console.log(newEntry);
		} else {
			// console.log("this record exists.  Verify if new records");
			const entry = {
				"first beaten": thisRecord["first beaten"],
				"best day": thisRecord["best day"],
				"best time": thisRecord["best time"],
				"times beaten": thisRecord["times beaten"] + 1,
			};
	
			const timeImproved = thisTime < thisRecord["best time"];
			if (timeImproved) {
				result.timeImproved = true;
				result.lastrecord = thisRecord["best time"];
				result["best time"] = thisTime;
				entry["best day"] = now;
				entry["best time"] = thisTime;
			} else {
				result.timeImproved = false;
				result["best time"] = thisRecord["best time"];
				result.thisTime = thisTime;
			}
			const newRecords = JSON.parse(JSON.stringify(selectedRecords));
			newRecords[world][level] = entry;
			setSelectedRecords(newRecords);
		}
	
		setRecordsHandled(result);
	}, []);

	return recordsHandled

}