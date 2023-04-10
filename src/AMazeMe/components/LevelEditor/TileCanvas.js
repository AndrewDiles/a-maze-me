import React, { useContext, useRef, useEffect } from "react";
import LevelContext from "../../contexts/LevelContext";
import GameContext from "../../contexts/GameContext";
import borders from "../../helpers/borders";
import {tileSizeMultiplier, sizeWhenNotOnRight} from "../../constants/levelEditor";
import calcColorKey from "../../helpers/calcColorKey"
import styled from "styled-components";

const MemoedCanvas = React.memo(({ borderKey, tilesOnRight }) => {
	const { game } = useContext(GameContext)
  const { dimensions, level, draw } = useContext(LevelContext);
  const { size } = dimensions;
  const canvas = useRef(null);

  useEffect(() => {
    borders[borderKey]({
      c: canvas.current,
      x: 0,
      y: 0,
      size: tilesOnRight ? tileSizeMultiplier * size : parseInt(sizeWhenNotOnRight),
			color: level[calcColorKey(borderKey)],
			borderColor: level.borderColor,
			switchOn: game.switch,
			floor: level.floorColor,
			building: true,
    });
  },[tilesOnRight, draw]);

  return (
    <Canvas
      ref={canvas}
      width={tilesOnRight ? tileSizeMultiplier * size : sizeWhenNotOnRight}
      height={tilesOnRight ? tileSizeMultiplier * size : sizeWhenNotOnRight}
			color = {level.floorColor}
    />
  );
});

export default MemoedCanvas

const Canvas = styled.canvas`
	background-color: ${({color})=>color};
`