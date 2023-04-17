import { useContext } from "react";
import GameContext from "../../../contexts/GameContext";
import Button from "./Button";

export default () => {
  const { openSlotSelect } = useContext(GameContext);

  return <Button id="back-to-slot-select-button" onClick={openSlotSelect}>back to slot select</Button>;
};
