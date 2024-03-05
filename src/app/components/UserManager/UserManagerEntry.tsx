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
        setChangeStreetInput,
        setChangeHouseNrInput,
        setChangeZipInput,
        setChangeCityInput,
        setChangeFirmIDInput,
        setChangeRoleInput,
    } = useUserManagerStore();

    function setupModalValues(
        modalTitle: string,
        email: string,
        vorname: string,
        nachname: string,
        strasse: string,
        hausnummer: string,
        postleitzahl: string,
        ort: string,
        firmaId: number,
        rolleId: number
    ) {
        setModalTitle(modalTitle);
        setChangeEmailInput(email);
        setChangeFirstNameInput(vorname);
        setChangeLastNameInput(nachname);
        setChangeStreetInput(strasse);
        setChangeHouseNrInput(hausnummer);
        setChangeZipInput(postleitzahl);
        setChangeCityInput(ort);
        setChangeFirmIDInput(firmaId);
        setChangeRoleInput(rolleId);
    }
    return (
        <li className={`${className || ""}`}>
            <details className="collapse border border-neutral-content collapse-arrow my-2 rounded-xl bg-base-300">
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
                                    user.strasse || "",
                                    user.hausnummer || "",
                                    user.postleitzahl || "",
                                    user.ort || "",
                                    user.firmaId || 0,
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
                        <span>
                            Id: <span className="text-white">{user.id}</span>
                        </span>
                        <span>
                            Email:{" "}
                            <span className="text-white">{user.email}</span>
                        </span>
                        <span>
                            Passwort:{" "}
                            <span className="text-white">{user.passwort}</span>
                        </span>
                        <span>
                            Vorname:{" "}
                            <span className="text-white">{user.vorname}</span>
                        </span>
                        <span>
                            Nachname:{" "}
                            <span className="text-white">{user.nachname}</span>
                        </span>
                        <span>
                            Straße:{" "}
                            <span className="text-white">{user.strasse}</span>
                        </span>
                        <span>
                            Haus Nr.:{" "}
                            <span className="text-white">
                                {user.hausnummer}
                            </span>
                        </span>
                        <span>
                            Postleitzahl:{" "}
                            <span className="text-white">
                                {user.postleitzahl}
                            </span>
                        </span>
                        <span>
                            Ort: <span className="text-white">{user.ort}</span>
                        </span>
                        <span>
                            Firma:{" "}
                            <span className="text-white">{user.firmaId}</span>
                        </span>
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
