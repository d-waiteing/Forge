import { useCallback, useContext } from "react";
import { TicketsStateContext, TicketStatus } from "../TicketsContext/TicketsStateProvider";
import { TicketSnippet } from "./TicketSnippet";


export function TicketsDisplay() {

    const context = useContext(TicketsStateContext);
    const { ticketsState } = context;

    const ticketsByStatus = useCallback((givenStatus: TicketStatus) => {
        return ticketsState.tickets.filter((t) => t.status === givenStatus);
    }, [ticketsState.tickets])


    return (
        <div className="flex justify-between p-2">
            {Object.values(TicketStatus).map((status) => (
                <div className="glass flex flex-col items-center p-2">
                    <h3>{status}</h3>
                    {ticketsByStatus(status).map((t) => (
                        <TicketSnippet />
                    ))}
                </div>                    
            ))}
        </div>
    );
}