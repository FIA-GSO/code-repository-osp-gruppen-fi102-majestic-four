import { TStandBooking, TTalkBooking } from "@/app/store/booking-list-store";
import React from "react";

interface IBookingsListItem {
    className?: string;
    booking: TTalkBooking | TStandBooking;
}

const BookingsListItem: React.FC<IBookingsListItem> = ({
    className,
    booking,
}) => {
    return (
        <li className={`${className || ""}`}>
            <details className="collapse border border-neutral-content collapse-arrow my-2 rounded-xl bg-base-300">
                <summary className="collapse-title text-xl font-medium">
                    <span className="text-primary font-bold">
                        {(booking as TTalkBooking).dateInput ||
                            ((booking as TStandBooking).dayOne &&
                                "26.01.2024") ||
                            ((booking as TStandBooking).dayTwo && "27.01.2024")}
                    </span>
                    <span className=" px-2">-</span>
                    {(booking as TTalkBooking).topic ? "Vortrag" : "Stand"}
                    <span className=" px-2">|</span>
                    {(booking as TTalkBooking).topic
                        ? (booking as TTalkBooking).topic
                        : booking.firm}
                </summary>
                <div className="collapse-content relative">
                    <div className="flex gap-8 flex-wrap w-4/5">
                        {Object.entries(booking).map(([key, value]) => (
                            <div key={key}>
                                <span className=" text-secondary text-lg font-bold text-wrap">{`${key}: `}</span>
                                {value}
                            </div>
                        ))}
                    </div>
                    <button className="absolute bottom-5 right-5 btn btn-primary">
                        Anpassen
                    </button>
                </div>
            </details>
        </li>
    );
};

export default BookingsListItem;
