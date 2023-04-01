import { useContext } from "react";
import LevelContext from "../../contexts/LevelContext";
import styled from "styled-components";

export default () => {
  const { level } = useContext(LevelContext);
  const containsPlayer = level.layout.some((s) => s.includes("S"));
  const containsGoal = level.layout.some((s) => s.includes("Z"));
  return (
    <>
      {(!containsPlayer || !containsGoal) && (
        <Warning>⚠ INVALID LEVEL ⚠</Warning>
      )}
      {!containsPlayer && <Warning>Layout must include a player</Warning>}
      {!containsGoal && <Warning>Layout must include a goal</Warning>}
    </>
  );
};

const Warning = styled.h2`
  color: var(--color-h);
`;
