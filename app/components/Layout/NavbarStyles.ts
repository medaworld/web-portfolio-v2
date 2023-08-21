import { size } from '@/app/utils/breakpointsUtils';
import { styled } from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  z-index: 5;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: linear-gradient(to bottom, transparent, rgba(250, 250, 250, 0.2))
    rgba(214, 219, 220, 0.5);
  /* box-shadow: 0 10px 30px -10px #ababab46; */
`;

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 55px;
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
  /* background-color: ${(props) => props.theme.primary}; */
  background-color: black;
  transition: all 0.3s ease-in-out;

  ${({ isOpen }) => isOpen && 'transform: translateY(8px) rotate(-45deg);'}

  &:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  }

  &:last-child {
    ${({ isOpen }) => isOpen && 'transform: translateY(-8px) rotate(45deg);'}
  }
`;
