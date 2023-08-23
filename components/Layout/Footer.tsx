import { NavLinkList, SocialMediaList } from '@/utils/dataUtils';
import { Key } from 'react';
import { styled } from 'styled-components';
import SocialMediaIcon from '../common/SocialMediaIcon';
import { roboto } from '@/styles/fonts';

const FooterContainer = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 70px;
  padding: 15px;
  text-align: center;
  align-items: center;
`;

const FooterNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  display: flex;
  width: fit-content;
  gap: 1rem;

  li {
    cursor: pointer;
  }
`;

const FooterSocials = styled.ul`
  display: none;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    display: flex;
    width: fit-content;
    align-self: center;
    margin: 0 auto 10px;
  }

  li {
    padding: 10px;
    z-index: 1;
  }
`;

const FooterCredits = styled.div`
  font-size: 14px;

  p {
    font-size: 12px;
    margin-top: 1rem;
  }
`;

export const FooterToTop = styled.a`
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    opacity: 0.7;
  }
`;

export default function Footer() {
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
    <FooterContainer>
      <FooterNav>
        {NavLinkList.map((navLink, key) => {
          return (
            <li key={key}>
              <a onClick={() => scrollToSection(navLink.path)}>
                {navLink.title}
              </a>
            </li>
          );
        })}
      </FooterNav>
      <FooterSocials>
        {SocialMediaList &&
          SocialMediaList.map(
            ({ platform, url }: { platform: string; url: string }, i: Key) => (
              <li key={i}>
                <SocialMediaIcon href={url} platform={platform} size={20} />
              </li>
            )
          )}
      </FooterSocials>
      <FooterCredits className={roboto.className}>
        <FooterToTop
          onClick={() => {
            scrollToSection('top');
          }}
        >
          Back To Top ↑
        </FooterToTop>
        <p>
          <strong>Brian Suruki</strong>
        </p>
      </FooterCredits>
    </FooterContainer>
  );
}
