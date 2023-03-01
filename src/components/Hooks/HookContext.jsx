import React , {createContext , useContext } from 'react';
import { useState } from 'react';

const Data = createContext() 


const HookContext = () => {
    const [user] = useState("Muhammed N")
    return (
        <div>
            <Data.Provider value={user}>
                <p>User Name {user}</p>
                <Cop/>
            </Data.Provider>
           
        </div>
    );
}


const Cop = () => {
    const data = useContext(Data) ;
    return (
        <div>
            <p>
               `Vanakam Da Maple {data} From Context Hooks `
            </p>
        </div>
    )
}
export default HookContext;
