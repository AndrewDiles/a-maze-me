import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
// I'm not going to make this responsive to window resizes after this has begun
const fixedStarSize = 10; // [px]
const widthRangeMultiplier = 4; // allows for one star per widthRangeMultiplier*fixedStarSize px less the gap of fixedStarSize
const starMovementTime = 500; // [ms]
const maxDelay = 2000; // [ms]

const move = keyframes`
  0% {
    offset-distance: 0%;
		opacity: 0;
		scale: 0;
  }
	10% {
    offset-distance: 10%;
		opacity: 1;
		scale: 1;
  }
	75% {
    offset-distance: 75%;
		opacity: 1;
		scale: 1.5;
  }
  100% {
    offset-distance: 100%;
		opacity: 0;
		scale: 1;
  }
`;

const ProduceStar = ({ starObject }) => {
  const [starNumber, setStarNumber] = useState(1);
  const [starInfo, setStarInfo] = useState({
    showing: false,
    left: 0,
    starNumber: 1,
  });
  const { translateX, width, distToTravel } = starObject;

  useEffect(() => {
    const randomDelay = Math.floor(Math.random() * maxDelay);

    const nextStarTimer = setTimeout(() => {
      setStarInfo((prev) => {
        return { showing: false, left: 0, starNumber: prev.starNumber + 1 };
      });
      setStarNumber(starNumber + 1);
    }, randomDelay + starMovementTime);

    const displayStar = setTimeout(() => {
      const left = Math.random() > 0.5;

      setStarInfo((prev) => {
        return {
          showing: true,
          left: width/2 + Math.floor(Math.random() * width),
          starNumber: prev.starNumber,
          path: left
            ? `path("M${translateX},70 C${translateX-width/10},${-(distToTravel/5)-70} ${translateX-1.5*width},${-distToTravel/2} ${translateX-4*width},${-distToTravel*1}")`
            : `path("M${translateX},70 C${translateX+width/10},${-(distToTravel/5)-70} ${translateX+.5*width},${-distToTravel/2} ${translateX+1.5*width},${-distToTravel*1}")`,
        };
      });
    }, randomDelay);

    return () => {
      clearTimeout(nextStarTimer);
      clearTimeout(displayStar);
    };
  }, [starInfo.starNumber]);
  return starInfo.showing ? (
    <Star
      width={width}
      left={starInfo.left}
      path={starInfo.path}
    >
      ⭐
    </Star>
  ) : null;
};

const Star = styled.span`
  position: absolute;
  left: ${({ left }) => left}px;
  width: ${({ width }) => width}px;
  text-align: center;
  font-size: ${fixedStarSize}px;
  offset-path: ${({ path }) => path};
  animation-name: ${move};
  animation-duration: ${starMovementTime}ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
	text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #f09,
      0 0 80px #f09,
      0 0 90px #f09,
      0 0 100px #f09,
      0 0 150px #f09;
	user-select: none;
`;

export default ({ children }) => {
  const header = useRef(null);
  const [stars, setStars] = useState([]);
  useEffect(() => {
    if (!header.current) return;
    const rect = header.current.getBoundingClientRect();
    console.log(rect);
    const width = rect.width;
    const distToTravel = rect.top + rect.height;
    const maxStars = Math.floor(
      (width - fixedStarSize) /
        (fixedStarSize + fixedStarSize * widthRangeMultiplier)
    );
    const gap =
      (width - maxStars * (fixedStarSize * widthRangeMultiplier)) / maxStars;
    const starsArray = [];
    for (let star = 0; star < maxStars; star++) {
      const newStar = {
        translateX: star * (gap + fixedStarSize * widthRangeMultiplier),
        width: fixedStarSize * widthRangeMultiplier,
        distToTravel,
      };
      starsArray.push(newStar);
    }
    setStars(starsArray);
  }, []);

  return (
    <SparklyHeader ref={header}>
      {stars.map((star) => (
        <ProduceStar starObject={star} key={star.translateX} />
      ))}
      {children}
    </SparklyHeader>
  );
};

const SparklyHeader = styled.h3`
  position: relative;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
	text-shadow: -1px -1px 0 yellow, 1px -1px 0 yellow, -1px 1px 0 yellow, 1px 1px 0 yellow;
	letter-spacing: 4px;
`;
