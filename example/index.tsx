import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LionPlayer } from '../src/index';
import { SOURCES } from '../src/constants/sources';

const App = () => {
  return (
    <div>
      <LionPlayer
        sources={[SOURCES[1]]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
