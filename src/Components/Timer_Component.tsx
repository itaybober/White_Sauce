import { useState, useEffect } from 'react';
import Button from "@mui/material/Button";

interface TimerProps {
    timerLimit?: number;
    isPictureUploaded: boolean;
    onTimerStopped: (stopTime: number | null, timeElapsed: number) => void; // Callback function
}

export default function Timer_Component({ timerLimit = 15, isPictureUploaded, onTimerStopped }: TimerProps) {
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [timerStarted, setTimerStarted] = useState(false);
    const [stopTime, setStopTime] = useState<number | null>(null);
    const [showStartButton, setShowStartButton] = useState(true); // State to control the start button visibility
    const [countdown, setCountdown] = useState(15); // Countdown value
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (timerStarted) {
            timer = setInterval(() => {
                setTimeElapsed((prevTime) => prevTime + 1);
                setIsTimerRunning(true);
            }, 1000);
            if (isPictureUploaded) {
                clearInterval(timer!);
                setTimeElapsed(stopTime !== null ? stopTime : timeElapsed);
                onTimerStopped(stopTime, timeElapsed);
            }
        } else {
            clearInterval(timer!); // Stop the timer when timerStarted is false
            if (!isTimerRunning) {
                onTimerStopped(stopTime, timeElapsed);
            }
        }
        return () => clearInterval(timer!);
    }, [timerStarted, isPictureUploaded, onTimerStopped, isTimerRunning, timeElapsed, stopTime]);

    useEffect(() => {
        if (countdown > 0 && showStartButton) {
            // Start the countdown timer
            const countdownTimer = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);

            // Clear the countdown timer after 10 seconds
            setTimeout(() => {
                clearInterval(countdownTimer);
                setShowStartButton(false); // Hide the start button after the countdown
                setTimerStarted(true); // Start the timer automatically after the countdown
            }, 10000);
        }
    }, [countdown, showStartButton]);

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
                    onClick={() => setShowStartButton(false)}
                    style={{ fontSize: "1.5rem", color: "#D1B067"}}
                >
                    Get ready! As soon as the timer appears you start
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
