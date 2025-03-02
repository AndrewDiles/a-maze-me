import { useContext, useRef, useEffect } from "react";
import LevelContext from "../../contexts/LevelContext";
import GameContext from "../../contexts/GameContext";
import TouchOverlay from "./TouchOverlay";

import borders from "../../helpers/borders";
import calcColorKey from "../../helpers/calcColorKey";
import useTouchDevice from "../../hooks/useIsTouchDevice";

import styled from "styled-components";

export default () => {
  const { level, dimensions, draw, setDraw } = useContext(LevelContext);
	const { game } = useContext(GameContext);
	const isTouchDevice = useTouchDevice();
  const canvas = useRef(null);

  useEffect(() => {
    setDraw(Date.now());
  }, []);

  useEffect(() => {
    if (draw) {
      level.layout.forEach((layoutRow, rowNumber) => {
        for (let colNumber = 0; colNumber < layoutRow.length; colNumber++) {
          borders[layoutRow[colNumber]] && borders[layoutRow[colNumber]]({
            c: canvas.current,
            x: dimensions.size * colNumber,
            y: dimensions.size * rowNumber,
            size: dimensions.size,
            color: level[calcColorKey(layoutRow[colNumber])],
						borderColor: level.borderColor,
						switchOn: game.switch,
            floor: level.floorColor,
          });
        }
      });
      setDraw(false);
    }
  }, [draw]);

  return (
    <Container>
			{!game.finishTime && (isTouchDevice === true || isTouchDevice > 0) && <TouchOverlay/>}
      <Canvas
        id="board"
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
`;

const Canvas = styled.canvas`
  background-color: ${({ color }) => color};
`;
