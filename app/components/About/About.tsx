import { robotoSlab } from '@/app/fonts';
import AboutContent from './AboutContent';
import AboutTechStack from './AboutTechStack';
import { SectionContainer, SectionTitle } from '../common/CommonStyles';

export default function About() {
  return (
    <SectionContainer id={'about'}>
      <SectionTitle className={robotoSlab.className}>About</SectionTitle>
      <AboutContent />
      <AboutTechStack />
    </SectionContainer>
  );
}
