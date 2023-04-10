import { useContext } from "react";
import LevelContext from "../../contexts/LevelContext";
import SetColor from "./SetColor";
import styled from "styled-components";

export default () => {
  const { level, dimensions } = useContext(LevelContext);
	const {size } = dimensions;

  const colorKeys = Object.keys(level).filter((key) => key.includes("olor"));
	console.log(Object.keys(level), colorKeys);
  return (
    <Container rightWall={size * 1.5}>
      {colorKeys.map((colorKey) => (
        <SetColor key={colorKey} keyToChange={colorKey} />
      ))}
    </Container>
  );
};

const Container = styled.section`
	grid-gap: 1em;
	display: grid;
	grid-template-columns: fit-content(50%) fit-content(50%) fit-content(50%);
	width: calc(100vw - ${({rightWall})=>rightWall}px);
`