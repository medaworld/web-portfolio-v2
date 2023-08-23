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
} from '../common/SvgIcons';
import { useState } from 'react';
import { TechIconsContainer, TechTitle } from './AboutStyles';

export default function AboutTechStack() {
  const [hoveredTitle, setHoveredTitle] = useState('');

  return (
    <>
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
      <TechTitle>{hoveredTitle}</TechTitle>
    </>
  );
}
