import { create } from "zustand";
import { TDates } from "./booking-store";

type TGeneralBooking = {
    firm: string;
    contact: string;
    email: string;
    phone?: string;
};
export type TTalkBooking = TGeneralBooking & {
    topic: string;
    talkLength: number;
    dateInput: TDates;
    startTime: string;
};
export type TStandBooking = TGeneralBooking & {
    annotation: string;
    chairs: number;
    tables: number;
    dayOne: boolean;
    dayTwo: boolean;
};

interface IBookingListState {
    //Später Prisma Type importieren
    bookingsList: (TTalkBooking | TStandBooking)[];
    setBookingsList: (bookingsList: (TTalkBooking | TStandBooking)[]) => void;
}

export const useBookingListStore = create<IBookingListState>()((set) => ({
    bookingsList: [],
    setBookingsList: (bookingsList) => set({ bookingsList }),
}));
