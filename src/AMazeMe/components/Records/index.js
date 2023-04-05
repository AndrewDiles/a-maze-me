import ReturnToMenu from "../reused/buttons/ReturnToMenu";
import Header from "../reused/Header";
import styled from "styled-components";

export default () => {
  return (
    <Container>
      <Header>records</Header>
      <ReturnToMenu lowerCased={true}/>
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
    width: fit-content;
    align-self: center;
    margin-bottom: 1em;
  }
`;
