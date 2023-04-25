import { useContext, useEffect } from "react";
import GameContext from "../contexts/GameContext";

const useWASDSelectedCell = () => {
  const {
    upPress,
    downPress,
    leftPress,
    rightPress,
    upUnpress,
    downUnpress,
    leftUnpress,
    rightUnpress,
  } = useContext(GameContext);

  useEffect(() => {
    const handleKeyDown = ({ key }) => {
			key = key.toLowerCase();
      // console.log(key);
      switch (key) {
        case "w":
        case "ArrowUp":
          return upPress();
        case "a":
        case "ArrowLeft":
          return leftPress();
        case "s":
        case "ArrowDown":
          return downPress();
        case "d":
        case "ArrowRight":
          return rightPress();
      }
    };
		const handleKeyUp = ({ key }) => {
			key = key.toLowerCase();
      switch (key) {
        case "w":
        case "ArrowUp":
          return upUnpress();
        case "a":
        case "ArrowLeft":
          return leftUnpress();
        case "s":
        case "ArrowDown":
          return downUnpress();
        case "d":
        case "ArrowRight":
          return rightUnpress();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
    };
  });

  return null;
};

export default useWASDSelectedCell;
