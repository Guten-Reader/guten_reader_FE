import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Search from './Search';

describe('Search renders correctly with Jest', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {bookText: 'mock text', bookId: 1, currentPage: 2};
    wrapper = shallow(<Search {...props} />);
    mockState = {
      searchQuery: '',
      foundBooks: [],
      searchResult: false,
    }
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('adds state to the component', () => {
    wrapper.setState({ ...mockState });
    const instance = wrapper.instance();

    expect(instance.state).toEqual(mockState);
  });
});