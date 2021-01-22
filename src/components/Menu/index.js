import React from 'react'
import { Link } from 'gatsby'
import './index.scss'

const Menu = () => {
    return (
        <nav className="menu">
            <div className="menu__links">
                <div className="link link--about">
                    <Link to='/about/'>About</Link>
                </div>
                <div className="link link--movies">
                    <Link to='/about/'>Movies</Link>
                </div>
                <div className="link link--characters">
                    <Link to='/about/'>Characters</Link>
                </div>
                <div className="link link--shop">
                    <Link to='/about/'>Shop</Link>
                </div>
            </div>
        </nav>
    );
}

export default Menu;