import { useContext } from "react";
import Button from "../reused/buttons/Button";
import GameContext from "../../contexts/GameContext";
import LevelContext from "../../contexts/LevelContext";

export default () => {
  const { playCustom } = useContext(GameContext);
  const { loadCustomLevel } = useContext(LevelContext);
  return (
    <Button
      id="custom-map-button"
      onClick={() => {
        loadCustomLevel();
        playCustom();
      }}
    >
      play custom level
    </Button>
  );
};
