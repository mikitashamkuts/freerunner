// orderListSaga.test.js
import {AxiosResponse} from 'axios';
import {expectSaga, testSaga} from 'redux-saga-test-plan';
import {throwError} from 'redux-saga-test-plan/providers';
import {call} from 'redux-saga/effects';
import {sendFetchOrderListRequest} from '../../../api';
import {exceptionList, httpResponceStatusList} from '../../../constants';
import {OrderType} from '../../../types';
import {getExceptionCaptured} from '../../../utils';
import {
  fetchOrderListFailure,
  fetchOrderListRequest,
  fetchOrderListSuccess,
} from '../../slices/orderList';
import fetchOrderListSaga, {watchFetchOrderListRequest} from './saga';

// Mock data
const mockOrders: OrderType[] = [
  {id: '1', merchantName: 'Merchant 1'},
  {id: '2', merchantName: 'Merchant 2'},
];

const mockResponse: AxiosResponse = {
  data: {data: {orders: mockOrders}},
  status: httpResponceStatusList.OK,
  statusText: 'OK',
  headers: {},
  config: {},
};

// Test for fetchOrderListSaga
describe('fetchOrderListSaga', () => {
  it('should handle success scenario', () => {
    return expectSaga(fetchOrderListSaga)
      .provide([[call(sendFetchOrderListRequest), mockResponse]])
      .put(fetchOrderListSuccess(mockOrders))
      .run();
  });

  it('should handle failure scenario', () => {
    const errorResponse: AxiosResponse = {
      data: {},
      status: 500,
      statusText: 'Internal Server Error',
      headers: {},
      config: {},
    };

    return expectSaga(fetchOrderListSaga)
      .provide([
        [call(sendFetchOrderListRequest), throwError(errorResponse)],
        [call(getExceptionCaptured, fetchOrderListSaga, exceptionList.Network, errorResponse)],
      ])
      .put(fetchOrderListFailure())
      .run();
  });
});

// Test for watchFetchOrderListRequest
describe('watchFetchOrderListRequest', () => {
  it('should take latest fetchOrderListRequest and call fetchOrderListSaga', () => {
    testSaga(watchFetchOrderListRequest)
      .next()
      .takeLatest(fetchOrderListRequest.type, fetchOrderListSaga)
      .next()
      .isDone();
  });
});
