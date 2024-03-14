"use client";

import React, { useEffect, useState } from "react";
import { createVortrag, createStand, getUserInfos } from "../actions";
import StandBookingForm from "../components/StandBookingForm";
import TalkBookingForm from "../components/TalkBookingForm";
import { useBookingStore } from "../store/booking-store";
import { useSession } from "next-auth/react";
import { useGeneralStore } from "../store/general-store";
import Link from "next/link";

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

        dayOneChecked,
        annotationInput,
        dayTwoChecked,
        tablesInput,
        chairsInput,

        setDayOneChecked,
        setDayTwoChecked,
        setAnnotationInput,
        setTablesInput,
        setChairsInput,

        topicInput,
        talkLengthInput,
        dateInput,
        startTimeInput,

        setTopicInput,
        setTalkLengthInput,
        setDateInput,
        setStartTimeInput,

        standOpen,
        setStandOpen,
        talkOpen,
        setTalkOpen,
    } = useBookingStore();

    const { setLastNotification, lastNotification } = useGeneralStore();

    const session = useSession();
    //@ts-ignore
    const role = session.data?.user?.rolle;

    const handleSubmit = async () => {
        try {
            //@ts-ignore
            const userId = parseInt(session.data?.user?.id);

            // Create Stand record
            const standResult = await createStand({
                benutzerId: userId,
                email: emailInput,
                ansprechpartner: contactNameInput,
                telefon: phoneInput,
                firma: firmInput,
                tag1: dayOneChecked,
                tag2: dayTwoChecked,
                bemerkung: annotationInput,
                tisch: tablesInput,
                stuhl: chairsInput,
            });

            if ("error" in standResult) {
                console.error("Error creating Stand:", standResult.error);
                if (!lastNotification) {
                    setLastNotification({
                        notificationType: "error",
                        message: "Buchen fehlgeschlagen!",
                    });
                }
            } else {
                setDayOneChecked(false);
                setDayTwoChecked(false);
                setAnnotationInput("");
                setTablesInput(0);
                setChairsInput(0);
                if (!lastNotification) {
                    setLastNotification({
                        notificationType: "success",
                        message: "Buchen erfolgreich!",
                    });
                }
            }

            // Create Vortrag record
            const vortragResult = await createVortrag({
                dauer: talkLengthInput,
                ansprechpartner: contactNameInput,
                firma: firmInput,
                thema: topicInput,
                benutzerId: userId,
                email: emailInput,
                datum: dateInput,
                uhrzeit: startTimeInput,
            });

            if ("error" in vortragResult) {
                console.error("Error creating Vortrag:", vortragResult.error);
                if (!lastNotification) {
                    setLastNotification({
                        notificationType: "error",
                        message: "Buchen fehlgeschlagen!",
                    });
                }
            } else {
                // Handle successful creation (e.g., show success message)
                setTopicInput("");
                setTalkLengthInput(15);
                setDateInput("");
                setStartTimeInput("");
                if (!lastNotification) {
                    setLastNotification({
                        notificationType: "success",
                        message: "Buchen erfolgreich!",
                    });
                }
            }
        } catch (error) {
            console.error("Error during record creation:", error);
            // Handle other errors as needed
        }
    };

    const fetchUserInfos = async () => {
        //@ts-ignore
        const data = await getUserInfos(parseInt(session.data?.user?.id));

        if (data === null || "error" in data) return;

        setFirmInput(data.firma || "");
        data.vorname && data.nachname
            ? setContactNameInput(`${data.vorname} ${data.nachname}`)
            : setContactNameInput("");
        setEmailInput(data.email);
        setPhoneInput(data.telefon || "");
    };

    useEffect(() => {
        if (session.status === "authenticated") fetchUserInfos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session]);

    return (
        <main className="flex h-[calc(100vh-64px)] bg-base-100 text-base-content flex-col items-center justify-center p-4 px-24 relative">
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
                <details
                    onToggle={(ev) =>
                        setStandOpen((ev.target as HTMLDetailsElement).open)
                    }
                    open={standOpen}
                    className={`collapse border border-primary bg-base-200 collapse-arrow my-2 text-center`}
                >
                    <summary className="collapse-title text-xl font-medium text-center">
                        Standinformationen ein- und ausklappen
                    </summary>
                    <div className="collapse-content">
                        <StandBookingForm className="w-full grow rounded-3xl" />
                    </div>
                </details>

                <details
                    onToggle={(ev) =>
                        setTalkOpen((ev.target as HTMLDetailsElement).open)
                    }
                    open={talkOpen}
                    className={`collapse border border-primary bg-base-200 collapse-arrow my-2 text-center`}
                >
                    <summary className="collapse-title text-xl font-medium">
                        Vortraginformationen ein- und ausklappen
                    </summary>
                    <div className="collapse-content">
                        <TalkBookingForm className="w-full grow rounded-3xl" />
                    </div>
                </details>
            </div>

            <div className="m-4 bottom-4 sticky flex flex-col items-center justify-center">
                {!role && (
                    <p className="my-1 mt-2 text-sm font-light">
                        Mit dem Klick auf senden stimmen Sie den
                        <Link
                            className="text-primary underline mx-1"
                            href={"/datenschutz"}
                        >
                            Datenschutzrichtlinien
                        </Link>
                        zu
                    </p>
                )}

                <button
                    className=" btn btn-wide btn-primary"
                    onClick={handleSubmit}
                >
                    Senden
                </button>
            </div>
        </main>
    );
}
