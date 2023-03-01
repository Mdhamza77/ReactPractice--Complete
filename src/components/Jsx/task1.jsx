import React from 'react';

const Task1 = (props) => {

        return (
        <div>
            <hr/>
            <p>{props.name} First Task Passing Props</p> 
            <button type='submit'>Submit</button>
            <hr/>
        </div>
    );
}

export default Task1;
