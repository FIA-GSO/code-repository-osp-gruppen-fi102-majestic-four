import React from "react";
import Timer from "./components/Timer";

export default function Home() {
    return (
        <main className="flex h-[calc(100vh-64px)] bg-base-100 flex-col items-center justify-between p-24">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-base-content md:text-5xl lg:text-6xl ">
                Tag der Ausbildung 2025
            </h1>
            <p className="mb-6 text-lg font-normal text-base-content lg:text-xl sm:px-16 xl:px-48">
                Startet in:
            </p>
            <Timer />
        </main>
    );
}
