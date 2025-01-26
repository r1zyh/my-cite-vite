import { createContext, ReactNode, useEffect, useState } from 'react';

export const ThemeContext = createContext({
  isLightTheme: true,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isLightTheme, setIsLightTheme] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? false : true;
  });

  const toggleTheme = () => {
    setIsLightTheme((prev) => !prev);
  };

  useEffect(() => {
    document.body.className = isLightTheme ? 'light' : 'dark';
  }, [isLightTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      setIsLightTheme(!e.matches);
    };
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};
