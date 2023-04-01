import { useContext } from "react";
import LevelContext from "../../contexts/LevelContext";
import Tile from "./Tile";

import borders from "../../helpers/borders";
import styled from "styled-components";
import {
  tileSizeMultiplier,
  gapSizeMultiplier,
  containerMarginSizeMultiplier,
} from "../../constants/levelEditor";

export default ({ selectedCell, tilesOnRight }) => {
  const { dimensions } = useContext(LevelContext);

  return (
    <OptionsContainer size={dimensions.size} tilesOnRight={tilesOnRight}>
      <TilesContainer size={dimensions.size} tilesOnRight={tilesOnRight}>
        {Object.keys(borders).map((key) => (
          <Tile key={key} selectedCell={selectedCell} borderKey={key} tilesOnRight={tilesOnRight}/>
        ))}
      </TilesContainer>
    </OptionsContainer>
  );
};

const OptionsContainer = styled.section`
  position: ${({ tilesOnRight }) => tilesOnRight && "absolute"};
  /* top: ${({ tilesOnRight }) => tilesOnRight && "50px"}; */
  margin-top: ${({ tilesOnRight, size }) => tilesOnRight && size / 2}px;
  right: ${({ size, tilesOnRight }) =>
    tilesOnRight && containerMarginSizeMultiplier * size}px;
  h3 {
    margin: 0.5em 0;
  }
  p {
    width: fit-content;
    margin-top: 0;
    margin-bottom: 0.5em;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const TilesContainer = styled.div`
  display: ${({ tilesOnRight }) => (tilesOnRight ? "grid" : "flex")};
  flex-wrap: wrap;
  grid-template-columns: ${({ tilesOnRight, size }) =>
    tilesOnRight && `repeat(3, ${tileSizeMultiplier * size}px)`};
  grid-gap: ${({ size, tilesOnRight }) => tilesOnRight ? gapSizeMultiplier * size : 2.5*gapSizeMultiplier * size}px;
  padding: ${({ tilesOnRight }) => !tilesOnRight && "0 1em"};
	justify-content: ${({ tilesOnRight }) => !tilesOnRight && "center"};
`;
