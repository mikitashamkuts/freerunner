import {AgendaSlotListType} from '../../types';
import {getFunctionTryCatchWrapped} from '../getFunctionTryCatchWrapped';

/**
 * Function to get slots by a specific day.
 *
 * @param {AgendaSlotListType} slots - The list of agenda slots.
 * @param {string} targetDate - The target date in 'YYYY-MM-DD' format.
 * @returns {AgendaSlotListType} The filtered list of slots for the target date.
 */
function getSlotsByDay(slots: AgendaSlotListType, targetDate: string): AgendaSlotListType {
  if (Array.isArray(slots) && targetDate) {
    const formattedTargetDate = new Date(targetDate).toISOString().split('T')[0];
    return slots.filter(slot => {
      const slotDate = slot.Start.split('T')[0];
      return slotDate === formattedTargetDate;
    });
  }
  // TODO: Handle the invalid parameter case
  // getExceptionCaptured(getSlotsByDay, exceptionList.InvalidParam);
  return [];
}

export default getFunctionTryCatchWrapped(getSlotsByDay);
