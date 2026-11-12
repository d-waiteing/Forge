import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router";
import { AddProject } from "./AddProject";
import { ProjectsProvider } from "./ProjectsContext/ProjectsContext";


function Projects() {

  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  }

  return (
    <ProjectsProvider>
      <div className="flex flex-col h-full w-full p-4 m-4">
        <div className="flex justify-between items-center p-2">
          <Button variant="outline-secondary" className="flex mb-2" onClick={handleHomeClick}>
            <img src="/src/assets/home.svg" className="w-6 h-6"/>
          </Button>
          <h1>Projects</h1>
          <AddProject />
        </div>
      </div>
    </ProjectsProvider>
  )
}

export default Projects;