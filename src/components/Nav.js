import "./Nav.css"
import React from 'react'
import Logo from "./Logo"
import NavItems from "./NavItems"
import LogOut from "./LogOut"

const Nav = () => {
  return (

    <div className="nav">
      <div className="nav-wrapper">
        <div className="left-side">
          <Logo></Logo>
          <NavItems></NavItems>
        </div>
        <div className="right-side">
          <LogOut></LogOut>
        </div>
      </div>

    </div>

  )
}

export default Nav