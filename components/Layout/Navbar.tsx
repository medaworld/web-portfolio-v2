import Logo from '../common/Logo';
import { NavLinkList } from '@/utils/dataUtils';
import { useEffect, useState } from 'react';
import {
  Header,
  Links,
  NavBarContainer,
  NavLink,
  NavLinks,
  NavLogo,
} from './NavbarStyles';
import { raleway } from '@/styles/fonts';
import { loaderDelay } from '@/utils/delayUtils';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import useScrollDirection from '@/hooks/useScrollDirection';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Menu from './Menu';

export default function Navbar({ isHome }: { isHome: boolean }) {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection({ initialDirection: 'down' });
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prefersReducedMotion]);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Header scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <NavBarContainer>
        {prefersReducedMotion ? (
          <>
            <NavLogo href={'/'}>
              <Logo src="/images/logo.png" size={35} />
            </NavLogo>
            <Links>
              <NavLinks>
                {NavLinkList.map((navLink, key) => {
                  return (
                    <NavLink key={key} className={raleway.className}>
                      <a onClick={() => scrollToSection(navLink.path)}>
                        {navLink.title}
                      </a>
                    </NavLink>
                  );
                })}
              </NavLinks>
              <Menu />
            </Links>
          </>
        ) : (
          <>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <NavLogo href={'/'}>
                    <Logo src="/images/logo.png" size={35} />
                  </NavLogo>
                </CSSTransition>
              )}
            </TransitionGroup>
            <Links>
              <NavLinks>
                <TransitionGroup component={null}>
                  {isMounted &&
                    NavLinkList.map((navLink, key) => {
                      return (
                        <CSSTransition
                          key={key}
                          classNames={fadeDownClass}
                          timeout={timeout}
                        >
                          <NavLink
                            key={key}
                            className={raleway.className}
                            style={{
                              transitionDelay: `${isHome ? key * 100 : 0}ms`,
                            }}
                          >
                            <a onClick={() => scrollToSection(navLink.path)}>
                              {navLink.title}
                            </a>
                          </NavLink>
                        </CSSTransition>
                      );
                    })}
                </TransitionGroup>
              </NavLinks>

              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition classNames={fadeClass} timeout={timeout}>
                    <Menu />
                  </CSSTransition>
                )}
              </TransitionGroup>
            </Links>
          </>
        )}
      </NavBarContainer>
    </Header>
  );
}
