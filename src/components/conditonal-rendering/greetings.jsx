import React from "react";

const Usergreet = (props) => {
  return (
    <div>
      <h1>Welcome Back</h1>
      <hr/>
    </div>
  );
};

const Guestgreet = (props) => {
  return (
    <div>
      <h1>Please Sign up</h1>
      <hr/>
    </div>
  );
};

const Greetings = (props) => {
  const isUserLoggedin = props.isUserLoggedin;
  if(isUserLoggedin) {
    return <Usergreet/> 
  }
    return  <Guestgreet/>
   
};


export default Greetings;
