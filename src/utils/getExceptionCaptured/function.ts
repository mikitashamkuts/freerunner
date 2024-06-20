import * as Sentry from '@sentry/react-native';

import {exceptionList, isDevelopmentEnvironment} from '../../constants';
import {getFunctionTryCatchWrapped} from '../getFunctionTryCatchWrapped';

const getExceptionCaptured = (context: {name: string}, exeption: keyof typeof exceptionList) => {
  const exeptionData = {place: context?.name, exeption};
  if (isDevelopmentEnvironment) {
    console.warn('Exception Captured: ', exeptionData);
  } else {
    Sentry.captureMessage(JSON.stringify(exeptionData));
  }
};

export default getFunctionTryCatchWrapped(getExceptionCaptured);
