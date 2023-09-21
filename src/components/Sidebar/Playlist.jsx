import React from "react";

function Playlist({ src }) {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href="#">
        <img className="sidebar__img" src={src} alt="day's playlist" />
      </a>
    </div>
  );
}

export default Playlist;
