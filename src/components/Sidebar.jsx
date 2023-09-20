import React, { useState } from "react";
import Playlist from "./Playlist";
import SkeletonSidebar from "./skeleton/SkeletonSidebar";

function Sidebar({cards}) {
  const[visible, setVisible] = useState(false);

  setTimeout(() => {
    setVisible(true)
  }, 5000)
  
  let cardsItems = cards.map((card) => visible ? <Playlist key={card.id} src={card.src}/> : <SkeletonSidebar/>)
  
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Pokolyavina Vlada</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list"> 
        {cardsItems}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
