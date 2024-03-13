import { create } from "zustand";

interface IGeneralState {
    hasNotifications: boolean;
    setHasNotifications: (hasNotifications: boolean) => void;
    notifications: Array<Object>;
    setNotifications: (notification: Array<Object>) => void;
}

export const useGeneralStore = create<IGeneralState>()((set) => ({
    hasNotifications: false,
    setHasNotifications: (hasNotifications) => set({ hasNotifications }),
    notifications: [],
    setNotifications: (notifications) => set({ notifications }),
}));
