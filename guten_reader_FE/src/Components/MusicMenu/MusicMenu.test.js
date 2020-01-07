import React from 'react';
import { shallow } from 'enzyme';

import MusicMenu from './MusicMenu';

describe('MusicMenu renders correctly with Jest', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MusicMenu />);
    expect(wrapper).toMatchSnapshot();
  })
})