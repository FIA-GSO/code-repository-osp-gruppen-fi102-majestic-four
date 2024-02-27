import { useBookingListStore } from "@/app/store/booking-list-store";
import React, { useEffect } from "react";

import Link from "next/link";
import BookingArchiveItem from "../BookingArchiveItem";

interface IBookingArchive {
    className?: string;
    fullscreen?: boolean;
}
const BookingArchive: React.FC<IBookingArchive> = ({
    className,
    fullscreen,
}) => {
    const { bookingsList, setBookingsList } = useBookingListStore();

    useEffect(() => {
        setBookingsList([
            {
                firm: "Sucuk Wurst GmbH",
                contact: "Hans Wurst",
                email: "Hans.Wurst@email.com",
                topic: "Neuronen Technik",
                talkLength: 45,
                dateInput: "26.01.2024",
                startTime: "10:00",
                status: "offen",
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
                status: "angenommen",
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
                status: "abgelehnt",
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
                status: "abgelehnt",
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
                status: "abgelehnt",
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
                status: "abgelehnt",
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
                status: "abgelehnt",
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
                status: "abgelehnt",
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
                status: "abgelehnt",
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
                status: "abgelehnt",
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
                status: "abgelehnt",
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
                status: "abgelehnt",
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
                status: "abgelehnt",
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
                status: "abgelehnt",
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
                status: "abgelehnt",
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
                status: "abgelehnt",
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
                status: "abgelehnt",
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
                status: "abgelehnt",
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
                status: "abgelehnt",
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
                status: "abgelehnt",
            },
        ]);
    }, []);

    return (
        <div
            className={`${className || ""} relative h-full w-full border border-primary rounded-xl bg-base-100 p-4`}
        >
            {!fullscreen && (
                <Link
                    href={"/archive"}
                    className="absolute top-0 right-0 m-4 btn btn-primary"
                >
                    Volle Ansicht
                </Link>
            )}
            <h2 className=" text-4xl font-extrabold py-2">Archiv</h2>
            {bookingsList.length > 0 ? (
                <ul
                    className={`flex flex-col gap-1 ${fullscreen ? "h-[1110px] xl:h-[780px]" : "h-[385px] xl:h-[300px]"} overflow-y-auto`}
                >
                    {bookingsList.map((element, index) => (
                        <BookingArchiveItem
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

export default BookingArchive;
