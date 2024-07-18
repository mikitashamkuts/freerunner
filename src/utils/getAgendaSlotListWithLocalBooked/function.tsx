import {exceptionList} from '@src/constants';
import {AgendaSlotListType} from '@src/types';
import {getExceptionCaptured} from '../getExceptionCaptured';
import {getFunctionTryCatchWrapped} from '../getFunctionTryCatchWrapped';

/**
 * Function to merge the agenda slot list with locally booked slots.
 *
 * @param {AgendaSlotListType} list - The original agenda slot list.
 * @param {AgendaSlotListType} bookedList - The locally booked agenda slot list.
 * @returns {AgendaSlotListType} The combined agenda slot list with updated "Taken" status.
 */
function getAgendaSlotListWithLocalBooked(
  list: AgendaSlotListType,
  bookedList: AgendaSlotListType,
): AgendaSlotListType {
  if (Array.isArray(list) && Array.isArray(bookedList)) {
    const bookedListMap = new Map(bookedList.map(item => [`${item.Start}-${item.End}`, item]));
    return list.map(slot => {
      const {Start, End, Taken} = slot;
      const isBooked = bookedListMap.has(`${Start}-${End}`);
      return {
        Start,
        End,
        Taken: Taken || isBooked,
      };
    });
  }
  getExceptionCaptured(getAgendaSlotListWithLocalBooked, exceptionList.InvalidParam);
  return [];
}

export default getFunctionTryCatchWrapped(getAgendaSlotListWithLocalBooked);
