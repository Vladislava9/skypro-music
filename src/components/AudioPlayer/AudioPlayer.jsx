import React, { useState, useRef, useEffect } from "react";
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
  }, 2000);

  let trackPlayItem = isVisible ? (
    <TrackPlay dataTrack={props.dataTrack} />
  ) : (
    <SkeletonPlayTrack />
  );
  console.log(props.dataTrack);

  const audioRef = useRef();
  console.log(props.dataTrack.track_file);

  useEffect(() => {
    console.log(audioRef);
    // audioRef?.current.addEventListener("load", () => {
    //   console.log("hello");
      audioRef?.current.play()
    // })
    // return () => {audioRef?.current.removeEventListener("load", null)}
  }, [audioRef]);

  const [isPlay, setIsPlay] = useState(true);

  const handleStopOrPlay = () => {
    if(isPlay) {
      audioRef?.current.pause()
      setIsPlay(false)
    } else {
      audioRef?.current.play()
      setIsPlay(true)
    }
  }

  //api volume - звук(><), loop (бесконечное проигрование), currentTime (текущее время проигрования)
  //пример audioRef?.current.volume = 0-1
  //useRef не приводит к перерендеру, а useState приводит !!! 

  return (
    <Bar>
      <BarContent>
        <BarPlayerProgress />
        <audio ref={audioRef} src={props.dataTrack.track_file}></audio>
        <BarPlayerBlock>
          <BarPlayer>
            <PlayerControls>
              <PlayerButtonPrev>
                <PlaySvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </PlaySvg>
              </PlayerButtonPrev>
              <PlayerButtonPlay onClick={handleStopOrPlay}>
                {isPlay ? <PlaySvg alt="pause">
                  <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
                </PlaySvg> : <PlaySvg alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </PlaySvg>}
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
