import { useContext } from "react";
import GameContext from "../contexts/GameContext";
import SlotSelection from "./SlotSelection";
import Worlds from "./Worlds";
import Menu from "./Menu";
import Maze from "./Maze";
import CustomMaze from "./CustomMaze";
import Replay from "./Replay";
import ReplayCustom from "./ReplayCustom";
import ImportCustom from "./ImportCustom";
import LevelEditor from "./LevelEditor";
import Records from "./Records";

export default () => {
  const { game } = useContext(GameContext);

  switch (game.viewing) {
    case "menu":
      return <Menu />;
    case "worlds": {
      if (game.subView === "select-slot") return <SlotSelection />;
      else return <Worlds />;
    }
    case "maze": {
      return <Maze />;
    }
		case "replay": {
			return <Replay/>;
		}
		case "replay-custom": {
			return <ReplayCustom/>;
		}
		case "custom":{
			return <CustomMaze />
		}
    case "editor": {
      return game.subView === "import" ? <ImportCustom /> : <LevelEditor />;
    }
    case "records":
      return <Records />;
    default:
      return (
        <h3>
          This isn't the component you're looking for. Derived from{" "}
          {game.viewing}, sub: {game.subView}
        </h3>
      );
  }
};
