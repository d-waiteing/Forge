import { createContext, useCallback, useState } from "react";

interface TicketsStateContext {
    ticketsState: TicketsState;
    addTicket: (ticket: Ticket) => void;
    deleteTicket: (ticketId: string) => void;
    updateTicket: (updatedTicket: Ticket) => void;
}

interface TicketsState {
    tickets: Ticket[];
}

export interface Ticket {
    id: string;
    name: string;
    description: string;
    status: string;
    dueDate?: string;
}

export const TicketsStateContext = createContext<TicketsStateContext>({} as TicketsStateContext);

export function TicketsStateProvider({ children }: { children: React.ReactNode }) {
    const [ticketsState, setTicketsState] = useState<TicketsState>({ tickets: [] });

    const addTicket = useCallback((ticket: Ticket) => {
        setTicketsState((prevTickets) => ({ tickets: [...prevTickets.tickets, ticket] }));
    }, []);
    
    const deleteTicket = useCallback((ticketId: string) => {
        setTicketsState((prevTickets) => ({ tickets: prevTickets.tickets.filter((p) => p.id !== ticketId) }));
    }, []);

    const updateTicket = useCallback((updatedTicket: Ticket) => {
        setTicketsState((prevTickets) => ({
            tickets: prevTickets.tickets.map((ticket) =>  ticket.id === updatedTicket.id ? updatedTicket : ticket)
        }));
    }, []);

    return (
        <TicketsStateContext.Provider value={{ ticketsState, addTicket, deleteTicket, updateTicket }}>
            {children}
        </TicketsStateContext.Provider>
    )
}