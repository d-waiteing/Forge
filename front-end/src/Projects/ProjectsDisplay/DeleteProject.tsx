import { useCallback, useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { ProjectsStateContext, type Project } from "../ProjectsContext/ProjectsStateProvider";

interface DeleteProjectProps {
    project: Project;
}

export function DeleteProject(props: DeleteProjectProps) {

    const context = useContext(ProjectsStateContext);
    const { deleteProject } = context;

    const [showDeleteProjectModal, setShowDeleteProjectModal] = useState(false);

    const handleDeleteButtonClick = useCallback(() => {
        setShowDeleteProjectModal(true);
    }, [])

    const onHide = useCallback(() => {
        setShowDeleteProjectModal(false);
    }, []);

    const handleConfirmDelete = useCallback(() => {
        deleteProject(props.project.id);
        setShowDeleteProjectModal(false);
    }, []);

    return (
        <div>
            <Button size="sm"variant="danger" onClick={handleDeleteButtonClick}>
                Delete
            </Button>
            {showDeleteProjectModal && (
                <Modal className="forge-modal" show={true} onHide={onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you sure you want to delete {props.project.name}? You will not be able to recover this project.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size="sm"variant="danger" onClick={handleConfirmDelete}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    )
}