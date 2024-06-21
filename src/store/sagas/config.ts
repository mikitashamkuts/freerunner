import {all} from 'redux-saga/effects'; // Import 'all' effect from redux-saga to run multiple sagas concurrently

import {getFunctionTryCatchWrapped as tryCatch} from '../../utils';
import orderListRootSaga from './orderList/saga'; // Import the root saga for order list functionality

/**
 * The root saga that combines all other sagas in the application.
 * Uses the 'all' effect to run multiple sagas concurrently.
 *
 * This function should be imported and run in the Redux store configuration.
 */
export default tryCatch(function getRootSaga() {
  return function* rootSaga() {
    yield all([
      orderListRootSaga(), // Combine the order list root saga
    ]);
  };
})();
