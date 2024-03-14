import { create } from "zustand";

type NotificationPopup =
    | { notificationType: "success" | "error"; message: string }
    | undefined;

type Notification = {
    id: number;
    benutzerId: number;
    nachricht: string;
};

interface IGeneralState {
    hasNotifications: boolean;
    setHasNotifications: (hasNotifications: boolean) => void;
    notifications: Notification[];
    setNotifications: (notification: Notification[]) => void;
    lastNotification: NotificationPopup;
    setLastNotification: (lastNotification: NotificationPopup) => void;
}

export const useGeneralStore = create<IGeneralState>()((set) => ({
    hasNotifications: false,
    setHasNotifications: (hasNotifications) => set({ hasNotifications }),
    notifications: [],
    setNotifications: (notifications) => set({ notifications }),
    lastNotification: undefined,
    setLastNotification: (lastNotification) => set({ lastNotification }),
}));
