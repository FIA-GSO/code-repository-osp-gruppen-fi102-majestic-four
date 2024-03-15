import { create } from "zustand";

export type TChangeState = "None" | "Enter" | "Wait";
export type TSaveState = "Saved" | "Error" | "Default";

interface IProfileState {
    email: string;
    setEmail: (email: string) => void;
    company: string;
    setCompany: (company: string) => void;
    contactPerson: string;
    setContactPerson: (contactPerson: string) => void;
    telefon: string;
    setTelefon: (telefon: string) => void;
    changeEmail: TChangeState;
    setChangeEmail: (changeEmail: TChangeState) => void;
    changePassword: TChangeState;
    setChangePassword: (changePassword: TChangeState) => void;
    password: string;
    setPassword: (password: string) => void;
    oldPassword: string;
    setOldPassword: (oldPassword: string) => void;
    confirmPassword: string;
    setConfirmPassword: (password: string) => void;
    code: string;
    setCode: (code: string) => void;
    saveState: TSaveState;
    setSaveState: (saveState: TSaveState) => void;
    firstStep: boolean;
    setFirstStep: (firstStep: boolean) => void;
    deleteInput: string;
    setDeleteInput: (deleteInput: string) => void;
}

export const useProfileStore = create<IProfileState>()((set) => ({
    email: "",
    setEmail: (email) => set({ email }),
    company: "",
    setCompany: (company) => set({ company }),
    contactPerson: "",
    setContactPerson: (contactPerson) => set({ contactPerson }),
    telefon: "",
    setTelefon: (telefon) => set({ telefon }),
    changeEmail: "None",
    setChangeEmail: (changeEmail) => set({ changeEmail }),
    changePassword: "None",
    setChangePassword: (changePassword) => set({ changePassword }),
    password: "",
    setPassword: (password) => set({ password }),
    oldPassword: "",
    setOldPassword: (oldPassword) => set({ oldPassword }),
    confirmPassword: "",
    setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
    code: "000000",
    setCode: (code) => set({ code }),
    saveState: "Default",
    setSaveState: (saveState) => set({ saveState }),
    firstStep: true,
    setFirstStep: (firstStep) => set({ firstStep }),
    deleteInput: "",
    setDeleteInput: (deleteInput) => set({ deleteInput }),
}));
