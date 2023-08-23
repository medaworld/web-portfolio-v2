import { size } from '@/utils/breakpointsUtils';
import Link from 'next/link';
import { css, styled } from 'styled-components';

export const Header = styled.header<{
  scrollDirection: string;
  scrolledToTop: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  z-index: 5;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: linear-gradient(
      to bottom,
      transparent,
      ${(props) => props.theme.tpBgEnd}
    )
    ${(props) => props.theme.tpBgStart};
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    ${(props) =>
      props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: 70px;
        transform: translateY(0px);
      `};

    ${(props) =>
      props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        height: 70px;
        transform: translateY(-70px);
      `};
  }
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

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  padding: 0;
  margin: 0 10px;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.li`
  font-size: 16px;

  &:last-child {
    margin-right: 0;
  }

  a {
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      color: ${(props) => props.theme.color};
    }
  }

  @media (max-width: ${size.tablet}) {
    font-size: 18px;
  }
`;

export const NavLogo = styled(Link)`
  transition: var(--transition);

  &:hover {
    opacity: 0.8;
  }
`;
