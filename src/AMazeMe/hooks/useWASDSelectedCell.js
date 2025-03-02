import { useEffect, useState } from "react";

const blurActive = () => {
  document.activeElement && document.activeElement.blur();
};

const useWASDSelectedCell = (maxRows, maxCols) => {
  const [selectedCell, setSelectedCell] = useState({ row: 0, col: 0 });

  useEffect(() => {
    const handleKeyPress = ({ key }) => {
      key = key.toLowerCase();
      if (document.activeElement && document.activeElement.id === "name-input")
        return;
      switch (key) {
        case "w":
        case "arrowup": {
          blurActive();
          return setSelectedCell({
            row:
              selectedCell.row - 1 === -1 ? maxRows - 1 : selectedCell.row - 1,
            col: selectedCell.col,
          });
        }
        case "a":
        case "arrowleft": {
          blurActive();
          return setSelectedCell({
            row: selectedCell.row,
            col:
              selectedCell.col - 1 === -1 ? maxCols - 1 : selectedCell.col - 1,
          });
        }
        case "s":
        case "arrowdown": {
          blurActive();
          return setSelectedCell({
            row: selectedCell.row + 1 === maxRows ? 0 : selectedCell.row + 1,
            col: selectedCell.col,
          });
        }
        case "d":
        case "arrowright": {
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
