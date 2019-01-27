import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import translationBY from './locales/by/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
      translation: translationRU
  },
  by: {
    translation: translationBY
  }
};

i18n
  .use(detector)  
  .use(reactI18nextModule)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    
    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;