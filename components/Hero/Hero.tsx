import { useState, useEffect } from 'react';
import { raleway, roboto, robotoSlab } from '@/styles/fonts';
import {
  HeroContainer,
  HeroText,
  PreTitle,
  Name,
  SubTitle,
  MainText,
} from './HeroStyles';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { loaderDelay, navDelay } from '@/utils/delayUtils';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  const one = (
    <PreTitle className={raleway.className}>Welcome! My name is</PreTitle>
  );
  const two = <Name className={robotoSlab.className}>Brian Suruki</Name>;
  const three = (
    <SubTitle className={robotoSlab.className}>
      Full-Stack Developer with a Front-End Focus
    </SubTitle>
  );
  const four = (
    <MainText className={roboto.className}>
      Driven by challenges and fueled by passion, I specialize in creating
      intuitive and efficient web solutions. Let&apos;s build something great
      together.
    </MainText>
  );

  const items = [one, two, three, four];

  return (
    <HeroContainer>
      <HeroText>
        {prefersReducedMotion ? (
          <>
            {items.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {isMounted &&
              items.map((item, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={loaderDelay}
                >
                  <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </HeroText>
    </HeroContainer>
  );
}
