import { useState } from "react";

 

const AddToList = ({ setList }) => {

  const [value, setValue] = useState("");

 

  const submitHandler = (e) => {

    e.preventDefault();

    setList((prevList) => {

      return [...prevList];

    });

 

    setValue("");

  };

 

  return (

    <div>

      <form onSubmit={submitHandler}>

        <input

          type="text"

          value={value}

          onChange={(e) => {

            setValue(e.target.value);

          }}

        />

        <button>Add</button>

      </form>

    </div>

  );

};

 

export default AddToList;