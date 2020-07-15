import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';

i18n
  .use(initReactI18next)
  .init({
    defaultNS: 'translation',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: true,
    },
    keySeparator: false,
    resources: {
      en: en,
    },
  })
  .finally(() => {
    //
  });

export { i18n };
