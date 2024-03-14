import React, { useEffect, useState } from "react";
import {
    BookingsType,
    useBookingManagerStore,
} from "@/app/store/booking-manager-store";
import BookingManagerEntry from "./BookingManagerEntry";
import Link from "next/link";
import { getAllBookings } from "@/app/actions";

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
    const [showDeclined, setShowDeclined] = useState<boolean>(false);

    const fetchBookings = async () => {
        const bookings = await getAllBookings();

        setBookingManagerList(bookings);

        setUpdatedBookings(false);
    };

    useEffect(() => {
        fetchBookings();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updatedBookings]);

    const filterArchivedBookings: BookingsType = bookingManagerList.filter(
        (element) => element.status.bezeichnung !== "archived"
    );
    const filteredDeclinedBookings: BookingsType =
        filterArchivedBookings.filter(
            (element) => element.status.bezeichnung !== "declined"
        );

    return (
        <div
            className={`${className || ""} relative border border-info rounded-xl px-4 flex-1 flex flex-col overflow-auto h-full bg-info/60`}
        >
            <h2 className="px-4 text-2xl font-extrabold py-2 text-info flex items-center sticky top-2 left-0 right-0 bg-base-300 z-20 rounded-xl my-2">
                Anträge{" "}
                <span className="text-info/20 italic ">
                    ({filterArchivedBookings.length}{" "}
                    {filterArchivedBookings.length === 1
                        ? "Eintrag"
                        : "Einträge"}
                    )
                </span>
                <div className="ml-auto flex gap-4">
                    <div className="ml-auto flex flex-col items-center justify-center">
                        <label className="px-1 text-neutral-content text-sm font-semibold">
                            Abgelehnte
                        </label>

                        <input
                            type="checkbox"
                            className="toggle toggle-sm"
                            checked={showDeclined}
                            onChange={(event) => {
                                setShowDeclined(event.target.checked);
                            }}
                        />
                    </div>
                    {!fullscreen && (
                        <Link
                            href={"/admin/booking-manager"}
                            className="btn btn-info opacity-30 hover:opacity-100 z-40"
                        >
                            Volle Ansicht
                        </Link>
                    )}
                </div>
            </h2>
            {bookingManagerList.length > 0 ? (
                <ul className={`flex flex-col gap-1 min-h-fit`}>
                    {showDeclined
                        ? filterArchivedBookings.map((element, index) => (
                              <BookingManagerEntry
                                  className=" w-full"
                                  key={index}
                                  booking={element}
                              />
                          ))
                        : filteredDeclinedBookings.map((element, index) => (
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
