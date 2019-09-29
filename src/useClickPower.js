import React from "react";
import { useSpring } from "react-spring";

const useClickPower = () => {
  const [props, set] = useSpring(() => ({
    opacity: 0.3,
    s: 0.1,
    xy: [0.1, 0]
  }));

  const handleClick = e => {
    set({ s: 0, opacity: 1 });
  };
  const handleMouseOver = e => {
    set({ xy: [e.clientX, e.clientY] });
  };

  const interpolate = () => {
    let translate = props.xy.interpolate(
      (x, y) => `translate3d(${x}px,${y}px, 0px)`
    );
    let scale = props.s.interpolate(i => `scale(${i})`);

    return { ...translate };
  };
  const trans = interpolate();
  const style = {
    opacity: props.opacity,
    transform: trans
  };

  const distEffect = () => {
    return {
      style
    };
  };
  const distEvent = () => {
    return {
      onClick: handleClick,
      onMouseMove: handleMouseOver
    };
  };
  return [distEffect, distEvent];
};
export default useClickPower;
