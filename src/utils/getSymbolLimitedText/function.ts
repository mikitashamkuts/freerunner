import {exceptionList} from '@src/constants';
import {getExceptionCaptured} from '../getExceptionCaptured';
import {getFunctionTryCatchWrapped} from '../getFunctionTryCatchWrapped';

/**
 * Limits text to a specified length, appending ellipsis if truncated.
 *
 * @param {string} text - The text to be limited.
 * @param {number} limit - The maximum length of the text.
 * @returns {string} - The limited text with ellipsis if truncated, or an empty string if the input is invalid.
 */
function getSymbolLimitedText(text: string, limit: number) {
  if (!!text && typeof text === 'string') {
    return text.length <= limit ? text : `${text.substring(0, limit - 3)}...`;
  }
  getExceptionCaptured(getSymbolLimitedText, exceptionList.InvalidParam);
  return '';
}

export default getFunctionTryCatchWrapped(getSymbolLimitedText);
