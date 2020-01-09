import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Reader from './Reader';

describe('Reader renders correctly with Jest', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      currentPage: 0,
      currentToken: '',
      currentMood: 'blank',
      defaultFontSize : 20,
      defaultFontFamily: true,
      isOnDarkMode: false
    };
    wrapper = shallow(<Reader {...props} />);
    mockState = {
      books: [],
      error: ''
    };
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('adds state to the component', () => {
    wrapper.setState({ ...mockState })
    const instance = wrapper.instance()
    expect(instance.state).toEqual(mockState)
  });
});