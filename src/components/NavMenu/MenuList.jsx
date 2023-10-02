import React from "react";
import * as S from "./StyledMenuList"

function MenuList() {
  return (
    <S.MenuList>
      <S.MenuItem>
        <S.MenuLink href="#">
          Главное
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink href="#">
          Мой плейлист
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink href="../signin.html">
          Войти
        </S.MenuLink>
      </S.MenuItem>
    </S.MenuList>
  );
}

export default MenuList;
