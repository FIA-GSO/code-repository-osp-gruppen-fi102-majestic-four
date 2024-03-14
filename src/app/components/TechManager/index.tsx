import React, { useEffect } from "react";
import { getBookingsForTech } from "@/app/actions";
import { useSession } from "next-auth/react";
import TechManagerEntry from "./TechManagerEntry";
import {
    BookingsType,
    useTechManagerStore,
} from "@/app/store/tech-manager-store";
import { TDates } from "@/app/store/booking-store";

interface ITechManager {
    className?: string;
}

const TechManager: React.FC<ITechManager> = ({ className }) => {
    const {
        dateInput,
        setDateInput,
        bookingsList,
        setBookingsList,
        updatedBookings,
        setUpdatedBookings,
    } = useTechManagerStore();

    const session = useSession();

    const fetchBookings = async () => {
        //@ts-ignore
        const userId = parseInt(session.data?.user?.id);

        const bookings = await getBookingsForTech();

        setBookingsList(bookings);

        setUpdatedBookings(false);
    };

    useEffect(() => {
        fetchBookings();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updatedBookings]);

    const filteredBookings: BookingsType = bookingsList.filter((booking) => {
        if (booking.datum === dateInput) return true;
        if ("tag1" in booking) {
            return booking.tag1 && booking.datum !== dateInput;
        }
    });

    return (
        <div
            className={`${className || ""} relative border border-neutral rounded-xl px-4 flex-1 flex flex-col overflow-auto h-full bg-base-200 text-base-content`}
        >
            <h2 className="px-4 text-2xl font-extrabold py-2 flex items-center sticky top-2 left-0 right-0 z-20 rounded-xl my-2 bg-primary text-primary-content">
                Anträge{" "}
                <span className="text-primary-content/40 italic ">
                    ({filteredBookings.length}{" "}
                    {filteredBookings.length === 1 ? "Eintrag" : "Einträge"})
                </span>
                <select
                    className="select bg-base text-base-content ml-auto"
                    value={dateInput}
                    onChange={(ev) => setDateInput(ev.target.value as TDates)}
                >
                    <option disabled value="">
                        Tag auswählen
                    </option>
                    <option value="26.01.2024">Freitag - 26.01.24</option>
                    <option value="27.01.2024">Samstag - 27.01.24</option>
                </select>
            </h2>
            {bookingsList.length > 0 ? (
                <ul className={`flex flex-col gap-1 min-h-fit`}>
                    {filteredBookings.map((element, index) => (
                        <TechManagerEntry
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

export default TechManager;
