import React from "react";
import * as S from "./StyledTrackPlay";

function TrackPlay({dataTrack}) {  
  return (
    <S.TrackPlayContain>
      <S.TrackPlayImage>
        <S.TrackPlaySvg alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </S.TrackPlaySvg>
      </S.TrackPlayImage>
      <S.TrackPlayAuthor>
        <S.TrackPlayAuthorLink href="http://">{dataTrack.name !== "-"
        ? `${dataTrack.name.slice(0, 6)} . . .`
        : " -"}</S.TrackPlayAuthorLink>
      </S.TrackPlayAuthor>
      <S.TrackPlayAlbum>
        <S.TrackPlayAlbumLink href="http://">{dataTrack.author !== "-"
        ? `${dataTrack.author.slice(0, 3)} . . .`
        : " -"}</S.TrackPlayAlbumLink>
      </S.TrackPlayAlbum>
    </S.TrackPlayContain>



  );
}

export default TrackPlay;
