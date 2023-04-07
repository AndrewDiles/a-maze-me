import styled from "styled-components";
import ReturnToLevelSelect from "../reused/buttons/ReturnToLevelSelect";
export default () => (
  <Container>
    <ReturnToLevelSelect />
  </Container>
);

const Container = styled.div`
  margin: 1em;
  display: flex;
  justify-content: center;
`;
