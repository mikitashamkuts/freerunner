import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';

import {sendFetchAgendaSlotListRequest} from '@src/api';
import {exceptionList, httpResponceStatusList} from '@src/constants';
import {AgendaSlotListType} from '@src/types';
import {getExceptionCaptured, getFunctionTryCatchWrapped as tryCatch} from '@src/utils';
import {
  fetchAgendaSlotListFailure,
  fetchAgendaSlotListRequest,
  fetchAgendaSlotListSuccess,
} from '../../slices/agendaSlotList';

/**
 * Saga to fetch agenda slot list
 * @param action - Redux action containing the payload with week offset
 */
export const fetchAgendaSlotListSaga = tryCatch(function* fetchAgendaSlotListSagaSafe(action: {
  payload: number;
}) {
  const response: AxiosResponse<AgendaSlotListType> = yield call(
    sendFetchAgendaSlotListRequest,
    action.payload,
  );
  switch (response.status) {
    case httpResponceStatusList.Ok:
      const agendaSlotList = response.data;
      yield put(fetchAgendaSlotListSuccess(agendaSlotList));
      break;
    default:
      getExceptionCaptured(fetchAgendaSlotListSagaSafe, exceptionList.Network, response);
      yield put(fetchAgendaSlotListFailure());
      break;
  }
});

/**
 * Watcher saga to watch for fetchAgendaSlotListRequest actions
 */
export const watchAgendaSlotListRequest = tryCatch(function* watchFetchAgendaSlotListRequestSafe() {
  yield takeLatest(fetchAgendaSlotListRequest.type, fetchAgendaSlotListSaga);
});

// Root saga to export and run all watcher sagas
export default tryCatch(function getAgendaSlotListRootSaga() {
  return function* rootSaga() {
    yield watchAgendaSlotListRequest();
  };
})();
