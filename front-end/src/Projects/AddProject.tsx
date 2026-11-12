import { Button } from "react-bootstrap";
import { useContext } from "react";
import { ProjectsStateContext } from "./ProjectsContext/ProjectsStateProvider";


export function AddProject() {

    const context = useContext(ProjectsStateContext);
    const { addProject } = context;

    const handleAddProject = () => {
        const newProject = {
            id: "",
            name: "New Project",
            description: "This is a new project.",
            status: "New",
        }
        addProject(newProject);
    }

    return (
        <div className="flex">
            <Button variant="success" className="flex mb-2" onClick={handleAddProject}>
                Add Project
            </Button>
        </div>
    )
}