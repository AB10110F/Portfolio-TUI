"use client"
import { createContext, useContext, useState, ReactNode } from "react";
import en from '@/locales/english.json' assert { type: 'json' };
import es from '@/locales/spanish.json' assert { type: 'json' };

const translations = {
  English: en,
  Spanish: es,
} as Record<string, Record<string, string | string[]>>;

type LanguageContextValue = {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
}

const detectLanguage = (): string => {
  if (typeof navigator !== "undefined") {
    return navigator.language.includes('es') ? 'Spanish' : 'English';
  }
  return 'English';
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageContextProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(detectLanguage);
  const t = (key: string): string => {
    const value = translations[language][key];
    return typeof value === 'string' ? value : key;
  };
  const tArray = (key: string): string[] => {
    const value = translations[language][key];
    return Array.isArray(value) ? value : [];
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("Component is outside of LanguageContextProvider");
  }
  return context;
};
