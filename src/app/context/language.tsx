"use client"
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface LanguageContextProviderProps 
{
  children: ReactNode;
}

interface Navigator {
  // Properties
  readonly language: string;
}

interface LanguageContextValue 
{
  language: string;
  setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageContextProvider = ({ children }: LanguageContextProviderProps) => {
    
    const detectLanguage = ():string => { //function used to execute useEffect before useState
        if (typeof navigator !== "undefined") {
          // browser code
            if ((navigator as Navigator).language.includes('es')) 
            {
                return 'Spanish';
            } 
            else 
            {
                return 'English';
            }
        }
        else
        {
            return '';
        }
    };
      
    const startLanguage = detectLanguage();
      
    useEffect(() => {
        setLanguage(startLanguage);
    }, []);

    const [language, setLanguage] = useState(startLanguage);

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