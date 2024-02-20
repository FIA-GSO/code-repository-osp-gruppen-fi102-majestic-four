"use client";

import Link from "next/link";
import { useProfileStore } from "../store/profile-store";
import { useRouter } from "next/navigation";

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
    } = useProfileStore();

    return (
        <main className="h-screen w-full flex justify-center items-center bg-slate-800">
            <div className="h-full w-full flex flex-col justify-center items-center">
                <div className="h-full w-full flex flex-col justify-center items-center">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">E-Mail</span>
                        </div>
                        <input
                            type="email"
                            placeholder="E-Mail"
                            className={`input input-bordered w-full max-w-xs ${changeEmail === "Enter" ? "input-info" : ""}`}
                            value={email}
                            disabled={changeEmail != "Enter"}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    {changeEmail === "None" && (
                        <button
                            onClick={(e) => {
                                setChangeEmail("Enter");
                            }}
                            className="btn btn-active btn-neutral mt-10"
                        >
                            E-Mail Adresse ändern
                        </button>
                    )}
                    {changeEmail === "Enter" && (
                        <div className="gap-4 mt-10 flex">
                            <button
                                onClick={(e) => {
                                    setChangeEmail("Wait");
                                }}
                                className="btn btn-active btn-neutral"
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
                                Geben Sie den Code den Sie per E-Mail bekommen
                                <br />
                                haben hier ein, um die E-Mail Adresse zu ändern!
                            </div>
                            <div>
                                <input
                                    type="number"
                                    className="input input-bordered input-lg w-8"
                                />
                                <input
                                    type="number"
                                    className="input input-bordered input-lg w-8"
                                />
                                <input
                                    type="number"
                                    className="input input-bordered input-lg w-8"
                                />
                                <input
                                    type="number"
                                    className="input input-bordered input-lg w-8"
                                />
                                <input
                                    type="number"
                                    className="input input-bordered input-lg w-8"
                                />
                                <input
                                    type="number"
                                    className="input input-bordered input-lg w-8"
                                />
                            </div>
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
                </div>
                <div className="divider divider-neutral"></div>
                <form className="w-full h-full flex flex-col justify-center items-center">
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
                            <span className="label-text">Ansprechpartner:</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Namen des Ansprechpartners"
                            className="input input-bordered w-full max-w-xs"
                            value={contactPerson}
                            onChange={(e) => setContactPerson(e.target.value)}
                        />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Telefonnummer:</span>
                        </div>
                        <input
                            type="number"
                            placeholder="Telefonnummer"
                            className="input input-bordered w-full max-w-xs"
                            value={telefon === 0 ? "" : telefon}
                            onChange={(e) => setTelefon(Number(e.target.value))}
                        />
                    </label>
                    <button className="btn btn-active btn-neutral my-10">
                        Speichern
                    </button>
                </form>
            </div>
        </main>
    );
}
