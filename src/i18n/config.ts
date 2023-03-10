import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en/translationEN.json';
import translationFR from './fr/translationFR.json';
import LanguageDetector from "i18next-browser-languagedetector";

export const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      lookupLocalStorage: 'language'
    },
    resources,
    fallbackLng: "en", // use en if detected lng is not available
    // lng: "en",
    debug: true,
  });

export default i18next;