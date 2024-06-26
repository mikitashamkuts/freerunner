/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

import {default as DayLetterWithNumberActionColumn} from './component';

describe('DayLetterWithNumberActionColumn Component', () => {
  it('Renders with default props and matches previous snapshot: ', () => {
    expect(
      renderer
        .create(
          <DayLetterWithNumberActionColumn
            isActive={false}
            dayLetter={'M'}
            dayNumber={'05'}
            onPress={function (): void {}}
          />,
        )
        .toJSON(),
    ).toMatchSnapshot();
  });

  it('Renders with custom props and matches previous snapshot: ', () => {
    expect(
      renderer
        .create(
          <DayLetterWithNumberActionColumn
            isActive={true}
            dayLetter={'M'}
            dayNumber={'22'}
            onPress={function (): void {}}
            // eslint-disable-next-line react-native/no-inline-styles
            containerStyle={{paddingTop: 10}}
          />,
        )
        .toJSON(),
    ).toMatchSnapshot();
  });
});
