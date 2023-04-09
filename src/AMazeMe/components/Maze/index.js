import { useContext, useEffect, useState } from "react";
import LevelContext from "../../contexts/LevelContext";
import GameContext from "../../contexts/GameContext";
import EndGameDisplay from "./EndGameDisplay";
import Header from "../reused/Header";
import TimeDisplay from "./TimeDisplay";
import ManageGameStateAndMovement from "./ManageGameStateAndMovement";
import Canvas from "./Canvas";
import ReturnToLevelSelectContainer from "./ReturnToLevelSelectContainer";
import styled from "styled-components";

import worlds from "../../worlds";
import {
  createInitialPlayerArrays,
  createInitialEnemyArrays,
  createInitialGoalArrays,
} from "../../helpers/createInitialArrays";
import XSqueezedHeader from "../reused/XSqueezedHeader";

export default () => {
  const [mounted, setMounted] = useState(null);
  const { game, initializeGame } = useContext(GameContext);
  const { level, setLevel } = useContext(LevelContext);

  useEffect(() => {
    let worldInfo = worlds[game.world];
    worldInfo = worldInfo && worldInfo[game.level];
    // console.log(worldInfo);
    if (!worldInfo) return setMounted(false);
    setLevel(JSON.parse(JSON.stringify(worldInfo)));

    // make enemy extractor
    const initialPlayers = createInitialPlayerArrays(worldInfo);
    const initialEnemies = createInitialEnemyArrays(worldInfo);
    const initialGoals = createInitialGoalArrays(worldInfo);
    initializeGame({
      newPlayers: initialPlayers,
      newEnemies: initialEnemies,
      newGoals: initialGoals,
    });
    setMounted(true);
  }, []);

  return mounted === null ? (
    <Header>loading</Header>
  ) : mounted === false ? (
    <Header>error</Header>
  ) : game.ended ? (
    <EndGameDisplay />
  ) : (
    <>
      <XSqueezedHeader margin = "75px auto 0">{level.name}</XSqueezedHeader>
			<TimeDisplay startTime = {game.startTime} finishTime = {game.finishTime} target = {level.target}/>
      <GameContainer>
        <ManageGameStateAndMovement />
        <Canvas />
      </GameContainer>
      {!game.finishTime && <ReturnToLevelSelectContainer />}
    </>
  );
};
const GameContainer = styled.section`
  position: relative;
`;
