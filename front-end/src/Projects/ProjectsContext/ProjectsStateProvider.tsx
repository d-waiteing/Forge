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
    const [projectsState, setProjectsState] = useState<ProjectsState>({ projects: [] });

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