import { useState } from "react";
import { Button } from "react-bootstrap";
import { AddProjectModal } from "./AddProjectModal";


export function AddProject() {
    const [showAddProjectModal, setShowAddProjectModal] = useState(false);

    const handleAddProject = () => {
        setShowAddProjectModal(true);
    }

    return (
        <div className="flex">
            <Button variant="success" className="flex" onClick={handleAddProject}>
                Add Project
            </Button>
            {showAddProjectModal && (
                <AddProjectModal onHide={() => setShowAddProjectModal(false)} />
            )}
        </div>
    )
}