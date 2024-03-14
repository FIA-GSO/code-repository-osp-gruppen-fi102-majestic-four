"use client";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import React, { useEffect, useState } from "react";

export default function Home() {
    const [number, setNumber] = useState(0);
    useEffect(() => {
        const id = setInterval(() => setNumber((e) => number + 1), 1000);
        return () => clearInterval(id);
    }, [number]);
    return (
        <main className="flex h-[calc(100vh-64px)] bg-base-100 text-base-content flex-col items-center justify-between p-24">
            <div className=" flex flex-col items-center justify-evenly h-full">
                <div className="flex gap-5">
                    <div>
                        <span className="countdown font-mono text-4xl">
                            <span
                                style={{ "--value": 15 } as React.CSSProperties}
                            ></span>
                        </span>
                        days
                    </div>
                    <div>
                        <span className="countdown font-mono text-4xl">
                            <span
                                style={{ "--value": 10 } as React.CSSProperties}
                            ></span>
                        </span>
                        hours
                    </div>
                    <div>
                        <span className="countdown font-mono text-4xl">
                            <span
                                style={{ "--value": 24 } as React.CSSProperties}
                            ></span>
                        </span>
                        min
                    </div>
                    <div>
                        <span className="countdown font-mono text-4xl">
                            <span
                                style={
                                    { "--value": number } as React.CSSProperties
                                }
                            ></span>
                        </span>
                        sec
                    </div>
                </div>
            </div>
        </main>
    );
}
