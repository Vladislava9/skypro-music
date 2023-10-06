import React, { useState } from "react";

import SkeletonTrack from "../Skeleton/SkeletonTrack";
import Filter from "../Filter/Filter";
import Track from "./Track";
import * as S from "./StyledTrackList"

function TrackList() {
  const [isVisible, setIsVisible] = useState(false);

  setTimeout(() => {
    setIsVisible(true);
  }, 5000);

  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </S.CenterblockSearch>
      <S.CenterblockTitle>Треки</S.CenterblockTitle>
      <Filter />
      <S.Content>
            <S.Title>
                <S.Column width={447}>Трек</S.Column>
                <S.Column width={321}>ИСПОЛНИТЕЛЬ</S.Column>
                <S.Column width={245}>АЛЬБОМ</S.Column>
                <S.Column width={60} align={"end"}>
                    <S.TitleSvg alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                    </S.TitleSvg>
                </S.Column>
            </S.Title>
        <S.ContentPlaylist>
          {isVisible ? <Track /> : <SkeletonTrack />}
        </S.ContentPlaylist>
      </S.Content>
    </S.MainCenterblock>
  );
}

export default TrackList;
