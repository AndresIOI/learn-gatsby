import React from 'react'
import { Link } from 'gatsby'
import ToggleNavbar from '../ToggleNavbar'
import './index.scss'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <div className="navbar__logo"></div>
            </Link>
            <ul className="navbar__links">
                <li className="navbar__links__link link--active">
                    <Link to='/about'>About</Link>
                </li>
                <li className="navbar__links__link">
                    <Link to='/movies'>Movies</Link>
                </li>
                <li className="navbar__links__link">
                    <Link to='/Characters'>Characters</Link>
                </li>
                <li className="navbar__links__link">
                    <Link to='/Shop'>Shop</Link>
                </li>
            </ul>
            <ToggleNavbar />
        </nav>
    )
}

export default Navbar;