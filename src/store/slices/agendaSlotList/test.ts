import {loadingStatusList} from '../../../constants';
import {OrderType} from '../../../types';
import orderListSlice, {
  fetchOrderListFailure,
  fetchOrderListRequest,
  fetchOrderListSuccess,
} from './slice';

describe('order list slice', () => {
  const initialState = {
    list: [],
    status: loadingStatusList.Success,
  };

  it('should handle initial state', () => {
    expect(orderListSlice(undefined, {type: 'unknown'})).toEqual(initialState);
  });

  it('should handle fetchOrderListRequest', () => {
    const action = fetchOrderListRequest();
    const state = orderListSlice(initialState, action);
    expect(state).toEqual({
      list: [],
      status: loadingStatusList.Loading,
    });
  });

  it('should handle fetchOrderListSuccess', () => {
    const orders: OrderType[] = [
      {id: '1', merchantName: 'Merchant 1'},
      {id: '2', merchantName: 'Merchant 2'},
    ];
    const action = fetchOrderListSuccess(orders);
    const state = orderListSlice(initialState, action);
    expect(state).toEqual({
      list: orders,
      status: loadingStatusList.Success,
    });
  });

  it('should handle fetchOrderListFailure', () => {
    const action = fetchOrderListFailure();
    const state = orderListSlice(initialState, action);
    expect(state).toEqual({
      list: [],
      status: loadingStatusList.Error,
    });
  });
});
