"use client";
import BookingsList from "../components/BookingsList";

export default function BookingsPage() {
    return (
        <main className="bg-base-100 h-[calc(100vh-64px)] py-10 px-20 gap-4 ">
            <BookingsList fullscreen />
        </main>
    );
}
