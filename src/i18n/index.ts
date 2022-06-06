import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./en";
import { br } from "./br";
import { es } from "./es";

i18n.use(initReactI18next).init({
  resources: {
    en,
    br,
    es,
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
