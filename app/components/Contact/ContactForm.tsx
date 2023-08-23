import { styled } from 'styled-components';

const ContactFormContainer = styled.form`
  margin: 0 auto;
  max-width: 500px;
  margin-top: 50px;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1;

  @media (max-width: 768px) {
    max-width: 90%;
    gap: 0.5rem;
  }
`;

const ContactTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
  color: #2c3e50;
`;

const ContactInput = styled.input`
  outline: none;
  border: none;
  padding: 10px;
  border-radius: 5px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: linear-gradient(to bottom, transparent, rgba(250, 250, 250, 0.2))
    rgba(214, 219, 220, 0.5);
`;

const ContactTextArea = styled.textarea`
  outline: none;
  border: none;
  font-family: 'Roboto';
  padding: 10px;
  height: 100px;
  border-radius: 5px;
  resize: none;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: linear-gradient(to bottom, transparent, rgba(250, 250, 250, 0.2))
    rgba(214, 219, 220, 0.5);
`;

const SubmitButton = styled.button`
  background-color: #00aadeaa;
  color: white;
  padding: 0.5rem 1.5rem;
  margin: 0 auto;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #00aadeff;
  }
`;

export default function ContactForm() {
  return (
    <ContactFormContainer>
      <ContactTitle>or send a message</ContactTitle>
      <ContactInput placeholder="Your name" />
      <ContactInput placeholder="Your email" />
      <ContactTextArea placeholder="Your message"></ContactTextArea>
      <SubmitButton>Send Message</SubmitButton>
    </ContactFormContainer>
  );
}
