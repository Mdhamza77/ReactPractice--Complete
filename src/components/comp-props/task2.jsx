import React from 'react';

const Task2 = ({name , isloading}) => {
    return (
        <div>
           <p> {
            isloading ? name : false
            } </p>
        </div>
    );
}


export default Task2;
