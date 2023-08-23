import useOnClickOutside from '@/app/hooks/useOnClickOutside';
import { NavLinkList } from '@/app/utils/dataUtils';
import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import {
  StyledMenu,
  StyledHamburgerButton,
  StyledSidebar,
  HamburgerBox,
  HamburgerInner,
  NavLinks,
} from './MenuStyles';
import { raleway } from '@/app/fonts';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const buttonRef = useRef(null);
  const navRef = useRef<HTMLElement>(null);

  let menuFocusables: any[];
  let firstFocusableEl: any;
  let lastFocusableEl: any;

  const setFocusables = () => {
    if (navRef.current) {
      menuFocusables = [
        buttonRef.current,
        ...Array.from(navRef.current.querySelectorAll('a')),
      ];
    }
    firstFocusableEl = menuFocusables[0];
    lastFocusableEl = menuFocusables[menuFocusables.length - 1];
  };

  const handleBackwardTab = (e: any) => {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault();
      lastFocusableEl.focus();
    }
  };

  const handleForwardTab = (e: any) => {
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault();
      firstFocusableEl.focus();
    }
  };

  const onKeyDown = (e: any) => {
    switch (e.key) {
      case 'Escape':
      case 'Esc': {
        setMenuOpen(false);
        break;
      }

      case 'Tab': {
        if (menuFocusables && menuFocusables.length === 1) {
          e.preventDefault();
          break;
        }
        if (e.shiftKey) {
          handleBackwardTab(e);
        } else {
          handleForwardTab(e);
        }
        break;
      }

      default: {
        break;
      }
    }
  };

  const onResize = (e: any) => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    setFocusables();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition;

        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 300);
  };

  return (
    <StyledMenu>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>

      <div ref={wrapperRef}>
        <StyledHamburgerButton
          onClick={toggleMenu}
          ref={buttonRef}
          aria-label="Menu"
        >
          <HamburgerBox>
            <HamburgerInner menuOpen={menuOpen} />
          </HamburgerBox>
        </StyledHamburgerButton>

        <StyledSidebar
          menuOpen={menuOpen}
          aria-hidden={!menuOpen}
          tabIndex={menuOpen ? 1 : -1}
        >
          <nav ref={navRef}>
            {NavLinkList && (
              <NavLinks>
                {NavLinkList.map((navLink, key) => (
                  <li
                    key={key}
                    className={raleway.className}
                    onClick={() => scrollToSection(navLink.path)}
                  >
                    {navLink.title}
                  </li>
                ))}
              </NavLinks>
            )}
          </nav>
        </StyledSidebar>
      </div>
    </StyledMenu>
  );
};

export default Menu;
