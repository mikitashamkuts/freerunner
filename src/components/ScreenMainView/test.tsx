/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';
import React from 'react';
import {Text} from 'react-native';
import ScreenMainView from './component';

// Mock the useTheme hook to return a static style
jest.mock('../../hooks', () => ({
  useTheme: () => ({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
  }),
}));

// Mock the whyDidItRenderConfig to avoid issues with the debugging configuration
jest.mock('../../../debug', () => ({
  whyDidItRenderConfig: {
    UIComponentDebugActive: false,
  },
}));

describe('ScreenMainView Component', () => {
  it('Renders with children and matches snapshot (no animation) : ', () => {
    const tree = renderer
      .create(
        <ScreenMainView isWithAnimation={false}>
          <Text>Test Child</Text>
        </ScreenMainView>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders without children and matches snapshot (no animation) : ', () => {
    const tree = renderer.create(<ScreenMainView isWithAnimation={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
