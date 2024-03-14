import React from "react";

import { BookingsType } from "@/app/store/booking-list-store";
import { useBookingStore } from "@/app/store/booking-store";
import { useRouter } from "next/navigation";
interface IBookingArchiveItem {
    className?: string;
    booking: BookingsType[number];
}

const BookingArchiveItem: React.FC<IBookingArchiveItem> = ({
    className,
    booking,
}) => {
    const router = useRouter();
    const isTalk = booking.type === "vortrag";

    const dateString =
        "tag1" in booking
            ? `${booking.tag1 ? (booking.tag2 ? `${booking.datum} & 27.01.2024` : booking.datum) : "27.01.2024"}`
            : booking.datum;

    const {
        //Talk
        setTopicInput,
        setTalkLengthInput,
        setDateInput,
        setStartTimeInput,

        //Stand
        setAnnotationInput,
        setDayOneChecked,
        setDayTwoChecked,
        setTablesInput,
        setChairsInput,
    } = useBookingStore();

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

                    <button
                        className=" btn btn-primary btn-sm ml-1"
                        onClick={() => {
                            setAnnotationInput("");
                            setChairsInput(0);
                            setTablesInput(0);
                            setDayOneChecked(false);
                            setDayTwoChecked(false);
                            setTopicInput("");
                            setTalkLengthInput(15);
                            setDateInput("");
                            setStartTimeInput("");

                            if (isTalk && "thema" in booking) {
                                setTopicInput(booking.thema);
                                setTalkLengthInput(booking.dauer);
                                setStartTimeInput(booking.uhrzeit);
                            }
                            if ("tag1" in booking) {
                                setAnnotationInput(booking.bemerkung || "");
                                setDayOneChecked(booking.tag1);
                                setDayTwoChecked(booking.tag2);
                                setTablesInput(booking.tisch);
                                setChairsInput(booking.stuhl);
                            }
                            router.push("/booking");
                        }}
                    >
                        Vorlage anwenden
                    </button>
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
                        {!isTalk && (
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

export default BookingArchiveItem;
