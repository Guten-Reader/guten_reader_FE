import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Reader from './Reader';

describe('Reader renders correctly with Jest', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Reader />);
    expect(wrapper).toMatchSnapshot();
  })
})