import enTranslations from './en.json';
import noTranslations from './no.json';

export const translations = {
  en: enTranslations,
  no: noTranslations
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = keyof typeof enTranslations.navigation;

export function getTranslation(locale: Locale, key: string) {
  const keys = key.split('.');
  let translation: any = translations[locale];
  
  for (const k of keys) {
    if (translation && typeof translation === 'object') {
      translation = translation[k];
    } else {
      return key;
    }
  }
  
  return translation || key;
}