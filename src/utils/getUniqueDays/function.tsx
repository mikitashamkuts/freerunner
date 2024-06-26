import {exceptionList} from '../../constants';
import {AgendaSlotListType} from '../../types';
import {getExceptionCaptured} from '../getExceptionCaptured';
import {getFunctionTryCatchWrapped} from '../getFunctionTryCatchWrapped';

function getUniqueDays(list: AgendaSlotListType): string[] {
  if (Array.isArray(list)) {
    const uniqueDays = new Set(list.map(slot => slot.Start.split('T')[0]));
    return Array.from(uniqueDays);
  }
  getExceptionCaptured(getUniqueDays, exceptionList.InvalidParam);
  return [];
}

export default getFunctionTryCatchWrapped(getUniqueDays);
