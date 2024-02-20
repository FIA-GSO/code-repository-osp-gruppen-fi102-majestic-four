import { create } from "zustand";

export type TEmailChangeState = "None" | "Enter" | "Wait";

interface IProfileState {
    email: string;
    setEmail: (email: string) => void;
    company: string;
    setCompany: (company: string) => void;
    contactPerson: string;
    setContactPerson: (contactPerson: string) => void;
    telefon: number;
    setTelefon: (telefon: number) => void;
    changeEmail: TEmailChangeState;
    setChangeEmail: (changeEmail: TEmailChangeState) => void;
}

export const useProfileStore = create<IProfileState>()((set) => ({
    email: "",
    setEmail: (email) => set({ email }),
    company: "",
    setCompany: (company) => set({ company }),
    contactPerson: "",
    setContactPerson: (contactPerson) => set({ contactPerson }),
    telefon: 0,
    setTelefon: (telefon) => set({ telefon }),
    changeEmail: "None",
    setChangeEmail: (changeEmail) => set({ changeEmail }),
}));
