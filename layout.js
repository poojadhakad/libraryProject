import React from "react"
import "../styles/theme.scss" 
import PropTypes from "prop-types"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./navbar"
import"../component/styling.scss"
const Layout = ({children}) => {
    return (<>
     <Navbar/>
    
    <div className="container">
        {children}
    </div>
    </>)
}
Layout.propTypes ={
    children: PropTypes.node.isRequired,
}
export default Layout