import { useContext } from "react";
import GameContext from "../../contexts/GameContext";
import styled from "styled-components";
import Header from "../reused/Header";
import Button from "../reused/buttons/Button";

// import Maze from "./Maze";
// import LevelEditor from "./LevelEditor";
// import worlds from "../worlds";

export default () => {
  const { openEditor, openSlotSelect, openRecords } = useContext(GameContext);

  return (
    <Container>
      <Header>a-maze-me</Header>
			<Button onClick={openSlotSelect}>go play</Button>
			<Button onClick={openEditor}>level editor</Button>
			<Button onClick={openRecords}>view records</Button>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
	flex-direction: column;
	* {
		text-align: center;
	}
	& > button {
		width:fit-content;
		align-self: center;
		margin-bottom: 1em;
	}
`;
