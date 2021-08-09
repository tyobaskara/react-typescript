import React, { createContext, Dispatch, FC, SetStateAction, useState } from 'react';

interface ThemeContextData {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextData>({
  theme: '',
  setTheme: () => {}
});

const ThemeContextProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
};

export default ThemeContextProvider;
