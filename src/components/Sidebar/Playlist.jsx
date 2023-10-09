import React from "react";
import * as S from "./StyledPlaylist"


function Playlist({ src, id }) {
  return (
    <S.SidebarItem>
      <S.SidebarLink to={`/category/${id}`}>
        <S.SidebarImg src={src} alt="day's playlist" />
      </S.SidebarLink>
    </S.SidebarItem>
  );
}

export default Playlist;
