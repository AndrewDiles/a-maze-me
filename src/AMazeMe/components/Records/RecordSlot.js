import Button from "../reused/buttons/Button";
import calcLevelsBeaten from "../../helpers/calcLevelsBeaten";

export default ({ recordInfo, slotNumber, setSlot }) => {
  const levelsBeaten = calcLevelsBeaten(recordInfo);
  return (
    <Button
      id={`slot-${slotNumber+1}-button`}
      onClick={() => {
        setSlot(slotNumber);
      }}
			disabled = {levelsBeaten === 0}
    >
      slot {slotNumber + 1} :{" "}
      {levelsBeaten === 0 ? "new file" : `${levelsBeaten} solved`}
    </Button>
  );
};
