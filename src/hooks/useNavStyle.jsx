import React, { createContext, useContext, useState } from "react";

const NavStyleContext = createContext(null);

/**
 * * useNavStyle
 * 
 * useNavStyle is a custom React Hook that provides access to the navigation style context.
 *
 * @function
 * @returns {Object} - The context value containing the navigation style state and update function.
 * @property {boolean} isNavStyleChanged - The current state of the navigation style.
 * @property {function} changeNavStyle - The function to update the navigation style state.
 *
 *
 * @example
 * // Usage:
 * // Import and use the useNavStyle hook in your functional component
 * import { useNavStyle } from './useNavStyle';
 *
 * const MyComponent = () => {
 *   const { isNavStyleChanged, changeNavStyle } = useNavStyle();
 *   // Access and update the navigation style state using the returned context value
 *   // ...
 * };
 */
export function useNavStyle() {
  return useContext(NavStyleContext);
}

/**
 * * NavStyleProvider
 *
 * NavStyleProvider is a context provider component that wraps its children components and provides
 * a context value for managing the navigation style state.
 *
 * @component
 * @param {ReactNode} props.children - The child components to be wrapped by NavStyleProvider.
 * @returns {ReactNode} - The wrapped child components.
 *
 * @example
 *  // Usage:
 *  // Wrap child components with NavStyleProvider in your component tree
 * <NavStyleProvider>
 *   <App />
 * </NavStyleProvider>
 */
export function NavStyleProvider({ children }) {
  const [isNavStyleChanged, changeNavStyle] = useState(false);
  return (
    <NavStyleContext.Provider value={{ isNavStyleChanged, changeNavStyle }}>
      {children}
    </NavStyleContext.Provider>
  );
}
