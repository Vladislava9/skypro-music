import React from "react";
import MenuList from "./MenuList";
import { useState } from "react";

function NavMenu() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  }
  
  let burger = open ? <MenuList/>: null;

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger" onClick={toggleOpen}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <div className="nav__menu menu">
        {burger}
      </div>
    </nav>
  )
}

export default NavMenu;
