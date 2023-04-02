import styled from "styled-components";

export default ({ records, unlocked }) => {
  return (
    <RecordsContainer>
      {records
        ? "record: //TODO"
        : unlocked
        ? "level incomplete"
        : "level locked"}
    </RecordsContainer>
  );
};

const RecordsContainer = styled.div`
  margin-bottom: 1em;
`;
