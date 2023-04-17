import { useContext } from "react";
import RecordsContext from "../../contexts/RecordsContext";
import calcLevelsBeaten from "../../helpers/calcLevelsBeaten";
import Button from "../reused/buttons/Button";
import GameContext from "../../contexts/GameContext";

export default ({ recordInfo, slotNumber }) => {
  const { openLevelSelect } = useContext(GameContext);
  const { setSelectedSlot } = useContext(RecordsContext);
  const levelsBeaten = calcLevelsBeaten(recordInfo)
  return (
    <Button
      id={`slot-${slotNumber+1}-button`}
      onClick={() => {
        setSelectedSlot(slotNumber);
        openLevelSelect();
      }}
    >
      slot {slotNumber + 1} :{" "}
      {levelsBeaten === 0 ? "new file" : `${levelsBeaten} solved`}
    </Button>
  );
};
