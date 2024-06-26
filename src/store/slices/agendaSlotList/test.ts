import {loadingStatusList} from '../../../constants';
import {AgendaSlotListType, AgendaSlotType} from '../../../types';
import agendaSlotListReducer, {
  AgendaSlotListStateType,
  addSlotToBookedAgendaSlotList,
  fetchAgendaSlotListFailure,
  fetchAgendaSlotListRequest,
  fetchAgendaSlotListSuccess,
} from './slice';

describe('agendaSlotListSlice', () => {
  const initialState: AgendaSlotListStateType = {
    list: [],
    status: loadingStatusList.Success,
    bookedList: [],
  };

  it('should handle initial state', () => {
    expect(agendaSlotListReducer(undefined, {type: 'unknown'})).toEqual(initialState);
  });

  it('should handle fetchAgendaSlotListRequest', () => {
    const actual = agendaSlotListReducer(initialState, fetchAgendaSlotListRequest());
    expect(actual.status).toEqual(loadingStatusList.Loading);
  });

  it('should handle fetchAgendaSlotListSuccess', () => {
    const payload: AgendaSlotListType = [
      {Start: '2024-06-24T09:00:00', End: '2024-06-24T09:10:00', Taken: true},
    ];
    const actual = agendaSlotListReducer(initialState, fetchAgendaSlotListSuccess(payload));
    expect(actual.list).toEqual(payload);
    expect(actual.status).toEqual(loadingStatusList.Success);
  });

  it('should handle fetchAgendaSlotListFailure', () => {
    const actual = agendaSlotListReducer(initialState, fetchAgendaSlotListFailure());
    expect(actual.status).toEqual(loadingStatusList.Error);
  });

  it('should handle addSlotToBookedAgendaSlotList', () => {
    const payload: AgendaSlotType = {Start: '2024-06-24T09:00:00', End: '2024-06-24T09:10:00'};
    const actual = agendaSlotListReducer(initialState, addSlotToBookedAgendaSlotList(payload));
    expect(actual.bookedList).toEqual([payload]);
  });
});
