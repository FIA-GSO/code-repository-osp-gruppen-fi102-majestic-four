"use client";

import Link from "next/link";
import { useLoginStore } from "../store/login-store";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const { emailInput, setEmailInput, passwordInput, setPasswordInput } =
        useLoginStore();
    return (
        <main className=" h-[calc(100vh-64px)] w-screen flex justify-center items-center bg-base-100">
            <div className="flex flex-col border-opacity-50">
                <div
                    className="grid p-5 card bg-base-300 rounded-box place-items-center"
                    onClick={() => router.push("/booking")}
                >
                    <button className="btn btn-active btn-neutral">GAST</button>
                </div>
                <div className="divider">OR</div>
                <div className="grid p-5 card bg-base-300 rounded-box place-items-center">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">E-Mail</span>
                        </div>
                        <input
                            type="email"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                        />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input
                            type="password"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            value={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                        />
                    </label>
                    <button className="btn btn-active mt-3 btn-neutral">
                        LOGIN
                    </button>
                </div>
                <div className="flex items-end justify-center mt-3">
                    <Link href={"/register"} className="link link-neutral">
                        Registrieren
                    </Link>
                </div>
            </div>
        </main>
    );
}
