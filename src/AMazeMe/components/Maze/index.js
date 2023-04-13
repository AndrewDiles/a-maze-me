import { useContext } from "react";
import GameContext from "../../contexts/GameContext";
import EndGameDisplay from "./EndGameDisplay";
import Game from "./Game";
import Header from "../reused/Header";
import useMountGame from "../../hooks/useMountGame";

export default () => {
  const { game: {ended} } = useContext(GameContext);
	const mounted = useMountGame();

  return mounted === null ? (
    <Header>loading</Header>
  ) : mounted === false ? (
    <Header>error</Header>
  ) : ended ? (
    <EndGameDisplay />
  ) : (
		<Game/>
  );
};
