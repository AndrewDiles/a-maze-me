import styled from "styled-components";
export default ({ world, level }) => {
  return (
    <Container>
      <p>
        <span>World : {world}</span>
      </p>
      <p>
        <span>Level : {level}</span>
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  p {
    margin: 0.5em 1em;
  }
`;
