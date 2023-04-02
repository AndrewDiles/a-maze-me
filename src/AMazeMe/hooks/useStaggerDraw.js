import { useState, useEffect } from "react";

const useStaggerDraw = (draw, setDraw) => {
  const [staggerDraw, setStaggerDraw] = useState(false);

  useEffect(() => {
    if (!staggerDraw) return;
    const timeout = setTimeout(() => {
      setDraw(Date.now())
      setStaggerDraw(false);
    }, 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [draw, staggerDraw]);

  return setStaggerDraw;
};

export default useStaggerDraw;
