import { useState, useEffect } from "react";
import Button from "./Button";
import styled, { keyframes } from "styled-components";
const animationTime = 1.5;

const floatUp = keyframes`
	0% { 
		opacity: 1;
		scale: 1;
		transform: translateY(0em);
		color: var(--color-f);

	}
	25% {
		opacity: 1;
		scale: 1.2;
		transform: translateY(-1em);
		color: var(--color-f);
	}
	50% { 
		opacity: 1;
		scale: 1;
		transform: translateY(-2em); 
		color: var(--color-f);
	}
	75% {
		opacity: 1;
		scale: 1;
		transform: translateY(-3em);
		color: var(--color-text);
	}
	100% {
		opacity: 0;
		scale: 1;
		transform: translateY(-4em);
		color: var(--color-text);
	}
`;

export default ({ customLevel }) => {
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    let timer;
    if (saved) {
      timer = setTimeout(() => {
        setSaved(false);
      }, animationTime * 1000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [saved]);
  return (
    <Container>
      {saved && (
        <FloatingSavedIndicator className="noselect">
          SAVED
        </FloatingSavedIndicator>
      )}
      <Button
        disabled={saved}
        onClick={() => {
          setSaved(true);
          localStorage.setItem("custom-map", JSON.stringify(customLevel));
        }}
      >
        SAVE
      </Button>
    </Container>
  );
};
const Container = styled.span`
  position: relative;
`;
const FloatingSavedIndicator = styled.span`
  position: absolute;
  animation-name: ${floatUp};
  animation-duration: ${animationTime}s;
  z-index: 5;
  margin-left: 2.25em;
  margin-top: 1.25em;
`;
