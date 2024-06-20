import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState = {
  order: null,
};

type PayOrderRequestType = {
  orderId: string;
};
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder(state, action) {
      state.order = action.payload;
    },
    resetOrder(state) {
      state.order = null;
    },
    payOrderRequest(_, _action: PayloadAction<PayOrderRequestType>) {},
    payOrderSuccess() {},
    payOrderFailure() {},
  },
});

export const {setOrder, resetOrder, payOrderRequest, payOrderSuccess, payOrderFailure} =
  orderSlice.actions;

export default orderSlice.reducer;
