import { create } from "zustand";

export type TDates = "" | "26.01.2024" | "27.01.2024";

interface IBookingState {
    //General
    firmInput: string;
    setFirmInput: (firmInput: string) => void;
    emailInput: string;
    setEmailInput: (emailInput: string) => void;
    contactNameInput: string;
    setContactNameInput: (contactNameInput: string) => void;
    phoneInput: string;
    setPhoneInput: (phoneInput: string) => void;

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
    standOpen: boolean;
    setStandOpen: (standOpen: boolean) => void;

    //Talk
    topicInput: string;
    setTopicInput: (topicInput: string) => void;
    talkLengthInput: number;
    setTalkLengthInput: (talkLengthInput: number) => void;
    dateInput: TDates;
    setDateInput: (dateInput: TDates) => void;
    startTimeInput: string;
    setStartTimeInput: (startTimeInput: string) => void;
    talkOpen: boolean;
    setTalkOpen: (talkOpen: boolean) => void;
}

export const useBookingStore = create<IBookingState>()((set) => ({
    //General
    firmInput: "",
    setFirmInput: (firmInput) => set({ firmInput }),
    emailInput: "",
    setEmailInput: (emailInput) => set({ emailInput }),
    contactNameInput: "",
    setContactNameInput: (contactNameInput) => set({ contactNameInput }),
    phoneInput: "",
    setPhoneInput: (phoneInput) => set({ phoneInput }),

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
    standOpen: false,
    setStandOpen: (standOpen) => set({ standOpen }),

    //Talk
    topicInput: "",
    setTopicInput: (topicInput) => set({ topicInput }),
    talkLengthInput: 15,
    setTalkLengthInput: (talkLengthInput) => set({ talkLengthInput }),
    dateInput: "",
    setDateInput: (dateInput) => set({ dateInput }),
    startTimeInput: "",
    setStartTimeInput: (startTimeInput) => set({ startTimeInput }),
    talkOpen: false,
    setTalkOpen: (talkOpen) => set({ talkOpen }),
}));
