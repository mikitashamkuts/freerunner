import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';

import {sendFetchOrderListRequest} from '../../../api';
import {exceptionList, httpResponceStatusList} from '../../../constants';
import {OrderType} from '../../../types';
import {getExceptionCaptured, getFunctionTryCatchWrapped as tryCatch} from '../../../utils';
import {
  fetchOrderListFailure,
  fetchOrderListRequest,
  fetchOrderListSuccess,
} from '../../slices/orderList';

// Interface for the API response structure
interface FetchOrdersResponse {
  data: {
    orders: OrderType[];
  };
}

// Saga to fetch order list
export const fetchOrderListSaga = tryCatch(function* fetchOrderListSagaSafe() {
  const response: AxiosResponse<FetchOrdersResponse> = yield call(sendFetchOrderListRequest);
  switch (response.status) {
    case httpResponceStatusList.OK:
      const orders = response.data.data.orders;
      yield put(fetchOrderListSuccess(orders));
      break;
    default:
      getExceptionCaptured(fetchOrderListSagaSafe, exceptionList.Network, response);
      yield put(fetchOrderListFailure());
      break;
  }
});

// Watcher saga to watch for fetchOrderListRequest actions
export const watchFetchOrderListRequest = tryCatch(function* watchFetchOrderListRequestSafe() {
  yield takeLatest(fetchOrderListRequest.type, fetchOrderListSaga);
});

// Root saga to export and run all watcher sagas
export default tryCatch(function getOrderListRootSaga() {
  return function* rootSaga() {
    yield watchFetchOrderListRequest();
  };
})();
