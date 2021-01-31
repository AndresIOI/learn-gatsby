import React, { useState } from 'react'
import { Link } from 'gatsby'
import './index.scss'

const ToggleNavbar = () => {

    const [open, setOpen] = useState(false);

    const showMenu = () => {
        setOpen(!open);
    }

    return (
        <div className="toggle-navbar">
            <div className={`toggle-button ${ open ? `toggle-button--open` : `toggle-button--close`}`} onClick={showMenu}> 
                <div></div>
            </div>
            <ul className={`navbar-responsive ${ open ? `navbar-responsive--open` : `navbar-responsive--close`}`}>
                <li className="navbar-responsive__link">
                    <Link to='/about'>About</Link>
                </li>
                <li className="navbar-responsive__link">
                    <Link to='/about'>Movies</Link>
                </li>
                <li className="navbar-responsive__link">
                    <Link to='/about'>Characters</Link>
                </li>
                <li className="navbar-responsive__link">
                    <Link to='/about'>Shop</Link>
                </li>
            </ul>
        </div>
    );
}

export default ToggleNavbar;