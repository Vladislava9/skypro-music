import React from "react";
import * as S from "./StyledTrack";

function Track({ song, onSaveDuration, onClickTrack }) {
  const { id, album, name, author, logo, duration_in_seconds } = song;

  return (
    <S.PlaylistItem>
      <S.PlaylistTrack
        onClick={(e) => {
          e.preventDefault();
          onClickTrack(id);
        }}
      >
        <S.TrackTitle>
          <S.TrackTitleImage>
            {logo ? (
              logo
            ) : (
              <S.TrackTitleSvg>
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>
            )}
          </S.TrackTitleImage>
          <S.TrackTitleLink href="http://">
            <S.TrackTitleSpan>{name}</S.TrackTitleSpan>
          </S.TrackTitleLink>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink href="http://">{author}</S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href="http://">{album}</S.TrackAlbumLink>
        </S.TrackAlbum>
        <S.TrackTime>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>
            {onSaveDuration(duration_in_seconds)}
          </S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}

export default Track;
