import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Reader from '../Components/Reader/Reader';
import renderer from 'react-test-renderer';

it('renders correctly, test using Jest', () => {
  renderer.create(<Reader />);
});
