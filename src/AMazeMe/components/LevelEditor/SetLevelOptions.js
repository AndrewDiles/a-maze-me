import { useContext, useEffect } from "react";
import LevelContext from "../../contexts/LevelContext";
import levels, { worldColors } from "../../worlds/data/world1";
import SetLevelName from "./SetLevelName";
import SetRowOrCol from "./SetRowOrCol";
import styled from "styled-components";

const [level1] = levels;

const defaultCustomLevelState = {
  ...level1,
  ...worldColors,
  name: "Custom Level",
};

export default ({ tilesOnRight }) => {
  const { setLevel, dimensions, setDraw } = useContext(LevelContext);
  const { size } = dimensions;

  useEffect(() => {
    const savedLevel = window.localStorage.getItem("custom-map");
    const newLevel = savedLevel
      ? JSON.parse(savedLevel)
      : JSON.parse(JSON.stringify(defaultCustomLevelState));
    setLevel(newLevel);
    setDraw(Date.now());
  }, []);

  return (
    <Container rightWall={size * 1.5} tilesOnRight={tilesOnRight}>
      <SetLevelName />
      <SetRowOrCol keyToChange="rows" />
      <SetRowOrCol keyToChange="cols" />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  grid-gap: 1em;
  width: ${(tilesOnRight, rightWall) =>
    tilesOnRight && `calc(100vw - ${rightWall}px)`};
`;
