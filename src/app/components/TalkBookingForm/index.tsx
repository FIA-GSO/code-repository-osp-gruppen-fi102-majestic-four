import { TDates, useBookingStore } from "@/app/store/booking-store";
import React from "react";

interface ITalkBookingForm {
    className?: string;
}
export const generateOptions = () => {
    const startTime = new Date("2022-01-01T10:00:00");
    const endTime = new Date("2022-01-01T16:00:00");
    const interval = 15; // 15 minutes

    const options = [];

    for (
        let time = startTime;
        time <= endTime;
        time.setMinutes(time.getMinutes() + interval)
    ) {
        const formattedTime = time.toLocaleTimeString("de-DE", {
            hour: "2-digit",
            minute: "2-digit",
        });
        options.push(
            <option key={formattedTime} value={formattedTime}>
                {formattedTime}
            </option>
        );
    }

    return options;
};

const TalkBookingForm: React.FC<ITalkBookingForm> = ({ className }) => {
    const {
        topicInput,
        setTopicInput,
        talkLengthInput,
        setTalkLengthInput,
        dateInput,
        setDateInput,
        startTimeInput,
        setStartTimeInput,
    } = useBookingStore();

    return (
        <form className={`${className || ""} flex justify-center p-4 gap-4`}>
            <div className="flex flex-col w-full items-center">
                {/* Thema */}
                <label className="form-control w-full max-w-xs">
                    <span className="label label-text">Vortragsthema</span>
                    <input
                        type="text"
                        placeholder="Über Welches Thema?"
                        className="input input-primary w-full max-w-xs"
                        value={topicInput}
                        onChange={(ev) => setTopicInput(ev.target.value)}
                    />
                </label>

                {/* Dauer */}
                <label className="form-control w-full max-w-xs">
                    <span className="label label-text">Vortragsdauer</span>
                    <input
                        type="number"
                        placeholder="Dauer eintragen"
                        className="input input-primary w-full max-w-xs"
                        min={15}
                        max={60}
                        step={15}
                        value={talkLengthInput}
                        onChange={(ev) =>
                            setTalkLengthInput(parseInt(ev.target.value) || 15)
                        }
                    />
                </label>
            </div>

            <div className="flex flex-col w-full items-center">
                {/* Datum */}
                <label className="form-control w-full max-w-xs">
                    <span className="label label-text">Datum</span>
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
                        <option value="26.01.2024">Freitag - 26.01.24</option>
                        <option value="27.01.2024">Samstag - 27.01.24</option>
                    </select>
                </label>

                {/* Uhrzeit */}
                <label className="form-control w-full max-w-xs">
                    <span className="label label-text">Uhrzeit</span>
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
                </label>
            </div>
        </form>
    );
};

export default TalkBookingForm;
