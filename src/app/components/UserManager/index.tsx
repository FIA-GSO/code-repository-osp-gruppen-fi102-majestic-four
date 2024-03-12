import React, { useEffect } from "react";
import { useUserManagerStore } from "@/app/store/user-manager-store";
import UserManagerEntry from "./UserManagerEntry";
import UserManagerModal from "./UserManagerModal";
import Link from "next/link";
import { getAllUsers } from "@/app/actions";

interface IUserManager {
    className?: string;
    fullscreen?: boolean;
}

const UserManager: React.FC<IUserManager> = ({ className, fullscreen }) => {
    const { userList, setUserList } = useUserManagerStore();

    const fetchUsers = async () => {
        const users = await getAllUsers();

        if (users === null || "error" in users) return;

        setUserList(users);
    };
    useEffect(() => {
        fetchUsers();
        // setUserList([
        //     {
        //         id: 1,
        //         email: "test@gmail.com",
        //         passwort: "abc",
        //         vorname: "hans",
        //         nachname: "peter",
        //         strasse: "teststraße",
        //         hausnummer: "10",
        //         postleitzahl: "123456",
        //         ort: "köln",
        //         firmaId: 1,
        //         rolleId: 1,
        //     },
        //     {
        //         id: 2,
        //         email: "test@gmail.com",
        //         passwort: "abc",
        //         vorname: "",
        //         nachname: "",
        //         strasse: "",
        //         hausnummer: "",
        //         postleitzahl: "",
        //         ort: "",
        //         firmaId: 1,
        //         rolleId: 1,
        //     },
        //     {
        //         id: 2,
        //         email: "test@gmail.com",
        //         passwort: "abc",
        //         vorname: "",
        //         nachname: "",
        //         strasse: "",
        //         hausnummer: "",
        //         postleitzahl: "",
        //         ort: "",
        //         firmaId: 1,
        //         rolleId: 1,
        //     },
        //     {
        //         id: 2,
        //         email: "test@gmail.com",
        //         passwort: "abc",
        //         vorname: "",
        //         nachname: "",
        //         strasse: "",
        //         hausnummer: "",
        //         postleitzahl: "",
        //         ort: "",
        //         firmaId: 1,
        //         rolleId: 1,
        //     },
        // ]);
    }, []);

    return (
        <div
            className={`${className || ""} relative border border-warning rounded-xl px-4 flex-1 flex flex-col overflow-auto h-full bg-warning/60`}
        >
            <UserManagerModal />

            {/* <button className=" absolute top-0 right-0 m-4 btn btn-primary">
                Neuer Benutzer
            </button> */}
            <h2 className="px-4 text-2xl font-extrabold py-2 text-warning flex items-center sticky top-2 left-0 right-0 bg-base-300 z-20 rounded-xl my-2">
                Benutzer{" "}
                <span className="text-warning/20 italic ">
                    ({userList.length}{" "}
                    {userList.length === 1 ? "Eintrag" : "Einträge"})
                </span>
                {!fullscreen && (
                    <Link
                        href={"/admin/user-manager"}
                        className="ml-auto btn btn-warning opacity-30 hover:opacity-100 z-40"
                    >
                        Volle Ansicht
                    </Link>
                )}
            </h2>
            {userList.length > 0 ? (
                <ul className={`flex flex-col gap-1 min-h-fit`}>
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
