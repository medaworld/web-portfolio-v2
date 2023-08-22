import { raleway } from '@/app/fonts';
import {
  Project,
  ProjectContent,
  ProjectOverline,
  ProjectTitle,
  ProjectDescription,
  ProjectTechList,
  ProjectLinks,
  ProjectImage,
  ImageWrapper,
  ProjectLogin,
} from './WorkStyles';
import Image from 'next/image';
import { ProjectProps } from '@/app/types/types';

export default function ProjectItem({ project }: { project: ProjectProps }) {
  return (
    <Project>
      <ProjectContent className="project-content">
        <ProjectOverline className={raleway.className}>
          {project.overline}
        </ProjectOverline>
        <ProjectTitle className="project-title">
          <a href={project.links.live ? project.links.live : '#'}>
            {project.title}
          </a>
        </ProjectTitle>
        <ProjectDescription className="project-description">
          <p>{project.description}</p>
          {project.login && (
            <ProjectLogin>
              <p>
                <strong>Username:</strong> {project.login.username}
              </p>
              <p>
                <strong>Password:</strong> {project.login.password}
              </p>
              <a
                href={project.login.link}
                aria-label="Login Link"
                rel="noopener noreferrer"
                target="_blank"
              >
                Login
              </a>
              {project.load && (
                <p>
                  <strong>Note:</strong> Please allow a minute for server to
                  load
                </p>
              )}
            </ProjectLogin>
          )}
        </ProjectDescription>

        <ProjectTechList className={`${raleway.className} project-tech-list`}>
          {project.techStack.map((tech, index) => {
            return <li key={index}>{tech}</li>;
          })}
        </ProjectTechList>
        <ProjectLinks className="project-links">
          {project.links.github && (
            <a
              href={project.links.github}
              aria-label="GitHub Link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              aria-label="External Link"
              className="external"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-external-link"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </ProjectLinks>
      </ProjectContent>
      <ProjectImage className="project-image">
        <a
          href={project.links.live ? project.links.live : '#'}
          rel="noopener noreferrer"
          target="_blank"
        >
          <ImageWrapper>
            <Image
              className="img"
              src={project.image}
              alt={project.title}
              width={700}
              height={438}
            />
          </ImageWrapper>
        </a>
      </ProjectImage>
    </Project>
  );
}
