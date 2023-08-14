import "./Demo.css";
import React, { useState } from "react";
function Demo() {
  const [num, setNum] = useState(0);

  const add = () => setNum(num + 1);
  const sub = () => setNum(num - 1);

  let square = null;
  if (num === 0) {
    square = <div id={"square1"}></div>;
  }
  if (num === 1) {
    square = <div id={"square2"}></div>;
  }
  console.log(num);
  console.log(square);
  return (
    <>
      {square}
      <button onClick={add}> + </button>
      <button onClick={sub}> - </button>
    </>
  );
}

export default Demo;
