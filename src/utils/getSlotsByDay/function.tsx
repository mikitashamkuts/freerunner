import {AgendaSlotListType} from '../../types';
import {getExceptionCaptured} from '../getExceptionCaptured';
import {getFunctionTryCatchWrapped} from '../getFunctionTryCatchWrapped';

function getSlotsByDay(slots: AgendaSlotListType, targetDate: string): AgendaSlotListType {
  if (Array.isArray(slots) && targetDate) {
    const formattedTargetDate = new Date(targetDate).toISOString().split('T')[0];
    return slots.filter(slot => {
      const slotDate = slot.Start.split('T')[0];
      return slotDate === formattedTargetDate;
    });
  }
  getExceptionCaptured(getSlotsByDay, 'InvalidParam');
  return [];
}

export default getFunctionTryCatchWrapped(getSlotsByDay);
