import { useCallback, useContext, useMemo, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { ProjectsStateContext, type Project } from "../ProjectsContext/ProjectsStateProvider";

interface EditProjectProps {
    project: Project;
}

export function EditProject(props: EditProjectProps) {

    const context = useContext(ProjectsStateContext);
    const { updateProject } = context;

     const [project, setProject] = useState<Project>({
        id: props.project.id,
        name: props.project.name,
        description: props.project.description,
        status: props.project.status,
        dueDate: props.project.dueDate
    });


    const handleInputChange = useCallback((field: string, value: string) => {
        setProject(prev => ({
            ...prev,
            [field]: value
        }));
    }, [setProject]);

    const [showEditProjectModal, setShowEditProjectModal] = useState(false);

    const handleEditButtonClick = useCallback(() => {
        setShowEditProjectModal(true);
    }, [])

    const onHide = useCallback(() => {
        setShowEditProjectModal(false);
    }, []);

    const handleConfirmEdit = useCallback(() => {
        updateProject(project);
        setShowEditProjectModal(false);
    }, [project]);

    const disabled = useMemo(() => {
            return !project.name || !project.description;
    }, [project.name, project.description]);
    
    const required = <span className="text-red-300">*</span>;

    return (
        <div>
            <Button size="sm"variant="warning" onClick={handleEditButtonClick}>
                Edit
            </Button>
            {showEditProjectModal && (
                <Modal size="lg" className="forge-modal" show={true} onHide={onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="flex flex-col gap-3">
                    <div className="flex flex-col">
                        <p className="font-bold">Name: {required}</p>
                        <input type="text" className="form-control" value={project.name} onChange={(e) => {
                            handleInputChange("name", e.target.value);
                        }}/>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold">Description: {required}</p>
                        <input type="text" className="form-control" value={project.description} onChange={(e) => {
                            handleInputChange("description", e.target.value);
                        }} />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold">Due Date:</p>
                        <input type="date" className="form-control" value={project.dueDate} onChange={(e) => {
                            handleInputChange("dueDate", e.target.value);
                        }} />
                    </div>
                </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size="sm"variant="warning" disabled={disabled} onClick={handleConfirmEdit}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    )
}