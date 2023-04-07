import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

export default ({ margin, children }) => {
  const [xScale, setXScale] = useState(1);
  const [minWidth, setMinWidth] = useState(0);
  const header = useRef(null);

  useEffect(() => {
    const headerWidth = header.current.getBoundingClientRect().width;
    setMinWidth(headerWidth);
  }, []);

  useEffect(() => {
    const manageSize = () => {
      if (minWidth > window.innerWidth) {
        setXScale(1 / (minWidth / window.innerWidth));
      } else {
        setXScale(1);
      }
    };
    manageSize();
    window.addEventListener("resize", manageSize);
    return () => window.removeEventListener("resize", manageSize);
  }, [minWidth]);

  return (
    <Header ref={header} xScale={xScale} margin = {margin}>
      {children}
    </Header>
  );
};
const Header = styled.h1`
  margin: ${({margin})=>margin&&margin};
  text-align: center;
  white-space: nowrap;
  width: fit-content;
  transform-origin: left;
  transform: scaleX(${({ xScale }) => xScale});
`;
