"use client";
import BookingManager from "../../components/BookingManager";

export default function BookingAdmin() {
    return (
        <main className="bg-base-100 h-[calc(100vh-64px)] py-20 px-24 gap-4 ">
            <BookingManager fullscreen />
        </main>
    );
}
