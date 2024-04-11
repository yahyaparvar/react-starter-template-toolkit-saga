import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { LocalStorageKeys, storage } from "store/storage";
import arTranslation from "./ar/translation.json";
import deTranslation from "./de/translation.json";
import enTranslation from "./en/translation.json";
import faTranslation from "./fa/translation.json";
import frTranslation from "./fr/translation.json";
import jaTranslation from "./ja/translation.json";
import ruTranslation from "./ru/translation.json";

const getLanguageFromLocalStorage = () => {
  return storage.read(LocalStorageKeys.LANG) || "en";
};

const resources = {
  en: {
    translation: enTranslation,
  },
  de: {
    translation: deTranslation,
  },
  fa: {
    translation: faTranslation,
  },
  ar: {
    translation: arTranslation,
  },
  ja: {
    translation: jaTranslation,
  },
  fr: {
    translation: frTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getLanguageFromLocalStorage(),
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    i18n.on("languageChanged", (lng) => {
      storage.write(LocalStorageKeys.LANG, lng);
    });
  });

export default i18n;
