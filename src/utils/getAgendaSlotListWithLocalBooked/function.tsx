import {exceptionList} from '../../constants';
import {AgendaSlotListType} from '../../types';
import {getExceptionCaptured} from '../getExceptionCaptured';
import {getFunctionTryCatchWrapped} from '../getFunctionTryCatchWrapped';

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
