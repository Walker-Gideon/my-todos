import React, { createContext, useState } from "react";

type GeneralContextType = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const GeneralContext = createContext<GeneralContextType | undefined>(undefined);
export default GeneralContext;

export const GeneralProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [query, setQuery] = useState("");

  const value: GeneralContextType = {
    query,
    setQuery,
  };

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
};
