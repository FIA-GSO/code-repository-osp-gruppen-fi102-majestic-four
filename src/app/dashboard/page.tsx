"use client";

import BookingArchive from "../components/BookingArchive";
import BookingManager from "../components/BookingManager";
import BookingsList from "../components/BookingsList";
import Profile from "../components/Profile";
import UserManager from "../components/UserManager";
import { useGeneralStore } from "../store/general-store";

export default function Dashboard() {
    const { loginState } = useGeneralStore();

    return (
        <main className="bg-base-100 h-[calc(100vh-64px)] flex flex-col justify-center items-center py-20 px-24 gap-4 ">
            {loginState === "user" && (
                <BookingsList className=" flex-1 flex-grow-[2]" />
            )}
            {loginState === "user" && (
                <div className="w-full flex gap-4 flex-1">
                    <BookingArchive className="w-1/2 overflow-y-auto border border-primary rounded-xl bg-base-100" />
                    <Profile className=" w-1/2 border border-primary rounded-xl bg-base-100" />
                </div>
            )}
            {loginState === "admin" && <BookingManager />}
            {loginState === "admin" && <UserManager />}
        </main>
    );
}
