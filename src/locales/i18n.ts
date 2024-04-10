import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import deTranslation from "./de/translation.json";
import enTranslation from "./en/translation.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  de: {
    translation: deTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
