import React, { useEffect, useState } from "react";

import SkeletonTrack from "../Skeleton/SkeletonTrack";
import Filter from "../Filter/Filter";
import Track from "./Track";
import * as S from "./StyledTrackList";
import trackApi from "../../api/trackApi";

function TrackList(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [track, setTrack] = useState([]);

  useEffect(() => {
    trackApi.getAllTracks(setTrack).then(() => {
      setTimeout(() => {
        setIsVisible(true);
      }, 2000);
    });
  }, []);

  function convertSecondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
  }

  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
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
          {track.map((song) => {
            return isVisible ? (
              <Track
                key={song.id}
                song={song}
                onSaveDuration={convertSecondsToMinutes}
                onClickTrack={props.onClickTrack}
              />
            ) : (
              <SkeletonTrack key={song.id}/>
            );
          })}
        </S.ContentPlaylist>
      </S.Content>
    </S.MainCenterblock>
  );
}

export default TrackList;
