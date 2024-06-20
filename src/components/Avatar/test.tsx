/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';
import {default as Avatar} from './component';

it('Renders correctly: ', () => {
  renderer.create(<Avatar uri="" size="big" />);
  renderer.create(<Avatar uri="" size="small" />);
});

it('Matches previous snapshot: ', () => {
  expect(renderer.create(<Avatar uri="" size="big" />).toJSON()).toMatchSnapshot();
  expect(renderer.create(<Avatar uri="" size="small" />).toJSON()).toMatchSnapshot();
});
