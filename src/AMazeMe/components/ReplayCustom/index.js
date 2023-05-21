import { useEffect, useContext } from "react";
import GameContext from "../../contexts/GameContext";
import LevelContext from "../../contexts/LevelContext";

export default () => {
  const { playCustom } = useContext(GameContext);
	const { loadCustomLevel } = useContext(LevelContext);
  useEffect(() => {
		loadCustomLevel();
    playCustom();
  }, []);
  return <></>;
};
