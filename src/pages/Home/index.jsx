import Loading from '../../components/Loading';

import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
const HeroSection = lazy(() => import('../../components/HeroSection'))
const ExitIntentPopup = lazy(() => import('../../components/ExitIntentPopup'));
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
const WhatsappSection = React.lazy(() => import('../../components/WhatsappSection'));
const CourseVideoSection = React.lazy(() => import('../../components/CourseVideoSection'));


if ('requestIdleCallback' in window) {
  requestIdleCallback(() => import('../../components/HeroSection'))
}

export default function Home() {
  const [, setShowExitPopup] = useState(false);
  const mentorRef = useRef(null);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) setShowExitPopup(true);
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Countdown />
      </Suspense>
      <HeroSection />

      <Suspense fallback={<Loading />}>
        <BenefitsSection />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <ForWhoSection />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <CourseVideoSection />
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

      <Suspense fallback={<Loading />}>
        <WhatsappSection />
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
