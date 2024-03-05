import React, { useEffect } from "react";
import { useUserManagerStore } from "@/app/store/user-manager-store";
import { Benutzer } from "@prisma/client";
import UserManagerEntry from "./UserManagerEntry";
import UserManagerModal from "./UserManagerModal";

interface IUserManager {
    className?: string;
}

const UserManager: React.FC<IUserManager> = ({ className }) => {
    const { userList, setUserList } = useUserManagerStore();

    useEffect(() => {
        setUserList([
            {
                id: 1,
                email: "test@gmail.com",
                passwort: "abc",
                vorname: "hans",
                nachname: "peter",
                strasse: "teststraße",
                hausnummer: "10",
                postleitzahl: "123456",
                ort: "köln",
                firmaId: 1,
                rolleId: 1,
            },
            {
                id: 2,
                email: "test@gmail.com",
                passwort: "abc",
                vorname: "",
                nachname: "",
                strasse: "",
                hausnummer: "",
                postleitzahl: "",
                ort: "",
                firmaId: 1,
                rolleId: 1,
            },
            {
                id: 2,
                email: "test@gmail.com",
                passwort: "abc",
                vorname: "",
                nachname: "",
                strasse: "",
                hausnummer: "",
                postleitzahl: "",
                ort: "",
                firmaId: 1,
                rolleId: 1,
            },
            {
                id: 2,
                email: "test@gmail.com",
                passwort: "abc",
                vorname: "",
                nachname: "",
                strasse: "",
                hausnummer: "",
                postleitzahl: "",
                ort: "",
                firmaId: 1,
                rolleId: 1,
            },
        ]);
    }, []);

    return (
        <div
            className={`${className || ""} relative h-full w-full border border-warning rounded-xl bg-base-100 p-4`}
        >
            <UserManagerModal />

            {/* <button className=" absolute top-0 right-0 m-4 btn btn-primary">
                Neuer Benutzer
            </button> */}
            <h2 className=" text-4xl font-extrabold py-2 text-warning">
                Benutzer
            </h2>
            {userList.length > 0 ? (
                <ul className="flex flex-col h-60 gap-1 overflow-y-auto">
                    {userList.map((element, index) => (
                        <UserManagerEntry
                            className=" w-full"
                            key={index}
                            user={element}
                        />
                    ))}
                </ul>
            ) : (
                <div className=" text-center w-full text-2xl font-bold italic p-2">
                    Keine Anträge vorhanden
                </div>
            )}
        </div>
    );
};

export default UserManager;
