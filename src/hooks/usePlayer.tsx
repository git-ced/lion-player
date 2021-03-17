// ANCHOR React
import { useEffect, useRef } from 'react';

// ANCHOR VideoJS
import VIDEOJS, { VideoJsPlayerOptions } from 'video.js'

// ANCHOR Utils
import { HOTKEYS_HANDLER } from '../utils/hotkeys-handler';

export function usePlayer(options: VideoJsPlayerOptions) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const vjsPlayer = videoRef.current
      ? VIDEOJS(videoRef.current, {
        ...options,
        userActions: {
          hotkeys: (event) => {
            HOTKEYS_HANDLER(event, vjsPlayer)
          }
        },
      }, () => {
        if (vjsPlayer) {
          if (options.sources) {
            vjsPlayer.src(options.sources);
          } else if (options.src) {
            vjsPlayer.src(options.src)
          }
        }
      })
      : null;

    return () => {
      if (vjsPlayer !== null) {
        vjsPlayer.dispose();
      }
    };
  }, []);

  return videoRef;
};
