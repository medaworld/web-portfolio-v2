import Logo from '../common/Logo';
import Link from 'next/link';
import { NavLinkList } from '@/app/utils/dataUtils';
import SocialMediaIcon from '../common/SocialMediaIcon';
import { useState } from 'react';
import {
  HamburgerBar,
  HamburgerMenu,
  Header,
  Links,
  NavBarContainer,
  NavLink,
  NavLinks,
  SocialWrapper,
} from './NavbarStyles';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  function toggleMenu() {
    console.log('test');
  }

  return (
    <Header>
      <NavBarContainer>
        <Logo src="/images/logo.png" size={35} />
        <Links>
          <NavLinks isOpen={isMenuOpen}>
            {NavLinkList.map((navLink, key) => {
              return (
                <NavLink key={key}>
                  <a onClick={() => scrollToSection(navLink.path)}>
                    {navLink.title}
                  </a>
                </NavLink>
              );
            })}
          </NavLinks>
          <HamburgerMenu onClick={toggleMenu}>
            <HamburgerBar isOpen={isMenuOpen} />
            <HamburgerBar isOpen={isMenuOpen} />
            <HamburgerBar isOpen={isMenuOpen} />
          </HamburgerMenu>
          <SocialWrapper isOpen={isMenuOpen}>
            <SocialMediaIcon
              href={'https://www.linkedin.com/in/briansuruki'}
              size={20}
              platform={'linkedin'}
            />
            <SocialMediaIcon
              href={'https://github.com/medaworld'}
              size={20}
              platform={'github'}
            />
          </SocialWrapper>
        </Links>
      </NavBarContainer>
    </Header>
  );
}
