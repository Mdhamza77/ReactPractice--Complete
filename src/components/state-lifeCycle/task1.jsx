import React from 'react';
import { useState } from 'react';

const Task1 = () => {
    const [data] = useState(new Date())
    return (
        <div>
            <hr/>
            <p>State and LifeCycle Methods : {data.toLocaleDateString()}</p>
            <hr/>
        </div>
    );
}

export default Task1;
