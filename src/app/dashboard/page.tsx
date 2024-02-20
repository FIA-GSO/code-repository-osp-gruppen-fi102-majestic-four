"use client";

import BookingsList from "../components/BookingsList";

export default function Dashboard() {
    return (
        <main className="bg-neutral flex items-center min-h-screen p-4 px-24 relative">
            <BookingsList />
        </main>
    );
}
