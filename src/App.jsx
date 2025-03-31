import React from 'react';
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
// import outras seções aqui...

export default function App() {
  return (
    <>
      <GlobalStyle />
      <HeroSection />
       <BenefitsSection />
      <ForWhoSection />
      <WhatYouLearnSection />
      <TestimonialsSection />
      <BonusesSection />
      <GuaranteeSection />
      <PriceSection />
      <MentorSection />
      <FaqSection /> 
    </>
  );
}
