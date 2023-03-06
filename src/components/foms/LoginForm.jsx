import React from "react";
import { useState } from "react";
import { EmailValidator, PasswordValidator } from "./RegexValidation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [err,setErr] = useState("")
  const handleSbmit = (e) => {
    e.preventDefault(); 
    if(EmailValidator(!email)) {
      return  setErr("Enter Validated Email ID") 
    } else if(PasswordValidator(!password)) {
      return setErr ("Enter Validated Email" )
    } else{
      alert('Login Success') 
    }
  };
  return (
    <div>
      <form onSubmit = {handleSbmit}>
        <label className="App">Login</label> <br />
        <label htmlFor="email">
          Email :
          <input
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          {" "}
          Password :
          <input
            placeholder="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
         { err.length > 0 && <p>{err}</p> }
        <button type="submit">Submit</button>
        <br /> <br />
      </form>
    </div>
  );
};

export default LoginForm;
