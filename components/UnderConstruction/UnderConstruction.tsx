import { robotoSlab } from '@/styles/fonts';
import { SectionContainer, SectionTitle } from '../common/CommonStyles';
import { useEffect, useRef } from 'react';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { srConfig } from '@/utils/scrollUtils';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function UnderConstruction() {
  const sr: scrollReveal.ScrollRevealObject | null = useScrollReveal();
  const revealContainer = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !revealContainer.current || !sr) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion, sr]);

  return (
    <SectionContainer id={'about'} ref={revealContainer}>
      <SectionTitle className={robotoSlab.className}>
        Under Construction
      </SectionTitle>
    </SectionContainer>
  );
}
