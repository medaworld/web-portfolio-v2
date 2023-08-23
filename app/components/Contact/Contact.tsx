import { robotoSlab } from '@/app/fonts';
import { styled } from 'styled-components';
import ContactForm from './ContactForm';
import { email } from '@/app/utils/dataUtils';

export const ContactContainer = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }
`;

export const ContactTitle = styled.h2`
  font-size: clamp(40px, 5vw, 60px);
  z-index: 1;
`;

export const ContactStatement = styled.p`
  margin: 0px 0px 15px;
  font-size: 20px;
  z-index: 1;
`;

export const EmailLink = styled.a`
  position: relative;
  border-radius: 5px;
  padding: 1rem 1.5rem;
  line-height: 1;
  align-self: center;
  cursor: pointer;
  margin-top: 30px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: linear-gradient(to bottom, transparent, rgba(250, 250, 250, 0.2))
    rgba(214, 219, 220, 0.5);
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export default function Contact() {
  return (
    <ContactContainer id={'contact'}>
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
