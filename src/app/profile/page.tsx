"use client";

import Link from "next/link";
import { useProfileStore } from "../store/profile-store";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { Input } from "postcss";

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
        code,
        setCode,
    } = useProfileStore();
    const input1Ref = useRef<HTMLInputElement | null>(null);
    const input2Ref = useRef<HTMLInputElement | null>(null);
    const input3Ref = useRef<HTMLInputElement | null>(null);
    const input4Ref = useRef<HTMLInputElement | null>(null);
    const input5Ref = useRef<HTMLInputElement | null>(null);
    const input6Ref = useRef<HTMLInputElement | null>(null);

    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    useEffect(() => {
        setChangeEmail("None");
        setChangePassword("None");
        setCode("000000");
        setPassword("");
        setConfirmPassword("");
    }, []);

    let newCode;

    return (
        <main className="h-[calc(100vh-64px)] w-full flex justify-center items-center bg-slate-800">
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
                                        className={`input input-bordered w-full max-w-xs ${changeEmail === "Enter" ? "input-info" : ""}`}
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
                                        (e) => setChangeEmail("None")
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
                                        className="input input-bordered input-lg w-16"
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
                                        className="input input-bordered input-lg w-16"
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
                                        className="input input-bordered input-lg w-16"
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
                                        className="input input-bordered input-lg w-16"
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
                                        className="input input-bordered input-lg w-16"
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
                                        className="input input-bordered input-lg w-16"
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
                                        }}
                                        className="btn btn-active btn-neutral"
                                    >
                                        Code bestätigen
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            setChangeEmail("None");
                                            setCode("000000");
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
                                            Passwort
                                        </span>
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="Passwort"
                                        className={
                                            "input input-bordered w-full max-w-xs"
                                        }
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
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
                                        className={`input input-bordered w-full max-w-xs ${password !== confirmPassword && confirmPassword !== "" ? "input-error" : ""}`}
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
                                        className="btn btn-active btn-neutral"
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
                                        className="input input-bordered input-lg w-16"
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
                                        className="input input-bordered input-lg w-16"
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
                                        className="input input-bordered input-lg w-16"
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
                                        className="input input-bordered input-lg w-16"
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
                                        className="input input-bordered input-lg w-16"
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
                                        className="input input-bordered input-lg w-16"
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
                                            setChangeEmail("None");
                                            setCode("000000");
                                            setPassword("");
                                            setConfirmPassword("");
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
                                    className="btn btn-active btn-neutral mt-10"
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
                                    className="btn btn-active btn-neutral my-10"
                                >
                                    Password ändern
                                </button>
                            )}
                    </div>
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
                                className="input input-bordered w-full max-w-xs"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
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
                                className="input input-bordered w-full max-w-xs"
                                value={contactPerson}
                                onChange={(e) =>
                                    setContactPerson(e.target.value)
                                }
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
                                className="input input-bordered w-full max-w-xs"
                                value={telefon === 0 ? "" : telefon}
                                onChange={(e) =>
                                    setTelefon(Number(e.target.value))
                                }
                            />
                        </label>
                        <button className="btn btn-active btn-neutral my-10">
                            Speichern
                        </button>
                    </form>
                )}
            </div>
        </main>
    );
}
