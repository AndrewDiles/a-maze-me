import styled from "styled-components";
export default ({ children, margin }) => <Header margin={margin}>{children}</Header>;
const Header = styled.h1`
  margin: ${({margin})=>margin ? margin :"75px auto"};
	text-align: center;
`;
