"use client";

import { TLoginState, useGeneralStore } from "@/app/store/general-store";
import Link from "next/link";
import React from "react";

interface INavbar {
    className?: string;
}

const navElements = [
    { name: "Home", link: "/home", user: ["guest"] },
    { name: "Infos", link: "/infos", user: ["guest", "user"] },
    { name: "Buchen", link: "/booking", user: ["guest", "user"] },
    {
        name: "Dashboard",
        link: "/dashboard",
        user: ["admin", "user", "helper"],
    },
    { name: "Anmeldungen", link: "/all-bookings", user: ["admin"] },
    { name: "Stornierungen", link: "/all-cancels", user: ["admin"] },
    { name: "User", link: "/all-user", user: ["admin"] },
];

const Navbar: React.FC<INavbar> = ({ className }) => {
    const { loginState, setLoginState } = useGeneralStore();
    return (
        <div
            className={
                `${className || ""}` +
                "navbar bg-neutral flex justify-between w-full text-gray-400"
            }
        >
            <div className="navbar-start">
                {navElements.map(
                    (element, index) =>
                        element["user"].find((e) => e === loginState) && (
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
                <select
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
                </select>
            </div>
            <div className="navbar-end">
                {loginState === "guest" && (
                    <Link className="btn btn-ghost text-xl" href={"/login"}>
                        Login
                    </Link>
                )}
                {loginState != "guest" && (
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
                            href={"/profil"}
                        >
                            Profil
                        </Link>
                        <Link
                            className="btn btn-ghost text-xl"
                            href={"/logout"}
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
