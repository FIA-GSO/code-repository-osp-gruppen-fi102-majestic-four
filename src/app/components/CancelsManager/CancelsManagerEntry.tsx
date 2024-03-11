import { useBookingManagerStore } from "@/app/store/booking-manager-store";
import { Stand, Vortrag } from "@prisma/client";

interface ICancelsManagerEntry {
    className?: string;
    booking: Vortrag | Stand;
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
                    <span className="text-orange-500">ID: {booking.id}</span>
                    <span className=" px-2">|</span>
                    <span className="">
                        {typeof booking.datum === typeof Date
                            ? booking.datum.toString()
                            : ((booking as Stand).tag1 && "26.01.2024") ||
                              ((booking as Stand).tag2 && "27.01.2024")}
                    </span>
                    <span className=" px-2">-</span>
                    {(booking as Vortrag).thema ? "Vortrag" : "Stand"}
                    <span className=" px-2">-</span>
                    {(booking as Vortrag).thema
                        ? (booking as Vortrag).thema
                        : booking.firma}
                    <span className=" px-2">-</span>
                    <span>Status: {booking.statusId}</span>
                    <span className=" px-2">|</span>
                    <button className=" btn btn-success btn-sm ml-1">
                        Annehmen
                    </button>
                    <button className=" btn btn-error btn-sm ml-2">
                        Ablehnen
                    </button>
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
                        {(booking as Vortrag).thema && (
                            <span>
                                Thema:{" "}
                                <span className="text-white">
                                    {(booking as Vortrag).thema}
                                </span>
                            </span>
                        )}
                        {(booking as Vortrag).thema && (
                            <span>
                                Länge:{" "}
                                <span className="text-white">
                                    {(booking as Vortrag).dauer} Min.
                                </span>
                            </span>
                        )}
                        {(booking as Vortrag).thema && (
                            <span>
                                Datum:{" "}
                                <span className="text-white">
                                    {(booking as Vortrag).datum}
                                </span>
                            </span>
                        )}
                        {(booking as Vortrag).thema && (
                            <span>
                                Uhrzeit:{" "}
                                <span className="text-white">
                                    {(booking as Vortrag).uhrzeit} Uhr
                                </span>
                            </span>
                        )}
                        {!(booking as Vortrag).thema && (
                            <span>
                                Telefon:{" "}
                                <span className="text-white">
                                    {(booking as Stand).telefon}
                                </span>
                            </span>
                        )}
                        {!(booking as Vortrag).thema && (
                            <span>
                                Tisch(e):{" "}
                                <span className="text-white">
                                    {(booking as Stand).tisch}
                                </span>
                            </span>
                        )}
                        {!(booking as Vortrag).thema && (
                            <span>
                                Stuhlanzahl:{" "}
                                <span className="text-white">
                                    {(booking as Stand).stuhl}
                                </span>
                            </span>
                        )}
                        {!(booking as Vortrag).thema && (
                            <span>
                                Tag 1:{" "}
                                <span className="text-white">
                                    {(booking as Stand).tag1 ? "Ja" : "Nein"}
                                </span>
                            </span>
                        )}
                        {!(booking as Vortrag).thema && (
                            <span>
                                Tag 2:{" "}
                                <span className="text-white">
                                    {(booking as Stand).tag2 ? "Ja" : "Nein"}
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
