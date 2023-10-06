import React, { useState } from "react";
import Playlist from "./Playlist";
import SkeletonSidebar from "../Skeleton/SkeletonSidebar";
import * as S from "./StyledSidebar";
import { useNavigate } from "react-router-dom";

function Sidebar({ sideBarCards, toGoOutButtonClick }) {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  setTimeout(() => {
    setIsVisible(true);
  }, 5000);

  let cardsItems = sideBarCards.map((card) =>
    isVisible ? (
      <Playlist key={card.id} src={card.src} id={card.id} />
    ) : (
      <SkeletonSidebar key={card.id} />
    )
  );

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Pokolyavina Vlada</S.SidebarPersonalName>
        <S.SidebarIcon
          onClick={() => {
            toGoOutButtonClick();
            navigate("login", { replace: false });
          }}
        >
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>{cardsItems}</S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}

export default Sidebar;
