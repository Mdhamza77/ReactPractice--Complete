import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Age":
      return { name: state.name, age: state.age + 1 };
    case "ChangeName":
      return { name: action.nextname, age: state.age };
  }
};

const initialData = { name: "Olivia Rodrigo", age: 18 };
const AgeReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialData);

  const IncrementAge = () => {
    dispatch({ type: "Age" });
  };

  const ChangeName = (e) => {
    dispatch({
      type: "ChangeName",
      nextname: e.target.value,
    });
  };
  return (
    <div>
      <br /> <hr />
      <input value={state.name} onChange={ChangeName} />
      <button onClick={IncrementAge}>Increment Age</button>
      <p>
        User Name is {state.name} and her Age is {state.age}
      </p>
      <hr />
    </div>
  );
};

export default AgeReducer;
