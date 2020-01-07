import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Library from './Library';

describe('Library renders correctly with Jest', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Library />);
    expect(wrapper).toMatchSnapshot();
  })
})