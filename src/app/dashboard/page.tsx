"use client";

import { useSession } from "next-auth/react";
import BookingArchive from "../components/BookingArchive";
import BookingManager from "../components/BookingManager";
import BookingsList from "../components/BookingsList";
import CancelsManager from "../components/CancelsManager";
import Profile from "../components/Profile";
import UserManager from "../components/UserManager";
import { useGeneralStore } from "../store/general-store";
import TechManager from "../components/TechManager";

export default function Dashboard() {
    const session = useSession();
    const { loginState } = useGeneralStore();
    // @ts-ignore
    const rolle = session.data?.user?.rolle;

    return (
        <main className="bg-base-100 h-[calc(100vh-64px)] flex flex-col py-10 px-20 gap-4 ">
            {/* User Dashboard */}
            {rolle === "user" && (
                <BookingsList className=" flex-1 flex-grow-[2]" />
            )}
            {rolle === "user" && (
                <div className="flex-1 flex portrait:flex-col overflow-auto h-full gap-4">
                    <BookingArchive />
                    <Profile />
                </div>
            )}
            {/* Technician Dashboard */}
            {rolle === "technician" && (
                <TechManager className=" flex-1 flex-grow-[2]" />
            )}
            {/* Admin Dashboard */}
            {rolle === "admin" && <BookingManager />}
            {rolle === "admin" && (
                <div className="flex-1 flex portrait:flex-col overflow-auto h-full gap-4">
                    <UserManager />
                    <CancelsManager />
                </div>
            )}
        </main>
    );
}
