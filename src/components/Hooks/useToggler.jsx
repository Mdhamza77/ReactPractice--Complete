import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useToggler = (initialState) => {
    const [toggler ,setIsToggler] = useState(initialState)

     const Toggler = ()=> setIsToggler(!toggler)
     useEffect(() =>{
        Toggler()
     },[Toggler])
    return [toggler,Toggler]
}

export default useToggler;
