import { raleway, robotoSlab } from '../../fonts';
import {
  HeroContainer,
  HeroText,
  PreTitle,
  Name,
  SubTitle,
  MainText,
} from './HeroStyles';

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
