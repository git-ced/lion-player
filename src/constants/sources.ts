// ANCHOR VideoJS
import VIDEOJS from 'video.js'

export const M3U8_SOURCE: VIDEOJS.Tech.SourceObject = {
  src: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8',
  type: 'application/x-mpegURL',
};

export const SOURCES: VIDEOJS.Tech.SourceObject[] = [
  M3U8_SOURCE,
]
