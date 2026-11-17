import { createContext, useCallback, useState } from "react";

interface ProjectsStateContext {
    projectsState: ProjectsState;
    addProject: (project: Project) => void;
    deleteProject: (projectId: string) => void;
    updateProject: (updatedProject: Project) => void;
}

interface ProjectsState {
    projects: Project[];
}

export const ProjectStatus = {
    NEW: 'NEW',
    IN_PROGRESS: 'IN PROGRESS',
    COMPLETE: 'COMPLETE',
} as const;

export type ProjectStatus = typeof ProjectStatus[keyof typeof ProjectStatus]

export interface Project {
    id: string;
    name: string;
    description: string;
    status: ProjectStatus;
    dueDate?: string;
}

export const ProjectsStateContext = createContext<ProjectsStateContext>({} as ProjectsStateContext);

export function ProjectsStateProvider({ children }: { children: React.ReactNode }) {
    const [projectsState, setProjectsState] = useState<ProjectsState>({
    projects: [
        {
            id: crypto.randomUUID(),
            name: "Forge",
            description: "Internal project management application",
            status: ProjectStatus.IN_PROGRESS   ,
            dueDate: "2026-12-01"
        },
        {
            id: crypto.randomUUID(),
            name: "Customer Portal",
            description: "Build a customer-facing account portal",
            status: ProjectStatus.NEW,
            dueDate: "2026-12-15"
        },
        {
            id: crypto.randomUUID(),
            name: "API Modernization",
            description: "Refactor existing APIs and improve performance",
            status: ProjectStatus.COMPLETE,
            dueDate: "2026-11-10"
        },
        {
            id: crypto.randomUUID(),
            name: "Reporting Dashboard",
            description: "Create reporting and analytics dashboards",
            status: ProjectStatus.IN_PROGRESS,
            dueDate: "2026-12-20"
        },
        {
            id: crypto.randomUUID(),
            name: "Authentication",
            description: "Implement user authentication and authorization",
            status: ProjectStatus.NEW
        }
    ]
});

    const addProject = useCallback((project: Project) => {
        setProjectsState((prevProjects) => ({ projects: [...prevProjects.projects, project] }));
    }, []);
    
    const deleteProject = useCallback((projectId: string) => {
        setProjectsState((prevProjects) => ({ projects: prevProjects.projects.filter((p) => p.id !== projectId) }));
    }, []);

    const updateProject = useCallback((updatedProject: Project) => {
        setProjectsState((prevProjects) => ({
            projects: prevProjects.projects.map((project) =>  project.id === updatedProject.id ? updatedProject : project)
        }));
    }, []);

    return (
        <ProjectsStateContext.Provider value={{ projectsState, addProject, deleteProject, updateProject }}>
            {children}
        </ProjectsStateContext.Provider>
    )
}