import React from 'react';

import {NavLink} from 'react-router-dom';
import Emoji from './Emoji';


const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <NavLink to='/about' className='nav-link'><Emoji label='smiley' symbol='🙂'/> About</NavLink>
            <NavLink to='/work' className='nav-link'><Emoji label='computer' symbol='💻'/> Work</NavLink>
            <NavLink to='/contact' className='nav-link'a><Emoji label='chat-bubble' symbol='💬' /> Contact</NavLink>
        </nav>
    )
}

export default NavBar