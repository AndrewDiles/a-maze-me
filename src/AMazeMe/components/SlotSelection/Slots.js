import { useContext } from "react";
import CenteredColumn from "../reused/CenteredColumn";
import RecordsContext from "../../contexts/RecordsContext";
import useKeyBoardToNavigateButtonsAndFocus from "../../hooks/useKeyBoardToNavigateButtonsAndFocus";
import Slot from "./Slot";

const idToFocus = "slot-1-button";
const buttonsIdArray = [idToFocus,  "slot-2-button", "slot-3-button", "back-to-menu-button"];

export default () => {
  const { records1, records2, records3 } = useContext(RecordsContext);
  const records = [records1, records2, records3];
	
	useKeyBoardToNavigateButtonsAndFocus({buttonsIdArray, idToFocus});

  return (
    <CenteredColumn>
      {records.map((recordInfo, index) => (
        <Slot key={index} recordInfo={recordInfo} slotNumber = {index}/>
      ))}
    </CenteredColumn>
  );
};