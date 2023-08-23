import useOnClickOutside from '@/app/hooks/useOnClickOutside';
import { NavLinkList } from '@/app/utils/dataUtils';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import {
  MenuContainer,
  HamburgerButton,
  Sidebar,
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

  const menuFocusablesRef = useRef<any[]>([]);
  const firstFocusableElRef = useRef<HTMLElement | null>(null);
  const lastFocusableElRef = useRef<HTMLElement | null>(null);

  const setFocusables = useCallback(() => {
    if (navRef.current) {
      menuFocusablesRef.current = [
        buttonRef.current,
        ...Array.from(navRef.current.querySelectorAll('a')),
      ];
    }
    firstFocusableElRef.current = menuFocusablesRef.current[0];
    lastFocusableElRef.current =
      menuFocusablesRef.current[menuFocusablesRef.current.length - 1];
  }, [navRef, buttonRef]);

  const handleBackwardTab = useCallback(
    (e: any) => {
      if (document.activeElement === firstFocusableElRef.current) {
        e.preventDefault();
        lastFocusableElRef.current?.focus();
      }
    },
    [firstFocusableElRef, lastFocusableElRef]
  );

  const handleForwardTab = useCallback(
    (e: any) => {
      if (document.activeElement === lastFocusableElRef.current) {
        e.preventDefault();
        firstFocusableElRef.current?.focus();
      }
    },
    [firstFocusableElRef, lastFocusableElRef]
  );

  const onKeyDown = useCallback(
    (e: any) => {
      switch (e.key) {
        case 'Escape':
        case 'Esc': {
          setMenuOpen(false);
          break;
        }

        case 'Tab': {
          if (
            menuFocusablesRef.current &&
            menuFocusablesRef.current.length === 1
          ) {
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
    },
    [handleBackwardTab, handleForwardTab]
  );

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
  }, [onKeyDown, setFocusables]);

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
    <MenuContainer>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>

      <div ref={wrapperRef}>
        <HamburgerButton onClick={toggleMenu} ref={buttonRef} aria-label="Menu">
          <HamburgerBox>
            <HamburgerInner menuOpen={menuOpen} />
          </HamburgerBox>
        </HamburgerButton>

        <Sidebar
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
        </Sidebar>
      </div>
    </MenuContainer>
  );
};

export default Menu;
