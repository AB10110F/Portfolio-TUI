"use client"
import { createContext, useContext, useState, ReactNode } from "react";

interface LanguageContextProviderProps 
{
  children: ReactNode;
}

interface LanguageContextValue 
{
  language: string;
  setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageContextProvider = ({ children }: LanguageContextProviderProps) => {
  const [language, setLanguage] = useState('Spanish');
  
  console.log(navigator.language)

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) 
  {
    throw new Error("useLanguageContext must be used within a LanguageContextProvider");
  }
  return context;
};