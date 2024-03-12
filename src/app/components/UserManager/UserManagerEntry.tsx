import { useUserManagerStore } from "@/app/store/user-manager-store";
import { Benutzer } from "@prisma/client";

interface IUserManagerEntry {
    className?: string;
    user: Benutzer;
}
const UserManagerEntry: React.FC<IUserManagerEntry> = ({ className, user }) => {
    const {
        setModalTitle,
        setChangeEmailInput,
        setChangeFirstNameInput,
        setChangeLastNameInput,
        setChangeFirmaInput,
        setChangeRoleInput,
    } = useUserManagerStore();

    function setupModalValues(
        modalTitle: string,
        email: string,
        vorname: string,
        nachname: string,
        firma: string,
        rolleId: number
    ) {
        setModalTitle(modalTitle);
        setChangeEmailInput(email);
        setChangeFirstNameInput(vorname);
        setChangeLastNameInput(nachname);
        setChangeFirmaInput(firma);
        setChangeRoleInput(rolleId);
    }
    return (
        <li className={`${className || ""}`}>
            <details className="collapse border border-neutral-content collapse-arrow my-2 rounded-xl bg-base-100">
                <summary className="collapse-title text-xl font-medium">
                    <div>
                        <span className=" text-warning font-bold">{`ID: ${user.id}`}</span>
                        <span className=" font-bold"> | </span>
                        <span className=" font-bold">{user.email}</span>

                        {user.vorname && user.nachname && (
                            <span className=" capitalize font-bold">
                                {" - "}
                                {user.nachname}, {user.vorname}
                            </span>
                        )}
                        <span className=" font-bold"> | </span>
                        <button
                            className="btn btn-primary ml-1 btn-sm"
                            onClick={() => {
                                setupModalValues(
                                    user.nachname && user.vorname
                                        ? `Benutzerdaten von ${user.nachname.charAt(0).toUpperCase() + user.nachname.slice(1)}, ${user.vorname.charAt(0).toUpperCase() + user.vorname.slice(1)} ändern`
                                        : `Benutzerdaten von ${user.email} ändern`,
                                    user.email,
                                    user.vorname || "",
                                    user.nachname || "",
                                    user.firma || "",
                                    user.rolleId || 0
                                );
                                (
                                    document?.getElementById(
                                        "change-user-data"
                                    ) as HTMLDialogElement
                                ).showModal();
                            }}
                        >
                            Anpassen
                        </button>
                        <button className="btn btn-error btn-sm ml-2">
                            Löschen
                        </button>
                    </div>
                </summary>
                <div className="collapse-content relative">
                    <div className="flex gap-x-8 flex-wrap w-4/5 text-warning text-lg font-bold text-wrap">
                        {user.email && (
                            <span>
                                Email:{" "}
                                <span className="text-white">{user.email}</span>
                            </span>
                        )}
                        {user.passwort && (
                            <span>
                                Passwort:{" "}
                                <span className="text-white">
                                    {user.passwort}
                                </span>
                            </span>
                        )}
                        {user.vorname && (
                            <span>
                                Vorname:{" "}
                                <span className="text-white">
                                    {user.vorname}
                                </span>
                            </span>
                        )}
                        {user.nachname && (
                            <span>
                                Nachname:{" "}
                                <span className="text-white">
                                    {user.nachname}
                                </span>
                            </span>
                        )}

                        {user.firma && (
                            <span>
                                Firma:{" "}
                                <span className="text-white">{user.firma}</span>
                            </span>
                        )}
                        <span>
                            Rolle:{" "}
                            <span className="text-white">{user.rolleId}</span>
                        </span>
                    </div>
                </div>
            </details>
        </li>
    );
};

export default UserManagerEntry;
