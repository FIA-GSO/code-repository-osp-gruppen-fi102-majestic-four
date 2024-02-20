import { create } from "zustand";

export type TLoginState = "guest" | "user" | "admin" | "helper";

interface IGeneralState {
    loginState: TLoginState;
    setLoginState: (loginState: TLoginState) => void;
}

export const useGeneralStore = create<IGeneralState>()((set) => ({
    loginState: "guest",
    setLoginState: (loginState) => set({ loginState }),
}));
