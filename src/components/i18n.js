import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import twi from './locales/twi/translation.json';
import ga from './locales/ga/translation.json';
import ewe from './locales/ewe/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      twi: { translation: twi },
      ga: { translation: ga },
      ewe: { translation: ewe },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
