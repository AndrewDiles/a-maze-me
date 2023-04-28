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
        case "arrowup":
          return upPress();
        case "a":
        case "arrowleft":
          return leftPress();
        case "s":
        case "arrowdown":
          return downPress();
        case "d":
        case "arrowright":
          return rightPress();
      }
    };
		const handleKeyUp = ({ key }) => {
			key = key.toLowerCase();
      switch (key) {
        case "w":
        case "arrowup":
          return upUnpress();
        case "a":
        case "arrowleft":
          return leftUnpress();
        case "s":
        case "arrowdown":
          return downUnpress();
        case "d":
        case "arrowright":
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
