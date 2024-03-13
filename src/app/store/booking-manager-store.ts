import { create } from "zustand";
import { getAllBookings } from "../actions";

export type BookingsType = Awaited<ReturnType<typeof getAllBookings>>;

interface IBookingManagerStore {
    bookingManagerList: BookingsType;
    setBookingManagerList: (bookingManagerList: BookingsType) => void;
    updatedBookings: boolean;
    setUpdatedBookings: (updatedBookings: boolean) => void;
}

export const useBookingManagerStore = create<IBookingManagerStore>()((set) => ({
    bookingManagerList: [],
    setBookingManagerList: (bookingManagerList) => set({ bookingManagerList }),
    updatedBookings: false,
    setUpdatedBookings: (updatedBookings) => set({ updatedBookings }),
}));
