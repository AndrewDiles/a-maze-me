import { useContext, useEffect, useState } from "react";
import GameContext from "../contexts/GameContext";
import {
  createInitialPlayerArrays,
  createInitialEnemyArrays,
	createInitialSwitchesArrays,
  createInitialGoalArrays,
} from "../helpers/createInitialArrays";

export default () => {
  const [mounted, setMounted] = useState(null);
  const { initializeGame } = useContext(GameContext);

  useEffect(() => {
    let worldInfo = localStorage.getItem("custom-map")
    if (!worldInfo) return setMounted(false);
		worldInfo = JSON.parse(worldInfo)

    // make enemy extractor
    const initialPlayers = createInitialPlayerArrays(worldInfo);
    const initialEnemies = createInitialEnemyArrays(worldInfo);
		const initialSwitches = createInitialSwitchesArrays(worldInfo);
    const initialGoals = createInitialGoalArrays(worldInfo);
    initializeGame({
      newPlayers: initialPlayers,
      newEnemies: initialEnemies,
			newSwitches: initialSwitches,
      newGoals: initialGoals,
    });
    setMounted(true);
  }, []);

  return mounted
};
