import { Badge } from "react-bootstrap";
import type { Ticket } from "../TicketsContext/TicketsStateProvider";

interface TicketSnippetProps {
    ticket: Ticket
}

export function TicketSnippet(props: TicketSnippetProps) {

    const ticket = props.ticket;

    return (
        <div className="glass flex flex-col p-2">
            <p className="font-bold">{ticket.name}</p>
            <Badge bg="secondary">Project</Badge>
            <p className="flex justify-end">{ticket.dueDate}</p>
        </div>
    );
}