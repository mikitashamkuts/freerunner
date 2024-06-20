/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';
import {default as OrderDetailScreenIconTextRowHolder} from './component';

it('Renders correctly: ', () => {
  renderer.create(<OrderDetailScreenIconTextRowHolder />);
});

it('Matches previous snapshot: ', () => {
  expect(renderer.create(<OrderDetailScreenIconTextRowHolder />).toJSON()).toMatchSnapshot();
});
