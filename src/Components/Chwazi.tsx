import "./Chwazi.css";
import Circle from "../Achsaf_Folder/Circle";
import React, { useState } from "react";

// @ts-ignore
function Chwazi({ radius = 100, setNumFingers }) {
  const [touches, setTouches] = useState<Touch[]>([]);
  const [scrollY, setScrollY] = useState(0);

  // @ts-ignore
  function handleTouchStart(event): void {
    setTouches(event.touches);
    setScrollY(window.scrollY);
    setNumFingers(touches.length + 1);
  }

  // @ts-ignore
  function handleTouchEnd(event) {
    setTouches(event.touches);
    setScrollY(window.scrollY);
    setNumFingers(touches.length - 1);
  }

  // @ts-ignore
  function handleTouchMove(event) {
    setTouches(event.touches);
    setScrollY(window.scrollY);
    setNumFingers(touches.length);
  }

  // @ts-ignore
  const renderedTouches = Array.from(touches).map(({ clientX, clientY }) => {
    const xValue = clientX - radius / 2;
    const yValue = scrollY + clientY - radius / 2;

    return <Circle color={"#D1B067"} radius={radius} x={xValue} y={yValue} />;
  });

  return (
    <div
      id={"frame"}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      {renderedTouches}
    </div>
  );
}

export default Chwazi;
