import { useContext } from "react";
import styled from "styled-components";
import LevelContext from "../../contexts/LevelContext";
import ReturnToMenu from "../reused/buttons/ReturnToMenu";
import SaveCustomLevelToLocalStorage from "../reused/buttons/SaveCustomLevelToLocalStorage";
import ExportCustomLevel from "./ExportCustomLevel";
import ImportCustomLevel from "./ImportCustomLevel";

export default () => {
	const {level} = useContext(LevelContext);
  return (
    <ButtonsContainer>
      <ReturnToMenu />
      <SaveCustomLevelToLocalStorage customLevel={level}/>
      <ExportCustomLevel />
      <ImportCustomLevel />
    </ButtonsContainer>
  );
};

const ButtonsContainer = styled.section`
  position: relative;
  margin-top: 70px;
  & button {
    margin: 0.5em 1em;
  }
`;
