import {addWeeks, format} from 'date-fns';

import {exceptionList} from '../../constants';
import {getExceptionCaptured} from '../getExceptionCaptured';
import {getFunctionTryCatchWrapped} from '../getFunctionTryCatchWrapped';

/**
 * Function to get the date of the nearest Monday with an offset
 * @param {number} weekOffset - Number of weeks to offset (negative for past weeks, positive for future weeks)
 * @returns {string} The date of the nearest Monday in 'yyyyMMdd' format
 */
function getNearestMondayWithOffset(weekOffset: number = 0): string {
  if (typeof weekOffset === 'number') {
    const today = new Date();
    const day = today.getDay();
    const diff = (day === 0 ? -6 : 1) - day;
    const nearestMonday = new Date(today.setDate(today.getDate() + diff));
    const offsetMonday = addWeeks(nearestMonday, weekOffset);
    return format(offsetMonday, 'yyyyMMdd');
  }
  getExceptionCaptured(getNearestMondayWithOffset, exceptionList.InvalidParam);
  return '';
}

export default getFunctionTryCatchWrapped(getNearestMondayWithOffset);
