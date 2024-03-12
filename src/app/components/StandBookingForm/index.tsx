import { useBookingStore } from "@/app/store/booking-store";
import React from "react";

interface IStandBookingForm {
    className?: string;
}

const StandBookingForm: React.FC<IStandBookingForm> = ({ className }) => {
    const {
        annotationInput,
        setAnnotationInput,
        dayOneChecked,
        setDayOneChecked,
        dayTwoChecked,
        setDayTwoChecked,
        tablesInput,
        setTablesInput,
        chairsInput,
        setChairsInput,
    } = useBookingStore();
    return (
        <form className={`${className || ""} flex items-center p-2 gap-4`}>
            <div className="flex w-full flex-col items-center">
                {/* Bemerkung Wunsch */}
                <label className="form-control w-full max-w-xs">
                    <span className="label label-text">
                        Haben sie Bemerkungen oder Wünsche?
                    </span>
                    <input
                        type="text"
                        value={annotationInput}
                        onChange={(ev) => setAnnotationInput(ev.target.value)}
                        placeholder="Anmerkungen oder Wünsche"
                        className="input input-primary w-full max-w-xs"
                    />
                </label>

                {/* Tage der Daten */}
                <div className="flex h-20">
                    <label className="label cursor-pointer">
                        <input
                            type="checkbox"
                            className="checkbox checkbox-primary"
                            checked={dayOneChecked}
                            onChange={() => setDayOneChecked(!dayOneChecked)}
                        />
                        <span className="label-text mx-4">Tag 1</span>
                    </label>
                    <label className="label cursor-pointer">
                        <input
                            type="checkbox"
                            className="checkbox checkbox-primary"
                            checked={dayTwoChecked}
                            onChange={() => setDayTwoChecked(!dayTwoChecked)}
                        />
                        <span className="label-text mx-4">Tag 2</span>
                    </label>
                </div>
            </div>

            <div className="flex w-full flex-col items-center">
                {/* Anzahl Tische */}
                <label className="form-control w-full max-w-xs">
                    <span className="label label-text">Wie viele Tische?</span>
                    <input
                        type="number"
                        placeholder="Tischanzahl eingeben"
                        className="input input-primary w-full max-w-xs"
                        value={tablesInput}
                        onChange={(ev) =>
                            setTablesInput(parseInt(ev.target.value) || 0)
                        }
                    />
                </label>

                {/* Anzahl Stühle */}
                <label className="form-control w-full max-w-xs">
                    <span className="label label-text">Wie viele Stühle?</span>
                    <input
                        type="number"
                        placeholder="Stuhlanzahl eingeben"
                        className="input input-primary w-full max-w-xs"
                        value={chairsInput}
                        onChange={(ev) =>
                            setChairsInput(parseInt(ev.target.value) || 0)
                        }
                    />
                </label>
            </div>
        </form>
    );
};

export default StandBookingForm;
