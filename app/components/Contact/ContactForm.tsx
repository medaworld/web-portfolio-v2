import {
  ContactFormContainer,
  ContactSubtitle,
  ContactInput,
  ContactTextArea,
  SubmitButton,
} from './ContactStyles';

export default function ContactForm() {
  return (
    <ContactFormContainer>
      <ContactSubtitle>or send a message</ContactSubtitle>
      <ContactInput placeholder="Your name" />
      <ContactInput placeholder="Your email" />
      <ContactTextArea placeholder="Your message"></ContactTextArea>
      <SubmitButton>Send Message</SubmitButton>
    </ContactFormContainer>
  );
}
