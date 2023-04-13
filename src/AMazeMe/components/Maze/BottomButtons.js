import styled from "styled-components";
import ReplayLevelButton from "../reused/buttons/ReplayLevelButton";
import ReturnToLevelSelect from "../reused/buttons/ReturnToLevelSelect";
export default () => (
  <ButtonsContainer>
		<ReplayLevelButton altText = "restart"/>
    <ReturnToLevelSelect />
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