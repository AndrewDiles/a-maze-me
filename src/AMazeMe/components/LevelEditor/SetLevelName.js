import { useContext } from "react";
import LevelContext from "../../contexts/LevelContext";

import styled from "styled-components";

export default () => {
  const { level, setLevel } = useContext(LevelContext);

  return (
    <Label>
      Level Name:{" "}
      <input
				id="name-input"
        value={level.name}
        onChange={(ev) => {
          setLevel((level) => {
            return {
              ...level,
              name: ev.target.value,
            };
          });
        }}
      />
    </Label>
  );
};

const Label = styled.label`
  padding: 0 1em;
	&::first-letter {
    text-transform:capitalize;
	}
`;
