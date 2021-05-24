// ANCHOR React
import React from 'react';

// ANCHOR VideoJS
import { VideoJsPlayerOptions, } from 'video.js';
import './themes/video-js.css';
import './themes/lion.css';

// ANCHOR Hooks
import { usePlayer } from './hooks/usePlayer';

export interface IUncontrolledPlayerProps {
  playerRef: React.LegacyRef<HTMLVideoElement>
}

export const UncontrolledLionPlayer = ({ playerRef }: IUncontrolledPlayerProps) => {
  return (
    <div data-vjs-player>
      <video
        ref={playerRef}
        className="video-js vjs-theme-lion"
      >
        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a
          web browser that <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video
          </a>
        </p>
      </video>
    </div>
  )
};

export const LionPlayer = (props?: VideoJsPlayerOptions) => {
  const { ref } = usePlayer({ ...props });

  return <UncontrolledLionPlayer playerRef={ref} />;
};
