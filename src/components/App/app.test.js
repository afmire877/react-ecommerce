import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});
