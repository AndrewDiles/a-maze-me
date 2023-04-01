import { useContext } from "react";
import styled from "styled-components";
import RecordsContext from "../../contexts/RecordsContext";
import Slot from "./Slot";

export default () => {
  const { records1, records2, records3 } = useContext(RecordsContext);
  const records = [records1, records2, records3];
  return (
    <Container>
      {records.map((recordInfo, index) => (
        <Slot key={index} recordInfo={recordInfo} slotNumber = {index}/>
      ))}
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
  button {
    width: fit-content;
    align-self: center;
    margin-bottom: 1em;
  }
`;
