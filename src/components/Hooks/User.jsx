import React from "react";
import { useState } from "react";

const User = () => {
  const [even, setEven] = useState("");
  const [update, getUpdate] = useState([]);

  const handleEvent = () => {
    getUpdate(even);
  };
  return (
    <div>
      <input type="text" onChange={(e) => setEven(e.target.value)} />
      <p>Update : {update}</p>
      <p>Name : {even}</p>
      <button onClick={handleEvent}>Click</button>
    </div>
  );
};

export default User;
