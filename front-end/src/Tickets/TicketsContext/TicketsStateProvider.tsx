import { createContext, useCallback, useState } from "react";

interface TicketsStateContext {
    ticketsState: TicketsState;
    ticketsByStatus: (givenStatus: TicketStatus) => Ticket[];
    addTicket: (ticket: Ticket) => void;
    deleteTicket: (ticketId: string) => void;
    updateTicket: (updatedTicket: Ticket) => void;
    setTicketStatus: (ticketId: string, status: TicketStatus) => void;
}

interface TicketsState {
    tickets: Ticket[];
}

export const TicketStatus = {
    NEW: 'NEW',
    IN_PROGRESS: 'IN PROGRESS',
    COMPLETE: 'COMPLETE',
} as const;

export type TicketStatus = typeof TicketStatus[keyof typeof TicketStatus]

export interface Ticket {
    id: string;
    name: string;
    description: string;
    status: TicketStatus;
    dueDate?: string;
}

export const TicketsStateContext = createContext<TicketsStateContext>({} as TicketsStateContext);

export function TicketsStateProvider({ children }: { children: React.ReactNode }) {
    const [ticketsState, setTicketsState] = useState<TicketsState>({
    tickets: [
        {
            id: crypto.randomUUID(),
            name: "Create login page",
            description: "Build the login page UI",
            status: TicketStatus.NEW,
            dueDate: "2026-11-25"
        },
        {
            id: crypto.randomUUID(),
            name: "Fix navigation bug",
            description: "Navigation menu doesn't close after selection",
            status: TicketStatus.IN_PROGRESS,
            dueDate: "2026-11-20"
        },
        {
            id: crypto.randomUUID(),
            name: "Update database schema",
            description: "Add new fields to the project table",
            status: TicketStatus.COMPLETE,
            dueDate: "2026-11-12"
        },
        {
            id: crypto.randomUUID(),
            name: "Implement ticket filtering",
            description: "Allow filtering tickets by status",
            status: TicketStatus.NEW
        },
        {
            id: crypto.randomUUID(),
            name: "Add project validation",
            description: "Validate required fields when creating projects",
            status: TicketStatus.IN_PROGRESS,
            dueDate: "2026-11-28"
        },
        {
            id: crypto.randomUUID(),
            name: "Improve loading performance",
            description: "Reduce unnecessary component re-renders",
            status: TicketStatus.COMPLETE,
            dueDate: "2026-11-14"
        }
    ]
});

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

    const setTicketStatus = useCallback((ticketId: string, status: TicketStatus) => {
        setTicketsState((prevTickets) => ({
            tickets: prevTickets.tickets.map((ticket) =>  ticket.id === ticketId ? {...ticket, status: status} : ticket)
        }));
    }, []);

    const ticketsByStatus = useCallback((givenStatus: TicketStatus) => {
        return ticketsState.tickets.filter((t) => t.status === givenStatus);
    }, [ticketsState.tickets])

    return (
        <TicketsStateContext.Provider value={{ ticketsState, ticketsByStatus, addTicket, deleteTicket, updateTicket, setTicketStatus }}>
            {children}
        </TicketsStateContext.Provider>
    )
}