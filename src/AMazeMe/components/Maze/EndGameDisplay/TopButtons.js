import { useContext } from "react";
import GameContext from "../../../contexts/GameContext";
import styled from "styled-components";
import ReturnToLevelSelect from "../../reused/buttons/ReturnToLevelSelect";
import Button from "../../reused/buttons/Button";
import { MAX_WORLD_INDEX } from "../../../constants/general";

export default () => {
  const { game, replayLevel, playNextLevel } = useContext(GameContext);
  const { world, level } = game;
	const nextLevelExists = world < MAX_WORLD_INDEX || level < 8
	
  return (
    <ButtonsContainer>
      <ReturnToLevelSelect />
			<Button onClick={replayLevel}>replay level</Button>
			{nextLevelExists && <Button onClick={playNextLevel}>play next level</Button>}
    </ButtonsContainer>
  );
};

const ButtonsContainer = styled.section`
  position: relative;
  margin-top: 70px;
	margin-bottom: 1.5em;
  & button {
    margin: 0.5em 1em;
  }
`;
