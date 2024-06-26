/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

import {default as AgendaRowTimeText} from './component';

describe('AgendaRowTimeText Component', () => {
  it('Renders with default props and matches previous snapshot: ', () => {
    expect(renderer.create(<AgendaRowTimeText text={'10:30 AM'} />).toJSON()).toMatchSnapshot();
  });

  it('Renders with custom props and matches previous snapshot: ', () => {
    expect(
      renderer
        .create(<AgendaRowTimeText fontSize="Small" color="Faded" text={'10:30 AM'} />)
        .toJSON(),
    ).toMatchSnapshot();
  });
});
