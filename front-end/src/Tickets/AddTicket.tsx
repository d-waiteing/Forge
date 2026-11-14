import { useState } from "react";
import { Button } from "react-bootstrap";


export function AddTicket() {
    // const [showAddProjectModal, setShowAddProjectModal] = useState(false);

    // const handleAddProject = () => {
    //     setShowAddProjectModal(true);
    // }

    return (
        <div className="flex">
            <Button variant="success" className="flex">
                Add Ticket
            </Button>
            {/* {showAddProjectModal && (
                <AddProjectModal onHide={() => setShowAddProjectModal(false)} />
            )} */}
        </div>
    )
}