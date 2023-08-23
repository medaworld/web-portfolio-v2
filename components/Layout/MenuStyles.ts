import { styled } from 'styled-components';

export const MenuContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }
`;

export const HamburgerBox = styled.div`
  display: inline-block;
  position: relative;
  height: 24px;
  width: 30px;
`;

export const HamburgerInner = styled.div<{ menuOpen: boolean }>`
  position: absolute;
  top: 50%;
  right: 0;
  width: 30px;
  height: 2px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.menuOpen ? `transparent` : props.theme.primary};
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${(props) => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${(props) => (props.menuOpen ? `0deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${(props) =>
      props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: auto;
    right: 0;
    width: 30px;
    height: 2px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.primary};
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
  }
  //top
  &:before {
    width: ${(props) => (props.menuOpen ? `100%` : `100%`)};
    top: ${(props) => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${(props) => (props.menuOpen ? `135deg` : `0`)});
    transition: ${({ menuOpen }) =>
      menuOpen
        ? 'top 0.1s ease-out, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)'
        : ' top 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
  }
  //bottom
  &:after {
    width: ${(props) => (props.menuOpen ? `100%` : `100%`)};
    bottom: ${(props) => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${(props) => (props.menuOpen ? `-135deg` : `0`)});
    transition: ${({ menuOpen }) =>
      menuOpen
        ? ' bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)'
        : ' bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
  }

  &:after::before {
    top: 50%;
    transform: translateY(-50%);
    opacity: ${(props) => (props.menuOpen ? 0 : 1)};
  }
`;

export const Sidebar = styled.aside<{ menuOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background: linear-gradient(
        to bottom,
        transparent,
        ${(props) => props.theme.backgroundEnd}
      )
      ${(props) => props.theme.backgroundStart};
    box-shadow: -10px 0px 30px -15px ${(props) => props.theme.shadow};
    z-index: 9;
    transform: translateX(${(props) => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${(props) => (props.menuOpen ? 'visible' : 'hidden')};
    transition: var(--transition);
  }

  nav {
    width: 100%;
    flex-direction: column;
    color: ${(props) => props.theme.secondary};
    font-family: var(--font-mono);
    text-align: center;
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  gap: 30px;

  li {
    font-size: 20px;
    margin-bottom: 30px;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      color: ${(props) => props.theme.color};
    }
  }
`;
