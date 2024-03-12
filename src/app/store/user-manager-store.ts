import { create } from "zustand";
import { Benutzer } from "@prisma/client";

interface IUserManagerStore {
    userList: Benutzer[];
    setUserList: (userList: Benutzer[]) => void;

    modalTitle: string;
    setModalTitle: (modalTitle: string) => void;

    changeEmailInput: string;
    setChangeEmailInput: (changeEmailInput: string) => void;
    changeFirstNameInput: string;
    setChangeFirstNameInput: (changeFirstNameInput: string) => void;
    changeLastNameInput: string;
    setChangeLastNameInput: (changeLastNameInput: string) => void;
    changeFirmaInput: string;
    setChangeFirmaInput: (changeFirmaInput: string) => void;
    changeRoleInput: number;
    setChangeRoleInput: (changeRoleInput: number) => void;
}

export const useUserManagerStore = create<IUserManagerStore>()((set) => ({
    userList: [],
    setUserList: (userList) => set({ userList }),
    modalTitle: "Benutzerdaten ändern",
    setModalTitle: (modalTitle) => set({ modalTitle }),
    changeEmailInput: "",
    setChangeEmailInput: (changeEmailInput) => set({ changeEmailInput }),
    changeFirstNameInput: "",
    setChangeFirstNameInput: (changeFirstNameInput) =>
        set({ changeFirstNameInput }),
    changeLastNameInput: "",
    setChangeLastNameInput: (changeLastNameInput) =>
        set({ changeLastNameInput }),
    changeFirmaInput: "",
    setChangeFirmaInput: (changeFirmaInput) => set({ changeFirmaInput }),
    changeRoleInput: 0,
    setChangeRoleInput: (changeRoleInput) => set({ changeRoleInput }),
}));
