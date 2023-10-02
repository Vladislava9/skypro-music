import React from "react";
import * as S from "./StyledVolume";

function Volume() {
  return (
    <S.VolumeBlock>
      <S.VolumeContent>
        <S.VolumeImage>
          <S.VolumeSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
          </S.VolumeSvg>
        </S.VolumeImage>
        <S.VolumeProgress>
          <S.VolumeProgressInput
            type="range"
            name="range"
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.VolumeBlock>
  );
}

export default Volume;
