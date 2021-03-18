// ANCHOR React
import React from 'react';

// ANCHOR VideoJS
import { VideoJsPlayerOptions } from 'video.js';

// ANCHOR Hooks
import { usePlayer } from './hooks/usePlayer';

export const LionPlayer = (props?: VideoJsPlayerOptions) => {
  const playerRef = usePlayer({ ...props });

  return (
    <div style={{ width: '50%', height: 'auto' }}>
      <div data-vjs-player>
        <video
          ref={playerRef}
          className="video-js vjs-big-play-centered"
          data-setup='{}'
        >
          <p className="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video
            </a>
          </p>
        </video>
      </div>
    </div>
  )
};
