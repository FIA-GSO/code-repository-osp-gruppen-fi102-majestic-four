"use client";

import StandBookingForm from "../components/StandBookingForm";
import TalkBookingForm from "../components/TalkBookingForm";
import { useBookingStore } from "../store/booking-store";

export default function Booking() {
    const {
        firmInput,
        setFirmInput,
        contactNameInput,
        setContactNameInput,
        emailInput,
        setEmailInput,
        phoneInput,
        setPhoneInput,
    } = useBookingStore();

    return (
        <main className=" flex h-[calc(100vh-64px)] bg-base-100 flex-col items-center justify-center p-4 px-24 relative">
            <h3 className=" text-primary font-bold text-4xl py-2">
                Allgemeine Informationen
            </h3>
            <form className="flex flex-col w-full items-center p-4 gap-4">
                <div className="flex w-full justify-evenly">
                    {/* Firma */}
                    <label className="form-control w-full max-w-xs">
                        <span className="label label-text">Firma</span>
                        <input
                            type="text"
                            placeholder="Firma eingeben"
                            className="input input-primary w-full max-w-xs"
                            value={firmInput}
                            onChange={(ev) => setFirmInput(ev.target.value)}
                        />
                    </label>

                    {/* Ansprechpartner */}
                    <label className="form-control w-full max-w-xs">
                        <span className="label label-text">
                            Name des Ansprechpartners
                        </span>
                        <input
                            type="text"
                            placeholder="Name eingeben"
                            className="input input-primary w-full max-w-xs"
                            value={contactNameInput}
                            onChange={(ev) =>
                                setContactNameInput(ev.target.value)
                            }
                        />
                    </label>
                </div>

                <div className="flex w-full justify-evenly">
                    {/* Email */}
                    {true && (
                        <label className="form-control w-full max-w-xs">
                            <span className="label label-text">Email</span>
                            <input
                                type="email"
                                placeholder="Email eingeben"
                                className="input input-primary w-full max-w-xs"
                                value={emailInput}
                                onChange={(ev) =>
                                    setEmailInput(ev.target.value)
                                }
                            />
                        </label>
                    )}

                    {/* Telefon */}
                    <label className="form-control w-full max-w-xs">
                        <span className="label label-text">
                            Telefon (optional)
                        </span>
                        <input
                            type="text"
                            placeholder="Nummer eingeben"
                            className="input input-primary w-full max-w-xs"
                            value={phoneInput}
                            onChange={(ev) => setPhoneInput(ev.target.value)}
                        />
                    </label>
                </div>
            </form>
            <h3 className=" text-primary font-bold text-4xl py-2">
                Erweiterte Informationen
            </h3>
            <div className="w-full xl:flex xl:gap-20 xl:items-start">
                <details className="collapse border border-primary bg-base-200 collapse-arrow my-2 ">
                    <summary className="collapse-title text-xl font-medium text-center">
                        Standinformationen ein- und ausklappen
                    </summary>
                    <div className="collapse-content">
                        <StandBookingForm className="w-full grow rounded-3xl" />
                    </div>
                </details>

                <details className="collapse border border-primary bg-base-200 collapse-arrow my-2 text-center">
                    <summary className="collapse-title text-xl font-medium">
                        Vortraginformationen ein- und ausklappen
                    </summary>
                    <div className="collapse-content">
                        <TalkBookingForm className="w-full grow rounded-3xl" />
                    </div>
                </details>
            </div>

            <button className="mt-8 bottom-4 btn btn-wide btn-primary sticky">
                Senden
            </button>
        </main>
    );
}
