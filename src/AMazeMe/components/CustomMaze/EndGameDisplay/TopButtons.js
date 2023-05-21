import styled from "styled-components";
import ReturnToMenu from "../../reused/buttons/ReturnToMenu";
import ReplayCustomLevelButton from "../../reused/buttons/ReplayCustomLevelButton";
import useKeyBoardToNavigateButtonsAndFocus from "../../../hooks/useKeyBoardToNavigateButtonsAndFocus";

const idToFocus = "replay-button";
const buttonsIdArray = ["back-to-menu-button", idToFocus];

export default () => {
  useKeyBoardToNavigateButtonsAndFocus({ buttonsIdArray, idToFocus });

  return (
    <ButtonsContainer>
      <ReturnToMenu />
      <ReplayCustomLevelButton />
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
