import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {en, initTranslation} from '.';

jest.mock('i18next', () => ({
  use: jest.fn().mockReturnThis(),
  init: jest.fn(),
}));

jest.mock('react-i18next', () => ({
  initReactI18next: jest.fn(),
}));

describe('initTranslation', () => {
  it('should initialize i18n with the correct configuration', () => {
    initTranslation();
    expect(i18n.use).toHaveBeenCalledWith(initReactI18next);
    expect(i18n.init).toHaveBeenCalledWith({
      compatibilityJSON: 'v3',
      resources: {
        en,
      },
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });
  });
});
