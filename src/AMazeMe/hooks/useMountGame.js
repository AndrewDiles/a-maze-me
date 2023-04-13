import { useContext, useEffect, useState } from "react";
import LevelContext from "../contexts/LevelContext";
import GameContext from "../contexts/GameContext";

import worlds from "../worlds";
import {
  createInitialPlayerArrays,
  createInitialEnemyArrays,
	createInitialSwitchesArrays,
  createInitialGoalArrays,
} from "../helpers/createInitialArrays";

export default () => {
  const [mounted, setMounted] = useState(null);
  const { game, initializeGame } = useContext(GameContext);
  const { setLevel } = useContext(LevelContext);

  useEffect(() => {
    let worldInfo = worlds[game.world];
    worldInfo = worldInfo && worldInfo[game.level];
    if (!worldInfo) return setMounted(false);
    setLevel(JSON.parse(JSON.stringify(worldInfo)));

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
