import * as Sentry from '@sentry/react-native';

import {SENTRY_DSN} from '@env';
import {getFunctionTryCatchWrapped} from '@src/utils';

/**
 * Initializes the Sentry service for error tracking and monitoring.
 * Sentry will only be initialized if the SENTRY_DSN environment variable is defined.
 */
function initSentryService() {
  // Check if SENTRY_DSN is defined before initializing Sentry
  // env configuration does not allow building with no specified key in .env file
  if (SENTRY_DSN) {
    Sentry.init({
      dsn: SENTRY_DSN, // Set the DSN to configure Sentry with the correct project
    });
  }
}

export default getFunctionTryCatchWrapped(initSentryService);
