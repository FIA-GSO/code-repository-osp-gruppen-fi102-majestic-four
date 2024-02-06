import { create } from "zustand";

interface IGeneralState {
    projects: number;
    setProjects: (projects: number) => void;
}

export const useGeneralStore = create<IGeneralState>()((set) => ({
    projects: 0,
    setProjects: (projects) => set({ projects }),
}));
