import React from 'react';

const HoverCounter = ({ count, handleEvent }) => {
    return (
        <div>
            <h2 onMouseOver={handleEvent}>Hovered {count} times</h2>
        </div>
    )
}

export default HoverCounter;