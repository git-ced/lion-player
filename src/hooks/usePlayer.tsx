// ANCHOR React
import { useEffect, useRef } from 'react';

// ANCHOR VideoJS
import VIDEOJS, { VideoJsPlayerOptions } from 'video.js'
import videoJsContribQualityLevels from 'videojs-contrib-quality-levels'
import videoJsHlsQualitySelector from 'videojs-hls-quality-selector'

// ANCHOR Utils
import { HOTKEYS_HANDLER } from '../utils/hotkeys-handler';

// ANCHOR Constants
import { DEFAULT_OPTIONS } from '../constants/options';

export function usePlayer(options: VideoJsPlayerOptions) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    VIDEOJS.registerPlugin('qualityLevel', videoJsContribQualityLevels)
    VIDEOJS.registerPlugin('hlsQualitySelector', videoJsHlsQualitySelector)

    const vjsPlayer = videoRef.current
      ? VIDEOJS(videoRef.current, {
        ...DEFAULT_OPTIONS,
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
      if (vjsPlayer) {
        videoRef.current = null;
        vjsPlayer.dispose();
      }
    };
  }, []);

  return videoRef;
};
