import styled from "styled-components";
export default ({ children }) => <Container>{children}</Container>;

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
