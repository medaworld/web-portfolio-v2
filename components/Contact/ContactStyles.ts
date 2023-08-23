import { styled } from 'styled-components';

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
  align-self: center;
  cursor: pointer;
  margin-top: 30px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: linear-gradient(
      to bottom,
      transparent,
      ${(props) => props.theme.tpBgEnd}
    )
    ${(props) => props.theme.tpBgStart};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const ContactFormContainer = styled.form`
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

export const ContactSubtitle = styled.h3`
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
`;

export const ContactInput = styled.input<{ invalid: boolean }>`
  outline: none;
  border: none;
  padding: 10px;
  border-radius: 5px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: linear-gradient(
      to bottom,
      transparent,
      ${(props) => props.theme.tpBgEnd}
    )
    ${(props) => props.theme.tpBgStart};

  border: 1px solid ${(props) => (props.invalid ? props.theme.error : 'none')};
`;

export const ContactTextArea = styled.textarea<{ invalid: boolean }>`
  outline: none;
  border: none;
  padding: 10px;
  height: 100px;
  border-radius: 5px;
  resize: none;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: linear-gradient(
      to bottom,
      transparent,
      ${(props) => props.theme.tpBgEnd}
    )
    ${(props) => props.theme.tpBgStart};

  border: ${(props) => (props.invalid ? `1px solid red` : 'none')};
`;

export const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.button};
  color: white;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  margin: 0 auto;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.color};
    color: white;
  }
`;
