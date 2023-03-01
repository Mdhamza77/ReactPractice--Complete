import React from 'react';

const Task3 = () => {
    return (
        <div>
            <p>rendering React Element using Date Function </p>
            <p>{new Date().toLocaleDateString()}</p>
            <hr/>
        </div>
    );
}

export default Task3;
