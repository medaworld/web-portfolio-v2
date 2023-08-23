'use client';

import { createGlobalStyle } from 'styled-components';
import TransitionStyles from './TransitionStyle';

export const GlobalStyles = createGlobalStyle`
  :root {
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    font-family: 'Roboto';
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme.primary};
    background: linear-gradient(
      to bottom,
      transparent,
      ${(props) => props.theme.backgroundEnd}
    )
    ${(props) => props.theme.backgroundStart};
    

    &.blur {
      display: initial;
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  button {
    cursor: pointer;
  }


  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.color};
    }
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }

  ${TransitionStyles};

`;
