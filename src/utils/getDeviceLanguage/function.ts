import * as Localization from 'react-native-localize';

import {exceptionList} from '@src/constants';

import {getExceptionCaptured} from '../getExceptionCaptured';
import {getFunctionTryCatchWrapped} from '../getFunctionTryCatchWrapped';

/**
 * getDeviceLanguage
 * @returns {deviceLanguage} device language string
 */
function getDeviceLanguage() {
  const deviceLanguage = Localization.getLocales()[0].languageCode.slice(0, 2);
  if (deviceLanguage) {
    return deviceLanguage === 'es' ? 'es' : 'en';
  }
  getExceptionCaptured(getDeviceLanguage, exceptionList.UnavailableModule);
  return 'en';
}

export default getFunctionTryCatchWrapped(getDeviceLanguage);
