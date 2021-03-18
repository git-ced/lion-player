// ANCHOR VideoJS
import { VideoJsPlayerOptions } from 'video.js'

export const DEFAULT_OPTIONS: VideoJsPlayerOptions = {
  controls: true,
  autoplay: false,
  fluid: true,
  preload: 'auto',
  width: 100,
  playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
  html5: {
    hls: {
      enableLowInitialPlaylist: true,
      smoothQualityChange: true,
      overrideNative: true,
    },
  },
  plugins: {
    qualityLevel: {},
    hlsQualitySelector: {
      displayCurrentQuality: true,
    },
  },
};
