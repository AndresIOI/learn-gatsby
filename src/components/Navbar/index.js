import React from 'react'
import logo from '../../images/logo_white.png'
import './index.scss'

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__container">
                <div className="link link--about">
                    <p>About</p>
                </div>
                <div className="link link--movies">
                    <p>Movies</p>
                </div>
                <div className="link link--characters">
                    <p>Characters</p>
                </div>
                <div className="link link--shop">
                    <p>Shop</p>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;