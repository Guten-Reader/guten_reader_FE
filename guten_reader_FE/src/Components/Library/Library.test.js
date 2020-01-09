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

<<<<<<< HEAD
  it('adds state to the component', () => {
    wrapper.setState({ ...mockState })
    const instance = wrapper.instance()
    expect(instance.state).toEqual(mockState)
=======
  it('addBook should update state with a new book', () => {
    expect(wrapper.state('books')).toEqual([{title: 'title1', author: 'author1'}]);
    wrapper.instance().addBook({title: 'new title', author: 'new author'});
    expect(wrapper.state('books')).toEqual([{title: 'title1', author: 'author1'}, {title: 'new title', author: 'new author'}]);
>>>>>>> development
  });


})