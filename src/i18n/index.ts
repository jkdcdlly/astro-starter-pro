import en from './en.json';
import zh from './zh.json';

export const languages = {
  en: 'English',
  zh: '简体中文'
};

export const defaultLang = 'en';

export const ui = {
  en,
  zh,
} as const;

export type Locale = keyof typeof ui;

// Helper function to detect locale from URL
export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Locale;
  return defaultLang;
}

// Translation function
export function useTranslations(lang: Locale) {
  return function t(key: string): any {
    return getNestedValue(ui[lang], key) || getNestedValue(ui[defaultLang], key) || key;
  };
}

// Helper function to get nested values from translation objects
function getNestedValue(obj: any, path: string): any {
  if (!obj || typeof obj !== 'object' || !path || typeof path !== 'string') {
    return undefined;
  }
  
  const keys = path.split('.');
  let current: any = obj;
  
  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== 'object') {
      return undefined;
    }
    
    current = current[key];
    
    if (current === undefined) {
      return undefined;
    }
  }
  
  return current;
}

// Helper function to get localized URL
export function getLocalizedPath(path: string, lang: Locale): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path.startsWith('/') ? path : '/' + path}`;
}

// Helper function for getStaticPaths
export function getStaticPaths() {
  // Filter out default language (handled by root pages)
  const languages = Object.keys(ui).filter(lang => lang !== defaultLang);
  
  return languages.map(lang => ({
    params: { lang },
    props: { lang },
  }));
}