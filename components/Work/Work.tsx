import { robotoSlab } from '@/styles/fonts';
import { SectionContainer, SectionTitle } from '../common/CommonStyles';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { useEffect, useRef } from 'react';
import { srConfig } from '@/utils/scrollUtils';
import { ProjectsGrid } from './WorkStyles';
import { ProjectsListData } from '@/utils/dataUtils';
import ProjectItem from './ProjectItem';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function Work() {
  const sr: scrollReveal.ScrollRevealObject | null = useScrollReveal();
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
  }, [prefersReducedMotion, sr]);

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
