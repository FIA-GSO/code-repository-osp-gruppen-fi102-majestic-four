import React, { useEffect } from "react";
import { useCancelsManagerStore } from "@/app/store/cancels-manager-store";
import CancelsManagerEntry from "./CancelsManagerEntry";
import Link from "next/link";

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

    useEffect(() => {
        setCancelsManagerList([
            {
                id: 1,
                benutzerId: 1,
                firma: "Sucuk Wurst GmbH",
                ansprechpartner: "Hans Wurst",
                email: "Hans.Wurst@email.com",
                thema: "Neuronen Technik",
                dauer: 45,
                datum: "26.01.2024",
                uhrzeit: "10:00",
                statusId: 0,
            },
            {
                id: 2,
                email: "peter.maffay@gmail.com",
                ansprechpartner: "peter maffay",
                telefon: "",
                firma: "tabaluga",
                tag1: true,
                tag2: false,
                bemerkung: "kein wlan",
                datum: new Date("26.01.2024"),
                tisch: 2,
                stuhl: 12,
                benutzerId: 2,
                statusId: 1,
            },
            {
                id: 2,
                email: "peter.maffay@gmail.com",
                ansprechpartner: "peter maffay",
                telefon: "",
                firma: "tabaluga",
                tag1: true,
                tag2: false,
                bemerkung: "kein wlan",
                datum: new Date("26.01.2024"),
                tisch: 2,
                stuhl: 12,
                benutzerId: 2,
                statusId: 1,
            },
            {
                id: 2,
                email: "peter.maffay@gmail.com",
                ansprechpartner: "peter maffay",
                telefon: "",
                firma: "tabaluga",
                tag1: true,
                tag2: false,
                bemerkung: "kein wlan",
                datum: new Date("26.01.2024"),
                tisch: 2,
                stuhl: 12,
                benutzerId: 2,
                statusId: 1,
            },
            {
                id: 2,
                email: "peter.maffay@gmail.com",
                ansprechpartner: "peter maffay",
                telefon: "",
                firma: "tabaluga",
                tag1: true,
                tag2: false,
                bemerkung: "kein wlan",
                datum: new Date("26.01.2024"),
                tisch: 2,
                stuhl: 12,
                benutzerId: 2,
                statusId: 1,
            },
            {
                id: 2,
                email: "peter.maffay@gmail.com",
                ansprechpartner: "peter maffay",
                telefon: "",
                firma: "tabaluga",
                tag1: true,
                tag2: false,
                bemerkung: "kein wlan",
                datum: new Date("26.01.2024"),
                tisch: 2,
                stuhl: 12,
                benutzerId: 2,
                statusId: 1,
            },
            {
                id: 2,
                email: "peter.maffay@gmail.com",
                ansprechpartner: "peter maffay",
                telefon: "",
                firma: "tabaluga",
                tag1: true,
                tag2: false,
                bemerkung: "kein wlan",
                datum: new Date("26.01.2024"),
                tisch: 2,
                stuhl: 12,
                benutzerId: 2,
                statusId: 1,
            },
            {
                id: 2,
                email: "peter.maffay@gmail.com",
                ansprechpartner: "peter maffay",
                telefon: "",
                firma: "tabaluga",
                tag1: true,
                tag2: false,
                bemerkung: "kein wlan",
                datum: new Date("26.01.2024"),
                tisch: 2,
                stuhl: 12,
                benutzerId: 2,
                statusId: 1,
            },
            {
                id: 2,
                email: "peter.maffay@gmail.com",
                ansprechpartner: "peter maffay",
                telefon: "",
                firma: "tabaluga",
                tag1: true,
                tag2: false,
                bemerkung: "kein wlan",
                datum: new Date("26.01.2024"),
                tisch: 2,
                stuhl: 12,
                benutzerId: 2,
                statusId: 1,
            },
            {
                id: 2,
                email: "peter.maffay@gmail.com",
                ansprechpartner: "peter maffay",
                telefon: "",
                firma: "tabaluga",
                tag1: true,
                tag2: false,
                bemerkung: "kein wlan",
                datum: new Date("26.01.2024"),
                tisch: 2,
                stuhl: 12,
                benutzerId: 2,
                statusId: 1,
            },
        ]);
    }, []);

    return (
        <div
            className={`${className || ""} relative border border-orange-500 rounded-xl px-4 flex-1 flex flex-col overflow-auto h-full bg-orange-500/60`}
        >
            <h2 className="px-4 text-2xl font-extrabold py-2 text-orange-500 flex items-center sticky top-2 left-0 right-0 bg-base-300 z-20 rounded-xl my-2">
                Stornierungen{" "}
                <span className="text-orange-500/20 italic ">
                    ({cancelsManagerList.length}{" "}
                    {cancelsManagerList.length === 1 ? "Eintrag" : "Einträge"})
                </span>
                {!fullscreen && (
                    <Link
                        href={"/admin/cancels-manager"}
                        className="btn bg-orange-500 text-primary-content opacity-30 hover:opacity-100 hover:bg-orange-500 ml-auto z-40"
                    >
                        Volle Ansicht
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
