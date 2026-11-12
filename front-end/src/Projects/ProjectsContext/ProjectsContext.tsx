import React from "react";
import { ProjectsStateProvider } from "./ProjectsStateProvider";

interface ProjectsContextType {}

export const ProjectsContext = React.createContext<ProjectsContextType | undefined>(undefined);


export function ProjectsProvider({ children }: { children: React.ReactNode }) {
    return (
        <ProjectsContext.Provider value={undefined}>
            <ProjectsStateProvider>
                {children}
            </ProjectsStateProvider>
        </ProjectsContext.Provider>
    )
}