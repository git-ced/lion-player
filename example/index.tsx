import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LionPlayer, UncontrolledLionPlayer, usePlayer } from '../src/index';
import { SOURCES } from '../src/constants/sources';

const App = () => {
  const [currentSource, setCurrentSource] = React.useState(SOURCES[1]);
  const { ref } = usePlayer({
    sources: [SOURCES[1]]
  });

  return (
    <div>
      <h1>Default Usage</h1>
      <LionPlayer sources={[SOURCES[1]]} />
      <h1>Changing Sources</h1>
      <LionPlayer sources={[currentSource]} />
      <button onClick={() => {
        setCurrentSource(SOURCES[0])
      }}>
        Another Video
      </button>
      <button onClick={() => {
        setCurrentSource(SOURCES[1])
      }}>
        Original Video
      </button>
      <h1>Uncontrolled Player</h1>
      <UncontrolledLionPlayer playerRef={ref} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
