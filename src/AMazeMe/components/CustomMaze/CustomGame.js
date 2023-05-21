import { useContext } from "react";
import LevelContext from "../../contexts/LevelContext";
import GameContext from "../../contexts/GameContext";
import TimeDisplay from "../Maze/TimeDisplay";
import ManageGameStateMovementAndSprites from "../Maze/ManageGameStateMovementAndSprites";
import Canvas from "../Maze/Canvas";
import styled from "styled-components";
import XSqueezedHeader from "../reused/XSqueezedHeader";
import BottomButtons from "./BottomButtons";

export default () => {
  const { game : {finishTime} } = useContext(GameContext);
  const { level: {name} } = useContext(LevelContext);

  return (
    <>
      <XSqueezedHeader margin = "10px auto">{name}</XSqueezedHeader>
			<TimeDisplay/>
      <GameContainer>
        <ManageGameStateMovementAndSprites />
        <Canvas />
      </GameContainer>
      {!finishTime && <BottomButtons />}
    </>
  );
};
const GameContainer = styled.section`
  position: relative;
`;
