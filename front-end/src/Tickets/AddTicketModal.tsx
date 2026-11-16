import { Button, Modal } from "react-bootstrap";
import { TicketsStateContext, TicketStatus, type Ticket } from "./TicketsContext/TicketsStateProvider";
import { useCallback, useContext, useMemo, useState } from "react";

type AddTicketModalProps = {
  onHide: () => void;
}

export function AddTicketModal({ onHide }: AddTicketModalProps) {

    const context = useContext(TicketsStateContext);
    const { addTicket } = context;

    const [newTicket, setNewTicket] = useState<Ticket>({
        id: crypto.randomUUID(),
        name: "",
        description: "",
        status: TicketStatus.NEW,
        dueDate: ""
    });


    const handleInputChange = useCallback((field: string, value: string) => {
        setNewTicket(prev => ({
            ...prev,
            [field]: value
        }));
    }, [setNewTicket]);

    const handleAddTicket = useCallback(() => {
        addTicket(newTicket);
        onHide();

    }, [addTicket, onHide, newTicket]);

    const disabled = useMemo(() => {
        return !newTicket.name || !newTicket.description;
    }, [newTicket.name, newTicket.description]);

    const required = <span className="text-red-300">*</span>;


    return (
        <Modal size="lg" className="forge-modal" show={true} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Add Ticket</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col">
                        <p className="font-bold">Name: {required}</p>
                        <input type="text" className="form-control" value={newTicket.name} onChange={(e) => {
                            handleInputChange("name", e.target.value);
                        }}/>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold">Description: {required}</p>
                        <input type="text" className="form-control" value={newTicket.description} onChange={(e) => {
                            handleInputChange("description", e.target.value);
                        }} />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold">Due Date:</p>
                        <input type="date" className="form-control" value={newTicket.dueDate} onChange={(e) => {
                            handleInputChange("dueDate", e.target.value);
                        }} />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleAddTicket} disabled={disabled}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}