import { styled } from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  max-width: 1000px;
  overflow: hidden;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
  z-index: 1;
`;

export const PreTitle = styled.h1`
  font-size: 18px;
  color: #00aadeff;
`;

export const Name = styled.h2`
  margin: 0;
  font-size: clamp(40px, 8vw, 70px);
`;

export const SubTitle = styled.h3`
  color: #555;
  font-size: clamp(35px, 6vw, 40px);
`;

export const MainText = styled.p`
  max-width: 540px;
  font-size: 20px;
  margin: 20px 0 0;
`;
