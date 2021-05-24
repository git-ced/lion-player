# lion-player
> Open-source React video player powered by VideoJS

[![NPM](https://img.shields.io/npm/v/lion-player.svg)](https://www.npmjs.com/package/lion-player)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/lion-player)
![npm bundle size (scoped version)](https://img.shields.io/bundlephobia/minzip/lion-player)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/lion-player)
![NPM](https://img.shields.io/npm/l/lion-player)

## Table of Contents
 - [Installation](#installation)
 - [Setup](#setup)
 - [Usage](#usage)
 - [Authors](#authors)
 - [Changelog](#changelog)
 - [License](#license)

 <!-- toc -->

## Installation

This library is available through the [npm registry](https://www.npmjs.com/).

NPM
```bash
$ npm -i lion-player
```

Yarn
```bash
$ yarn add lion-player
```

## Setup

Start using it by importing the library first.

### CommonJS
```javascript
const LionPlayer = require('lion-player');
```

or 

### ES6
```javascript
import { LionPlayer } from 'lion-player';
```

The `LionPlayer` component requires the following CSS for styling:

**Using link tags**
```html
<link href="https://unpkg.com/lion-player@1.1.5/dist/lion-skin.min.css" rel="stylesheet">
```

**Using import**
```javascript
import 'lion-player/dist/lion-skin.min.css';
```

## Usage

**Video playback through Lion Player**
```javascript
import { LionPlayer } from 'lion-player';

const SOURCES = [
  {
    src: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8',
    type: 'application/x-mpegURL',
  },
  {
    src: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd',
    type: 'application/dash+xml',
  }
];

export default function Player() {
  return (
    <LionPlayer sources={SOURCES} autoplay="muted" />
  );
}
```
**Uncontrolled Lion Player**
```javascript
import { UncontrolledLionPlayer, usePlayer } from 'lion-player';

const SOURCES = [
  {
    src: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8',
    type: 'application/x-mpegURL',
  },
  {
    src: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd',
    type: 'application/dash+xml',
  }
];

export default function Player() {
  const { ref } = usePlayer({ 
    sources: SOURCES,
    muted: true,
  });

  return (
    <UncontrolledLionPlayer playerRef={SOURCES} />
  );
}
```

**List of possible props for `LionPlayer`**

[LionPlayer Props Reference](https://docs.videojs.com/tutorial-options.html)

```typescript
interface Props {
  aspectRatio?: string;
  autoplay?: boolean | string;
  bigPlayButton?: boolean;
  controlBar?: videojs.ControlBarOptions | false;
  textTrackSettings?: videojs.TextTrackSettingsOptions;
  controls?: boolean;
  defaultVolume?: number;
  fluid?: boolean;
  height?: number;
  html5?: any;
  inactivityTimeout?: number;
  language?: string;
  languages?: { [code: string]: videojs.LanguageTranslations };
  liveui?: boolean;
  loop?: boolean;
  muted?: boolean;
  nativeControlsForTouch?: boolean;
  notSupportedMessage?: string;
  playbackRates?: number[];
  plugins?: Partial<VideoJsPlayerPluginOptions>;
  poster?: string;
  preload?: string;
  sourceOrder?: boolean;
  sources?: videojs.Tech.SourceObject[];
  src?: string;
  techOrder?: string[];
  tracks?: videojs.TextTrackOptions[];
  userActions?: videojs.UserActions;
  width?: number;
}
```

## Authors

- [Prince Neil Cedrick Castro](https://github.com/git-ced/) - Initial work

See also the list of [contributors](https://github.com/git-ced/lion-player/contributors) who participated in this project.

## Changelog

[Changelog](https://github.com/git-ced/lion-player/releases)

## License

  [MIT](LICENSE)
