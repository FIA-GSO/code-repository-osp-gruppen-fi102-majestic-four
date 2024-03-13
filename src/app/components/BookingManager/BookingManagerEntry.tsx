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

    return (
        <li className={`${className || ""}`}>
            <details className="collapse border border-neutral-content collapse-arrow my-2 rounded-xl bg-base-100">
                <summary className="collapse-title font-bold items-center">
                    <span className="text-info">
                        {isTalk ? "Vortrag" : "Stand"} ID: {booking.id}
                    </span>
                    <span className=" px-2">|</span>
                    <span className="">{booking.datum}</span>

                    <span className=" px-2">|</span>
                    <span className="">{booking.email}</span>

                    <span className=" px-2">-</span>
                    <span>Status: {booking.status.bezeichnung}</span>
                    {booking.status.bezeichnung === "pending" && (
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
                            className=" btn bg-orange-500 hover:bg-orange-500 btn-sm ml-2 text-primary-content"
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
                    <div className="flex gap-x-8 flex-wrap w-4/5 text-info text-lg font-bold text-wrap">
                        <span>
                            Firma:{" "}
                            <span className="text-white">{booking.firma}</span>
                        </span>
                        <span>
                            Kontakt:{" "}
                            <span className="text-white">
                                {booking.ansprechpartner}
                            </span>
                        </span>
                        <span>
                            Email:{" "}
                            <span className="text-white">{booking.email}</span>
                        </span>
                        {isTalk && (
                            <span>
                                Thema:{" "}
                                <span className="text-white">{isTalk}</span>
                            </span>
                        )}
                        {isTalk && (
                            <span>
                                Länge:{" "}
                                <span className="text-white">
                                    {"dauer" in booking && booking.dauer} Min.
                                </span>
                            </span>
                        )}
                        {isTalk && (
                            <span>
                                Datum:{" "}
                                <span className="text-white">
                                    {booking.datum}
                                </span>
                            </span>
                        )}
                        {isTalk && (
                            <span>
                                Uhrzeit:{" "}
                                <span className="text-white">
                                    {"uhrzeit" in booking && booking.uhrzeit}{" "}
                                    Uhr
                                </span>
                            </span>
                        )}
                        {!isTalk && (
                            <span>
                                Telefon:{" "}
                                <span className="text-white">
                                    {booking.telefon}
                                </span>
                            </span>
                        )}
                        {!isTalk && (
                            <span>
                                Tisch(e):{" "}
                                <span className="text-white">
                                    {"tisch" in booking && booking.tisch}
                                </span>
                            </span>
                        )}
                        {!isTalk && (
                            <span>
                                Stuhlanzahl:{" "}
                                <span className="text-white">
                                    {"stuhl" in booking && booking.stuhl}
                                </span>
                            </span>
                        )}
                        {!isTalk && (
                            <span>
                                Tag 1:{" "}
                                <span className="text-white">
                                    {"tag1" in booking && booking.tag1
                                        ? "Ja"
                                        : "Nein"}
                                </span>
                            </span>
                        )}
                        {!isTalk && (
                            <span>
                                Tag 2:{" "}
                                <span className="text-white">
                                    {"tag2" in booking && booking.tag2
                                        ? "Ja"
                                        : "Nein"}
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
