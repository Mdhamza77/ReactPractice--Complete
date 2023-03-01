import React from 'react';
import Greetings from '../conditonal-rendering/greetings';
import OnSubmit from './onSubmit';
import Toggle from './Toggle';

const EIndex = () => {
    return (
        <div>
            <OnSubmit/>
            <Toggle/>
            <Greetings isUserLoggedin={true}/>
        
        </div>
    );
}

export default EIndex;
