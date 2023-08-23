import { roboto, robotoSlab } from '@/styles/fonts';
import ContactForm from './ContactForm';
import { email } from '@/utils/dataUtils';
import {
  ContactContainer,
  ContactTitle,
  ContactStatement,
  EmailLink,
} from './ContactStyles';
import { srConfig } from '@/utils/scrollUtils';
import { useEffect, useRef } from 'react';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function Contact() {
  const sr: scrollReveal.ScrollRevealObject | null = useScrollReveal();
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !revealContainer.current || !sr) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion, sr]);

  return (
    <ContactContainer id={'contact'} ref={revealContainer}>
      <ContactTitle className={robotoSlab.className}>Contact</ContactTitle>
      <ContactStatement className={roboto.className}>
        I&apos;m always open to new opportunities and collaborations. Feel free
        to reach out if you have any questions or just want to connect!
      </ContactStatement>
      <EmailLink href={`mailto:${email}`} className={roboto.className}>
        Send Email
      </EmailLink>

      <ContactForm />
    </ContactContainer>
  );
}
