"use client";

import BookingArchive from "../components/BookingArchive";

export default function Archive() {
    return (
        <main className="bg-base-100 h-[calc(100vh-64px)] flex flex-col justify-center items-center py-20 px-24 gap-4">
            <BookingArchive
                fullscreen
                className="w-1/2 overflow-y-auto border border-primary rounded-xl bg-base-100"
            />
        </main>
    );
}
