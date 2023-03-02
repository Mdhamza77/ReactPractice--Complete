import React from "react";
import { useState } from "react";
import useToggler from "./useToggler";
const EditableItem = ({ label, initialState }) => {
  const [value, setValue] = useState(initialState);
  const [toggler, setIsToggler] = useState(false);

  
  return (
    <div>
      {value ? (
        <label>
          {label}
          <input
            type="text"
            value={value}
            onClick={(e) => setValue(e.target.value)}
          />
        </label>
      ) : (
        <span>{value}</span>
      )}
      <button 
       onClick={setIsToggler}
      > { toggler ? 'Done' : 'Edit'} </button>
    </div>
  );
};

export default EditableItem;
