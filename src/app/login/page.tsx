"use client";

import Link from "next/link";
import { useLoginStore } from "../store/login-store";
import { useRouter, redirect } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Email from "next-auth/providers/email";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default function Login() {
    const router = useRouter();
    const { emailInput, setEmailInput, passwordInput, setPasswordInput } =
        useLoginStore();

    const session = useSession();

    if (session.status !== "unauthenticated") {
        redirect("/");
    }

    return (
        <main className=" h-[calc(100vh-64px)] w-screen flex justify-center items-center bg-base-100">
            <div className="flex flex-col border-opacity-50">
                <div
                    className="grid p-5 card bg-base-300 rounded-box place-items-center"
                    onClick={() => router.push("/booking")}
                >
                    <button className="btn btn-active btn-neutral">
                        Als GAST buchen
                    </button>
                </div>
                <div className="divider">ODER</div>
                <form
                    className="grid p-5 card bg-base-300 rounded-box place-items-center"
                    onSubmit={(e) => {
                        e.preventDefault();
                        signIn("credentials", {
                            redirect: false,
                            email: emailInput,
                            password: passwordInput,
                        });
                        setEmailInput("");
                        setPasswordInput("");
                        redirect("/");
                    }}
                >
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">E-Mail</span>
                        </div>
                        <input
                            type="email"
                            placeholder="Hier eingeben"
                            className="input input-bordered w-full max-w-xs"
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
                            className="input input-bordered w-full max-w-xs"
                            value={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                        />
                    </label>
                    <button
                        type="submit"
                        className="btn btn-active mt-3 btn-neutral"
                    >
                        LOGIN
                    </button>
                </form>
                <div className="flex items-end justify-center mt-3">
                    <Link href={"/register"} className="link link-neutral">
                        Registrieren
                    </Link>
                </div>
            </div>
        </main>
    );
}
