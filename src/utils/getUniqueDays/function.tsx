import {exceptionList} from '@src/constants';
import {AgendaSlotListType} from '@src/types';
import {getExceptionCaptured} from '../getExceptionCaptured';
import {getFunctionTryCatchWrapped} from '../getFunctionTryCatchWrapped';

/**
 * Function to get unique days from a list of agenda slots.
 *
 * @param {AgendaSlotListType} list - The list of agenda slots.
 * @returns {string[]} An array of unique days in 'YYYY-MM-DD' format.
 */
function getUniqueDays(list: AgendaSlotListType): string[] {
  if (Array.isArray(list)) {
    const uniqueDays = new Set(list.map(slot => slot.Start.split('T')[0]));
    return Array.from(uniqueDays);
  }
  getExceptionCaptured(getUniqueDays, exceptionList.InvalidParam);
  return [];
}

export default getFunctionTryCatchWrapped(getUniqueDays);
