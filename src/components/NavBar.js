import React from 'react';

import {NavLink} from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/work'>Work</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>
    )
}

export default NavBar