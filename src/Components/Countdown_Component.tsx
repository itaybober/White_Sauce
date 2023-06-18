import { useState, useEffect } from 'react';
import Button from "@mui/material/Button";

interface CountdownProps {
    timerLimit?: number;
}

export default function Countdown_Component({ timerLimit = 60 }: CountdownProps) {
    const [timeRemaining, setTimeRemaining] = useState(timerLimit);
    const [timerStarted, setTimerStarted] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (timerStarted && timeRemaining > 0) {
            timer = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);
        } else {
            clearInterval(timer!); // Stop the timer when timerStarted is false or timeRemaining reaches 0
        }
        return () => clearInterval(timer!);
    }, [timerStarted, timeRemaining]);

    const toggleTimer = () => {
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
                {timerStarted ? "Stop Timer" : "Start Timer"} {/* Change button text based on timer state */}
            </Button>{" "}
            {timerStarted && (
                <span style={timeStyle} onClick={toggleTimer}>
                    {formatTime(timeRemaining)}
                </span>
            )}
        </>
    );
}
