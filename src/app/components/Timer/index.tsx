"use client";
import React, { useEffect, useState } from "react";

interface ITimer {
    className?: string;
}

const Timer: React.FC<ITimer> = ({ className }) => {
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
                setSeconds(() => 59);
                if (minutes >= 0) {
                    setMinutes(() => minutes - 1);
                } else {
                    setMinutes(59);
                    if (hours >= 0) {
                        setHours(() => hours - 1);
                    } else {
                        setHours(23);
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
        <div className=" flex flex-col items-center text-base-content h-full">
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
                            style={{ "--value": hours } as React.CSSProperties}
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
    );
};

export default Timer;
