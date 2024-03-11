import { create } from "zustand";
import { Benutzer, Stand, Vortrag } from "@prisma/client";

interface ICancelsManagerStore {
    cancelsManagerList: (Vortrag | Stand)[];
    setCancelsManagerList: (cancelsManagerList: (Vortrag | Stand)[]) => void;
}

export const useCancelsManagerStore = create<ICancelsManagerStore>()((set) => ({
    cancelsManagerList: [],
    setCancelsManagerList: (cancelsManagerList) => set({ cancelsManagerList }),
}));
