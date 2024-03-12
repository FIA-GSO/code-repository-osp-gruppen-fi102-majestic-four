"use client";

import { useSession } from "next-auth/react";
import BookingArchive from "../components/BookingArchive";
import BookingManager from "../components/BookingManager";
import BookingsList from "../components/BookingsList";
import CancelsManager from "../components/CancelsManager";
import Profile from "../components/Profile";
import UserManager from "../components/UserManager";
import { useGeneralStore } from "../store/general-store";

export default function Dashboard() {
    const session = useSession();
    const { loginState } = useGeneralStore();

    return (
        <main className="bg-base-100 h-[calc(100vh-64px)] flex flex-col py-10 px-20 gap-4 ">
            {session.data?.user?.rolle === "user" && (
                <BookingsList className=" flex-1 flex-grow-[2]" />
            )}
            {session.data?.user?.rolle === "user" && (
                <div className="w-full flex gap-4 flex-1">
                    <BookingArchive className="w-1/2 overflow-y-auto border border-primary rounded-xl bg-base-100" />
                    <Profile className=" w-1/2 border border-primary rounded-xl bg-base-100" />
                </div>
            )}
            {session.data?.user?.rolle === "admin" && <BookingManager />}
            {session.data?.user?.rolle === "admin" && (
                <div className="flex-1 flex portrait:flex-col overflow-auto h-full gap-4">
                    <UserManager />
                    <CancelsManager />
                </div>
            )}
        </main>
    );
}
