import { useContext } from "react";
import GameContext from "../../../contexts/GameContext";
import Button from "./Button";

export default ({altText}) => {
  const { replayCustomLevel } = useContext(GameContext);

  return (
    <Button id="replay-button" onClick={replayCustomLevel}>
      {altText ? altText : "replay level"}
    </Button>
  );
};
