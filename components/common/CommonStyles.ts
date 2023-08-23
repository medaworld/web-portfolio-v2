import { styled } from 'styled-components';

export const SectionContainer = styled.section`
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(26px, 5vw, 32px);
  margin: 10px 0px 40px;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  white-space: nowrap;
`;
