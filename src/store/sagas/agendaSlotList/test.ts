// orderListSaga.test.js
import {AxiosResponse} from 'axios';
import {expectSaga, testSaga} from 'redux-saga-test-plan';
import {call} from 'redux-saga/effects';

import {sendFetchOrderListRequest} from '../../../api';
import {exceptionList, httpResponceStatusList} from '../../../constants';
import {OrderType} from '../../../types';
import {getExceptionCaptured} from '../../../utils';
import {
  fetchOrderListFailure,
  fetchOrderListRequest,
  fetchOrderListSuccess,
} from '../../slices/agendaSlotList';

import {fetchOrderListSaga, watchFetchOrderListRequest} from '.';

const mockOrders: OrderType[] = [
  {id: '1', merchantName: 'Merchant 1'},
  {id: '2', merchantName: 'Merchant 2'},
];

const mockResponse: AxiosResponse = {
  data: {data: {orders: mockOrders}},
  status: httpResponceStatusList.Ok,
  statusText: 'OK',
  headers: {},
  config: {},
};

jest.mock('../../../utils', () => ({
  getExceptionCaptured: jest.fn(),
  getFunctionTryCatchWrapped: jest.fn(fn => fn),
}));

describe('fetchOrderListSaga', () => {
  it('should handle success scenario', () => {
    return expectSaga(fetchOrderListSaga)
      .provide([[call(sendFetchOrderListRequest), mockResponse]])
      .put(fetchOrderListSuccess(mockOrders))
      .run();
  });

  it('should handle failure scenario with status not OK', () => {
    const errorResponse: AxiosResponse = {
      data: {},
      status: 500,
      statusText: 'Internal Server Error',
      headers: {},
      config: {},
    };

    return expectSaga(fetchOrderListSaga)
      .provide([[call(sendFetchOrderListRequest), errorResponse]])
      .put(fetchOrderListFailure())
      .run()
      .then(() => {
        expect(getExceptionCaptured).toHaveBeenCalledWith(
          fetchOrderListSaga,
          exceptionList.Network,
          errorResponse,
        );
      });
  });
});

describe('watchFetchOrderListRequest', () => {
  it('should take latest fetchOrderListRequest and call fetchOrderListSaga', () => {
    testSaga(watchFetchOrderListRequest)
      .next()
      .takeLatest(fetchOrderListRequest.type, fetchOrderListSaga)
      .next()
      .isDone();
  });
});
