import { useState } from "react";
import styled from "styled-components";
import produceAnimations from "./animations";

const { rotate, ballAnimation } = produceAnimations();

const ANIMATION_DURATION = "8s";

const ballColors = [
	"radial-gradient(circle at 65% 15%, white .1px, rgb(255,126,0) 3%, rgb(139,0,0) 60%, rgb(255,126,0) 100%);", // red
	"radial-gradient(circle at 65% 15%, white 1px, rgb(255,255,0) 3%, rgb(0,139,0) 60%, rgb(255,255,0) 100%);", // green
  "radial-gradient(circle at 65% 15%, white 1px, rgb(0,255,255) 3%, rgb(0,0,139) 60%, rgb(0,255,255) 100%);", // blue
  "radial-gradient(circle at 65% 15%, white .1px, rgb(148,0,211) 3%, rgb(75,0,130) 60%, rgb(148,0,211) 100%);", // purple
];

// prop size [px] default 200
// colorIndex: 0: red, 1: green, 2: blue, 3: purple 
const RollingBallLoader = ({
  size = 200,
  bgColor = "var(--color-bg)",
  borderColor = "var(--color-text)",
  squareColor = "var(--color-text)",
}) => {
	const [colorIndex, setColorIndex] = useState(1);
  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor}
      squareColor={squareColor}
      size={size}
			onClick={()=>{
				setColorIndex(colorIndex >= ballColors.length ? 0 : colorIndex+1)
			}}
    >
      <Ball ballColor={ballColors[colorIndex] ? ballColors[colorIndex] : ballColors[0]}/>
    </Container>
  );
};

export default RollingBallLoader;

const Container = styled.div`
  box-sizing: border-box;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ bgColor }) => bgColor};
  border: ${({ size }) => size / 6}px solid ${({ borderColor }) => borderColor};
  margin: 200px auto;
  animation: ${rotate} ${ANIMATION_DURATION} infinite linear;
  &::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 50%;
    top: 0;
    left: 0;
    background-color: ${({ squareColor }) => squareColor};
    transform: translate(50%, 50%);
  }
`;

const Ball = styled.div`
  border-radius: 50%;
  background-color: "black";
  width: 20%;
  height: 20%;
  transform: translate(0%, 400%);
  animation: ${ballAnimation} ${ANIMATION_DURATION} infinite linear;
  background: ${({ ballColor }) => ballColor};
  animation-delay: -${parseInt(ANIMATION_DURATION) / 200}s;
`;

// animation-name: ${stepCycle};
// animation-duration: ${CYCLE_TIME}s;
// animation-iteration-count: infinite;
// animation-timing-function: linear;
