import {AxiosResponse} from 'axios';

import {httpResponceStatusList} from '@src/constants';
import {AgendaSlotListType} from '@src/types';
import {getNearestMondayWithOffset} from '@src/utils';

import axiosInstance from '../config';

/**
 * Function to fetch weekly agenda slots from the API
 * @param {number} weekOffset - Number of weeks to offset (negative for past weeks, positive for future weeks)
 * @returns {Promise<AxiosResponse<AgendaSlotListType> | null>} The API response
 */
export const sendFetchAgendaSlotListRequest = async (
  weekOffset: number = 0,
): Promise<AxiosResponse<AgendaSlotListType> | {status: number}> => {
  try {
    const nearestMonday = getNearestMondayWithOffset(weekOffset);
    const url = `availability/GetWeeklySlots/${nearestMonday}`;
    return await axiosInstance.get<AgendaSlotListType>(url);
  } catch {
    return {status: httpResponceStatusList.BadRequest};
  }
};

export default sendFetchAgendaSlotListRequest;
