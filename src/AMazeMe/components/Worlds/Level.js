import styled from "styled-components";

export default ({
  worldSelected,
  disabled,
  selected,
  selection,
  setSelection,
  levelNumber,
  unlocked,
	targetMet
}) => {
  return (
    <Level
      as={worldSelected ? "button" : "span"}
      disabled={disabled}
      selected={selected}
      worldSelected={worldSelected}
			targetMet={targetMet}
      onClick={(ev) => {
        if (!worldSelected) return;
        ev.stopPropagation();
				const playButton = document.getElementById("play-button");
				playButton && playButton.focus();
        setSelection({ ...selection, levelIndex: levelNumber - 1 });
      }}
      locked={!unlocked}
    >
      {levelNumber}
    </Level>
  );
};

const Level = styled.button`
  opacity: ${({ locked }) => locked && ".5"};
  justify-content: center;
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  border-color: ${({ locked, selected }) =>
    selected ? "var(--color-a)" : locked ? "red" : "var(--color-text)"};
  border-radius: 0.2em;
  border-style: solid;
	outline: ${({selected, worldSelected})=> worldSelected && selected && ".1em solid var(--color-a)"};
	color: ${({targetMet})=>targetMet && "var(--color-accent)"};
  &:active {
    color: var(--color-a);
  }
  &:focus {
    border-color: var(--color-f);
    color: var(--color-f);
    outline: ${({selected, worldSelected})=> (worldSelected && selected) ? ".1em solid var(--color-f)" : "none"};
  }
  &:hover {
    color: ${({ worldSelected }) => worldSelected && "var(--color-h)"};
    border-color: ${({ worldSelected }) => worldSelected && "var(--color-h)"};
		outline: ${({worldSelected, selected})=> (worldSelected && selected) ? ".1em solid var(--color-h)" : "none"};
    cursor: ${({locked, worldSelected}) => worldSelected ? locked ? "not-allowed" : "pointer" :"pointer"};
  }
  font-size: 0.75em;
  @media screen and (min-width: 450px) {
    font-size: 1em;
  }
  @media screen and (min-width: 750px) {
    font-size: 1.25em;
  }
  @media screen and (min-width: 1000px) {
    font-size: 1.5em;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.4em;
  }
  &:hover,
  &:active {
    &::after {
      display: ${({ locked, worldSelected }) =>
        (!worldSelected || !locked) && "none"};
      opacity: 0.5;
      content: "🚫";
      position: absolute;
      font-size: 150%;
      top: 10%;
      @media screen and (min-width: 450px) {
        top: -5%;
      }
      @media screen and (min-width: 750px) {
        top: -12%;
      }
      /* @media screen and (min-width: 1000px) {
        font-size: 125%;
      } */
    }
  }
`;
