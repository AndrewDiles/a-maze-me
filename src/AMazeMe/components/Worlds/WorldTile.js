import { useContext } from "react";
import styled from "styled-components";
import LockedLevel from "./LockedLevel";
import Level from "./Level";
import RecordsContext from "../../contexts/RecordsContext";
import SaveCustomLevelToLocalStorage from "../reused/buttons/SaveCustomLevelToLocalStorage";

const calcTransX = (diff) => {
  // f(d) = (125/2|d| - 75, -5d - 10)
  // const x = ((-125/2) * diff) - 50;
  const x = -50 * Math.log(Math.abs(diff) + 1) * Math.sign(diff) - 50;
  const y = -8 * Math.abs(diff) - 10;
  return `${x}%, ${y}%`;
};

const produceLevelArray = () => {
  const result = [];
  let i = 1;
  while (i < 10) {
    result.push(i);
    i++;
  }
  return result;
};

export default ({ worldNumber, selection, setSelection }) => {
  const { selectedRecords } = useContext(RecordsContext);
  const selected = selection.worldIndex === worldNumber;
  const differenceFromSelected = selection.worldIndex - worldNumber;
  // if 0, is selected, transX should be -50%, z-index should be 100
  // if > 0, should be on left
  // if < 0, should be on right
  const worldUnlocked = selectedRecords.length > worldNumber;
  return (
    <Tile
      onClick={() => {
        if (!selected) setSelection({ levelIndex: 0, worldIndex: worldNumber });
      }}
      worldUnlocked={worldUnlocked}
      selected={selected}
      zIndex={100 - Math.abs(differenceFromSelected) * 5}
      trans={calcTransX(differenceFromSelected)}
    >
      {worldUnlocked ? (
        produceLevelArray().map((levelNumber) => {
          const progressArray = selectedRecords[selection.worldIndex];
          const unlocked = progressArray
            ? levelNumber === 1
              ? true
              : progressArray[levelNumber - 2]
              ? true
              : false
            : false;
						
          return (
            <Level
              key={levelNumber}
              worldSelected={selected}
              disabled={differenceFromSelected !== 0}
              selected={levelNumber === selection.levelIndex + 1}
              selection={selection}
              setSelection={setSelection}
              levelNumber={levelNumber}
              unlocked={unlocked}
            />
          );
        })
      ) : (
        <LockedLevel worldNumber={worldNumber} />
      )}
    </Tile>
  );
};

const Tile = styled.div`
  position: absolute;
  border: 0.5em
    var(${({ selected }) => (selected ? "--color-a" : "--color-border")}) double;
  border-radius: 1em;
  display: ${({ worldUnlocked }) => (worldUnlocked ? "grid" : "flex")};
  grid-template-columns: repeat(3, 1fr);
  z-index: ${({ zIndex }) => zIndex};
  transition-duration: 0.75s;
  transition-timing-function: ease-in-out;
  transition-property: opacity, transform;
  transform: translate(${({ trans }) => trans});
  filter: grayscale(${({ selected }) => (selected ? 0 : 0.5)});
  font-size: 0.5em;
  height: 80px;
  width: 80px;
  padding: 4px;
  grid-gap: 4px;
  @media screen and (min-width: 450px) {
    font-size: 0.75em;
    height: 120px;
    width: 120px;
    padding: 6px;
    grid-gap: 6px;
  }
  @media screen and (min-width: 750px) {
    font-size: 1.25em;
    height: 200px;
    width: 200px;
    padding: 10px;
    grid-gap: 10px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 1.5em;
    height: 250px;
    width: 250px;
    padding: 15px;
    grid-gap: 15px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 2em;
    height: 300px;
    width: 300px;
    padding: 18px;
    grid-gap: 18px;
  }
  &:hover {
    color: var(--color-h);
    border-color: ${({ selected }) => !selected && "var(--color-h)"};
    cursor: ${({ selected }) => !selected && "pointer"};
  }
`;
