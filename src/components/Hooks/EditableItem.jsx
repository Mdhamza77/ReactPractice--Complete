import React from "react";
import { useState } from "react";
import useToggler from "./useToggler";
const EditableItem = ({ label, initialState }) => {
  const [value, setValue] = useState(initialState);
  const [toggler, setIsToggler] = useToggler(false);

  
  return (
    <div>
      {toggler ? (
        <label>
          {label}
          <input
           placeholder="Custom Hooks"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
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
