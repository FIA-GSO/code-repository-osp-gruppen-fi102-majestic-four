"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
    var countDownDate = new Date("Jan 24, 2025 00:00:00").getTime();

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    const [started, setStarted] = useState(false);
    const [days, setDays] = useState(
        Math.floor(timeleft / (1000 * 60 * 60 * 24))
    );
    const [hours, setHours] = useState(
        Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const [minutes, setMinutes] = useState(
        Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))
    );
    const [seconds, setSeconds] = useState(
        Math.floor(timeleft % (1000 * 60)) / 1000
    );
    useEffect(() => {
        const id = setInterval(() => {
            if (seconds >= 0) {
                setSeconds(() => seconds - 1);
            } else {
                setSeconds(() => 60);
                if (minutes >= 0) {
                    setMinutes(() => minutes - 1);
                } else {
                    setMinutes(60);
                    if (hours >= 0) {
                        setHours(() => hours - 1);
                    } else {
                        setHours(24);
                        if (days >= 0) {
                            setDays(() => days - 1);
                        } else {
                            setStarted(true);
                        }
                    }
                }
            }
        }, 1000);
        return () => clearInterval(id);
    }, [seconds]);
    return (
        <main className="flex h-[calc(100vh-64px)] bg-base-100 flex-col items-center justify-between p-24">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Tag der Ausbildung 2025
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                Startet in:
            </p>
            <div className=" flex flex-col items-center  h-full">
                <div className="flex gap-5">
                    <div>
                        <span className="countdown font-mono text-4xl">
                            <span
                                style={
                                    {
                                        "--value": Math.floor(days / 100),
                                    } as React.CSSProperties
                                }
                            ></span>
                            <span
                                style={
                                    {
                                        "--value": days % 100,
                                    } as React.CSSProperties
                                }
                            ></span>
                        </span>
                        Tagen
                    </div>
                    <div>
                        <span className="countdown font-mono text-4xl">
                            <span
                                style={
                                    { "--value": hours } as React.CSSProperties
                                }
                            ></span>
                        </span>
                        Stunden
                    </div>
                    <div>
                        <span className="countdown font-mono text-4xl">
                            <span
                                style={
                                    {
                                        "--value": minutes,
                                    } as React.CSSProperties
                                }
                            ></span>
                        </span>
                        Minuten
                    </div>
                    <div>
                        <span className="countdown font-mono text-4xl">
                            <span
                                style={
                                    {
                                        "--value": seconds,
                                    } as React.CSSProperties
                                }
                            ></span>
                        </span>
                        Sekunden
                    </div>
                </div>
            </div>
        </main>
    );
}
