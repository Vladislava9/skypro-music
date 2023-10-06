import React from "react";
import MenuList from "./MenuList";
import { useState } from "react";
import * as S from "./StyledNavMenu"

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  let burger = isOpen ? <MenuList /> : null;

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NuvBurger onClick={toggleOpen}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NuvBurger>
      <S.NavMenu>{burger}</S.NavMenu>
    </S.MainNav>
  );
}

export default NavMenu;
