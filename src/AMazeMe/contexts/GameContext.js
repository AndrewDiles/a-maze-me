import { createContext, useState } from "react";

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
  finishTime: null,
  ended: false,
  players: [],
  enemies: [],
  goals: [],
  ...intialiMovementHandlers,
};

export const GameProvider = ({ children }) => {
  const [game, setGame] = useState({ ...defaultState });
  // console.log(game);
  // IN GAME SETTERS
  const initializeGame = ({ newPlayers, newEnemies, newGoals }) => {
    setGame({
      ...game,
      players: newPlayers,
      enemies: newEnemies,
      goals: newGoals,
      startTime: 0,
      finishTime: null,
      ...intialiMovementHandlers,
    });
  };
  const startTimer = () => {
    setGame({ ...game, startTime: Date.now() });
  };
  const updateLocations = ({ newPlayers, newEnemies }) => {
    setGame({ ...game, players: newPlayers, enemies: newEnemies });
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
  //TODO: below dispatch not yet used
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
        openSlotSelect,
        openLevelSelect,
        playLevel,
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
