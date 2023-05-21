import { useContext } from "react";
import GameContext from "../../contexts/GameContext";
import EndGameDisplay from "./EndGameDisplay";
import CustomGame from "./CustomGame";
import Header from "../reused/Header";
import useMountCustomGame from "../../hooks/useMountCustomGame";

export default () => {
  const { game: {ended} } = useContext(GameContext);
	const mounted = useMountCustomGame();

  return mounted === null ? (
    <Header>loading</Header>
  ) : mounted === false ? (
    <Header>error</Header>
  ) : ended ? (
    <EndGameDisplay />
  ) : (
		<CustomGame/>
  );
};
