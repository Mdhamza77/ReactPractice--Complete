import React, { useState } from 'react';
import Drinks from './Drinks';
import Task1 from './task1';
import Task2 from './task2';

const PIndex = () => {  
    const [name , setName] = useState("")
    return (
        <div>
            <Task1 name ="Props Example Class Components" />
            <Task2/>   
            <input onChange={(e) => setName(e.target.value)} placeholder='Drinks Tea or Coffee'  />
            <Drinks name={name}/>
        </div>
    );
}

export default PIndex;
