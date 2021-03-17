// ANCHOR VideoJS
import VIDEOJS, { VideoJsPlayer } from 'video.js'

export const HOTKEYS_HANDLER = (
  event: VIDEOJS.KeyboardEvent,
  player: VideoJsPlayer | null,
) => {
  if (player) {
    const currentTime = player.currentTime();
    const currentVolume = player.volume();
    const isMuted = player.muted();
    const isFullscreen = player.isFullscreen();
    const isPaused = player.paused();

    // Go 5 seconds backward
    if (event.code === 'ArrowLeft') {
      player.currentTime(currentTime - 5);
    }

    // Go 5 seconds forward
    if (event.code === 'ArrowRight') {
      player.currentTime(currentTime + 5);
    }

    // Increase volume by 5%
    if (event.code === 'ArrowUp') {
      if (currentVolume <= 0.95) {
        player.volume(currentVolume + 0.05);
      } else {
        player.volume(1);
      }
    }

    // Decrease volume by 5%
    if (event.code === 'ArrowDown') {
      if (currentVolume >= 0.05) {
        player.volume(currentVolume - 0.05);
      } else {
        player.volume(0);
      }
    }

    // Mute/Unmute toggle
    if (event.code === 'KeyM') {
      if (isMuted) {
        player.muted(false);
      } else {
        player.muted(true);
      }
    }

    // Fullscreen/Exit toggle
    if (event.code === 'KeyF') {
      if (isFullscreen) {
        player.exitFullscreen()
      } else {
        player.requestFullscreen();
      }
    }

    // Play/Pause toggle
    if (event.code === 'Space') {
      if (isPaused) {
        player.play();
      } else {
        player.pause();
      }
    }
  }
}
