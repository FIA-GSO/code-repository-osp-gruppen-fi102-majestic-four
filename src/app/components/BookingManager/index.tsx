import React, { useEffect } from "react";
import { useBookingManagerStore } from "@/app/store/booking-manager-store";
import BookingManagerModal from "./BookingManagerModal";
import BookingManagerEntry from "./BookingManagerEntry";

interface IBookingManager {
    className?: string;
}

const BookingManager: React.FC<IBookingManager> = ({ className }) => {
    const { bookingManagerList, setBookingManagerList } =
        useBookingManagerStore();

    useEffect(() => {
        setBookingManagerList([
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
        ]);
    }, []);

    return (
        <div
            className={`${className || ""} relative h-full w-full border border-info rounded-xl bg-base-100 p-4`}
        >
            <h2 className=" text-4xl font-extrabold py-2 text-info">Anträge</h2>
            {BookingManager.length > 0 ? (
                <ul className="flex flex-col h-60 gap-1 overflow-y-auto">
                    {bookingManagerList.map((element, index) => (
                        <BookingManagerEntry
                            className=" w-full"
                            key={index}
                            booking={element}
                        />
                        // <li key={index}>test</li>
                    ))}
                </ul>
            ) : (
                <div className=" text-center w-full text-2xl font-bold italic p-2">
                    Keine Anträge vorhanden
                </div>
            )}
        </div>
    );
};

export default BookingManager;
