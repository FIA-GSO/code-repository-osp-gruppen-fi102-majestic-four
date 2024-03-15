"use client";

import { useProfileStore } from "../store/profile-store";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import {
    deleteUser,
    getUserInfos,
    updatePassword,
    updateUser,
    updateUserInfos,
} from "../actions";
import { signOut, useSession } from "next-auth/react";
import { useGeneralStore } from "../store/general-store";

export default function Login() {
    const router = useRouter();
    const {
        email,
        setEmail,
        contactPerson,
        setContactPerson,
        company,
        setCompany,
        telefon,
        setTelefon,
        changeEmail,
        setChangeEmail,
        changePassword,
        setChangePassword,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        oldPassword,
        setOldPassword,
        code,
        setCode,
        saveState,
        setSaveState,
        firstStep,
        setFirstStep,
        deleteInput,
        setDeleteInput,
    } = useProfileStore();
    const input1Ref = useRef<HTMLInputElement | null>(null);
    const input2Ref = useRef<HTMLInputElement | null>(null);
    const input3Ref = useRef<HTMLInputElement | null>(null);
    const input4Ref = useRef<HTMLInputElement | null>(null);
    const input5Ref = useRef<HTMLInputElement | null>(null);
    const input6Ref = useRef<HTMLInputElement | null>(null);

    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordPattern = /^\S{8,}$/;

    const session = useSession();

    const { setLastNotification } = useGeneralStore();

    const fetchUser = async () => {
        const data = await getUserInfos(parseInt(session?.data?.user?.id));
        if (data === null || "error" in data) {
            alert(data?.error);
        } else {
            setEmail(data.email);
            setCompany(data.firma || "");
            setTelefon(data.telefon || "");
            if (data.vorname !== null && data.nachname !== null) {
                setContactPerson(data.vorname + " " + data.nachname);
            } else setContactPerson("");
        }
    };

    useEffect(() => {
        setTimeout(() => setSaveState("Default"), 5000);
    }, [saveState]);

    useEffect(() => {
        if (session.status === "authenticated") fetchUser();
    }, [session]);

    useEffect(() => {
        setChangeEmail("None");
        setChangePassword("None");
        setCode("000000");
        setPassword("");
        setConfirmPassword("");
    }, []);

    let newCode;

    return (
        <main className="h-[calc(100vh-64px)] w-full flex justify-center items-center bg-base-100 text-base-content">
            <div className="gap-10 h-fit w-full flex justify-center items-center">
                <div className="flex flex-col">
                    <div className="flex flex-col justify-center items-center">
                        {changeEmail !== "Wait" &&
                            changePassword === "None" && (
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">
                                            E-Mail
                                        </span>
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="E-Mail"
                                        className={`input input-bordered input-primary text-primary-content w-full max-w-xs ${changeEmail === "Enter" ? "input-info" : ""}`}
                                        value={email}
                                        disabled={changeEmail !== "Enter"}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </label>
                            )}

                        {changeEmail === "Enter" && (
                            <div className="gap-4 mt-10 flex">
                                <button
                                    onClick={(e) => {
                                        setChangeEmail("Wait");
                                    }}
                                    className="btn btn-active btn-neutral"
                                    disabled={
                                        !Boolean(email.match(emailPattern))
                                    }
                                >
                                    Bestätige neue E-Mail
                                </button>
                                <button
                                    onClick={
                                        (e) => {
                                            setChangeEmail("None");
                                            fetchUser();
                                        }
                                        //Frage die Email wieder an und setzte die auf den State}
                                    }
                                    className="btn btn-square"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        )}
                        {changeEmail === "Wait" && (
                            <div className="gap-4 mt-10 flex flex-col justify-center items-center">
                                <div>
                                    Geben Sie den Code, der per Email versendet
                                    wurde, hier ein!
                                </div>
                                <div>
                                    <input
                                        id="code1"
                                        type="text"
                                        pattern="\d{1}"
                                        className="input input-bordered input-primary text-primary-content input-lg w-16"
                                        maxLength={1}
                                        autoFocus
                                        ref={input1Ref}
                                        onKeyUp={(e) =>
                                            e.key === "Backspace"
                                                ? ""
                                                : input2Ref.current?.focus()
                                        }
                                        onFocus={(e) => e.target.select()}
                                        value={code[0]}
                                        onChange={(e) => {
                                            newCode = code.split("");
                                            newCode.splice(
                                                0,
                                                1,
                                                e.target.value
                                            );
                                            newCode = newCode.join("");
                                            setCode(newCode);
                                        }}
                                    />
                                    <input
                                        id="code2"
                                        type="text"
                                        className="input input-bordered input-primary text-primary-content input-lg w-16"
                                        maxLength={1}
                                        ref={input2Ref}
                                        onKeyUp={(e) =>
                                            e.key === "Backspace"
                                                ? input1Ref.current?.focus()
                                                : input3Ref.current?.focus()
                                        }
                                        onFocus={(e) => e.target.select()}
                                        value={code[1]}
                                        onChange={(e) => {
                                            newCode = code.split("");
                                            newCode.splice(
                                                1,
                                                1,
                                                e.target.value
                                            );
                                            newCode = newCode.join("");
                                            setCode(newCode);
                                        }}
                                    />
                                    <input
                                        id="code3"
                                        type="text"
                                        className="input input-bordered input-primary text-primary-content input-lg w-16"
                                        maxLength={1}
                                        ref={input3Ref}
                                        onKeyUp={(e) =>
                                            e.key === "Backspace"
                                                ? input2Ref.current?.focus()
                                                : input4Ref.current?.focus()
                                        }
                                        onFocus={(e) => e.target.select()}
                                        value={code[2]}
                                        onChange={(e) => {
                                            newCode = code.split("");
                                            newCode.splice(
                                                2,
                                                1,
                                                e.target.value
                                            );
                                            newCode = newCode.join("");
                                            setCode(newCode);
                                        }}
                                    />
                                    <input
                                        id="code4"
                                        type="text"
                                        className="input input-bordered input-primary text-primary-content input-lg w-16"
                                        maxLength={1}
                                        ref={input4Ref}
                                        onKeyUp={(e) =>
                                            e.key === "Backspace"
                                                ? input3Ref.current?.focus()
                                                : input5Ref.current?.focus()
                                        }
                                        onFocus={(e) => e.target.select()}
                                        value={code[3]}
                                        onChange={(e) => {
                                            newCode = code.split("");
                                            newCode.splice(
                                                3,
                                                1,
                                                e.target.value
                                            );
                                            newCode = newCode.join("");
                                            setCode(newCode);
                                        }}
                                    />
                                    <input
                                        id="code5"
                                        type="text"
                                        className="input input-bordered input-primary text-primary-content input-lg w-16"
                                        maxLength={1}
                                        ref={input5Ref}
                                        onKeyUp={(e) =>
                                            e.key === "Backspace"
                                                ? input4Ref.current?.focus()
                                                : input6Ref.current?.focus()
                                        }
                                        onFocus={(e) => e.target.select()}
                                        value={code[4]}
                                        onChange={(e) => {
                                            newCode = code.split("");
                                            newCode.splice(
                                                4,
                                                1,
                                                e.target.value
                                            );
                                            newCode = newCode.join("");
                                            setCode(newCode);
                                        }}
                                    />
                                    <input
                                        id="code6"
                                        type="text"
                                        className="input input-bordered input-primary text-primary-content input-lg w-16"
                                        maxLength={1}
                                        ref={input6Ref}
                                        onKeyUp={(e) =>
                                            e.key === "Backspace"
                                                ? input5Ref.current?.focus()
                                                : ""
                                        }
                                        onFocus={(e) => e.target.select()}
                                        value={code[5]}
                                        onChange={(e) => {
                                            newCode = code.split("");
                                            newCode.splice(
                                                5,
                                                1,
                                                e.target.value
                                            );
                                            newCode = newCode.join("");
                                            setCode(newCode);
                                        }}
                                    />
                                </div>
                                <div className="flex ">
                                    <button
                                        onClick={(e) => {
                                            setChangeEmail("None");
                                            setCode("000000");
                                            updateUser(
                                                parseInt(
                                                    session.data?.user?.id
                                                ),
                                                {
                                                    email: email,
                                                }
                                            );
                                        }}
                                        className="btn btn-active btn-neutral"
                                    >
                                        Code bestätigen
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            setChangeEmail("None");
                                            setCode("000000");
                                            fetchUser();
                                        }}
                                        className="btn btn-square"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        {changePassword === "Enter" && (
                            <div className="gap-4 mt-10 flex flex-col items-center">
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">
                                            Altes Passwort
                                        </span>
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="Altes Passwort"
                                        className={
                                            "input input-bordered input-primary text-primary-content w-full max-w-xs"
                                        }
                                        value={oldPassword}
                                        onChange={(e) =>
                                            setOldPassword(e.target.value)
                                        }
                                    />
                                </label>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">
                                            Passwort
                                        </span>
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="Passwort"
                                        className={
                                            "input input-bordered input-primary text-primary-content w-full max-w-xs"
                                        }
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    {!password.match(passwordPattern) &&
                                        password != "" && (
                                            <div className="label">
                                                <span className="label-text-alt text-red-600">
                                                    Passwort muss mindestens 8
                                                    Zeichen lang sein!
                                                </span>
                                            </div>
                                        )}
                                </label>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">
                                            Passwort bestätigen
                                        </span>
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="Passwort bestätigen"
                                        className={`input input-bordered input-primary text-primary-content w-full max-w-xs ${password !== confirmPassword && confirmPassword !== "" ? "input-error" : ""}`}
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                    />
                                    {password !== confirmPassword &&
                                        confirmPassword !== "" && (
                                            <div className="label">
                                                <span className="label-text-alt text-red-600">
                                                    Stimmt nicht mit dem
                                                    Password überein!
                                                </span>
                                            </div>
                                        )}
                                </label>
                                <div className="flex">
                                    <button
                                        disabled={
                                            password !== confirmPassword ||
                                            password === ""
                                        }
                                        onClick={(e) => {
                                            setChangePassword("Wait");
                                        }}
                                        className="btn btn-active btn-neutral mx-2"
                                    >
                                        Bestätige das neue Passwort
                                    </button>
                                    <button
                                        onClick={
                                            (e) => {
                                                setChangePassword("None");
                                                setPassword("");
                                                setConfirmPassword("");
                                            }
                                            //Frage die Email wieder an und setzte die auf den State}
                                        }
                                        className="btn btn-square"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )}
                        {changePassword === "Wait" && (
                            <div className="gap-4 mt-10 flex flex-col justify-center items-center">
                                <div>
                                    Geben Sie den Code, der per Email versendet
                                    wurde, hier ein!
                                </div>
                                <div>
                                    <input
                                        id="code1"
                                        type="text"
                                        pattern="\d{1}"
                                        className="input input-bordered input-primary text-primary-content input-lg w-16"
                                        maxLength={1}
                                        autoFocus
                                        ref={input1Ref}
                                        onKeyUp={(e) =>
                                            e.key === "Backspace"
                                                ? ""
                                                : input2Ref.current?.focus()
                                        }
                                        onFocus={(e) => e.target.select()}
                                    />
                                    <input
                                        id="code2"
                                        type="text"
                                        className="input input-bordered input-primary text-primary-content input-lg w-16"
                                        maxLength={1}
                                        ref={input2Ref}
                                        onKeyUp={(e) =>
                                            e.key === "Backspace"
                                                ? input1Ref.current?.focus()
                                                : input3Ref.current?.focus()
                                        }
                                        onFocus={(e) => e.target.select()}
                                    />
                                    <input
                                        id="code3"
                                        type="text"
                                        className="input input-bordered input-primary text-primary-content input-lg w-16"
                                        maxLength={1}
                                        ref={input3Ref}
                                        onKeyUp={(e) =>
                                            e.key === "Backspace"
                                                ? input2Ref.current?.focus()
                                                : input4Ref.current?.focus()
                                        }
                                        onFocus={(e) => e.target.select()}
                                    />
                                    <input
                                        id="code4"
                                        type="text"
                                        className="input input-bordered input-primary text-primary-content input-lg w-16"
                                        maxLength={1}
                                        ref={input4Ref}
                                        onKeyUp={(e) =>
                                            e.key === "Backspace"
                                                ? input3Ref.current?.focus()
                                                : input5Ref.current?.focus()
                                        }
                                        onFocus={(e) => e.target.select()}
                                    />
                                    <input
                                        id="code5"
                                        type="text"
                                        className="input input-bordered input-primary text-primary-content input-lg w-16"
                                        maxLength={1}
                                        ref={input5Ref}
                                        onKeyUp={(e) =>
                                            e.key === "Backspace"
                                                ? input4Ref.current?.focus()
                                                : input6Ref.current?.focus()
                                        }
                                        onFocus={(e) => e.target.select()}
                                    />
                                    <input
                                        id="code6"
                                        type="text"
                                        className="input input-bordered input-primary text-primary-content input-lg w-16"
                                        maxLength={1}
                                        ref={input6Ref}
                                        onKeyUp={(e) =>
                                            e.key === "Backspace"
                                                ? input5Ref.current?.focus()
                                                : ""
                                        }
                                        onFocus={(e) => e.target.select()}
                                    />
                                </div>
                                <div className="flex">
                                    <button
                                        onClick={(e) => {
                                            setChangePassword("None");
                                            setCode("000000");
                                            setPassword("");
                                            setOldPassword("");
                                            setConfirmPassword("");
                                            updatePassword(
                                                parseInt(
                                                    session.data?.user?.id
                                                ),
                                                oldPassword,
                                                password
                                            ).then((answer) => {
                                                if (answer === undefined) {
                                                    setLastNotification({
                                                        notificationType:
                                                            "error",
                                                        message: "Error!",
                                                    });
                                                } else if (answer === true)
                                                    setLastNotification({
                                                        notificationType:
                                                            "success",
                                                        message:
                                                            "Passwort erfolgreich geändert!",
                                                    });
                                                else {
                                                    setLastNotification({
                                                        notificationType:
                                                            "error",
                                                        message:
                                                            "Altes Passwort falsch!",
                                                    });
                                                }
                                            });
                                        }}
                                        className="btn btn-active btn-neutral"
                                    >
                                        Code bestätigen
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            setChangePassword("None");
                                            setCode("000000");
                                            setPassword("");
                                            setConfirmPassword("");
                                        }}
                                        className="btn btn-square"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex">
                        {changeEmail === "None" &&
                            changePassword === "None" && (
                                <button
                                    onClick={(e) => {
                                        setChangeEmail("Enter");
                                    }}
                                    className="btn btn-active btn-neutral mt-10 mx-1"
                                >
                                    E-Mail ändern
                                </button>
                            )}
                        {changeEmail === "None" &&
                            changePassword === "None" && (
                                <button
                                    onClick={(e) => {
                                        setChangePassword("Enter");
                                    }}
                                    className="btn btn-active btn-neutral my-10 mx-1"
                                >
                                    Password ändern
                                </button>
                            )}
                    </div>
                    {changeEmail === "None" && changePassword === "None" && (
                        <div>
                            <button
                                onClick={() => {
                                    if (
                                        document.getElementById(
                                            "my_modal_3"
                                        ) !== null
                                    ) {
                                        document
                                            ?.getElementById("my_modal_3")
                                            ?.showModal();
                                    }
                                }}
                                className="btn btn-active btn-neutral my-10 mx-1 btn-error"
                            >
                                Account löschen
                            </button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button
                                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                            onClick={() => setFirstStep(true)}
                                        >
                                            ✕
                                        </button>
                                    </form>
                                    <h3 className="font-bold text-lg">
                                        Account Löschen?
                                    </h3>
                                    {firstStep === true ? (
                                        <div>
                                            <p className="py-4">
                                                Wollen Sie den Account wirklich
                                                löschen?
                                            </p>
                                            <button
                                                onClick={() =>
                                                    setFirstStep(false)
                                                }
                                                className="btn btn-neutral"
                                            >
                                                Ja
                                            </button>
                                        </div>
                                    ) : (
                                        <div>
                                            <p className="py-4">
                                                Geben Sie "löschen" in das Feld
                                                ein!
                                            </p>
                                            <input
                                                type="text"
                                                placeholder="Type here"
                                                className="input input-bordered input-error w-full max-w-xs"
                                            />
                                            <button
                                                className="btn btn-error"
                                                onClick={() => {
                                                    signOut();
                                                    deleteUser(
                                                        parseInt(
                                                            session.data?.user
                                                                ?.id
                                                        )
                                                    );
                                                    setLastNotification({
                                                        notificationType:
                                                            "success",
                                                        message:
                                                            "Account erfolgreich gelöscht!",
                                                    });
                                                }}
                                            >
                                                Löschen
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </dialog>
                        </div>
                    )}
                </div>
                <div className="divider divider-horizontal"></div>
                {changeEmail === "None" && changePassword === "None" && (
                    <form className="flex flex-col justify-center items-center">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Firma</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Firma"
                                className="input input-bordered input-primary text-primary-content w-full max-w-xs"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                disabled={session.status !== "authenticated"}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">
                                    Ansprechpartner:
                                </span>
                            </div>
                            <input
                                type="text"
                                placeholder="Namen des Ansprechpartners"
                                className="input input-bordered input-primary text-primary-content w-full max-w-xs"
                                value={contactPerson}
                                onChange={(e) =>
                                    setContactPerson(e.target.value)
                                }
                                disabled={session.status !== "authenticated"}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">
                                    Telefonnummer:
                                </span>
                            </div>
                            <input
                                type="number"
                                placeholder="Telefonnummer"
                                className="input input-bordered input-primary text-primary-content w-full max-w-xs"
                                value={telefon}
                                onChange={(e) => setTelefon(e.target.value)}
                                disabled={session.status !== "authenticated"}
                            />
                        </label>
                        <button
                            className="btn btn-active btn-neutral my-10"
                            onClick={(e) => {
                                e.preventDefault();
                                const user = updateUserInfos(
                                    Number(session?.data?.user?.id),
                                    contactPerson,
                                    telefon,
                                    company
                                );
                                setLastNotification({
                                    notificationType: "success",
                                    message: "Profil erfolgreich bearbeitet!",
                                });
                            }}
                        >
                            Speichern
                        </button>
                    </form>
                )}
            </div>
        </main>
    );
}
