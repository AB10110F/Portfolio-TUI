"use client"
import { ReactNode, createContext, useContext, useState } from "react";

type CrtContextProps = {
  crt: boolean;
  setCrt: (crt: boolean) => void;
}

const CrtContext = createContext<CrtContextProps | undefined>(undefined);

export const CrtContextProvider = ({ children }: { children: ReactNode }) => {
  const [crt, setCrt] = useState(false);

  return (
    <CrtContext.Provider value={{ crt, setCrt }}>
      {
        <>
          <span className={crt ? "scanlines" : "--hidden"}></span>
          <span className={crt ? "scanner" : "--hidden"}></span>
          <div className={crt ? "bright" : ""}>
            {children}
          </div>
        </>
      }
    </CrtContext.Provider>
  );
}

export const useCrtContext = (): CrtContextProps => {
  const context = useContext(CrtContext);
  if (!context) {
    throw new Error("Component is outside of CrtContextProvider");
  }
  return context;
};
