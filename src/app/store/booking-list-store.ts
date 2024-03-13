import { create } from "zustand";
import { getUserBookings } from "../actions";
import { TDates } from "./booking-store";
import { TModal } from "../components/BookingsList/BookingListModal";

export type BookingsType = Awaited<ReturnType<typeof getUserBookings>>;

interface IBookingListState {
    bookingsList: BookingsType;
    setBookingsList: (bookingsList: BookingsType) => void;
    updatedBookings: boolean;
    setUpdatedBookings: (updatedBookings: boolean) => void;

    modalTitle: string;
    setModalTitle: (modalTitle: string) => void;
    modalType: TModal;
    setModalType: (modalType: TModal) => void;
    bookingId: number;
    setBookingId: (bookingId: number) => void;

    //Stand
    annotationInput: string;
    setAnnotationInput: (annotationInput: string) => void;
    chairsInput: number;
    setChairsInput: (chairsInput: number) => void;
    tablesInput: number;
    setTablesInput: (tablesInput: number) => void;
    dayOneChecked: boolean;
    setDayOneChecked: (dayOneChecked: boolean) => void;
    dayTwoChecked: boolean;
    setDayTwoChecked: (dayTwoChecked: boolean) => void;

    //talk
    topicInput: string;
    setTopicInput: (topicChangeInput: string) => void;
    talkLengthInput: number;
    setTalkLengthInput: (talkLengthInput: number) => void;
    dateInput: TDates;
    setDateInput: (dateInput: TDates) => void;
    startTimeInput: string;
    setStartTimeInput: (startTimeInput: string) => void;
}

export const useBookingListStore = create<IBookingListState>()((set) => ({
    bookingsList: [],
    setBookingsList: (bookingsList) => set({ bookingsList }),
    updatedBookings: false,
    setUpdatedBookings: (updatedBookings) => set({ updatedBookings }),

    modalTitle: "",
    setModalTitle: (modalTitle) => set({ modalTitle }),
    bookingId: 0,
    setBookingId: (bookingId) => set({ bookingId }),
    modalType: "talk",
    setModalType: (modalType) => set({ modalType }),

    //Stand
    annotationInput: "",
    setAnnotationInput: (annotationInput) => set({ annotationInput }),
    chairsInput: 0,
    setChairsInput: (chairsInput) => set({ chairsInput }),
    tablesInput: 0,
    setTablesInput: (tablesInput) => set({ tablesInput }),
    dayOneChecked: false,
    setDayOneChecked: (dayOneChecked) => set({ dayOneChecked }),
    dayTwoChecked: false,
    setDayTwoChecked: (dayTwoChecked) => set({ dayTwoChecked }),

    //Talk
    topicInput: "",
    setTopicInput: (topicInput) => set({ topicInput }),
    talkLengthInput: 15,
    setTalkLengthInput: (talkLengthInput) => set({ talkLengthInput }),
    dateInput: "",
    setDateInput: (dateInput) => set({ dateInput }),
    startTimeInput: "",
    setStartTimeInput: (startTimeInput) => set({ startTimeInput }),
}));
