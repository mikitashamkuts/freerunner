/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

import {default as ActionText} from './component';

describe('ActionText Component', () => {
  it('Renders with default props and matches previous snapshot: ', () => {
    expect(renderer.create(<ActionText text={'ActionText'} />).toJSON()).toMatchSnapshot();
  });

  it('Renders with custom props and matches previous snapshot: ', () => {
    expect(
      renderer
        .create(
          <ActionText fontWeight="SemiBold" fontSize="Small" color="Faded" text={'ActionText'} />,
        )
        .toJSON(),
    ).toMatchSnapshot();
  });
});
