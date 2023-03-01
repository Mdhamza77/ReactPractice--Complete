import React from 'react';

const formatData = (user) => {
   return  user.firstName + ' ' + user.lastName
}

const user = {
    firstName : "Welcome To Jsx Objects " ,
    lastName : "Practice Code"
}
const Task2 = () => {
    return (
        <div>
            
            <h1>Embeding Expression : {formatData(user)}!</h1>
            <hr/>
        </div>
    );
}

export default Task2;
