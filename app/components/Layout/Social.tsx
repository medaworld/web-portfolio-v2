import React, { Key } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Side from '../common/Side';
import SocialMediaIcon from '../common/SocialMediaIcon';
import { SocialMediaList } from '@/app/utils/dataUtils';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${(props) => props.theme.primary};
  }

  li {
    transition: var(--transition);
    &:last-of-type {
      margin-bottom: 20px;
    }

    &:hover,
    &:focus {
      color: ${(props) => props.theme.color};
      transform: translateY(-3px);
    }
    a {
      padding: 10px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Social = ({ isHome }: { isHome: boolean }) => (
  <Side isHome={isHome} orientation="left">
    <StyledSocialList>
      {SocialMediaList &&
        SocialMediaList.map(
          ({ platform, url }: { platform: string; url: string }, i: Key) => (
            <li key={i}>
              <SocialMediaIcon href={url} platform={platform} size={20} />
            </li>
          )
        )}
    </StyledSocialList>
  </Side>
);

Social.propTypes = {
  isHome: PropTypes.bool,
};

export default Social;
