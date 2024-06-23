/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

import StatusBar from './component';

describe('StatusBar Component', () => {
  it('Renders with default props and matches previous snapshot: ', () => {
    const tree = renderer.create(<StatusBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders with light style and matches previous snapshot: ', () => {
    const tree = renderer.create(<StatusBar customStyle="light" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders with dark style and matches previous snapshot: ', () => {
    const tree = renderer.create(<StatusBar customStyle="dark" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
