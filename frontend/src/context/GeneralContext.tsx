import React, { createContext, useState } from "react";

type GeneralContextType = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  heading: string;
  setHeading: React.Dispatch<React.SetStateAction<string>>;
};

const GeneralContext = createContext<GeneralContextType | undefined>(undefined);
export default GeneralContext;

export const GeneralProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [query, setQuery] = useState("");
  const [heading, setHeading] = useState("Dashboard");

  const value: GeneralContextType = {
    query,
    setQuery,
    heading,
    setHeading,
  };

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
};
