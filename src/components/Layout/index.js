import React from "react"
import "normalize.css"
import "./index.scss"
import Navbar from '../Navbar'

const Layout = ({ children }) => {
    return (
        <div className="container">
            <Navbar />
            <main>{children}</main>
        </div>
    )
}

export default Layout;