import { memo, useContext, useEffect } from "react";
import styled from "styled-components";
import GameContext from "../../contexts/GameContext";

const TouchOverlay = memo(() => {
  // console.log("touch overlay open");
  const {
    upPress,
    downPress,
    leftPress,
    rightPress,
    upUnpress,
    downUnpress,
    leftUnpress,
    rightUnpress,
  } = useContext(GameContext);

  useEffect(() => {
    return () => {

		};
  });

  const overlayInfo = [
    {
      direction: "up",
      text: "↑",
      ontouchstart: upPress,
      ontouchend: upUnpress,
    },
    {
      direction: "left",
      text: "←",
      ontouchstart: leftPress,
      ontouchend: leftUnpress,
    },
    {
      direction: "right",
      text: "→",
      ontouchstart: rightPress,
      ontouchend: rightUnpress,
    },
    {
      direction: "down",
      text: "↓",
      ontouchstart: downPress,
      ontouchend: downUnpress,
    },
  ];

  return (
    <OverlayContainer>
      {overlayInfo.map(
        ({ direction, text, ontouchstart, ontouchend }, index) => (
          <DirectionButton
            key={direction}
            $area={direction}
            onTouchStart={ontouchstart}
            onTouchEnd={ontouchend}
            onTouchCancel={ontouchend}
          >
            {text}
          </DirectionButton>
        )
      )}
    </OverlayContainer>
  );
});

export default TouchOverlay;

const OverlayContainer = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  background-color: transparent;
  @media (orientation: portrait) {
    & {
      grid-template:
        "up up up" 1fr
        "left . right" 1fr
        "down down down" 1fr;
    }
  }
  @media (orientation: landscape) {
    & {
      grid-template:
        "left up right" 1fr
        "left . right" 1fr
        "left down right" 1fr;
    }
  }
`;

const DirectionButton = styled.button`
  grid-area: ${({ $area }) => $area};
  border: min(2vh, 2vw) hsla(0 100% 0% / 0.05) solid;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: min(10vh, 5vw);
  color: white;
  padding: 0;
  background-color: hsla(0 100% 0% / 0.05);
  &:active {
    border-color: hsla(310 100% 50% / 0.3);
  }
  &:focus,
  &:focus-visible {
    outline-color: lime;
  }
`;
