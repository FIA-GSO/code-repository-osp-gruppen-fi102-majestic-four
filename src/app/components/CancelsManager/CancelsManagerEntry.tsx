import {
    useBookingManagerStore,
    StandWithStatus,
    VortragWithStatus,
} from "@/app/store/booking-manager-store";

interface ICancelsManagerEntry {
    className?: string;
    booking: VortragWithStatus | StandWithStatus;
}
const CancelsManagerEntry: React.FC<ICancelsManagerEntry> = ({
    className,
    booking,
}) => {
    const {} = useBookingManagerStore();

    return (
        <li className={`${className || ""}`}>
            <details className="collapse border border-neutral-content collapse-arrow my-2 rounded-xl bg-base-100">
                <summary className="collapse-title text-xl font-bold">
                    <span className="text-orange-500">
                        {(booking as VortragWithStatus).thema
                            ? "Vortrag"
                            : "Stand"}{" "}
                        ID: {booking.id}
                    </span>
                    <span className=" px-2">|</span>
                    <span className="">
                        {typeof booking.datum === typeof Date
                            ? booking.datum.toString()
                            : ((booking as StandWithStatus).tag1 &&
                                  "26.01.2024") ||
                              ((booking as StandWithStatus).tag2 &&
                                  "27.01.2024")}
                    </span>
                    <span className=" px-2">-</span>
                    {(booking as VortragWithStatus).thema ? "Vortrag" : "Stand"}
                    <span className=" px-2">-</span>
                    {(booking as VortragWithStatus).thema
                        ? (booking as VortragWithStatus).thema
                        : booking.firma}
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
                        {(booking as VortragWithStatus).thema && (
                            <span>
                                Thema:{" "}
                                <span className="text-white">
                                    {(booking as VortragWithStatus).thema}
                                </span>
                            </span>
                        )}
                        {(booking as VortragWithStatus).thema && (
                            <span>
                                Länge:{" "}
                                <span className="text-white">
                                    {(booking as VortragWithStatus).dauer} Min.
                                </span>
                            </span>
                        )}
                        {(booking as VortragWithStatus).thema && (
                            <span>
                                Datum:{" "}
                                <span className="text-white">
                                    {(booking as VortragWithStatus).datum}
                                </span>
                            </span>
                        )}
                        {(booking as VortragWithStatus).thema && (
                            <span>
                                Uhrzeit:{" "}
                                <span className="text-white">
                                    {(booking as VortragWithStatus).uhrzeit} Uhr
                                </span>
                            </span>
                        )}
                        {!(booking as VortragWithStatus).thema && (
                            <span>
                                Telefon:{" "}
                                <span className="text-white">
                                    {(booking as StandWithStatus).telefon}
                                </span>
                            </span>
                        )}
                        {!(booking as VortragWithStatus).thema && (
                            <span>
                                Tisch(e):{" "}
                                <span className="text-white">
                                    {(booking as StandWithStatus).tisch}
                                </span>
                            </span>
                        )}
                        {!(booking as VortragWithStatus).thema && (
                            <span>
                                Stuhlanzahl:{" "}
                                <span className="text-white">
                                    {(booking as StandWithStatus).stuhl}
                                </span>
                            </span>
                        )}
                        {!(booking as VortragWithStatus).thema && (
                            <span>
                                Tag 1:{" "}
                                <span className="text-white">
                                    {(booking as StandWithStatus).tag1
                                        ? "Ja"
                                        : "Nein"}
                                </span>
                            </span>
                        )}
                        {!(booking as VortragWithStatus).thema && (
                            <span>
                                Tag 2:{" "}
                                <span className="text-white">
                                    {(booking as StandWithStatus).tag2
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
