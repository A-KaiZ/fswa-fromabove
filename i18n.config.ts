export const defaultLocale = 'en';
export const locales = ['en', 'no'] as const;

export type Locale = (typeof locales)[number];