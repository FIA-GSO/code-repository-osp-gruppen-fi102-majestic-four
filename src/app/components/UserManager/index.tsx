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
    const { userList, setUserList, updatedUserList, setUpdatedUserlist } =
        useUserManagerStore();

    const fetchUsers = async () => {
        const users = await getAllUsers();

        if (users === null || "error" in users) return;

        setUserList(users);
    };
    useEffect(() => {
        fetchUsers().finally(() => setUpdatedUserlist(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updatedUserList]);

    return (
        <div
            className={`${className || ""} relative border border-neutral rounded-xl px-4 flex-1 flex flex-col overflow-auto h-full bg-base-200 text-base-content`}
        >
            <UserManagerModal />

            {/* <button className=" absolute top-0 right-0 m-4 btn btn-primary">
                Neuer Benutzer
            </button> */}
            <h2 className="px-4 text-2xl font-extrabold py-2 flex items-center sticky top-2 left-0 right-0 bg-error text-error-content z-20 rounded-xl my-2">
                Benutzer{" "}
                <span className="text-error-content/40 italic ">
                    ({userList.length}{" "}
                    {userList.length === 1 ? "Eintrag" : "Einträge"})
                </span>
                {!fullscreen && (
                    <Link
                        href={"/admin/user-manager"}
                        className="ml-auto btn btn-neutral opacity-30 hover:opacity-100 z-40"
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
