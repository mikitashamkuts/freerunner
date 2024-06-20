import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {getFunctionTryCatchWrapped} from '../utils';

import {es} from '.';

/**
 * Initializes the internationalization (i18n) setup using i18next and react-i18next.
 */
function initTranslation() {
  i18n
    .use(initReactI18next) // Passes i18n instance to react-i18next
    .init({
      compatibilityJSON: 'v3', // Ensures compatibility with i18next JSON format version 3
      resources: {
        es, // Spanish translations
      },
      lng: 'es', // Default language
      fallbackLng: 'es', // Fallback language in case the desired language is not available
      interpolation: {
        escapeValue: false, // React already escapes values to prevent XSS
      },
    });
}
export default getFunctionTryCatchWrapped(initTranslation);
