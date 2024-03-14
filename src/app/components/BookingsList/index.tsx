import {
    BookingsType,
    useBookingListStore,
} from "@/app/store/booking-list-store";
import React, { useEffect } from "react";
import BookingsListItem from "../BookingListItem";
import Link from "next/link";
import { getUserBookings } from "@/app/actions";
import { useSession } from "next-auth/react";
import BookingListModal from "./BookingListModal";

interface IBookingsList {
    className?: string;
    fullscreen?: boolean;
}

const BookingsList: React.FC<IBookingsList> = ({ className, fullscreen }) => {
    const {
        bookingsList,
        setBookingsList,
        updatedBookings,
        setUpdatedBookings,
    } = useBookingListStore();

    const session = useSession();

    const fetchBookings = async () => {
        //@ts-ignore
        const userId = parseInt(session.data?.user?.id);

        const bookings = await getUserBookings(userId);

        setBookingsList(bookings);

        setUpdatedBookings(false);
    };

    useEffect(() => {
        fetchBookings();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updatedBookings]);

    const filteredBookings: BookingsType = bookingsList.filter(
        (element) => element.status.bezeichnung !== "archived"
    );

    return (
        <div
            className={`${className || ""} relative border border-primary rounded-xl px-4 flex-1 flex flex-col overflow-auto h-full bg-base-300`}
        >
            <BookingListModal />
            <h2 className="px-4 text-2xl font-extrabold py-2 flex items-center sticky top-2 left-0 right-0 bg-base-300 z-20 rounded-xl my-2">
                Anträge{" "}
                <span className="text-white/20 italic ">
                    ({filteredBookings.length}{" "}
                    {filteredBookings.length === 1 ? "Eintrag" : "Einträge"})
                </span>
                <div className=" ml-auto flex items-center gap-4">
                    <Link href={"/booking"} className="link link-primary">
                        Neuer Antrag
                    </Link>
                    {(!fullscreen && (
                        <Link
                            href={"/bookings"}
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
                </div>
            </h2>
            {filteredBookings.length > 0 ? (
                <ul className={`flex flex-col gap-1 min-h-fit`}>
                    {filteredBookings.map((element, index) => (
                        <BookingsListItem
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

export default BookingsList;
