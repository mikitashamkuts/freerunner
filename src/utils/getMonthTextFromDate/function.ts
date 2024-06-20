import {getFunctionTryCatchWrapped} from '../getFunctionTryCatchWrapped';

function getMonthTextFromDate(date: Date) {
  if (date instanceof Date) {
    return date.toLocaleString('default', {month: 'long'});
  } else {
    return '';
  }
}

export default getFunctionTryCatchWrapped(getMonthTextFromDate);
