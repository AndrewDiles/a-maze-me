import styled from "styled-components";

export default ({ highlight, children }) => (
  <HighlightingSpan highlight={highlight}>{children}</HighlightingSpan>
);

const HighlightingSpan = styled.span`
	color: {({highlight}) => highlight && "var(--color-accent)"};
`;
