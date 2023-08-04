import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

const Timer_Component: React.FC = () => {
    const [showCountdown, setShowCountdown] = useState(true);
    const [showClock, setShowClock] = useState(false);
    const [count, setCount] = useState(10);
    const [timeElapsed, setTimeElapsed] = useState(0);

    useEffect(() => {
        let countdownInterval: NodeJS.Timeout;
        if (showCountdown) {
            countdownInterval = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);
        }

        return () => clearInterval(countdownInterval);
    }, [showCountdown]);

    useEffect(() => {
        if (count === 0) {
            setShowCountdown(false);
            setShowClock(true);
        }
    }, [count]);

    useEffect(() => {
        let clockInterval: NodeJS.Timeout;

        if (showClock) {
            clockInterval = setInterval(() => {
                setTimeElapsed((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => clearInterval(clockInterval);
    }, [showClock]);

    const formatTime = (timeInSeconds: number) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div>
            {showCountdown ? (
                <Typography variant="h5" color={"primary"}><strong>THE MISSION WILL BEGIN AUTOMATICALLY IN {count} SECONDS</strong></Typography>
            ) : showClock ? (
                <Typography variant={"h4"}><strong>Mission Started!<br></br> {formatTime(timeElapsed)}</strong></Typography>
            ) : null}
        </div>
    );
};

export default Timer_Component;
