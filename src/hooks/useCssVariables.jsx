import { createContext, useContext } from "react";

const CssVariablesContext = createContext(null);

/**
 * useCssVariables is a custom React Hook that provides access to CSS variables via context.
 *
 * @function
 * @param {string} value - The name of the CSS variable to retrieve.
 * @returns {*} - The value of the CSS variable.
 *
 * @example
 * // Usage:
 * // Import and use the useCssVariables hook in your component
 * import { useCssVariables } from './useCssVariables';
 *
 * const MyComponent = () => {
 *   const backgroundColor = useCssVariables('--background-color');
 *   const textColor = useCssVariables('--text-color');
 *
 *   return (
 *     <div style={{ backgroundColor, color: textColor }}>
 *       {/* Render your component content /*}
 *     </div>
 *   );
 * };
 */
export function useCssVariables(value) {
  return useContext(CssVariablesContext)(value);
}

function getStyleVar(name) {
  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(name);
}

/**
 * CssVariablesProvider is a higher-order component (HOC) that provides access to CSS variables via context.
 *
 * @function
 * @param {ReactNode} props.children - The children components to be wrapped by the CssVariablesProvider.
 * @returns {ReactNode} - The wrapped children components with access to CSS variables context.
 *
 * @example
 * // Usage:
 * // Import and use the CssVariablesProvider component to wrap your components
 * import { CssVariablesProvider } from './CssVariablesProvider';
 *
 * const App = () => {
 *   return (
 *     <CssVariablesProvider>
 *       <MyComponent />
 *       <AnotherComponent />
 *     </CssVariablesProvider>
 *   );
 * };
 */
export function CssVariablesProvider({ children }) {
  return (
    <CssVariablesContext.Provider value={getStyleVar}>
      {children}
    </CssVariablesContext.Provider>
  );
}
