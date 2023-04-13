import { useContext } from "react";
import GameContext from "../../../contexts/GameContext";
import Button from "./Button";

export default () => {
  const { openLevelSelect } = useContext(GameContext);

  return <Button id="back-to-level-select-button" onClick={openLevelSelect}>back to level select</Button>;
};
