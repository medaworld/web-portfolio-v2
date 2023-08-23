import { robotoSlab } from '@/app/fonts';
import { SectionContainer, SectionTitle } from '../common/CommonStyles';
import usePrefersReducedMotion from '@/app/hooks/usePrefersReducedMotion';
import { useEffect, useRef } from 'react';
import sr, { srConfig } from '@/app/utils/scrollUtils';
import { ProjectsGrid } from './WorkStyles';
import { ProjectsListData } from '@/app/utils/dataUtils';
import ProjectItem from './ProjectItem';

export default function Work() {
  const revealTitle = useRef(null);
  const revealProjects = useRef<(HTMLLIElement | null)[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !sr) {
      return;
    }

    if (revealTitle.current) {
      sr.reveal(revealTitle.current, srConfig());
    }

    revealProjects.current.forEach((ref, i) => {
      if (sr && ref) {
        sr.reveal(ref, srConfig(i * 100));
      }
    });
  }, [prefersReducedMotion]);

  return (
    <SectionContainer id={'work'}>
      <SectionTitle className={robotoSlab.className} ref={revealTitle}>
        Work
      </SectionTitle>
      <ProjectsGrid>
        {ProjectsListData.map((project, index) => {
          return (
            <ProjectItem
              key={index}
              project={project}
              ref={(el) => (revealProjects.current[index] = el)}
            />
          );
        })}
      </ProjectsGrid>
    </SectionContainer>
  );
}
