import { useState, useEffect } from 'react';
import Button from "@mui/material/Button";

interface TimerProps {
    timerLimit?: number;
}

export default function Timer_Component({ timerLimit = 15 }: TimerProps) {
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [timerStarted, setTimerStarted] = useState(false);
    const [stopTime, setStopTime] = useState<number | null>(null);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (timerStarted) {
            timer = setInterval(() => {
                setTimeElapsed((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(timer!); // Stop the timer when timerStarted is false
        }
        return () => clearInterval(timer!);
    }, [timerStarted]);

    const toggleTimer = () => {
        if (timerStarted) {
            setStopTime(timeElapsed); // Save the stop time as elapsed time
        }
        setTimerStarted((prev) => !prev);
    };

    const formatTime = (timeInSeconds: number) => {
        const minutes = Math.floor(timeInSeconds / 60)
            .toString()
            .padStart(2, '0');
        const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    const timeStyle = {
        fontSize: timerStarted ? "4rem" : "1rem", // increase font size if timer has started
        cursor: "pointer",
    };

    return (
        <>
            <Button
                variant={timerStarted ? "contained" : "outlined"} // Use "outlined" variant when timer is started
                color={timerStarted ? "primary" : "primary"} // Change button color based on timer state
                onClick={toggleTimer} // Rename onClick handler
            >
                {timerStarted ? "Stop Clock" : "Start Clock"} {/* Change button text based on timer state */}
            </Button>{" "}
            {timerStarted && (
                <span style={timeStyle} onClick={toggleTimer}>
                    {formatTime(timeElapsed)}
                </span>
            )}
            {!timerStarted && stopTime !== null && (
                <span style={timeStyle}>
                    {formatTime(stopTime)}
                </span>
            )}
        </>
    );
}
