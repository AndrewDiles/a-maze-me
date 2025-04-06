// being perfectly frank this hook feels like a mess
// the different circumstances were more numerous than expected
// this could no doubt be re-factored to be more DRY

import { useEffect, useState } from "react";
import useFocusIdOnMount from "./useFocusIdOnMount";
import { MAX_WORLD_INDEX } from "../constants/general";

const idToFocus = "play-button";
const ids = [
  idToFocus,
  "worlds",
  "back-to-slot-select-button",
  "back-to-menu-button",
];

const convertSelectionToId = (selection) =>
  `level ${selection.levelIndex + 1} world ${selection.worldIndex + 1} button`;

const useWASDSelectLevel = (selectedRecords) => {
  const [selection, setSelection] = useState(() => {
    const worldIndex = Math.min(selectedRecords.length - 1, MAX_WORLD_INDEX);
    const levelIndex = selectedRecords[worldIndex].length;
    return { worldIndex, levelIndex };
  });
  const [lastKnownFocus, setLastKnownFocus] = useState(idToFocus);

  useFocusIdOnMount(idToFocus);

  const setLastAndFocus = (id) => {
    const elem = document.getElementById(id);
    if (elem && elem.tagName === "BUTTON") {
      setLastKnownFocus(id);
      elem.focus();
    } else {
      document.activeElement && document.activeElement.blur();
    }
  };

  // shape of a level button: `level ${levelNumber} world ${worldNumber} button`
  useEffect(() => {
    const handleKeyPress = ({ key }) => {
      key = key.toLowerCase();
      if (
        document.activeElement &&
        document.activeElement.id &&
        document.activeElement.id.includes("button")
      ) {
        // case something is focused
        const currentlyFocusedId = document.activeElement.id;
        const aLevelIsFocused = !ids.includes(currentlyFocusedId);
        switch (key) {
          case "a":
          case "arrowleft": {
            if (aLevelIsFocused) {
              if (
                selection.levelIndex === 0 ||
                selection.levelIndex === 3 ||
                selection.levelIndex === 6
              ) {
                const newSelection = {
                  worldIndex:
                    selection.worldIndex === 0
                      ? MAX_WORLD_INDEX
                      : selection.worldIndex - 1,
                  levelIndex: 0,
                };
                setSelection(newSelection);
                setLastAndFocus(convertSelectionToId(newSelection));
                return setTimeout(() => {
                  const elem = document.getElementById(
                    convertSelectionToId(newSelection)
                  );
                  if (elem) elem.focus();
                }, 10);
              } else {
                const newSelection = {
                  worldIndex: selection.worldIndex,
                  levelIndex: selection.levelIndex - 1,
                };
                setSelection(newSelection);
                return setLastAndFocus(convertSelectionToId(newSelection));
              }
            }
          }
          case "w":
          case "arrowup": {
            if (currentlyFocusedId === ids[0]) {
              return setLastAndFocus(ids[3]);
            } else if (currentlyFocusedId === ids[2]) {
              if (document.getElementById(convertSelectionToId(selection))) {
                return setLastAndFocus(convertSelectionToId(selection));
              } else {
                // bad solution, but this will work
                setLastKnownFocus(convertSelectionToId(selection));
                return document.getElementById(currentlyFocusedId).blur();
              }
            } else if (currentlyFocusedId === ids[3]) {
              return setLastAndFocus(ids[2]);
            } else {
              // may or may not want to move up to play button
              // this case may lead to confusion if using both mouse and wasd
              if (selection.levelIndex <= 2) {
                return setLastAndFocus(ids[0]);
              } else {
                const newSelection = {
                  worldIndex: selection.worldIndex,
                  levelIndex: selection.levelIndex - 3,
                };
                setSelection(newSelection);
                return setLastAndFocus(convertSelectionToId(newSelection));
              }
            }
          }
          case "d":
          case "arrowright": {
            if (aLevelIsFocused) {
              if (
                selection.levelIndex === 2 ||
                selection.levelIndex === 5 ||
                selection.levelIndex === 8
              ) {
                const newSelection = {
                  worldIndex:
                    selection.worldIndex === MAX_WORLD_INDEX
                      ? 0
                      : selection.worldIndex + 1,
                  levelIndex: 0,
                };
                setSelection(newSelection);
                setLastAndFocus(convertSelectionToId(newSelection));
                return setTimeout(() => {
                  const elem = document.getElementById(
                    convertSelectionToId(newSelection)
                  );
                  if (elem) elem.focus();
                }, 10);
              } else {
                const newSelection = {
                  worldIndex: selection.worldIndex,
                  levelIndex: selection.levelIndex + 1,
                };
                setSelection(newSelection);
                return setLastAndFocus(convertSelectionToId(newSelection));
              }
            }
          }

          case "s":
          case "arrowdown": {
            if (currentlyFocusedId === ids[0]) {
              if (document.getElementById(convertSelectionToId(selection))) {
                return setLastAndFocus(convertSelectionToId(selection));
              } else {
                // bad solution again, but this still works
                setLastKnownFocus(convertSelectionToId(selection));
                return document.getElementById(currentlyFocusedId).blur();
              }
            } else if (currentlyFocusedId === ids[2]) {
              return setLastAndFocus(ids[3]);
            } else if (currentlyFocusedId === ids[3]) {
              return setLastAndFocus(ids[0]);
            } else {
              // may or may not want to move up to play button
              // this case may lead to confusion if using both mouse and wasd
              if (selection.levelIndex >= 6) {
                return setLastAndFocus(ids[2]);
              } else {
                const newSelection = {
                  worldIndex: selection.worldIndex,
                  levelIndex: selection.levelIndex + 3,
                };
                setSelection(newSelection);
                return setLastAndFocus(convertSelectionToId(newSelection));
              }
            }
          }
        }
      } else {
        // case nothing is focused
        const elem = document.getElementById(lastKnownFocus);
        if (elem && elem.tagName === "BUTTON") {
          elem.focus();
        } else {
          if (key === "a" || key === "arrowleft") {
            const newSelection = {
              worldIndex:
                selection.worldIndex === 0
                  ? MAX_WORLD_INDEX
                  : selection.worldIndex - 1,
              levelIndex: 0,
            };
            setSelection(newSelection);
            setLastAndFocus(convertSelectionToId(newSelection));
            return setTimeout(() => {
              const elem = document.getElementById(
                convertSelectionToId(newSelection)
              );
              if (elem) elem.focus();
            }, 10);
          } else if (key === "d" || key === "arrowright") {
            const newSelection = {
              worldIndex:
                selection.worldIndex === MAX_WORLD_INDEX
                  ? 0
                  : selection.worldIndex + 1,
              levelIndex: 0,
            };
            setSelection(newSelection);
            setLastAndFocus(convertSelectionToId(newSelection));
            return setTimeout(() => {
              const elem = document.getElementById(
                convertSelectionToId(newSelection)
              );
              if (elem) elem.focus();
            }, 10);
          } else {
            if (key === "d" || key === "s" || key === "arrowup" || key === "arrowdown") {
              return setLastAndFocus(ids[2]);
            } else {
              return setLastAndFocus(idToFocus);
            }
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  return [selection, setSelection];
};

export default useWASDSelectLevel;
