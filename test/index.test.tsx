import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LionPlayer } from '../src/index';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LionPlayer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
