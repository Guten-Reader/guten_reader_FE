import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Search from './Search';

describe('Search renders correctly with Jest', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  })
})