import { useRef, useState } from 'react';
import {
  ContactFormContainer,
  ContactSubtitle,
  ContactInput,
  ContactTextArea,
  SubmitButton,
} from './ContactStyles';
import { sendForm } from 'emailjs-com';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const [allowSubmit, setAllowSubmit] = useState(true);
  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState(false);
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!allowSubmit) {
      toast.info('Message already sent!');
      return;
    }

    if (!enteredName || enteredName.trim() === '') {
      setInvalidName(true);
      toast.info('Please enter valid name');
      return;
    }
    if (
      !enteredEmail ||
      enteredEmail.trim() === '' ||
      !enteredEmail.includes('@')
    ) {
      setInvalidEmail(true);
      toast.info('Please enter valid email');
      return;
    }
    if (!enteredMessage || enteredMessage.trim() === '') {
      toast.info('Please enter message');
      setInvalidMessage(true);
      return;
    }

    // Send an email
    if (formRef.current) {
      sendForm(
        `${process.env.NEXT_PUBLIC_EMAILJS_SERVICEID}`,
        `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID}`,
        formRef.current,
        `${process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY}`
      )
        .then((response) => {
          toast.success('Message sent successfully!');
          setAllowSubmit(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function nameChangeHandler(event: any) {
    setEnteredName(event.target.value);
    if (event.target.value) {
      setInvalidName(false);
    }
  }

  function emailChangeHandler(event: any) {
    setEnteredEmail(event.target.value);
    if (event.target.value.includes('@')) {
      setInvalidEmail(false);
    }
  }

  function messageChangeHandler(event: any) {
    setEnteredMessage(event.target.value);
    if (event.target.value) {
      setInvalidMessage(false);
    }
  }
  return (
    <ContactFormContainer onSubmit={handleSubmit} ref={formRef}>
      <ContactSubtitle>or send a message</ContactSubtitle>
      <ContactInput
        type="text"
        placeholder="Your name"
        name="from_name"
        value={enteredName}
        onChange={nameChangeHandler}
        invalid={invalidName}
      />
      <ContactInput
        type="email"
        placeholder="Your email"
        name="reply_to"
        value={enteredEmail}
        onChange={emailChangeHandler}
        invalid={invalidEmail}
      />
      <ContactTextArea
        placeholder="Your message"
        name="message"
        value={enteredMessage}
        onChange={messageChangeHandler}
        invalid={invalidMessage}
      ></ContactTextArea>
      <SubmitButton>Send Message</SubmitButton>
    </ContactFormContainer>
  );
}
