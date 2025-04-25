import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';
import { Header } from './components/organisms/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setCurrentTheme(lightTheme);
    } else {
      setCurrentTheme(darkTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === lightTheme ? darkTheme : lightTheme;
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme === lightTheme ? 'light' : 'dark');
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Header currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Home />
      <About />
    </ThemeProvider>
  );
};

export default App;
