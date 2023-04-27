
import "./Chwazi.css";
import Circle from "./Circle";
import React, { useState} from "react";




function Chwazi({radius = 100}) {

    const [xPos, setXPos] = useState(0)
    const [yPos, setYPos] = useState(0)
    const [mouse, setMouseDown] = useState(false)

    const handleMouseUp = () => setMouseDown(false);
    const handleTouchEnd = () => setMouseDown(false);



    // @ts-ignore
    const handleTouchStart = (event) => {
        const clientX = event.touches[0].clientX;
        const clientY = event.touches[0].clientY;
        setXPos(clientX - (radius/2));
        setYPos(clientY - (radius/2));
        setMouseDown(true)
    }

    // @ts-ignore
    const handleMouseDown = (event) => {
        const {clientX,clientY} = event;
        setMouseDown(true)
        setXPos(clientX - (radius/2));
        setYPos(clientY - (radius/2));
        console.log("x: "+clientX, "y: "+clientY);

    }

    // @ts-ignore
    const handleMouseMove = (event) => {
        const {clientX,clientY} = event;
        setXPos(clientX - (radius/2));
        setYPos(clientY - (radius/2));
        console.log("x: "+clientX, "y: "+clientY);
    }

    // @ts-ignore
    const handleTouchMove = (event) => {
        const clientX = event.touches[0].clientX;
        const clientY = event.touches[0].clientY;
        setXPos(clientX - (radius/2));
        setYPos(clientY - (radius/2));
        console.log("x: "+clientX, "y: "+clientY);
    }
    //
    // @ts-ignore
    return (
        <div id={"frame"} onMouseMove={handleMouseMove} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}
             onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove}>
            {//maya edit color
                mouse ? <Circle radius={radius} color={"#90ece4"} x={xPos} y={yPos}/> : null
            }
        </div>
    )
}

export default Chwazi;