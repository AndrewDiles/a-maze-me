import { useContext } from "react";
import GameContext from "../../../contexts/GameContext";
import Button from "./Button";
import useFocusIdOnMount from "../../../hooks/useFocusIdOnMount";

const idToFocus = "play-button"

export default ({worldToPlay, levelToPlay, disabled}) => {
  const { playLevel } = useContext(GameContext);
	useFocusIdOnMount(idToFocus);

  return <Button id = {!disabled && idToFocus} disabled = {disabled} onClick={()=>{playLevel({worldToPlay, levelToPlay})}}>{disabled ? "locked":"play level"}</Button>;
};
