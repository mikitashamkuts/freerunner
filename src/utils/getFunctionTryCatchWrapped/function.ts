import * as Sentry from '@sentry/react-native';
import _ from 'lodash';

import {isDevelopmentEnvironment} from '../../constants';

export const getFunctionTryCatchWrapped = (func: any) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  return _.wrap(func, (func, ...args) => {
    try {
      return func(...args);
    } catch (error) {
      if (isDevelopmentEnvironment) {
        console.error(`${func.name}: `, error);
      } else {
        Sentry.captureException({
          place: func?.name || 'arrow function',
          error,
        });
      }
    }
  });
};
