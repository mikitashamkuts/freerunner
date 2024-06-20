import {all, call, put, takeLatest} from 'redux-saga/effects';

import {sendPayOrderRequest} from '../../../api';
import {payOrderFailure, payOrderRequest, payOrderSuccess, setOrder} from '../../slices';

/**
 * Saga to handle paying an order.
 * @param {object} action - The dispatched action.
 */
function* payOrderSaga(action: {payload: {orderId: number}}) {
  try {
    const {orderId} = action.payload;
    // @ts-ignore
    const response = yield call(sendPayOrderRequest, orderId);
    yield put(payOrderSuccess(response.data.payOrder));
    console.log(response); // for demo purpose
  } catch {
    yield put(payOrderFailure());
  }
}

function* setOrderSaga() {}

// Watcher saga to watch for fetchOrderListRequest actions
function* watchSetOrderSaga() {
  yield takeLatest(setOrder.type, setOrderSaga);
}

// Watcher saga to watch for fetchOrderListRequest actions
function* watchPayOrderSaga() {
  // @ts-ignore
  yield takeLatest(payOrderRequest.type, payOrderSaga);
}

// Root saga to export and run all watcher sagas
export default function* rootSaga() {
  yield all([watchSetOrderSaga(), watchPayOrderSaga()]);
}
