import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ListLibrary from './ListLibrary';

describe('ListLibrary renders correctly with Jest', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ListLibrary />);
    expect(wrapper).toMatchSnapshot();
  })
})