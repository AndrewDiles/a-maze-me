import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
`;

export default ({ buttonInfo }) => {
  const testElem = useRef(null);
  const [radius, setRadius] = useState(0);
  const { height, width } = buttonInfo;
  const speed = 0.15;
  const distanceToTravel = 2 * (height + width);
  const time = parseInt(distanceToTravel / speed);

  useEffect(() => {
    const rects = testElem.current.getBoundingClientRect();
    rects && setRadius(rects.width);
  }, []);

  // without curves
  // const path = `path('M0,0
  // L${width - radius/5}, 0
  // L${width - radius/5}, ${height - 2*radius/7}
  // L0, ${height - 2*radius/7}
  // Z')`;

  const path = `path('M${0.8 * radius}, ${-0.02 * radius}

	L${width - 0.2 * radius - 0.8 * radius}, ${-0.02 * radius}
	L${width - 0.2 * radius - 0.5 * radius}, ${0.05 * radius}
	L${width - 0.2 * radius - 0.25 * radius}, ${0.3 * radius}
	L${width - 0.2 * radius - 0.05 * radius}, ${0.7 * radius}
	L${width - 0.2 * radius}, ${radius}

	L${width - 0.2 * radius}, ${height - 1 * radius}
	L${width - 0.2 * radius - 0.05 * radius}, ${height - 0.9 * radius}
	L${width - 0.2 * radius - 0.25 * radius}, ${height - 0.6 * radius}
	L${width - 0.2 * radius - 0.5 * radius}, ${height - 0.35 * radius}
	L${width - 0.2 * radius - 0.8 * radius}, ${height - 0.25 * radius}

	L${0.8 * radius}, ${height - 0.25 * radius}
	L${0.5 * radius}, ${height - 0.35 * radius}
	L${0.25 * radius}, ${height - 0.6 * radius}
	L${0.02 * radius}, ${height - 0.8 * radius}

	L${0.02 * radius}, ${0.5 * radius}
	L${0.15 * radius}, ${0.35 * radius}
	L${0.4 * radius}, ${0.15 * radius}
	L${0.6 * radius}, ${0.05 * radius}

	Z')`;
  return (
    <>
      {radius > 0 && <Orb path={path} time={time} />}
      <TestEmSize ref={testElem} radius={radius} />
    </>
  );
};

const TestEmSize = styled.span`
  position: absolute;
  z-index: -1;
  display: ${({ radius }) => radius !== 0 && "none"};
  width: 1em;
`;

const Orb = styled.div`
  height: 0.25em;
  width: 0.25em;
  position: absolute;
  top: -0.1em;
  left: -0.15em;
  z-index: 15;
  border-radius: 50%;
  background-color: var(--color-accent);
  offset-path: ${({ path }) => path};
  animation-name: ${rotate};
  animation-duration: ${({ time }) => time}ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

// The border radius of Button is 1em.
// That will form a circle of radius 1em about x,y point (1em, -1em);
// TestEmSize exists puring to calculate the size of 1em in px
// em size in px is required to have offset-path follow curves or border
// using polas coordinates, a circle centered on (i, j) will have:
// x = r cos theta + i
// y = r arctan theta + j
// the following arrays represent needed thetas (every 10 degrees) for each quadrant

// const rt2 = 1.41
// const rt3 = 1.73

// const q1 = [{x:.5, y: rt3/2},{x:rt2/2, y: rt2/2}, {x:rt3/2, y: .5}];
// const q2 = [{x:.5, y: -rt3/2},{x:rt2/2, y: -rt2/2}, {x:rt3/2, y: -.5}];
// const q3 = [{x:-.5, y: -rt3/2},{x:-rt2/2, y: -rt2/2}, {x:-rt3/2, y:-.5}];
// const q4 = [{x:-rt3/2, y:.5},{x:-rt2/2, y: rt2/2}, {x: -.5, y:rt3/2}];

// const degToRad = (deg) => Math.PI*deg/180

// for (let theta = 0; theta <=90; theta += 10) {
// 	q1.push(degToRad(theta));
// 	q2.push(degToRad(theta+90));
// 	q3.push(degToRad(theta+180));
// 	q4.push(degToRad(theta+270));
// }

// const findCircleCoord = (angle, radius, i, j) => {
// 	const x = Number(((radius * Math.cos(angle)) + i).toFixed(2));
// 	const y = Number(((radius * Math.atan(angle)) + j).toFixed(2));
// 	return {x,y}
// };

// const expandAndPlaceCoord = (position, quadrant) => {
// 	const {x,y} = position;
// 	if (quadrant === 1) {
// 		return {x: (x*radius) + radius + width, y: (x*radius)+radius}
// 	} else if (quadrant === 2) {
// 		return {x: (x*radius) + radius + width, y: (x*radius)+radius+height}
// 	}else if (quadrant === 3) {
// 		return {x: (x*radius) + radius, y: (x*radius)+radius+height}
// 	}else if (quadrant === 4) {
// 		return {x: (x*radius) + radius, y: (x*radius)+radius}
// 	}

// };

// const coords1 = q1.map((pos)=>{return expandAndPlaceCoord(pos, 1)});
// const coords2 = q2.map((pos)=>{return expandAndPlaceCoord(pos, 2)});
// const coords3 = q2.map((pos)=>{return expandAndPlaceCoord(pos, 2)});
// const coords4 = q2.map((pos)=>{return expandAndPlaceCoord(pos, 2)});
