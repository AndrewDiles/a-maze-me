import { useContext } from "react";
import RecordsContext from "../../contexts/RecordsContext";
import calcLevelsBeaten from "../../helpers/calcLevelsBeaten";

export default ({ slot }) => {
  const { records } = useContext(RecordsContext);
  const thisSlotsRecords = records[slot];
  const levelsBeaten = calcLevelsBeaten(thisSlotsRecords);

  return <p>{levelsBeaten} solved</p>;
};
