import { useContext } from "react";
import LevelContext from "../../contexts/LevelContext";
import useStaggerDraw from "../../hooks/useStaggerDraw";
import styled from "styled-components";

const correctColorKey = (string) => {
  string = string.replace("Color", "");
  return string[0].toUpperCase() + string.slice(1);
};

export default ({ keyToChange }) => {
  const { level, setLevel, draw, setDraw } = useContext(LevelContext);
  const setStaggerDraw = useStaggerDraw(draw, setDraw);

  return (
    <Label>
      {correctColorKey(keyToChange)}
      <input
        type="color"
        value={level[keyToChange]}
        onChange={(ev) => {
          const { value } = ev.target;
          setLevel((level) => {
            return {
              ...level,
              [keyToChange]: value,
            };
          });
          setStaggerDraw(true);
        }}
      />
    </Label>
  );
};

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
