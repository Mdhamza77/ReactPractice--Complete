import React from 'react';
import { forwardRef } from 'react';
import { useRef } from 'react';


const TextInput = forwardRef((props,ref) => {
   const {label , ...otherprops} = props
  return (
    <>
    <label>
      {label}
     <input ref={ref} {...otherprops} />
     </label>
    </>
  )
  
}  )

const ForwardRef = () => {

  const Ref  = useRef() ;

  const handleRef = () => {
    return Ref.current.focus();
  }
  return (
    <div>
       Forwarding Refs 
      <TextInput ref={Ref}  label =" Enter Input : "  />
      <button onClick={handleRef} type='submit' >Focus</button>
    </div>
  );
}

export default ForwardRef;
