import { useContext } from "react";
import GameContext from "../../contexts/GameContext";
import Button from "../reused/buttons/Button";

export default () => {
  const { openImporter } = useContext(GameContext);
  return <Button onClick={openImporter}>IMPORT</Button>;
};
