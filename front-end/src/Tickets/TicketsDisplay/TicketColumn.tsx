import { useContext } from "react";
import { TicketSnippet } from "./TicketSnippet"
import { TicketsStateContext, TicketStatus } from "../TicketsContext/TicketsStateProvider";
import { useDroppable } from "@dnd-kit/react";

interface TicketColumnProps {
    status: TicketStatus
}

export function TicketColumn(props: TicketColumnProps) {

    const context = useContext(TicketsStateContext);
    const { ticketsByStatus } = context;

    const {ref} = useDroppable({
        id: props.status
    })

    return (
        <div className="glass flex flex-col items-center p-2 min-h-100 min-w-50" ref={ref}>
            <h3>{props.status}</h3>
            {ticketsByStatus(props.status).map((t) => (
                <TicketSnippet ticket={t}/>
            ))}
        </div>
    )
}