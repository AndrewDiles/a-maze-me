import { createContext, useState } from "react";
import { WIN_DELAY } from "../constants/general";

const GameContext = createContext(null);
export default GameContext;

const intialiMovementHandlers = {
  up: false,
  down: false,
  left: false,
  right: false,
  x: null,
  y: null,
};

const defaultState = {
  viewing: "menu",
  subView: null,
  world: 0,
  level: 0,
  startTime: 0,
  switch: false,
  finishTime: null,
  ended: false,
  players: [],
  enemies: [],
  switches: [],
  goals: [],
  ...intialiMovementHandlers,
};

export const GameProvider = ({ children }) => {
  const [game, setGame] = useState({ ...defaultState });
  // console.log(game);
  // IN GAME SETTERS
  const initializeGame = ({
    newPlayers,
    newEnemies,
    newGoals,
    newSwitches,
  }) => {
    setGame({
      ...game,
      players: newPlayers,
      enemies: newEnemies,
      goals: newGoals,
      switches: newSwitches,
      startTime: 0,
      finishTime: null,
      switch: false,
      ended: false,
      ...intialiMovementHandlers,
    });
  };
  const startTimer = () => {
    setGame({ ...game, startTime: Date.now() });
  };
  const updateLocations = ({ newPlayers, newEnemies, newSwitchValue }) => {
    setGame({
      ...game,
      players: newPlayers,
      enemies: newEnemies,
      switch: newSwitchValue,
    });
  };
  const initializeGameWin = ({ newPlayers, newEnemies }) => {
    const newGoals = game.goals.map((goal) => {
      return { ...goal, animation: "popping" };
    });
    setGame({
      ...game,
      players: newPlayers,
      enemies: newEnemies,
      finishTime: Date.now(),
      goals: newGoals,
    });
  };
  const winGame = () => {
    setGame({
      ...game,
      ended: true,
      subView: "complete",
      ...intialiMovementHandlers,
    });
  };
  const winGameIfOverdue = () => {
    setGame((currentGame) => {
      if (
        !currentGame.ended &&
        currentGame.finishTime &&
        currentGame.finishTime + 2 * WIN_DELAY < Date.now()
      ) {
        return {
          ...currentGame,
          ended: true,
          subView: "complete",
          ...intialiMovementHandlers,
        };
      } else {
        return currentGame;
      }
    });
  };

  // KEY SETTERS
  const upPress = () => {
    setGame({ ...game, up: true, y: -1 });
  };
  const downPress = () => {
    setGame({ ...game, down: true, y: 1 });
  };
  const leftPress = () => {
    setGame({ ...game, left: true, x: -1 });
  };
  const rightPress = () => {
    setGame({ ...game, right: true, x: 1 });
  };
  const upUnpress = () => {
    setGame({ ...game, up: false, y: game.down ? 1 : null });
  };
  const downUnpress = () => {
    setGame({ ...game, down: false, y: game.up ? -1 : null });
  };
  const leftUnpress = () => {
    setGame({ ...game, left: false, x: game.right ? 1 : null });
  };
  const rightUnpress = () => {
    setGame({ ...game, right: false, x: game.left ? -1 : null });
  };

  // VIEW SETTERS
  const openSlotSelect = () => {
    setGame({ ...game, viewing: "worlds", subView: "select-slot" });
  };
  const openLevelSelect = () => {
    setGame({ ...game, viewing: "worlds", subView: null });
  };

  const playLevel = ({ worldToPlay, levelToPlay }) => {
    setGame({
      ...game,
      viewing: "maze",
      subView: null,
      world: worldToPlay,
      level: levelToPlay,
    });
  };
  const replayLevel = () => {
    setGame({
      ...game,
      viewing: "replay",
      subView: null,
      startTime: 0,
      switch: false,
      finishTime: null,
      ended: false,
      ...intialiMovementHandlers,
    });
  };
  const replayCustomLevel = () => {
    setGame({
      ...game,
      viewing: "replay-custom",
      subView: null,
      startTime: 0,
      switch: false,
      finishTime: null,
      ended: false,
      ...intialiMovementHandlers,
    });
  };
  const playNextLevel = () => {
    const newLevel = game.level === 8 ? 0 : game.level + 1;
    const newWorld = newLevel === 0 ? game.world + 1 : game.world;
    setGame({
      ...game,
      world: newWorld,
      level: newLevel,
      viewing: "replay",
      subView: null,
      switch: false,
      startTime: 0,
      finishTime: null,
      ended: false,
      ...intialiMovementHandlers,
    });
  };
  const playCustom = () => {
    setGame({ ...game, viewing: "custom", subView: null });
  };
  const openEditor = () => {
    setGame({ ...game, viewing: "editor", subView: null });
  };
  const openRecords = () => {
    setGame({ ...game, viewing: "records", subView: null });
  };
  const returnToMenu = () => {
    setGame({ ...game, viewing: "menu", subView: null });
  };
  const openImporter = () => {
    setGame({ ...game, viewing: "editor", subView: "import" });
  };
  return (
    <GameContext.Provider
      value={{
        game,
        initializeGame,
        startTimer,
        updateLocations,
        initializeGameWin,
        winGame,
				winGameIfOverdue,
        openSlotSelect,
        openLevelSelect,
        playLevel,
        replayLevel,
        replayCustomLevel,
        playNextLevel,
        playCustom,
        openEditor,
        openRecords,
        returnToMenu,
        openImporter,
        upPress,
        downPress,
        leftPress,
        rightPress,
        upUnpress,
        downUnpress,
        leftUnpress,
        rightUnpress,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
