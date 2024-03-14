"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRegisterStore } from "../store/register-store";
import { createUser } from "../actions";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";

interface FormData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function Register(): JSX.Element {
    const {
        passwordInput,
        setPasswordInput,
        emailInput,
        setEmailInput,
        confirmPasswordInput,
        setConfirmPasswordInput,
    } = useRegisterStore();

    const session = useSession();

    if (session?.status === "authenticated") {
        redirect("/");
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (passwordInput !== confirmPasswordInput) {
            return;
        } else if (passwordInput === confirmPasswordInput) {
            try {
                const newUser = await createUser(emailInput, passwordInput);
                if ("error" in newUser) {
                    alert(newUser.error);
                } else {
                    signIn("credentials", {
                        redirect: false,
                        email: emailInput,
                        password: passwordInput,
                    });
                }
            } catch (error) {
                console.error("Error during Registration:", error);
            }
        }
    };

    return (
        <div className="flex justify-center items-center flex-col bg-base-100 h-[calc(100vh-64px)] py-10 px-20 gap-4 ">
            {session.status !== "loading" ? (
                <form
                    className="flex flex-col items-center justify-center"
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                >
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Type here.."
                            value={emailInput}
                            onChange={(event) =>
                                setEmailInput(event.target.value)
                            }
                            className="input input-bordered w-full max-w-xs"
                        />
                    </label>
                    <br />
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Type here.."
                            value={passwordInput}
                            onChange={(event) =>
                                setPasswordInput(event.target.value)
                            }
                            className="input input-bordered w-full max-w-xs"
                        />
                    </label>
                    <br />
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Confirm Password</span>
                        </div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Type here.."
                            value={confirmPasswordInput}
                            onChange={(event) =>
                                setConfirmPasswordInput(event.target.value)
                            }
                            className="input input-bordered w-full max-w-xs"
                        />
                    </label>
                    <br />
                    <p className="mb-4 text-sm font-light">
                        Mit dem Klick auf registrieren stimmen Sie den
                        <Link
                            className="text-primary underline mx-1"
                            href={"/datenschutz"}
                        >
                            Datenschutzrichtlinien
                        </Link>
                        zu
                    </p>
                    <button className="btn" type="submit">
                        Register
                    </button>
                </form>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
}
