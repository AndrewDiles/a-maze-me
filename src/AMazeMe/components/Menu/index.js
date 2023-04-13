import { useContext } from "react";
import GameContext from "../../contexts/GameContext";
import Header from "../reused/Header";
import CenteredColumn from "../reused/CenteredColumn";
import Button from "../reused/buttons/Button";
import useKeyBoardToNavigateButtonsAndFocus from "../../hooks/useKeyBoardToNavigateButtonsAndFocus";

const idToFocus = "play-button";
const buttonsIdArray = [idToFocus, "level-editor-button", "view-records-button"];

export default () => {
  const { openEditor, openSlotSelect, openRecords } = useContext(GameContext);

  useKeyBoardToNavigateButtonsAndFocus({buttonsIdArray, idToFocus});

  return (
    <CenteredColumn>
      <Header>a-maze-me</Header>
      <Button id={idToFocus} onClick={openSlotSelect}>
        go play
      </Button>
      <Button id = {buttonsIdArray[1]} onClick={openEditor}>level editor</Button>
      <Button id = {buttonsIdArray[2]} onClick={openRecords}>view records</Button>
    </CenteredColumn>
  );
};
