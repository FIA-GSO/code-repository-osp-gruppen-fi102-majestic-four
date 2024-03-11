import { create } from "zustand";
import { Benutzer, Stand, Vortrag } from "@prisma/client";

interface IBookingManagerStore {
    bookingManagerList: (Vortrag | Stand)[];
    setBookingManagerList: (bookingManagerList: (Vortrag | Stand)[]) => void;
}

export const useBookingManagerStore = create<IBookingManagerStore>()((set) => ({
    bookingManagerList: [],
    setBookingManagerList: (bookingManagerList) => set({ bookingManagerList }),
}));
