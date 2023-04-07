import { useContext, useState, useEffect } from "react";
import LevelContext from "../../../contexts/LevelContext";
import GameContext from "../../../contexts/GameContext";
import RecordsContext from "../../../contexts/RecordsContext";
import NewRecord from "./NewRecord";
import NewBestRecord from "./NewBestRecord";
import NoNewRecord from "./NoNewRecord";
import Header from "../../reused/Header";
import SelectionIndicator from "../../Worlds/SelectionIndicator";
import formatTime from "../../../helpers/formatTime";
import { MAX_WORLD_INDEX } from "../../../constants/general";

export default () => {
  const {
    level: { target },
  } = useContext(LevelContext);
  const { game } = useContext(GameContext);
  const { world, level } = game;
  const { selectedRecords, setSelectedRecords } = useContext(RecordsContext);
  const [recordsHandled, setRecordsHandled] = useState(null);
  const thisRecord = selectedRecords[world][level];

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
      console.log("this record exists.  Verify if new records");
      const entry = {
        "first beaten": thisRecord["first beaten"],
        "best day": thisRecord["best day"],
        "best time": thisRecord["best time"],
        "times beaten": thisRecord["time beaten"] + 1,
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

      // console.log(
      //   target,
      //   thisTime,
      //   thisTime < target,
      //   thisTime < thisRecord["best time"],
      //   thisRecord,
      //   formatTime(game.finishTime - game.startTime)
      // );
      // {first beaten: 'Wed Apr 05 2023', best day: 'Wed Apr 05 2023', best time: 2.21, times beaten: 1} 1.53
    }

    setRecordsHandled(result);
  }, []);

  console.log(game);
  if (!recordsHandled) return <Header>verifying records</Header>;

  const beatTarget = thisRecord["best time"] < target;
  return (
    <>
      <Header>you win!</Header>
      Retry // Back to level select button / next level button
      <SelectionIndicator world={world + 1} level={level + 1} />
      {recordsHandled.first ? (
        <NewRecord
          recordsHandled={recordsHandled}
          thisRecord={thisRecord}
          beatTarget={beatTarget}
        />
      ) : recordsHandled.timeImproved ? (
        <NewBestRecord
          recordsHandled={recordsHandled}
          thisRecord={thisRecord}
          beatTarget={beatTarget}
          previousBeatTarget={recordsHandled.lastrecord < target}
        />
      ) : (
        <NoNewRecord
          recordsHandled={recordsHandled}
          thisRecord={thisRecord}
          beatTarget={beatTarget}
          thisBeatTarget={recordsHandled.thisTime < target}
        />
      )}
    </>
  );
};
