import { useContext, useRef, useEffect, useState } from "react";
import LevelContext from "../../contexts/LevelContext";
import GameContext from "../../contexts/GameContext";

import borders from "../../helpers/borders";
import styled from "styled-components";

export default () => {
  const [mounted, hasMounted] = useState(false);
  const { game } = useContext(GameContext);
  const { level, dimensions, draw, setDraw } = useContext(LevelContext);
  const { name, rows, cols, layout, borderColor, floorColor } = level;
  const canvas = useRef(null);

  useEffect(() => {
    setDraw(Date.now());
  }, []);

  useEffect(() => {
    if (draw) {
      level.layout.forEach((layoutRow, rowNumber) => {
        for (let colNumber = 0; colNumber < layoutRow.length; colNumber++) {
          borders[layoutRow[colNumber]]({
            c: canvas.current,
            x: dimensions.size * colNumber,
            y: dimensions.size * rowNumber,
            size: dimensions.size,
          });
        }
      });
      setDraw(false);
    }
  }, [draw]);

  return (
		<Container>
    <Canvas
			id = "board"
      ref={canvas}
      width={dimensions.x}
      height={dimensions.y}
      color={level.floorColor}
    />
		</Container>
  );
};

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`

const Canvas = styled.canvas`
  background-color: ${({ color }) => color};
`;