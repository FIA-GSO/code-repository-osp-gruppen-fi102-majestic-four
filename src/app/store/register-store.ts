import { create } from "zustand";

interface IRegisterState {
    emailInput: string;
    setEmailInput: (emailInput: string) => void;
    passwordInput: string;
    setPasswordInput: (passwordInput: string) => void;
    confirmPasswordInput: string;
    setConfirmPasswordInput: (confirmPasswordInput: string) => void;
}

export const useRegisterStore = create<IRegisterState>()((set) => ({
    emailInput: "",
    setEmailInput: (emailInput) => set({emailInput}),
    passwordInput: "",
    setPasswordInput: (passwordInput) => set({passwordInput}),
    confirmPasswordInput: "",
    setConfirmPasswordInput: (confirmPasswordInput) => set({confirmPasswordInput})
}));
