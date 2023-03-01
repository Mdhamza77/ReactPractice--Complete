import React, { useState } from 'react';
import ListCount from './ListCount';
import ListShow from './ListShow';
import AddToList from './AddToList';
const ListApp = () => {
    const [list , setList] = useState([])

    return (
        <div>
            <ListCount list={list}/>
            <ListShow list={list} />
            <AddToList list={list} setList={setList}/>
        </div>
    );
}

export default ListApp;
