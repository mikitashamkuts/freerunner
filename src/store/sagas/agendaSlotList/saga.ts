import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';

import {sendFetchAgendaSlotListRequest} from '../../../api';
import {exceptionList, httpResponceStatusList} from '../../../constants';
import {AgendaSlotListType} from '../../../types';
import {getExceptionCaptured, getFunctionTryCatchWrapped as tryCatch} from '../../../utils';
import {
  fetchAgendaSlotListFailure,
  fetchAgendaSlotListRequest,
  fetchAgendaSlotListSuccess,
} from '../../slices/agendaSlotList';

// Saga to fetch order list
export const fetchAgendaSlotListSaga = tryCatch(function* fetchAgendaSlotListSagaSafe(action) {
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

// Watcher saga to watch for fetchOrderListRequest actions
export const watchAgendaSlotListRequest = tryCatch(function* watchFetchAgendaSlotListRequestSafe() {
  yield takeLatest(fetchAgendaSlotListRequest.type, fetchAgendaSlotListSaga);
});

// Root saga to export and run all watcher sagas
export default tryCatch(function getAgendaSlotListRootSaga() {
  return function* rootSaga() {
    yield watchAgendaSlotListRequest();
  };
})();
