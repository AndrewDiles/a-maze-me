import { useContext } from "react";
import CenteredColumn from "../reused/CenteredColumn";
import RecordsContext from "../../contexts/RecordsContext";
import Slot from "./Slot";

export default () => {
  const { records1, records2, records3 } = useContext(RecordsContext);
  const records = [records1, records2, records3];
  return (
    <CenteredColumn>
      {records.map((recordInfo, index) => (
        <Slot key={index} recordInfo={recordInfo} slotNumber = {index}/>
      ))}
    </CenteredColumn>
  );
};