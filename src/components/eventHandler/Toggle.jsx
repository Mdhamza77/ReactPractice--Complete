import React from 'react';
import { useState } from 'react';

const Toggle = () => {
    const [toggle ,isToggle] = useState(true) 

    const handle = (e) => {
         e.preventDefault() 
         isToggle ((prevState) => !prevState)
    }
    return (
        <div>
            <button onClick={handle}>
                Toggle {toggle ? 'ON' : 'OFF'}
            </button>
            <hr/>
        </div>
    );
}

export default Toggle;
