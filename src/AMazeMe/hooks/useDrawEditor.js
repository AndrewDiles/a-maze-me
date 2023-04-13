import { useContext, useRef, useEffect } from "react";
import LevelContext from "../contexts/LevelContext";
import GameContext from "../contexts/GameContext";
import borders from "../helpers/borders";
import calcColorKey from "../helpers/calcColorKey";

export default () => {
  const { level, dimensions, draw, setDraw } = useContext(LevelContext);
  const { game } = useContext(GameContext);
  const canvas = useRef(null);

  useEffect(() => {
    if (draw) {
      canvas.current
        .getContext("2d")
        .clearRect(0, 0, dimensions.x, dimensions.y);
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
            building: true,
          });
        }
      });
      setDraw(false);
    }
  }, [draw]);

  return canvas
};
