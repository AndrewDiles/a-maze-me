import { useContext } from "react";
import LevelContext from "../../../contexts/LevelContext";
import GameContext from "../../../contexts/GameContext";
import TopButtons from "./TopButtons";
import TimeDisplay from "./TimeDisplay";
import Header from "../../reused/Header";
import formatTime from "../../../helpers/formatTime";

export default () => {
  const {
    level: { target },
  } = useContext(LevelContext);
	const {game} = useContext(GameContext)
	const thisTime = formatTime(game.finishTime - game.startTime);

  return (
    <>
      <Header>you win!</Header>
      <TopButtons />
        <TimeDisplay
          thisTime={thisTime}
          targetTime={target}
        />
    </>
  );
};













