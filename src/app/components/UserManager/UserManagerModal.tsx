import React from "react";
import { useUserManagerStore } from "@/app/store/user-manager-store";
import { updateUser } from "@/app/actions";

interface IUserManagerModal {
    className?: string;
}

const UserManagerModal: React.FC<IUserManagerModal> = ({ className }) => {
    const {
        modalTitle,
        setModalTitle,
        userId,
        setUserId,
        changeEmailInput,
        setChangeEmailInput,
        changeFirstNameInput,
        setChangeFirstNameInput,
        changeLastNameInput,
        setChangeLastNameInput,
        changeFirmaInput,
        setChangeFirmaInput,
        changeRoleInput,
        setChangeRoleInput,
    } = useUserManagerStore();

    function resetInputValues() {
        setModalTitle("Benutzerdaten ändern");
        setUserId(0);
        setChangeEmailInput("");
        setChangeFirstNameInput("");
        setChangeLastNameInput("");
        setChangeFirmaInput("");
        setChangeRoleInput(0);
    }
    return (
        <dialog
            id="change-user-data"
            className={`${className || ""} modal text-base-content`}
        >
            <div className="modal-box w-11/12 max-w-5xl border border-neutral">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button
                        className="btn btn-sm btn-circle btn-error absolute right-2 top-2"
                        onClick={() => resetInputValues()}
                    >
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-2xl text-primary">
                    {modalTitle}
                </h3>
                <div className="py-4">
                    <div className=" flex flex-wrap gap-x-5">
                        <div className="flex flex-col ">
                            <label className="px-1 py-2 text-primary text-sm font-semibold">
                                Neue Email
                            </label>
                            <input
                                className="input input-primary max-w-[200px]"
                                type="text"
                                value={changeEmailInput}
                                onChange={(ev) =>
                                    setChangeEmailInput(ev.target.value)
                                }
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label className="px-1 py-2 text-primary text-sm font-semibold">
                                Neuer Vorname
                            </label>
                            <input
                                className="input input-primary max-w-[144px]"
                                type="text"
                                value={changeFirstNameInput}
                                onChange={(ev) =>
                                    setChangeFirstNameInput(ev.target.value)
                                }
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label className="px-1 py-2 text-primary text-sm font-semibold">
                                Neuer Nachname
                            </label>
                            <input
                                className="input input-primary max-w-[144px]"
                                type="text"
                                value={changeLastNameInput}
                                onChange={(ev) =>
                                    setChangeLastNameInput(ev.target.value)
                                }
                            />
                        </div>

                        <div className="flex flex-col ">
                            <label className="px-1 py-2 text-primary text-sm font-semibold">
                                Neue Firma
                            </label>
                            <input
                                className="input input-primary max-w-[144px]"
                                placeholder="Firmenname"
                                value={changeFirmaInput}
                                onChange={(ev) =>
                                    setChangeFirmaInput(ev.target.value)
                                }
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label className="px-1 py-2 text-primary text-sm font-semibold">
                                Neue Rolle
                            </label>
                            <select
                                className="select select-primary"
                                value={changeRoleInput}
                                onChange={(ev) =>
                                    setChangeRoleInput(
                                        parseInt(ev.target.value)
                                    )
                                }
                            >
                                <option disabled value="">
                                    Rolle auswählen
                                </option>
                                <option value="1">Admin</option>
                                <option value="2">User</option>
                                <option value="3">Techniker</option>
                            </select>
                        </div>
                        <div className="flex flex-col ">
                            <label className="px-1 py-2 text-primary text-sm font-semibold">
                                Neues Passwort
                            </label>
                            <button
                                className="btn btn-primary max-w-[144px]"
                                onClick={(ev) =>
                                    console.log("generate temp password")
                                }
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 italic text-accent text-sm">
                        Leere Felder werden ignoriert
                    </div>
                    <button
                        className="btn btn-success mt-4"
                        onClick={() => {
                            const data: {
                                email?: string;
                                vorname?: string;
                                nachname?: string;
                                firma?: string;
                                rolleId?: number;
                            } = {};
                            if (changeEmailInput) {
                                data.email = changeEmailInput;
                            }
                            if (changeFirstNameInput) {
                                data.vorname = changeFirstNameInput;
                            }
                            if (changeLastNameInput) {
                                data.nachname = changeLastNameInput;
                            }
                            if (changeFirmaInput) {
                                data.firma = changeFirmaInput;
                            }
                            if (changeRoleInput) {
                                data.rolleId = changeRoleInput;
                            }
                            updateUser(userId, data).then((user) => {
                                if (user) {
                                    //executed if success
                                    setModalTitle(
                                        user.nachname && user.vorname
                                            ? `Benutzerdaten von ${user.nachname.charAt(0).toUpperCase() + user.nachname.slice(1)}, ${user.vorname.charAt(0).toUpperCase() + user.vorname.slice(1)} ändern`
                                            : `Benutzerdaten von ${user.email} ändern`
                                    );
                                    setChangeEmailInput(user.email);
                                    setChangeFirstNameInput(user.vorname || "");
                                    setChangeLastNameInput(user.nachname || "");
                                    setChangeFirmaInput(user.firma || "");
                                    setChangeRoleInput(user.rolleId);
                                }
                            });
                        }}
                    >
                        Speichern
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default UserManagerModal;
