import { useContext } from "react";
import GameContext from "../../../contexts/GameContext";
import Button from "./Button";

export default ({lowerCased}) => {
  const { returnToMenu } = useContext(GameContext);

  return <Button id = "back-to-menu-button" onClick={returnToMenu}>{lowerCased ? "back to menu":"BACK TO MENU"}</Button>;
};
