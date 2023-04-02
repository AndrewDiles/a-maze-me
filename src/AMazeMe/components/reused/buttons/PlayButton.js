import { useContext } from "react";
import GameContext from "../../../contexts/GameContext";
import Button from "./Button";

export default ({worldToPlay, levelToPlay, disabled}) => {
  const { playLevel } = useContext(GameContext);

  return <Button disabled = {disabled} onClick={()=>{playLevel({worldToPlay, levelToPlay})}}>{disabled ? "locked":"play level"}</Button>;
};
