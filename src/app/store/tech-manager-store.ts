import { create } from "zustand";
import { getBookingsForTech } from "../actions";
import { TDates } from "./booking-store";

export type BookingsType = Awaited<ReturnType<typeof getBookingsForTech>>;

interface ITechManagerStore {
    dateInput: TDates;
    setDateInput: (dateInput: TDates) => void;
    bookingsList: BookingsType;
    setBookingsList: (bookingsList: BookingsType) => void;
    updatedBookings: boolean;
    setUpdatedBookings: (updatedBookings: boolean) => void;
}

export const useTechManagerStore = create<ITechManagerStore>()((set) => ({
    dateInput: "26.01.2024",
    setDateInput: (dateInput) => set({ dateInput }),
    bookingsList: [],
    setBookingsList: (bookingsList) => set({ bookingsList }),
    updatedBookings: false,
    setUpdatedBookings: (updatedBookings) => set({ updatedBookings }),
}));
