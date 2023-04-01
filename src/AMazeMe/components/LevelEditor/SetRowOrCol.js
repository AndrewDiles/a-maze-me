import { useContext } from "react";
import LevelContext from "../../contexts/LevelContext";

import formLayout from "../../helpers/formLayout";
import createNumberedArray from "../../helpers/createNumberedArray";

import styled from "styled-components";

export default ({ keyToChange }) => {
  const { level, setLevel } = useContext(LevelContext);

  return (
    <Label>
      {keyToChange === "rows" ? "Rows: " : "Cols: "}
      <select
        defaultValue={level[keyToChange]}
        onChange={(ev) => {
          const { value } = ev.target;
          const newValue = parseInt(value);
          setLevel((level) => {
            return {
              ...level,
              [keyToChange]: newValue,
              layout: formLayout({
                prev: level.layout,
                cols: level.cols,
                rows: level.rows,
                [keyToChange]: newValue,
              }),
            };
          });
					
        }}
      >
        {createNumberedArray(50).map((n) => (
          <option key={n} value={n + 1}>
            {n + 1}
          </option>
        ))}
      </select>
    </Label>
  );
};


const Label = styled.label`
padding: 0 1em;
`