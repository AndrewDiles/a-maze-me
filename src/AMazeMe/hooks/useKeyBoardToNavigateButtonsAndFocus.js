import { useEffect, useState } from "react";
import useFocusIdOnMount from "./useFocusIdOnMount";

const determineIndex = (array, id) => {
  const found = array.findIndex((e) => e === id);
  return typeof found === "number" ? found : 0;
};

const useKeyBoardToNavigateButtonsAndFocus = ({ buttonsIdArray, idToFocus }) => {
  const [selectedIndex, setSelectedIndex] = useState(() =>
    determineIndex(buttonsIdArray, idToFocus)
  );

  useFocusIdOnMount(idToFocus);

  const determinePreviousIndex = (currentIndex) =>
    currentIndex === 0 ? buttonsIdArray.length - 1 : currentIndex - 1;

		const determineNextIndex = (currentIndex) =>
    currentIndex === buttonsIdArray.length - 1 ? 0 : currentIndex + 1;

  const focusFromArray = (directionFunction, currentIndex) => {
    let foundValidTarget = null;
    let lastIndexTested = currentIndex;
    for (let testNumber = 0; testNumber < buttonsIdArray.length; testNumber++) {
      lastIndexTested = directionFunction(lastIndexTested);
      foundValidTarget = document.getElementById(
        buttonsIdArray[lastIndexTested]
      );
      if (foundValidTarget) break;
    }
    if (foundValidTarget) {
      foundValidTarget.focus();
			setSelectedIndex(lastIndexTested);
    } else {
			console.log("Error - unable to find valid button index to focus");
		}
  };

  useEffect(() => {
    const handleKeyPress = ({ key }) => {
			key = key.toLowerCase();
      switch (key) {
        case "w":
        case "a":
        case "arrowup":
        case "arrowleft": {
          if (document.activeElement) {
            // case something is focused

            const indexCurrentlyFocused = buttonsIdArray.findIndex(
              (e) => e === document.activeElement.id
            );
            if (indexCurrentlyFocused > -1) {
              // case focused element is one of the target buttons

              return focusFromArray(determinePreviousIndex, indexCurrentlyFocused);
            } 
          } 
						// case focused element is not in array
            // or nothing is foccused
						
						return focusFromArray(determinePreviousIndex, selectedIndex);
        }

        case "s":
        case "d":
        case "arrowdown":
        case "arrowright": {
          if (document.activeElement) {
            // case something is focused

            const indexCurrentlyFocused = buttonsIdArray.findIndex(
              (e) => e === document.activeElement.id
            );
            if (indexCurrentlyFocused > -1) {
              // case focused element is one of the target buttons

              return focusFromArray(determineNextIndex, indexCurrentlyFocused);
            } 
          } 
						// case focused element is not in array
            // or nothing is foccused
						
						return focusFromArray(determineNextIndex, selectedIndex);
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  return [selectedIndex, setSelectedIndex];
};

export default useKeyBoardToNavigateButtonsAndFocus;
