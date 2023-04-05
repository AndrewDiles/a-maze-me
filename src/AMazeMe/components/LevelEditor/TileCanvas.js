import React, { useContext, useRef, useEffect } from "react";
import LevelContext from "../../contexts/LevelContext";
import borders from "../../helpers/borders";
import {tileSizeMultiplier, sizeWhenNotOnRight} from "../../constants/levelEditor";
import calcColorKey from "../../helpers/calcColorKey"
import styled from "styled-components";

const MemoedCanvas = React.memo(({ borderKey, tilesOnRight }) => {
  const { dimensions, level, draw } = useContext(LevelContext);
  const { size } = dimensions;
  const canvas = useRef(null);

  useEffect(() => {
    // console.log("drawing");
    borders[borderKey]({
      c: canvas.current,
      x: 0,
      y: 0,
      size: tilesOnRight ? tileSizeMultiplier * size : parseInt(sizeWhenNotOnRight),
			color: level[calcColorKey(borderKey)],
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














// import { useContext, useRef, useEffect } from "react";
// import LevelContext from "../../contexts/LevelContext";
// import borders from "../../helpers/borders";
// import {tileSizeMultiplier} from "../../constants/levelEditor";
// export default ({ borderKey }) => {
// console.log(borderKey);
//   const { dimensions } = useContext(LevelContext);
//   const { size } = dimensions;
//   const canvas = useRef(null);
//   // console.log(size);

//   useEffect(() => {
//     console.log("drawing");
//     borders[borderKey]({
//       c: canvas.current,
//       x: 0,
//       y: 0,
//       size: tileSizeMultiplier * size,
//     });
//   });
//   // console.log(level.layout);
//   return (
//     <canvas
//       ref={canvas}
//       width={tileSizeMultiplier * size}
//       height={tileSizeMultiplier * size}
//     ></canvas>
//   );
// };
