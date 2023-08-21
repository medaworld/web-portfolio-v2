import { robotoSlab } from '@/app/fonts';
import Image from 'next/image';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faNodeJs,
  faBootstrap,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  ExpressIcon,
  FirebaseIcon,
  MongoIcon,
  MySQLIcon,
  NextIcon,
  PostgresqlIcon,
  ReactIcon,
  ReduxIcon,
  StyledComponentsIcon,
  TypeScriptIcon,
} from '../common/SvgIcon';
import { useState } from 'react';

const AboutContainer = styled.section`
  padding: 100px 0;
`;

const Title = styled.h2`
  font-size: clamp(26px, 5vw, 32px);
  margin: 10px 0px 40px;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  white-space: nowrap;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ContentText = styled.div`
  z-index: 1;
`;

const ContentParagraph = styled.div`
  p {
    margin: 0px 0px 15px;
    font-size: 20px;
  }
`;

const ContentImage = styled.div``;

const ImageWrapper = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.5;
  }
`;

const TechIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;

  svg {
    z-index: 1;
    cursor: pointer;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const IconTitle = styled.div`
  font-size: 32px;
  text-align: center;
  margin-top: 20px;
  height: 32px;
  min-width: 100%;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.children ? 1 : 0)};
`;

export default function About() {
  const [hoveredTitle, setHoveredTitle] = useState('');

  return (
    <AboutContainer>
      <Title className={robotoSlab.className}>About</Title>
      <Content>
        <ContentText>
          <ContentParagraph>
            <p>
              Hi I&apos;m Brian! From a young age, my affinity for creativity
              led me to dabble with themes on platforms like MySpace and Tumblr.
              This intrinsic fascination was the starting point of my web
              development journey, sowing the seeds for my future career.
            </p>
            <p>
              Fast forward to 2020, my innate curiosity transformed into a
              professional pursuit. I mastered the essentials:{' '}
              <strong>HTML</strong>, <strong>CSS</strong>, and{' '}
              <strong>JavaScript</strong>, with a particular focus on{' '}
              <strong>React</strong> and <strong>NextJS</strong>. These skills
              fast-tracked my way into a Software Engineer role at
              Blockchain.com.
            </p>
            <p>
              At Blockchain.com, I played a crucial role in sculpting the
              frontend of their explorer. Beyond frontend, I expanded my
              horizons into backend with <strong>Node.js</strong>, mobile
              development via <strong>React Native</strong>, and database
              management with <strong>MySQL</strong> and{' '}
              <strong>PostgreSQL</strong>. My broad skill set ensures I deliver
              comprehensive and cutting-edge solutions in today&apos;s rapidly
              evolving tech world.
            </p>
          </ContentParagraph>
        </ContentText>
        <ContentImage>
          <ImageWrapper>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={200}
              height={200}
              priority
            />
          </ImageWrapper>
        </ContentImage>
      </Content>
      <TechIconsContainer>
        <FontAwesomeIcon
          icon={faJs}
          size="2x"
          title="JavaScript"
          onMouseEnter={() => setHoveredTitle('JavaScript')}
          onMouseLeave={() => setHoveredTitle('')}
        />
        <TypeScriptIcon
          onMouseEnter={() => setHoveredTitle('TypeScript')}
          onMouseLeave={() => setHoveredTitle('')}
        />
        <FontAwesomeIcon
          icon={faHtml5}
          size="2x"
          title="HTML"
          onMouseEnter={() => setHoveredTitle('HTML')}
          onMouseLeave={() => setHoveredTitle('')}
        />
        <FontAwesomeIcon
          icon={faCss3Alt}
          size="2x"
          title="CSS"
          onMouseEnter={() => setHoveredTitle('CSS')}
          onMouseLeave={() => setHoveredTitle('')}
        />
        <FontAwesomeIcon
          icon={faBootstrap}
          size="2x"
          title="Bootstrap"
          onMouseEnter={() => setHoveredTitle('Bootstrap')}
          onMouseLeave={() => setHoveredTitle('')}
        />
        <ReactIcon
          onMouseEnter={() => setHoveredTitle('React')}
          onMouseLeave={() => setHoveredTitle('')}
        />
        <FontAwesomeIcon
          icon={faReact}
          size="2x"
          title="React Native"
          onMouseEnter={() => setHoveredTitle('React Native')}
          onMouseLeave={() => setHoveredTitle('')}
        />
        <ReduxIcon
          onMouseEnter={() => setHoveredTitle('Redux')}
          onMouseLeave={() => setHoveredTitle('')}
        />
        <NextIcon
          onMouseEnter={() => setHoveredTitle('Next.js')}
          onMouseLeave={() => setHoveredTitle('')}
        />
        <StyledComponentsIcon
          onMouseEnter={() => setHoveredTitle('Styled Components')}
          onMouseLeave={() => setHoveredTitle('')}
        />
        <FontAwesomeIcon
          icon={faNodeJs}
          size="2x"
          title="NodeJS"
          onMouseEnter={() => setHoveredTitle('NodeJS')}
          onMouseLeave={() => setHoveredTitle('')}
        />
        <ExpressIcon
          onMouseEnter={() => setHoveredTitle('Express')}
          onMouseLeave={() => setHoveredTitle('')}
        />
        <FirebaseIcon
          onMouseEnter={() => setHoveredTitle('Firebase')}
          onMouseLeave={() => setHoveredTitle('')}
        />
        <MongoIcon
          onMouseEnter={() => setHoveredTitle('MongoDB')}
          onMouseLeave={() => setHoveredTitle('')}
        />
        <MySQLIcon
          onMouseEnter={() => setHoveredTitle('MySQL')}
          onMouseLeave={() => setHoveredTitle('')}
        />
        <PostgresqlIcon
          onMouseEnter={() => setHoveredTitle('PostgreSQL')}
          onMouseLeave={() => setHoveredTitle('')}
        />
        <FontAwesomeIcon
          icon={faGithub}
          size="2x"
          title="Github"
          onMouseEnter={() => setHoveredTitle('Github')}
          onMouseLeave={() => setHoveredTitle('')}
        />
      </TechIconsContainer>
      <IconTitle>{hoveredTitle}</IconTitle>
    </AboutContainer>
  );
}
