import * as Sentry from '@sentry/react-native';

import {exceptionList, isDevelopmentEnvironment} from '../../constants';

/**
 * Captures and logs exceptions based on the environment.
 *
 * @param {{name: string}} context - The context where the exception occurred.
 * @param {keyof typeof exceptionList} exception - The exception to be captured.
 * @param {{details?: any}} details is additional details of the captured exception.
 */
const getExceptionCaptured = (
  context: {name: string},
  exception: keyof typeof exceptionList,
  details?: any,
) => {
  const exceptionData = {place: context?.name, exception, details};
  if (isDevelopmentEnvironment) {
    console.warn('Exception Captured: ', exceptionData);
  } else {
    Sentry?.captureMessage(JSON.stringify(exceptionData));
  }
};

// intentionally unwrapped in tryCatch in case of occurrence the unhandled error to captured by the external handler
export default getExceptionCaptured;
