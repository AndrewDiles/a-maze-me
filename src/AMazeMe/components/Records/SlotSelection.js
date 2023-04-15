import { useContext } from "react";
import CenteredColumn from "../reused/CenteredColumn";
import RecordsContext from "../../contexts/RecordsContext";
import RecordSlot from "./RecordSlot";

export default ({ setSlot }) => {
  const { records } = useContext(RecordsContext);
  return (
    <CenteredColumn>
      <p>select slot to view</p>
      {records.map((recordInfo, slotNumber) => (
        <RecordSlot
          key={slotNumber}
          recordInfo={recordInfo}
          slotNumber={slotNumber}
          setSlot={setSlot}
        />
      ))}
    </CenteredColumn>
  );
};
