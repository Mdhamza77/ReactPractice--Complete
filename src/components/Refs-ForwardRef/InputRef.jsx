import React from 'react';
import { createRef } from 'react';

const ref= createRef() 

const focus = () => {
    ref.current.focus();
}

const InputRef = () => {
    return (
        <div>
            <input placeholder='My Input' ref={ref}></input>
            <button onClick={focus}>Focus</button>
        </div>
    );
}

export default InputRef;
