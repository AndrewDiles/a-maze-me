import { useContext } from "react";
import LevelContext from "../../../contexts/LevelContext";
import GameContext from "../../../contexts/GameContext";
import RecordsContext from "../../../contexts/RecordsContext";
import TopButtons from "./TopButtons";
import NewRecord from "./NewRecord";
import NewBestRecord from "./NewBestRecord";
import NoNewRecord from "./NoNewRecord";
import Header from "../../reused/Header";
import SelectionIndicator from "../../Worlds/SelectionIndicator";
import useEndGameManagement from "../../../hooks/useEndGameManagement";

export default () => {
  const {
    level: { target },
  } = useContext(LevelContext);
  const { game } = useContext(GameContext);
  const { world, level } = game;
  const { selectedRecords } = useContext(RecordsContext);
  const thisRecord = selectedRecords[world][level];

  const recordsHandled = useEndGameManagement(thisRecord);

  if (!recordsHandled) return <Header>verifying records</Header>;

  const beatTarget = thisRecord["best time"] < target;

  return (
    <>
      <Header>you win!</Header>
      <TopButtons />
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
