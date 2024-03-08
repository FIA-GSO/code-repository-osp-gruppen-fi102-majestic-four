"use client";

import { TLoginState, useGeneralStore } from "@/app/store/general-store";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

interface INavbar {
    className?: string;
}

const navElements = [
    { name: "Home", link: "/", user: [1] },
    { name: "Infos", link: "/infos", user: [1, 0] },
    { name: "Buchen", link: "/booking", user: [0, 1] },
    {
        name: "Dashboard",
        link: "/dashboard",
        user: [2, 1, 3],
    },
    { name: "Anmeldungen", link: "/all-bookings", user: [2] },
    { name: "Stornierungen", link: "/all-cancels", user: [2] },
    { name: "User", link: "/all-user", user: [2] },
];

const Navbar: React.FC<INavbar> = ({ className }) => {
    const { loginState, setLoginState } = useGeneralStore();

    const session = useSession();

    return (
        <div
            className={
                `${className || ""}` +
                "navbar bg-neutral flex justify-between w-full max-h-16"
            }
        >
            <div className="navbar-start">
                {navElements.map(
                    (element, index) =>
                        element["user"].find(
                            (e) => e === session?.data?.user?.rolle
                        ) && (
                            <Link
                                className="btn btn-ghost text-xl"
                                href={element["link"]}
                                key={index}
                            >
                                {element["name"]}
                            </Link>
                        )
                )}
            </div>
            <div className="navbar-center">
                {/* <select
                    className="select select-bordered w-full max-w-xs"
                    value={loginState}
                    onChange={(e) =>
                        setLoginState(e.target.value as TLoginState)
                    }
                >
                    <option value={"guest"}>Guest</option>
                    <option value={"user"}>User</option>
                    <option value={"admin"}>Admin</option>
                    <option value={"helper"}>Helper</option>
                </select> */}
                {session.status === "authenticated" && (
                    <div>{session?.data?.user?.email}</div>
                )}
            </div>
            <div className="navbar-end">
                {session.status === "unauthenticated" && (
                    <Link className="btn btn-ghost text-xl" href={"/login"}>
                        Login
                    </Link>
                )}
                {session.status === "authenticated" && (
                    <div>
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>
                        <Link
                            className="btn btn-ghost text-xl"
                            href={"/profile"}
                        >
                            Profil
                        </Link>
                        <Link
                            className="btn btn-ghost text-xl"
                            onClick={() => signOut()}
                            href={"/"}
                        >
                            Logout
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
