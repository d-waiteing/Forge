import { DragDropProvider } from "@dnd-kit/react";
import { TicketsStateContext, TicketStatus } from "../TicketsContext/TicketsStateProvider";
import { TicketColumn } from "./TicketColumn";
import { useContext } from "react";


export function TicketsDisplay() {

    const context = useContext(TicketsStateContext);
    const { setTicketStatus } = context;

    return (
        <DragDropProvider
            onDragEnd={(e) => {
                if (e.canceled) return;

                const {source, target} = e.operation;

                if (!!source && !!target) {
                    setTicketStatus(source.id as string, target.id as TicketStatus)
                }
            }}
        >
            <div className="flex justify-between p-2">
                {Object.values(TicketStatus).map((status) => (
                    <TicketColumn status={status}/>                  
                ))}
            </div>
        </DragDropProvider>
    );
}