import en from "ra-language-english";
import { es } from "./i18n/es.js";
import polyglotI18nProvider from "ra-i18n-polyglot";

const translations = { en, es };

export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  "es", // default locale
  [{ locale: "es", name: "Español" }],
);
