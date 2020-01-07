import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ListSearch from './ListSearch';

describe('ListSearch renders correctly with Jest', () => {
  it('renders correctly', () => {
    const book = {
      title: 'This is a book',
      author: 'I am the author'
    }
    const wrapper = shallow(<ListSearch book={book} />);
    expect(wrapper).toMatchSnapshot();
  })
})