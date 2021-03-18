// ANCHOR VideoJS
import { VideoJsPlayerOptions } from 'video.js'

export const DEFAULT_OPTIONS: VideoJsPlayerOptions = {
  controls: true,
  controlBar: {
    volumePanel: {
      inline: false
    }
  },
  autoplay: false,
  fluid: true,
  preload: 'auto',
  width: 100,
  playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2],
  html5: {
    vhs: {
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
