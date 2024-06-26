/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

import Icon from './component';

describe('Icon Component', () => {
  it('Renders with a given icon name and default color and matches previous snapshot: ', () => {
    const tree = renderer.create(<Icon color="Action" name="Arrow" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders with a given icon name and custom color and matches previous snapshot: ', () => {
    const tree = renderer.create(<Icon name="Arrow" color="Action" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders with additional container style and matches previous snapshot: ', () => {
    const customStyle = {margin: 10};
    const tree = renderer
      .create(<Icon color="Faded" name="CalendarChecked" containerStyle={customStyle} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
