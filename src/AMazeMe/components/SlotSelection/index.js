import ReturnToMenu from "../reused/buttons/ReturnToMenu";
import Slots from "./Slots";
import Header from "../reused/Header";
import styled from "styled-components";

export default () => {
  console.log("records", Header);
  return (
    <Container>
      <Header>select slot</Header>
			<Slots/>
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
