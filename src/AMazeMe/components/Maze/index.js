import { useContext, useRef, useEffect } from "react";
import LevelContext from "../../contexts/LevelContext";
import GameContext from "../../contexts/GameContext";

import borders from "../../helpers/borders";

export default () => {
  const { level, dimensions, draw, setDraw } = useContext(LevelContext);
  const { name, rows, cols, layout, borderColor, floorColor } = level;
  const canvas = useRef(null);

	useEffect(()=>{
		setDraw(true)
	},[])

  useEffect(() => {
    if (draw) {
      level.layout.forEach((layoutRow, rowNumber) => {
        for (let colNumber = 0; colNumber < layoutRow.length; colNumber++) {
          borders[layoutRow[colNumber]]({
            c: canvas.current,
            x: dimensions.size * colNumber,
            y: dimensions.size * rowNumber,
						size: dimensions.size
          });
        }
      });
      setDraw(false);
    }
  }, [draw]);

  return <canvas ref={canvas} width={dimensions.x} height={dimensions.y} />;
};
