import { useContext, useEffect, useRef } from "react";
import LevelContext from "../../contexts/LevelContext";
import GameContext from "../../contexts/GameContext";
import useMovementControls from "../../hooks/useMovementControls";
import useMovementAndCollisions from "../../hooks/useMovementAndCollisions";
import styled from "styled-components";
import { DELAY } from "../../constants/general";

export default () => {
  const board = useRef(null);
  const { level, dimensions, setLevel } = useContext(LevelContext);
  const { playerColor, goalColor } = level;
  const { game, startTimer, winGame } = useContext(GameContext);
  const { size } = dimensions;
  useEffect(() => {
    board.current = document.getElementById("board");
    startTimer();
  }, []);

  useEffect(() => {
    if (game.startTime) {
      console.log("game has begun");
    }
  }, [game.startTime]);
	
	useEffect(()=>{
		if (game.finishTime) {
			setTimeout(winGame, 2000)
		}
	}, [game.finishTime])

  useMovementControls();
  // const hasEnded =
  //   game.players.every((player) => !player.alive) || game.finishTime > 0;
	
  useMovementAndCollisions({ hasStarted : game.startTime > 0, hasEnded: game.ended });

  if (!board.current) return null;

  const rects = board.current.getBoundingClientRect();
  const { x, y } = rects;
  return (
    <>
      {game.players.map((playerInfo, index) => {
        const top = y + size / 4 + size * (playerInfo.y / 100);
        const left = x + size / 4 + size * (playerInfo.x / 100);
        return playerInfo.alive ? (
          <Player
            key={index}
            color={playerColor}
            top={top}
            left={left}
            size={size}
          />
        ) : null;
      })}
      {game.goals.map((goalInfo, index) => {
        const top = y + size / 4 + size * (goalInfo.y / 100);
        const left = x + size / 4 + size * (goalInfo.x / 100);
        return (
          <Goal
            key={index}
            color={goalColor}
            top={top}
            left={left}
            size={size}
          />
        );
      })}
    </>
  );
};

const Square = styled.div.attrs((props) => ({
  style: {
    backgroundColor: props.color,
    transform: `translate(${props.left}px, ${props.top}px)`,
    height: `${props.size / 2}px`,
    width: `${props.size / 2}px`,
    transitionDuration: `${DELAY}ms`,
  },
}))`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  transition-property: transform;
  transition-timing-function: ease-in-out;
`;

const Player = styled(Square)`
  z-index: 20;
`;
const Goal = styled(Square)`
  border-radius: 50%;
`;
