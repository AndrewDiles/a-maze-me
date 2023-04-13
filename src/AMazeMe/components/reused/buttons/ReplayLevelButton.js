import { useContext } from "react";
import GameContext from "../../../contexts/GameContext";
import Button from "./Button";

export default ({altText}) => {
  const { replayLevel } = useContext(GameContext);

  return (
    <Button id="replay-button" onClick={replayLevel}>
      {altText ? altText : "replay level"}
    </Button>
  );
};
