import { useContext, useState } from "react";
import useWASDSelectedCell from "../../hooks/useWASDSelectedCell";
import LevelContext from "../../contexts/LevelContext";
import Header from "../reused/Header";
import TopButtons from "./TopButtons";
import TilesMovementAndReDraw from "./TilesMovementAndReDraw";
import TileOptions from "./TileOptions";
import SetLevelOptions from "./SetLevelOptions";
import CellButtons from "./CellButtons";
import ColorsAndLevelOutput from "./ColorsAndLevelOutput";
import useDrawEditor from "../../hooks/useDrawEditor";
import styled from "styled-components";

export default () => {
  const { level, dimensions} = useContext(LevelContext);
  const [selectedCell, setSelectedCell] = useWASDSelectedCell(
    level.rows,
    level.cols
  );
  const [tilesOnRight, setTilesOnRight] = useState(true);

	const canvas = useDrawEditor();

  return (
    <>
      <Header>editor</Header>
      <TopButtons />
      <SetLevelOptions tilesOnRight={tilesOnRight} />
      <TilesMovementAndReDraw
        tilesOnRight={tilesOnRight}
        setTilesOnRight={setTilesOnRight}
      />
      <TileOptions
        selectedCell={selectedCell}
        setSelectedCell={setSelectedCell}
        tilesOnRight={tilesOnRight}
      />
      <CanvasContainer size={dimensions.size} tilesOnRight={tilesOnRight}>
        <CellButtons
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
        />
        <Canvas
          ref={canvas}
          width={dimensions.x}
          height={dimensions.y}
          color={level.floorColor}
        />
      </CanvasContainer>
      <ColorsAndLevelOutput />
    </>
  );
};

const CanvasContainer = styled.section`
  position: absolute;
  margin-left: ${({ size, tilesOnRight }) =>
    tilesOnRight ? size / 2 : size}px;
  margin-top: ${({ size }) => size / 2}px;
`;
const Canvas = styled.canvas`
  background-color: ${({ color }) => color};
`;
