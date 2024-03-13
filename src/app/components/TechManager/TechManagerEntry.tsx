import { BookingsType } from "@/app/store/tech-manager-store";

interface ITechManager {
    className?: string;
    booking: BookingsType[number];
}
const TechManagerEntry: React.FC<ITechManager> = ({ className, booking }) => {
    const isTalk = booking.type === "vortrag";

    const dateString =
        "tag1" in booking
            ? `${booking.tag1 ? (booking.tag2 ? `${booking.datum} & 27.01.2024` : booking.datum) : "27.01.2024"}`
            : booking.datum;

    return (
        <li
            className={`${className || ""} border border-neutral-content my-2 rounded-xl bg-base-100 p-4 flex flex-col gap-y-4`}
        >
            <div className="font-bold text-xl">
                <span className="text-primary">
                    {isTalk ? "Vortrag" : "Stand"} ID: {booking.id}
                </span>
                <span className=" px-2">|</span>
                <span className="text-primary">
                    Datum: <span className="text-white">{dateString}</span>
                </span>
            </div>
            <div className="relative">
                <div className="flex gap-x-8 flex-wrap w-4/5 text-primary font-bold text-wrap ">
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
                                {"uhrzeit" in booking && booking.uhrzeit} Uhr
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
                    {!isTalk && "bemerkung" in booking && booking.bemerkung && (
                        <span>
                            Bemerkung:{" "}
                            <span className="text-white">
                                {booking.bemerkung}
                            </span>
                        </span>
                    )}
                </div>
            </div>
        </li>
    );
};

export default TechManagerEntry;
