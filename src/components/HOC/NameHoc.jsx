import React from 'react';

const NameHoc = ({name}) => {
    return <p>Hello {name}</p>
}

const hoc = (Wrapped) => {
    return class NameHoc extends React.Component {
        render() {
            return  <Wrapped name="King Maker"  />
        }
    }
    
 
}

export const NewComponent = hoc(NameHoc)
export default NameHoc;
