import { useContext } from "react";
import GameContext from "../../contexts/GameContext";
import Button from "../reused/buttons/Button";

export default () => {
  const { openEditor } = useContext(GameContext);
  return <Button onClick={openEditor}>BACK TO EDITOR</Button>;
};
