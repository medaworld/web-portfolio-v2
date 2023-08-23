import { SocialMediaList } from '@/app/utils/dataUtils';
import { Key } from 'react';
import { styled } from 'styled-components';
import SocialMediaIcon from '../common/SocialMediaIcon';

const FooterContainer = styled.footer`
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
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

const StyledCredit = styled.div`
  font-size: 14px;
  line-height: 1;

  a {
    z-index: 1;
    padding: 10px;
  }
`;
export default function Footer() {
  return (
    <FooterContainer>
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
      <StyledCredit>
        <h4>Brian Suruki</h4>
        <p>Web Developer & Designer</p>
      </StyledCredit>
    </FooterContainer>
  );
}
