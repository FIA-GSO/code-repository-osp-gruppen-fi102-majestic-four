import React from "react";

interface ITalkBookingForm {
    className?: string;
}

const TalkBookingForm: React.FC<ITalkBookingForm> = ({ className }) => {
    const startTime = new Date("2022-01-01T10:00:00");
    const endTime = new Date("2022-01-01T16:00:00");
    const interval = 15; // 15 minutes

    const generateOptions = () => {
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
                    />
                </label>
            </div>

            <div className="flex flex-col w-full items-center">
                {/* Datum */}
                <label className="form-control w-full max-w-xs">
                    <span className="label label-text">Datum</span>
                    <select className="select select-primary">
                        <option disabled>Tag auswählen</option>
                        <option value="26.01.2024">Freitag - 26.01.24</option>
                        <option value="27.01.2024">Samstag - 27.01.24</option>
                    </select>
                </label>

                {/* Uhrzeit */}
                <label className="form-control w-full max-w-xs">
                    <span className="label label-text">Uhrzeit</span>
                    <select className="select select-primary">
                        <option disabled>Startzeit auswählen</option>
                        {generateOptions()}
                    </select>
                </label>
            </div>
        </form>
    );
};

export default TalkBookingForm;
