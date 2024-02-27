import { create } from "zustand";

interface ILoginState {
    emailInput: string;
    setEmailInput: (emailInput: string) => void;
    passwordInput: string;
    setPasswordInput: (passwordInput: string) => void;
}

export const useLoginStore = create<ILoginState>()((set) => ({
    emailInput: "",
    setEmailInput: (emailInput) => set({ emailInput }),
    passwordInput: "",
    setPasswordInput: (passwordInput) => set({ passwordInput }),
}));
