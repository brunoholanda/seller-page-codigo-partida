import React, { lazy, useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { GlobalStyle } from './globalStyles';

const Afiliados = lazy(() => import('./pages/Afiliados'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDark ? darkTheme : lightTheme);

    const listener = e => setTheme(e.matches ? darkTheme : lightTheme);
    const matcher = window.matchMedia('(prefers-color-scheme: dark)');
    matcher.addEventListener('change', listener);

    return () => matcher.removeEventListener('change', listener);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/afiliados" element={<Afiliados />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}
