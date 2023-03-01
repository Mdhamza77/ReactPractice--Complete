import React from 'react';
import {Route , Routes} from 'react-router-dom'
import PIndex from '../comp-props';
const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/comp-prop' element={<PIndex/>}></Route>
            </Routes>
        </div>
    );
}

export default Routing;
