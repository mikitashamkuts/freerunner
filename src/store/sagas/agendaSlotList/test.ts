import {AxiosResponse} from 'axios';
import {runSaga} from 'redux-saga';

import {takeLatest} from 'redux-saga/effects';
import {sendFetchAgendaSlotListRequest} from '../../../api';
import {httpResponceStatusList} from '../../../constants';
import {AgendaSlotListType} from '../../../types';
import {
  fetchAgendaSlotListFailure,
  fetchAgendaSlotListRequest,
  fetchAgendaSlotListSuccess,
} from '../../slices/agendaSlotList';
import {fetchAgendaSlotListSaga, watchAgendaSlotListRequest} from './saga';

describe('agendaSlotListSaga', () => {
  it('should handle successful fetch of agenda slot list', async () => {
    const dispatched: any[] = [];
    const payload = 0;
    const mockResponse: AxiosResponse<AgendaSlotListType> = {
      data: [{Start: '2024-06-24T09:00:00', End: '2024-06-24T09:10:00', Taken: true}],
      status: httpResponceStatusList.Ok,
      statusText: '',
      headers: {},
      config: {},
    };

    (sendFetchAgendaSlotListRequest as jest.Mock) = jest.fn(() => Promise.resolve(mockResponse));

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      fetchAgendaSlotListSaga,
      {payload},
    ).toPromise();

    expect(sendFetchAgendaSlotListRequest).toHaveBeenCalledWith(payload);
    expect(dispatched).toEqual([fetchAgendaSlotListSuccess(mockResponse.data)]);
  });

  it('should handle failure to fetch agenda slot list', async () => {
    const dispatched: any[] = [];
    const payload = 0;
    const mockResponse: AxiosResponse<AgendaSlotListType> = {
      data: [],
      status: 500,
      statusText: 'Internal Server Error',
      headers: {},
      config: {},
    };

    (sendFetchAgendaSlotListRequest as jest.Mock) = jest.fn(() => Promise.resolve(mockResponse));

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      fetchAgendaSlotListSaga,
      {payload},
    ).toPromise();

    expect(sendFetchAgendaSlotListRequest).toHaveBeenCalledWith(payload);
    expect(dispatched).toEqual([fetchAgendaSlotListFailure()]);
  });

  it('should watch for fetchAgendaSlotListRequest action', () => {
    const generator = watchAgendaSlotListRequest();
    expect(generator.next().value).toEqual(
      takeLatest(fetchAgendaSlotListRequest.type, fetchAgendaSlotListSaga),
    );
    expect(generator.next().done).toBeTruthy();
  });
});
