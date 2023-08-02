import { useState, useEffect } from 'react';
import Button from "@mui/material/Button";

interface TimerProps {
    timerLimit?: number;
    isPictureUploaded: boolean;
}

export default function Timer_Component({ timerLimit = 15, isPictureUploaded }: TimerProps) {
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [timerStarted, setTimerStarted] = useState(false);
    const [stopTime, setStopTime] = useState<number | null>(null);
    const [showStartButton, setShowStartButton] = useState(true); // State to control the start button visibility

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;

        // Start the countdown timer after 15 seconds
        const countdownTimer = setTimeout(() => {
            setShowStartButton(false);
            setTimerStarted(true);
        }, 15000);

        return () => clearTimeout(countdownTimer);
    }, []);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (timerStarted) {
            timer = setInterval(() => {
                setTimeElapsed((prevTime) => prevTime + 1);
            }, 1000);
            if (isPictureUploaded) {
                clearInterval(timer!);
                setTimeElapsed(stopTime !== null ? stopTime : timeElapsed);
            }
        } else {
            clearInterval(timer!); // Stop the timer when timerStarted is false
        }
        return () => clearInterval(timer!);
    }, [timerStarted, isPictureUploaded]);

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
            {showStartButton ? (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setShowStartButton(false)} // Start the countdown when the button is clicked
                    style={{ fontSize: "1.5rem", color: "#D1B067" }}
                >
                    Get ready! As soon as the counter appears you start
                </Button>
            ) : (
                <>
                    {timerStarted && (
                        <span style={timeStyle}>
                            {formatTime(timeElapsed)}
                        </span>
                    )}
                    {!timerStarted && stopTime !== null && (
                        <span style={timeStyle}>
                            {formatTime(stopTime)}
                        </span>
                    )}
                </>
            )}
        </>
    );
}
