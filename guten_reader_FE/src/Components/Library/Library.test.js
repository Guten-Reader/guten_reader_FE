import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Library from './Library';

describe('Library', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Library />);
  })
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('addBook should update state with a new book', () => {
    console.log(wrapper.instance().state)
    expect(wrapper.state('books')).toEqual([{title: 'title1', author: 'author1'}]);
    wrapper.instance().addBook({title: 'new title', author: 'new author'});
    expect(wrapper.state('books')).toEqual([{title: 'title1', author: 'author1'}, {title: 'new title', author: 'new author'}]);
  });
})