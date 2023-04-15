import { useContext, useState } from "react";
import Button from "../reused/buttons/Button";
import styled, { keyframes } from "styled-components";
import RecordsContext from "../../contexts/RecordsContext";

const animationTime = 1.5;
const finalLocation = "4em";

const floatLeft = keyframes`
	0% { 
		top: 0em;
		left: 0em;
	}
	100% {
		top: ${finalLocation};;
		left: ${finalLocation};
	}
`;
const floatRight = keyframes`
	0% { 
		top: 0em;
		right: 0em;
	}
	100% {
		top: ${finalLocation};;
		right: ${finalLocation};
	}
`;

export default ({ slot, setSlot }) => {
  const [confirmOn, setConfirmOn] = useState(false);
  const { setters } = useContext(RecordsContext);
  return (
    <ButtonsContainer confirmOn={confirmOn}>
      <Button
        disabled={confirmOn}
        onClick={() => {
          setConfirmOn(true);
        }}
      >
        reset slot
      </Button>
      {confirmOn && (
        <>
          <LeftButton>
            <Button
              onClick={() => {
                setters[slot]([[]]);
                setSlot(null);
              }}
            >
              confirm
            </Button>
          </LeftButton>
          <RightButton>
            <Button
              onClick={() => {
                setConfirmOn(false);
              }}
            >
              cancel
            </Button>
          </RightButton>
        </>
      )}
    </ButtonsContainer>
  );
};

const PositionedContainer = styled.div`
  position: absolute;
  animation-duration: ${animationTime}s;
  top: ${finalLocation};
`;

const RightButton = styled(PositionedContainer)`
  animation-name: ${floatLeft};
  left: ${finalLocation};
`;
const LeftButton = styled(PositionedContainer)`
  animation-name: ${floatRight};
  right: ${finalLocation};
`;

const ButtonsContainer = styled.div`
  position: relative;
  width: fit-content;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & button {
    margin-bottom: 1em;
  }
  margin-bottom: ${({ confirmOn }) => confirmOn && "4.5em"};
`;
