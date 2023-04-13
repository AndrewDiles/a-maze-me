import { useEffect, useContext } from "react";
import GameContext from "../../contexts/GameContext";

// This exists purely as a cheap way to restart a game without having to re-code the state logic.
// As this component will only be mounted if Maze was unmounted.
// playLevel will then trigger Maze to remount, and re-execute the game initialization.

export default () => {
  const { playLevel, game: { world, level } } = useContext(GameContext);
  useEffect(() => {
    playLevel({ worldToPlay: world, levelToPlay: level });
  }, []);
  return <></>;
};
