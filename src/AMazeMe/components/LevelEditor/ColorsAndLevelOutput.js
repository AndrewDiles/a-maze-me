import { useContext } from "react";
import LevelContext from "../../contexts/LevelContext";

import styled from "styled-components";
import SetColors from "./SetColors";
import Warnings from "./Warnings";

export default () => {
  const { level, dimensions } = useContext(LevelContext);
	const levelKeys  = Object.keys(level)
  return (
    <LevelOutputAndColorsContainer top = {dimensions.y + 2*dimensions.size} left = {.5*dimensions.size}>
			<SetColors/>
			<Warnings/>
			<h3>level output:</h3>
			{levelKeys.map((key, index) => {
				if (typeof level[key] ==="string") return <p key={key}>{key}: "{level[key]}"{index +1 !== levelKeys.length && ","}</p>
				if (typeof level[key] ==="number") return <p key={key}>{key}: {level[key]}{index +1 !== levelKeys.length && ","}</p>
				return <span key={key}>{key}:[
					{level[key].map((layoutString, rowNum) => <p key = {`${layoutString}${rowNum}`}>"{layoutString}",</p>)}
				]</span>
			})}

		</LevelOutputAndColorsContainer>
  );
};

const LevelOutputAndColorsContainer = styled.section`
	margin-top: ${({top})=>top}px;
	margin-left: ${({left})=>left}px;
`