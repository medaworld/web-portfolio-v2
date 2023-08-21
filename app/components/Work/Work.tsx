import { styled } from 'styled-components';
import { SectionContainer, SectionTitle } from '../common/CommonStyles';
import ProjectsList from './ProjectsList';

export default function Work() {
  return (
    <SectionContainer>
      <SectionTitle>Work</SectionTitle>
      <ProjectsList />
    </SectionContainer>
  );
}
