
import "./Chwazi.css";
import Circle from "./Circle";
import React, { useState} from "react";



// @ts-ignore

function Chwazi({radius = 100, setNumFingers}) {
    const [touches, setTouches] = useState([]);

    // @ts-ignore
    function handleTouchStart(event) {
        setTouches(event.touches);
        setNumFingers(touches.length + 1)
    }

    // @ts-ignore
    function handleTouchEnd(event) {
        setTouches(event.touches);
        setNumFingers(touches.length - 1)
    }

    // @ts-ignore
    function handleTouchMove(event) {
        setTouches(event.touches);
        setNumFingers(touches.length)
    }

    // @ts-ignore
    const renderedTouches = Array.from(touches).map(({clientX, clientY}) => (
        <Circle color={'blue'} radius={radius} x={clientX - (radius/2)} y={clientY - (radius/2)}/>
    ));

    return (
        <div id={"frame"} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove}>
                {renderedTouches}
        </div>
    );
}

export default Chwazi;