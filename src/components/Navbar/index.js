import React from 'react'
import './index.scss'

const Navbar = () => {
    return (
        <nav className="nav">
            <h1 className="nav__logo">Ghostbusters</h1>
            <div className="nav__links">
                <ul className="links">
                    <li className="links__link--active">About</li>
                    <li className="links__link">Movies</li>
                    <li className="links__link">Characters</li>
                    <li className="links__link">Shop</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;