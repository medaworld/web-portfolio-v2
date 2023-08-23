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
import { RxExternalLink, RxGithubLogo } from 'react-icons/rx';
import React from 'react';
import { ProjectProps } from '@/app/types/types';

const ProjectItem = React.forwardRef<HTMLLIElement, { project: ProjectProps }>(
  ({ project }, ref) => {
    return (
      <Project ref={ref}>
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
                <RxGithubLogo />
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
                <RxExternalLink />
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
);

ProjectItem.displayName = 'ProjectItem';

export default ProjectItem;
