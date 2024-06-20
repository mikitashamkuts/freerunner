import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {loadingStatusList} from '../../../constants';
import {OrderType} from '../../../types';

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
const ordersSlice = createSlice({
  name: 'orderList',
  initialState,
  reducers: {
    /**
     * Sets the loading status when the fetch order list request is initiated.
     * @param state - Current state of the order list.
     */
    fetchOrderListRequest(state) {
      state.status = loadingStatusList.Loading;
    },
    /**
     * Updates the order list and sets the status to success.
     * @param state - Current state of the order list.
     * @param action - Action containing the payload with the list of orders.
     */
    fetchOrderListSuccess(state, action: PayloadAction<OrderType[]>) {
      state.list = action.payload;
      state.status = loadingStatusList.Success;
    },
    /**
     * Sets the error status when the fetch order list request fails.
     * @param state - Current state of the order list.
     */
    fetchOrderListFailure(state) {
      state.status = loadingStatusList.Error;
    },
    /**
     * Sets the loading status when the fetch order list request is initiated.
     * @param state - Current state of the order list.
     */
    refreshOrderListRequest(state) {
      state.status = loadingStatusList.Loading;
    },
  },
});

// Export actions to be used in components and sagas
export const {fetchOrderListRequest, fetchOrderListSuccess, fetchOrderListFailure} =
  ordersSlice.actions;

// Export the reducer to be used in the store
export default ordersSlice.reducer;
