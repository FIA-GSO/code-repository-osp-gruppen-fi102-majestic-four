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
            className={`${className || ""} border border-neutral my-2 rounded-xl bg-base-100 text-base-content p-4 flex flex-col gap-y-4`}
        >
            <div className="font-bold text-xl">
                <span className="text-primary">
                    {isTalk ? "Vortrag" : "Stand"} ID: {booking.id}
                </span>
                <span className=" px-2">|</span>
                <span className="text-primary">
                    Datum:{" "}
                    <span className="text-base-content">{dateString}</span>
                </span>
            </div>
            <div className="relative">
                <div className="flex gap-x-8 flex-wrap w-4/5 text-primary font-bold text-wrap ">
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
                                {"uhrzeit" in booking && booking.uhrzeit} Uhr
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
                    {!isTalk && "bemerkung" in booking && booking.bemerkung && (
                        <span>
                            Bemerkung:{" "}
                            <span className="text-base-content">
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
