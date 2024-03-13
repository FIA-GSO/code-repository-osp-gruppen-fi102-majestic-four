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

    return (
        <li className={`${className || ""}`}>
            <details className="collapse border border-neutral-content collapse-arrow my-2 rounded-xl bg-base-100">
                <summary className="collapse-title font-bold">
                    <span className="text-orange-500">
                        {isTalk ? "Vortrag" : "Stand"} ID: {booking.id}
                    </span>
                    <span className=" px-2">|</span>

                    <span className="">{booking.datum}</span>

                    <span className=" px-2">|</span>

                    <span className="">{booking.email}</span>

                    <span className=" px-2">-</span>
                    <span>Status: {booking.status.bezeichnung}</span>
                </summary>
                <div className="collapse-content relative">
                    <div className="flex gap-x-8 flex-wrap w-4/5 text-orange-500 text-lg font-bold text-wrap">
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

export default CancelsManagerEntry;
