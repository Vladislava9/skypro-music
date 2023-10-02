import React from "react";
import * as S from "./StyledPlaylist"


function Playlist({ src }) {
  return (
    <S.SidebarItem>
      <S.SidebarLink href="#">
        <S.SidebarImg src={src} alt="day's playlist" />
      </S.SidebarLink>
    </S.SidebarItem>
  );
}

export default Playlist;
