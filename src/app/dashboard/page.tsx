"use client";

import BookingArchive from "../components/BookingArchive";
import BookingsList from "../components/BookingsList";
import Profile from "../components/Profile";

export default function Dashboard() {
    return (
        <main className="bg-base-100 h-[calc(100vh-64px)] flex flex-col justify-center items-center py-20 px-24 gap-4 ">
            <BookingsList className=" flex-1 flex-grow-[2]" />
            <div className="w-full flex gap-4 flex-1">
                <BookingArchive className="w-1/2 h-80 overflow-y-auto border border-primary rounded-xl bg-base-100" />
                <Profile className=" w-1/2 border border-primary rounded-xl bg-base-100" />
            </div>
        </main>
    );
}
