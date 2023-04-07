import { createContext, useContext } from "react";

const CssVariablesContext = createContext(null);

export function useCssVariables(value) {
  return useContext(CssVariablesContext)(value);
}

export function CssVariablesProvider({ children }) {
  function getStyleVar(name) {
    return window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(name);
  }

  return (
    <CssVariablesContext.Provider value={getStyleVar}>
      {children}
    </CssVariablesContext.Provider>
  );
}
