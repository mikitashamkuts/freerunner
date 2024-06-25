import {all} from 'redux-saga/effects';

import {getFunctionTryCatchWrapped as tryCatch} from '../../utils';
import agendaSlotListRootSaga from './agendaSlotList/saga';

/**
 * The root saga that combines all other sagas in the application.
 * Uses the 'all' effect to run multiple sagas concurrently.
 *
 * This function should be imported and run in the Redux store configuration.
 */
export default tryCatch(function getRootSaga() {
  return function* rootSaga() {
    yield all([
      agendaSlotListRootSaga(), // Combine the order list root saga
    ]);
  };
})();
