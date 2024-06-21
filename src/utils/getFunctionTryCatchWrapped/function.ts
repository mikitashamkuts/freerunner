import * as Sentry from '@sentry/react-native';
import _ from 'lodash';

import {isDevelopmentEnvironment} from '../../constants';

/**
 * Wraps a function with a try-catch block for error handling.
 *
 * @param {Function} func - The function to wrap.
 * @returns {Function} - The wrapped function with error handling.
 */
export const getFunctionTryCatchWrapped = (func: any) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  return _.wrap(func, (func, ...args) => {
    try {
      return func(...args);
    } catch (error) {
      const place = func?.name || 'arrow function';
      if (isDevelopmentEnvironment) {
        console.error(`${place}: `, error);
      } else {
        Sentry.captureException({
          place,
          error,
        });
      }
    }
  });
};
