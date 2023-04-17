import { useContext } from "react";
import GameContext from "../../../contexts/GameContext";
import Button from "./Button";
import useFocusIdOnMount from "../../../hooks/useFocusIdOnMount";

const idToFocus = "play-button";

export default ({ worldToPlay, levelToPlay, disabled }) => {
  const { playLevel } = useContext(GameContext);
  useFocusIdOnMount(idToFocus);

  return (
    <Button
      id={idToFocus}
      // disabled={disabled}  removing this as it is causing issues with the WASD events
      onClick={() => {
        !disabled && playLevel({ worldToPlay, levelToPlay });
      }}
    >
      {disabled ? "locked" : "play level"}
    </Button>
  );
};
