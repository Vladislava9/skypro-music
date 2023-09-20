import React from "react";

import ContentLoader from "react-content-loader";

const SkeletonPlayTrack = (props) => (
  <ContentLoader
    speed={2}
    width={122}
    height={51}
    viewBox="0 0 122 51"
    backgroundColor="#1f1f1f"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="51" height="51" />
    <rect x="63" y="7" rx="0" ry="0" width="59" height="15" />
    <rect x="63" y="29" rx="0" ry="0" width="59" height="15" />
  </ContentLoader>
);

export default SkeletonPlayTrack;
