import { createContext, useContext, useState, useEffect } from "react";
import useStaggerDraw from "../hooks/useStaggerDraw";
import world1, {worldColors} from "../worlds/data/world1";
import removeTargetLettersFromLayout from "../helpers/removeTargetLettersFromLayout";
import swapLettersFromLayout from "../helpers/swapLettersFromLayout";
import GameContext from "./GameContext";
const LevelContext = createContext(null);
export default LevelContext;

const defaultState = {
  name: world1[0].name,
  rows: world1[0].rows,
  cols: world1[0].cols,
  layout: world1[0].layout,
	...worldColors
};

export const LevelProvider = ({ children }) => {
  const [level, setLevel] = useState({ ...defaultState });
  const [dimensions, setDimensions] = useState({ x: 320, y: 320, size: 40 });
  const [draw, setDraw] = useState(false);
	const setStaggerDraw = useStaggerDraw(draw, setDraw);

  useEffect(() => {
    const manageDimensions = () => {
      // console.log("managing dimensions");
			const {innerHeight, innerWidth} = window;
			// allow buffer of 50px top and 1 cell, 1 cells left/right
			const heightAvailable = innerHeight - 50;
			const maxSizeBasedOnHeight = parseInt(heightAvailable / (level.rows + 2))
			const maxSizeBasedOnWidth = parseInt(innerWidth / (level.cols + 2))
			const size = Math.min(maxSizeBasedOnHeight, maxSizeBasedOnWidth);
			setDimensions({x: level.cols*size, y : level.rows*size, size});
			setStaggerDraw(true);
    };
    manageDimensions();
		
    window.addEventListener("resize", manageDimensions);
    return () => window.removeEventListener("resize", manageDimensions);
  }, [level.rows, level.cols]);

	const unlockKey1 = () => {
		const newLayout = removeTargetLettersFromLayout(level.layout, "p", "q", "r", "s", "t")
		setLevel({...level, layout: newLayout});
		setDraw(Date.now());
	}
	const unlockKey2 = () => {
		const newLayout = removeTargetLettersFromLayout(level.layout, "u", "v", "w", "x", "y")
		setLevel({...level, layout: newLayout});
		setDraw(Date.now());
	}
	const unlockKey3 = () => {
		const newLayout = removeTargetLettersFromLayout(level.layout, "U", "V", "W", "X", "Y")
		setLevel({...level, layout: newLayout});
		setDraw(Date.now());
	}
	const flipSwitch = (newValue) => {
		// off: P, on : T
		const newLayout = swapLettersFromLayout(level.layout, newValue? "P" : "T", newValue? "T" : "P");
		setLevel({...level, layout: newLayout});
		setDraw(Date.now());
	}

  return (
    <LevelContext.Provider
      value={{ level, setLevel, draw, setDraw, dimensions, unlockKey1, unlockKey2, unlockKey3, flipSwitch }}
    >
      {children}
    </LevelContext.Provider>
  );
};
