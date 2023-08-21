import { ProjectsListData } from '@/app/utils/dataUtils';
import { ProjectsGrid } from './WorkStyles';
import ProjectItem from './ProjectItem';

export default function ProjectsList() {
  return (
    <ProjectsGrid>
      {ProjectsListData.map((project, index) => {
        return <ProjectItem key={index} project={project} />;
      })}
    </ProjectsGrid>
  );
}
