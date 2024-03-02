import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
}
function ProjectList({ projects }: ProjectListProps) {
  const handleEdit = (project: Project) => {
    console.log(project);
  };
  return (
    <div className="row">
      <ul className="row">
        {projects.map((project) => (
          //   <li key={project.id}>{project.name}</li>
          <div key={project.id} className="cols-sm">
            <ProjectCard project={project} onEdit={handleEdit}></ProjectCard>
            <ProjectForm />
          </div>
        ))}
      </ul>
    </div>
  );
}
export default ProjectList;
