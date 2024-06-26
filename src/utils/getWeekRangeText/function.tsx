import {exceptionList} from '../../constants';
import {getExceptionCaptured} from '../getExceptionCaptured';
import {getFunctionTryCatchWrapped} from '../getFunctionTryCatchWrapped';

function getWeekRangeText(weekShift: number = 0): string {
  if (typeof weekShift === 'number') {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const firstDayOfWeek = new Date(
      currentDate.setDate(currentDate.getDate() + daysToMonday + weekShift * 7),
    );
    const lastDayOfWeek = new Date(currentDate.setDate(firstDayOfWeek.getDate() + 6));
    const options = {day: 'numeric', month: 'short'} as const;
    const firstDayString = firstDayOfWeek.toLocaleDateString('en-US', options);
    const lastDayString = lastDayOfWeek.toLocaleDateString('en-US', options);
    return `${firstDayString} - ${lastDayString}`;
  }
  getExceptionCaptured(getWeekRangeText, exceptionList.InvalidParam);
  return '';
}

export default getFunctionTryCatchWrapped(getWeekRangeText);
