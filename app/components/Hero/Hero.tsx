import { styled } from 'styled-components';
import BlurAnimationCanvas from '../Animation/BlurAnimation';
import Image from 'next/image';
import { raleway, robotoSlab } from '../../fonts';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  max-width: 1000px;

  #hero-center {
    position: absolute;
  }
`;

const HeroCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
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
  font-size: clamp(35px, 6vw, 60px);
`;

const MainText = styled.p`
  max-width: 540px;
  font-size: 20px;
  margin: 20px 0 0;
`;

export default function Hero() {
  return (
    <HeroContainer>
      <HeroCenter id="hero-center">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={70}
          height={70}
          priority
        />
        <HeroText>
          <PreTitle className={raleway.className}>Welcome! My name is</PreTitle>
          <Name className={robotoSlab.className}>Brian Suruki</Name>
          <SubTitle className={robotoSlab.className}>
            Full-Stack Developer
          </SubTitle>
          <MainText>
            I am a full-stack developer, specializing in front-end development.
            I enjoy all aspects of web development.
          </MainText>
        </HeroText>
      </HeroCenter>
    </HeroContainer>
  );
}
