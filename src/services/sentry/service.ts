import * as Sentry from '@sentry/react-native';

import {SENTRY_DSN} from '@env'; // Import the Sentry DSN (Data Source Name) from environment variables

/**
 * Initializes the Sentry service for error tracking and monitoring.
 * Sentry will only be initialized if the SENTRY_DSN environment variable is defined.
 */
function initSentryService() {
  // Check if SENTRY_DSN is defined before initializing Sentry
  if (SENTRY_DSN) {
    Sentry.init({
      dsn: SENTRY_DSN, // Set the DSN to configure Sentry with the correct project
    });
  }
}

export default initSentryService;
