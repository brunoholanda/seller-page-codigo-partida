import HeroSection from '../../components/HeroSection'; // Carregamento imediato
import ExitIntentPopup from '../../components/ExitIntentPopup';
import Loading from '../../components/Loading';

import React, { Suspense, useRef } from 'react';

const Countdown = React.lazy(() => import('../../components/Countdown'));
const BenefitsSection = React.lazy(() => import('../../components/BenefitsSection'));
const ForWhoSection = React.lazy(() => import('../../components/ForWhoSection'));
const WhatYouLearnSection = React.lazy(() => import('../../components/WhatYouLearnSection'));
const TestimonialsSection = React.lazy(() => import('../../components/TestimonialsSection'));
const BonusesSection = React.lazy(() => import('../../components/BonusesSection'));
const GuaranteeSection = React.lazy(() => import('../../components/GuaranteeSection'));
const PriceSection = React.lazy(() => import('../../components/PriceSection'));
const MentorSection = React.lazy(() => import('../../components/BrunoSection'));
const FaqSection = React.lazy(() => import('../../components/FaqSection'));
const PageFooter = React.lazy(() => import('../../components/Footer'));

export default function Home() {
  const mentorRef = useRef(null);

  return (
    <>
      <Countdown /> {/* Já pode vir antes, é leve e importante */}
      <Suspense fallback={<Loading />}>
        <HeroSection /> {/* Conteúdo acima da dobra, importante ser imediato */}
      </Suspense>

      <Suspense fallback={<Loading />}>
        <BenefitsSection />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <ForWhoSection />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <WhatYouLearnSection />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <BonusesSection />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <GuaranteeSection />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <PriceSection />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <MentorSection />
      </Suspense>

      <div ref={mentorRef}>
        <Suspense fallback={<Loading />}>
          <FaqSection />
        </Suspense>
      </div>

      <Suspense fallback={<Loading />}>
        <PageFooter />
      </Suspense>

      <ExitIntentPopup mentorRef={mentorRef} />
    </>
  );
}
