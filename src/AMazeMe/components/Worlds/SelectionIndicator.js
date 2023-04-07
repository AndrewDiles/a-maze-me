import styled from "styled-components";
export default ({ world, level }) => {
  return (
    <Container>
      <p>
        <span>world : {world}</span>
      </p>
      <p>
        <span>level : {level}</span>
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
    margin: 0 1em .5em;
  }
`;
