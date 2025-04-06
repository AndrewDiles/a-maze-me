import { useState, useContext } from "react";
import RecordsContext from "../../contexts/RecordsContext";
import useWASDSelectLevel from "../../hooks/useWASDSelectLevel";
import NameAndRecordDisplay from "./NameAndRecordDisplay";
import SelectionIndicator from "./SelectionIndicator";
import WorldTile from "./WorldTile";

import CenteredColumn from "../reused/CenteredColumn";
import Header from "../reused/Header";
import styled from "styled-components";
import PlayButton from "../reused/buttons/PlayButton";
import ReturnToSlotSelect from "../reused/buttons/ReturnToSlotSelect";
import ReturnToMenu from "../reused/buttons/ReturnToMenu";
import findRecordsAndUnlocked from "../../helpers/findRecordsAndUnlocked";
import worlds from "../../worlds";
import { MAX_WORLD_INDEX } from "../../constants/general";

const worldArray = [];
while (worldArray.length <= MAX_WORLD_INDEX) {
	worldArray.push(worldArray.length)
}

export default () => {
  const { selectedRecords } = useContext(RecordsContext);
	const [selection, setSelection] = useWASDSelectLevel(selectedRecords);
	const {records, unlocked} = findRecordsAndUnlocked({selectedRecords, selection});
	const name = worlds[selection.worldIndex][selection.levelIndex].name;
	const target = worlds[selection.worldIndex][selection.levelIndex].target;
  return (
    <CenteredColumn>
      <Header>select level</Header>
			<NameAndRecordDisplay records= {records} unlocked={unlocked} name={name} target={target}/>
			<PlayButton worldToPlay = {selection.worldIndex} levelToPlay={selection.levelIndex} disabled={!unlocked}/>
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
			<ReturnToSlotSelect/>
			<ReturnToMenu lowerCased={true}/>
    </CenteredColumn>
  );
};

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
	/* @media screen and (min-width: 1000px) {
		margin-top: 180px;
		min-height: 310px;
	} */
	/* @media screen and (min-width: 1200px) {
		margin-top: 220px;
		min-height: 370px;
	} */
`;
