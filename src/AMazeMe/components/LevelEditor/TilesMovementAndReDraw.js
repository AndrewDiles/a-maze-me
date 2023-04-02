import { useContext } from "react";
import LevelContext from "../../contexts/LevelContext";
import styled from "styled-components";
import Button from "../reused/buttons/Button";

export default ({ tilesOnRight, setTilesOnRight }) => {
  const { setDraw } = useContext(LevelContext);
  return (
    <Container tilesOnRight={tilesOnRight}>
      <Button
        onClick={() => {
          setTilesOnRight(!tilesOnRight);
        }}
      >
        {tilesOnRight ? "move tiles above" : "move tiles aside"}
      </Button>
      <Button
        onClick={() => {
          setDraw(Date.now());
        }}
      >
        re-draw
      </Button>
    </Container>
  );
};

const Container = styled.section`
  margin-bottom: ${({ tilesOnRight }) => tilesOnRight && "0"};
  & button {
    margin: 0.5em 1em;
  }
`;
