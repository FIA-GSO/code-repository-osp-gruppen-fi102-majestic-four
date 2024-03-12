import React from "react";
import { useUserManagerStore } from "@/app/store/user-manager-store";

interface IUserManagerModal {
    className?: string;
}

const UserManagerModal: React.FC<IUserManagerModal> = ({ className }) => {
    const {
        modalTitle,
        setModalTitle,
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
        setChangeEmailInput("");
        setChangeFirstNameInput("");
        setChangeLastNameInput("");
        setChangeFirmaInput("");
        setChangeRoleInput(0);
    }
    return (
        <dialog id="change-user-data" className={`${className || ""} modal`}>
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
                            <label className="px-1 py-2 text-neutral-content text-sm font-semibold">
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
                            <label className="px-1 py-2 text-neutral-content text-sm font-semibold">
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
                            <label className="px-1 py-2 text-neutral-content text-sm font-semibold">
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
                            <label className="px-1 py-2 text-neutral-content text-sm font-semibold">
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
                            <label className="px-1 py-2 text-neutral-content text-sm font-semibold">
                                Neue Rolle
                            </label>
                            <input
                                className="input input-primary max-w-[144px]"
                                placeholder="#"
                                value={changeRoleInput}
                                onChange={(ev) =>
                                    setChangeRoleInput(
                                        parseInt(ev.target.value)
                                    )
                                }
                                type="number"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label className="px-1 py-2 text-neutral-content text-sm font-semibold">
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
                    <div className="mt-4 italic text-warning text-sm">
                        Leere Felder werden ignoriert
                    </div>
                    <button className="btn btn-success mt-4">Speichern</button>
                </div>
            </div>
        </dialog>
    );
};

export default UserManagerModal;
