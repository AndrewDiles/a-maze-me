import styled from "styled-components";

export default ({
	worldSelected,
  disabled,
  selected,
  selection,
  setSelection,
  levelNumber,
}) => {
  return (
    <Level
			as = {worldSelected ? "button" : "span"}
      disabled={disabled}
      onClick={(ev) => {
				if (!worldSelected) return;
				ev.stopPropagation();
				console.log("clicked");
        setSelection({ ...selection, levelIndex: levelNumber - 1 });
      }}
    >
      {levelNumber}
    </Level>
  );
};

const Level = styled.button`
  justify-content: center;
  display: flex;
  height: 100%;
  align-items: center;
	&:hover {
    color: var(--color-h);
    border-color: var(--color-h);
    cursor: pointer;
  }
`;
