import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [count , setCount] = useState(0) 

    const handleIncrement = () => setCount( prev => prev + 1 )
     return (
        <div>
            Lifting State up 
            <Count count={count} />
            <CounterButton count={count} handleIncrement={handleIncrement} />
        </div>
    );
}


const CounterButton = ({count , handleIncrement}) => {
  return  <button onClick={handleIncrement}>Click Me {count}</button>
}

const Count = ({count}) => {
  return <h3>Counter No : {count}</h3>
}



export default Counter;
