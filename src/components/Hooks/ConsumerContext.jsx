import React, { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const Email = createContext(undefined) 

const ConsumerContext = () => {
    const [email] = useState({
        email : "mmohammed333@gmail.com" ,
        password : "Mohammed786"
    })
    return (
            <Email.Provider value={email}>
           <Display value={email} />  
           </Email.Provider>         
        
    );
}


const Display = ({children}) => {
    const value =useContext(Email)

 return   <div>
    Displaying The Email "{value.email}"  <br/>
    Displaying The Password "{value.password}"
    </div> 
   
}

export default ConsumerContext;
