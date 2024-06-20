import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';

import {sendFetchOrderListRequest} from '../../../api';
import {OrderType} from '../../../types';
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

// Saga to fetch orders
function* fetchOrders() {
  try {
    const response: AxiosResponse<FetchOrdersResponse> = yield call(sendFetchOrderListRequest);
    const orders = response.data.data.orders;
    yield put(fetchOrderListSuccess(orders));
  } catch (error) {
    yield put(fetchOrderListFailure());
  }
}

// Watcher saga to watch for fetchOrderListRequest actions
function* watchFetchOrders() {
  yield takeLatest(fetchOrderListRequest.type, fetchOrders);
}

// Root saga to export and run all watcher sagas
export default function* rootSaga() {
  yield watchFetchOrders();
}
