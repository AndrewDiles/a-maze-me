import { useContext, useRef, useState, useEffect } from "react";
import useWASDSelectedCell from "../../hooks/useWASDSelectedCell";
import LevelContext from "../../contexts/LevelContext";
import GameContext from "../../contexts/GameContext";
import Header from "../reused/Header";
import TopButtons from "./TopButtons";
import TilesMovementAndReDraw from "./TilesMovementAndReDraw";
import TileOptions from "./TileOptions";
import SetLevelOptions from "./SetLevelOptions";
import CellButtons from "./CellButtons";
import ColorsAndLevelOutput from "./ColorsAndLevelOutput";

import borders from "../../helpers/borders";
import calcColorKey from "../../helpers/calcColorKey";
import styled from "styled-components";

export default () => {
  const { level, dimensions, draw, setDraw } = useContext(LevelContext);
  const { game } = useContext(GameContext);
  const canvas = useRef(null);
  const [selectedCell, setSelectedCell] = useWASDSelectedCell(
    level.rows,
    level.cols
  );
  const [tilesOnRight, setTilesOnRight] = useState(true);

  useEffect(() => {
    if (draw) {
      canvas.current
        .getContext("2d")
        .clearRect(0, 0, dimensions.x, dimensions.y);
      level.layout.forEach((layoutRow, rowNumber) => {
        for (let colNumber = 0; colNumber < layoutRow.length; colNumber++) {
          borders[layoutRow[colNumber]]({
            c: canvas.current,
            x: dimensions.size * colNumber,
            y: dimensions.size * rowNumber,
            size: dimensions.size,
            color: level[calcColorKey(layoutRow[colNumber])],
            floor: level.floorColor,
            building: true,
          });
        }
      });
      setDraw(false);
    }
  }, [draw]);

  useEffect(() => {
    setDraw(false);
    const timer = setTimeout(() => {
      setDraw(Date.now());
    }, 250);
    return () => {
      clearTimeout(timer);
    };
  }, [game.subview]);

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
