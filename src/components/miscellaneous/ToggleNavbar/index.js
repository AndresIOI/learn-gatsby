import React, { useState } from 'react'
import './index.scss'

const ToggleNavbar = () => {

    const [open, setOpen] = useState(false);

    const showMenu = () => {
        setOpen(!open);
    }

    return (
        <div className={`toggle-button ${ open ? `toggle-button--open` : `toggle-button--close`}`} onClick={showMenu}> 
            <div></div>
        </div>
    );
}

export default ToggleNavbar;