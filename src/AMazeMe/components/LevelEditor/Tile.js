import { useContext } from "react";
import LevelContext from "../../contexts/LevelContext";
import styled from "styled-components";
import TileCanvas from "./TileCanvas";
import { tileSizeMultiplier, sizeWhenNotOnRight } from "../../constants/levelEditor";

export default ({ selectedCell, borderKey, tilesOnRight }) => {
  const { level, setLevel, dimensions, setDraw } = useContext(LevelContext);
  const { size } = dimensions;
  return (
    <Tile size={tilesOnRight ? tileSizeMultiplier * size : parseInt(sizeWhenNotOnRight)} onClick = {()=>{
        const replacementLayout = [];
        for (let row = 0; row < level.rows; row++) {
          if (selectedCell.row === row) {
            let newRow = "";
            for (let col = 0; col < level.cols; col++) {
              if (selectedCell.col === col) {
                newRow += borderKey;
              } else {
                newRow += level.layout[row][col];
              }
            }
            replacementLayout.push(newRow);
          } else {
            replacementLayout.push(level.layout[row]);
          }
        }
        setLevel({ ...level, layout: replacementLayout });
        setDraw(Date.now());
      }}
    >
      <TileCanvas borderKey={borderKey} tilesOnRight={tilesOnRight}/>
    </Tile>
  );
};

const Tile = styled.button`
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  outline: ${({ size }) => 0.1 * size}px grey solid;
  &:hover {
    outline-offset: -${({ size }) => 0.05 * size}px;
    outline: ${({ size }) => 0.15 * size}px grey solid;
    cursor: pointer;
  }
  &:focus {
    /* outline-offset: -${({ size }) => 0.1 * size}px; */
    outline: ${({ size }) => 0.1 * size}px lime solid;
  }
  canvas {
    fill: black;
  }
`;
