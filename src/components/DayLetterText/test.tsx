/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

import {default as DayLetterText} from './component';

describe('DayLetterText Component', () => {
  it('Renders with default props and matches previous snapshot: ', () => {
    expect(renderer.create(<DayLetterText text={'F'} />).toJSON()).toMatchSnapshot();
  });

  it('Renders with custom props and matches previous snapshot: ', () => {
    expect(
      renderer
        .create(<DayLetterText fontSize="Small" fontWeight="Light" color="Action" text={'F'} />)
        .toJSON(),
    ).toMatchSnapshot();
  });
});
