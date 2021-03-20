// ANCHOR VideoJS
import { VideoJsPlayerOptions } from 'video.js'

export const DEFAULT_OPTIONS: VideoJsPlayerOptions = {
  controls: true,
  controlBar: {
    children: [
      'playToggle',
      'volumePanel',
      'currentTimeDisplay',
      'timeDivider',
      'durationDisplay',
      'progressControl',
      'liveDisplay',
      'customControlSpacer',
      'chaptersButton',
      'descriptionsButton',
      'subsCapsButton',
      'audioTrackButton',
      'playbackRateMenuButton',
      'fullscreenToggle',
    ],
    progressControl: {
      seekBar: true
    }
  },
  autoplay: false,
  fluid: true,
  inactivityTimeout: 2500,
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
