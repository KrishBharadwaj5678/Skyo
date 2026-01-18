import { useContext, createContext, useState, useEffect } from "react";

let ThemeContext = createContext(null);

export let ThemeContextProvider = ({ children }) => {
  let [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export let useTheme = () => {
  return useContext(ThemeContext);
};
