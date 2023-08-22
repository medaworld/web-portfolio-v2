import { robotoSlab } from '@/app/fonts';
import { SectionContainer, SectionTitle } from '../common/CommonStyles';
import ProjectsList from './ProjectsList';

export default function Work() {
  return (
    <SectionContainer id={'work'}>
      <SectionTitle className={robotoSlab.className}>Work</SectionTitle>
      <ProjectsList />
    </SectionContainer>
  );
}
