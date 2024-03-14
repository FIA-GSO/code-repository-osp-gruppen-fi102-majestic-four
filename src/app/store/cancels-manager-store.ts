import { create } from "zustand";

import { getCanceledBookings } from "../actions";

export type BookingCancelType = Awaited<ReturnType<typeof getCanceledBookings>>;

interface ICancelsManagerStore {
    cancelsManagerList: BookingCancelType;
    setCancelsManagerList: (cancelsManagerList: BookingCancelType) => void;
}

export const useCancelsManagerStore = create<ICancelsManagerStore>()((set) => ({
    cancelsManagerList: [],
    setCancelsManagerList: (cancelsManagerList) => set({ cancelsManagerList }),
}));
