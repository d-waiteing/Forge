import { Badge } from "react-bootstrap";
import type { Ticket } from "../TicketsContext/TicketsStateProvider";
import { useDraggable } from "@dnd-kit/react";


interface TicketSnippetProps {
    ticket: Ticket
}

export function TicketSnippet(props: TicketSnippetProps) {

    const ticket = props.ticket;

    const {ref} = useDraggable({
        id: ticket.id
    })

    return (
        <div className="glass flex flex-col p-2" ref={ref}>
            <p className="font-bold">{ticket.name}</p>
            <Badge bg="secondary">Project</Badge>
            <p className="flex justify-end">{ticket.dueDate}</p>
        </div>
    );
}