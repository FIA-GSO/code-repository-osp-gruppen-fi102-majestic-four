import { create } from "zustand";

export type TChangeState = "None" | "Enter" | "Wait";

interface IProfileState {
    email: string;
    setEmail: (email: string) => void;
    company: string;
    setCompany: (company: string) => void;
    contactPerson: string;
    setContactPerson: (contactPerson: string) => void;
    telefon: number;
    setTelefon: (telefon: number) => void;
    changeEmail: TChangeState;
    setChangeEmail: (changeEmail: TChangeState) => void;
    changePassword: TChangeState;
    setChangePassword: (changePassword: TChangeState) => void;
    password: string;
    setPassword: (password: string) => void;
    confirmPassword: string;
    setConfirmPassword: (password: string) => void;
    code: string;
    setCode: (code: string) => void;
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
    changePassword: "None",
    setChangePassword: (changePassword) => set({ changePassword }),
    password: "",
    setPassword: (password) => set({ password }),
    confirmPassword: "",
    setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
    code: "000000",
    setCode: (code) => set({ code }),
}));
