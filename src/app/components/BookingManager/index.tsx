import React, { useEffect } from "react";
import { useBookingManagerStore } from "@/app/store/booking-manager-store";
import BookingManagerEntry from "./BookingManagerEntry";
import Link from "next/link";
import { getAllStands, getAllTalks } from "@/app/actions";

interface IBookingManager {
    className?: string;
    fullscreen?: boolean;
}

const BookingManager: React.FC<IBookingManager> = ({
    className,
    fullscreen,
}) => {
    const {
        bookingManagerList,
        setBookingManagerList,
        updatedBookings,
        setUpdatedBookings,
    } = useBookingManagerStore();

    const fetchBookings = async () => {
        const stands = await getAllStands();
        const talks = await getAllTalks();

        const bookings = [];

        const addStands = stands !== null && !("error" in stands);
        const addTalks = talks !== null && !("error" in talks);

        if (addStands && addTalks) {
            setBookingManagerList([...stands, ...talks]);
        } else {
            setBookingManagerList([]);
        }

        setUpdatedBookings(false);
    };

    useEffect(() => {
        fetchBookings();

        // setBookingManagerList([
        //     {
        //         id: 1,
        //         benutzerId: 1,
        //         firma: "Sucuk Wurst GmbH",
        //         ansprechpartner: "Hans Wurst",
        //         email: "Hans.Wurst@email.com",
        //         thema: "Neuronen Technik",
        //         dauer: 45,
        //         datum: "26.01.2024",
        //         uhrzeit: "10:00",
        //         statusId: 0,
        //     },
        //     {
        //         id: 2,
        //         email: "peter.maffay@gmail.com",
        //         ansprechpartner: "peter maffay",
        //         telefon: "",
        //         firma: "tabaluga",
        //         tag1: true,
        //         tag2: false,
        //         bemerkung: "kein wlan",
        //         datum: new Date("26.01.2024"),
        //         tisch: 2,
        //         stuhl: 12,
        //         benutzerId: 2,
        //         statusId: 1,
        //     },
        //     {
        //         id: 2,
        //         email: "peter.maffay@gmail.com",
        //         ansprechpartner: "peter maffay",
        //         telefon: "",
        //         firma: "tabaluga",
        //         tag1: true,
        //         tag2: false,
        //         bemerkung: "kein wlan",
        //         datum: new Date("26.01.2024"),
        //         tisch: 2,
        //         stuhl: 12,
        //         benutzerId: 2,
        //         statusId: 1,
        //     },
        //     {
        //         id: 2,
        //         email: "peter.maffay@gmail.com",
        //         ansprechpartner: "peter maffay",
        //         telefon: "",
        //         firma: "tabaluga",
        //         tag1: true,
        //         tag2: false,
        //         bemerkung: "kein wlan",
        //         datum: new Date("26.01.2024"),
        //         tisch: 2,
        //         stuhl: 12,
        //         benutzerId: 2,
        //         statusId: 1,
        //     },
        //     {
        //         id: 2,
        //         email: "peter.maffay@gmail.com",
        //         ansprechpartner: "peter maffay",
        //         telefon: "",
        //         firma: "tabaluga",
        //         tag1: true,
        //         tag2: false,
        //         bemerkung: "kein wlan",
        //         datum: new Date("26.01.2024"),
        //         tisch: 2,
        //         stuhl: 12,
        //         benutzerId: 2,
        //         statusId: 1,
        //     },
        //     {
        //         id: 2,
        //         email: "peter.maffay@gmail.com",
        //         ansprechpartner: "peter maffay",
        //         telefon: "",
        //         firma: "tabaluga",
        //         tag1: true,
        //         tag2: false,
        //         bemerkung: "kein wlan",
        //         datum: new Date("26.01.2024"),
        //         tisch: 2,
        //         stuhl: 12,
        //         benutzerId: 2,
        //         statusId: 1,
        //     },
        //     {
        //         id: 2,
        //         email: "peter.maffay@gmail.com",
        //         ansprechpartner: "peter maffay",
        //         telefon: "",
        //         firma: "tabaluga",
        //         tag1: true,
        //         tag2: false,
        //         bemerkung: "kein wlan",
        //         datum: new Date("26.01.2024"),
        //         tisch: 2,
        //         stuhl: 12,
        //         benutzerId: 2,
        //         statusId: 1,
        //     },
        //     {
        //         id: 2,
        //         email: "peter.maffay@gmail.com",
        //         ansprechpartner: "peter maffay",
        //         telefon: "",
        //         firma: "tabaluga",
        //         tag1: true,
        //         tag2: false,
        //         bemerkung: "kein wlan",
        //         datum: new Date("26.01.2024"),
        //         tisch: 2,
        //         stuhl: 12,
        //         benutzerId: 2,
        //         statusId: 1,
        //     },
        //     {
        //         id: 2,
        //         email: "peter.maffay@gmail.com",
        //         ansprechpartner: "peter maffay",
        //         telefon: "",
        //         firma: "tabaluga",
        //         tag1: true,
        //         tag2: false,
        //         bemerkung: "kein wlan",
        //         datum: new Date("26.01.2024"),
        //         tisch: 2,
        //         stuhl: 12,
        //         benutzerId: 2,
        //         statusId: 1,
        //     },
        //     {
        //         id: 2,
        //         email: "peter.maffay@gmail.com",
        //         ansprechpartner: "peter maffay",
        //         telefon: "",
        //         firma: "tabaluga",
        //         tag1: true,
        //         tag2: false,
        //         bemerkung: "kein wlan",
        //         datum: new Date("26.01.2024"),
        //         tisch: 2,
        //         stuhl: 12,
        //         benutzerId: 2,
        //         statusId: 1,
        //     },
        // ]);
    }, [updatedBookings]);

    return (
        <div
            className={`${className || ""} relative border border-info rounded-xl px-4 flex-1 flex flex-col overflow-auto h-full bg-info/60`}
        >
            <h2 className="px-4 text-2xl font-extrabold py-2 text-info flex items-center sticky top-2 left-0 right-0 bg-base-300 z-20 rounded-xl my-2">
                Anträge{" "}
                <span className="text-info/20 italic ">
                    ({bookingManagerList.length}{" "}
                    {bookingManagerList.length === 1 ? "Eintrag" : "Einträge"})
                </span>
                {!fullscreen && (
                    <Link
                        href={"/admin/booking-manager"}
                        className="ml-auto btn btn-info opacity-30 hover:opacity-100 z-40"
                    >
                        Volle Ansicht
                    </Link>
                )}
            </h2>
            {bookingManagerList.length > 0 ? (
                <ul className={`flex flex-col gap-1 min-h-fit`}>
                    {bookingManagerList.map((element, index) => (
                        <BookingManagerEntry
                            className=" w-full"
                            key={index}
                            booking={element}
                        />
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
