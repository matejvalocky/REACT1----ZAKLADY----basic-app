import "./Nav.css"
import React from 'react'
import Logo from "./Logo"
import NavItems from "./NavItems"
import LogOut from "./LogOut"

const Nav = () => {
  return (
    
        <div className="nav-wrapper">
            <Logo></Logo>
            <NavItems></NavItems>
            <LogOut></LogOut>
        </div>
    
  )
}

export default Nav