// Define the structure of the global state
import orderSliceReducer from './order/slice';
import orderListReducer from './orderList/slice';

export const stateStructure = {
  orderList: orderListReducer,
  order: orderSliceReducer,
};
