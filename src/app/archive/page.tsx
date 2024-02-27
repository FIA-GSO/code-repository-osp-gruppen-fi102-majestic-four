"use client";

import BookingArchive from "../components/BookingArchive";

export default function Archive() {
    return (
        <main className="bg-neutral flex flex-col justify-center items-center h-screen py-20 px-24 gap-4">
            <BookingArchive
                fullscreen
                className="w-1/2 overflow-y-auto border border-primary rounded-xl bg-base-100"
            />
        </main>
    );
}
