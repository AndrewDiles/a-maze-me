import styled, { keyframes } from "styled-components";
import { GAME_FREQ } from "../../constants/general";

const popping = keyframes`
 0% { filter: blur(0px) }
 25% { filter: blur(10px) }
 100% { filter: blur(100px)}
`;
const win = keyframes`
 0% { 
	outline: 0em solid var(--color-a);
	filter: hue-rotate(0deg);
	border-radius: 0 0 0 0;
}
 25% { outline: .25em solid var(--color-a);
	border-radius: 50% 0 0 0;
 }
 50% {
	border-radius: 50% 50% 0 0;
 }
 75% { outline: .5em solid var(--color-h);
	border-radius: 50% 50% 50% 0;
}
 100% { outline: .1em solid var(--color-f);
	filter: hue-rotate(360deg);
	border-radius: 50%;
 }
`;

export default styled.div.attrs((props) => ({
  style: {
    backgroundColor: props.color,
    transform: `translate(${props.left}px, ${props.top}px)`,
    height: `${props.size / 2}px`,
    width: `${props.size / 2}px`,
    transitionDuration: `${GAME_FREQ}ms`,
  },
}))`
  transform-origin: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  transition-property: transform;
  transition-timing-function: ease-in-out;
  animation-duration: ${({ WIN_DELAY }) => WIN_DELAY}ms;
  /* options are win, damage, sparkles, popping */
  animation-name: ${({ animation }) =>
    animation === "popping" ? popping : animation === "win" ? win : ""};
`;
