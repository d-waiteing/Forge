import { Button, Modal } from "react-bootstrap";
import { ProjectsStateContext, type Project } from "./ProjectsContext/ProjectsStateProvider";
import { useCallback, useContext, useMemo, useState } from "react";

type AddProjectModalProps = {
  onHide: () => void;
}

export function AddProjectModal({ onHide }: AddProjectModalProps) {

    const context = useContext(ProjectsStateContext);
    const { addProject } = context;

    const [newProject, setNewProject] = useState<Project>({
        id: crypto.randomUUID(),
        name: "",
        description: "",
        status: "New",
        dueDate: ""
    });


    const handleInputChange = useCallback((field: string, value: string) => {
        setNewProject(prev => ({
            ...prev,
            [field]: value
        }));
    }, [setNewProject]);

    const handleAddProject = useCallback(() => {
        addProject(newProject);
        onHide();

    }, [addProject, onHide, newProject]);

    const disabled = useMemo(() => {
        return !newProject.name || !newProject.description;
    }, [newProject.name, newProject.description]);

    const required = <span className="text-red-300">*</span>;


    return (
        <Modal size="lg" className="forge-modal" show={true} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Add Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col">
                        <p className="font-bold">Name: {required}</p>
                        <input type="text" className="form-control" value={newProject.name} onChange={(e) => {
                            handleInputChange("name", e.target.value);
                        }}/>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold">Description: {required}</p>
                        <input type="text" className="form-control" value={newProject.description} onChange={(e) => {
                            handleInputChange("description", e.target.value);
                        }} />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold">Due Date:</p>
                        <input type="date" className="form-control" value={newProject.dueDate} onChange={(e) => {
                            handleInputChange("dueDate", e.target.value);
                        }} />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleAddProject} disabled={disabled}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}