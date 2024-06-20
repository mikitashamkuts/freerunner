import {getFunctionTryCatchWrapped} from '../getFunctionTryCatchWrapped';

function getSymbolLimitedText(text: string, limit: number) {
  if (!!text && typeof text === 'string') {
    return text.length < limit ? `${text}` : `${text.substring(0, limit - 3)}...`;
  }
  return '';
}

export default getFunctionTryCatchWrapped(getSymbolLimitedText);
