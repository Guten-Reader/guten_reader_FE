import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Library from './Library';

describe('Library', () => {
  let wrapper;
  let mockState;

  beforeEach(() => {
    wrapper = shallow(<Library />);
    mockState = {
      books: [],
      error: ''
    }
  })
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('adds state to the component', () => {
    wrapper.setState({ ...mockState })
    const instance = wrapper.instance()
    expect(instance.state).toEqual(mockState)
  });

})