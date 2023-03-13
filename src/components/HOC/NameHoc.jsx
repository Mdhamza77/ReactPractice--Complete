import React from 'react';

const NameHoc = ({name , age}) => {
    return <p>Hello My Name : {name} is age {age}</p>
}

const hoc = (Wrapped) => {
    return class NameHoc extends React.Component {
        render() {
            return  <Wrapped name="Muhammed Hamza"  age="22"/>
        }
    }
    
 
}

export const NewComponent = hoc(NameHoc)
export default NameHoc;
