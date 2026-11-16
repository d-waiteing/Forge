import { Badge } from "react-bootstrap";


export function TicketSnippet() {

    return (
        <div className="glass flex flex-col p-2">
            <p className="font-bold">Ticket Name</p>
            <Badge bg="secondary">Project</Badge>
        </div>
    );
}