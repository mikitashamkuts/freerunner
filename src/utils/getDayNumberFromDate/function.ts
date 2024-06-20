import {exceptionList} from '../../constants';
import {getExceptionCaptured} from '../getExceptionCaptured';
import {getFunctionTryCatchWrapped} from '../getFunctionTryCatchWrapped';

function getDayNumberFromDate(date: Date): string {
  if (date instanceof Date) {
    return date.getDay() + '';
  } else {
    getExceptionCaptured(getDayNumberFromDate, exceptionList.InvalidParam);
    return '';
  }
}

export default getFunctionTryCatchWrapped(getDayNumberFromDate);
