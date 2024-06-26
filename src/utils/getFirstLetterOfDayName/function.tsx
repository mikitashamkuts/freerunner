import {exceptionList} from '../../constants';
import {getExceptionCaptured} from '../getExceptionCaptured';
import {getFunctionTryCatchWrapped} from '../getFunctionTryCatchWrapped';

/**
 * Function to get the first letter of the day name from a date string.
 *
 * @param {string} dateString - The date string in 'YYYY-MM-DD' format.
 * @returns {string} The first letter of the day name.
 */
function getFirstLetterOfDayName(dateString: string): string {
  if (dateString && typeof dateString === 'string') {
    const date = new Date(dateString);
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const dayOfWeek = date.getDay();
    return days[dayOfWeek];
  }
  getExceptionCaptured(getFirstLetterOfDayName, exceptionList.InvalidParam);
  return '';
}

export default getFunctionTryCatchWrapped(getFirstLetterOfDayName);
