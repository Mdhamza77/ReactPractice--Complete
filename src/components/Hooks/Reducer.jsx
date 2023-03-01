import React from 'react';
import { useReducer } from 'react';

// InitialState Count 
const initialCount = {
    count : 0
}

// Reducer Function
const reducer = (state,action) => {
   switch (action.type) {
    case 'Inc' : 
       return {count :  state.count + 1} 
       
    case 'Dec' : 
       return {count : state.count - 1}
    default : 
        throw new Error(); 


   }
}

const Reducer = () => {
    const [state,dispatch] = useReducer(reducer ,initialCount)
    return (
        <div>
           Reducer Hook Count : {state.count}
            <button onClick={()=>dispatch({type : 'Dec'})}>-</button>
            <button onClick={()=>dispatch({type : 'Inc'})}>+</button>
        </div>
    );
}

export default Reducer;
