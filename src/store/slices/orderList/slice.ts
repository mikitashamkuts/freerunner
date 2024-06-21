import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {loadingStatusList} from '../../../constants';
import {OrderType} from '../../../types';
import {getFunctionTryCatchWrapped as tryCatch} from '../../../utils';

// Define the shape of the state
interface OrderListStateType {
  list: OrderType[];
  status: keyof typeof loadingStatusList;
}

// Initial state of the order list
const initialState: OrderListStateType = {
  list: [],
  status: loadingStatusList.Success,
};

// Create a slice for orders with actions and reducers
const orderListSlice = tryCatch(function getOrderListSlice() {
  return createSlice({
    name: 'orderList',
    initialState,
    reducers: {
      /**
       * Sets the loading status when the fetch order list request is initiated.
       * @param state - Current state of the order list.
       */
      fetchOrderListRequest(state) {
        tryCatch(function fetchOrderListRequestSafe() {
          state.status = loadingStatusList.Loading;
        })();
      },
      /**
       * Updates the order list and sets the status to success.
       * @param state - Current state of the order list.
       * @param action - Action containing the payload with the list of orders.
       */
      fetchOrderListSuccess(state, action: PayloadAction<OrderType[]>) {
        tryCatch(function fetchOrderListSuccessSafe() {
          state.list = action.payload;
          state.status = loadingStatusList.Success;
        })();
      },
      /**
       * Sets the error status when the fetch order list request fails.
       * @param state - Current state of the order list.
       */
      fetchOrderListFailure(state) {
        tryCatch(function fetchOrderListFailureSafe() {
          state.status = loadingStatusList.Error;
        })();
      },
    },
  });
})();

// Export actions to be used in components and sagas
export const {fetchOrderListRequest, fetchOrderListSuccess, fetchOrderListFailure} =
  orderListSlice.actions;

// Export the reducer to be used in the store
export default orderListSlice.reducer;
