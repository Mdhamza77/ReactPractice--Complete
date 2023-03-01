import React from 'react';
import { useRef } from 'react';

const CustomRef = () => {
    const textInput = useRef(null) 

    const handleClick = () => {
        textInput.current.focus();
    }
     return (
        <div>
            <input ref={textInput} placeholder="Enter UserName" />
            <button onClick={handleClick}>Focus Input</button>
        </div>
    );
}

export default CustomRef;
