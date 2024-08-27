import { useContext } from "react";
import LevelContext from "../../contexts/LevelContext";
import GameContext from "../../contexts/GameContext";
import formatTime from "../../helpers/formatTime";
import styled from "styled-components";

export default () => {
  const { game } = useContext(GameContext);
  const { level: { target } } = useContext(LevelContext);
  const { startTime, finishTime } = game;
  const finish = finishTime > 0 ? finishTime : Date.now();
  const time = formatTime(finish - startTime);
  const metTarget = finishTime && time < target;

  return (
    <Time metTarget={metTarget}>
      <span>{time.toFixed(2)}</span>s
    </Time>
  );
};

const Time = styled.span`
  position: absolute;
  left: 0.5em;
  bottom: 0;
	z-index: 5;
  & span {
    color: ${({ metTarget }) => metTarget && "var(--color-accent)"};
  }
`;
