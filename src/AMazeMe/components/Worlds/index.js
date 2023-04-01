import { useState, useContext } from "react";
import RecordsContext from "../../contexts/RecordsContext";
import SelectionIndicator from "./SelectionIndicator";
import WorldTile from "./WorldTile";

import Header from "../reused/Header";
import styled from "styled-components";
import ReturnToMenu from "../reused/buttons/ReturnToMenu";

const maxWorldIndex = 1;
const worldArray = [];
while (worldArray.length <= maxWorldIndex) {
	worldArray.push(worldArray.length)
}

export default () => {
  const { selectedRecords } = useContext(RecordsContext);
  const [selection, setSelection] = useState(() => {
    const worldIndex = Math.min(selectedRecords.length - 1, maxWorldIndex);
    const levelIndex = selectedRecords[worldIndex].length;
    return { worldIndex, levelIndex };
  });

  return (
    <Container>
      <Header>select level</Header>
			
			<SelectionIndicator world ={selection.worldIndex + 1} level = {selection.levelIndex +1}/>
      <WorldsContainer>
        {worldArray.map((worldNumber) => (
          <WorldTile
            key={worldNumber}
            worldNumber={worldNumber}
            selection={selection}
            setSelection={setSelection}
          />
        ))}
      </WorldsContainer>
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
  button {
    width: fit-content;
    align-self: center;
    margin-bottom: 1em;
  }
`;

const WorldsContainer = styled.div`
  position: relative;
  margin: 50px auto 1em;
	min-height: 120px;
	@media screen and (min-width: 450px) {
		margin-top: 80px;
		min-height: 160px;
	}
	@media screen and (min-width: 750px) {
		margin-top: 120px;
		min-height: 250px;
	}
	@media screen and (min-width: 1000px) {
		margin-top: 180px;
		min-height: 310px;
	}
	@media screen and (min-width: 1200px) {
		margin-top: 220px;
		min-height: 370px;
	}
`;
