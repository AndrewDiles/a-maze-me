import { useContext } from "react";
import RecordsContext from "../../contexts/RecordsContext";
import WorldRecords from "./WorldRecords";
import worlds from "../../worlds";
import { MAX_WORLD_INDEX } from "../../constants/general";

const worldsToMap = [];
for (let index = 0; index < MAX_WORLD_INDEX; index++) {
  worldsToMap.push(worlds[index]);
}

export default ({ slot }) => {
  const { records } = useContext(RecordsContext);
  return worldsToMap.map((worldInfo, index) => (
    <WorldRecords
      key={index}
      worldInfo={worldInfo}
      recordInfo={records[slot][index]}
      worldNumber={index + 1}
    />
  ));
};
