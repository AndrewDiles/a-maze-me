import styled from "styled-components";

export default ({ records, unlocked, name, target }) => {
  let time = records && records["best time"];
  return (
    <RecordsContainer locked={unlocked ? 0 : 1} targetMet={time < target}>
      <h3>{name}</h3>
      {records ? (
        <span>
          record: <span>{time}</span>s
        </span>
      ) : unlocked ? (
        "unbeaten"
      ) : (
        "level locked"
      )}
    </RecordsContainer>
  );
};

const RecordsContainer = styled.div`
  margin-bottom: 1em;
  & h3 {
    margin-top: 0;
    color: var(--color-a);
    text-decoration: ${({ locked }) => locked && "line-through"};
  }
  & span span {
    color: ${({ targetMet }) => targetMet && "var(--color-accent)"};
  }
`;
