import React, { useEffect } from "react";
import { useCancelsManagerStore } from "@/app/store/cancels-manager-store";
import CancelsManagerEntry from "./CancelsManagerEntry";
import Link from "next/link";
import { getCanceledBookings } from "@/app/actions";

interface ICancelsManager {
    className?: string;
    fullscreen?: boolean;
}

const CancelsManager: React.FC<ICancelsManager> = ({
    className,
    fullscreen,
}) => {
    const { cancelsManagerList, setCancelsManagerList } =
        useCancelsManagerStore();

    const fetchCanceledBookings = async () => {
        const canceledBookings = await getCanceledBookings();

        if (canceledBookings === null || "error" in canceledBookings) return;

        setCancelsManagerList(canceledBookings);
    };
    useEffect(() => {
        fetchCanceledBookings();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            className={`${className || ""} relative border border-neutral rounded-xl px-4 flex-1 flex flex-col overflow-auto h-full bg-base-200 text-base-content`}
        >
            <h2 className="px-4 text-2xl font-extrabold py-2 text-accent-content flex items-center sticky top-2 left-0 right-0 bg-accent z-20 rounded-xl my-2">
                Stornierungen{" "}
                <span className="text-accent-content/40 italic ">
                    ({cancelsManagerList.length}{" "}
                    {cancelsManagerList.length === 1 ? "Eintrag" : "Einträge"})
                </span>
                {(!fullscreen && (
                    <Link
                        href={"/admin/cancels-manager"}
                        className="ml-auto btn btn-neutral opacity-30 hover:opacity-100 z-40"
                    >
                        Volle Ansicht
                    </Link>
                )) || (
                    <Link
                        href={"/dashboard"}
                        className="ml-auto btn btn-neutral opacity-30 hover:opacity-100 z-40"
                    >
                        Zurück
                    </Link>
                )}
            </h2>
            {cancelsManagerList.length > 0 ? (
                <ul className={`flex flex-col gap-1 min-h-fit`}>
                    {cancelsManagerList.map((element, index) => (
                        <CancelsManagerEntry
                            className=" w-full"
                            key={index}
                            booking={element}
                        />
                    ))}
                </ul>
            ) : (
                <div className=" text-center w-full text-2xl font-bold italic p-2">
                    Keine Stornierungen vorhanden
                </div>
            )}
        </div>
    );
};

export default CancelsManager;
