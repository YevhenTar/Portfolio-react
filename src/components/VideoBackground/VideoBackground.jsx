import React from 'react';

import './VideoBackground.scss';

const VideoBackground = ({ src, poster }) => {
    return (
        <video
            className="fullscreen-video"
            src={src}
            poster={poster}
            playsInline
            autoPlay
            muted
            loop
            preload="auto"
            aria-hidden="true"
        />
    );
};

export default VideoBackground;