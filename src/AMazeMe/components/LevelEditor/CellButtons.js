import styled from "styled-components";
import { useContext } from "react";
import LevelContext from "../../contexts/LevelContext";

import createNumberedArray from "../../helpers/createNumberedArray";

export default ({ selectedCell, setSelectedCell }) => {
  const { level, dimensions } = useContext(LevelContext);
  const { rows, cols } = level;
  const { size } = dimensions;
  const rowArray = createNumberedArray(rows);
  const colArray = createNumberedArray(cols);

  return rowArray.map((row) =>
    colArray.map((col) => (
      <CellButton
        id={`{"row":${row}, "col":${col}}`}
        key={`${row}${col}`}
				className = {row === selectedCell.row && col === selectedCell.col && "focused"}
				onFocus= {()=>{
					setSelectedCell({row, col})
				}}
        left={col * size}
        top={row * size}
        size={size}
      />
    ))
  );
};

const CellButton = styled.button`
  position: absolute;
	background-color: transparent;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  padding: 0;
  margin: 0;
  border: none;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  outline-offset: -${({ size }) => size / 80}px;
	outline: ${({ size }) => size / 80}px grey solid;
  &:hover {
		outline-offset: -${({ size }) => size / 8}px;
    outline: ${({ size }) => size / 8}px grey solid;
    cursor: pointer;
  }
  &:focus,
  &.focused {
		outline-offset: -${({ size }) => size / 8}px;
    outline: ${({ size }) => size / 8}px lime solid;
  }
`;
