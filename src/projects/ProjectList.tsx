import { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

function ProjectList({ projects, onSave }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    // console.log(project);
    setProjectBeingEdited(project);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  return (
    <div className="row">
      <ul className="row">
        {projects.map((project) => (
          <div key={project.id} className="cols-sm">
            {project === projectBeingEdited ? (
              <ProjectForm
                project={project}
                onSave={onSave}
                onCancel={cancelEditing}
              />
            ) : (
              <ProjectCard project={project} onEdit={handleEdit}></ProjectCard>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}
export default ProjectList;
