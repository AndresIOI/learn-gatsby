import React from "react"
import "normalize.css"
import "./index.scss"

const Layout = ({ children }) => {
    return (
        <div>
            <main>{children}</main>
        </div>
    )
}

export default Layout;