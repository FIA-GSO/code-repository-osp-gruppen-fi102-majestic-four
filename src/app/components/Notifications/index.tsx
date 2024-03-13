"use client";

import { useGeneralStore } from "@/app/store/general-store";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

interface INotifications {
    className?: string;
}

const Notifications: React.FC<INotifications> = ({ className }) => {
    const session = useSession();
    const {
        hasNotifications,
        setHasNotifications,
        notifications,
        setNotifications,
    } = useGeneralStore();

    console.log(notifications[0]);

    return (
        <div>
            {notifications.map((e, index) => {
                return (
                    <div key={index} className="collapse bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            {e.nachricht}
                        </div>
                        <div className="collapse-content">
                            <button className="btn btn-square btn-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="divider"></div>
                    </div>
                );
            })}
        </div>
    );
};

export default Notifications;
