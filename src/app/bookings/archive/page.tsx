"use client";

import BookingArchive from "@/app/components/BookingArchive";

export default function BookingsArchivePage() {
    return (
        <main className="bg-base-100 h-[calc(100vh-64px)] py-10 px-20 gap-4 ">
            <BookingArchive fullscreen />
        </main>
    );
}
