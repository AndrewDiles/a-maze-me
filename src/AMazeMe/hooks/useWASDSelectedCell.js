import { useEffect, useState } from "react";

const blurActive = () => {
  document.activeElement && document.activeElement.blur();
};

const useWASDSelectedCell = (maxRows, maxCols) => {
  const [selectedCell, setSelectedCell] = useState({ row: 0, col: 0 });

  useEffect(() => {
    const handleKeyPress = ({ key }) => {
			if (document.activeElement && document.activeElement.id === "name-input") return;
      switch (key) {
        case "w": {
          blurActive();
          return setSelectedCell({
            row:
              selectedCell.row - 1 === -1 ? maxRows - 1 : selectedCell.row - 1,
            col: selectedCell.col,
          });
        }
        case "a": {
          blurActive();
          return setSelectedCell({
            row: selectedCell.row,
            col:
              selectedCell.col - 1 === -1 ? maxCols - 1 : selectedCell.col - 1,
          });
        }
        case "s": {
          blurActive();
          return setSelectedCell({
            row: selectedCell.row + 1 === maxRows ? 0 : selectedCell.row + 1,
            col: selectedCell.col,
          });
        }
        case "d": {
          blurActive();
          return setSelectedCell({
            row: selectedCell.row,
            col: selectedCell.col + 1 === maxCols ? 0 : selectedCell.col + 1,
          });
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  return [selectedCell, setSelectedCell];
};

export default useWASDSelectedCell;
