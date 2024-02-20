import { useBookingListStore } from "@/app/store/booking-list-store";
import React, { useEffect } from "react";
import BookingsListItem from "../BookingListItem";

interface IBookingsList {
    className?: string;
}

const BookingsList: React.FC<IBookingsList> = ({ className }) => {
    const { bookingsList, setBookingsList } = useBookingListStore();

    useEffect(() => {
        setBookingsList([
            {
                firm: "Sucuk Wurst GmbH",
                contact: "Hans Wurst",
                email: "Hans.Wurst@email.com",
                topic: "Neuronen Technik",
                talkLength: 45,
                dateInput: "26.01.2024",
                startTime: "10:00",
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
            },
            {
                firm: "Marmelade GmbH",
                contact: "Johanis Beere",
                email: "johanis.beere@email.com",
                phone: "012345566",
                annotation: "bitte wlan",
                chairs: 2,
                tables: 2,
                dayOne: false,
                dayTwo: true,
            },
        ]);
    }, []);

    return (
        <div className="relative h-full w-full border border-primary rounded-xl bg-base-100 p-4">
            <button className=" absolute top-0 right-0 m-4 btn btn-primary">
                Neuer Antrag
            </button>
            <h2 className=" text-4xl font-extrabold py-2">Anträge</h2>
            {bookingsList.length > 0 ? (
                <ul
                    className={`${className || ""} flex flex-col gap-1 h-56 overflow-y-auto`}
                >
                    {bookingsList.map((element, index) => (
                        <BookingsListItem
                            className=" w-full"
                            key={index}
                            booking={element}
                        />
                    ))}
                </ul>
            ) : (
                <div className=" text-center w-full text-2xl font-bold italic p-2">
                    Keine Anträge vorhanden
                </div>
            )}
        </div>
    );
};

export default BookingsList;
