import styled from "styled-components";
import ReturnToMenu from "../reused/buttons/ReturnToMenu";
import ReturnToEditor from "./ReturnToEditor";
import SaveCustomLevelToLocalStorage from "../reused/buttons/SaveCustomLevelToLocalStorage";

export default ({ valid, customLevel }) => {
  return (
    <ButtonsContainer>
      <ReturnToMenu />
      <ReturnToEditor />
      {valid && <SaveCustomLevelToLocalStorage customLevel={customLevel} />}
    </ButtonsContainer>
  );
};

const ButtonsContainer = styled.section`
  position: relative;
  margin-top: 70px;
  & button {
    margin: 0.5em 1em;
  }
`;
