"use client";

import { useGeneralStore } from "@/app/store/general-store";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

interface INotificationPopup {
    className?: string;
}

const NotificationPopup: React.FC<INotificationPopup> = ({ className }) => {
    const session = useSession();
    const [animationKey, setAnimationKey] = useState(0);
    const { lastNotification, setLastNotification } = useGeneralStore();

    useEffect(() => {
        setAnimationKey((prevKey) => prevKey + 1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastNotification]);

    return (
        lastNotification && (
            <div
                key={animationKey}
                className={`${
                    className || ""
                } absolute w-fit bottom-8 left-8  m-auto z-50`}
            >
                <div
                    className={` alert overflow-clip relative
        ${lastNotification.notificationType === "success" && "alert-success"}
        ${lastNotification.notificationType === "error" && "alert-error"}
        `}
                    role="alert"
                >
                    <span className=" font-semibold">{`${lastNotification.message}`}</span>
                    <button
                        className={`btn btn-xs btn-circle
        `}
                        onClick={() => setLastNotification(undefined)}
                    >
                        X
                    </button>
                    <div
                        onAnimationEnd={() => setLastNotification(undefined)}
                        className="absolute bottom-0 left-0 w-full h-2 bg-white origin-left animate-[scale-down_8s_linear_1]"
                    ></div>
                </div>
            </div>
        )
    );
};

export default NotificationPopup;
