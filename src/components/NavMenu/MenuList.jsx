import React from "react";
import * as S from "./StyledMenuList"

function MenuList() {
  return (
    <S.MenuList>
      <S.MenuItem>
        <S.MenuLink to="/">
          Главное
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink to="/playlist">
          Мой плейлист
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink to="/login">
          Войти
        </S.MenuLink>
      </S.MenuItem>
    </S.MenuList>
  );
}

export default MenuList;
