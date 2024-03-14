import { useBookingManagerStore } from "@/app/store/booking-manager-store";
import { BookingCancelType } from "@/app/store/cancels-manager-store";

interface ICancelsManagerEntry {
    className?: string;
    booking: BookingCancelType[number];
}
const CancelsManagerEntry: React.FC<ICancelsManagerEntry> = ({
    className,
    booking,
}) => {
    const {} = useBookingManagerStore();

    const isTalk = booking.type === "vortrag";

    const dateString =
        "tag1" in booking
            ? `${booking.tag1 ? (booking.tag2 ? `${booking.datum} & 27.01.2024` : booking.datum) : "27.01.2024"}`
            : booking.datum;

    return (
        <li className={`${className || ""}`}>
            <details className="collapse border border-neutral-content collapse-arrow my-2 rounded-xl bg-base-100">
                <summary className="collapse-title font-bold">
                    <span className="text-orange-500">
                        {isTalk ? "Vortrag" : "Stand"} ID: {booking.id}
                    </span>
                    <span className=" px-2">|</span>

                    <span className="text-orange-500">
                        Datum: <span className="text-white">{dateString}</span>
                    </span>
                </summary>
                <div className="collapse-content relative">
                    <div className="flex gap-x-8 flex-wrap w-4/5 text-orange-500 text-lg font-bold text-wrap">
                        {booking.firma && (
                            <span>
                                Firma:{" "}
                                <span className="text-white">
                                    {booking.firma}
                                </span>
                            </span>
                        )}
                        {booking.ansprechpartner && (
                            <span>
                                Kontakt:{" "}
                                <span className="text-white">
                                    {booking.ansprechpartner}
                                </span>
                            </span>
                        )}
                        <span>
                            Email:{" "}
                            <span className="text-white">{booking.email}</span>
                        </span>
                        {isTalk && (
                            <span>
                                Thema:{" "}
                                <span className="text-white">
                                    {"thema" in booking && booking.thema}
                                </span>
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
                        {!isTalk &&
                            "bemerkung" in booking &&
                            booking.bemerkung && (
                                <span>
                                    Bemerkung:{" "}
                                    <span className="text-white">
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

export default CancelsManagerEntry;
