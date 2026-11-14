import React from "react";
import { TicketsStateProvider } from "./TicketsStateProvider";

interface TicketsContextType {}

export const TicketsContext = React.createContext<TicketsContextType | undefined>(undefined);


export function TicketsProvider({ children }: { children: React.ReactNode }) {
    return (
        <TicketsContext.Provider value={undefined}>
            <TicketsStateProvider>
                {children}
            </TicketsStateProvider>
        </TicketsContext.Provider>
    )
}