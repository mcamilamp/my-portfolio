import en from "../locales/en.json";
import es from "../locales/es.json";

const translations = { es, en };

export const translate = (lang, keyPath) => {
  const keys = keyPath.split(".");
  let value = translations[lang.toLowerCase()];
  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) break;
  }
  return value !== undefined ? value : keyPath;
};
