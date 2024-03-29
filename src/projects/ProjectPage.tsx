import { Fragment, useEffect, useState } from "react";
import { Project } from "./Project";
import { projectAPI } from "./projectAPI";
import { useParams } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";
// import { MOCK_PROJECTS } from "./MockProjects";

function ProjectPage() {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | undefined>(undefined);
  const params = useParams()
  const id = Number(params.id)

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      projectAPI.find(id)
        .then((data) => {
          setProject(data)
          setLoading(false)
        })
        .catch((e) => {
          setError(e)
          setLoading(false)
        })
    }
    loadProjects();
  }, [id]);
  return (
    <div>
      <>
        <h1>Project Detail</h1>
        {loading && (
          <div className="center-page">
            <span className="spinner primary"></span>
            <p>Loading...</p>
          </div>
        )}
        {error && (
          <div className="row">
            <div className="card large error">
              <section>
                <p>
                  <span className="icon-alert inverse "></span>
                  {error}
                </p>
              </section>
            </div>
          </div>
        )}
        {project && <ProjectDetail project={project} />}
      </>
    </div>
  );
}
export default ProjectPage;
