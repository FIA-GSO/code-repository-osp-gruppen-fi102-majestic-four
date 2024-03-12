import { create } from "zustand";
import { Stand, Vortrag, Prisma } from "@prisma/client";

export type StandWithStatus = Prisma.StandGetPayload<{
    include: { status: true };
}>;
export type VortragWithStatus = Prisma.VortragGetPayload<{
    include: { status: true };
}>;

interface IBookingManagerStore {
    bookingManagerList: (VortragWithStatus | StandWithStatus)[];
    setBookingManagerList: (
        bookingManagerList: (VortragWithStatus | StandWithStatus)[]
    ) => void;
    updatedBookings: boolean;
    setUpdatedBookings: (updatedBookings: boolean) => void;
}

export const useBookingManagerStore = create<IBookingManagerStore>()((set) => ({
    bookingManagerList: [],
    setBookingManagerList: (bookingManagerList) => set({ bookingManagerList }),
    updatedBookings: false,
    setUpdatedBookings: (updatedBookings) => set({ updatedBookings }),
}));
