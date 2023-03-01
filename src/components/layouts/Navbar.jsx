import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/comp-props' >Component and Props</Link>


            </nav>
        </div>
    );
}

export default Navbar;
