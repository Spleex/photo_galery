import React from 'react';

import './Navbar.css'

function Navbar ()
{
    return(
        <div className="navbar">
            <a href="/" className="navbar-item">Gallery</a>
            <a href="/about" className="navbar-item">About</a>
            <a href="/account" className="navbar-item">Account</a>
            <a href="/contact" className="navbar-item">Contact</a>
        </div>
        
    )
}

export default Navbar;