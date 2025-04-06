import { useContext } from "react";
import GameContext from "../../../contexts/GameContext";
import styled from "styled-components";
import ReturnToLevelSelect from "../../reused/buttons/ReturnToLevelSelect";
import ReplayLevelButton from "../../reused/buttons/ReplayLevelButton";
import Button from "../../reused/buttons/Button";
import useKeyBoardToNavigateButtonsAndFocus from "../../../hooks/useKeyBoardToNavigateButtonsAndFocus";
import { MAX_WORLD_INDEX } from "../../../constants/general";

const idToFocus = "play-next-level-button";
const buttonsIdArray = ["back-to-level-select-button", "replay-button", idToFocus];

export default () => {
  const { game, playNextLevel } = useContext(GameContext);
  const { world, level } = game;
  const nextLevelExists = world < MAX_WORLD_INDEX || level < 8;

	useKeyBoardToNavigateButtonsAndFocus({buttonsIdArray, idToFocus})

  return (
    <ButtonsContainer>
      <ReturnToLevelSelect />
			<ReplayLevelButton/>
      {nextLevelExists && (
        <Button id = {buttonsIdArray[2]} onClick={playNextLevel}>play next level</Button>
      )}
    </ButtonsContainer>
  );
};

const ButtonsContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1100px;
	margin: 70px auto 1.5em;
  & button {
    margin: 0.5em 1em;
  }
`;
