import { styled } from 'styled-components';
import { raleway, robotoSlab } from '../../fonts';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  max-width: 1000px;
  overflow: hidden;
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
  z-index: 1;
`;

const PreTitle = styled.h1`
  font-size: 18px;
  color: #00aadeff;
`;

const Name = styled.h2`
  margin: 0;
  font-size: clamp(40px, 8vw, 70px);
`;

const SubTitle = styled.h3`
  color: #555;
  font-size: clamp(35px, 6vw, 40px);
`;

const MainText = styled.p`
  max-width: 540px;
  font-size: 20px;
  margin: 20px 0 0;
`;

export default function Hero() {
  return (
    <HeroContainer>
      <HeroText>
        <PreTitle className={raleway.className}>Welcome! My name is</PreTitle>
        <Name className={robotoSlab.className}>Brian Suruki</Name>
        <SubTitle className={robotoSlab.className}>
          Full-Stack Developer with a Front-End Focus
        </SubTitle>
        <MainText>
          Driven by challenges and fueled by passion, I specialize in creating
          intuitive and efficient web solutions. Let&apos;s build something
          great together.
        </MainText>
      </HeroText>
    </HeroContainer>
  );
}
