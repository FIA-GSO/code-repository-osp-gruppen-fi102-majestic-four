"use client";

import Link from "next/link";
import { useLoginStore } from "../store/login-store";
import { useRouter, redirect } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Email from "next-auth/providers/email";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { useGeneralStore } from "../store/general-store";

export default function Login() {
    const router = useRouter();
    const { emailInput, setEmailInput, passwordInput, setPasswordInput } =
        useLoginStore();
    const { setLastNotification } = useGeneralStore();

    const session = useSession();

    if (session.status !== "unauthenticated") {
        redirect("/");
    }

    return (
        <main className=" h-[calc(100vh-64px)] w-screen flex justify-center items-center bg-base-100">
            <div className="flex flex-col border-opacity-50">
                <div
                    className="grid p-5 card bg-base-200 rounded-box place-items-center"
                    onClick={() => router.push("/booking")}
                >
                    <button className="btn btn-primary">Als GAST buchen</button>
                </div>
                <div className="divider text-base-content">ODER</div>
                <form
                    className="grid p-5 card bg-base-200 rounded-box place-items-center text-base-content"
                    onSubmit={(e) => {
                        e.preventDefault();
                        signIn("credentials", {
                            redirect: false,
                            email: emailInput,
                            password: passwordInput,
                        }).then((response) => {
                            if (response?.error) {
                                setLastNotification({
                                    notificationType: "error",
                                    message:
                                        "Passwort oder E-mail-Adresse ist falsch!",
                                });
                            } else if (response?.ok) {
                                setLastNotification({
                                    notificationType: "success",
                                    message: "Erfolgreich eingelogt!",
                                });
                            }
                        });
                        setEmailInput("");
                        setPasswordInput("");
                    }}
                >
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">E-Mail</span>
                        </div>
                        <input
                            type="email"
                            placeholder="Hier eingeben"
                            className="input input-bordered input-primary w-full max-w-xs"
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                        />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Passwort</span>
                        </div>
                        <input
                            type="password"
                            placeholder="Hier eingeben"
                            className="input input-bordered input-primary w-full max-w-xs"
                            value={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                        />
                    </label>
                    <button type="submit" className="btn btn-primary mt-3">
                        LOGIN
                    </button>
                </form>
                <div className="flex items-end justify-center mt-3">
                    <Link href={"/register"} className="link link-secondary">
                        Registrieren
                    </Link>
                </div>
            </div>
        </main>
    );
}
