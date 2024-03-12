import { create } from "zustand";
import { Benutzer, Stand, Vortrag } from "@prisma/client";
import { StandWithStatus, VortragWithStatus } from "./booking-manager-store";

interface ICancelsManagerStore {
    cancelsManagerList: (VortragWithStatus | StandWithStatus)[];
    setCancelsManagerList: (
        cancelsManagerList: (VortragWithStatus | StandWithStatus)[]
    ) => void;
}

export const useCancelsManagerStore = create<ICancelsManagerStore>()((set) => ({
    cancelsManagerList: [],
    setCancelsManagerList: (cancelsManagerList) => set({ cancelsManagerList }),
}));
