import React, { useState } from "react";
import Volume from "./Volume";
import SkeletonPlayTrack from "../Skeleton/SkeletonPlayTrack";
import TrackPlay from "./TrackPlay";
import {
  Bar,
  BarContent,
  BarPlayer,
  BarPlayerBlock,
  BarPlayerProgress,
  LikeWrapper,
  NextSvg,
  PlaySvg,
  PlayerButtonNext,
  PlayerButtonPlay,
  PlayerButtonPrev,
  PlayerButtonRepeat,
  PlayerButtonShuffle,
  PlayerControls,
  RepeatSvg,
  ShuffleSvg,
  TrackDislikeButton,
  TrackDislikeButtonSvg,
  TrackLikeButton,
  TrackLikeButtonSvg,
  TrackPlayWrapper,
} from "./StyledAudioPlayer";


function AudioPlayer(props) {
  const [isVisible, setIsVisible] = useState(false);

  setTimeout(() => {
    setIsVisible(true);
  }, 5000);

  let trackPlayItem = isVisible ? <TrackPlay dataTrack={props.dataTrack}/> : <SkeletonPlayTrack />;

  return (
    <Bar>
      <BarContent>
        <BarPlayerProgress />
        <BarPlayerBlock>
          <BarPlayer>
            <PlayerControls>
              <PlayerButtonPrev>
                <PlaySvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </PlaySvg>
              </PlayerButtonPrev>
              <PlayerButtonPlay>
                <PlaySvg alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </PlaySvg>
              </PlayerButtonPlay>
              <PlayerButtonNext>
                <NextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </NextSvg>
              </PlayerButtonNext>
              <PlayerButtonRepeat>
                <RepeatSvg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </RepeatSvg>
              </PlayerButtonRepeat>
              <PlayerButtonShuffle>
                <ShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </ShuffleSvg>
              </PlayerButtonShuffle>
            </PlayerControls>

            <TrackPlayWrapper>
              {trackPlayItem}
              <LikeWrapper>
                <TrackLikeButton>
                  <TrackLikeButtonSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </TrackLikeButtonSvg>
                </TrackLikeButton>
                <TrackDislikeButton>
                  <TrackDislikeButtonSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </TrackDislikeButtonSvg>
                </TrackDislikeButton>
              </LikeWrapper>
            </TrackPlayWrapper>
          </BarPlayer>
          <Volume />
        </BarPlayerBlock>
      </BarContent>
    </Bar>
  );
}
export default AudioPlayer;
