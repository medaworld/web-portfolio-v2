import { robotoSlab } from '@/app/fonts';
import ContactForm from './ContactForm';
import { email } from '@/app/utils/dataUtils';
import {
  ContactContainer,
  ContactTitle,
  ContactStatement,
  EmailLink,
} from './ContactStyles';
import sr, { srConfig } from '@/app/utils/scrollUtils';
import { useEffect, useRef } from 'react';
import usePrefersReducedMotion from '@/app/hooks/usePrefersReducedMotion';

export default function Contact() {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !sr || !revealContainer.current) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  return (
    <ContactContainer id={'contact'} ref={revealContainer}>
      <ContactTitle className={robotoSlab.className}>Contact</ContactTitle>
      <ContactStatement>
        I&apos;m always open to new opportunities and collaborations. Feel free
        to reach out if you have any questions or just want to connect!
      </ContactStatement>
      <EmailLink href={`mailto:${email}`}>Send Email</EmailLink>

      <ContactForm />
    </ContactContainer>
  );
}
