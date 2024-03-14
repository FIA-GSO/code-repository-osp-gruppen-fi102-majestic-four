import React from "react";
import { useUserManagerStore } from "@/app/store/user-manager-store";
import { updateUser, updatedStand, updatedVortrag } from "@/app/actions";
import { useBookingListStore } from "@/app/store/booking-list-store";
import { generateOptions } from "../TalkBookingForm";
import { TDates } from "@/app/store/booking-store";
import { useSession } from "next-auth/react";

interface IBookingListModal {
    className?: string;
}
export type TModal = "stand" | "talk";

const BookingListModal: React.FC<IBookingListModal> = ({ className }) => {
    const {
        modalTitle,
        setModalTitle,
        annotationInput,
        setAnnotationInput,
        chairsInput,
        setChairsInput,
        tablesInput,
        setTablesInput,
        dayOneChecked,
        setDayOneChecked,
        dayTwoChecked,
        setDayTwoChecked,
        topicInput,
        setTopicInput,
        talkLengthInput,
        setTalkLengthInput,
        dateInput,
        setDateInput,
        startTimeInput,
        setStartTimeInput,
        bookingId,
        modalType,
        setUpdatedBookings,
    } = useBookingListStore();

    function resetInputValues() {
        setModalTitle("Anmeldung ändern");
        setAnnotationInput("");
        setChairsInput(0);
        setTablesInput(0);
        setDayOneChecked(false);
        setDayTwoChecked(false);
        setTopicInput("");
        setTalkLengthInput(0);
        setDateInput("");
        setStartTimeInput("");
    }
    const session = useSession();
    //@ts-ignore
    const userId = parseInt(session.data?.user?.id);

    return (
        <dialog id="change-booking-data" className={`${className || ""} modal`}>
            <div className="modal-box w-11/12 max-w-5xl border border-neutral">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button
                        className="btn btn-sm btn-circle btn-error absolute right-2 top-2"
                        onClick={() => resetInputValues()}
                    >
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-2xl text-primary">
                    {modalTitle}
                </h3>
                <div className="py-4">
                    {/* Change Talk Input fields */}
                    {modalType === "talk" && (
                        <div className=" flex flex-wrap gap-x-5">
                            <div className="flex flex-col ">
                                <label className="px-1 py-2 text-neutral-content text-sm font-semibold">
                                    Neues Thema
                                </label>
                                <input
                                    className="input input-primary max-w-[200px]"
                                    type="text"
                                    value={topicInput}
                                    onChange={(ev) =>
                                        setTopicInput(ev.target.value)
                                    }
                                />
                            </div>
                            <div className="flex flex-col ">
                                <label className="px-1 py-2 text-neutral-content text-sm font-semibold">
                                    Neuer Dauer
                                </label>
                                <input
                                    type="number"
                                    placeholder="Dauer eintragen"
                                    className="input input-primary w-full max-w-[144px]"
                                    min={15}
                                    max={60}
                                    step={15}
                                    value={talkLengthInput}
                                    onChange={(ev) =>
                                        setTalkLengthInput(
                                            parseInt(ev.target.value) || 15
                                        )
                                    }
                                />
                            </div>
                            <div className="flex flex-col ">
                                <label className="px-1 py-2 text-neutral-content text-sm font-semibold">
                                    Neues Datum
                                </label>
                                <select
                                    className="select select-primary"
                                    value={dateInput}
                                    onChange={(ev) =>
                                        setDateInput(ev.target.value as TDates)
                                    }
                                >
                                    <option disabled value="">
                                        Tag auswählen
                                    </option>
                                    <option value="26.01.2024">
                                        Freitag - 26.01.24
                                    </option>
                                    <option value="27.01.2024">
                                        Samstag - 27.01.24
                                    </option>
                                </select>
                            </div>
                            <div className="flex flex-col ">
                                <label className="px-1 py-2 text-neutral-content text-sm font-semibold">
                                    Neuer Uhrzeit
                                </label>
                                <select
                                    className="select select-primary"
                                    value={startTimeInput}
                                    onChange={(ev) => {
                                        setStartTimeInput(ev.target.value);
                                    }}
                                >
                                    <option disabled value="">
                                        Startzeit auswählen
                                    </option>
                                    {generateOptions()}
                                </select>
                            </div>
                        </div>
                    )}
                    {/* Change Stand Input fields */}
                    {modalType === "stand" && (
                        <div className=" flex flex-wrap gap-x-5">
                            <div className="flex flex-col ">
                                <label className="px-1 py-2 text-neutral-content text-sm font-semibold">
                                    Neue Anmerkung
                                </label>
                                <input
                                    className="input input-primary max-w-[200px]"
                                    type="text"
                                    value={annotationInput}
                                    onChange={(ev) =>
                                        setAnnotationInput(ev.target.value)
                                    }
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <label className="px-1 py-2 text-neutral-content text-sm font-semibold">
                                    Tag 1
                                </label>
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-primary"
                                    checked={dayOneChecked}
                                    onChange={() =>
                                        setDayOneChecked(!dayOneChecked)
                                    }
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <label className="px-1 py-2 text-neutral-content text-sm font-semibold">
                                    Tag 2
                                </label>
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-primary"
                                    checked={dayTwoChecked}
                                    onChange={() =>
                                        setDayTwoChecked(!dayTwoChecked)
                                    }
                                />
                            </div>
                            <div className="flex flex-col ">
                                <label className="px-1 py-2 text-neutral-content text-sm font-semibold">
                                    Neue Tischanzahl
                                </label>
                                <input
                                    type="number"
                                    placeholder="Tischanzahl eingeben"
                                    className="input input-primary w-full max-w-xs"
                                    value={tablesInput}
                                    onChange={(ev) =>
                                        setTablesInput(
                                            parseInt(ev.target.value) || 0
                                        )
                                    }
                                />
                            </div>
                            <div className="flex flex-col ">
                                <label className="px-1 py-2 text-neutral-content text-sm font-semibold">
                                    Neue Stuhlanzahl
                                </label>
                                <input
                                    type="number"
                                    placeholder="Stuhlanzahl eingeben"
                                    className="input input-primary w-full max-w-xs"
                                    value={chairsInput}
                                    onChange={(ev) =>
                                        setChairsInput(
                                            parseInt(ev.target.value) || 0
                                        )
                                    }
                                />
                            </div>
                        </div>
                    )}

                    <button
                        className="btn btn-success mt-4"
                        onClick={() => {
                            if (modalType === "stand") {
                                updatedStand(userId, bookingId, {
                                    bemerkung: annotationInput,
                                    tag1: dayOneChecked,
                                    tag2: dayTwoChecked,
                                    stuhl: chairsInput,
                                    tisch: tablesInput,
                                }).then(() => setUpdatedBookings(true));
                            } else {
                                updatedVortrag(userId, bookingId, {
                                    thema: topicInput,
                                    dauer: talkLengthInput,
                                    datum: dateInput,
                                    uhrzeit: startTimeInput,
                                }).then(() => setUpdatedBookings(true));
                            }
                        }}
                    >
                        Speichern
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default BookingListModal;
