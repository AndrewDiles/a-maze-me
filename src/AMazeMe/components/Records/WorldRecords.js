import { useState } from "react";
import WorldDetails from "./WorldDetails";
import Button from "../reused/buttons/Button";
import styled from "styled-components";

export default ({ worldInfo, recordInfo, worldNumber }) => {
  const [expanded, setExpanded] = useState(false);

  console.log(worldInfo, recordInfo);
  let allTargets = recordInfo
    ? recordInfo.length === 9
      ? recordInfo.every(
          (record, levelIndex) =>
            record["best time"] <= worldInfo[levelIndex].target
        )
      : false
    : false;
  console.log(allTargets);

  return (
    <WorldContainer>
      <WorldTitle allTargets={allTargets}>
        world {worldNumber} : {recordInfo ? `${recordInfo.length}/9` : "0/9"}
      </WorldTitle>
			<WorldDetails worldInfo = {worldInfo} recordInfo={recordInfo} expanded = {expanded}/>
      <Button onClick={()=>setExpanded(!expanded)}>
        {expanded ? "hide details" : "see details"}
      </Button>
    </WorldContainer>
  );
};

const WorldContainer = styled.section`
	margin-bottom: 1em;
`

const WorldTitle = styled.h3`
  color: ${({ allTargets }) => allTargets && "var(--color-accent)"};
`;
