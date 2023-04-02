import styled from "styled-components";

export default ({ worldNumber }) => {
  return (
    <LockedLevel>Complete world {worldNumber} to unlock.</LockedLevel>
  );
};

const LockedLevel = styled.p`
position: relative;
  margin: auto;
  color: var(--color-accent);
  justify-content: center;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  &:hover {
    color: var(--color-h);
    border-color: var(--color-h);
    cursor: not-allowed;
  }
	&:hover, &:active {
		&::after{
			opacity: .5;
			content: "🚫";
			position: absolute;
			font-size: 666%;
			top: -12%;
		}
	} 
`;
