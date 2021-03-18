// ANCHOR VideoJS
import VIDEOJS from 'video.js'

export const M3U8_SOURCE: VIDEOJS.Tech.SourceObject = {
  src: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8',
  type: 'application/x-mpegURL',
};

export const MPD_SOURCE: VIDEOJS.Tech.SourceObject = {
  src: 'https://vod.lyon.com.ph/file/lyon-vod/processed/bb51a51f70da12c3c2e2d81fbaf83485/h264_master.mpd',
  type: 'application/dash+xml',
};

export const SOURCES: VIDEOJS.Tech.SourceObject[] = [
  MPD_SOURCE,
  M3U8_SOURCE,
]
