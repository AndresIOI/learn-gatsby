import React from "react"
import "normalize.css"
import "./index.scss"

const Layout = ({children}) => {
    return(
        <main>{children}</main>
    )
}

export default Layout;