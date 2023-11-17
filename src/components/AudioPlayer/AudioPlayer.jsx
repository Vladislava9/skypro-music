import React, { useState, useRef, useEffect } from "react";
import Volume from "./Volume";
import SkeletonPlayTrack from "../Skeleton/SkeletonPlayTrack";
import TrackPlay from "./TrackPlay";
import {
  Time,
  Bar,
  BarContent,
  BarPlayer,
  BarPlayerBlock,
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
import ProgressBar from "./ProgressBar";

function secondsToTimeString(seconds) {
  return (
    Math.floor(Math.round(seconds) / 60)
      .toString()
      .padStart(2, "0") +
    ":" +
    (Math.round(seconds) % 60).toString().padStart(2, "0")
  );
}

function AudioPlayer(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(70);
  const [duration, setDuration] = useState(0);
  const [isLooped, setIsLooped] = useState(false);
  const [isPlay, setIsPlay] = useState(true);
  const [volume, setVolume] = useState(30);

  setTimeout(() => {
    setIsVisible(true);
  }, 2000);

  let trackPlayItem = isVisible ? (
    <TrackPlay dataTrack={props.dataTrack} />
  ) : (
    <SkeletonPlayTrack />
  );

  const audioRef = useRef();

  useEffect(() => {
    const handleTimeUpdateEvent = () => {
      if (audioRef.current.currentTime) {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
      } else {
        setCurrentTime(0);
        setDuration(0);
      }
    };
    audioRef?.current.addEventListener("timeupdate", handleTimeUpdateEvent);

    audioRef?.current.addEventListener("canplaythrough", () => {
      //   console.log("hello");
      audioRef?.current.play();
    });
    return () => {
      audioRef?.current.removeEventListener("canplaythrough", null);
      audioRef?.current.removeEventListener(
        "timeupdate",
        handleTimeUpdateEvent
      );
    };
  }, [audioRef]);

  const handleToggleLoop = () => {
    setIsLooped((prev) => !prev);
    audioRef.current.loop = !audioRef.current.loop;
  
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleStopOrPlay = () => {
    if (isPlay) {
      audioRef?.current.pause();
      setIsPlay(false);
    } else {
      audioRef?.current.play();
      setIsPlay(true);
    }
  };

  //api volume - звук(><), loop (бесконечное проигрование), currentTime (текущее время проигрования)
  //пример audioRef?.current.volume = 0-1
  //useRef не приводит к перерендеру, а useState приводит !!!

  return (
    <Bar>
      <Time>
        {secondsToTimeString(currentTime)} / {secondsToTimeString(duration)}
      </Time>
      <BarContent>
        <ProgressBar
          currentTime={currentTime}
          audioRef={audioRef}
          duration={duration}
        />
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
                {isPlay ? (
                  <svg
                    width="15"
                    height="19"
                    viewBox="0 0 15 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="5" height="19" fill="#D9D9D9" />
                    <rect x="10" width="5" height="19" fill="#D9D9D9" />
                  </svg>
                ) : (
                  <PlaySvg alt="play">
                    <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                  </PlaySvg>
                )}
              </PlayerButtonPlay>
              <PlayerButtonNext>
                <NextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </NextSvg>
              </PlayerButtonNext>
              <PlayerButtonRepeat onClick={handleToggleLoop}>
                {isLooped ? (
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                 <path d="M10.0005 3.70312L5.00049 0.816374V6.58988L10.0005 3.70312ZM7.00049 15.2031C3.96292 15.2031 1.50049 12.7407 1.50049 9.70312H0.500488C0.500488 13.293 3.41064 16.2031 7.00049 16.2031V15.2031ZM1.50049 9.70312C1.50049 6.66556 3.96292 4.20312 7.00049 4.20312V3.20312C3.41064 3.20312 0.500488 6.11327 0.500488 9.70312H1.50049Z" fill="white"/>
                 <path d="M10.0005 15.7031L15.0005 18.5899V12.8164L10.0005 15.7031ZM13.0005 4.20312C16.0381 4.20312 18.5005 6.66556 18.5005 9.70312H19.5005C19.5005 6.11327 16.5903 3.20312 13.0005 3.20312V4.20312ZM18.5005 9.70312C18.5005 12.7407 16.0381 15.2031 13.0005 15.2031V16.2031C16.5903 16.2031 19.5005 13.293 19.5005 9.70312H18.5005Z" fill="white"/>
                 </svg>
                ) : (
                  <RepeatSvg alt="repeat">
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                  </RepeatSvg>
                )}
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
          <Volume handleVolumeChange={handleVolumeChange} volume={volume} />
        </BarPlayerBlock>
      </BarContent>
    </Bar>
  );
}
export default AudioPlayer;
