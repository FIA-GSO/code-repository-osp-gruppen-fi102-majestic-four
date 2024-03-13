"use client";

import { getNotificationsByID } from "@/app/actions";
import { TLoginState, useGeneralStore } from "@/app/store/general-store";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";

interface INavbar {
    className?: string;
}

const navElements = [
    { name: "Home", link: "/", user: ["user"] },
    { name: "Infos", link: "/infos", user: ["user", "guest"] },
    { name: "Buchen", link: "/booking", user: ["guest", "user"] },
    {
        name: "Dashboard",
        link: "/dashboard",
        user: ["admin", "user", "tech"],
    },
    { name: "Anmeldungen", link: "/admin/booking-manager", user: ["admin"] },
    { name: "Stornierungen", link: "/admin/cancels-manager", user: ["admin"] },
    { name: "User", link: "/admin/user-manager", user: ["admin"] },
];

const Navbar: React.FC<INavbar> = ({ className }) => {
    const session = useSession();

    useEffect(() => {
        console.log("suche");
        if (session.status === "authenticated") {
            getNotificationsByID(Number(session.data?.user?.id)).then(
                (notifications) => console.log(notifications)
            );
        }
    }, [session]);

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
                            (e) =>
                                e === session?.data?.user?.rolle ||
                                (e === "guest" &&
                                    session.status !== "authenticated")
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
                        <label
                            htmlFor="my-drawer-4"
                            className="drawer-button mr-3"
                        >
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
                        </label>
                        <Link
                            className="btn btn-ghost text-xl"
                            href={"/profile"}
                        >
                            Profil
                        </Link>
                        <button
                            className="btn btn-ghost text-xl"
                            onClick={() =>
                                signOut({
                                    callbackUrl: "/logout",
                                    redirect: true,
                                })
                            }
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
