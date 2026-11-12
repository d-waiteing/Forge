import { useContext } from "react";
import { ProjectsStateContext } from "../ProjectsContext/ProjectsStateProvider";
import Table from "react-bootstrap/esm/Table";
import Button from "react-bootstrap/esm/Button";


export function ProjectsDisplay() {
    const { projectsState: { projects } } = useContext(ProjectsStateContext);
  

  return (
    <div className="flex flex-col items-center w-full p-2">
        <Table striped bordered hover variant="dark" className="w-full">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Due Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project) => (
                    <tr key={project.id}>
                        <td>{project.name}</td>
                        <td>{project.description}</td>
                        <td></td>
                        <td></td>
                        <td className="flex gap-2">
                            <Button size="sm" variant="warning">Edit</Button>
                            <Button size="sm" variant="danger">Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        {!projects.length && (
            <div className="flex justify-center items-center w-full h-full p-4">
                <p className="text-center">No projects found. Click "Add Project" to create a new project.</p>
            </div>
        )}
    </div>
  )
}