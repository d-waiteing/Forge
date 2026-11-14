import { useCallback, useContext } from "react";
import { ProjectsStateContext } from "../ProjectsContext/ProjectsStateProvider";
import Table from "react-bootstrap/esm/Table";
import Badge from "react-bootstrap/esm/Badge";
import { DeleteProject } from "./DeleteProject";
import { EditProject } from "./EditProject";


export function ProjectsDisplay() {
    const { projectsState: { projects } } = useContext(ProjectsStateContext);
  
    const badgeColor = useCallback((status: string) => {
        if (status === "New"){
            return "primary";
        }

        return "secondary";
    } , []);

    return (
        <div className="glass flex flex-col items-center w-full p-2">
            <Table striped hover variant="dark" className="w-full" style={{ borderRadius: "16px", overflow: "hidden" }}>
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
                        <tr className="align-middle" key={project.id}>
                            <td>{project.name}</td>
                            <td>{project.description}</td>
                            <td><Badge bg={badgeColor(project.status)}>{project.status}</Badge></td>
                            <td>{project.dueDate || "-"}</td>
                            <td className="flex gap-2">
                                <EditProject project={project}/>
                                <DeleteProject project={project} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {!projects.length && (
                <div className="glass flex justify-center items-center w-full h-full p-4">
                    <p className="text-center">No projects found. Click "Add Project" to create a new project.</p>
                </div>
            )}
        </div>
    )
}