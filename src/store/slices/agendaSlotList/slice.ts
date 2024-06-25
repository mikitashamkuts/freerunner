import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {loadingStatusList} from '../../../constants';
import {AgendaSlotListType} from '../../../types';
import {getFunctionTryCatchWrapped as tryCatch} from '../../../utils';

// Define the shape of the state
export interface AgendaSlotListStateType {
  list: AgendaSlotListType;
  status: keyof typeof loadingStatusList;
}

// Initial state of the agenda slot list
const initialState: AgendaSlotListStateType = {
  list: [],
  status: loadingStatusList.Success,
};

const agendaSlotListSlice = tryCatch(function getAgendaSlotListSlice() {
  return createSlice({
    name: 'agendaSlotList',
    initialState,
    reducers: {
      /**
       * Sets the loading status when the fetch order list request is initiated.
       * @param state - Current state of the order list.
       */
      fetchAgendaSlotListRequest(state) {
        tryCatch(function fetchAgendaSlotListRequestSafe() {
          state.status = loadingStatusList.Loading;
        })();
      },
      /**
       * Updates the order list and sets the status to success.
       * @param state - Current state of the order list.
       * @param action - Action containing the payload with the list of orders.
       */
      fetchAgendaSlotListSuccess(state, action: PayloadAction<AgendaSlotListType>) {
        tryCatch(function fetchAgendaSlotListSuccessSafe() {
          state.list = action.payload;
          state.status = loadingStatusList.Success;
        })();
      },
      /**
       * Sets the error status when the fetch order list request fails.
       * @param state - Current state of the order list.
       */
      fetchAgendaSlotListFailure(state) {
        tryCatch(function fetchAgendaSlotListFailureSafe() {
          state.status = loadingStatusList.Error;
        })();
      },
    },
  });
})();

// Export actions to be used in components and sagas
export const {fetchAgendaSlotListRequest, fetchAgendaSlotListSuccess, fetchAgendaSlotListFailure} =
  agendaSlotListSlice.actions;

// Export the reducer to be used in the store
export default agendaSlotListSlice.reducer;
