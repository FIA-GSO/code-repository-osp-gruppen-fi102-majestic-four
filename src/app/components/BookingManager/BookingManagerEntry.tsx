import { changeBookingStatus } from "@/app/actions";
import {
    BookingsType,
    useBookingManagerStore,
} from "@/app/store/booking-manager-store";

interface IBookingManagerEntry {
    className?: string;
    booking: BookingsType[number];
}
const BookingManagerEntry: React.FC<IBookingManagerEntry> = ({
    className,
    booking,
}) => {
    const { setUpdatedBookings } = useBookingManagerStore();

    const isTalk = booking.type === "vortrag";

    const dateString =
        "tag1" in booking
            ? `${booking.tag1 ? (booking.tag2 ? `${booking.datum} & 27.01.2024` : booking.datum) : "27.01.2024"}`
            : booking.datum;

    return (
        <li className={`${className || ""}`}>
            <details className="collapse border border-neutral collapse-arrow my-2 rounded-xl bg-base-100 text-base-content">
                <summary className="collapse-title font-bold items-center">
                    <span className="text-primary">
                        {isTalk ? "Vortrag" : "Stand"} ID: {booking.id}
                    </span>
                    <span className=" px-2">|</span>
                    <span className=" text-primary">
                        Datum:{" "}
                        <span className="text-base-content">{dateString}</span>
                    </span>

                    <span className=" px-2">|</span>
                    <span>{booking.email}</span>

                    <span className=" px-2">-</span>
                    <span className=" text-primary">
                        Status:{" "}
                        <span className="text-base-content">
                            {booking.status.bezeichnung}
                        </span>
                    </span>

                    {(booking.status.bezeichnung === "pending" ||
                        booking.status.bezeichnung === "accepted") && (
                        <span className=" px-2">|</span>
                    )}
                    {booking.status.bezeichnung === "pending" && (
                        <button
                            className=" btn btn-success btn-sm ml-1"
                            onClick={() => {
                                changeBookingStatus(
                                    booking.id,
                                    isTalk ? "vortrag" : "stand",
                                    3
                                );
                                setUpdatedBookings(true);
                            }}
                        >
                            Annehmen
                        </button>
                    )}
                    {booking.status.bezeichnung === "pending" && (
                        <button
                            className=" btn btn-error btn-sm ml-2"
                            onClick={() => {
                                changeBookingStatus(
                                    booking.id,
                                    isTalk ? "vortrag" : "stand",
                                    4
                                );
                                setUpdatedBookings(true);
                            }}
                        >
                            Ablehnen
                        </button>
                    )}

                    {booking.status.bezeichnung === "accepted" && (
                        <button
                            className=" btn btn-accent btn-sm ml-2"
                            onClick={() => {
                                changeBookingStatus(
                                    booking.id,
                                    isTalk ? "vortrag" : "stand",
                                    2
                                );
                                setUpdatedBookings(true);
                            }}
                        >
                            Stornieren
                        </button>
                    )}
                </summary>
                <div className="collapse-content relative">
                    <div className="flex gap-x-8 flex-wrap w-4/5 text-primary text-lg font-bold text-wrap">
                        {booking.firma && (
                            <span>
                                Firma:{" "}
                                <span className="text-base-content">
                                    {booking.firma}
                                </span>
                            </span>
                        )}
                        {booking.ansprechpartner && (
                            <span>
                                Kontakt:{" "}
                                <span className="text-base-content">
                                    {booking.ansprechpartner}
                                </span>
                            </span>
                        )}
                        <span>
                            Email:{" "}
                            <span className="text-base-content">
                                {booking.email}
                            </span>
                        </span>
                        {isTalk && (
                            <span>
                                Thema:{" "}
                                <span className="text-base-content">
                                    {"thema" in booking && booking.thema}
                                </span>
                            </span>
                        )}
                        {isTalk && (
                            <span>
                                Länge:{" "}
                                <span className="text-base-content">
                                    {"dauer" in booking && booking.dauer} Min.
                                </span>
                            </span>
                        )}

                        {isTalk && (
                            <span>
                                Uhrzeit:{" "}
                                <span className="text-base-content">
                                    {"uhrzeit" in booking && booking.uhrzeit}{" "}
                                    Uhr
                                </span>
                            </span>
                        )}
                        {!isTalk && booking.telefon && (
                            <span>
                                Telefon:{" "}
                                <span className="text-base-content">
                                    {booking.telefon}
                                </span>
                            </span>
                        )}
                        {!isTalk && (
                            <span>
                                Tisch(e):{" "}
                                <span className="text-base-content">
                                    {"tisch" in booking && booking.tisch}
                                </span>
                            </span>
                        )}
                        {!isTalk && (
                            <span>
                                Stuhlanzahl:{" "}
                                <span className="text-base-content">
                                    {"stuhl" in booking && booking.stuhl}
                                </span>
                            </span>
                        )}
                        {!isTalk && (
                            <span>
                                Tag 1:{" "}
                                <span className="text-base-content">
                                    {"tag1" in booking && booking.tag1
                                        ? "Ja"
                                        : "Nein"}
                                </span>
                            </span>
                        )}
                        {!isTalk && (
                            <span>
                                Tag 2:{" "}
                                <span className="text-base-content">
                                    {"tag2" in booking && booking.tag2
                                        ? "Ja"
                                        : "Nein"}
                                </span>
                            </span>
                        )}
                        {!isTalk &&
                            "bemerkung" in booking &&
                            booking.bemerkung && (
                                <span>
                                    Bemerkung:{" "}
                                    <span className="text-base-content">
                                        {booking.bemerkung}
                                    </span>
                                </span>
                            )}
                    </div>
                </div>
            </details>
        </li>
    );
};

export default BookingManagerEntry;
