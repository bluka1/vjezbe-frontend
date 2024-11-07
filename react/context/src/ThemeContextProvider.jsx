import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext("dark");

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
