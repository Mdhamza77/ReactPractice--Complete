import React, { useState } from 'react';

const OnSubmit = () => {
    
    const [count, setCount] = useState(0)
    const handleSubmit = (e) => {
           e.preventDefault();
           setCount(() => (count + 1))
           alert(`button Click Times ${count}`)
    }
    return (
        <div>
            <p>Clickable Event Handler</p>
            <button onClick={handleSubmit}>Popup Msg</button>
            <hr/>
        </div>
    );
}

export default OnSubmit;
