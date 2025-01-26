import { createContext, ReactNode, useEffect, useState } from 'react';

export const ThemeContext = createContext({
  isLightTheme: true,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme((prev) => !prev);
  };

  useEffect(() => {
    document.body.className = isLightTheme ? 'light' : 'dark';
  }, [isLightTheme]);

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};
