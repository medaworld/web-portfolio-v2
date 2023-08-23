import { robotoSlab } from '@/app/fonts';
import AboutContent from './AboutContent';
import AboutTechStack from './AboutTechStack';
import { SectionContainer, SectionTitle } from '../common/CommonStyles';
import { useEffect, useRef } from 'react';
import usePrefersReducedMotion from '@/app/hooks/usePrefersReducedMotion';
import sr, { srConfig } from '@/app/utils/scrollUtils';

export default function About() {
  const revealContainer = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !sr || !revealContainer.current) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  return (
    <SectionContainer id={'about'} ref={revealContainer}>
      <SectionTitle className={robotoSlab.className}>About</SectionTitle>
      <AboutContent />
      <AboutTechStack />
    </SectionContainer>
  );
}
