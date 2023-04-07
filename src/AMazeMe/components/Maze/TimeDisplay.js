import formatTime from "../../helpers/formatTime";
import styled from "styled-components";

export default ({ startTime, finishTime, target }) => {
  const finish = finishTime > 0 ? finishTime : Date.now();
  const time = formatTime(finish - startTime);
  const metTarget = finishTime && time < target;

  return (
    <Time metTarget={metTarget}>
      <span>{time}</span>s
    </Time>
  );
};

const Time = styled.span`
  position: absolute;
  left: 0.5em;
  bottom: 0;
  & span {
    color: ${({ metTarget }) => metTarget && "var(--color-accent)"};
  }
`;
