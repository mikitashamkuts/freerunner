import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {getDeviceLanguage, getFunctionTryCatchWrapped} from '@src/utils';

import {en} from './en';
import {es} from './es';

interface TranslationInstanceInterface {
  changeLanguage: () => void;
}

/**
 * Initializes the internationalization (i18n) setup using i18next and react-i18next.
 */
function initTranslation(): TranslationInstanceInterface {
  i18n
    .use(initReactI18next) // Passes i18n instance to react-i18next
    .init({
      compatibilityJSON: 'v3', // Ensures compatibility with i18next JSON format version 3
      resources: {
        en, // English translations
        es, // Spanish translations
      },
      lng: getDeviceLanguage(), // Default language based on device setting
      fallbackLng: 'en', // Fallback language in case the desired language is not available
      interpolation: {
        escapeValue: false, // React already escapes values to prevent XSS
      },
    });

  return {
    // encapsulated i18n method
    changeLanguage: getFunctionTryCatchWrapped(function changeLanguageSafe() {
      i18n.changeLanguage(getDeviceLanguage());
    }),
  };
}

export default getFunctionTryCatchWrapped(initTranslation);
