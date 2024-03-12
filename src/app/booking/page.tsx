"use client";

import React from "react";
import { createVortrag, createStand } from "../actions";
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
        // Define states for StandBookingForm
        dayOneChecked,
        annotationInput,
        dayTwoChecked,
        tablesInput,
        chairsInput,
        // Define states for TalkBookingForm
        topicInput,
        talkLengthInput,
        dateInput,
        startTimeInput,
    } = useBookingStore();

    const handleSubmit = async () => {
        try {
            // Create Stand record
            const standResult = await createStand({
                email: emailInput,
                ansprechpartner: contactNameInput,
                telefon: phoneInput,
                firma: firmInput,
                tag1: dayOneChecked,
                tag2: dayTwoChecked,
                bemerkung: annotationInput,
                datum: "", // Provide the default date or customize as needed
                tisch: tablesInput,
                stuhl: chairsInput,
                benutzerId: 1, // Assuming firmaResult has the id field
            });

            if ("error" in standResult) {
                console.error("Error creating Stand:", standResult.error);
                return;
            }

            // Create Vortrag record
            const vortragResult = await createVortrag({
                dauer: talkLengthInput,
                ansprechpartner: contactNameInput,
                firma: firmInput,
                thema: topicInput,
                benutzerId: 1,
                email: emailInput,
                datum: dateInput,
                uhrzeit: startTimeInput,
            });

            if ("error" in vortragResult) {
                console.error("Error creating Vortrag:", vortragResult.error);
                return;
            }

            // Handle successful creation (e.g., show success message)
            console.log("Records created successfully!");
        } catch (error) {
            console.error("Error during record creation:", error);
            // Handle other errors as needed
        }
    };

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

            <button
                className="mt-8 bottom-4 btn btn-wide btn-primary sticky"
                onClick={handleSubmit}
            >
                Senden
            </button>
        </main>
    );
}
