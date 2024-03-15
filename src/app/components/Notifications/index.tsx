"use client";

import { deleteNotification } from "@/app/actions/notification-actions";
import { useGeneralStore } from "@/app/store/general-store";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

interface INotifications {
    className?: string;
}

const Notifications: React.FC<INotifications> = ({ className }) => {
    const session = useSession();
    const { notifications, setNotifications, setHasNotifications } =
        useGeneralStore();

    return (
        <div>
            <div className=" text-2xl font-bold">Benachrichtigungen:</div>
            <div className="divider"></div>
            {notifications.length === 0 && (
                <div className="text-lg">Keine Benachrichtigungen!</div>
            )}
            {notifications.map((e, index) => {
                return (
                    <div key={index}>
                        <div role="alert" className="alert alert-success">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{e.nachricht}</span>
                            <button
                                className="btn btn-square btn-sm"
                                onClick={() => {
                                    deleteNotification(Number(e.id)).then(
                                        () => {
                                            setNotifications(
                                                notifications.filter(
                                                    (element) => element !== e
                                                )
                                            );
                                            notifications.length > 0
                                                ? setHasNotifications(true)
                                                : setHasNotifications(false);
                                        }
                                    );
                                }}
                            >
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
