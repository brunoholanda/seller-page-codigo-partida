import React, { Suspense, useRef } from 'react';
import Loading from '../../components/Loading';
import ExitIntentPopup from '../../components/ExitIntentPopup';

// Lazy load para os componentes abaixo da dobra
const HeroSection = React.lazy(() => import('../../components/HeroSection'));

const BenefitsSection = React.lazy(() => import('../../components/BenefitsSection'));
const ForWhoSection = React.lazy(() => import('../../components/ForWhoSection'));
const WhatYouLearnSection = React.lazy(() => import('../../components/WhatYouLearnSection'));
const TestimonialsSection = React.lazy(() => import('../../components/TestimonialsSection'));
const BonusesSection = React.lazy(() => import('../../components/BonusesSection'));
const GuaranteeSection = React.lazy(() => import('../../components/GuaranteeSection'));
const PriceSection = React.lazy(() => import('../../components/PriceSection'));
const FaqSection = React.lazy(() => import('../../components/FaqSection'));
const MentorSection = React.lazy(() => import('../../components/BrunoSection'));
const PageFooter = React.lazy(() => import('../../components/Footer'));

export default function Home() {
  const mentorRef = useRef(null);

  return (
    <>
      <Suspense fallback={<Loading />}>

        <HeroSection />

        <BenefitsSection />
        <ForWhoSection />
        <WhatYouLearnSection />
        <TestimonialsSection />
        <BonusesSection />
        <GuaranteeSection />
        <PriceSection />
        <MentorSection />
        <div ref={mentorRef}>
          <FaqSection />
        </div>
        <PageFooter />
      </Suspense>

      <ExitIntentPopup mentorRef={mentorRef} />
    </>
  );
}
