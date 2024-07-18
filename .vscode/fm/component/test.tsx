/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

import {__name__} from '.';

describe('__name__ Component', () => {
  it('Renders with default props and matches previous snapshot: ', () => {
    const tree = renderer.create(<__name__ />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders with custom props and matches previous snapshot: ', () => {
    const tree = renderer.create(<__name__ />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
