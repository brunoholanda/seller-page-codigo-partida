import React, { Suspense, useEffect, useState } from 'react';
import { GlobalStyle } from './globalStyles';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ForWhoSection from './components/ForWhoSection';
import WhatYouLearnSection from './components/WhatYouLearnSection';
import TestimonialsSection from './components/TestimonialsSection';
import BonusesSection from './components/BonusesSection';
import GuaranteeSection from './components/GuaranteeSection';
import PriceSection from './components/PriceSection';
import FaqSection from './components/FaqSection';
import MentorSection from './components/BrunoSection';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import Loading from './components/Loading';
// import outras seções aqui...

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
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HeroSection />
        <Suspense fallback={<Loading />}>
          <BenefitsSection />
          <ForWhoSection />
          <WhatYouLearnSection />
          <TestimonialsSection />
          <BonusesSection />
          <GuaranteeSection />
          <PriceSection />
          <MentorSection />
          <FaqSection />
        </Suspense>
      </ThemeProvider>
    </>
  );
}
