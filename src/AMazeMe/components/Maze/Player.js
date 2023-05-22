import { useState, useContext, useEffect, useRef } from "react";
import LevelContext from "../../contexts/LevelContext";
import GameContext from "../../contexts/GameContext";
import useMovementControls from "../../hooks/useMovementControls";
import useMovementAndCollisions from "../../hooks/useMovementAndCollisions";
import styled, { keyframes } from "styled-components";
import { GAME_FREQ, WIN_DELAY } from "../../constants/general";
import Square from "./Square";

export default ({ color, top, left, size, animation, WIN_DELAY }) => {
  const [faceActive, setFaceActive] = useState(false);
  return (
    <Player
      color={color}
      top={top}
      left={left}
      size={size}
      animation={animation}
      WIN_DELAY={WIN_DELAY}
      onClick={() => {
        setFaceActive(!faceActive);
      }}
    >
      {faceActive && (
        <>
          <LeftEye />
          <RightEye />
          <Nose />
          <Smile />
        </>
      )}
    </Player>
  );
};

const Player = styled(Square)`
  z-index: 20;
`;

const Eye = styled.div`
  position: absolute;
  height: 20%;
  width: 20%;
  top: 20%;
  background-color: white;
  mix-blend-mode: difference;
  border-radius: 50%;
`;
const LeftEye = styled(Eye)`
  left: 20%;
`;
const RightEye = styled(Eye)`
  right: 20%;
`;

const Nose = styled.div`
  width: 10%;
  height: 10%;
  position: absolute;
  top: 50%;
  left: 45%;
  background-color: white;
  mix-blend-mode: difference;
  transform: rotate(45deg);
`;
const Smile = styled.div`
  width: 70%;
  height: 20%;
  top: 55%;
  left: 15%;
  position: absolute;
  border-radius: 50%;
  border-bottom: 5px white solid;
  background-color: transparent;
  mix-blend-mode: difference;
`;
