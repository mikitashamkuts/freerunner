/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

import {default as ScreenHeader} from './component';

describe('ScreenHeader Component', () => {
  it('Renders with default props and matches previous snapshot: ', () => {
    expect(renderer.create(<ScreenHeader />).toJSON()).toMatchSnapshot();
  });

  it('Renders with custom props and matches previous snapshot: ', () => {
    expect(
      // eslint-disable-next-line react-native/no-inline-styles
      renderer.create(<ScreenHeader containerStyle={{paddingTop: 10}} />).toJSON(),
    ).toMatchSnapshot();
  });
});
