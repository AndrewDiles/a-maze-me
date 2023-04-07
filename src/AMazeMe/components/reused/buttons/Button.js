import { useState } from "react";
import styled, { keyframes } from "styled-components";
import ButtonOrb from "./ButtonOrb";

export default ({ id, className, onClick, disabled, children }) => {
  const [buttonInfo, setButtonInfo] = useState({ height: 0, width: 0 });
  const { height, width } = buttonInfo;
  return (
    <Button
      id={id}
      className={className}
      disabled={disabled}
      onMouseEnter={({ target }) => {
        setButtonInfo({
          height: target.getBoundingClientRect().height,
          width: target.getBoundingClientRect().width,
        });
      }}
      onMouseLeave={() => {
        setButtonInfo({
          height: 0,
          width: 0,
        });
      }}
      onClick={onClick}
    >
      {height > 0 && width > 0 && <ButtonOrb buttonInfo={buttonInfo} />}
      {children}
    </Button>
  );
};
const underLineExpansion = keyframes`
 0% { width: 0% }
 10% { width: 4% }
 20% { width: 2% }
 30% { width: 6% }
 40% { width: 4% }
 50% { width: 8% }
 70% { width: 90%}
 85% { width: 75%}
 100% { width: 80%}
`;

const Button = styled.button`
  position: relative;
  font-size: 1.5rem;
  padding: 0.5em 1em;
  border-style: double;
  border-color: var(--color-border);
  border-width: 0.25em;
  border-radius: 1em;
  & div {
    display: none;
  }
  &:focus {
    color: var(--color-f);
    outline-color: var(--color-f);
    & div {
      display: block;
    }
  }
  &:hover {
    color: var(--color-h);
    border-color: var(--color-h);
    cursor: pointer;
    & div {
      display: block;
    }
  }
  &:active {
    color: var(--color-a);
    border-style: solid;
    & div {
      display: block;
    }
  }
  &:hover:after {
    position: absolute;
    content: "";
    height: 0.1em;
    bottom: 0.3em;
    width: 80%;
    background: var(--color-accent);
    left: 10%;
    animation-name: ${underLineExpansion};
    animation-duration: 2.5s;
  }
  &:disabled,
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
