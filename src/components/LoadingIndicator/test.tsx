/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

import {default as LoadingIndicator} from './component';

describe('LoadingIndicator Component', () => {
  it('Renders with default props and matches previous snapshot: ', () => {
    expect(renderer.create(<LoadingIndicator />).toJSON()).toMatchSnapshot();
  });

  it('Renders with custom props and matches previous snapshot: ', () => {
    expect(
      // eslint-disable-next-line react-native/no-inline-styles
      renderer.create(<LoadingIndicator containerStyle={{padding: 20}} />).toJSON(),
    ).toMatchSnapshot();
  });
});
