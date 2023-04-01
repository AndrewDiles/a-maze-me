import styled from "styled-components";
export default ({ children }) => <Header>{children}</Header>;
const Header = styled.h1`
  margin: 75px auto;
	text-align: center;
`;
