// src/hooks/useTheme.ts
import { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '../styles/theme';

type ThemeName = 'light' | 'dark';

export const useTheme = () => {
  const [themeName, setThemeName] = useState<ThemeName>('dark');
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeName;
    if (savedTheme) {
      setThemeName(savedTheme);
    }
  }, []); 

  const toggleTheme = () => {
    const newTheme = themeName === 'light' ? 'dark' : 'light';
    setThemeName(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const currentTheme = themeName === 'light' ? lightTheme : darkTheme;

  return { currentTheme, toggleTheme, themeName };
};
