import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { email } from '@/app/utils/dataUtils';
import Side from '../common/Side';
import { raleway } from '@/app/fonts';

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${(props) => props.theme.primary};
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    transition: var(--transition);

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;

const Email = ({ isHome }: { isHome: boolean }) => (
  <Side isHome={isHome} orientation="right">
    <StyledLinkWrapper className={raleway.className}>
      <a href={`mailto:${email}`}>{email}</a>
    </StyledLinkWrapper>
  </Side>
);

Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
