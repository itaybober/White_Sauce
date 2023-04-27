import { useState, useEffect } from 'react';
import Button from "@mui/material/Button";

export function Timer_Component() {
    const [timeLeft, setTimeLeft] = useState(15);
    const [timerStarted, setTimerStarted] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (timerStarted && timeLeft > 0) {
            timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        }
        return () => clearTimeout(timer!);
    }, [timerStarted, timeLeft]);

    const startTimer = () => {
        setTimerStarted((prev) => !prev);
    };

    const formatTime = (timeInSeconds: number) => {
        const minutes = Math.floor(timeInSeconds / 60)
            .toString()
            .padStart(2, '0');
        const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                onClick={startTimer}
                disabled={timerStarted}
            >
                Start Timer
            </Button>{" "}
            {timerStarted && (
                <span style={{ cursor: "pointer" }} onClick={startTimer}>
                    {formatTime(timeLeft)}
                </span>
            )}
        </>
    );
}
