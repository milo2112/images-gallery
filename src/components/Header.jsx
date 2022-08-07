import React from "react"
import logo from '../logo.svg'

const Header = ({title}) => {
    return (<div className="divHeaderTitle"><hr></hr><strong><p className="headerTitle">{title}  <img src={logo} className="App-logo" alt="logo" /></p></strong><hr></hr></div>)
}

export default Header
