import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import App from './App';

describe('App renders correctly with Jest', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })
})