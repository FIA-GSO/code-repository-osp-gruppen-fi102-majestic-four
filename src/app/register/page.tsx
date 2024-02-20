"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRegisterStore } from "../store/register-store";

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

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (passwordInput !== confirmPasswordInput) {
            console.log("error! passwords do not match");
            return;
        } else if (passwordInput === confirmPasswordInput) {
            try {
                // api call
            } catch (error) {
                console.error("Error during Registration:", error);
            }
        }
    };

    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Type here.."
                        value={emailInput}
                        onChange={(event) => setEmailInput(event.target.value)}
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
                        onChange={(event) => setPasswordInput(event.target.value)}
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
                        onChange={(event) => setConfirmPasswordInput(event.target.value)}
                        className="input input-bordered w-full max-w-xs"
                    />
                </label>
                <br />
                <button className="btn" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}
