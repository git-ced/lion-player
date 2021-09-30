// ANCHOR React
import { useEffect, useRef, useState } from 'react';

// ANCHOR VideoJS
import VIDEOJS, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js'
import videoJsContribQualityLevels from 'videojs-contrib-quality-levels'
import videoJsHlsQualitySelector from 'videojs-hls-quality-selector'

// ANCHOR Utils
import { HOTKEYS_HANDLER } from '../utils/hotkeys-handler';

// ANCHOR Constants
import { DEFAULT_OPTIONS } from '../constants/options';

export default function usePlayer(
  options: VideoJsPlayerOptions,
) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [player, setPlayer] = useState<VideoJsPlayer | null>(null)

  useEffect(() => {
    VIDEOJS.registerPlugin('qualityLevel', videoJsContribQualityLevels)
    VIDEOJS.registerPlugin('hlsQualitySelector', videoJsHlsQualitySelector)
  }, [])

  useEffect(() => {
    const vjsPlayer = ref.current
      ? VIDEOJS(ref.current, {
        ...DEFAULT_OPTIONS,
        ...options,
        userActions: {
          hotkeys: (event) => {
            HOTKEYS_HANDLER(event, vjsPlayer)
          }
        },
      }, () => {
        if (vjsPlayer) {
          setPlayer(vjsPlayer);

          if (options.sources) {
            vjsPlayer.src(options.sources);
          } else if (options.src) {
            vjsPlayer.src(options.src)
          }

          vjsPlayer.currentTime(0);
          vjsPlayer.load();
        }
      })
      : null;

    return () => {
      if (vjsPlayer) {
        vjsPlayer.reset();
      }
    };
  }, [options]);

  return {
    ref,
    player,
  };
};
