import { useEffect, useContext } from "react";
import GameContext from "../../contexts/GameContext";

export default () => {
  const { playLevel, game: { world, level } } = useContext(GameContext);
  useEffect(() => {
    playLevel({ worldToPlay: world, levelToPlay: level });
  }, []);
  return <></>;
};
