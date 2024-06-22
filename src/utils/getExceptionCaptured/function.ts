import * as Sentry from '@sentry/react-native';

import {exceptionList, isDevelopmentEnvironment} from '../../constants';

/**
 * Captures and logs exceptions based on the environment.
 *
 * @param {{name: string}} context - The context where the exception occurred.
 * @param {keyof typeof exceptionList} exception - The exception to be captured.
 * @param {{details?: any}} details is additional details of the captured exeption.
 */
const getExceptionCaptured = (
  context: {name: string},
  exception: keyof typeof exceptionList,
  details?: any,
) => {
  const exeptionData = {place: context?.name, exception, details};
  if (isDevelopmentEnvironment) {
    console.warn('Exception Captured: ', exeptionData);
  } else {
    Sentry?.captureMessage(JSON.stringify(exeptionData));
  }
};

// intentionaly unwrapped in tryCatch in case of occurance the unhadnled error to captured by the extenral handler
export default getExceptionCaptured;
