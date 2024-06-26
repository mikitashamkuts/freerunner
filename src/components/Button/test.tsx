/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

import {default as Button} from './component';

describe('Button Component', () => {
  it('Renders with default props and matches previous snapshot: ', () => {
    expect(
      renderer
        .create(
          <Button
            onPress={function (): void {}}
            text={'Button Title'}
            accessibilityLabel={''}
            accessibilityHint={''}
          />,
        )
        .toJSON(),
    ).toMatchSnapshot();
  });

  it('Renders with custom props and matches previous snapshot: ', () => {
    expect(
      renderer
        .create(
          <Button
            onPress={function (): void {}}
            text={'Button Title'}
            accessibilityLabel={''}
            accessibilityHint={''}
            // eslint-disable-next-line react-native/no-inline-styles
            containerStyle={{margin: 20}}
          />,
        )
        .toJSON(),
    ).toMatchSnapshot();
  });
});
