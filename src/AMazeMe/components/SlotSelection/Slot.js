import { useContext } from "react";
import RecordsContext from "../../contexts/RecordsContext";
import Button from "../reused/buttons/Button";
import GameContext from "../../contexts/GameContext";

export default ({ recordInfo, slotNumber }) => {
  const { openLevelSelect } = useContext(GameContext);
  const { setSelectedSlot } = useContext(RecordsContext);
  const levelsBeaten = 0;
  recordInfo.forEach((worldArray) =>
    worldArray.forEach((levelArray) => levelsBeaten+=levelArray.length)
  );
  return (
    <Button
      onClick={() => {
        setSelectedSlot(slotNumber);
        openLevelSelect();
      }}
    >
      slot {slotNumber + 1} : {levelsBeaten === 0 ? "new file" : `${levelsBeaten} solved`}
    </Button>
  );
};