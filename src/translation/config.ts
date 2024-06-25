import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {getFunctionTryCatchWrapped} from '../utils';

import {en} from '.';

/**
 * Initializes the internationalization (i18n) setup using i18next and react-i18next.
 */
function initTranslation() {
  i18n
    .use(initReactI18next) // Passes i18n instance to react-i18next
    .init({
      compatibilityJSON: 'v3', // Ensures compatibility with i18next JSON format version 3
      resources: {
        en, // Spanish translations
      },
      lng: 'en', // Default language
      fallbackLng: 'en', // Fallback language in case the desired language is not available
      interpolation: {
        escapeValue: false, // React already escapes values to prevent XSS
      },
    });
}
export default getFunctionTryCatchWrapped(initTranslation);
