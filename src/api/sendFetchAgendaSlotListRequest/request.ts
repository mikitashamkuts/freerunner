import axios, {AxiosResponse} from 'axios';
import {addWeeks, format} from 'date-fns';
import {AgendaSlotListType} from '../../types';

/**
 * Function to get the date of the nearest Monday with an offset
 * @param {number} weekOffset - Number of weeks to offset (negative for past weeks, positive for future weeks)
 * @returns {string} The date of the nearest Monday in 'yyyyMMdd' format
 */
const getNearestMondayWithOffset = (weekOffset: number = 0): string => {
  const today = new Date();
  const day = today.getDay();
  const diff = (day === 0 ? -6 : 1) - day; // Calculate difference to Monday
  const nearestMonday = new Date(today.setDate(today.getDate() + diff));
  const offsetMonday = addWeeks(nearestMonday, weekOffset);
  return format(offsetMonday, 'yyyyMMdd');
};

/**
 * Function to fetch weekly slots from the API
 * @param {number} weekOffset - Number of weeks to offset (negative for past weeks, positive for future weeks)
 * @returns {Promise<AxiosResponse<AgendaSlotList>>} The API response
 */
export const sendFetchAgendaSlotListRequest = async (
  weekOffset: number = 0,
): Promise<AxiosResponse<AgendaSlotListType>> => {
  try {
    const nearestMonday = getNearestMondayWithOffset(weekOffset);
    const url = `https://draliatest.azurewebsites.net/api/availability/GetWeeklySlots/${nearestMonday}`;
    return axios.get<AgendaSlotListType>(url);
  } catch {}
};

export default sendFetchAgendaSlotListRequest;
