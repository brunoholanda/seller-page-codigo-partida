import React, { lazy, Suspense, useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { GlobalStyle } from './globalStyles';
import Loading from './components/Loading';

const Home = lazy(() => import('./pages/Home'));
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
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/afiliados" element={<Afiliados />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </ThemeProvider>
  );
}
