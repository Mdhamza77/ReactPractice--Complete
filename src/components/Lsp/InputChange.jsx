import React, { useState } from 'react';

const InputChange = () => {
    const [text , setText] = useState(" ") 

    return (
        <div>   Lifting State Up   <br/><br/>
            <Input value={text} onChange={(e) => setText(e.target.value)} label='First Input Text'  />
            <Input value={text} onChange={(e) => setText(e.target.value)} label='Second Input Text' />
        </div>
    );
}

const Input = ({label , value , onChange}) => {
     return (
        <div>
           <label> 
            {label} 
            <input value={value} onChange={onChange}  placeholder= 'Lifting State up' />
           </label>
        </div>
    )

}

export default InputChange;
