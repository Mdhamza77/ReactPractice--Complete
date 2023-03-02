import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useToggler = (initialState) => {
    const [toggler ,setIsToggler] = useState(initialState)

     const Toggler = useCallback(()=> setIsToggler(!toggler))
    
    return [toggler,Toggler]
}

export default useToggler;
