
import "./Chwazi.css";
import Circle from "../Achsaf_Folder/Circle";
import React, {useEffect, useRef, useState} from "react";

// @ts-ignore
function Chwazi({radius = 100, setNumFingers }) {
    const [touches, setTouches] = useState<Touch[]>([]);
    const [scrollY, setScrollY] = useState(0);
    const [frameEdges, setFrameEdges] = useState<number[]>([])

    // @ts-ignore
    function handleTouchStart(event): void {
        setTouches(event.touches);
        setScrollY(window.scrollY);
        setNumFingers(touches.length + 1)
    }

    // @ts-ignore
    function handleTouchEnd(event) {

        setTouches(event.touches);
        setScrollY(window.scrollY);
        setNumFingers(touches.length - 1)
    }

    // @ts-ignore
    function handleTouchMove(event) {
        // const newTouches: Touch[] = Array.from(event.touches);
        // const newFilteredTouches: Touch[] = newTouches.filter(touch => true
        //     touch.clientY < frameEdges[0] + scrollY
        //     touch.clientY > frameEdges[1] + scrollY &&
        //     touch.clientX > frameEdges[2]  &&
        //     touch.clientX < frameEdges[3]
        // );
        // console.log(newTouches)
        // console.log(frameEdges[0] - scrollY)
        setTouches(event.touches);
        setScrollY(window.scrollY);
        setNumFingers(touches.length)
    }

    function updateFrameLoc( frame: HTMLDivElement | null ) {
        if (frame === null || frameEdges.length !== 0 )
            return;
        let edge : number[] = []
        edge.push(frame.getBoundingClientRect().top - scrollY)
        edge.push(frame.getBoundingClientRect().bottom - scrollY)
        edge.push(frame.getBoundingClientRect().left)
        edge.push(frame.getBoundingClientRect().right)
        setFrameEdges(edge)
        console.log("frame Edges Updated: " + edge);
    }

    // @ts-ignore
    const renderedTouches = Array.from(touches).map(({clientX, clientY}) => {
        const xValue = clientX - (radius / 2);
        const yValue = scrollY + clientY - (radius / 2);

        return(
            <Circle color={"#D1B067"} radius={radius} x={xValue} y={yValue}/>
        )
    });

    return (
        <div id={"frame"} onTouchStart={handleTouchStart}  onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove}>
                {renderedTouches}
        </div>
    );
}

export default Chwazi;