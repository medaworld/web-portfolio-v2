import { styled } from 'styled-components';

const FooterContainer = styled.footer`
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const FooterSocials = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-size: 14px;
  line-height: 1;

  a {
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;
export default function Footer() {
  return (
    <FooterContainer>
      <FooterSocials></FooterSocials>
      <StyledCredit>
        <a href="https://github.com/bchiang7/v4">
          <h4>Brian Suruki</h4>
          <p>Web Developer & Designer</p>
        </a>
      </StyledCredit>
    </FooterContainer>
  );
}
