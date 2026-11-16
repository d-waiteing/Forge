import { useState } from "react";
import { Button } from "react-bootstrap";
import { AddTicketModal } from "./AddTicketModal";


export function AddTicket() {
    const [showAddTicketModal, setShowAddTicketModal] = useState(false);

    const handleAddTicket = () => {
        setShowAddTicketModal(true);
    }

    return (
        <div className="flex">
            <Button variant="success" className="flex" onClick={handleAddTicket}>
                Add Ticket
            </Button>
            {showAddTicketModal && (
                <AddTicketModal onHide={() => setShowAddTicketModal(false)} />
            )}
        </div>
    )
}