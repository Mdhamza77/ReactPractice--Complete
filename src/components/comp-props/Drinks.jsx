import React from "react";

const Drinks = ({ name }) => {
  let part, caffine;
  if (name == "tea") {
    part = "leaf";
    caffine = "15-20 Mg/Cup";
  } else if ((name = "coffee")) {
    part = "seed";
    caffine = "20-30 Mg/Cup";
  } else {
    return null 
  }
  return (
    <div> 
        
        <h1>{name}</h1>
      <dl>
         <dt>Part of Drinks</dt>
         <dd>{part}</dd>
         <dt>Caffine Level in drink</dt>
         <dd>{caffine}</dd>
      </dl>
    </div>
  );
};

export default Drinks;
