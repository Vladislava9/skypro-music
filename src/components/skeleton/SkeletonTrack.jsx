import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonTrack = (props) => (
    <ContentLoader
        speed={2.5} 
        width={1107} 
        height={51} 
        viewBox="0 0 1107 51" 
        backgroundColor="#1f1f1f" 
        foregroundColor="#ecebeb" 
        {...props} 
    >
        <rect x="0" y="0" rx="0" ry="0" width="51" height="51" />
        <rect x="65" y="16.49" rx="0" ry="0" width="356" height="19" />
        <rect x="481" y="16.49" rx="0" ry="0" width="271" height="19" />
        <rect x="802" y="16.49" rx="0" ry="0" width="305" height="19" />
    </ContentLoader>
);

export default SkeletonTrack;
