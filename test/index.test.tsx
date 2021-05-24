import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LionPlayer, UncontrolledLionPlayer } from '../src/index';
import { M3U8_SOURCE, MPD_SOURCE } from '../src/constants/sources';

describe('render controlled Lion Player', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LionPlayer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('mpd renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LionPlayer sources={[MPD_SOURCE]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('m3u8 renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LionPlayer sources={[M3U8_SOURCE]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('render uncontrolled Lion Player', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const playerRef = React.createRef<HTMLVideoElement>();

    ReactDOM.render(<UncontrolledLionPlayer player={playerRef} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
