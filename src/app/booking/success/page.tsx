"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function BookingsSuccessPage() {
    const session = useSession();
    //@ts-ignore
    const role = session.data?.user?.rolle;

    return (
        <main className="bg-base-100 h-[calc(100vh-64px)] w-full py-10 px-20 gap-4 flex justify-center items-center">
            <div className="p-10 py-14 flex flex-col gap-y-8 justify-center items-center bg-base-200 rounded-3xl border border-primary shadow-md text-base-content max-w-[54rem]">
                <div className="divider divider-neutral">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-40 h-40 fill-success"
                    >
                        {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                </div>
                <h1 className=" text-primary text-4xl font-bold ">
                    Erfolgreiche Antragstellung
                </h1>
                {!role && (
                    <div className="px-4 rounded-md ">
                        <p className="text-lg mb-8">
                            Vielen Dank für Ihre Antragstellung! Ihre Anfrage
                            wurde erfolgreich bearbeitet. Eine E-Mail mit den
                            detaillierten Informationen zu Ihrem Antrag wurde an
                            die von Ihnen angegebene E-Mail-Adresse gesendet.
                        </p>
                        <p className="text-lg">
                            Bitte überprüfen Sie Ihr Postfach (einschließlich
                            des Spam-Ordners), um sicherzustellen, dass Sie die
                            E-Mail erhalten haben. In der E-Mail finden Sie auch
                            Anweisungen zur Stornierung des Antrags, falls dies
                            erforderlich sein sollte.
                        </p>
                    </div>
                )}

                {role === "user" && (
                    <>
                        <div className="px-4 rounded-md w-1/2">
                            <p className="text-lg mb-8">
                                Vielen Dank für Ihre Antragstellung! Ihre
                                Anfrage wurde erfolgreich bearbeitet.
                                Detaillierte Informationen zu Ihrem Antrag
                                finden Sie in ihrem Dashboard
                            </p>
                        </div>
                        <Link
                            href={"/dashboard"}
                            className="btn btn-primary mt-4"
                        >
                            zum Dashboard
                        </Link>
                    </>
                )}
            </div>
        </main>
    );
}
