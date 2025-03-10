import { useState, useContext, useEffect, useRef } from "react";
import LevelContext from "../../contexts/LevelContext";
import GameContext from "../../contexts/GameContext";
import useMovementControls from "../../hooks/useMovementControls";
import useMovementAndCollisions from "../../hooks/useMovementAndCollisions";
import styled, { keyframes } from "styled-components";
import { GAME_FREQ, WIN_DELAY } from "../../constants/general";
import Square from "./Square";
import Player from "./Player";

export default () => {
  const board = useRef(null);
  const { level, dimensions } = useContext(LevelContext);
  const { playerColor, goalColor } = level;
  const { game, startTimer, winGame, winGameIfOverdue } = useContext(GameContext);
  const { size } = dimensions;
  const [finishHandled, setFinishHandled] = useState(false);

  useEffect(() => {
    board.current = document.getElementById("board");
    startTimer();
  }, []);

  // useEffect(() => {
  //   if (game.startTime) {
  //     console.log("game has begun");
  //   }
  // }, [game.startTime]);

	useEffect(()=>{
		const timer = setInterval(winGameIfOverdue, WIN_DELAY);
		return () => {
			clearInterval(timer)
		}
	}, [])

  useEffect(() => {
    if (game.finishTime && !finishHandled) {
      setFinishHandled(true);
      setTimeout(winGame, WIN_DELAY);
    }
  }, [game.finishTime]);

  useMovementControls();
  useMovementAndCollisions({
    hasStarted: game.startTime > 0,
    hasEnded: game.ended,
  });

  if (!board.current) return null;

  const x = board.current.getBoundingClientRect().x;
  return (
    <>
      {game.players.map((playerInfo, index) => {
        const left = x + size / 4 + size * (playerInfo.x / 100);
        const top = size / 4 + size * (playerInfo.y / 100);
        return playerInfo.alive ? (
          <Player
            key={index}
            color={playerColor}
            top={top}
            left={left}
            size={size}
            animation={playerInfo.animation}
            WIN_DELAY={WIN_DELAY}
						playerNumber={index}
          />
        ) : null;
      })}
      {game.goals.map((goalInfo, index) => {
        const top = size / 4 + size * (goalInfo.y / 100);
        const left = x + size / 4 + size * (goalInfo.x / 100);
        return (
          <Goal
            key={index}
            color={goalColor}
            top={top}
            left={left}
            size={size}
            animation={goalInfo.animation}
            WIN_DELAY={WIN_DELAY}
          />
        );
      })}
      {game.switches.map((switchInfo, index) => {
        const top = size * (switchInfo.y / 100);
        const left = x + size * (switchInfo.x / 100);
        return (
          <Switch
            key={index}
            color={level.floorColor}
            top={top}
            left={left}
            size={size}
          >
            <BarsContainer color={level.floorColor} active={game.switch}>
              <SwitchBar
                color={
                  game.switch
                    ? level["switch onColor"]
                    : level["switch offColor"]
                }
              />
              <SwitchBar
                color={
                  game.switch
                    ? level["switch onColor"]
                    : level["switch offColor"]
                }
              />
            </BarsContainer>
          </Switch>
        );
      })}
    </>
  );
};

// const popping = keyframes`
//  0% { filter: blur(0px) }
//  25% { filter: blur(10px) }
//  100% { filter: blur(100px)}
// `;
// const win = keyframes`
//  0% { 
// 	outline: 0em solid var(--color-a);
// 	filter: hue-rotate(0deg)
// 	border-radius: 0 0 0 0;
// }
//  25% { outline: .25em solid var(--color-a);
// 	border-radius: 50% 0 0 0;
//  }
//  50% {
// 	border-radius: 50% 50% 0 0;
//  }
//  75% { outline: .5em solid var(--color-h);
// 	border-radius: 50% 50% 50% 0;
// }
//  100% { outline: .1em solid var(--color-f);
// 	filter: hue-rotate(360deg);
// 	border-radius: 50%;
//  }
// `;

// const Square = styled.div.attrs((props) => ({
//   style: {
//     backgroundColor: props.color,
//     transform: `translate(${props.left}px, ${props.top}px)`,
//     height: `${props.size / 2}px`,
//     width: `${props.size / 2}px`,
//     transitionDuration: `${GAME_FREQ}ms`,
//   },
// }))`
//   transform-origin: center;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 10;
//   transition-property: transform;
//   transition-timing-function: ease-in-out;
//   animation-duration: ${({ WIN_DELAY }) => WIN_DELAY}ms;
//   /* options are win, damage, sparkles, popping */
//   animation-name: ${({ animation }) =>
//     animation === "popping" ? popping : animation === "win" ? win : ""};
// `;

/* const Player = styled(Square)`
  z-index: 20;
`; */
const Goal = styled(Square)`
  border-radius: 50%;
`;

const Switch = styled.div.attrs((props) => ({
  style: {
		backgroundColor: props.color,
    transform: `translate(${props.left}px, ${props.top}px)`,
    height: `${props.size}px`,
    width: `${props.size}px`,
    transitionDuration: `${GAME_FREQ}ms`,
  },
}))`
  transform-origin: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  transition-property: transform;
  transition-timing-function: ease-in-out;
`;
const BarsContainer = styled.div.attrs((props) => ({
  style: {
		backgroundColor: props.color,
  },
}))`
  height: 100%;
  transform: rotate(${({ active }) => (active ? "0deg" : "90deg")});
  transition: transform ease-in-out 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SwitchBar = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${({ color }) => color};
  transition: background-color ease-in-out 0.3s;
`;
