import { useContext } from "react";
import CenteredColumn from "../reused/CenteredColumn";
import RecordsContext from "../../contexts/RecordsContext";
import useKeyBoardToNavigateButtonsAndFocus from "../../hooks/useKeyBoardToNavigateButtonsAndFocus";
import Slot from "./Slot";
import PlayCustomMap from "./PlayCustomMap";

const idToFocus = "slot-1-button";
const buttonsIdArray = [idToFocus,  "slot-2-button", "slot-3-button", "back-to-menu-button"];
const buttonIdArrayWithCustom = [idToFocus,  "slot-2-button", "slot-3-button", "custom-map-button","back-to-menu-button"];

const addCustomtoButtonsIdArrayIfApplicable = () => localStorage.getItem("custom-map") ? buttonIdArrayWithCustom : buttonsIdArray

export default () => {
  const { records } = useContext(RecordsContext);
	
	useKeyBoardToNavigateButtonsAndFocus({buttonsIdArray : addCustomtoButtonsIdArrayIfApplicable(), idToFocus});

  return (
    <CenteredColumn>
      {records.map((recordInfo, index) => (
        <Slot key={index} recordInfo={recordInfo} slotNumber = {index}/>
      ))}
			{localStorage.getItem("custom-map") && <PlayCustomMap/>}
    </CenteredColumn>
  );
};