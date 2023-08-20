import styled, { css } from 'styled-components';
import Logo from '../common/Logo';
import Link from 'next/link';
import { size } from '@/app/utils/breakpoints';
import { NavLinkList } from '@/app/utils/dummyData';
import SocialMediaIcon from '../common/SocialMediaIcon';
import { useState } from 'react';

const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
  z-index: 5;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  padding: 0;
  margin: 0 10px;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 55px;
    left: 0;
    width: 100%;
    padding: 5px;
    margin: 0;

    li {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`;

export const NavLink = styled.li`
  margin-right: 15px;
  font-size: 14px;

  &:last-child {
    margin-right: 0;
  }

  a {
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: ${size.tablet}) {
    font-size: 18px;
  }
`;

export const SocialWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-weight: 200;
  gap: 1rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 140px;
    left: 0;
    width: 100%;
    margin: 0;
    transition: all 0.3s ease;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const HamburgerBar = styled.span<{ isOpen: boolean }>`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px 0;
  background-color: ${(props) => props.theme.primary};
  transition: all 0.3s ease-in-out;

  ${({ isOpen }) => isOpen && 'transform: translateY(8px) rotate(-45deg);'}

  &:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  }

  &:last-child {
    ${({ isOpen }) => isOpen && 'transform: translateY(-8px) rotate(45deg);'}
  }
`;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    console.log('test');
  }

  return (
    <NavBarContainer>
      <Logo src="/images/logo.png" size={30} />
      <Links>
        <NavLinks isOpen={isMenuOpen}>
          {NavLinkList.map((navLink, key) => {
            return (
              <NavLink key={key}>
                <Link href={navLink.path}>{navLink.title}</Link>
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
  );
}
