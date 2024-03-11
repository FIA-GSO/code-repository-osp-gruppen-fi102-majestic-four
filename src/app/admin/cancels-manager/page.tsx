"use client";
import CancelsManager from "../../components/CancelsManager";

export default function CancelAdmin() {
    return (
        <main className="bg-base-100 h-[calc(100vh-64px)] py-20 px-24 gap-4 ">
            <CancelsManager fullscreen />
        </main>
    );
}
