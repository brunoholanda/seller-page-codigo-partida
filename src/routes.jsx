import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import Afiliados from './pages/Afiliados';
import NotFound from './pages/NotFound';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { GlobalStyle } from './globalStyles';


export default function App() {


  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDark ? darkTheme : lightTheme);

    // atualiza ao mudar no sistema
    const listener = e => setTheme(e.matches ? darkTheme : lightTheme);
    const matcher = window.matchMedia('(prefers-color-scheme: dark)');
    matcher.addEventListener('change', listener);

    return () => matcher.removeEventListener('change', listener);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/afiliados" element={<Afiliados />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </HashRouter>
    </ThemeProvider>
  );
}
