import { useContext } from "react";
import GameContext from "../../contexts/GameContext";
import Header from "../reused/Header";
import CenteredColumn from "../reused/CenteredColumn";
import Button from "../reused/buttons/Button";
import useFocusIdOnMount from "../../hooks/useFocusIdOnMount";

const idToFocus = "play-button";

export default () => {
  const { openEditor, openSlotSelect, openRecords } = useContext(GameContext);

  useFocusIdOnMount(idToFocus);

  return (
    <CenteredColumn>
      <Header>a-maze-me</Header>
      <Button id={idToFocus} onClick={openSlotSelect}>
        go play
      </Button>
      <Button onClick={openEditor}>level editor</Button>
      <Button onClick={openRecords}>view records</Button>
    </CenteredColumn>
  );
};
