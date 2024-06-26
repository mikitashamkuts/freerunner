import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {loadingStatusList} from '../../../constants';
import {AgendaSlotListType, AgendaSlotType} from '../../../types';
import {getFunctionTryCatchWrapped as tryCatch} from '../../../utils';

export interface AgendaSlotListStateType {
  list: AgendaSlotListType;
  status: keyof typeof loadingStatusList;
  bookedList: AgendaSlotListType;
}

const initialState: AgendaSlotListStateType = {
  list: [],
  status: loadingStatusList.Success,
  bookedList: [],
};

const agendaSlotListSlice = tryCatch(function getAgendaSlotListSlice() {
  return createSlice({
    name: 'agendaSlotList',
    initialState,
    reducers: {
      /**
       * Sets the loading status when the fetch agenda slot list request is initiated.
       * @param state - Current state of the agenda slot list.
       */
      fetchAgendaSlotListRequest(state) {
        tryCatch(function fetchAgendaSlotListRequestSafe() {
          state.status = loadingStatusList.Loading;
        })();
      },
      /**
       * Updates the agenda slot list and sets the status to success.
       * @param state - Current state of the agenda slot list.
       * @param action - Action containing the payload with the list of agenda slots.
       */
      fetchAgendaSlotListSuccess(state, action: PayloadAction<AgendaSlotListType>) {
        tryCatch(function fetchAgendaSlotListSuccessSafe() {
          state.list = action.payload;
          state.status = loadingStatusList.Success;
        })();
      },
      /**
       * Sets the error status when the fetch agenda slot list request fails.
       * @param state - Current state of the agenda slot list.
       */
      fetchAgendaSlotListFailure(state) {
        tryCatch(function fetchAgendaSlotListFailureSafe() {
          state.status = loadingStatusList.Error;
        })();
      },
      /**
       * Adds a slot to the booked agenda slot list.
       * @param state - Current state of the agenda slot list.
       * @param action - Action containing the payload with the slot to be added.
       */
      addSlotToBookedAgendaSlotList(state, action: PayloadAction<AgendaSlotType>) {
        tryCatch(function addSlotToBookedAgendaSlotListSafe() {
          state.bookedList = [...state.bookedList, action.payload];
        })();
      },
    },
  });
})();

export const {
  fetchAgendaSlotListRequest,
  fetchAgendaSlotListSuccess,
  fetchAgendaSlotListFailure,
  addSlotToBookedAgendaSlotList,
} = agendaSlotListSlice.actions;

export default agendaSlotListSlice.reducer;
