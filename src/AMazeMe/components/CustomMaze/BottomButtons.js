import styled from "styled-components";
import ReplayCustomLevelButton from "../reused/buttons/ReplayCustomLevelButton";
import ReturnToMenu from "../reused/buttons/ReturnToMenu";
export default () => (
  <ButtonsContainer>
		<ReplayCustomLevelButton altText = "restart"/>
    <ReturnToMenu />
  </ButtonsContainer>
);

const ButtonsContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
	margin: 1em auto 0;
  & button {
    margin: .5em 1em;
  }
`;