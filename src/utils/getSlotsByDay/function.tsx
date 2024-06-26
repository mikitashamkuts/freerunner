import {AgendaSlotListType} from '../../types';
import {getFunctionTryCatchWrapped} from '../getFunctionTryCatchWrapped';

function getSlotsByDay(slots: AgendaSlotListType, targetDate: string): AgendaSlotListType {
  if (Array.isArray(slots) && targetDate) {
    const formattedTargetDate = new Date(targetDate).toISOString().split('T')[0];
    return slots.filter(slot => {
      const slotDate = slot.Start.split('T')[0];
      return slotDate === formattedTargetDate;
    });
  }
  // TODO
  // getExceptionCaptured(getSlotsByDay, exceptionList.InvalidParam);
  return [];
}

export default getFunctionTryCatchWrapped(getSlotsByDay);
