import React from 'react';

// @ts-ignore
function Circle({ color, radius = 50, x, y }) {

    return (
        <div
            style={{
                width: radius,
                height: radius,
                borderRadius: radius,
                backgroundColor: color,
                position: 'absolute',
                top: y + 'px',
                left: x + 'px',
            }}
        />
    );
}

export default Circle;
