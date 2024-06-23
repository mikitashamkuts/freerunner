/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

import {Text} from '.';

describe('Text Component', () => {
  it('Renders with default props and matches previous snapshot: ', () => {
    const tree = renderer.create(<Text text="Hello, World!" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders with custom props and matches previous snapshot: ', () => {
    const customProps = {
      text: 'Custom Text',
      fontWeight: 'Bold',
      fontSize: 'Large',
      color: 'Primary',
      numberOfLines: 1,
      accessibilityLabel: 'Custom Label',
      accessibilityHint: 'Custom Hint',
      accessibilityRole: 'header',
      containerStyle: {margin: 10},
    };
    const tree = renderer.create(<Text {...customProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
