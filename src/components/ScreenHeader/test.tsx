/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';
import {default as ScreenHeader} from './component';

it('Renders correctly: ', () => {
  renderer.create(<ScreenHeader />);
});

it('Matches previous snapshot: ', () => {
  expect(renderer.create(<ScreenHeader />).toJSON()).toMatchSnapshot();
});
