/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';
import {default as DueDateFrame} from './component';

it('Renders correctly: ', () => {
  renderer.create(<DueDateFrame size={'big'} type={'pending'} date={'30'} month={'november'} />);
  renderer.create(<DueDateFrame size={'small'} type={'pending'} date={'30'} month={'november'} />);
  renderer.create(<DueDateFrame size={'big'} type={'delayed'} date={'30'} month={'november'} />);
  renderer.create(<DueDateFrame size={'small'} type={'delayed'} date={'30'} month={'november'} />);
});

it('Matches previous snapshot: ', () => {
  expect(
    renderer
      .create(<DueDateFrame size={'big'} type={'pending'} date={'30'} month={'november'} />)
      .toJSON(),
  ).toMatchSnapshot();
  expect(
    renderer
      .create(<DueDateFrame size={'small'} type={'pending'} date={'30'} month={'november'} />)
      .toJSON(),
  ).toMatchSnapshot();
  expect(
    renderer
      .create(<DueDateFrame size={'big'} type={'delayed'} date={'30'} month={'november'} />)
      .toJSON(),
  ).toMatchSnapshot();
  expect(
    renderer
      .create(<DueDateFrame size={'small'} type={'delayed'} date={'30'} month={'november'} />)
      .toJSON(),
  ).toMatchSnapshot();
});
