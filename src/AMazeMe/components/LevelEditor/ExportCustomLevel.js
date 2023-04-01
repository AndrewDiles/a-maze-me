import { useContext } from "react";
import LevelContext from "../../contexts/LevelContext";
import Button from "../reused/buttons/Button";

export default () => {
  const { level } = useContext(LevelContext);
  return (
    <Button
      onClick={() => {
        const a = document.createElement("a");
        document.body.appendChild(a);
				//const href = "data:text/json;charset=utf-8," + JSON.stringify(level);
				const href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(level));
        a.href = href;
        a.download = "custom-maze.json";
        a.click();
        a.remove();
      }}
    >
      EXPORT
    </Button>
  );
};
