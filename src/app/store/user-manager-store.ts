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
    changeStreetInput: string;
    setChangeStreetInput: (changeStreetInput: string) => void;
    changeHouseNrInput: string;
    setChangeHouseNrInput: (changeHouseNrInput: string) => void;
    changeZipInput: string;
    setChangeZipInput: (changeZipInput: string) => void;
    changeCityInput: string;
    setChangeCityInput: (changeCityInput: string) => void;
    changeFirmIDInput: number;
    setChangeFirmIDInput: (changeFirmIDInput: number) => void;
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
    changeStreetInput: "",
    setChangeStreetInput: (changeStreetInput) => set({ changeStreetInput }),
    changeHouseNrInput: "",
    setChangeHouseNrInput: (changeHouseNrInput) => set({ changeHouseNrInput }),
    changeZipInput: "",
    setChangeZipInput: (changeZipInput) => set({ changeZipInput }),
    changeCityInput: "",
    setChangeCityInput: (changeCityInput) => set({ changeCityInput }),
    changeFirmIDInput: 0,
    setChangeFirmIDInput: (changeFirmIDInput) => set({ changeFirmIDInput }),
    changeRoleInput: 0,
    setChangeRoleInput: (changeRoleInput) => set({ changeRoleInput }),
}));
