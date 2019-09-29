import { useSpring } from "react-spring";

const useClickPower = () => {
  const [props, set] = useSpring(() => ({
    opacity: 0.3,
    xys: [0.1, 0, 0]
  }));
  const args = props.xys.payload;
  const handleClick = e => {
    set({ xys: [args[0], args[1], 3], opacity: 1 });
    setTimeout(() => {
      set({ xys: [args[0], args[1], 0.1], opacity: 0 });
    }, 500);
  };

  const handleMouseOver = e => {
    set({ xys: [e.clientX - 100, e.clientY - 100, args[2]] });
  };
  const style = {
    opacity: props.opacity,
    transform: props.xys.interpolate(
      (x, y, s) => `translate3d(${x}px,${y}px, 0px) scale(${s})`
    )
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
