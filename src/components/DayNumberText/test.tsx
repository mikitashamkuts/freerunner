/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

import {default as DayNumberText} from './component';

describe('DayNumberText Component', () => {
  it('Renders with default props and matches previous snapshot: ', () => {
    expect(renderer.create(<DayNumberText text={'22'} />).toJSON()).toMatchSnapshot();
  });

  it('Renders with custom props and matches previous snapshot: ', () => {
    expect(
      renderer
        .create(
          <DayNumberText
            // eslint-disable-next-line react-native/no-inline-styles
            containerStyle={{paddingBottom: 10}}
            fontSize="Small"
            color="Action"
            text={'22'}
          />,
        )
        .toJSON(),
    ).toMatchSnapshot();
  });
});
