import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import MenuLibrary from './MenuLibrary';

describe('MenuLibrary renders correctly with Jest', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MenuLibrary />);
    expect(wrapper).toMatchSnapshot();
  })
})